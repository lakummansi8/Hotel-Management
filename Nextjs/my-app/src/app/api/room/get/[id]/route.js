import connectDB from "@/lib/db";
import Room from "@/models/rooms";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  const resolvedParams=await params;
  const data = await Room.findById(resolvedParams.id);

  if (!data) {
    return NextResponse.json({
      message: "data not found",
    });
  }

  return NextResponse.json({
    data,
  });
}