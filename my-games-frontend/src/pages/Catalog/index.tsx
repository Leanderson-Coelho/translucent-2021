import React, { useEffect, useState, ChangeEvent } from 'react';
import HeaderContentTemplate from '../../components/HeaderContentTemplate';
import GameCard from '../../components/GameCard';
import {
  Fab,
  Grid,
  CircularProgress,
  InputBase,
  Card,
  MenuItem,
  IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './style';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { PATHS } from '../../Routes';
import { RootState } from '../../redux';
import Game from '../../model/Game';
import { fetchGames } from '../../redux/game/actionCreators';
import FeedbackError from '../../components/FeedbackError';
import { BehaviorSubject, map, debounceTime } from 'rxjs';
import i18n from '../../config/i18n';
import CancelIcon from '@material-ui/icons/Cancel';

const subject$ = new BehaviorSubject('');

const Catalog = () => {
  const style = useStyles();
  const router = useHistory();
  const dispatch = useDispatch();
  const games = useSelector((state: RootState) => state.game.data);
  const gamesLoading = useSelector((state: RootState) => state.game.loading);
  const coldList = useSelector((state: RootState) => state.game.coldList);
  const [suggestions, setSuggestions] = useState<Game[]>([]);
  const [search, setSearch] = useState<String>('');
  const [shouldShowSuggestions, setShouldShowSuggestions] =
    useState<Boolean>(false);
  const [selectedSuggestion, setSelectedSuggestion] = useState<Game[]>([]);
  const [showSelectSuggestion, setShowSelectSuggestion] = useState<Boolean>();

  useEffect(() => {
    if (games.length === 0 || coldList) {
      dispatch(fetchGames());
    }
  }, []);

  useEffect(() => {
    setShouldShowSuggestions(search !== '' && selectedSuggestion.length === 0);
  }, [suggestions, search]);

  const filterGameByTitle = (value: string) =>
    games.filter((game) => {
      if (game.title && game.title.toLocaleLowerCase().search(value) > -1) {
        return true;
      }
      return false;
    });

  useEffect(() => {
    // start sub only with games
    if (games.length > 0) {
      const subs = subject$
        .pipe(
          debounceTime(500),
          map((value) => value.trim().toLocaleLowerCase()),
          map((value) => filterGameByTitle(value)),
          map((gamesFiltered) => gamesFiltered.slice(0, 5)),
        )
        .subscribe((value) => setSuggestions(value));

      return () => subs.unsubscribe();
    }
    return () => null;
  }, [games]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearch(value);
    subject$.next(value);
  };

  const handleSelection = (game: Game) => {
    setSelectedSuggestion([game]);
    setShowSelectSuggestion(true);
    setSearch(game.title || '');
    setShouldShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSelectedSuggestion([]);
    setShowSelectSuggestion(false);
    setSearch('');
  };

  const renderGamesFrom = (gamesToRender: Game[]) =>
    gamesToRender.map((game: Game) => (
      <Grid
        key={`${game.id}`}
        item
        xs={12}
        sm={6}
        md={4}
        className={style.item}
      >
        <GameCard
          completionDate={game.completionDate}
          notes={game.notes}
          title={game.title}
          year={game.year}
          console={game.console}
          completed={game.completed}
        />
      </Grid>
    ));

  return (
    <HeaderContentTemplate>
      <>
        <Card classes={{ root: style.search }}>
          <InputBase
            data-testid='search-input'
            value={search}
            onChange={handleChange}
            classes={{ root: style.inputBase }}
            placeholder={i18n.t('catalog.searchLabel')}
          />
          <IconButton
            data-testid='search-clear-button'
            onClick={handleClearSearch}
          >
            <CancelIcon />
          </IconButton>
        </Card>
        <div>
          {shouldShowSuggestions &&
            suggestions.map((game: Game) => (
              <MenuItem
                onClick={() => handleSelection(game)}
                key={`${game.id}-menu-item`}
              >
                {game.title}
              </MenuItem>
            ))}
        </div>
        <FeedbackError type='FETCH' severity='warning' />
        {gamesLoading && <CircularProgress className={style.loading} />}
        <Grid container spacing={10} className={style.cardsContainer}>
          {showSelectSuggestion
            ? renderGamesFrom(selectedSuggestion)
            : renderGamesFrom(games)}
        </Grid>
        <Fab className={style.floatingButton} size='large' color='primary'>
          <AddIcon onClick={() => router.push(PATHS.FORM)} />
        </Fab>
      </>
    </HeaderContentTemplate>
  );
};

export default Catalog;
