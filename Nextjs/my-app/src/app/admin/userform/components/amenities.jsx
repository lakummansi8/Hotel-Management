import styles from "../RoomForm.module.css";
export default function Amenities({formData,setFormData}) {
   const handleAmenityChange = (amenity) => {
    if (formData.amenities.includes(amenity)) {
      setFormData({
        ...formData,
        amenities: formData.amenities.filter(
          (item) => item !== amenity
        ),
      });
    } else {
      setFormData({
        ...formData,
        amenities: [...formData.amenities, amenity],
      });
    }
  };
    return (
        <div>
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
        
        </div>
    );
}