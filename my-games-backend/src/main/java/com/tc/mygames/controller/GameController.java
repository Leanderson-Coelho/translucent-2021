package com.tc.mygames.controller;

import com.tc.mygames.dto.GameDTO;
import com.tc.mygames.exception.FailOperationException;
import com.tc.mygames.exception.GameTitleAlreadyExistsException;
import com.tc.mygames.exception.MaximumGameTitleLimitException;
import com.tc.mygames.exception.MinimumGameYearLimitException;
import com.tc.mygames.service.GameService;
import com.tc.mygames.util.ErrorResponse;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.HashMap;

@RestController
@RequestMapping("game")
@AllArgsConstructor
@CrossOrigin()
public class GameController {

    private GameService gameService;

    @PostMapping
    public ResponseEntity save(@RequestBody @Valid GameDTO gameDTO) {
        try {
            return ResponseEntity.ok(gameService.save(gameDTO));
        } catch (GameTitleAlreadyExistsException | FailOperationException | MinimumGameYearLimitException | MaximumGameTitleLimitException e) {
            return buildOneError(e);
        }
    }

    @GetMapping
    public ResponseEntity findAll() {
        try {
            return ResponseEntity.ok(gameService.findAll());
        } catch (FailOperationException e) {
            return buildOneError(e);
        }
    }

    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public HashMap<String, ArrayList<String>> handleValidationExceptions(MethodArgumentNotValidException e) {
        ArrayList<String> errorsResponse = new ArrayList<>();
        e.getBindingResult().getAllErrors().forEach((error) -> errorsResponse.add(error.getDefaultMessage()));
        return ErrorResponse.buildManyErrors(errorsResponse);
    }


    @ResponseStatus(value = HttpStatus.BAD_REQUEST)
    @ExceptionHandler(HttpMessageNotReadableException.class)
    public HashMap<String, ArrayList<String>> handleNoBody() {
        return ErrorResponse.buildOneError("error.invalid.body.not.null");
    }

    private ResponseEntity buildOneError(Exception e) {
        return ResponseEntity.badRequest().body(ErrorResponse.buildOneError(e.getMessage()));
    }
}
