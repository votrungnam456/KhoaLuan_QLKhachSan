package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.kltn.Employee.API.CallAPI;
import com.example.kltn.Employee.Models.Room;
import com.example.kltn.Employee.Models.Services;
import com.example.kltn.Employee.Models.WeatherMain;
import com.example.kltn.R;
/*import com.google.android.gms.location.FusedLocationProviderClient;
import com.google.android.gms.location.LocationServices;*/

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Home_Activity extends AppCompatActivity {
    boolean doubleBackToExitPressedOnce = false;
    ImageView imgView_Profile;
    TextView txt_Name_Home;
    TextView txt_helloDay;
    ImageView img_List_Room,img_Log_Out;
    TextView troi, nhietdo, maxmin, weather;
    TextView timer;
    ImageView img_devices;
    /*private FusedLocationProviderClient fusedLocationClient;*/

    public static String MyUSER = "MYUSER";
    public static List<Room> ListRoom;
    public static List<Services> ListServices;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
       /* fusedLocationClient = LocationServices.getFusedLocationProviderClient(this);*/

        callAPI();
        mapping();
        event();
        getData_Name_Home();
        handleTimer();
        loadWeather();

    }


    private void handleTimer() {
        Calendar rightNow = Calendar.getInstance();
        int currentHourIn24Format = rightNow.get(Calendar.HOUR_OF_DAY);
        if (currentHourIn24Format > 1) {
            txt_helloDay.setText("Chào Buổi Sáng");
        }
        else if (currentHourIn24Format >= 12) {
            txt_helloDay.setText("Chào Buổi Trưa");
        }
        else if (currentHourIn24Format >= 17) {
            txt_helloDay.setText("Chào Buổi Chiều");
        }
        else if (currentHourIn24Format >= 21){
            txt_helloDay.setText("Chào Buổi Tối");
        }
    }

    private void callAPI() {

        callGetRoom();
        callGetServices();
    }

    private void callGetServices() {
        Call<List<Services>> getAllService = CallAPI.getserviceAPI().GetServieces();
        getAllService.enqueue(new Callback<List<Services>>() {
            @Override
            public void onResponse(Call<List<Services>> call, Response<List<Services>> response) {
                if (response.isSuccessful()) {
                    Toast.makeText(Home_Activity.this, "Successful Call API Services", Toast.LENGTH_SHORT).show();
                    ListServices = response.body();
                } else {
                    Toast.makeText(Home_Activity.this, "Error Service", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Services>> call, Throwable t) {
                Toast.makeText(Home_Activity.this, t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }

    private void callGetRoom() {
        Call<List<Room>> getAllRoom = CallAPI.getserviceAPI().GetRoom();
        getAllRoom.enqueue(new Callback<List<Room>>() {
            @Override
            public void onResponse(Call<List<Room>> call, Response<List<Room>> response) {
                if (response.isSuccessful()) {
                    /*Toast.makeText(Home_Activity.this, "Successful Call API Room", Toast.LENGTH_SHORT).show();*/
                    ListRoom = response.body();
                } else {
                    Toast.makeText(Home_Activity.this, "Error Room", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<List<Room>> call, Throwable t) {
                Toast.makeText(Home_Activity.this, t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });

    }

    private void getData_Name_Home() {
        Intent intent = getIntent();
        if (intent.getExtras() != null) {
            String nameEmployee = intent.getStringExtra("name");
            txt_Name_Home.setText("Hi " + nameEmployee);
        }
    }

    private void event() {
        imgView_Profile.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Home_Activity.this, Info_Emp_Activity.class);
                startActivity(intent);
            }
        });
        img_devices.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Home_Activity.this, Service_Activity.class);
                startActivity(intent);
            }
        });
        img_List_Room.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Home_Activity.this, Room_Activity.class);
                startActivity(intent);
            }
        });

        img_Log_Out.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                //delete Data save in Shared References
                deleleShare();
                //get Data in Shared References to authentication data not exits
                SharedPreferences sharedPreferences = getSharedPreferences(MyUSER, Context.MODE_PRIVATE);
                String name = sharedPreferences.getString("FullName", "null");
                if(name == "null")
                {
                    Intent intent = new Intent(Home_Activity.this, Login_Activity.class);
                    startActivity(intent);
                    finish();
                }
               else
                {
                    Toast.makeText(Home_Activity.this,"Error",Toast.LENGTH_LONG);
                }

            }
        });
    }

    private void mapping() {
        imgView_Profile = findViewById(R.id.imageView_profile);
        txt_Name_Home = findViewById(R.id.textView_Name_Home);
        txt_helloDay = findViewById(R.id.textView_Day);
        img_List_Room = findViewById(R.id.img_list_room);
        img_Log_Out = findViewById(R.id.img_log_out);
        troi = findViewById(R.id.troi);
        nhietdo = findViewById(R.id.nhietdo);
        maxmin = findViewById(R.id.maxmin);
        weather = findViewById(R.id.weather);
        timer = findViewById(R.id.txt_timer);
        img_devices = findViewById(R.id.img_devices);
    }

    @Override
    public void onBackPressed() {
        if (doubleBackToExitPressedOnce) {
            super.onBackPressed();
            return;
        }

        this.doubleBackToExitPressedOnce = true;
        Toast.makeText(Home_Activity.this, "Please click BACK again to exit", Toast.LENGTH_LONG).show();

        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() {

            @Override
            public void run() {
                doubleBackToExitPressedOnce = false;
            }
        }, 2000);
    }
    public void deleleShare()
    {
        SharedPreferences.Editor editor = getSharedPreferences(MyUSER, Context.MODE_PRIVATE).edit();
        editor.clear();
        editor.commit();
    }
    private void loadWeather() {
        WeatherMain weatherMain = Login_Activity.weatherMain;
        troi.setText(weatherMain.getWeather().get(0).getDescription());
        Double a = (weatherMain.getMain().getTemp() - 273.15 );
        nhietdo.setText(a.intValue() + "");
        Double max = (weatherMain.getMain().getTemp_max() - 273.15 );
        Double min = (weatherMain.getMain().getTemp_min() - 273.15 );
        maxmin.setText(max.intValue() + "C   --->   " + min.intValue() + "C");
        weather.setText(weatherMain.getWeather().get(0).getMain());
        String currentTime = new SimpleDateFormat("HH:mm:ss", Locale.getDefault()).format(new Date());
        timer.setText(currentTime);
    }
}