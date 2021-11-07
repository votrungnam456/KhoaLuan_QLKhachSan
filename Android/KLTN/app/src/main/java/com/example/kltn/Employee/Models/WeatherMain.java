package com.example.kltn.Employee.Models;

import com.example.kltn.Employee.Models.Main;
import com.example.kltn.Employee.Models.Weather;

import java.util.List;

public class WeatherMain {
    private List<Weather> weather;
    private Main main;

    public List<Weather> getWeather() {
        return weather;
    }

    public void setWeather(List<Weather> weather) {
        this.weather = weather;
    }

    public Main getMain() {
        return main;
    }

    public void setMain(Main main) {
        this.main = main;
    }
}
