export default function Container(props) {
  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center">
        {props.children}
      </div>
    </div>
  );
}
