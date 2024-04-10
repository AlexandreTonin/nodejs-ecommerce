import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import FormLabel from "../components/FormLabel";
import LinkButton from "../components/LinkButton";
import SmallGreyText from "../components/SmallGreyText";
import Button from "../components/Button";
import { useState } from "react";
import axios from "axios";
import { FaRegCheckCircle } from "react-icons/fa";
import ModalAlert from "../components/ModalAlert";
import { VscError } from "react-icons/vsc";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  });
  const [enviado, setEnviado] = useState(null);
  const [mensagem, setMensagem] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/register",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
      setToken(token);
      setEnviado(true);
      setMensagem("Os dados foram enviados com sucesso.");
      setFormData({ nome: "", email: "", senha: "" });
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setEnviado(false);
      setMensagem("Os dados não foram enviados. Por favor, tente novamente.");
    }
  };

  const renderModal = () => {
    if (enviado === true) {
      return (
        <div className="absolute h-screen w-screen flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold">
          <ModalAlert
            text="Cadastro realizado com sucesso"
            icon={<FaRegCheckCircle className="text-green-400 text-5xl" />}
          />
        </div>
      );
    } else if (enviado === false) {
      return (
        <div
          className="absolute h-screen w-screen flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl font-bold"
          onClick={() => setEnviado(null)}
        >
          <ModalAlert
            text="Não foi possível enviar os dados"
            buttonText="Tentar novamente"
            icon={<VscError className="text-red-400" />}
            onClick={() => setEnviado(null)}
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <>
      {renderModal()}

      <Form header title formTitle="Crie sua conta" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="nome"
          placeholder="Albert Einstein"
          required
          labelFor="nome"
          labelText="Nome"
          value={formData.nome}
          onChange={handleChange}
        />
        <FormInput
          type="email"
          name="email"
          placeholder="email@dominio.com"
          required
          labelFor="email"
          labelText="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormInput
          type="password"
          name="senha"
          placeholder="••••••••"
          required
          labelFor="password"
          labelText="Senha"
          value={formData.senha}
          onChange={handleChange}
        />
        <Button text="Entrar" type="submit" />
        <SmallGreyText>
          Já possui uma conta? <LinkButton href="/login" text="Entrar" />
        </SmallGreyText>
      </Form>
    </>
  );
}
