package com.tc.mygames.util;

import java.util.HashMap;

public class ErrorResponse {

    public static HashMap<String, String> build(String message) {
        HashMap<String, String> errorResponse = new HashMap<>();
        errorResponse.put("error", message);
        return errorResponse;
    }
}
