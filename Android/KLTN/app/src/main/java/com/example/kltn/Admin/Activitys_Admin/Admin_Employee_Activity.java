package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.ImageView;

import com.example.kltn.Admin.Adapter_Admin.Admin_Adapter_Employee;
import com.example.kltn.Admin.Adapter_Admin.Admin_Adapter_Room;
import com.example.kltn.Employee.Activitys.Login_Activity;
import com.example.kltn.Models.Room;
import com.example.kltn.Models.User;
import com.example.kltn.R;

import java.util.List;

public class Admin_Employee_Activity extends AppCompatActivity {

    RecyclerView recyclerView;
    List<User> users = Login_Activity.users;
    ImageView admin_imgv_add_user;
    Admin_Adapter_Employee apdater;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_employee);
        mapping();
        event();
    }
    private void event() {
        LinearLayoutManager linearLayoutManager  = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(linearLayoutManager);
        apdater = new Admin_Adapter_Employee(users,this);
        recyclerView.setAdapter(apdater);
    }

    private void mapping() {
        admin_imgv_add_user = findViewById(R.id.admin_imgv_add_employee);
        recyclerView = findViewById(R.id.admin_recycle_employee);
    }
}