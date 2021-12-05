package com.example.kltn.Admin.API_Admin.Param;

import com.example.kltn.Models.Devices;
import com.example.kltn.Models.User;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class SeverResponse_Employee {
    @SerializedName("data")
    @Expose
    private User user;
    int code;
    String message;

    public User getUserResponse() {
        return user;
    }

    public int getCode() {
        return code;
    }

    public String getMessageUser() {
        return message;
    }
}
