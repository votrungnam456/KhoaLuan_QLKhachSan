package com.example.kltn.Admin.API_Admin;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class Retrofit_Call {
    private static Retrofit getRetrofit() {
        Retrofit retrofit = new Retrofit.Builder()
                .addConverterFactory(GsonConverterFactory.create())
                .baseUrl("http://107.167.80.37:8000/")
                .build();
        return retrofit;
    };


    public static CallAPI_Admin getserviceAPI ()
    {
        CallAPI_Admin callAPI_admin = getRetrofit().create(CallAPI_Admin.class);
        return callAPI_admin;
    }
}
