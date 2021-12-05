package com.example.kltn.Employee.Activitys;

import androidx.appcompat.app.AppCompatActivity;

import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ListView;

import com.example.kltn.Employee.Adapter.RoomAdapter;
import com.example.kltn.Models.Room;
import com.example.kltn.R;

import java.util.List;

public class Room_Activity extends AppCompatActivity {

    ListView lv_listroom;
    List<Room> roomList = Login_Activity.ListRoom;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_room);
        mapping();
        event();
        setAdapter();
        changeBackgoundItem();
    }

    private void changeBackgoundItem() {
        lv_listroom.setOnItemClickListener(new AdapterView.OnItemClickListener() {
            @Override
            public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                for (int i = 0; i < lv_listroom.getChildCount(); i++) {
                    if(position == i ){
                        lv_listroom.getChildAt(i).setBackgroundColor(Color.BLUE);
                    }else{
                        lv_listroom.getChildAt(i).setBackgroundColor(Color.TRANSPARENT);
                    }
                }
            }
        });
    }

    private void setAdapter() {
        RoomAdapter roomAdapter = new RoomAdapter(roomList,this,R.layout.line_listview_room);
        lv_listroom.setAdapter(roomAdapter);
    }

    private void event() {
    }

    private void mapping() {
        lv_listroom = findViewById(R.id.lv_list_room);
    }
}