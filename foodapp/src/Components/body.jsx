import React from "react";
import RestroCard from "./Restrocard";
import "./body.css"
const Body =()=>{

return(
    <div className="body">
<div className="search">
    <input type="text" placeholder=""></input>
    <button>SEARCH</button>
</div>



<div className="restroContainer">
<RestroCard name="Hotel Sagar-Old Sagar" rating="3.7" cusine="South Indian, Kerala" time="38 minuites"></RestroCard>
<RestroCard name="7th Heaven" rating="4.3" cusine="Bakery, Desserts" time="33 minuites"></RestroCard>
<RestroCard name="MISTIWALA" rating="4.0" cusine="Mithai, North Indian, Street F" time="46 minuites"></RestroCard>
<RestroCard name="Waffee House" rating="4.3" cusine="Desserts" time="58 minuites"></RestroCard>
<RestroCard name="Ojin Bakes" rating="3.4" cusine="Bakery, Shawarma, Bevera" time="27 minuites"></RestroCard>
<RestroCard name="Mandhi House" rating="3.7" cusine="Mandi" time="38 minuites"></RestroCard>
<RestroCard name="Brown Town" rating="4.3" cusine="Bakery, Continental, Fast " time="40 minuites"></RestroCard>
</div>
    </div>
)
}
export default Body;