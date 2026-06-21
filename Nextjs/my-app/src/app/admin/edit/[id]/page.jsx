import Userform from "@/app/admin/userform/userform";

export default  function Edit({ params }) {
   
  return (
    <div>
      <Userform mode="edit" id={params.id} />
    </div>
  );
}