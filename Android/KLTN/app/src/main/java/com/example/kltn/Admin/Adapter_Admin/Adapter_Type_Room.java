package com.example.kltn.Admin.Adapter_Admin;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.kltn.Admin.Interface_Click.IClick_TypeRoom;
import com.example.kltn.Models.Type_Room;
import com.example.kltn.R;

import java.util.List;

public class Adapter_Type_Room extends RecyclerView.Adapter<Adapter_Type_Room.Type_RoomViewHolder>{

    List<Type_Room> typeRoomList;
    IClick_TypeRoom iClick_typeRoom;
    public Adapter_Type_Room(List<Type_Room> typeRoomList, Context context, IClick_TypeRoom iClick_typeRoom) {
        this.typeRoomList = typeRoomList;
        this.context = context;
        this.iClick_typeRoom = iClick_typeRoom;
    }
    Context context;
    @NonNull
    @Override
    public Type_RoomViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_type_room, parent, false);
        return new Adapter_Type_Room.Type_RoomViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull Type_RoomViewHolder holder, int position) {
        Type_Room room = typeRoomList.get(position);
        holder.txtView.setText(room.getNameTypeRoom());
        holder.item_click_type_room.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                iClick_typeRoom.OnClick_Type_Room(room);
            }
        });
    }

    @Override
    public int getItemCount() {
        return typeRoomList.size();
    }

    public class Type_RoomViewHolder extends RecyclerView.ViewHolder {
        LinearLayout item_click_type_room;
        TextView txtView;
        public Type_RoomViewHolder(@NonNull View itemView) {
            super(itemView);
            txtView = itemView.findViewById(R.id.txt_type_room_item);
            item_click_type_room = itemView.findViewById(R.id.item_click_type_room);
        }
    }
}
