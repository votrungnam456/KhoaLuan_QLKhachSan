package com.example.kltn.Models;

import com.google.gson.annotations.SerializedName;

public class Devices {
    private boolean delete;
    @SerializedName("id")
    private String id_Device;

    public boolean isDelete() {
        return delete;
    }

    public void setDelete(boolean delete) {
        this.delete = delete;
    }

    public String getId_Device() {
        return id_Device;
    }

    public void setId_Device(String id_Device) {
        this.id_Device = id_Device;
    }

    public String getNameHotelDevice() {
        return nameHotelDevice;
    }

    public void setNameHotelDevice(String nameHotelDevice) {
        this.nameHotelDevice = nameHotelDevice;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    private String nameHotelDevice;
    private int price;
    private int quantity;
    private boolean status;
}
