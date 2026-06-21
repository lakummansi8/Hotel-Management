import styles from "../RoomForm.module.css";
export default function RoomHighlight({ formData, setFormData }) {
  return (
    <div>
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
          {typeof formData.highlights[0].image === "string" && (
            <img src={formData.highlights[0].image} alt="highlight" width="200" />
          )}
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
    </div>
  );
}