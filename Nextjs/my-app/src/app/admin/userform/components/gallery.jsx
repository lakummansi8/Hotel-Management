import styles from "../RoomForm.module.css";
export default function Gallery({ formData, setFormData }) {
  return (
    <div>
      {/* Gallery */}
      <div className={styles.section}>
        <h2>Gallery</h2>
        {formData.gallery.map((img, index) =>
          typeof img === "string" ? (
            <img key={index} src={img} alt="gallery" width="150" />
          ) : null
        )}
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
    </div>
  );
}