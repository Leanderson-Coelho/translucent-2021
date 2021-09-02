package com.tc.mygames.exception;

public enum OperationType {
    SAVE("save"),
    FIND_ALL("find.all");

    private String type;

    public String getType() {
        return this.type;
    }

    OperationType(String type) {
        this.type = type;
    }
}
