import styles from "../RoomForm.module.css";
export default function Description({formData,setFormData}) {
    return (
        <div>
            
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
        </div>
    );
}