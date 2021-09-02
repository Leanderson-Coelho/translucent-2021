package com.tc.mygames.exception;

public class GameTitleAlreadyExistsException extends Exception {

    public GameTitleAlreadyExistsException() {
        super("error.title.already.exists");
    }

}
