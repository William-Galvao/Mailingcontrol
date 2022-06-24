import { Link } from "react-router-dom";
import AllData from "../Components/AllData";
import { logout } from "../Firebase/firebase";

export default function Home() {
  return (
    <div className="vh-100 row">
      <div className="col-2">
        <div>
          <Link to="/newdata">
            <button type="button" class="btn btn-dark">
              Novo Registro
            </button>
          </Link>
        </div>

        <button type="submit" className="btn btn-danger" onClick={logout}>
          Sair
        </button>
      </div>
      <main className="col-10">
        <AllData />
      </main>
    </div>
  );
}
