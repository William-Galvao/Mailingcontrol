import { Link } from "react-router-dom";
import { logout } from "../Firebase/firebase";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/newdata">Novo Registro</Link>
      </div>

      <button type="button" class="btn btn-danger" onClick={logout}>
        Sair
      </button>
    </div>
  );
}
