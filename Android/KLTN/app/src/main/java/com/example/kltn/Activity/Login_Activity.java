package com.example.kltn.Activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Context;
import android.content.Intent;
import android.content.SharedPreferences;
import android.os.Bundle;
import android.os.Handler;
import android.text.TextUtils;
import android.util.Log;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.example.kltn.API.CallAPI;
import com.example.kltn.API.Request_Login;
import com.example.kltn.Models.User;
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

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        mapping();
        event();

    }

    private void event() {
        btn_login.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(TextUtils.isEmpty(txt_username.getText().toString()) || TextUtils.isEmpty(txt_password.getText().toString())) {
                    Toast.makeText(getBaseContext(),"Login Fail",Toast.LENGTH_SHORT).show();
                }
                else
                {
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
    }
    private  void loginCall(){
        Request_Login request_login = new Request_Login();
        request_login.set_email(txt_username.getText().toString());
        request_login.set_password(txt_password.getText().toString());
        Call<User> userCall = CallAPI.getserviceAPI().UserLogin(request_login);
        userCall.enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                if(response.isSuccessful())
                {
                    Toast.makeText(Login_Activity.this,"Successful",Toast.LENGTH_SHORT).show();
                    User userLogin = response.body();
                    new Handler().postDelayed(new Runnable() {
                        @Override
                        public void run() {
                            startActivity(new Intent(Login_Activity.this,Home_Activity.class).putExtra("name",userLogin.getNameEmployee()));
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
                            /*Log.e("tag_tag",response.errorBody().toString());*/
                            /*finish();*/
                        }
                    },700);
                }
                else
                {
                    Toast.makeText(Login_Activity.this,response.errorBody().toString(),Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<User> call, Throwable t) {
                Toast.makeText(Login_Activity.this,t.getMessage(),Toast.LENGTH_SHORT).show();
                Log.e("tag_tag",t.getMessage());
            }
        });
    }
}