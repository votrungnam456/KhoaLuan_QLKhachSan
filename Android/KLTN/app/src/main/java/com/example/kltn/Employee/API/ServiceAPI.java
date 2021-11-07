package com.example.kltn.Employee.API;

import com.example.kltn.Employee.API.API_Request_Param.GetRoom_Request;
import com.example.kltn.Employee.API.API_Request_Param.Requesr_GetOTP;
import com.example.kltn.Employee.API.API_Request_Param.Request_ChangePassword;
import com.example.kltn.Employee.API.API_Request_Param.Request_Login;
import com.example.kltn.Employee.API.API_Request_Param.Request_RePass;
import com.example.kltn.Employee.Models.Room;
import com.example.kltn.Employee.Models.Services;
import com.example.kltn.Employee.Models.User;

import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface ServiceAPI {

    @POST("user/login")
    Call<User>  UserLogin(@Body Request_Login request_login);

    //get room no param
    @GET("manager/room")
    Call<List<Room>> GetRoom();

    //get room with param
    @POST("manager/room")
    Call<Room> GetRoomOderBy(@Body GetRoom_Request getRoom_request);

    //get services
    @GET("manager/service")
    Call<List<Services>> GetServieces();

    //get OTP
    @POST("user/get-verification")
    Call<User> GetOTP(@Body Requesr_GetOTP requesr_getOTP);

    //Reset Password or Change Pass
    @POST("user/get-pass")
    Call<User> Change_Pass(@Body Request_RePass request_rePass);

    //Change Pass
    @POST("user/change-pass")
    Call<User> Re_Pass(@Body Request_ChangePassword request_changePassword);
}
