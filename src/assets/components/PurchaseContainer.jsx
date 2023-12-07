import React from "react";
import {useEffect, useState} from "react";
import PurchaseList from "./PurchaseList";
import AddPurchaseForm from "./AddPurchaseForm";
import Search from "./Search";
import Login from "./Login";
import { useNavigate } from "react-router-dom";


function PurchaseContainer () {

    const navigate = useNavigate()

    const [purchases,setPurchases] = useState([])
    const [search,setSearch] = useState("")
useEffect(()=>{
    fetch("http://localhost:3000/purchases")
    .then(r=>r.json())
    .then (data=> setPurchases(data))

},[])

function addPurchase(newPurchase){
    fetch("http://localhost:3000/purchases",{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPurchase)
    })
    .then(r=>r.json())
    .then(data=>setPurchases([...purchases,data]))
    // console.log(purchases)
}

function deletePurchase(id){
    fetch(`http://localhost:3000/purchases/${id}`,{
        method:"DELETE"
    })
    .then(placeholder=>{
        const deleteArr = purchases.filter((purchase)=>{
            return purchase.id !== id
        })
        setPurchases(deleteArr)
    })

}

return(
<div>
    <button onClick={()=>{navigate("/")}}>Logout</button>
    <div>
        <Search setSearch={setSearch}/>
    </div>
    <div>
        <PurchaseList purchases={purchases} search={search} deletePurchase={deletePurchase}/>
    </div>

    <div>
        <AddPurchaseForm addPurchase={addPurchase}/>
    </div>
</div>
    )
}
  
export default PurchaseContainer