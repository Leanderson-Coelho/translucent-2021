package com.tc.mygames.util;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ErrorResponse {

    public static HashMap<String, ArrayList<String>> buildOneError(String error) {
        HashMap<String, ArrayList<String>> errorResponse = new HashMap<>();
        ArrayList<String> errors = new ArrayList<>();
        errors.add(error);
        errorResponse.put("errors", errors);
        return errorResponse;
    }


    public static HashMap<String, ArrayList<String>> buildManyErrors(ArrayList<String> errors) {
        HashMap<String, ArrayList<String>> errorResponse = new HashMap<>();
        errorResponse.put("errors", errors);
        return errorResponse;
    }
}
