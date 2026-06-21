import connectDB from "@/lib/db";
import Admin from "@/models/admin";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export async function GET(req) {
    await connectDB(); 
    const hashedPassword=await bcrypt.hash("password",10);
    const body=await Admin.create({
        email:"admin123@gmail.com",
        password:hashedPassword,
    });

    if(!body)
    {
        return NextResponse.json({
            message:"admin not created",
        });
    }
    return NextResponse.json({
        message:"admin created successfully",
    });
}