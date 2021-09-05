package com.tc.mygames;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.tc.mygames.controller.GameController;
import com.tc.mygames.domain.Game;
import com.tc.mygames.service.GameService;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.ArrayList;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.hamcrest.Matchers.*;



@WebMvcTest(GameController.class)
public class GameTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GameService gameService;

    @Autowired
    ObjectMapper mapper;



    @Test
    @DisplayName(value = "Find all games and return 0")
    public void findAllGamesWithoutGames() throws Exception {
        ArrayList<Game> games = new ArrayList<>();

        when(gameService.findAll()).thenReturn(games);

        this.mockMvc.perform(get("/game")).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(0)));
    }

    @Test
    @DisplayName(value = "Find all games and return 3")
    public void findAllGamesWithGames() throws Exception {

        when(gameService.findAll()).thenReturn(Util.getFakeListGames());

        this.mockMvc.perform(get("/game")).andExpect(status().isOk()).andExpect(jsonPath("$", hasSize(3)));
    }

    @Test
    @DisplayName(value = "Save a game and return your data with the id")
    public void saveGame() throws Exception {
        when(gameService.save(Util.fakeSaveGame())).thenReturn(Util.fakeSavedGame());

        MockHttpServletRequestBuilder moockRequest = MockMvcRequestBuilders.post("/game")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(Util.fakeSaveGame()));

        mockMvc.perform(moockRequest).andExpect(status().isOk()).andExpect(jsonPath("$.id", notNullValue()));
    }

    @Test()
    @DisplayName(value = "Save a game with invalid data")
    public void saveInvalidGame() throws Exception  {

        MockHttpServletRequestBuilder moockRequest = MockMvcRequestBuilders.post("/game")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .content(this.mapper.writeValueAsString(Util.invalidGame()));

        mockMvc.perform(moockRequest).andExpect(status().isBadRequest()).andExpect(jsonPath("$.errors",
                notNullValue()));
    }
}
