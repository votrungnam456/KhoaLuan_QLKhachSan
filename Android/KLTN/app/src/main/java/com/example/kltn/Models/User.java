package com.example.kltn.Models;

public class User {
    private String nameEmployee;
    private String email;
    private String id;
    private String gender;
    private String identityCard;
    private String id_role;

    public User() {
    }

    public User(String nameEmployee, String email, String id, String gender, String identityCard, String address, String phoneNumber, String codeRole, String nameRole) {
        this.nameEmployee = nameEmployee;
        this.email = email;
        this.id = id;
        this.gender = gender;
        this.identityCard = identityCard;
        this.address = address;
        this.phoneNumber = phoneNumber;
        this.codeRole = codeRole;
        this.nameRole = nameRole;
    }

    public void setId_role(String id_role) {
        this.id_role = id_role;
    }

    public String getId_role() {
        return id_role;
    }

    public String getNameEmployee() {
        return nameEmployee;
    }

    public void setNameEmployee(String nameEmployee) {
        this.nameEmployee = nameEmployee;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getIdentityCard() {
        return identityCard;
    }

    public void setIdentityCard(String identityCard) {
        this.identityCard = identityCard;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getCodeRole() {
        return codeRole;
    }

    public void setCodeRole(String codeRole) {
        this.codeRole = codeRole;
    }

    public String getNameRole() {
        return nameRole;
    }

    public void setNameRole(String nameRole) {
        this.nameRole = nameRole;
    }

    private String address;
    private String phoneNumber;
    private String codeRole;
    private String nameRole;
}
