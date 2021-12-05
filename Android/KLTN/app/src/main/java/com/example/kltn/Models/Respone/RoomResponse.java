package com.example.kltn.Models.Respone;

import com.example.kltn.Models.DetailRoom;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

public class RoomResponse {
    @SerializedName("details")
    @Expose
    private DetailRoom room_details;

    public DetailRoom getRoom_details() {
        return room_details;
    }

    @Override
    public String toString() {
        return "RoomResponse{" +
                "room_details=" + room_details +
                '}';
    }
}
