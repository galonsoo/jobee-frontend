import { Link } from "react-router-dom";
export default function Contacts_User() {
  return (
    <div className="p-10">
      <nav>
        <Link to={"/user/dashboard"}>Inicio</Link>
        <Link to={"/user/profile"}>Perfil</Link>
        <Link to={"/user/company"}>Empresas</Link>
        <Link to={"/user/contacts"}>Contactos</Link>
        <Link to={"/user/courses"}>Cursos</Link>
      </nav>
      <h1 className="text-4xl font-bold text-yellow-600">Contactos de user cargó 👌</h1>
      <p className="mt-3 text-gray-700">Router + Tailwind OK.</p>
    </div>
  );
}