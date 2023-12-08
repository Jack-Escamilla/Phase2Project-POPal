import {useState,useEffect} from 'react'
import Purchase from './Purchase'
import {useParams,useNavigate} from "react-router-dom"

function DetailsPage({}){

    const {id} = useParams()
    const navigate = useNavigate()
    

    const [purchase,setPurchases] = useState({})
    useEffect(()=>{
        fetch(`http://localhost:3000/purchases/${id}`)
        .then(r=>r.json())
        .then(data=>setPurchases(data))
    },[])
    return (
        <div>
            <button onClick={()=>{navigate("/home")}}>Home</button>
            {/* <p>
                {purchase.purchaseOrder}
                {purchase.date}
                {purchase.deliverDate}
                {purchase.description}
                {purchase.color}
                {purchase.quantity}
                {purchase.amountNumber}
            </p> */}

<table className="table2">
      <tbody>
        <tr>
          <th>
            <h3>Purchase Order</h3>
            <p>{purchase.purchaseOrder}</p>
          </th>
          <th>
            <h3>Date</h3>
            <p>{purchase.date}</p>
          </th>
          <th>
            <h3>Delivery Date</h3>
            <p>{purchase.deliveryDate}</p>
          </th>
          </tr>
        </tbody>  
</table>

<table className="table3">
    <tbody>
        <tr>
          <th>
            <h3>Description</h3>
            <p>{purchase.description}</p>
          </th>
          <th>
            <h3>Color</h3>
            <p>{purchase.color}</p>
          </th>
          <th>
            <h3>Quantity</h3>
            <p>{purchase.quantity}</p>
          </th>
          <th>
            <h3>Amount</h3>
            <p>{purchase.amountNumber}</p>
          </th>
        </tr>
        
      </tbody>
    </table>
            
        </div>

    )
}
export default DetailsPage