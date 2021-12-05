package com.example.kltn.Admin.API_Admin.Param;

public class Response_Employee {
    String address;
    String email;
    String gender;
    String identityCard;
    String phoneNumber;
    String nameEmployee;
    String idRole;

    public String getAddress() {
        return address;
    }

    public String getEmailEmp() {
        return email;
    }

    public String getGender() {
        return gender;
    }

    public String getIdRole() {
        return idRole;
    }

    public String getIdentityCard() {
        return identityCard;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setIdentityCard(String identityCard) {
        this.identityCard = identityCard;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public void setIdRole(String idRole) {
        this.idRole = idRole;
    }
}
