package com.example.kltn.Employee.API.API_Request_Param;

import com.google.gson.annotations.SerializedName;

public class Request_ChangePassword {
    @SerializedName("email")
    public String emailc;

    public String getEmails() {
        return emailc;
    }

    public void setEmails(String email) {
        this.emailc = email;
    }

    public String getPasswordNew() {
        return passwordNew;
    }

    public void setPasswordNew(String passwordNew) {
        this.passwordNew = passwordNew;
    }

    public String getPasswordOld() {
        return passwordOld;
    }

    public void setPasswordOld(String passwordOld) {
        this.passwordOld = passwordOld;
    }

    public String passwordNew;
    public String passwordOld;
}
