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
import android.widget.ImageView;
import android.widget.LinearLayout;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.chauthai.swipereveallayout.SwipeRevealLayout;
import com.chauthai.swipereveallayout.ViewBinderHelper;
import com.example.kltn.Admin.API_Admin.Param.Respone_Service;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Models.Services;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Adapter_Service extends RecyclerView.Adapter<Admin_Adapter_Service.Admin_Service_ViewHolder> {

    private List<Services> mlist;

    public Admin_Adapter_Service(List<Services> mlist) {
        this.mlist = mlist;
    }

    private ViewBinderHelper viewBinderHelper = new ViewBinderHelper();

    @NonNull
    @Override
    public Admin_Service_ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_services_admin, parent, false);
        return new Admin_Adapter_Service.Admin_Service_ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull Admin_Service_ViewHolder holder, int position) {
        Services services = mlist.get(position);
        viewBinderHelper.bind(holder.swipeRevealLayout, services.getIdServices());
        holder.ad_name_service.setText(services.getNameService());
        holder.ad_txt_price.setText(services.getPrice());

        holder.delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String id = services.getIdServices();
                Call<Services> call = Retrofit_Call.getserviceAPI().Admin_Delete_Service(id);
                call.enqueue(new Callback<Services>() {
                    @Override
                    public void onResponse(Call<Services> call, Response<Services> response) {
                        if (response.isSuccessful()) {
                            mlist.remove(holder.getAdapterPosition());
                            notifyItemRemoved(holder.getAdapterPosition());
                        } else {
                            Log.e("logAPI", response.errorBody().toString());
                        }
                    }

                    @Override
                    public void onFailure(Call<Services> call, Throwable t) {
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
                dialog.setContentView(R.layout.dialog_update_service);

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

                Button btn_cancel_services = dialog.findViewById(R.id.btn_cancel);
                Button btn_update_service = dialog.findViewById(R.id.btn_update_service);
                TextInputEditText name = dialog.findViewById(R.id.edt_name_service_upxate);
                TextInputEditText price = dialog.findViewById(R.id.edt_price_service_upxate);
                name.setText(services.getNameService());
                price.setText(services.getPrice());
               btn_cancel_services.setOnClickListener(new View.OnClickListener() {
                   @Override
                   public void onClick(View v) {
                       dialog.dismiss();
                   }
               });
                btn_update_service.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        String id = services.getIdServices();
                        Respone_Service param = new Respone_Service();
                        param.setNameService(name.getText().toString());
                        param.setPrice(Integer.valueOf(price.getText().toString()));
                        String names = name.getText().toString();
                        String pri = price.getText().toString();
                        Call<Services> call = Retrofit_Call.getserviceAPI().Admin_Update_Service(id,param);
                        call.enqueue(new Callback<Services>() {
                            @Override
                            public void onResponse(Call<Services> call, Response<Services> response) {
                                updateItem(services,holder.getAdapterPosition(),pri,names);
                                dialog.dismiss();
                                Log.e("logAPI", "Updayte Thanh Cong");
                                Log.e("logAPI", String.valueOf(holder.getAdapterPosition()));
                                Log.e("logAPI", services.getIdServices());
                            }

                            @Override
                            public void onFailure(Call<Services> call, Throwable t) {
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

    public class Admin_Service_ViewHolder extends RecyclerView.ViewHolder {
        ImageView ad_star1, ad_star2, ad_star3, ad_star4, ad_star5;
        TextView ad_name_service, ad_txt_price;
        LinearLayout update, delete;
        private SwipeRevealLayout swipeRevealLayout;

        public Admin_Service_ViewHolder(@NonNull View itemView) {
            super(itemView);
            swipeRevealLayout = itemView.findViewById(R.id.avSwipeRevealLayout_service);
            ad_name_service = itemView.findViewById(R.id.admin_txt_Name_Service);
            ad_txt_price = itemView.findViewById(R.id.admin_txt_price_service);
            update = itemView.findViewById(R.id.admin_update_service);
            delete = itemView.findViewById(R.id.admin_delete_service);
        }
    }

    private void updateItem(Services item, int position, String price, String name) {
        item.setNameService(name);
        item.setPrice(price);
        // update item field
        notifyItemChanged(position, item);
    }

}
