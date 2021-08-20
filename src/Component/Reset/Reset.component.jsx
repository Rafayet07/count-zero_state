import Button from "react-bootstrap/Button";
const Reset = (props) => {
  return ( 
    <div className="container">

        <Button variant="primary" onClick={()=>props.onReset()} > Reset  </Button>
    </div>
      
   );
}
export default Reset;
 
