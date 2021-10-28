package com.example.kltn.Activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.kltn.R;

public class Home_Activity extends AppCompatActivity {
    boolean doubleBackToExitPressedOnce = false;
    ImageView imgView_Profile;
    TextView txt_Name_Home;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
        mapping();
        event();
        getData();
    }

    private void getData() {
        Intent intent = getIntent();
        if(intent.getExtras() != null)
        {
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
    }

    private void mapping() {
        imgView_Profile = findViewById(R.id.imageView_profile);
        txt_Name_Home = findViewById(R.id.textView_Name_Home);
    }

    @Override
    public void onBackPressed() {
        if (doubleBackToExitPressedOnce) {
            super.onBackPressed();
            return;
        }

        this.doubleBackToExitPressedOnce = true;
        Toast.makeText( Home_Activity.this, "Please click BACK again to exit", Toast.LENGTH_LONG).show();

        new Handler(Looper.getMainLooper()).postDelayed(new Runnable() {

            @Override
            public void run() {
                doubleBackToExitPressedOnce=false;
            }
        }, 2000);
    }

}