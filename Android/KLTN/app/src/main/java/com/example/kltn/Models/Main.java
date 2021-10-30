package com.example.kltn.Models;

public class Main {
    public Float getTemp() {
        return temp;
    }
    public void setTemp(Float temp) {
        this.temp = temp;
    }
    public Float getTemp_min() {
        return temp_min;
    }
    public void setTemp_min(Float temp_min) {
        this.temp_min = temp_min;
    }
    public Float getTemp_max() {
        return temp_max;
    }
    public void setTemp_max(Float temp_max) {
        this.temp_max = temp_max;
    }
    public Float getPressure() {
        return pressure;
    }
    public void setPressure(Float pressure) {
        this.pressure = pressure;
    }
    public Main(Float temp, Float temp_min, Float temp_max, Float pressure) {
        this.temp = temp;
        this.temp_min = temp_min;
        this.temp_max = temp_max;
        this.pressure = pressure;
    }
    Float temp,temp_min,temp_max,pressure;
}
