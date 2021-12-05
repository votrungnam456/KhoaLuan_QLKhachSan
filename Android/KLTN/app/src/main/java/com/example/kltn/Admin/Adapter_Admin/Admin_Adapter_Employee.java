package com.example.kltn.Admin.Adapter_Admin;

import android.app.Dialog;
import android.content.Context;
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

import com.example.kltn.Admin.API_Admin.Param.Response_Employee;
import com.example.kltn.Admin.API_Admin.Param.Response_Room;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Room;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Models.DetailRoom;
import com.example.kltn.Models.Room;
import com.example.kltn.Models.Services;
import com.example.kltn.Models.User;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Adapter_Employee extends RecyclerView.Adapter<Admin_Adapter_Employee.ViewHolder> {
    private List<User> mlist;
    private Context context;

    public Admin_Adapter_Employee(List<User> mlist, Context context) {
        this.mlist = mlist;
        this.context = context;
    }

    @NonNull
    @Override
    public ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_employee, parent, false);
        return new Admin_Adapter_Employee.ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull ViewHolder holder, int position) {
        User user = mlist.get(position);
        holder.admin_name_epm.setText(user.getNameEmployee());
        holder.admin_emp_email.setText(String.valueOf(user.getEmail()));
        holder.admin_nameRole.setText(String.valueOf(user.getNameRole()));
        holder.admin_gender.setText(String.valueOf(user.getGender()));
        holder.admin_emp_cmnd.setText(String.valueOf(user.getIdentityCard()));
        holder.admin_emp_address.setText(String.valueOf(user.getAddress()));
        holder.item.setOnLongClickListener(new View.OnLongClickListener() {
            @Override
            public boolean onLongClick(View v) {
                String id = user.getId();
                Log.e("logAPI", "Co AAAAAAAAAAAAAAAAAAAA");
                open_Dialog_Buttom(Gravity.BOTTOM, v.getContext(), id, holder.getAdapterPosition(),user);
                return false;
            }
        });
    }

    @Override
    public int getItemCount() {
        return mlist.size();
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        ImageView ad_img_Room;
        TextView admin_name_epm, admin_nameRole, admin_gender, admin_emp_cmnd;
        TextView admin_emp_email, admin_emp_address;
        LinearLayout item;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            admin_name_epm = itemView.findViewById(R.id.admin_name_epm);
            admin_nameRole = itemView.findViewById(R.id.admin_nameRole);
            admin_emp_cmnd = itemView.findViewById(R.id.admin_emp_cmnd);
            admin_gender = itemView.findViewById(R.id.admin_gender);
            ad_img_Room = itemView.findViewById(R.id.admin_emp_imgae);
            admin_emp_email = itemView.findViewById(R.id.admin_emp_email);
            admin_emp_address = itemView.findViewById(R.id.admin_emp_address);
            item = itemView.findViewById(R.id.item_emp);
        }
    }

    private void open_Dialog_Buttom(int gravitys, Context context, String id, int potion,User users) {

        final Dialog dialog = new Dialog(context);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_long_click_item_emp);

        Window window = dialog.getWindow();
        if (window == null) {
            return;
        }
        window.setLayout(WindowManager.LayoutParams.MATCH_PARENT, WindowManager.LayoutParams.WRAP_CONTENT);
        window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

        WindowManager.LayoutParams windowActibute = window.getAttributes();
        windowActibute.gravity = gravitys;
        window.setAttributes(windowActibute);

        if (Gravity.CENTER == gravitys) {
            dialog.setCancelable(true);
        } else {
            dialog.setCancelable(false);
        }

        Button btn_cancel = dialog.findViewById(R.id.btn_cancel_enmp);
        Button btn_update = dialog.findViewById(R.id.btn_update_emp);
        Button btn_delete = dialog.findViewById(R.id.btn_delete_emp);

        btn_cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });
        btn_delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                callAPI_Delete_Emp(id, potion);
                dialog.dismiss();
            }
        });
        btn_update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_update_Emp(Gravity.CENTER,v.getContext(),id,potion,users);
                dialog.dismiss();
            }
        });

        dialog.show();
    }

    private void callAPI_Delete_Emp(String id, int potion) {
        Call<User> call = Retrofit_Call.getserviceAPI().Admin_Delete_Employee(id);
        call.enqueue(new Callback<User>() {
            @Override
            public void onResponse(Call<User> call, Response<User> response) {
                mlist.remove(potion);
                notifyItemRemoved(potion);
                Log.e("logAPI", response.message() + "Delete EMP");
            }

            @Override
            public void onFailure(Call<User> call, Throwable t) {
                Log.e("logAPI", t.getMessage() + "Failed Delete EMP");
            }
        });
    }

    private void open_Dialog_update_Emp(int gravitys, Context context, String id, int potion, User user) {

        final Dialog dialog = new Dialog(context);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_employ);

        Window window = dialog.getWindow();
        if (window == null) {
            return;
        }
        window.setLayout(WindowManager.LayoutParams.MATCH_PARENT, WindowManager.LayoutParams.WRAP_CONTENT);
        window.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));

        WindowManager.LayoutParams windowActibute = window.getAttributes();
        windowActibute.gravity = gravitys;
        window.setAttributes(windowActibute);

        if (Gravity.CENTER == gravitys) {
            dialog.setCancelable(true);
        } else {
            dialog.setCancelable(false);
        }

        Button btn_cancel = dialog.findViewById(R.id.btn_cancel_emp_updae);
        Button btn_svae_emp = dialog.findViewById(R.id.btn_svae_emp);

        TextInputEditText name = dialog.findViewById(R.id.edt_name_employee_update);
        TextInputEditText mail = dialog.findViewById(R.id.update_gmail_emp);
        TextInputEditText phone = dialog.findViewById(R.id.update_emp_Phone);
        TextInputEditText cmnd = dialog.findViewById(R.id.update_emp_Cmnd);
        TextInputEditText address = dialog.findViewById(R.id.update_emp_Address);
        TextInputEditText gender = dialog.findViewById(R.id.update_emp_Gender);

        name.setText(user.getNameEmployee());
        mail.setText(user.getEmail());
        phone.setText(user.getPhoneNumber());
        cmnd.setText(user.getIdentityCard());
        address.setText(user.getAddress());
        gender.setText(user.getGender());
        String id_role = user.getId_role();
        btn_svae_emp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Response_Employee res = new Response_Employee();
                res.setAddress(address.getText().toString());
                res.setEmail(mail.getText().toString());
                res.setNameEmployee(name.getText().toString());
                res.setIdentityCard(cmnd.getText().toString());
                res.setPhoneNumber(phone.getText().toString());
                res.setIdRole(id_role);
                res.setGender(gender.getText().toString());
                Call<User> call = Retrofit_Call.getserviceAPI().Update_Employee(id,res);
                call.enqueue(new Callback<User>() {

                    @Override
                    public void onResponse(Call<User> call, Response<User> response) {
                        updateItem(user,potion,address.getText().toString(),mail.getText().toString(),gender.getText().toString(),cmnd.getText().toString(),cmnd.getText().toString(),name.getText().toString());
                        Log.e("logAPI", response.message() + "Update EMP");
                    }

                    @Override
                    public void onFailure(Call<User> call, Throwable t) {
                        Log.e("logAPI", t.getMessage() + "Failed Update EMP");
                    }
                });
                dialog.dismiss();
            }
        });
        btn_cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });
        dialog.show();
    }

    private void callAPI_Update_Employee(String id, Response_Employee response_employee,User user,int position, String address, String email, String gender, String identityCard, String phoneNumber, String nameEmployee) {

    }

    private void updateItem(User item, int position, String address, String email, String gender, String identityCard, String phoneNumber, String nameEmployee) {
        item.setNameEmployee(nameEmployee);
        item.setAddress(address);
        item.setEmail(email);
        item.setGender(gender);
        item.setPhoneNumber(phoneNumber);
        item.setIdentityCard(identityCard);
        // update item field
        notifyItemChanged(position, item);
    }
}
