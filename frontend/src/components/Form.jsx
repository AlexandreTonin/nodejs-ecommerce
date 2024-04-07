import { Link } from "react-router-dom";
import FormHeader from "./FormHeader";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import Title from "./Title";
import LinkButton from "./LinkButton";
import Button from "./Button";
import SmallGreyText from "./SmallGreyText";
import ShadowCard from "./ShadowCard";

export default function Form() {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <FormHeader />
        <ShadowCard>
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Title text="Entre em sua conta" />
            <form class="space-y-4 md:space-y-6" action="/login" method="post">
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
            </form>
          </div>
        </ShadowCard>
      </div>
    </section>
  );
}
