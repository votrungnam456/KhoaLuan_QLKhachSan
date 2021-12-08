package com.example.kltn.Admin.Activitys_Admin;

import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.app.Dialog;
import android.content.Context;
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
import android.widget.TextView;

import com.example.kltn.Admin.API_Admin.Param.Response_Room;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Room;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Admin.Adapter_Admin.Adapter_Type_Room;
import com.example.kltn.Admin.Adapter_Admin.Admin_Adapter_Room;
import com.example.kltn.Admin.Interface_Click.IClick_TypeRoom;
import com.example.kltn.Employee.Activitys.Login_Activity;
import com.example.kltn.Models.Room;
import com.example.kltn.Models.Type_Room;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Room_Activity extends AppCompatActivity {

    RecyclerView recyclerView;
    ImageView admin_imgv_add_room;
    TextView type;

    public static String id_type_Room;

    Admin_Adapter_Room apdater;
    Adapter_Type_Room adapter_type_room;

    List<Room> roomList = Login_Activity.rooms;
    List<Type_Room> typeRoomList = Login_Activity.typeRoomList;

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
        type = dialog.findViewById(R.id.add_room_type);
        TextInputEditText destrips = dialog.findViewById(R.id.add_room_Desciption);
        ConstraintLayout item_type_room_layout = dialog.findViewById(R.id.item_type_room_layout);
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
                room.setIdTypeRoom(id_type_Room);
                room.setDescription(destrips.getText().toString());
                Call<ServerResponse_Room> call = Retrofit_Call.getserviceAPI().Admin_Add_Room_Test(room);
                call.enqueue(new Callback<ServerResponse_Room>() {
                    @Override
                    public void onResponse(Call<ServerResponse_Room> call, Response<ServerResponse_Room> response) {
                        rooms = response.body().getRoomData();
                        roomList.add(rooms);
                        apdater.notifyDataSetChanged();
                        Log.e("logAPI",String.valueOf(response.body().getMessageData()));
                        dialog.dismiss();
                    }

                    @Override
                    public void onFailure(Call<ServerResponse_Room> call, Throwable t) {

                    }
                });
            }
        });
        type.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Type_Room(Gravity.CENTER,v.getContext());
            }
        });

        item_type_room_layout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Type_Room(Gravity.CENTER,v.getContext());
            }
        });
        dialog.show();
    }
    private void open_Dialog_Type_Room(int gravitys, Context context)
    {
        final Dialog dialog = new Dialog(this);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_type_room);

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

        RecyclerView view = dialog.findViewById(R.id.type_room_dialog);
        LinearLayoutManager linearLayoutManagers  = new LinearLayoutManager(this);
        view.setLayoutManager(linearLayoutManagers);
        adapter_type_room = new Adapter_Type_Room(typeRoomList, this, new IClick_TypeRoom() {
            @Override
            public void OnClick_Type_Room(Type_Room type_room) {
                type.setText(type_room.getNameTypeRoom());
                id_type_Room = type_room.getId_Type();
                dialog.dismiss();

            }
        });
        view.setAdapter(adapter_type_room);

        dialog.show();
    }
    private void Click(Dialog dialog,Type_Room room)
    {


    }
}