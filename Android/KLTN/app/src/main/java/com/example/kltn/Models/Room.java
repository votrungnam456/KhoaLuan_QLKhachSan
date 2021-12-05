package com.example.kltn.Models;

import com.google.gson.annotations.SerializedName;

public class Room {
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

    public Room(String description, String housekeepingOrder, String idRoom, String id_type_room, String nameEmployee, String nameRoom, String nameTypeRoom, int status) {
        this.description = description;
        this.housekeepingOrder = housekeepingOrder;
        this.idRoom = idRoom;
        this.id_type_room = id_type_room;
        this.nameEmployee = nameEmployee;
        this.nameRoom = nameRoom;
        this.nameTypeRoom = nameTypeRoom;
        this.status = status;
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
