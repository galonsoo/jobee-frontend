import { Routes, Route, Navigate, Link } from "react-router-dom";
import Constructor from "./pages/Constructor.jsx";
import Home from "./pages/Home.jsx";
import Log_In from "./pages/Log_In.jsx";
import Sign_in_Company from "./pages/Sign_In_Company.jsx";
import Sign_in_User from "./pages/Sign_In_User.jsx";

function NotFound() {
  return (
    <div className="p-10">
      <p>404</p>
      <Link to="/constructor" className="text-blue-600 underline">Ir a la landing</Link>
    </div>
  );
}

export default function App() {
  return (
    <>
      <nav className="p-4 bg-white shadow flex gap-4">
        <Link to="/constructor" className="text-blue-600 hover:underline">Landing</Link>
        <Link to="/home" className="text-blue-600 hover:underline">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Navigate to="/constructor" replace />} />
        <Route path="/constructor" element={<Constructor />} />
        <Route path="/home" element={<Home />} />
        <Route path="/log_in" element={<Log_In />} /> 
        <Route path="/sign_in_company" element={<Sign_in_Company />} />
        <Route path="/sign_in_user" element={<Sign_in_User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}



