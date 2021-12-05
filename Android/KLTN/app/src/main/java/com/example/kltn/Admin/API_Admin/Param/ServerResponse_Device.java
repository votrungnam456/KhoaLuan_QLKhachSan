package com.example.kltn.Admin.API_Admin.Param;

import com.example.kltn.Models.Devices;
import com.example.kltn.Models.Room;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class ServerResponse_Device {
    @SerializedName("data")
    @Expose
    private Devices devices;

    public Devices getDevices() {
        return devices;
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
