import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "./cadastro.css";

const Cadastro = () => {
  const [isLoginActive, setIsLoginActive] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", senha: "" });
  const [signupData, setSignupData] = useState({
    nomeUsuario: "",
    emailUsuario: "",
    dataNascimento: "",
    paisInteresseId: "",
    senhaUsuario: "",
  });
  const contFormsRef = useRef(null);
  const formLoginRef = useRef(null);
  const formSignUpRef = useRef(null);

  useEffect(() => {
    if (contFormsRef.current && formLoginRef.current && formSignUpRef.current) {
      if (isLoginActive) {
        contFormsRef.current.classList.add("cont_forms_active_login");
        contFormsRef.current.classList.remove("cont_forms_active_sign_up");
        formLoginRef.current.style.display = "block";
        formSignUpRef.current.style.opacity = "0";

        setTimeout(() => {
          formLoginRef.current.style.opacity = "1";
        }, 400);

        setTimeout(() => {
          formSignUpRef.current.style.display = "none";
        }, 200);
      } else {
        contFormsRef.current.classList.add("cont_forms_active_sign_up");
        contFormsRef.current.classList.remove("cont_forms_active_login");
        formSignUpRef.current.style.display = "block";
        formLoginRef.current.style.opacity = "0";

        setTimeout(() => {
          formSignUpRef.current.style.opacity = "1";
        }, 100);

        setTimeout(() => {
          formLoginRef.current.style.display = "none";
        }, 400);
      }
    }
  }, [isLoginActive]);

  const hideLoginAndSignUp = () => {
    if (contFormsRef.current && formLoginRef.current && formSignUpRef.current) {
      contFormsRef.current.classList.remove("cont_forms_active_login", "cont_forms_active_sign_up");
      formSignUpRef.current.style.opacity = "0";
      formLoginRef.current.style.opacity = "0";

      setTimeout(() => {
        formSignUpRef.current.style.display = "none";
        formLoginRef.current.style.display = "none";
      }, 500);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/usuarios/login", loginData);
      localStorage.setItem("token", response.data.token);
      alert("Login bem-sucedido!");
    } catch (error) {
      alert("Erro no login. Verifique suas credenciais.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/usuarios/", signupData);
      alert("Cadastro realizado com sucesso!");
      setIsLoginActive(true);
    } catch (error) {
      alert("Erro no cadastro.");
    }
  };

  return (
    <div className="cadastro">
      <div className="cont_backgroudgray">
        <div className="cotn_principal">
          <div className="cont_centrar">
            <div className="cont_login">
              <div className="cont_info_log_sign_up">
                <div className="col_md_login">
                  <div className="cont_ba_opcitiy">
                    <h2>Entrar</h2>
                    <p>Bem-vindo(a) de volta! Acesse sua conta para continuar.</p>
                    <button className="btn_login" onClick={() => setIsLoginActive(true)}>
                      Login
                    </button>
                  </div>
                </div>
                <div className="col_md_sign_up">
                  <div className="cont_ba_opcitiy">
                    <h2>Criar Conta</h2>
                    <p>É novo por aqui? Cadastre-se e embarque em sua jornada!</p>
                    <button className="btn_sign_up" onClick={() => setIsLoginActive(false)}>
                      Cadastro
                    </button>
                  </div>
                </div>
              </div>

              <div className="cont_forms" ref={contFormsRef}>
                <div className="cont_img_back_"></div>
                <div className="cont_form_login" ref={formLoginRef}>
                  <a href="#" onClick={hideLoginAndSignUp}>
                    <i className="material-icons">&#xE5C4;</i>
                  </a>
                  <h2>Login</h2>
                  <form onSubmit={handleLogin}>
                    <input
                      type="text"
                      placeholder="E-mail"
                      value={loginData.email}
                      onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                    />
                    <input
                      type="password"
                      placeholder="Senha"
                      value={loginData.senha}
                      onChange={(e) => setLoginData({ ...loginData, senha: e.target.value })}
                    />
                    <button className="btn_login" type="submit">
                      Entrar
                    </button>
                  </form>
                </div>
                <div className="cont_form_sign_up" ref={formSignUpRef}>
                  <a href="#" onClick={hideLoginAndSignUp}>
                    <i className="material-icons">&#xE5C4;</i>
                  </a>
                  <h2>Cadastro</h2>
                  <form onSubmit={handleSignup}>
                    <input
                      type="text"
                      placeholder="Nome Completo"
                      value={signupData.nomeUsuario}
                      onChange={(e) =>
                        setSignupData({ ...signupData, nomeUsuario: e.target.value })
                      }
                    />
                    <input
                      type="email"
                      placeholder="E-mail"
                      value={signupData.emailUsuario}
                      onChange={(e) =>
                        setSignupData({ ...signupData, emailUsuario: e.target.value })
                      }
                    />
                    <input
                      type="date"
                      placeholder="Data de Nascimento"
                      value={signupData.dataNascimento}
                      onChange={(e) =>
                        setSignupData({ ...signupData, dataNascimento: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="País de Interesse"
                      value={signupData.paisInteresseId}
                      onChange={(e) =>
                        setSignupData({ ...signupData, paisInteresseId: e.target.value })
                      }
                    />
                    <input
                      type="password"
                      placeholder="Senha"
                      value={signupData.senhaUsuario}
                      onChange={(e) =>
                        setSignupData({ ...signupData, senhaUsuario: e.target.value })
                      }
                    />
                    <button className="btn_sign_up" type="submit">
                      Cadastrar
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
