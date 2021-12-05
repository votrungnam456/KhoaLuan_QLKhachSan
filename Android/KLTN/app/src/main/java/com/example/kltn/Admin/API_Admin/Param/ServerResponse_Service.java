package com.example.kltn.Admin.API_Admin.Param;

import com.example.kltn.Models.Room;
import com.example.kltn.Models.Services;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class ServerResponse_Service {
    @SerializedName("data")
    @Expose
    private Services service;

    public Services getServiceadd() {
        return service;
    }

    public int getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }

    int code;
    String message;
}
