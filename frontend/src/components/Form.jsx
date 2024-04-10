import { Link } from "react-router-dom";
import FormHeader from "./FormHeader";
import FormLabel from "./FormLabel";
import FormInput from "./FormInput";
import Title from "./Title";
import LinkButton from "./LinkButton";
import Button from "./Button";
import SmallGreyText from "./SmallGreyText";
import ShadowCard from "./ShadowCard";

export default function Form(props) {
  return (
    <section class="bg-gray-50 dark:bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        {props.header ? <FormHeader /> : null}
        <ShadowCard>
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            {props.title ? <Title text={props.formTitle} /> : null}
            <form
              class="space-y-4 md:space-y-6"
              action={props.formAction}
              method={props.formMethod}
              onSubmit={props.onSubmit}
            >
              {props.children}
            </form>
          </div>
        </ShadowCard>
      </div>
    </section>
  );
}
