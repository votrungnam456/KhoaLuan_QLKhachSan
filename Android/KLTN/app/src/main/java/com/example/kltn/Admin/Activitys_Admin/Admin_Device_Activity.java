package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

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

import com.example.kltn.Admin.API_Admin.Param.Response_Device;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Device;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Admin.Adapter_Admin.Admin_Adapter_Device;
import com.example.kltn.Employee.Activitys.Login_Activity;
import com.example.kltn.Models.Devices;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Device_Activity extends AppCompatActivity {

    RecyclerView recyclerView;
    ImageView btn_add_device;
    Admin_Adapter_Device adapter;
    //
    List<Devices> devicesList = Login_Activity.mList_Device;
    Devices devices;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_device);
        mapping();
        event();
    }
    private void event() {
        LinearLayoutManager linearLayoutManager  = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(linearLayoutManager);
        adapter = new Admin_Adapter_Device(devicesList);
        recyclerView.setAdapter(adapter);

        btn_add_device.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Add(Gravity.CENTER);
            }
        });
    }

    private void mapping() {
        recyclerView = findViewById(R.id.admin_recycle_device);
        btn_add_device = findViewById(R.id.admin_imgv_ad_device);
    }
    private void open_Dialog_Add(int gravitys){
        final Dialog dialog = new Dialog(this);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_add_device);

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

        Button btn_cancel = dialog.findViewById(R.id.btn_cancel_device_add);
        Button btn_add = dialog.findViewById(R.id.btn_add_device);

        TextInputEditText name = dialog.findViewById(R.id.edt_name_device_add);
        TextInputEditText price = dialog.findViewById(R.id.edt_price_device_add);
        TextInputEditText status = dialog.findViewById(R.id.edt_status_device_add);
        TextInputEditText quantity = dialog.findViewById(R.id.edt_quantity_device_add);

        btn_cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        btn_add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Response_Device param = new Response_Device();
                param.setNameHotelDevice(name.getText().toString());
                param.setPrice(Integer.valueOf(price.getText().toString()));
                param.setQuantity(Integer.valueOf(quantity.getText().toString()));
                Call<ServerResponse_Device> call = Retrofit_Call.getserviceAPI().Admin_Add_Device(param);
                call.enqueue(new Callback<ServerResponse_Device>() {
                    @Override
                    public void onResponse(Call<ServerResponse_Device> call, Response<ServerResponse_Device> response) {
                        if (response.isSuccessful()){
                            devices = response.body().getDevices();
                            devicesList.add(devices);
                            adapter.notifyDataSetChanged();
                            dialog.dismiss();
                        }
                        else {
                            Toast.makeText(Admin_Device_Activity.this,response.errorBody().toString(),Toast.LENGTH_LONG).show();
                        }
                    }

                    @Override
                    public void onFailure(Call<ServerResponse_Device> call, Throwable t) {
                        Toast.makeText(Admin_Device_Activity.this,t.getMessage(),Toast.LENGTH_LONG).show();
                    }
                });
            }
        });
        dialog.show();
    }
}