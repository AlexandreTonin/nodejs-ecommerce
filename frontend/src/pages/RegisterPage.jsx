import { Link } from "react-router-dom";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import FormLabel from "../components/FormLabel";
import LinkButton from "../components/LinkButton";
import SmallGreyText from "../components/SmallGreyText";
import Button from "../components/Button";

export default function RegisterPage() {
  return (
    <Form
      formAction="/register"
      formMethod="post"
      header
      title
      formTitle="Crie sua conta"
    >
      <FormInput
        type="text"
        name="nome"
        placeholder="Albert Einstein"
        required
        labelFor="nome"
        labelText="Nome"
      />
      <FormInput
        type="email"
        name="email"
        placeholder="email@dominio.com"
        required
        labelFor="email"
        labelText="Email"
      />
      <FormInput
        type="password"
        name="senha"
        placeholder="••••••••"
        required
        labelFor="password"
        labelText="Senha"
      />
      <Button text="Entrar" type="submit" />

      <SmallGreyText>
        Já possui uma conta? <LinkButton href="/login" text="Entrar" />
      </SmallGreyText>
    </Form>
  );
}
