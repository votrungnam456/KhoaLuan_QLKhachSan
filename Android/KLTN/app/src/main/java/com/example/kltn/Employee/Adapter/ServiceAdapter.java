package com.example.kltn.Employee.Adapter;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.ImageView;
import android.widget.TextView;

import com.example.kltn.Models.Services;
import com.example.kltn.R;

import java.util.List;

public class ServiceAdapter extends BaseAdapter {

    public ServiceAdapter(List<Services> data, Context context, int layout) {
        this.data = data;
        this.context = context;
        this.layout = layout;
    }

    List<Services> data;
    private Context context;
    private int layout;

    private class ViewHoldel {
        TextView txt_name, txt_price;
        ImageView star1s, star2s, star3s, star4s, star5s;
    }
    @Override
    public int getCount() {
        return data.size();
    }

    @Override
    public Object getItem(int position) {
        return position;
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        ServiceAdapter.ViewHoldel viewHoldel;

        if (convertView == null) {
            LayoutInflater layoutInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView = layoutInflater.inflate(layout, null);

            viewHoldel = new ServiceAdapter.ViewHoldel();
            viewHoldel.txt_name= (TextView) convertView.findViewById(R.id.txt_Name_Service);
            viewHoldel.txt_price = (TextView) convertView.findViewById(R.id.txt_price_service);
            convertView.setTag(viewHoldel);
        } else {
            viewHoldel = (ServiceAdapter.ViewHoldel) convertView.getTag();
        }
        //set data
        Services services = data.get(position);
        viewHoldel.txt_price.setText(services.getPrice());
        viewHoldel.txt_name.setText(services.getNameService());

        return convertView;
    }
}
