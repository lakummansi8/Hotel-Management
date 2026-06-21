"use client";

import BasicInfo from "./components/basicInfo";
import RoomInfo from "./components/roomInfo";
import Description from "./components/description";
import RoomHighlight from "./components/roomhighlight";
import Amenities from "./components/amenities";
import Gallery from "./components/gallery";
import { useState, useEffect } from "react";
import styles from "./RoomForm.module.css";

export default function Userform({ id,mode }) {
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    price: "",
    heroImage: null,

    basicInfo: {
      size: "",
      bed: "",
      guests: "",
      view: "",
    },

    description: "",

    highlights: [
      {
        title: "",
        description: "",
        image: null,
      },
    ],

    amenities: [],
    gallery: [],
  });

  // EDIT FETCH
  useEffect(() => {
    if (mode === "edit" && id) {
      fetchRoom();
    }
  }, [id, mode]);

  console.log("ID:", id);

  async function fetchRoom() {
    const response = await fetch(`/api/room/get/${id}`);
    const result = await response.json();
    console.log(result);
    const room = result.data;

    setFormData({
      title: room.title || "",
      subtitle: room.subtitle || "",
      price: room.price || "",
      heroImage: room.heroImage || null,

      basicInfo: {
        size: room.basicInfo?.size || "",
        bed: room.basicInfo?.bed || "",
        guests: room.basicInfo?.guests || "",
        view: room.basicInfo?.view || "",
      },

      description: room.description || "",

      highlights: room.highlights?.length
        ? room.highlights
        : [
            {
              title: "",
              description: "",
              image: null,
            },
          ],

      amenities: room.amenities || [],
      gallery: room.gallery || [],
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("subtitle", formData.subtitle);
    data.append("price", formData.price);
    data.append("description", formData.description);

    data.append("size", formData.basicInfo.size);
    data.append("bed", formData.basicInfo.bed);
    data.append("guests", formData.basicInfo.guests);
    data.append("view", formData.basicInfo.view);

    data.append("highlightTitle", formData.highlights[0].title);
    data.append(
      "highlightDescription",
      formData.highlights[0].description
    );

    if (formData.heroImage instanceof File) {
      data.append("heroImage", formData.heroImage);
    }

    if (formData.highlights[0].image instanceof File) {
      data.append("highlightImage", formData.highlights[0].image);
    }

    formData.amenities.forEach((amenity) => {
      data.append("amenities", amenity);
    });

    formData.gallery.forEach((file) => {
      if (file instanceof File) {
        data.append("gallery", file);
      }
    });

    try {
      let response;

      if (mode === "add") {
        response = await fetch("/api/room/post", {
          method: "POST",
          body: data,
        });
      } else if (mode === "edit") {
        response = await fetch(`/api/room/update/${id}`, {
          method: "PUT",
          body: data,
        });
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {mode === "add" ? "Create Room" : "Edit Room"}
      </h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <BasicInfo formData={formData} setFormData={setFormData} />
        <RoomInfo formData={formData} setFormData={setFormData} />
        <Description formData={formData} setFormData={setFormData} />
        <RoomHighlight formData={formData} setFormData={setFormData} />
        <Amenities formData={formData} setFormData={setFormData} />
        <Gallery formData={formData} setFormData={setFormData} />

        <button type="submit" className={styles.submitBtn}>
          {mode === "add" ? "Create Room" : "Update Room"}
        </button>
      </form>
    </div>
  );
}