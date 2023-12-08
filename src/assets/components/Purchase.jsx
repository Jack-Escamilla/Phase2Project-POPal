import React from "react";
import {useNavigate} from "react-router-dom"


function Purchase({purchase,deletePurchase}){
    
    const navigate = useNavigate()

    const {id,purchaseOrder,date,description,amountNumber} = purchase
    return(
    <tr className="cells">
      <td className="purchase">{purchaseOrder}</td>
      <td className="date">{date}</td>
      <td className="description">{description}</td>
      <td className="amount">{amountNumber}</td>
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