"use client";

import { useState } from "react";
import styles from "./RoomForm.module.css";

export default function Userform() {
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

    gallery: [null],
  });

  const handleSubmit = async (e) => {
  e.preventDefault();

  const data = new FormData();

  data.append("title", formData.title);
  data.append("subtitle", formData.subtitle);
  data.append("price", formData.price);
  data.append("heroImage", formData.heroImage);
  data.append("description", formData.description);

  data.append("size", formData.basicInfo.size);
  data.append("bed", formData.basicInfo.bed);
  data.append("guests", formData.basicInfo.guests);
  data.append("view", formData.basicInfo.view);

  data.append("highlightTitle", formData.highlights[0].title);
  data.append("highlightDescription", formData.highlights[0].description);
  data.append("highlightImage", formData.highlights[0].image);

  formData.amenities.forEach((amenity) => {
    data.append("amenities", amenity);
  });

  formData.gallery.forEach((file) => {
    data.append("gallery", file);
  });

  try {
    const response = await fetch("/api/room/post", {
      method: "POST",
      body: data,
    });

    const result = await response.json();

    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

  const handleAmenityChange = (amenity) => {
    if (formData.amenities.includes(amenity)) {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter((item) => item !== amenity),
      });
    } else {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, amenity],
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Create Room</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Basic Information */}
        <div className={styles.section}>
          <h2>Basic Information</h2>

          <div className={styles.grid}>
            <div>
              <label>Room Title</label>
              <input
                type="text"
                placeholder="Deluxe Room"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />

            </div>

            <div>
              <label>Room Subtitle</label>
              <input
                type="text"
                placeholder="Luxury Stay Experience"
                value={formData.subtitle}
                onChange={(e) =>
                  setFormData({ ...formData, subtitle: e.target.value })
                }
              />
            </div>

            <div>
              <label>Price Per Night</label>
              <input
                type="number"
                placeholder="5000"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
              />
            </div>

            <div>
              <label>Hero Image URL</label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({ ...formData, heroImage: e.target.files[0] })
                }
              />
            </div>
          </div>
        </div>

        {/* Room Information */}
        <div className={styles.section}>
          <h2>Room Information</h2>

          <div className={styles.grid}>
            <div>
              <label>Bed Type</label>
              <input
                type="text"
                placeholder="King Size Bed"
                value={formData.basicInfo.bed}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    basicInfo: {
                      ...formData.basicInfo,
                      bed: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div>
              <label>Room Size</label>
              <input
                type="text"
                placeholder="450 sq ft"
                value={formData.basicInfo.size}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    basicInfo: {
                      ...formData.basicInfo,
                      size: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div>
              <label>Max Guests</label>
              <input
                type="number"
                placeholder="2"
                value={formData.basicInfo.guests}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    basicInfo: {
                      ...formData.basicInfo,
                      guests: e.target.value,
                    },
                  })
                }
              />
            </div>

            <div>
              <label>View</label>
              <input
                type="text"
                placeholder="Sea View"
                value={formData.basicInfo.view}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    basicInfo: {
                      ...formData.basicInfo,
                      view: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className={styles.section}>
          <h2>Description</h2>

          <textarea
            rows="6"
            placeholder="Enter room description..."
            className={styles.textarea}
            value={formData.description}
            onChange={(e) =>
              setFormData({
                ...formData,
                description: e.target.value,
              })
            }
          />
        </div>

        {/* Room Highlight Card */}
        <div className={styles.section}>
          <h2>Room Highlights</h2>

          <div className={styles.highlightCard}>
            <input
              type="text"
              placeholder="Highlight Title"
              value={formData.highlights[0].title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  highlights: [
                    {
                      ...formData.highlights[0],
                      title: e.target.value,
                    },
                  ],
                })
              }
            />

            <textarea
              rows="3"
              placeholder="Highlight Description"
              value={formData.highlights[0].description}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  highlights: [
                    {
                      ...formData.highlights[0],
                      description: e.target.value,
                    },
                  ],
                })
              }
            />

            <input
              type="file"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  highlights: [
                    {
                      ...formData.highlights[0],
                      image: e.target.files[0],
                    },
                  ],
                })
              }
            />
          </div>
        </div>

        {/* Amenities */}
        <div className={styles.section}>
          <h2>Amenities</h2>

          <div className={styles.amenities}>
            {[
              "WiFi",
              "Air Conditioning",
              "Smart TV",
              "Balcony",
              "Room Service",
              "Refrigerator",
            ].map((amenity) => (
              <label key={amenity}>
                <input
                  type="checkbox"
                  checked={formData.amenities.includes(amenity)}
                  onChange={() => handleAmenityChange(amenity)}
                />
                {amenity}
              </label>
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className={styles.section}>
          <h2>Gallery</h2>

          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) =>
              setFormData({
                ...formData,
                gallery: Array.from(e.target.files),
              })
            }
          />
        </div>

        <button type="submit" className={styles.submitBtn}>
          Create Room
        </button>
      </form>
    </div>
  );
}