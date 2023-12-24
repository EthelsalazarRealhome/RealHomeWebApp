import { useNavigate } from "react-router";

export default function DeleteConfirmation () {
  const navigate = useNavigate();

  return (
    <section className="h-[87vh] w-full flex flex-col items-center justify-center">
      <p>Propiedad borrada exitosamente</p>
      <button onClick={() => {navigate("/Admin/MyPosts")}} className='text-black rounded-xl bg-green-500 p-5 m-4'>Regresar a mis publicaciones</button>
    </section>
  );
}