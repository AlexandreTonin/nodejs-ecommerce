import Button from "../components/Button";
import Form from "../components/Form";
import FormInput from "../components/FormInput";
import SmallGreyText from "../components/SmallGreyText";

export default function ForgotPasswordPage() {
  return (
    <div>
      <Form
        formAction="/forgotpassword"
        formMethod="post"
        header
        title
        formTitle="Recupere sua senha"
      >
        <FormInput
          type="email"
          name="email"
          placeholder="email@dominio.com"
          required
          labelFor="email"
          labelText="Email"
        />
        <SmallGreyText>
          Um email será enviado para redefinir sua senha
        </SmallGreyText>
        <Button text="Enviar" />
      </Form>
    </div>
  );
}
