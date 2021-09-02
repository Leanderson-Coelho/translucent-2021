package com.tc.mygames.domain;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.UUID;

@Data
@Getter
@Setter
@Document
public class Game implements Serializable {

    @Id
    private UUID id;

    private String title;

    private LocalDate completionDate;

    private String console;

    private LocalDate year;

    private String notes;

    private Boolean completed;

    public Game(String title, LocalDate completionDate, String console, LocalDate year, String notes, Boolean completed) {
        this.id = UUID.randomUUID();
        this.title = title;
        this.completionDate = completionDate;
        this.console = console;
        this.year = year;
        this.notes = notes;
        this.completed = completed;
    }
}
