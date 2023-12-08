import React from "react"
import Purchase from "./Purchase"

function PurchaseList({purchases,search,deletePurchase}){

    const filteredPurchases = purchases.filter((purchase)=>{
        return purchase.description.toLowerCase().includes(search.toLowerCase())
    })

    const mappedPurchases = filteredPurchases.map((purchase)=>{
        
       return <Purchase key={purchase.id} purchase={purchase} deletePurchase={deletePurchase}/>
    })

return(

    <table className="table1">
      <tbody>
        <tr>
          <th>
            <h3>Purchase Order</h3>
          </th>
          <th>
            <h3>Date</h3>
          </th>
          <th>
            <h3>Description</h3>
          </th>
          <th>
            <h3>Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {mappedPurchases}
      </tbody>
    </table>
)
}
export default PurchaseList