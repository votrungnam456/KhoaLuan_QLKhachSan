package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.widget.TextView;

import com.example.kltn.R;

import org.eazegraph.lib.charts.PieChart;
import org.eazegraph.lib.models.PieModel;

public class Admin_Money_Activity extends AppCompatActivity {

    TextView tvR, tvPython, tvCPP, tvJava;
    PieChart pieChart;
    private PieChart chart;
    private int i1 = 15;
    private int i2 = 25;
    private int i3 = 35;
    private int i4 = 45;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_money);
        chart = findViewById(R.id.pie_chart);

        chart.addPieSlice(new PieModel("Integer 1", i1, Color.parseColor("#FFA726")));
        chart.addPieSlice(new PieModel("Integer 2", i2, Color.parseColor("#66BB6A")));
        chart.addPieSlice(new PieModel("Integer 3", i3, Color.parseColor("#EF5350")));
        chart.addPieSlice(new PieModel("Integer 4", i4, Color.parseColor("#2986F6")));

        chart.startAnimation();
    }
}