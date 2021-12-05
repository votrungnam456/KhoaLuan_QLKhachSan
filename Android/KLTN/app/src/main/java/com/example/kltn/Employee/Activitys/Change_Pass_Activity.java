package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import com.example.kltn.Employee.API.API_Request_Param.Request_ChangePassword;
import com.example.kltn.Employee.API.CallAPI;
import com.example.kltn.Models.User;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Change_Pass_Activity extends AppCompatActivity {
    TextView txt_Home;
    TextInputEditText edt_Old_Pass;
    TextInputEditText edt_New_Pass;
    TextInputEditText edt_Re_New_Pass;

    private User user = Login_Activity.userLogin;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_change_pass);
        mapping();
        event();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
    }

    private void event() {
        txt_Home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                CallAPI_Change_Pass();
                onBackPressed();
                finish();
            }
        });
    }

    private void mapping() {
        txt_Home = findViewById(R.id.btn_complete);
        edt_New_Pass = findViewById(R.id.edt_pass_new);
        edt_Old_Pass = findViewById(R.id.edt_old_pass);
        edt_Re_New_Pass = findViewById(R.id.edt_re_new_pass);
    }
    boolean Check()
    {
        if(edt_New_Pass.getText().toString().equals(edt_Re_New_Pass.getText().toString())) {
            return true;
        }
        if(edt_Old_Pass.getText().toString().equals("")|| edt_New_Pass.getText().toString().equals("")|| edt_Re_New_Pass.getText().toString().equals(""))
        {
            return false;
        }
        return  false;
    }
    private void CallAPI_Change_Pass()
    {
        if(Check())
        {
            Request_ChangePassword request_changePassword = new Request_ChangePassword();
            request_changePassword.setEmails(user.getEmail());
            request_changePassword.setPasswordOld(edt_Old_Pass.getText().toString());
            request_changePassword.setPasswordNew(edt_New_Pass.getText().toString());

            Call<User> userCall = CallAPI.getserviceAPI().Re_Pass(request_changePassword);
            userCall.enqueue(new Callback<User>() {
                @Override
                public void onResponse(Call<User> call, Response<User> response) {
                    if(response.isSuccessful())
                    {
                        Toast.makeText(Change_Pass_Activity.this,"Successful Call API OTP",Toast.LENGTH_SHORT).show();
                    }
                    else
                    {
                        Toast.makeText(Change_Pass_Activity.this,response.errorBody().toString(),Toast.LENGTH_SHORT).show();
                    }
                }

                @Override
                public void onFailure(Call<User> call, Throwable t) {
                    Toast.makeText(Change_Pass_Activity.this,t.getMessage(),Toast.LENGTH_SHORT).show();
                }
            });
        }
    }
}