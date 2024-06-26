import FormLabel from "./FormLabel";

export default function FormInput(props) {
  return (
    <div>
      <FormLabel for={props.labelFor} text={props.labelText} />
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        required={props.required ? true : false}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
