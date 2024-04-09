import { FaCartPlus } from "react-icons/fa6";

export default function ProductCard(props) {
  return (
    <div className="border border-gray-800 p-3">
      <img src={props.img} alt="" className="rounded w-full md:h-28 xl:h-40" />
      <p className="font-medium text-lg mt-4">{props.name}</p>
      <div className="mt-2 flex items-center justify-between">
        <p className="font-medium text-md">R$ {props.price}</p>
        <FaCartPlus className="cursor-pointer hover:text-primary-300 transition text-xl"/>
      </div>
    </div>
  );
}
