import styles from "../RoomForm.module.css";
export default function RoomInfo({formData,setFormData}) {
    return (
        <div>
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
        
        </div>
    );
}