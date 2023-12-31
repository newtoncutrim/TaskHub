import React from "react";
import styles from "./Login.module.css";
import { Link } from "@inertiajs/react";
import Input from "@/Components/Forms/Input";
import Button from "@/Components/Forms/Button";
import useForm from "@/Hooks/useForm";
// import axios from "axios";
import { UserContext } from "@/UserContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
    const email = useForm("email");
    const password = useForm("password");
    const { userLogin, error, loading } = React.useContext(UserContext);

    const [passwordVisible, setPasswordVisible] = React.useState(false);

    const handleTogglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    async function handleSubmit(event) {
        event.preventDefault();
        if (email.validate() && password.validate()) {
            userLogin(email.value, password.value);
        }
    }

    return (
        <div className={styles.loginContainer}>
            <section className={`animeLeft ${styles.login}`}>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <h1 className="title">Login</h1>
                        <Input
                            label="Email :"
                            type="text"
                            name="email"
                            {...email}
                        />

                        <div className={styles.passwordContainer}>
                            <Input
                                label="Senha"
                                type={passwordVisible ? "text" : "password"}
                                name="senha"
                                {...password}
                            />
                            <button
                                type="button"
                                className={styles.togglePasswordButton}
                                onClick={handleTogglePasswordVisibility}
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {loading ? (
                            <Button disabled>Carregando...</Button>
                        ) : (
                            <Button>Entrar</Button>
                        )}
                        {error && <p className="error">{error}</p>}
                    </form>

                    <Link href="/recuperar " className={styles.perdeu}>
                        Perdeu a Senha ?
                    </Link>

                    <div className={styles.formCadastro}>
                        <h2 className="title">Cadastre-se</h2>
                        <p className={styles.paragrafo}>
                            Ainda não possui uma conta? Cadastre-se grátis
                        </p>
                        <Button>
                            <Link href="/cadastro ">Cadastro</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
