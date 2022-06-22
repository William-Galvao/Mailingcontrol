export default function Login() {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <form className="d-flex flex-column justify-content-center">
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Senha"
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Acessar
        </button>
      </form>
    </div>
  );
}
