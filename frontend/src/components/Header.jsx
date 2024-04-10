import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { useState } from "react";

export default function Header() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="w-screen bg-gray-50 dark:bg-gray-900 h-20 border-b border-gray-800">
      <header class="bg-gray-50 dark:bg-gray-900 h-20 w-screen flex border-b border-gray-800 items-center container mx-auto justify-between">
        <Link
          to={"/"}
          class="flex items-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <img class="w-8 h-8 mr-2" src="/icon.svg" alt="logo" />
          Ecommerce
        </Link>

        <div className="text-gray-900 dark:text-white flex items-center gap-12">
          <navbar class="flex gap-4 transition">
            <Link
              to={"/products"}
              className="hover:text-gray-600 dark:hover:text-slate-400 transition ease-in-out cursor-pointer"
            >
              Produtos
            </Link>
            <Link
              to={"/sales"}
              className="hover:text-gray-600 dark:hover:text-gray-400 transition ease-in-out cursor-pointer"
            >
              Ofertas
            </Link>
            <Link
              to={"/about"}
              className="hover:text-gray-600 dark:hover:text-gray-400 transition ease-in-out cursor-pointer"
            >
              Sobre
            </Link>
          </navbar>
          {isAuthenticated ? (
            <span className="text-2xl flex items-center gap-4">
              <Link
                to={"/cart"}
                className="hover:text-gray-600 dark:hover:text-gray-400 transition ease-in-out cursor-pointer"
              >
                <FaCartShopping />
              </Link>
              <Link
                to={"/account"}
                className="hover:text-gray-600 dark:hover:text-gray-400 transition ease-in-out cursor-pointer"
              >
                <IoPersonCircle />
              </Link>
            </span>
          ) : (
            <span className="flex items-center gap-4">
              <Link
                to={"/login"}
                className="hover:text-gray-600 dark:hover:text-gray-400 transition ease-in-out cursor-pointer"
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className="hover:text-gray-600 dark:hover:text-gray-400 transition ease-in-out cursor-pointer"
              >
                <button
                  type="button"
                  class="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cadastrar
                </button>
              </Link>
            </span>
          )}
        </div>
      </header>
    </div>
  );
}
