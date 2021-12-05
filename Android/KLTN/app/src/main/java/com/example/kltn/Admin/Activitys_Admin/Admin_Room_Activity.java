package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.Toast;

import com.example.kltn.Admin.API_Admin.Param.Response_Room;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Room;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Admin.Adapter_Admin.Admin_Adapter_Room;
import com.example.kltn.Employee.Activitys.Login_Activity;
import com.example.kltn.Models.Room;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Room_Activity extends AppCompatActivity {

    RecyclerView recyclerView;
    List<Room> roomList = Login_Activity.rooms;
    ImageView admin_imgv_add_room;
    Admin_Adapter_Room apdater;
    Room rooms;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_room);
        mapping();
        event();
    }

    private void event() {
        LinearLayoutManager linearLayoutManager  = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(linearLayoutManager);
        apdater = new Admin_Adapter_Room(roomList);
        recyclerView.setAdapter(apdater);

        admin_imgv_add_room.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Add(Gravity.CENTER);
            }
        });
    }


    private void mapping() {
        admin_imgv_add_room = findViewById(R.id.admin_imgv_add_room);
        recyclerView = findViewById(R.id.admin_recycle_room);
    }

    private void open_Dialog_Add(int gravitys){
        final Dialog dialog = new Dialog(this);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_add_room);

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

        Button btn_cancel_service = dialog.findViewById(R.id.btn_cancel_room_add);
        Button btn_add_service = dialog.findViewById(R.id.btn_add_room);

        TextInputEditText name = dialog.findViewById(R.id.add_room_Name);
        TextInputEditText type = dialog.findViewById(R.id.add_room_type);
        TextInputEditText destrips = dialog.findViewById(R.id.add_room_Desciption);
        btn_cancel_service.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        btn_cancel_service.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });
        btn_add_service.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Response_Room room = new Response_Room();
                room.setNameRoom(name.getText().toString());
                room.setIdTypeRoom(type.getText().toString());
                room.setDescription(destrips.getText().toString());
                Call<ServerResponse_Room> call = Retrofit_Call.getserviceAPI().Admin_Add_Room_Test(room);
                call.enqueue(new Callback<ServerResponse_Room>() {
                    @Override
                    public void onResponse(Call<ServerResponse_Room> call, Response<ServerResponse_Room> response) {
                        rooms = response.body().getRoomData();
                        roomList.add(rooms);
                        apdater.notifyDataSetChanged();
                        Log.e("APIsss",String.valueOf(response.body().getMessageData()));
                    }

                    @Override
                    public void onFailure(Call<ServerResponse_Room> call, Throwable t) {

                    }
                });
                /*Call<Room> calls = Retrofit_Call.getserviceAPI().Admin_Add_Room(room);
                calls.enqueue(new Callback<Room>() {
                    @Override
                    public void onResponse(Call<Room> call, Response<Room> response) {
                        roomList.add(response.body());
                        apdater.notifyDataSetChanged();
                        Log.e("logAPI", response.message());
                        dialog.dismiss();
                    }

                    @Override
                    public void onFailure(Call<Room> call, Throwable t) {
                        Toast.makeText(Admin_Room_Activity.this,t.getMessage(),Toast.LENGTH_LONG).show();
                    }
                });*/
            }
        });
        dialog.show();
    }

    private void callAPIaddRoom(Response_Room room)
    {

    }
}