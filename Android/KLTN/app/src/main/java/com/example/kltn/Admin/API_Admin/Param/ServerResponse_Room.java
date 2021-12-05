package com.example.kltn.Admin.API_Admin.Param;

import com.example.kltn.Models.Room;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class ServerResponse_Room {
    int code;
    String message;

    public int getCode() {
        return code;
    }

    public String getMessageData() {
        return message;
    }

    public Room getRoomData() {
        return room;
    }

    @SerializedName("data")
    @Expose
    private Room room;
}
