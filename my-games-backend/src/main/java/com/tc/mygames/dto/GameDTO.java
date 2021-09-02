package com.tc.mygames.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class GameDTO {

    private String title;

    private LocalDate completionDate;

    private String console;

    private LocalDate year;

    private String notes;

    private Boolean completed;
}
