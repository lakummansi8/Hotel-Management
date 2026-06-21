import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Room from "@/models/rooms";
import { uploadsFile } from "@/lib/uploadFile";

export async function POST(req) {
  try {
    await connectDB();

    const formData = await req.formData();

    // normal fields
    const title = formData.get("title");
    const subtitle = formData.get("subtitle");
    const price = formData.get("price");
    const description = formData.get("description");

    // basic info
    const size = formData.get("size");
    const bed = formData.get("bed");
    const guests = formData.get("guests");
    const view = formData.get("view");

    // highlight
    const highlightTitle = formData.get("highlightTitle");
    const highlightDescription = formData.get("highlightDescription");

    // amenities
    const amenities = formData.getAll("amenities");

    // files (IMPORTANT)
    const heroImage = formData.get("heroImage");
    const highlightImage = formData.get("highlightImage");
    const gallery = formData.getAll("gallery");

    // upload files
    const heroPath = heroImage ? await uploadsFile(heroImage):null;

    const highlightPath = highlightImage ? await uploadsFile(highlightImage):null;

    const galleryPath = [];

    for (const file of gallery) {
      const imagePath = await uploadsFile(file);
      galleryPath.push(imagePath);
    }

    // save room
    const room = await Room.create({
      title,
      subtitle,
      price,
      heroImage: heroPath,

      basicInfo: {
        size,
        bed,
        guests,
        view,
      },

      description,

      highlights: [
        {
          title: highlightTitle,
          description: highlightDescription,
          image: highlightPath,
        },
      ],

      amenities,
      gallery: galleryPath,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Room created successfully",
        room,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log("ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}