const ContactForm = () => {
  return (
    <div id="CONTACTO" className="py-10">
      <div className="max-w-md w-full mx-auto p-6 bg-contact bg-cover rounded-lg shadow-md">
        <h1 className="text-personal-gray text-[40px] text-center font-bold mb-6">
          CONTACTAME
        </h1>
        <h2 className="text-personal-gray text-center mb-6">
          Estoy preparado para comenzar un nuevo proyecto y trabajar contigo
          para convertir tus ideas en realidad.
        </h2>
        <form action="https://getform.io/f/pbmqkqqb" method="POST">
          <div className="mb-4">
            <label className="block text-personal-gray text-1xl font-semibold mb-2">
              Nombre
            </label>
            <input
              className="block w-full px-3 py-2 border-[2px] border-personal-gray rounded-lg bg-transparent focus:outline-none focus:border-neon-cian focus:ring-neon-cian focus:ring-1 text-personal-gray placeholder-gray-300"
              placeholder="Juan Perez"
              type="text"
              name="name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-personal-gray text-1xl font-semibold mb-2">
              Email
            </label>
            <input
              className="block w-full px-3 py-2 border-[2px] border-personal-gray rounded-lg bg-transparent focus:outline-none focus:border-neon-cian focus:ring-neon-cian focus:ring-1 text-personal-gray placeholder-gray-300 peer-invalid:border-neon-red invalid:text-neon-red peer ..."
              placeholder="juanperez@gmail.com"
              type="email"
              name="email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-personal-gray text-1xl font-semibold mb-2">
              Mensaje
            </label>
            <textarea
              className="block w-full px-3 py-2 border-[2px] border-personal-gray rounded-lg bg-transparent focus:outline-none focus:border-neon-cian focus:ring-neon-cian focus:ring-1 text-personal-gray placeholder-gray-300"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              type="text"
              name="message"
              required
            />
          </div>
          <div>
            <button
              className="bg-personal-gray border-[2px] border-personal-gray text-gray-500 font-semibold px-4 py-2 rounded-lg hover:bg-transparent hover:text-neon-cian hover:border-neon-cian focus:ring focus:ring-neon-cian"
              type="submit"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
