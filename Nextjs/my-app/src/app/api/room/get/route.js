import connectDB from "@/lib/db";
import Room from "@/models/rooms";
import { NextResponse } from "next/server";

// GET all rooms
export async function GET() {
  try {
    await connectDB();

    const rooms = await Room.find();

    return NextResponse.json(
      {
        success: true,
        data: rooms,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching rooms:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch rooms",
      },
      { status: 500 }
    );
  }
}