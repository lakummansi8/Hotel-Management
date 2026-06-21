"use client";

import { useState } from "react";
import styles from "./bedtype.module.css";

export default function BedType() {
  const [bedType, setBedType] = useState("");
  const [bedTypes, setBedTypes] = useState([
    { id: 1, name: "Single Bed" },
    { id: 2, name: "Double Bed" },
  ]);

  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!bedType.trim()) return;

    if (editId) {
      setBedTypes(
        bedTypes.map((bed) =>
          bed.id === editId ? { ...bed, name: bedType } : bed
        )
      );

      setEditId(null);
    } else {
      const newBedType = {
        id: Date.now(),
        name: bedType,
      };

      setBedTypes([...bedTypes, newBedType]);
    }

    setBedType("");
  };

  const handleEdit = (bed) => {
    setBedType(bed.name);
    setEditId(bed.id);
  };

  const handleDelete = (id) => {
    setBedTypes(bedTypes.filter((bed) => bed.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Bed Types</h1>

      <div className={styles.form}>
        <input
          type="text"
          placeholder="Enter Bed Type"
          value={bedType}
          onChange={(e) => setBedType(e.target.value)}
          className={styles.input}
        />

        <button onClick={handleSubmit} className={styles.addBtn}>
          {editId ? "Update" : "Add"}
        </button>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Bed Type</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {bedTypes.map((bed) => (
            <tr key={bed.id}>
              <td>{bed.id}</td>
              <td>{bed.name}</td>

              <td>
                <button
                  className={styles.editBtn}
                  onClick={() => handleEdit(bed)}
                >
                  Edit
                </button>

                <button
                  className={styles.deleteBtn}
                  onClick={() => handleDelete(bed.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}