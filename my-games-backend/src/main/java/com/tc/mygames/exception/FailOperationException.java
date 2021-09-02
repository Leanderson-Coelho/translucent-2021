package com.tc.mygames.exception;


public class FailOperationException extends Exception {
    public FailOperationException(String operationType) {
        super("error.fail.on.operation." + operationType);
    }
}
