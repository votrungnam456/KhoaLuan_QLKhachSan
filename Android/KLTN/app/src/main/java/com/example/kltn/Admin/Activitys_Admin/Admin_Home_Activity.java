package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.kltn.Employee.Activitys.Home_Activity;
import com.example.kltn.Employee.Activitys.Login_Activity;
import com.example.kltn.R;

public class Admin_Home_Activity extends AppCompatActivity {

    TextView t2,t3,t4,t5,t6,t7,cn,ad_name_employee,location,nhietdo;
    ImageView ad_emp, ad_devices, ad_service, ad_room, ad_money, ad_tablet, ad_logout;
    public static String MyUSER = "MYUSER";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_home);
        mapping();
        event();
    }

    private void mapping() {
        t2 = findViewById(R.id.admin_monday);
        t3 = findViewById(R.id.admin_tuesday);
        t4 = findViewById(R.id.admin_wendeday);
        t5 = findViewById(R.id.admin_thurday);
        t6 = findViewById(R.id.admin_friday);
        t7 = findViewById(R.id.admin_satsuday);
        cn = findViewById(R.id.admin_sunday);
        location = findViewById(R.id.admin_location);
        nhietdo = findViewById(R.id.nhietdo);
        ad_emp = findViewById(R.id.admin_imgv_employee);
        ad_devices = findViewById(R.id.admin_imgv_devices);
        ad_service = findViewById(R.id.admin_imgv_services);
        ad_room = findViewById(R.id.admin_imgv_room);
        ad_money = findViewById(R.id.admin_imgv_money);
        ad_tablet = findViewById(R.id.admin_imgv_tablet);
        ad_logout = findViewById(R.id.admin_imgv_logout);
        ad_name_employee = findViewById(R.id.admin_txt_name_employee);
    }

    private void event() {
        ad_logout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(deleteShare())
                {
                    Intent intent = new Intent(Admin_Home_Activity.this, Login_Activity.class);
                    startActivity(intent);
                    finish();
                }
            }
        });
    }

    private boolean deleteShare()
    {
        SharedPreferences.Editor editor = getSharedPreferences(MyUSER, Context.MODE_PRIVATE).edit();
        editor.clear();
        editor.commit();
        SharedPreferences sharedPreferences = getSharedPreferences(MyUSER, Context.MODE_PRIVATE);
        String name = sharedPreferences.getString("FullName", "null");
        if(name == "null")
        {
            return  true;
        }
        return false;
    }
}