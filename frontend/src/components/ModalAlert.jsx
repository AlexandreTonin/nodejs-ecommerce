export default function ModalAlert(props) {
  return (
    <div className="bg-gray-800 border border-gray-600 w-1/2 h-1/3 rounded-lg flex flex-col items-center py-8 justify-evenly">
      {props.icon}
      <p>{props.text}</p>
      {props.buttonText ? (
        <button
          className="h-12 border border-gray-600 px-12 rounded text-xl hover:bg-gray-700 transition"
          onClick={props.onClick}
        >
          {props.buttonText}
        </button>
      ) : null}
    </div>
  );
}
