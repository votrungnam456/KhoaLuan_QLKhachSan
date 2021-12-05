package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.view.inputmethod.InputMethodManager;
import android.widget.CheckBox;
import android.widget.TextView;
import android.widget.Toast;

import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Admin.Activitys_Admin.Admin_Home_Activity;
import com.example.kltn.Employee.API.CallAPI;
import com.example.kltn.Employee.API.API_Request_Param.Request_Login;
import com.example.kltn.Employee.API.API_Weather;
import com.example.kltn.Models.Devices;
import com.example.kltn.Models.Room;
import com.example.kltn.Models.Services;
import com.example.kltn.Models.Type_Room;
import com.example.kltn.Models.User;
import com.example.kltn.Models.WeatherMain;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.Calendar;
import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Login_Activity extends AppCompatActivity {
    TextView btn_login;
    TextView btn_forgot_pass;
    TextInputEditText txt_username, txt_password;
    CheckBox remember;
    private String username, password;
    private Boolean saveLogin;
    private SharedPreferences loginPreferences;
    private SharedPreferences.Editor loginPrefsEditor;
    public static String MyUSER = "MYUSER";
    public static User userLogin;
    public static List<User> users;
    public static List<Room> rooms;
    public static List<Services> servicesList;
    public static List<Devices> mList_Device;
    public static List<Type_Room> type_room;
    public static List<Room> ListRoom;
    public static List<Services> ListServices;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mapping();
        event();
        callAPI();

        loginPreferences = getSharedPreferences("loginPrefs", MODE_PRIVATE);
        loginPrefsEditor = loginPreferences.edit();

        saveLogin = loginPreferences.getBoolean("saveLogin", false);
        if (saveLogin == true) {
            txt_username.setText(loginPreferences.getString("username", ""));
            txt_password.setText(loginPreferences.getString("password", ""));
            remember.setChecked(true);
        }
    }

    private void callAPI() {
        callAPIWeather();
    }

    public static WeatherMain weatherMain;

    public WeatherMain callAPIWeather() {
        API_Weather.callapi.getAll().enqueue(new Callback<WeatherMain>() {
            @Override
            public void onResponse(Call<WeatherMain> call, Response<WeatherMain> response) {
                weatherMain = response.body();
                Toast.makeText(Login_Activity.this, "Call Weather success", Toast.LENGTH_SHORT).show();
            }

            @Override
            public void onFailure(Call<WeatherMain> call, Throwable t) {
                Toast.makeText(Login_Activity.this, t.toString(), Toast.LENGTH_LONG).show();
            }
        });
        return weatherMain;
    }

    private void event() {
        btn_login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (TextUtils.isEmpty(txt_username.getText().toString()) || TextUtils.isEmpty(txt_password.getText().toString())) {
                    Toast.makeText(getBaseContext(), "Oh no, you can writer Email and Password", Toast.LENGTH_SHORT).show();
                } else {
                    loginCall();
                }
            }
        });
        btn_forgot_pass.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Login_Activity.this, Forgot_Password_Activity.class);
                startActivity(intent);

            }
        });
    }

    private void mapping() {
        btn_login = findViewById(R.id.txt_login);
        btn_forgot_pass = findViewById(R.id.txt_forgot);
        txt_username = findViewById(R.id.txt_email);
        txt_password = findViewById(R.id.txt_password);
        remember = findViewById(R.id.chk_remember);
    }

    private void callAPIs() {
        callAPI_Service_Adm();
        callAPI_Room_Adm();
        callAPI_Device_Adm();
        callAPI_GetType_Room();
        callAPI_GetALL_Employee();
        callGetRoom();
        callGetServices();
    }

    private void callGetServices() {
        Call<List<Services>> getAllService = CallAPI.getserviceAPI().GetServieces();
        getAllService.enqueue(new Callback<List<Services>>() {
            @Override
            public void onResponse(Call<List<Services>> call, Response<List<Services>> response) {
                if (response.isSuccessful()) {
                    /*Toast.makeText(Home_Activity.this, "Successful Call API Services", Toast.LENGTH_SHORT).show();*/
                    ListServices = response.body();
                } else {
                    Log.e("logAPI", response.errorBody().toString());
                }
            }

            @Override
            public void onFailure(Call<List<Services>> call, Throwable t) {
                Log.e("logAPI", t.getMessage());
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
                    Log.e("logAPI", response.errorBody().toString());
                }
            }

            @Override
            public void onFailure(Call<List<Room>> call, Throwable t) {
                Log.e("logAPI", t.getMessage());
            }
        });
    }

    public void callAPI_GetALL_Employee() {
        Call<List<User>> call = Retrofit_Call.getserviceAPI().Admin_GetALL_Employee();
        call.enqueue(new Callback<List<User>>() {
            @Override
            public void onResponse(Call<List<User>> call, Response<List<User>> response) {
                users = response.body();
                Log.e("logAPI", response.message());
            }

            @Override
            public void onFailure(Call<List<User>> call, Throwable t) {
                Log.e("logAPI", t.getMessage());
            }
        });
    }

    public void callAPI_GetType_Room() {
        Call<List<Type_Room>> call = Retrofit_Call.getserviceAPI().Admin_Get_Type_Room();
        call.enqueue(new Callback<List<Type_Room>>() {
            @Override
            public void onResponse(Call<List<Type_Room>> call, Response<List<Type_Room>> response) {
                type_room = response.body();
            }

            @Override
            public void onFailure(Call<List<Type_Room>> call, Throwable t) {
                Log.e("logAPI", t.getMessage());
            }
        });

    }

    public void callAPI_Device_Adm() {
        Call<List<Devices>> call = Retrofit_Call.getserviceAPI().Admin_GetList_Device();
        call.enqueue(new Callback<List<Devices>>() {
            @Override
            public void onResponse(Call<List<Devices>> call, Response<List<Devices>> response) {
                if (response.isSuccessful()) {
                    Log.e("logAPI", response.message());
                    mList_Device = response.body();
                } else {
                    Log.e("logAPI", response.errorBody().toString());
                }
            }

            @Override
            public void onFailure(Call<List<Devices>> call, Throwable t) {
                Log.e("logAPI", t.getMessage());
            }
        });
    }

    public void callAPI_Service_Adm() {
        Call<List<Services>> call = Retrofit_Call.getserviceAPI().Admin_GetList_Service();
        call.enqueue(new Callback<List<Services>>() {
            @Override
            public void onResponse(Call<List<Services>> call, Response<List<Services>> response) {
                if (response.isSuccessful()) {
                    /*Toast.makeText(Admin_Home_Activity.this, "Successful Call API Service Admin", Toast.LENGTH_SHORT).show();*/
                    servicesList = response.body();
                } else {
                    Log.e("logAPI", response.errorBody().toString());
                }
            }

            @Override
            public void onFailure(Call<List<Services>> call, Throwable t) {
                Log.e("logAPI", t.getMessage());

            }
        });
    }

    private void callAPI_Room_Adm() {
        Call<List<Room>> call = Retrofit_Call.getserviceAPI().Admin_GetList_Room();
        call.enqueue(new Callback<List<Room>>() {
            @Override
            public void onResponse(Call<List<Room>> call, Response<List<Room>> response) {
                if (response.isSuccessful()) {
                    /*Toast.makeText(Admin_Home_Activity.this, "Successful Call API Room Admin", Toast.LENGTH_SHORT).show();*/
                    rooms = response.body();
                } else {
                    Log.e("logAPI", response.errorBody().toString());
                }
            }

            @Override
            public void onFailure(Call<List<Room>> call, Throwable t) {
                Log.e("logAPI", t.getMessage());
            }
        });
    }

    private void loginCall() {
        username = txt_username.getText().toString();
        password = txt_password.getText().toString();

        if (remember.isChecked()) {
            loginPrefsEditor.putBoolean("saveLogin", true);
            loginPrefsEditor.putString("username", username);
            loginPrefsEditor.putString("password", password);
            loginPrefsEditor.commit();
        } else {
            loginPrefsEditor.clear();
            loginPrefsEditor.commit();
        }
        Request_Login request_login = new Request_Login();
        InputMethodManager imm = (InputMethodManager) getSystemService(Context.INPUT_METHOD_SERVICE);
        imm.hideSoftInputFromWindow(txt_username.getWindowToken(), 0);
        request_login.set_email(txt_username.getText().toString());
        request_login.set_password(txt_password.getText().toString());
        Call<User> userCall = CallAPI.getserviceAPI().UserLogin(request_login);
        userCall.enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                if (response.isSuccessful()) {
                    Toast.makeText(Login_Activity.this, "Successful", Toast.LENGTH_SHORT).show();
                    userLogin = response.body();
                    new Handler().postDelayed(new Runnable() {
                        @Override
                        public void run() {
                            //start Home_Activity and Put Name Empploy
                            if (userLogin.getCodeRole().equals("ADMIN")) {
                                Intent intent = new Intent(Login_Activity.this, Admin_Home_Activity.class);
                                startActivity(intent);
                                callAPIs();

                            } else {
                                startActivity(new Intent(Login_Activity.this, Home_Activity.class).putExtra("name", userLogin.getNameEmployee()));
                            }
                            //Save Data Profile Employee Session
                            SharedPreferences sharedpreferences = getSharedPreferences(MyUSER, Context.MODE_PRIVATE);
                            SharedPreferences.Editor editor = sharedpreferences.edit();
                            editor.putString("id", userLogin.getId());
                            editor.putString("FullName", userLogin.getNameEmployee());
                            editor.putString("CMND", userLogin.getIdentityCard());
                            editor.putString("PhoneNumber", userLogin.getPhoneNumber());
                            editor.putString("Address", userLogin.getAddress());
                            editor.putString("Gender", userLogin.getGender());
                            editor.putString("Email", userLogin.getEmail());
                            editor.putString("Role", userLogin.getNameRole());
                            editor.commit();

                            //Delete history previos activity when login not com back Activity login
                            finish();
                        }
                    }, 500);
                } else {
                    Toast.makeText(Login_Activity.this, response.errorBody().toString(), Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<User> call, Throwable t) {
                Toast.makeText(Login_Activity.this, t.getMessage(), Toast.LENGTH_SHORT).show();
            }
        });
    }
}