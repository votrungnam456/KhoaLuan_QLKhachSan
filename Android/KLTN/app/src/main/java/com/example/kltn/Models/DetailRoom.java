package com.example.kltn.Models;

import android.os.Parcel;
import android.os.Parcelable;

public class DetailRoom implements Parcelable {
    String id;

    public DetailRoom(String id, String idType, int quantity, String name, int typeDetail) {
        this.id = id;
        this.idType = idType;
        this.quantity = quantity;
        this.name = name;
        this.typeDetail = typeDetail;
    }

    protected DetailRoom(Parcel in) {
        id = in.readString();
        idType = in.readString();
        quantity = in.readInt();
        name = in.readString();
        typeDetail = in.readInt();
    }

    public static final Creator<DetailRoom> CREATOR = new Creator<DetailRoom>() {
        @Override
        public DetailRoom createFromParcel(Parcel in) {
            return new DetailRoom(in);
        }

        @Override
        public DetailRoom[] newArray(int size) {
            return new DetailRoom[size];
        }
    };

    public String getIdRooms_deltais() {
        return id;
    }

    public void setIdRooms_deltais(String id) {
        this.id = id;
    }

    public String getIdType() {
        return idType;
    }

    public void setIdType(String idType) {
        this.idType = idType;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public String getName() {
        return name;
    }

    public void setNameRoom(String name) {
        this.name = name;
    }

    public int getTypeDetail() {
        return typeDetail;
    }

    public void setTypeDetail(int typeDetail) {
        this.typeDetail = typeDetail;
    }

    String idType;
    int quantity;
    String name;
    int typeDetail;

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(id);
        dest.writeString(idType);
        dest.writeInt(quantity);
        dest.writeString(name);
        dest.writeInt(typeDetail);
    }
}
