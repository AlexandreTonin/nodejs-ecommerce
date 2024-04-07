import { Link } from "react-router-dom";

export default function LinkButton(props) {
  return (
    <Link
      to={props.href}
      class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
    >
      {props.text}
    </Link>
  );
}
