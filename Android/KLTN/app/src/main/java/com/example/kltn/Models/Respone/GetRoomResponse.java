package com.example.kltn.Models.Respone;

import com.example.kltn.Models.DetailRoom;
import com.google.gson.annotations.Expose;
import com.google.gson.annotations.SerializedName;

import java.util.List;

public class GetRoomResponse {
    @SerializedName("description")
    private String description;

    @SerializedName("housekeepingOrder")
    private String housekeepingOrder;

    @SerializedName("id")
    private String idRoom;

    @SerializedName("id_type_room")
    private String id_type_room;

    @SerializedName("nameEmployee")
    private String nameEmployee;

    @SerializedName("nameRoom")
    private String nameRoom;

    @SerializedName("nameTypeRoom")
    private String nameTypeRoom;

    @SerializedName("status")
    private int status;

    @SerializedName("details")
    @Expose
    private List<DetailRoom> roomList;

    public List<DetailRoom> getRoomList() {
        return roomList;
    }

    public int getStatus() {
        return status;
    }

    public String getDescription() {
        return description;
    }

    public String getHousekeepingOrder() {
        return housekeepingOrder;
    }

    public String getIdRoom() {
        return idRoom;
    }

    public String getId_type_room() {
        return id_type_room;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public String getNameRoom() {
        return nameRoom;
    }

    public String getNameTypeRoom() {
        return nameTypeRoom;
    }
}
