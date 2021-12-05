package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.TextView;
import android.widget.Toast;

import com.example.kltn.Employee.API.API_Request_Param.Request_RePass;
import com.example.kltn.Employee.API.CallAPI;
import com.example.kltn.Models.User;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Reset_Password_Activity extends AppCompatActivity {
    TextInputEditText email,otp,new_pass,re_pass;
    TextView btn_complete_reset;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_reset_password);
        mapping();
        event();
        getDataIntent();
    }

    private void getDataIntent() {
        Intent intent = getIntent();
        String emails = intent.getStringExtra("email_reset");
        email.setText(emails);
    }

    private void event() {
        btn_complete_reset.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CallAPI_Reset_Password();
            }
        });
    }

    private void mapping() {
        email = findViewById(R.id.edt_email_reset_password);
        otp = findViewById(R.id.edt_email_otp_reset_password);
        new_pass = findViewById(R.id.edt_pass_new_reset_passwrod);
        re_pass = findViewById(R.id.edt_re_new_pass_reset_password);
        btn_complete_reset = findViewById(R.id.btn_complete_reset_passwrod);
    }

    boolean Check()
    {
        if(re_pass.getText().toString().equals(re_pass.getText().toString())) {
            return true;
        }
        return  false;
    }

    private void CallAPI_Reset_Password()
    {
        if (Check())
        {
            Request_RePass request_rePass = new Request_RePass();
            request_rePass.setVerification(otp.getText().toString());
            request_rePass.setPassword(new_pass.getText().toString());
            Call<User> userCall = CallAPI.getserviceAPI().Change_Pass(request_rePass);
            userCall.enqueue(new Callback<User>() {
                @Override
                public void onResponse(Call<User> call, Response<User> response) {
                    if(response.isSuccessful())
                    {
                        Toast.makeText(Reset_Password_Activity.this,"Successful Call API Reset_Pass",Toast.LENGTH_SHORT).show();
                        startActivity(new Intent(Reset_Password_Activity.this, Login_Activity.class));
                    }
                    else
                    {
                        Toast.makeText(Reset_Password_Activity.this,response.errorBody().toString(),Toast.LENGTH_SHORT).show();
                    }
                }

                @Override
                public void onFailure(Call<User> call, Throwable t) {
                    Toast.makeText(Reset_Password_Activity.this,t.getMessage(),Toast.LENGTH_SHORT).show();
                }
            });
        }
    }
}