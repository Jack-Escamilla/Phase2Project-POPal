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

    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Purchase Order</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {mappedPurchases}
      </tbody>
    </table>
)
}
export default PurchaseList