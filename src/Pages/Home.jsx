import { Link } from "react-router-dom";
import AllData from "../Components/AllData";
import { logout } from "../Firebase/firebase";

export default function Home() {
  return (
    <div className="vh-100 row">
      <div className="col-3">
        <ul>
          <li>
            <Link to="/newdata">Novo registro</Link>
          </li>
        </ul>

        <button type="submit" className="btn btn-danger" onClick={logout}>
          Sair
        </button>
      </div>
      <main className="col-9">
        <AllData />
      </main>
    </div>
  );
}
