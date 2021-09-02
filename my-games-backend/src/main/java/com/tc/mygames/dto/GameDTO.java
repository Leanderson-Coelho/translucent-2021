package com.tc.mygames.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.*;
import java.time.LocalDate;

@Data
@AllArgsConstructor
public class GameDTO {

    @NotEmpty(message = "error.invalid.title.not.empty")
    private String title;

    @PastOrPresent(message = "error.invalid.completionDate.not.future")
    private LocalDate completionDate;

    @NotEmpty(message = "error.invalid.console.not.empty")
    private String console;

    @NotNull(message = "error.invalid.year.not.null")
    private LocalDate year;

    private String notes;

    @NotNull(message = "error.invalid.completed.not.null")
    private Boolean completed;
}
