import confetti from "canvas-confetti";
import Footer from "./Footer";

const ContactForm = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 160,
    });
  };

  return (
    <div id="CONTACTO" className="pt-10 bg-contact sm:bg-cover bg-contain">
      <div className="sm:max-w-md sm:w-full sm:mx-auto mx-4 mb-10 p-6 bg-black/50 border-2 border-white rounded-lg shadow-lg shadow-neon-cian">
        <h2 className="sm:text-7xl text-5xl text-bold mb-10 text-center text-personal-gray font-bebas-neue tracking-widest">
          CONTACTAME
        </h2>
        <h2 className="text-personal-gray text-center mb-6 font-roboto tracking-widest">
          Estoy preparado para comenzar un nuevo proyecto y trabajar con vos
          para convertir tus ideas en realidad.
        </h2>
        <form
          className="font-roboto tracking-widest"
          action="https://getform.io/f/pbmqkqqb"
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-personal-gray text-1xl font-semibold mb-2">
              Nombre
            </label>
            <input
              className="block w-full px-3 py-2 border-2 border-personal-gray rounded-lg bg-transparent focus:outline-none focus:border-neon-cian focus:ring-neon-cian focus:ring-1 text-personal-gray placeholder-gray-300"
              placeholder="John Doe"
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
              className="block w-full px-3 py-2 border-2 border-personal-gray rounded-lg bg-transparent focus:outline-none focus:border-neon-cian focus:ring-neon-cian focus:ring-1 text-personal-gray placeholder-gray-300 peer-invalid:border-neon-red invalid:text-neon-red peer ..."
              placeholder="johndoe@gmail.com"
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
              className="block w-full px-3 py-2 border-2 border-personal-gray rounded-lg bg-transparent focus:outline-none focus:border-neon-cian focus:ring-neon-cian focus:ring-1 text-personal-gray placeholder-gray-300"
              rows={4}
              placeholder="Escribe tu mensaje aquí..."
              type="text"
              name="message"
              required
            />
          </div>
          <div>
            <button
              onClick={handleClick}
              className="bg-personal-gray border-2 border-personal-gray text-black font-semibold px-4 py-2 rounded-lg hover:bg-transparent hover:text-personal-gray hover:border-personal-gray hover:shadow-md hover:shadow-neon-cian focus:ring focus:ring-neon-cian"
              type="submit"
            >
              ENVIAR
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
