import { Link } from "react-router-dom";
import Logo from "../assets/Jobee_Logo.png"; // ajustá la ruta si tu assets está en otro lado
import "../App.css"; 

export default function Constructor() {
  return (
    <div className="min-h-screen grid place-items-center bg-gray-50">
      <div className="text-center">
         <div className="flex justify-center mb-4">
          <img src={Logo} alt="Logo De Jobee" className="interactive-logo" />
        </div>
        <h1 className="m-0 text-4xl font-bold">JoBee</h1>
        <h2 className="text-lg text-gray-600 mt-2">Conectá, Crecé, Volá</h2>

        <Link
          to="/home"
          className="inline-block mt-6 rounded-xl px-5 py-2.5 bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition"
        >
          Entrar
        </Link>
      </div>
    </div>
  );
}