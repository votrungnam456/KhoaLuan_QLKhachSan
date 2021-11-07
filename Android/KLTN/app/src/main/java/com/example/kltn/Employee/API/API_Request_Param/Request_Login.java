package com.example.kltn.Employee.API.API_Request_Param;

public class Request_Login {
    private String email;

    public String get_email() {
        return email;
    }

    public void set_email(String _email) {
        this.email = _email;
    }


    public void set_password(String _password) {
        this.passWord = _password;
    }

    private String passWord;

}
