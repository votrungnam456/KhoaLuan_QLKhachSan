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
import com.example.kltn.Admin.Interface_Click.IClick_Type_Employee;
import com.example.kltn.Models.Type_Employee;
import com.example.kltn.Models.Type_Room;
import com.example.kltn.R;

import java.util.List;

public class Adapter_Type_Employee extends RecyclerView.Adapter<Adapter_Type_Employee.Viewholder>{

    List<Type_Employee> type_employees;
    IClick_Type_Employee iClick_typeRooms;

    public Adapter_Type_Employee(List<Type_Employee> type_employees, Context context, IClick_Type_Employee iClick_typeRoom) {
        this.type_employees = type_employees;
        this.iClick_typeRooms = iClick_typeRoom;
        this.context = context;
    }

    Context context;
    @NonNull
    @Override
    public Viewholder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_type_employee, parent, false);
        return new Adapter_Type_Employee.Viewholder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull Viewholder holder, int position) {
        Type_Employee type_employee = type_employees.get(position);
        holder.txtView.setText(type_employee.getNameRoless());
        holder.item_click_type_emp.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                iClick_typeRooms.Click(type_employee);
            }
        });
    }

    @Override
    public int getItemCount() {
        return type_employees.size();
    }

    public class Viewholder extends RecyclerView.ViewHolder {
        LinearLayout item_click_type_emp;
        TextView txtView;
        public Viewholder(@NonNull View itemView) {
            super(itemView);
            txtView = itemView.findViewById(R.id.txt_type_employee_item);
            item_click_type_emp = itemView.findViewById(R.id.item_click_type_employee);
        }

    }
}
