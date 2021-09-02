package com.tc.mygames.service;

import com.tc.mygames.domain.Game;
import com.tc.mygames.dto.GameDTO;
import com.tc.mygames.exception.*;
import com.tc.mygames.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.logging.Logger;

@Service
@AllArgsConstructor
public class GameService {

    private GameRepository gameRepository;

    public Game save(GameDTO gameDTO) throws GameTitleAlreadyExistsException, FailOperationException, MinimumGameYearLimitException, MaximumGameTitleLimitException {
        try {
            Game alreadyExists = gameRepository.findByTitle(gameDTO.getTitle());
            if (alreadyExists != null) {
                Logger.getLogger("TC.MYGAMES").info("Already exists one game with this title: " + alreadyExists.getTitle());
                throw new GameTitleAlreadyExistsException();
            }

            if (gameDTO.getYear().isBefore(LocalDate.of(1970, 01, 01))) {
                Logger.getLogger("TC.MYGAMES").info("Minimum limit for game year reached");
                throw new MinimumGameYearLimitException();
            }

            if (gameDTO.getTitle().length() > 100) {
                Logger.getLogger("TC.MYGAMES").info("Maximum game title limit reached");
                throw new MaximumGameTitleLimitException();
            }

            Game gameDocument = new Game(gameDTO.getTitle(), gameDTO.getCompletionDate(), gameDTO.getConsole(), gameDTO.getYear(), gameDTO.getNotes(), gameDTO.getCompleted());

            return gameRepository.save(gameDocument);
        } catch (GameTitleAlreadyExistsException | MinimumGameYearLimitException | MaximumGameTitleLimitException e) {
            throw e;
        } catch (Exception e) {
            throw new FailOperationException(OperationType.SAVE.getType());
        }

    }

    public List<Game> findAll() throws FailOperationException {
        try {
            return gameRepository.findAll();
        } catch (Exception e) {
            throw new FailOperationException(OperationType.FIND_ALL.getType());
        }
    }

}
