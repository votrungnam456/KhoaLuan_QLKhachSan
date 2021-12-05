package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.kltn.Employee.Activitys.Change_Pass_Activity;
import com.example.kltn.Employee.Activitys.Info_Emp_Activity;
import com.example.kltn.R;

public class Admin_Profile_Activity extends AppCompatActivity {

    TextView txt_Change_Pass;
    TextView txt_Name;
    TextView txt_Email;
    TextView txt_DT;
    TextView txt_Gender;
    TextView txt_CCCD;
    TextView txt_Address;
    TextView txt_NameRole;
    Button btn_Home;
    public static String MyUSER = "MYUSER";

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_profile);
        mapping();
        event();
        getData();
    }
    private void getData() {
        SharedPreferences sharedPreferences = getSharedPreferences(MyUSER, Context.MODE_PRIVATE);
        String name = sharedPreferences.getString("FullName", "null");
        String id = sharedPreferences.getString("id", "null");
        String phone = sharedPreferences.getString("PhoneNumber", "null");
        String cmnd = sharedPreferences.getString("CMND", "null");
        String email = sharedPreferences.getString("Email", "null");
        String address = sharedPreferences.getString("Address", "null");
        String gender = sharedPreferences.getString("Gender", "null");
        String nameRole = sharedPreferences.getString("Role", "null");
        if(name != null)
        {
            txt_Name.setText(name);;
            txt_DT.setText(phone);;
            txt_CCCD.setText(cmnd);;
            txt_Email.setText(email);;
            txt_Address.setText(address);;
            txt_Gender.setText(gender);;
            txt_NameRole.setText(nameRole);
        }
    }
    private void mapping() {
        txt_Change_Pass = findViewById(R.id.admin_text_changePass);
        txt_Name = findViewById(R.id.admin_tv_Name);
        txt_Email = findViewById(R.id.admin_textView_email);
        txt_DT = findViewById(R.id.admin_txt_mobile);
        txt_Gender = findViewById(R.id.admin_txt_Gender);
        txt_CCCD = findViewById(R.id.admin_txt_card);
        txt_Address = findViewById(R.id.admin_txt_address);
        txt_NameRole = findViewById(R.id.admin_txt_nameRole);
        btn_Home = findViewById(R.id.admin_button_Edit);
    }

    private void event() {
        txt_Change_Pass.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Admin_Profile_Activity.this, Change_Pass_Activity.class);
                startActivity(intent);
                finish();
            }
        });
    }
}