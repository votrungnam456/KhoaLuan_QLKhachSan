package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Employee.Activitys.Login_Activity;
import com.example.kltn.Models.DetailRoom;
import com.example.kltn.Models.Devices;
import com.example.kltn.Models.Respone.GetRoomResponse;
import com.example.kltn.Models.Room;
import com.example.kltn.Models.Services;
import com.example.kltn.Models.Type_Room;
import com.example.kltn.Models.User;
import com.example.kltn.R;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Home_Activity extends AppCompatActivity {

    TextView t2,t3,t4,t5,t6,t7,cn,ad_name_employee,location,nhietdo;
    ImageView ad_emp, ad_devices, ad_service, ad_room, ad_money, ad_tablet, ad_logout, ad_profile;
    boolean doubleBackToExitPressedOnce = false;
    // static
    public static List<DetailRoom> detailRooms;
    public static String MyUSER = "MYUSER";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_home);
        mapping();
        event();
        get_Name_EMP();
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
        ad_profile = findViewById(R.id.user_profile);
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
        ad_emp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent(Admin_Home_Activity.this, Admin_Employee_Activity.class);
                        startActivity(intent);
                    }
                },500);
            }
        });
        ad_devices.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent(Admin_Home_Activity.this, Admin_Device_Activity.class);
                        startActivity(intent);
                    }
                },500);
            }
        });
        ad_money.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent(Admin_Home_Activity.this, Admin_Money_Activity.class);
                        startActivity(intent);
                    }
                },500);
            }
        });
        ad_room.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent(Admin_Home_Activity.this, Admin_Room_Activity.class);
                        startActivity(intent);
                    }
                },500);
            }
        });
        ad_service.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent(Admin_Home_Activity.this, Admin_Service_Activity.class);
                        startActivity(intent);
                    }
                },500);
            }
        });
        ad_tablet.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent(Admin_Home_Activity.this, Admin_Tablet_Activity.class);
                        startActivity(intent);
                    }
                },500);
            }
        });
        ad_profile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        Intent intent = new Intent(Admin_Home_Activity.this, Admin_Profile_Activity.class);
                        startActivity(intent);
                    }
                },500);
            }
        });
    }

    private boolean deleteShare() {
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

     private void get_Name_EMP() {
         Intent intent = getIntent();
         if (intent.getExtras() != null) {
             String nameEmployee = intent.getStringExtra("name");
             ad_name_employee.setText("Hi " + nameEmployee);
         }
     }

    @Override
    public void onBackPressed() {
        if (doubleBackToExitPressedOnce) {
            super.onBackPressed();
            return;
        }

        this.doubleBackToExitPressedOnce = true;
        Toast.makeText(Admin_Home_Activity.this, "Please click BACK again to exit", Toast.LENGTH_LONG).show();

        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() {

            @Override
            public void run() {
                doubleBackToExitPressedOnce = false;
            }
        }, 2000);
    }


}