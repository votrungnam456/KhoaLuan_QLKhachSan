package com.example.kltn.Models;

public class Services {
    private String id;
    private String nameService;
    private String price;

/*    public Services(String id, String nameService, String price) {
        this.id = id;
        this.nameService = nameService;
        this.price = price;
    }

    public Services() {
    }*/

    public void setIdS(String id) {
        this.id = id;
    }

    public void setNameService(String nameService) {
        this.nameService = nameService;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getIdServices() {
        return id;
    }

    public String getNameService() {
        return nameService;
    }

    public String getPrice() {
        return price;
    }
}
