import React from 'react';

const DeleteConfirmationModal = ({ onCancel, onConfirm }) => {
  return (
    <section className="ease-in duration-300 fixed text-gray-300 right-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col items-center justify-center gap-7 z-10">
      <p className="text-xl font-bold">¿Está seguro que desea eliminar el post?</p>
      <div className="flex flex-row items-center justify-center gap-7">
        <button onClick={onCancel} className="text-black rounded-xl bg-green-500 p-5 m-4">
          Cancelar
        </button>
        <button onClick={onConfirm} className="text-black rounded-xl bg-red-700 p-5 m-4">
          Eliminar
        </button>
      </div>
    </section>
  );
};

export default DeleteConfirmationModal;
