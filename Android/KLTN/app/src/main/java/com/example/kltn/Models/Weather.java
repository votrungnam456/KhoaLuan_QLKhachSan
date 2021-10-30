package com.example.kltn.Models;

public class Weather {
    String main;

    public String getMain() {
        return main;
    }

    public void setMain(String main) {
        this.main = main;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    String description;

    public Weather(String main, String description) {
        this.main = main;
        this.description = description;
    }
}
