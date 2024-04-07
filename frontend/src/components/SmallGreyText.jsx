export default function SmallGreyText(props) {
  return (
    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
      {props.children}
    </p>
  );
}
