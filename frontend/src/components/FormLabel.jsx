export default function FormLabel(props) {
  return (
    <label
      htmlFor={props.for}
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {props.text}
    </label>
  );
}
