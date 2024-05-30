import React from "react";

const RestroCard=(props)=>{
return(
    <div className="restCard">

<img src="https://b.zmtcdn.com/data/pictures/5/19565175/2fca38ab7be6bfe27b31ca784d95c0d6_o2_featured_v2.jpg"></img>
<h3>{props.name}</h3>
<h4>{props.rating}</h4>
<h4>{props.cusine}</h4>
<h4>{props.time}</h4>
</div>
)
}
export default RestroCard;