package com.example.kltn.Admin.API_Admin.Param;

public class Response_Device {
    String nameHotelDevice;
    int quantity;

    public String getNameHotelDevice() {
        return nameHotelDevice;
    }

    public void setNameHotelDevice(String nameHotelDevice) {
        this.nameHotelDevice = nameHotelDevice;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    int price;
}
