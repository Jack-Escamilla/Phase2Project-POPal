import React from "react"
function AddPurchaseForm({addPurchase}){

    function submit(e){
        e.preventDefault()
            const newPurchase = {
                purchaseOrder: e.target.purchaseOrder.value,
                date: e.target.date.value,
                deliveryDate: e.target.deliveryDate.value,
                description: e.target.description.value,
                color: e.target.color.value,
                quantity: e.target.quantity.value,
                amountNumber: e.target.amountNumber.value
            }
            addPurchase(newPurchase)
        
    }
    return (
        <div className="add-form">
        <h4>Add a New Order</h4>
      <form className="ui form" onSubmit={(e)=>submit(e)}>
        <div className="forms">
          <input type="text" name="purchaseOrder" placeholder="Purchase Number"/>
          <input type="date" name="date"  />
          <input type="date" name="deliveryDate"  />
          <input type="text" name="description" placeholder="Description"/>
          <input type="text" name="color" placeholder="Color"/>
          <input type="number" name="quantity" placeholder="Quantity" step="0.01" />
          <input type="number" name="amountNumber" placeholder="Amount" step="0.01" />
        </div>
        <button className="button2" type="submit">
          Add Purchase Order
        </button>
      </form>
    </div>
    )
}

export default AddPurchaseForm