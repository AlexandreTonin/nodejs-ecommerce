import { Link } from "react-router-dom";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import FormLabel from "../components/FormLabel";
import LinkButton from "../components/LinkButton";
import SmallGreyText from "../components/SmallGreyText";
import Button from "../components/Button";

export default function LoginPage() {
  return (
    <div>
      <Form formAction="/login" formMethod="post" header title formTitle="Entre em sua conta">
        <div>
          <FormLabel for="email" text="Email" />
          <FormInput
            type="email"
            name="email"
            placeholder="email@dominio.com"
            required
          />
        </div>
        <div>
          <FormLabel for="password" text="Senha" />
          <FormInput
            type="password"
            name="senha"
            placeholder="••••••••"
            required
          />
        </div>
        <div class="flex items-center justify-end">
          <LinkButton href="/forgotpassword" text="Esqueceu sua senha?" />
        </div>
        <Button text="Entrar" type="submit" />
        <SmallGreyText>
          Ainda não possui uma conta?{" "}
          <LinkButton href="/register" text="Registre-se" />
        </SmallGreyText>
      </Form>
    </div>
  );
}
