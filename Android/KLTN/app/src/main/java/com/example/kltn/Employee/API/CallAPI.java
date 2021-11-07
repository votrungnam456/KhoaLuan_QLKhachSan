package com.example.kltn.Employee.API;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class CallAPI {
    //contruct Retrofit
    private static Retrofit getRetrofit() {
        Retrofit retrofit = new Retrofit.Builder()
                                .addConverterFactory(GsonConverterFactory.create())
                                .baseUrl("http://107.167.80.37:8000/")
                                .build();
        return retrofit;
    };
    //login
    public static ServiceAPI getserviceAPI ()
    {
        ServiceAPI serviceAPI = getRetrofit().create(ServiceAPI.class);
        return serviceAPI;
    }
}
