package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import com.example.kltn.Admin.API_Admin.Param.Respone_Service;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Service;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Admin.Adapter_Admin.Admin_Adapter_Service;
import com.example.kltn.Employee.Activitys.Login_Activity;
import com.example.kltn.Models.Services;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Service_Activity extends AppCompatActivity {

    RecyclerView recyclerView;
    ImageView admin_imgv_add_service;
    SwipeRefreshLayout swipeRefreshLayout;
    List<Services> sLists = Login_Activity.servicesList;
    Services service;
    Admin_Adapter_Service apdater;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_service);
        mapping();
        event();
    }
    private void event() {
        LinearLayoutManager linearLayoutManager  = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(linearLayoutManager);
        apdater = new Admin_Adapter_Service(sLists);
        recyclerView.setAdapter(apdater);

        admin_imgv_add_service.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Add(Gravity.CENTER);
            }
        });

        swipeRefreshLayout.setOnRefreshListener(new SwipeRefreshLayout.OnRefreshListener() {
            @Override
            public void onRefresh() {
                swipeRefreshLayout.setRefreshing(false);
            }
        });
    }
    private void mapping() {
        recyclerView = findViewById(R.id.admin_recycle_service);
        admin_imgv_add_service = findViewById(R.id.admin_imgv_add_service);
        swipeRefreshLayout = findViewById(R.id.refesh_service);
    }

    private void open_Dialog_Add(int gravitys){
        final Dialog dialog = new Dialog(this);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_add_service);

        Window window = dialog.getWindow();
        if (window == null)
        {
            return;
        }
        window.setLayout(WindowManager.LayoutParams.MATCH_PARENT,WindowManager.LayoutParams.WRAP_CONTENT);
        window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

        WindowManager.LayoutParams windowActibute = window.getAttributes();
        windowActibute.gravity = gravitys;
        window.setAttributes(windowActibute);

        if(Gravity.CENTER == gravitys)
        {
            dialog.setCancelable(true);
        }
        else
        {
            dialog.setCancelable(false);
        }

        Button btn_cancel_service = dialog.findViewById(R.id.btn_cancel_service);
        Button btn_add_service = dialog.findViewById(R.id.btn_add_service);

        TextInputEditText name = dialog.findViewById(R.id.edt_name_service);
        TextInputEditText price = dialog.findViewById(R.id.edt_price_service);
        btn_cancel_service.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        btn_add_service.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Respone_Service param = new Respone_Service();
                param.setNameService(name.getText().toString());
                param.setPrice(Integer.valueOf(price.getText().toString()));

                Call<ServerResponse_Service> call = Retrofit_Call.getserviceAPI().Admin_Add_Service(param);
                call.enqueue(new Callback<ServerResponse_Service>() {
                    @Override
                    public void onResponse(Call<ServerResponse_Service> call, Response<ServerResponse_Service> response) {
                        service = response.body().getServiceadd();
                        sLists.add(service);
                        apdater.notifyDataSetChanged();
                        dialog.dismiss();
                    }

                    @Override
                    public void onFailure(Call<ServerResponse_Service> call, Throwable t) {

                    }
                });
            }
        });
        dialog.show();
    }

}