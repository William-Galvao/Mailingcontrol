import { Link } from "react-router-dom";
import AllData from "../Components/AllData";
import { logout } from "../Firebase/firebase";

export default function Home() {
  return (
    <div className="vh-100 row">
      <aside className="col-2">
        <div className="d-flex flex-column flex-shrink-0 p-2 bg-light align-items-center">
          <h5>
            <b>Mailing Control</b>
          </h5>
          <span>REACT Firebase App</span>
          <br />

          <Link to="/newdata">
            <button type="button" className="btn btn-dark m-2">
              Novo Registro
            </button>
          </Link>
          <button type="submit" className="btn btn-danger m-2" onClick={logout}>
            Sair
          </button>
        </div>
      </aside>
      <main className="col-10">
        <AllData />
      </main>
    </div>
  );
}
