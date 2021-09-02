package com.tc.mygames.service;

import com.tc.mygames.domain.Game;
import com.tc.mygames.dto.GameDTO;
import com.tc.mygames.exception.GameTitleAlreadyExistsException;
import com.tc.mygames.repository.GameRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Logger;

@Service
@AllArgsConstructor
public class GameService {

    private GameRepository gameRepository;

    public Game save(Game game) throws GameTitleAlreadyExistsException {

        Game alreadyExists = gameRepository.findByTitle(game.getTitle());
        if (alreadyExists != null) {
            Logger.getLogger("TC.MYGAMES").info("Already exists one game with this title: " + alreadyExists.getTitle());
            throw new GameTitleAlreadyExistsException();
        }

        Game gameDocument = new Game(game.getTitle(), game.getCompletionDate(), game.getConsole(),
                game.getYear(), game.getNotes(), game.getCompleted());

        System.out.println("game:\n" + game.toString());

        return gameRepository.save(gameDocument);
    }

    public List<Game> findAll() {
        return gameRepository.findAll();
    }

}
