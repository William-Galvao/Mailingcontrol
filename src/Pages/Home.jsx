import { Link } from "react-router-dom";
import Button from "../Components/Button";
import { logout } from "../Firebase/firebase";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/newdata">Novo Registro</Link>
      </div>
      <Button color="danger" onClick={logout}>
        Sair
      </Button>
    </div>
  );
}
