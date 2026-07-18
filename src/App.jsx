import {useState} from "react";
import {countries} from "./data/countries";
import {
 POST_connect,
 POST_disconnect
} from "./api/vpn";


export default function App(){

const [vpn,setVpn]=useState({
 status:"Disconnected",
 country:null,
 ip:""
});


function connect(country){

setVpn(
 POST_connect(country)
);

}


function disconnect(){

setVpn(
 POST_disconnect()
);

}


return (
<div>

<h1>VPN API</h1>

<h3>
Status: {vpn.status}
</h3>

{vpn.country &&
<p>
Server: {vpn.country.flag} {vpn.country.name}
<br/>
VPN IP: {vpn.ip}
</p>
}


<button onClick={disconnect}>
Disconnect VPN
</button>


<h2>Country List</h2>

{
countries.map(c=>(
<div key={c.code}>

{c.flag} {c.name}

<button onClick={()=>connect(c)}>
Connect VPN
</button>

</div>
))
}

</div>
);

}
