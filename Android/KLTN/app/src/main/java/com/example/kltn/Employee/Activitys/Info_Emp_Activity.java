package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import com.example.kltn.R;

public class Info_Emp_Activity extends AppCompatActivity {

    TextView txt_Change_Pass;
    TextView txt_Name;
    TextView txt_Email;
    TextView txt_DT;
    TextView txt_Gender;
    TextView txt_CCCD;
    TextView txt_Address;
    TextView txt_Phone_Local;
    Button btn_Home;
    public static String MyUSER = "MYUSER";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_info_emp);
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

        if(name != null)
        {
            txt_Name.setText(name);;
            txt_DT.setText(phone);;
            txt_CCCD.setText(cmnd);;
            txt_Email.setText(email);;
            txt_Address.setText(address);;
            txt_Gender.setText(gender);;
            txt_Phone_Local.setText("0977266502");
        }
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    private void mapping() {
        txt_Change_Pass = findViewById(R.id.text_changePass);
        txt_Name = findViewById(R.id.textView_Name);
        txt_Email = findViewById(R.id.textView_email);
        txt_DT = findViewById(R.id.txt_mobile);
        txt_Gender = findViewById(R.id.txt_Gender);
        txt_CCCD = findViewById(R.id.txt_card);
        txt_Address = findViewById(R.id.txt_address);
        txt_Phone_Local = findViewById(R.id.txt_tell);
        btn_Home = findViewById(R.id.button_Home);
    }

    private void event() {
        txt_Change_Pass.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Info_Emp_Activity.this, Change_Pass_Activity.class);
                startActivity(intent);
            }
        });
        btn_Home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /*Intent intent = new Intent(Info_Emp_Activity.this, Home_Activity.class);
                startActivity(intent);*/
                onBackPressed();
            }
        });
    }
}