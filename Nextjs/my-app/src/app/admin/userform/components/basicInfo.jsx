import styles from "../RoomForm.module.css";
export default function BasicInfo({formData,setFormData}) {
    return (
        <div>
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
        </div>
    );
}