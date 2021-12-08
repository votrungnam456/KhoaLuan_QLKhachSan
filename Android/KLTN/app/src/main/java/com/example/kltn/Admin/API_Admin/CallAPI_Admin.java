package com.example.kltn.Admin.API_Admin;

import com.example.kltn.Admin.API_Admin.Param.Response_Device;
import com.example.kltn.Admin.API_Admin.Param.Response_Employee;
import com.example.kltn.Admin.API_Admin.Param.Response_Room;
import com.example.kltn.Admin.API_Admin.Param.Respone_Service;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Device;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Room;
import com.example.kltn.Admin.API_Admin.Param.ServerResponse_Service;
import com.example.kltn.Admin.API_Admin.Param.SeverResponse_Employee;
import com.example.kltn.Models.Devices;
import com.example.kltn.Models.Respone.GetRoomResponse;
import com.example.kltn.Models.Room;
import com.example.kltn.Models.Services;
import com.example.kltn.Models.Type_Employee;
import com.example.kltn.Models.Type_Room;
import com.example.kltn.Models.User;

import java.lang.reflect.Type;
import java.util.List;

import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.DELETE;
import retrofit2.http.GET;
import retrofit2.http.POST;
import retrofit2.http.PUT;
import retrofit2.http.Path;

public interface CallAPI_Admin {

    //get room no param
    @GET("manager/room")
    Call<List<Room>> Admin_GetList_Room();

    //Update room
    @PUT("manager/room/{idRoom}")
    Call<Room> Admin_Update_Room(@Path("idRoom") String id, @Body Response_Room room);

    //DELETE room
    @DELETE("manager/room/{id}")
    Call<Room> Admin_Delete_Room( @Path("id") String id);

    //get service no param
    @GET("manager/service")
    Call<List<Services>> Admin_GetList_Service();

    //Add service
    @POST("manager/service")
    Call<ServerResponse_Service> Admin_Add_Service(@Body Respone_Service add_update_service );

    //Update service
    @PUT("manager/service/{id}")
    Call<Services> Admin_Update_Service(@Path("id") String id ,@Body Respone_Service responeService);

    //DELETE service
    @DELETE("manager/service/{id}")
    Call<Services> Admin_Delete_Service(@Path("id") String id);


    //get service no param
    @GET("manager/hotel-device")
    Call<List<Devices>> Admin_GetList_Device();

    //Add service
    @POST("manager/hotel-device")
    Call<ServerResponse_Device> Admin_Add_Device(@Body Response_Device add_update_service );

    //Update service
    @PUT("manager/hotel-device/{id}")
    Call<Devices> Admin_Update_Device(@Path("id") String id, @Body Response_Device param_add_device);

    //DELETE service
    @DELETE("manager/hotel-device/{id}")
    Call<Devices> Admin_Delete_Device(@Path("id") String id);

    @GET("manager/room/{id}")
    Call<GetRoomResponse> Admin_Room_Details(@Path("id") String id);

    @POST("manager/room")
    Call<ServerResponse_Room> Admin_Add_Room_Test(@Body Response_Room add);

    @GET("manager/type-room")
    Call<List<Type_Room>> Admin_Get_Type_Room ();

    @GET("/user/")
    Call<List<User>> Admin_GetALL_Employee();

    @DELETE("/user/{id}")
    Call<User> Admin_Delete_Employee(@Path("id") String id);

    @PUT("/user/{id}")
    Call<User> Update_Employee(@Path("id") String id, @Body Response_Employee response_employee);

    @GET("/manager/type-room")
    Call<List<Type_Room>> GetList_Type_Room();

    @GET("/manager/role")
    Call<List<Type_Employee>> GetList_Type_Employee();

    @POST("/user/")
    Call<SeverResponse_Employee> Admin_Add_User(@Body Response_Employee add);
}
