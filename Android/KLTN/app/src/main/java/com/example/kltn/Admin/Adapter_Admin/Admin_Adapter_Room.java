package com.example.kltn.Admin.Adapter_Admin;

import android.app.Dialog;
import android.content.Context;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Handler;
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
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.chauthai.swipereveallayout.SwipeRevealLayout;
import com.chauthai.swipereveallayout.ViewBinderHelper;
import com.example.kltn.Admin.API_Admin.Param.Response_Room;
import com.example.kltn.Admin.API_Admin.Retrofit_Call;
import com.example.kltn.Models.DetailRoom;
import com.example.kltn.Models.Respone.GetRoomResponse;
import com.example.kltn.Models.Room;
import com.example.kltn.R;
import com.google.android.material.textfield.TextInputEditText;

import java.util.List;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class Admin_Adapter_Room extends RecyclerView.Adapter<Admin_Adapter_Room.Admin_RoomViewHolder> {
    private List<Room> mlist;
    private List<DetailRoom> detailRooms;

    public Admin_Adapter_Room(List<Room> mlist) {
        this.mlist = mlist;
    }
    String value;
    private ViewBinderHelper viewBinderHelper = new ViewBinderHelper();

    @NonNull
    @Override
    public Admin_RoomViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View view = LayoutInflater.from(parent.getContext()).inflate(R.layout.item_room_admin, parent, false);
        return new Admin_RoomViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull Admin_RoomViewHolder holder, int position) {
        Room room = mlist.get(position);
        if(room.getStatus() == 1)
        {
            value = "Đang Hoạt Động";
        }
        else
        {
            value = "Tạm Dừng";
        }
        viewBinderHelper.bind(holder.swipeRevealLayout, room.getIdRoom());
        holder.ad_txt_NameRoom.setText(room.getNameRoom());
        holder.ad_txt_type_room.setText(room.getNameTypeRoom());
        holder.ad_txt_description.setText(room.getDescription());
        holder.ad_txt_status.setText(value);

        holder.delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String id = room.getIdRoom();
                Call<Room> call = Retrofit_Call.getserviceAPI().Admin_Delete_Room(id);
                call.enqueue(new Callback<Room>() {
                    @Override
                    public void onResponse(Call<Room> call, Response<Room> response) {
                        if (response.isSuccessful()) {
                            mlist.remove(holder.getAdapterPosition());
                            notifyItemRemoved(holder.getAdapterPosition());
                            Log.e("logAPI", "Delete Thanh Cong");
                            Log.e("logAPI", String.valueOf(holder.getAdapterPosition()));
                            Log.e("logAPI", room.getIdRoom());
                        } else {
                            Log.e("logAPI", response.errorBody().toString());
                        }

                    }

                    @Override
                    public void onFailure(Call<Room> call, Throwable t) {
                        Log.e("logAPI", t.getMessage());
                    }
                });
            }
        });
        holder.item.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                callAPI_Get_Details_Room(room.getIdRoom());

                new Handler().postDelayed(new Runnable() {
                    @Override
                    public void run() {
                        if (detailRooms != null) {
                            open_Dialog_Details(Gravity.CENTER, v.getContext(), detailRooms);
                        } else {
                            Toast.makeText(v.getContext(), "Error not get data on Server", Toast.LENGTH_LONG).show();
                        }
                    }
                }, 1300);
            }
        });
        holder.update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                open_Dialog_Update(Gravity.CENTER,v.getContext(),holder.getAdapterPosition(),room.getIdRoom(),room);
            }
        });
    }

    @Override
    public int getItemCount() {
        return mlist.size();
    }

    public class Admin_RoomViewHolder extends RecyclerView.ViewHolder {
        private SwipeRevealLayout swipeRevealLayout;
        ImageView ad_star1, ad_star2, ad_star3, ad_star4, ad_star5, ad_img_Room;
        TextView ad_txt_type_room, ad_txt_description, ad_txt_status, ad_txt_NameRoom;
        LinearLayout update, delete;
        LinearLayout item;

        public Admin_RoomViewHolder(@NonNull View itemView) {
            super(itemView);
            swipeRevealLayout = itemView.findViewById(R.id.avSwipeRevealLayout);
            ad_star1 = itemView.findViewById(R.id.admin_star1);
            ad_star2 = itemView.findViewById(R.id.admin_star2);
            ad_star3 = itemView.findViewById(R.id.admin_star3);
            ad_star4 = itemView.findViewById(R.id.admin_star4);
            ad_star5 = itemView.findViewById(R.id.admin_star5);
            ad_txt_type_room = itemView.findViewById(R.id.admin_txt_Type_room);
            ad_txt_description = itemView.findViewById(R.id.admin_txt_description);
            ad_txt_status = itemView.findViewById(R.id.admin_txt_status);
            ad_txt_NameRoom = itemView.findViewById(R.id.admin_txt_Name_Room);
            ad_img_Room = itemView.findViewById(R.id.admin_img_Room);
            update = itemView.findViewById(R.id.admin_update);
            delete = itemView.findViewById(R.id.admin_delete);
            item = itemView.findViewById(R.id.item_room);
        }


    }

    private void open_Dialog_Update(int gravitys, Context context,int potion,String id, Room room) {
        final Dialog dialog = new Dialog(context);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_update_room);

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

        Button btn_cancel = dialog.findViewById(R.id.btn_cancel_room_update);
        Button btn_update = dialog.findViewById(R.id.btn_update_room);

        TextInputEditText name = dialog.findViewById(R.id.update_room_Name);
        TextInputEditText type = dialog.findViewById(R.id.update_room_type);
        TextInputEditText destrips = dialog.findViewById(R.id.update_room_Desciption);

        name.setText(room.getNameRoom());
        type.setText(room.getId_type_room());
        destrips.setText(room.getDescription());
        btn_cancel.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });
        btn_update.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Response_Room room = new Response_Room();
                room.setNameRoom(name.getText().toString());
                room.setIdTypeRoom(type.getText().toString());
                room.setDescription(destrips.getText().toString());
                Call<Room> call = Retrofit_Call.getserviceAPI().Admin_Update_Room(id,room);
                call.enqueue(new Callback<Room>() {
                    @Override
                    public void onResponse(Call<Room> call, Response<Room> response) {
                        if (response.isSuccessful()) {
                            mlist.remove(potion);
                            notifyItemRemoved(potion);
                            Log.e("logAPI", response.message());
                        } else {
                            Log.e("logAPI", response.message());
                        }
                    }

                    @Override
                    public void onFailure(Call<Room> call, Throwable t) {
                        Log.e("logAPI", t.getMessage());
                    }
                });
            }
        });
        dialog.show();
    }

    private void open_Dialog_Details(int gravitys, Context context, List<DetailRoom> detailRooms) {
        final Dialog dialog = new Dialog(context);
        dialog.requestWindowFeature(Window.FEATURE_NO_TITLE);
        dialog.setContentView(R.layout.dialog_details_room);

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

        Button btn_add_service = dialog.findViewById(R.id.btn_close_dialog);
        RecyclerView view = dialog.findViewById(R.id.dialog_rcv);

        LinearLayoutManager linearLayoutManager = new LinearLayoutManager(context);
        view.setLayoutManager(linearLayoutManager);
        Admin_Adapter_Deltails_Room apdater = new Admin_Adapter_Deltails_Room(detailRooms, context);
        view.setAdapter(apdater);
        btn_add_service.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                dialog.dismiss();
            }
        });
        dialog.show();
    }

    public void callAPI_Get_Details_Room(String id) {
        Call<GetRoomResponse> call = Retrofit_Call.getserviceAPI().Admin_Room_Details(id);
        call.enqueue(new Callback<GetRoomResponse>() {
            @Override
            public void onResponse(Call<GetRoomResponse> call, Response<GetRoomResponse> response) {
                detailRooms = response.body().getRoomList();

                for (DetailRoom room : detailRooms) {
                    Log.e("Bug", room.getName());
                }
            }

            @Override
            public void onFailure(Call<GetRoomResponse> call, Throwable t) {

            }
        });
    }
}
