package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.ListView;

import com.example.kltn.Employee.Adapter.ServiceAdapter;
import com.example.kltn.Models.Services;
import com.example.kltn.R;

import java.util.List;

public class Service_Activity extends AppCompatActivity {

    ListView lv_list_service;
    List<Services> servicesList = Login_Activity.ListServices;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_service);
        mapping();
        event();
        setAdapter();
        changeBackgoundItem();
    }

    private void changeBackgoundItem() {
    }

    private void setAdapter() {
        ServiceAdapter roomAdapter = new ServiceAdapter(servicesList,this,R.layout.line_listview_devieces);
        lv_list_service.setAdapter(roomAdapter);
    }

    private void event() {
    }

    private void mapping() {
        lv_list_service = findViewById(R.id.lv_list_service);
    }
}