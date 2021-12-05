package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Patterns;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.example.kltn.Employee.API.API_Request_Param.Requesr_GetOTP;
import com.example.kltn.Employee.API.CallAPI;
import com.example.kltn.Models.User;
import com.example.kltn.R;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Forgot_Password_Activity extends AppCompatActivity {
    Button btn_get_otp;
    EditText txt_email_forgot;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_forgot_password);
        mapping();
        event();
    }

    private void event() {
        btn_get_otp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CallAPI_GetOTP();
            }
        });
    }

    private void mapping() {
        btn_get_otp = findViewById(R.id.btn_get_otp);
        txt_email_forgot = findViewById(R.id.edt_email_forgot);

    }

    private void CallAPI_GetOTP(){
        if(validateInput())
        {
            Requesr_GetOTP requesr_getOTP = new Requesr_GetOTP();
            requesr_getOTP.setEmail(txt_email_forgot.getText().toString());
            Call<User> userCall = CallAPI.getserviceAPI().GetOTP(requesr_getOTP);
            userCall.enqueue(new Callback<User>() {
                @Override
                public void onResponse(Call<User> call, Response<User> response) {
                    if(response.isSuccessful())
                    {
                        Toast.makeText(Forgot_Password_Activity.this,"Successful Call API OTP",Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(Forgot_Password_Activity.this, Reset_Password_Activity.class).putExtra("email_reset",txt_email_forgot.getText().toString()));
                    }
                    else
                    {
                        Toast.makeText(Forgot_Password_Activity.this,response.errorBody().toString(),Toast.LENGTH_SHORT).show();
                    }
                }

                @Override
                public void onFailure(Call<User> call, Throwable t) {
                    Toast.makeText(Forgot_Password_Activity.this,t.getMessage(),Toast.LENGTH_SHORT).show();
                }
            });
        };
    }

    boolean validateInput() {

        if (txt_email_forgot.getText().toString().equals("")) {
            txt_email_forgot.setError("Please Enter Email");
            return false;
        }

        // checking the proper email format
        if (!isEmailValid(txt_email_forgot.getText().toString())) {
            txt_email_forgot.setError("Please Enter Valid Email");
            return false;
        }


        return true;
    }

    boolean isEmailValid(String email) {
        return Patterns.EMAIL_ADDRESS.matcher(email).matches();
    }
}