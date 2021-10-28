package com.example.kltn.Models;

public class Room {
    private String id;
    private String description;
    private String housekeepingOrder;
    private String nameEmployee;
    private String nameRoom;

    public Room(String id, String description, String housekeepingOrder, String nameEmployee, String nameRoom, String nameTypeRoom, int status) {
        this.id = id;
        this.description = description;
        this.housekeepingOrder = housekeepingOrder;
        this.nameEmployee = nameEmployee;
        this.nameRoom = nameRoom;
        this.nameTypeRoom = nameTypeRoom;
        this.status = status;
    }

    private String nameTypeRoom;
    private int status;

    public String getIdRoom() {
        return id;
    }

    public void setIdRoom(String id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHousekeepingOrder() {
        return housekeepingOrder;
    }

    public void setHousekeepingOrder(String housekeepingOrder) {
        this.housekeepingOrder = housekeepingOrder;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public String getNameRoom() {
        return nameRoom;
    }

    public void setNameRoom(String nameRoom) {
        this.nameRoom = nameRoom;
    }

    public String getNameTypeRoom() {
        return nameTypeRoom;
    }

    public void setNameTypeRoom(String nameTypeRoom) {
        this.nameTypeRoom = nameTypeRoom;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
