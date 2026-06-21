import Userform from "@/app/admin/userform/userform";

export default async function Edit({ params }) {
   const resolvedParams=await params
  return (
    <div>
      <Userform mode="edit" id={resolvedParams.id} />
    </div>
  );
}