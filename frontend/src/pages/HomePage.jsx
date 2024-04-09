import Header from "../components/Header";
import { FaApple } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa6";
import ProductCard from "../components/ProductCard";

export default function HomePage() {
  return (
    <>
      <Header />
      <section className="min-h-[calc(100vh-5rem)] w-screen bg-gray-900">
        <div className="container mx-auto py-8 text-gray-800 dark:text-white flex flex-col gap-8">
          <div className="w-full h-80 rounded-lg flex items-center justify-center">
            <p className="text-6xl absolute font-bold z-50 text-gray-300 flex gap-6 place-items-center">
              <FaApple></FaApple>Produtos Apple
            </p>
            <img
              src="/apple-park.jpg"
              alt=""
              className="w-full h-full object-cover opacity-50 rounded-lg"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            <ProductCard img="macbook.png" name="MacBook Pro"price={6000}/>
            <ProductCard img="iphone.jpeg" name="iPhone 13"price={3500}/>
            <ProductCard img="macbook.png" name="MacBook Pro"price={6000}/>
            <ProductCard img="iphone.jpeg" name="iPhone 13"price={3500}/>
          </div>
        </div>
      </section>
    </>
  );
}
