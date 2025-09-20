import { useState } from "react";

export default function Sign_In_User() {
  const [person, setPerson] = useState({
    email: "",
    password: "",
    name: "",
    ci:"",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPerson((prev) => ({ ...prev, [id]: value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de la persona:", person);
  };
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-yellow-600">Sign In User se cargó 👌</h1>
      <form >
        <label htmlFor="email">Email:</label>
        <input type="email"
          id="email"
          value={person.email}
          onChange={handleChange}
          placeholder="Cual es su email?"
          required
        />
        <br />
        <label htmlFor="password">Contraseña:</label>
        <input type="password"
          id="password"
          value={person.password}
          onChange={handleChange}
          placeholder="Escriba su contraseña"
          required
        />
        <br />
        <label htmlFor="name">Nombre:</label>
        <input type="text"
          id="name"
          value={person.name}
          onChange={handleChange}
          placeholder="Cual es su nombre?"
          required
        />
        <br />
        <label htmlFor="ci">C.I:</label>
        <input type="number"
          id="ci"
          value={person.ci}
          onChange={handleChange}
          placeholder="Cual es su C.I?"
          required
        />
        <br />
        <button type="submit">
          Registrar empresa
        </button>
      </form>
    </div>
  );
}