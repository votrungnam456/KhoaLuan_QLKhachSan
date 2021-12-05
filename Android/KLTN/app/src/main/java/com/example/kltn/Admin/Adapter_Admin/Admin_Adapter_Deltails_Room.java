package com.example.kltn.Admin.Adapter_Admin;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.kltn.Models.DetailRoom;
import com.example.kltn.R;

import java.util.List;

public class Admin_Adapter_Deltails_Room extends RecyclerView.Adapter<Admin_Adapter_Deltails_Room.ViewHolder>{

    List<DetailRoom> roomList;
    Context context;

    public Admin_Adapter_Deltails_Room(List<DetailRoom> roomList, Context context) {
        this.roomList = roomList;
        this.context = context;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.line_detail_room, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        DetailRoom room = roomList.get(position);
        holder.details_name.setText(room.getName());
        holder.details_quantity.setText(String.valueOf(room.getQuantity()));
        holder.details_type.setText(String.valueOf(room.getTypeDetail()));
    }

    @Override
    public int getItemCount() {
        return roomList.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {
        TextView details_name,details_quantity,details_type;
        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            details_name = itemView.findViewById(R.id.details_name);
            details_quantity = itemView.findViewById(R.id.details_quantity);
            details_type = itemView.findViewById(R.id.details_type);
        }
    }
}
