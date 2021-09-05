package com.tc.mygames;

import com.tc.mygames.domain.Game;
import com.tc.mygames.dto.GameDTO;

import java.time.LocalDate;
import java.util.ArrayList;

public class Util {

    public static ArrayList<Game> getFakeListGames() {
        ArrayList<Game> games = new ArrayList<>();
        games.add(new Game("Devil May Cry", null, "XBOX ONE", LocalDate.of(2001, 8, 03), "", false));
        games.add(new Game("Dreadlands", LocalDate.of(2021, 8, 25), "PS2", LocalDate.of(2019, 12, 04), "", false));
        games.add(new Game("Civilization V", null, "PC", LocalDate.of(2010, 9, 21), "", false));
        return games;
    }


    public static GameDTO fakeSaveGame() {
        return new GameDTO("Civilization V", null, "PC", LocalDate.of(2010, 9, 21), "", false);
    }

    public static GameDTO invalidGame() {
        return new GameDTO("", null, "PC", LocalDate.of(2010, 9, 21), "", false);
    }

    public static Game fakeSavedGame() {
        return new Game("Civilization V", null, "PC", LocalDate.of(2010, 9, 21), "", false);
    }
}
