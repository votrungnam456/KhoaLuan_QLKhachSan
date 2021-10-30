package com.example.kltn.Adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.Button;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.kltn.Models.Room;
import com.example.kltn.R;

import java.util.List;

public class RoomAdapter extends BaseAdapter {

    public RoomAdapter(List<Room> data, Context context, int layout) {
        this.data = data;
        this.context = context;
        this.layout = layout;
    }

    List<Room> data;
    private Context context;
    private int layout;

    @Override
    public int getCount() {
        return data.size();
    }

    @Override
    public Object getItem(int position) {
        return null;
    }

    private class ViewHoldel {
        ImageView star1, star2, star3, star4, star5, img_Room;
        TextView txt_housekeeping, txt_type_room, txt_description, txt_status, txt_NameRoom;
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ViewHoldel viewHoldel;

        if (convertView == null) {
            LayoutInflater layoutInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView = layoutInflater.inflate(layout, null);

            viewHoldel = new ViewHoldel();
            viewHoldel.txt_NameRoom = (TextView) convertView.findViewById(R.id.txt_Name_Room);
            viewHoldel.txt_description = (TextView) convertView.findViewById(R.id.txt_description);
            viewHoldel.txt_housekeeping = (TextView) convertView.findViewById(R.id.txt_housekeeping);
            viewHoldel.txt_type_room = (TextView) convertView.findViewById(R.id.txt_Type_room);
            viewHoldel.txt_status = (TextView) convertView.findViewById(R.id.txt_status);
            viewHoldel.star1 = (ImageView) convertView.findViewById(R.id.star1);
            viewHoldel.star2 = (ImageView) convertView.findViewById(R.id.star2);
            viewHoldel.star3 = (ImageView) convertView.findViewById(R.id.star3);
            viewHoldel.star4 = (ImageView) convertView.findViewById(R.id.star4);
            viewHoldel.star5 = (ImageView) convertView.findViewById(R.id.star5);
            viewHoldel.img_Room = (ImageView) convertView.findViewById(R.id.img_Room);
            convertView.setTag(viewHoldel);
        } else {
            viewHoldel = (ViewHoldel) convertView.getTag();
        }
        //set data
        Room room = data.get(position);
        String status = "Trạng Thái: " + Integer.toString(room.getStatus());
        String des = "Mô Tả: " + room.getDescription();
        viewHoldel.txt_description.setText(des);
        viewHoldel.txt_housekeeping.setText(room.getHousekeepingOrder());
        viewHoldel.txt_type_room.setText(room.getNameTypeRoom());
        viewHoldel.txt_status.setText(status);
        viewHoldel.txt_NameRoom.setText(room.getNameRoom());

        return convertView;
    }
}
