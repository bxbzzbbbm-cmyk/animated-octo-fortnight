import {useState} from "react";
import {
 countries,
 connect,
 disconnect
} from "./api/vpn";


export default function App(){

const [vpn,setVpn]=useState({
 status:"Disconnected",
 country:null,
 ip:null
});


return (
<div>

<h1>VPN API</h1>

<h3>
Status: {vpn.status}
</h3>


{vpn.country &&
<p>
{vpn.country.flag} {vpn.country.name}
<br/>
IP: {vpn.ip}
</p>
}


<button onClick={()=>{
setVpn(disconnect());
}}>
Disconnect VPN
</button>


<h2>Country List</h2>


{
countries.map(c=>(

<div key={c.code}>

{c.flag} {c.name}

<button onClick={()=>{
setVpn(connect(c));
}}>
Connect VPN
</button>

</div>

))
}


</div>
);

}
