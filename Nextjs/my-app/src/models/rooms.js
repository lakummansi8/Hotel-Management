// models/Room.js

import mongoose from "mongoose";

const highlightSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  image: {
    type: String, // file path
    required: true,
  },
});

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    subtitle: {
      type: String,
    },

    price: {
      type: Number,
      required: true,
    },

    heroImage: {
      type: String, // main room image
      required: true,
    },

    basicInfo: {
      size: {
        type: String,
      },

      bed: {
        type: String,
      },

      guests: {
        type: Number,
      },

      view: {
        type: String,
      },
    },

    description: {
      type: String,
      required: true,
    },

    highlights: [highlightSchema],

    amenities: [
      {
        type: String,
      },
    ],

    gallery: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Room || mongoose.model("Room", roomSchema);