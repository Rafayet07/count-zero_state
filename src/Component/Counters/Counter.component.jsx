import Button from "react-bootstrap/Button";

const Counter = (props) => {
  return (
    <div>
      <ul className="mt-3 ">
        <li className="list-unstyled">
          <div className="container">
            <Button varient="primary" style={{marginRight:"20px"}}> {props.value>0?props.value:'Zero'} </Button>
            <Button
              variant="secondary"
              onClick={() => props.onIncrement(props.id)}
            >
              {" "}
              +{" "}
            </Button>{" "}
            <Button
              variant="secondary"
              onClick={() => props.onDecrement(props.id)}
              disabled = {props.value === 0 ? true : false}
            >
              {" "}
              -{" "}
            </Button>{" "}
            <Button variant="danger" onClick={() => props.onDelete(props.id)}>
              {" "}
              Delete{" "}
            </Button>{" "}
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Counter;
