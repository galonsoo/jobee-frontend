import { useState } from "react";

export default function Sign_In_Company() {
  const [company, setCompany] = useState({
    email: "",
    password: "",
    name: "",
    rut:"",
    legalReason: "",
    socialGroup: "",
    subGrup: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setCompany((prev) => ({ ...prev, [id]: value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos de la empresa:", company);
  };
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-black-600">Sign In Company se cargó 👌</h1>
      <form onSubmit={handleSubmit}>
        
        <label htmlFor="email">Email:</label>
        <input type="email"
          id="email"
          value={company.email}
          onChange={handleChange}
          placeholder="Cual es su email?"
          required
        />

        <br />
        
        <label htmlFor="password">Contraseña:</label>
        <input type="password"
          id="password"
          value={company.password}
          onChange={handleChange}
          placeholder="Cree una contraseña"
          required
        />

        <br />

        <label htmlFor="name">Nombre:</label>
        <input type="text"
          id="name"
          value={company.name}
          onChange={handleChange}
          placeholder="Como se llama su empresa?"
          required
        />

        <br />
        <label htmlFor="rut">RUT:</label>
        <input type="number"
          id="rut"
          value={company.rut}
          onChange={handleChange}
          placeholder="Cual es su RUT?"
          required
        />

        <br />

        <label htmlFor="legalReason">Razon Social:</label>
        <input type="text"
          id="legalReason"
          value={company.legalReason}
          onChange={handleChange}
          placeholder="Cual es su razon social?"
          required
        />

        <br />

        <label htmlFor="socialGroup">Grupo Social:</label>
        <input type="text"
          id="socialGroup"
          value={company.socialGroup}
          onChange={handleChange}
          placeholder="Cual es su grupo social?"
          required
        />

        <br />

        <label htmlFor="subGroup">Sub Grupo:</label>
        <input type="text"
          id="subGroup"
          value={company.subGroup}
          onChange={handleChange}
          placeholder="Cual es su sub grupo ?"
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