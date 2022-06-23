export default function Button(props) {
  return (
    <button
      type="submit"
      className={`btn btn-${props.color}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
