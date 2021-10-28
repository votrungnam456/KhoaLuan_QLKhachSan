package com.example.kltn.Activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;
import android.widget.TextView;

import com.example.kltn.R;

public class Change_Pass_Activity extends AppCompatActivity {
    TextView txt_Home;
    EditText edt_Old_Pass;
    EditText edt_New_Pass;
    EditText edt_Re_New_Pass;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_change_pass);
        mapping();
        event();
    }

    private void event() {
        txt_Home.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent = new Intent(Change_Pass_Activity.this, Home_Activity.class);
                startActivity(intent);
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
}