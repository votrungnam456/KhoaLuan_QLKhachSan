package com.example.kltn.Admin.Adapter_Admin;

import android.app.Dialog;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.Window;
import android.view.WindowManager;
import android.widget.Button;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.chauthai.swipereveallayout.SwipeRevealLayout;
import com.chauthai.swipereveallayout.ViewBinderHelper;
import com.example.kltn.Admin.API_Admin.Param.Response_Device;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Models.Devices;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Adapter_Device extends RecyclerView.Adapter<Admin_Adapter_Device.Admin_Device_ViewHolder> {
    private List<Devices> mlist;
    private String value;
    private ViewBinderHelper viewBinderHelper = new ViewBinderHelper();

    public Admin_Adapter_Device(List<Devices> mlist) {
        this.mlist = mlist;
    }

    @NonNull
    @Override
    public Admin_Device_ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_admin_device, parent, false);
        return new Admin_Adapter_Device.Admin_Device_ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull Admin_Device_ViewHolder holder, int position) {
        Devices devices = mlist.get(position);
        if (devices.isStatus()) {
            value = "Còn Hoạt Động";
        } else {
            value = "Đang Đình Trệ";
        }
        viewBinderHelper.bind(holder.swipeRevealLayout, devices.getId_Device());
        holder.admin_name_device.setText(devices.getNameHotelDevice());
        holder.admin_quantity_device.setText(String.valueOf(devices.getQuantity()));
        holder.admin_status_device.setText(value);
        holder.admin_price_device.setText(String.valueOf(devices.getPrice()));

        holder.delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String id = devices.getId_Device();
                Call<Devices> call = Retrofit_Call.getserviceAPI().Admin_Delete_Device(id);
                call.enqueue(new Callback<Devices>() {
                    @Override
                    public void onResponse(Call<Devices> call, Response<Devices> response) {
                        mlist.remove(holder.getAdapterPosition());
                        notifyItemRemoved(holder.getAdapterPosition());
                        Log.e("logAPI", "Delete Thanh Cong");
                        Log.e("logAPI", String.valueOf(holder.getAdapterPosition()));
                        Log.e("logAPI", devices.getId_Device());
                    }

                    @Override
                    public void onFailure(Call<Devices> call, Throwable t) {
                        Log.e("logAPI", t.getMessage());
                    }
                });
            }
        });

        holder.update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                final Dialog dialog = new Dialog(v.getContext());
                dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
                dialog.setContentView(R.layout.dialog_updare_device);

                Window window = dialog.getWindow();
                if (window == null) {
                    return;
                }
                window.setLayout(WindowManager.LayoutParams.MATCH_PARENT, WindowManager.LayoutParams.WRAP_CONTENT);
                window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

                WindowManager.LayoutParams windowActibute = window.getAttributes();
                windowActibute.gravity = Gravity.CENTER;
                window.setAttributes(windowActibute);

                if (Gravity.CENTER == Gravity.CENTER) {
                    dialog.setCancelable(true);
                } else {
                    dialog.setCancelable(false);
                }

                Button btn_cancel = dialog.findViewById(R.id.btn_cancel_update);
                Button btn_add = dialog.findViewById(R.id.btn_update_device);
                TextInputEditText name = dialog.findViewById(R.id.edt_name_device_update);
                TextInputEditText price = dialog.findViewById(R.id.edt_price_device_update);
                TextInputEditText status = dialog.findViewById(R.id.edt_status_device_update);
                TextInputEditText quantity = dialog.findViewById(R.id.edt_quantity_device_update);
                name.setText(devices.getNameHotelDevice());
                price.setText(String.valueOf(devices.getPrice()));
                quantity.setText(String.valueOf(devices.getQuantity()));
                status.setText(String.valueOf(value));

                btn_cancel.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        dialog.dismiss();
                    }
                });

                btn_add.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        String id = devices.getId_Device();
                        Response_Device param = new Response_Device();
                        param.setNameHotelDevice(name.getText().toString());
                        param.setPrice(Integer.valueOf(price.getText().toString()));
                        param.setQuantity(Integer.valueOf(quantity.getText().toString()));
                        String names = name.getText().toString();
                        int pri = Integer.valueOf(price.getText().toString());
                        int quan = Integer.valueOf(quantity.getText().toString());
                        Call<Devices> call = Retrofit_Call.getserviceAPI().Admin_Update_Device(id,param);
                        call.enqueue(new Callback<Devices>() {
                            @Override
                            public void onResponse(Call<Devices> call, Response<Devices> response) {
                                updateItem(devices,holder.getAdapterPosition(),pri,names,quan);
                                dialog.dismiss();
                                Log.e("logAPI", "Update Thanh Cong");
                                Log.e("logAPI", String.valueOf(holder.getAdapterPosition()));
                                Log.e("logAPI", devices.getId_Device());
                            }

                            @Override
                            public void onFailure(Call<Devices> call, Throwable t) {
                                Log.e("logAPI", t.getMessage());
                            }
                        });
                    }
                });
                dialog.show();
            }
        });
    }

    @Override
    public int getItemCount() {
        return mlist.size();
    }

    public class Admin_Device_ViewHolder extends RecyclerView.ViewHolder {
        private SwipeRevealLayout swipeRevealLayout;
        TextView admin_name_device, admin_quantity_device, admin_status_device, admin_price_device;
        LinearLayout update, delete;

        public Admin_Device_ViewHolder(@NonNull View itemView) {
            super(itemView);
            swipeRevealLayout = itemView.findViewById(R.id.avSwipeRevealLayout_device);
            admin_name_device = itemView.findViewById(R.id.admin_name_device);
            admin_quantity_device = itemView.findViewById(R.id.admin_quantity_device);
            admin_status_device = itemView.findViewById(R.id.admin_status_device);
            admin_price_device = itemView.findViewById(R.id.admin_price_device);
            update = itemView.findViewById(R.id.admin_update_device);
            delete = itemView.findViewById(R.id.admin_delete_device);
        }
    }

    private void updateItem(Devices item, int position, int price, String name,int quantity) {
        item.setNameHotelDevice(name);
        item.setPrice(price);
        item.setQuantity(quantity);
        // update item field
        notifyItemChanged(position, item);
    }

}
