package com.tc.mygames.exception;

public class MaximumGameTitleLimitException extends Exception {
    public MaximumGameTitleLimitException() {
        super("error.title.max.limit");
    }
}
