import { Link } from "react-router-dom";

export default function FormHeader() {
  return (
    <Link
      to={"/"}
      class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
    >
      <img class="w-8 h-8 mr-2" src="/icon.svg" alt="logo" />
      Ecommerce
    </Link>
  );
}
