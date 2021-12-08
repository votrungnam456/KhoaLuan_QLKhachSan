package com.example.kltn.Admin.Activitys_Admin;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.constraintlayout.widget.ConstraintLayout;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.annotation.SuppressLint;
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

import com.example.kltn.Admin.API_Admin.Param.Response_Employee;
import com.example.kltn.Admin.API_Admin.Param.Response_Room;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Room;
import com.example.kltn.Admin.API_Admin.Param.SeverResponse_Employee;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Admin.Adapter_Admin.Adapter_Type_Employee;
import com.example.kltn.Admin.Adapter_Admin.Adapter_Type_Room;
import com.example.kltn.Admin.Adapter_Admin.Admin_Adapter_Employee;
import com.example.kltn.Admin.Adapter_Admin.Admin_Adapter_Room;
import com.example.kltn.Admin.Interface_Click.IClick_TypeRoom;
import com.example.kltn.Admin.Interface_Click.IClick_Type_Employee;
import com.example.kltn.Employee.Activitys.Login_Activity;
import com.example.kltn.Models.Room;
import com.example.kltn.Models.Type_Employee;
import com.example.kltn.Models.Type_Room;
import com.example.kltn.Models.User;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;
import java.util.Objects;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Employee_Activity extends AppCompatActivity {

    RecyclerView recyclerView;
    List<User> list_users = Login_Activity.users;
    ImageView admin_imgv_add_user;
    Admin_Adapter_Employee apdater;
    TextView role;
    Adapter_Type_Employee adapter_type_employee;
    List<Type_Employee> type_employees = Login_Activity.type_employees;
    private String id_type_emp;
    User user_response;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_admin_employee);
        mapping();
        event();
    }
    private void event() {
        LinearLayoutManager linearLayoutManager  = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(linearLayoutManager);
        apdater = new Admin_Adapter_Employee(list_users,this);
        recyclerView.setAdapter(apdater);
        admin_imgv_add_user.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Add(Gravity.CENTER);
            }
        });
    }

    private void mapping() {
        admin_imgv_add_user = findViewById(R.id.admin_imgv_add_employee);
        recyclerView = findViewById(R.id.admin_recycle_employee);
    }
    private void open_Dialog_Add(int gravitys){
        final Dialog dialog = new Dialog(this);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_add_employee);

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

        Button btn_cancel = dialog.findViewById(R.id.btn_cancel_emp_add);
        Button btn_add = dialog.findViewById(R.id.btn_add_emp);

        TextInputEditText name = dialog.findViewById(R.id.add_Name_Emp);
        TextInputEditText identityCard = dialog.findViewById(R.id.add_identityCard);
        TextInputEditText address = dialog.findViewById(R.id.add_address);
        TextInputEditText phoneNumber = dialog.findViewById(R.id.add_phoneNumber);
        TextInputEditText gender = dialog.findViewById(R.id.add_gender);
        TextInputEditText email = dialog.findViewById(R.id.add_email);
        role = dialog.findViewById(R.id.add_type_Emp);
        ConstraintLayout item_type_room_layout = dialog.findViewById(R.id.item_emp);
        btn_cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });

        btn_add.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Response_Employee new_user = new Response_Employee();
                new_user.setNameEmployee(Objects.requireNonNull(name.getText()).toString());
                new_user.setIdentityCard(Objects.requireNonNull(identityCard.getText()).toString());
                new_user.setGender(Objects.requireNonNull(gender.getText()).toString());
                new_user.setAddress(Objects.requireNonNull(address.getText()).toString());
                new_user.setPhoneNumber(Objects.requireNonNull(phoneNumber.getText()).toString());
                new_user.setEmail(Objects.requireNonNull(email.getText()).toString());
                new_user.setIdRole(id_type_emp);
                Call<SeverResponse_Employee> call = Retrofit_Call.getserviceAPI().Admin_Add_User(new_user);
                call.enqueue(new Callback<SeverResponse_Employee>() {
                    @SuppressLint("NotifyDataSetChanged")
                    @Override
                    public void onResponse(@NonNull Call<SeverResponse_Employee> call, @NonNull Response<SeverResponse_Employee> response) {
                        assert response.body() != null;
                        user_response = response.body().getUserResponse();
                        list_users.add(user_response);
                        apdater.notifyDataSetChanged();
                        Log.e("logAPI",String.valueOf(response.body().getMessageUser()));
                        dialog.dismiss();
                    }

                    @Override
                    public void onFailure(@NonNull Call<SeverResponse_Employee> call, Throwable t) {
                        Log.e("logAPI", t.getMessage());
                    }
                });
            }
        });
        role.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Type_EMP(Gravity.CENTER,v.getContext());
            }
        });
        item_type_room_layout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Type_EMP(Gravity.CENTER,v.getContext());
            }
        });
        dialog.show();
    }
    private void open_Dialog_Type_EMP(int gravitys, Context context) {
        final Dialog dialog = new Dialog(context);
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
        adapter_type_employee = new Adapter_Type_Employee(type_employees, this, new IClick_Type_Employee() {
            @Override
            public void Click(Type_Employee type_employee) {
                id_type_emp = type_employee.getIdRole();
                role.setText(type_employee.getNameRoless());
                dialog.dismiss();
            }
        });
        view.setAdapter(adapter_type_employee);

        dialog.show();
    }
}