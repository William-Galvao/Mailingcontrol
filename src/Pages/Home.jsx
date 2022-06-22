import { logout } from "../Firebase/firebase";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <button type="button" class="btn btn-danger" onClick={logout}>
        Sair
      </button>
    </div>
  );
}
