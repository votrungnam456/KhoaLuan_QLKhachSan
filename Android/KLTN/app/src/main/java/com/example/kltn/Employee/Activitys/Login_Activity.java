package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.text.TextUtils;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.example.kltn.Employee.API.CallAPI;
import com.example.kltn.Employee.API.API_Request_Param.Request_Login;
import com.example.kltn.Employee.API.API_Weather;
import com.example.kltn.Employee.Models.User;
import com.example.kltn.Employee.Models.WeatherMain;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Login_Activity extends AppCompatActivity {
    TextView btn_login;
    TextView btn_forgot_pass;
    TextInputEditText txt_username, txt_password;
    public static String MyUSER = "MYUSER";
    public static  User userLogin;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mapping();
        event();
        callAPI();
    }

    private void callAPI() {
        callAPIWeather();
    }
    public static WeatherMain weatherMain;
    public WeatherMain callAPIWeather()
    {
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
                if(TextUtils.isEmpty(txt_username.getText().toString()) || TextUtils.isEmpty(txt_password.getText().toString())) {
                    Toast.makeText(getBaseContext(),"Oh no, you can writer Email and Password",Toast.LENGTH_SHORT).show();
                }
                else {
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

        //set email and password
        txt_username.setText("dai@gmail.com");
        txt_password.setText("123123");
    }
    private  void loginCall(){
        Request_Login request_login = new Request_Login();
        request_login.set_email(txt_username.getText().toString());
        request_login.set_password(txt_password.getText().toString());
        Call<User> userCall = CallAPI.getserviceAPI().UserLogin(request_login);
        userCall.enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                if(response.isSuccessful()) {
                    Toast.makeText(Login_Activity.this,"Successful",Toast.LENGTH_SHORT).show();
                    userLogin = response.body();
                    new Handler().postDelayed(new Runnable() {
                        @Override
                        public void run() {
                            //start Home_Activity and Put Name Empploy
                            startActivity(new Intent(Login_Activity.this, Home_Activity.class).putExtra("name",userLogin.getNameEmployee()));

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
                            editor.commit();

                            //Delete history previos activity when login not com back Activity login
                            finish();
                        }
                    },500);
                }
                else
                {
                    Toast.makeText(Login_Activity.this,response.errorBody().toString(),Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<User> call, Throwable t) {
                Toast.makeText(Login_Activity.this,t.getMessage(),Toast.LENGTH_SHORT).show();
            }
        });
    }
}