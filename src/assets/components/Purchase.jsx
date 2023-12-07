import React from "react";
import {useNavigate} from "react-router-dom"


function Purchase({purchase,deletePurchase}){
    
    const navigate = useNavigate()

    const {id,purchaseOrder,date,description,amountNumber} = purchase
    return(
    <tr>
      <td>{purchaseOrder}</td>
      <td>{date}</td>
      <td>{description}</td>
      <td>{amountNumber}</td>
      <td>
        <button onClick={()=>deletePurchase(id)}>Delete</button>
      </td>
      <td>
        <button onClick={()=>{navigate(`/details/${id}`)}}>View</button>
      </td>
    </tr>
    );
}

export default Purchase;