package com.tc.mygames.controller;

import com.tc.mygames.domain.Game;
import com.tc.mygames.dto.GameDTO;
import com.tc.mygames.exception.GameTitleAlreadyExistsException;
import com.tc.mygames.service.GameService;
import com.tc.mygames.util.ErrorResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.awt.*;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

@RestController
@RequestMapping("/game")
@AllArgsConstructor
public class GameController {

    private GameService gameService;

    @PostMapping
    public ResponseEntity save(@RequestBody @Valid Game game) {
        try {
            return ResponseEntity.ok(gameService.save(game));
        } catch (GameTitleAlreadyExistsException e) {
            return ResponseEntity.badRequest().body(ErrorResponse.build(e.getMessage()));
        }
    }

    @GetMapping
    public ResponseEntity<List<Game>> findAll() {
        Logger.getLogger("LEANDERSON").warning("AAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
        return ResponseEntity.ok(gameService.findAll());
    }
}
