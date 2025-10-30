import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Entrar no Sistema</h2>
        <form>
          <div className="input-group">
            <input type="email" id="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="input-group">
            <input type="password" id="senha" placeholder="Digite sua senha" />
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
