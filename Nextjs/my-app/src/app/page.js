"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RoomsPage() {
  const router=useRouter();
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRooms = async () => {
    try {
      const res = await fetch("/api/room/get");
      const data = await res.json();

      if (data.success) {
        setRooms(data.data);
      }
    } catch (error) {
      console.log("Error fetching rooms:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);



  if (loading) return <p>Loading rooms...</p>;

  function handleEdit(id)
  {
    router.push(`/admin/edit/${id}`);
  }

  function handleadd()
  {
    router.push("/admin/add");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>All Rooms</h1>

      <table border="1" cellPadding="10" cellSpacing="0" width="100%">
        <thead>
          <tr>
            <th>Room Name</th>
            <th>Price</th>
            <th>Capacity</th>
            <th>Bed Type</th>
            <th>Room Size</th>
            <th>Status</th>
            <th>Amenities</th>
            <th>Images</th>
          </tr>
        </thead>

        <tbody>
          {rooms.map((room) => (
           
            <tr key={room._id}>
              <td>{room.title}</td>
              <td>₹{room.price}</td>
              <td>{room.basicInfo.guests}</td>
              <td>{room.basicInfo.bed}</td>
              <td>{room.basicInfo.size} sq.ft</td>
              <td>{room.status}</td>

              <td>
                {room.amenities?.length > 0
                  ? room.amenities.join(", ")
                  : "No amenities"}
              </td>

              <td>
                {room.gallery?.length > 0 ? (
                  room.gallery.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="room"
                      width="80"
                      height="60"
                      style={{ marginRight: "5px" }}
                    />
                  ))
                ) : (
                  "No images"
                )}
              </td>
               <td><button onClick={(e)=>handleEdit(room._id)}>edit</button>
               <button onClick={handleadd}>add</button>
               </td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}