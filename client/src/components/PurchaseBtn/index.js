import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap';
function PurchaseBtn(props) {
  const history = useHistory();

console.log(props.currentuser)


  return (
    <div className="Paypal w-100" >
      <Button 
        onClick={() =>
          history.push(`/pages/Payment/${props.title}/${props.price}/${props.id}/${props.currentuser}/${props.selleremail}`)
        }
        variant="dark"
        className='w-100'
      >
        Buy
      </Button>
    </div>
  );
}


export default PurchaseBtn;
