package com.example.kltn.API;

import com.example.kltn.Models.Room;
import com.example.kltn.Models.User;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.GET;
import retrofit2.http.POST;

public interface ServiceAPI {

    @POST("user/login")
    Call<User>  UserLogin(@Body Request_Login  request_login);

    @GET("manager/room")
    Call<Room> GetRoom();

}
