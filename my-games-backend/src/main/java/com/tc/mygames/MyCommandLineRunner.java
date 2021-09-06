package com.tc.mygames;

import com.tc.mygames.domain.Game;
import com.tc.mygames.repository.GameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class MyCommandLineRunner implements CommandLineRunner {

    @Autowired
    private GameRepository gameRepository;

    @Override
    public void run(String... args) throws Exception {
        Game game1 = new Game("Grand Theft Auto V", LocalDate.of(2021, 9, 04), "PC", LocalDate.of(2013, 9, 17),
                "Grand" +
                " Theft Auto V é um jogo eletrônico de ação-aventura desenvolvido pela Rockstar North e publicado " +
                "pela Rockstar Games.", true);

        Game game2 = new Game("Sea of Thieves", LocalDate.of(2021, 6, 10), "XBOX ONE", LocalDate.of(2020, 6, 10),
                "Sea of Thieves é um jogo eletrônico de ação-aventura produzido pela Rare e publicado pela Xbox Game Studios exclusivamente para Xbox One e Windows 10, sendo lançado em 20 de março de 2018.", true);

        gameRepository.save(game1);
        gameRepository.save(game2);
    }
}
