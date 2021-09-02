package com.tc.mygames.exception;

public class MinimumGameYearLimitException extends Exception {
    public MinimumGameYearLimitException() {
        super("error.year.min.limit");
    }
}
