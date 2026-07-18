const fs = require("fs");

const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>VPN Simulator</title>
<style>
body{
 font-family:Arial;
 padding:20px;
}
button{
 margin:5px;
 padding:8px;
}
.country{
 margin:8px;
}
</style>
</head>

<body>

<h1>VPN Simulator</h1>

<h3 id="status">Status: Disconnected</h3>
<p id="server"></p>
<p id="ip"></p>

<button onclick="disconnectVPN()">
Disconnect VPN
</button>

<h2>Country List</h2>

<div id="countries"></div>

<script>

const VPN_API = {
 countries:"/api/vpn/countries",
 connect:"/api/vpn/connect",
 disconnect:"/api/vpn/disconnect",
 status:"/api/vpn/status"
};


const countries=[
{code:"US",name:"United States",flag:"🇺🇸"},
{code:"GB",name:"United Kingdom",flag:"🇬🇧"},
{code:"CA",name:"Canada",flag:"🇨🇦"},
{code:"DE",name:"Germany",flag:"🇩🇪"},
{code:"FR",name:"France",flag:"🇫🇷"},
{code:"JP",name:"Japan",flag:"🇯🇵"},
{code:"IN",name:"India",flag:"🇮🇳"},
{code:"BR",name:"Brazil",flag:"🇧🇷"},
{code:"AU",name:"Australia",flag:"🇦🇺"},
{code:"IT",name:"Italy",flag:"🇮🇹"}
];


function generateVPNIP(){
 return "10."
 + Math.floor(Math.random()*256)
 + "."
 + Math.floor(Math.random()*256)
 + "."
 + Math.floor(Math.random()*256);
}


function connectVPN(country){

status.innerHTML="Status: Connected";

server.innerHTML=
"Server: "+country.flag+" "+country.name;

ip.innerHTML=
"VPN IP: "+generateVPNIP();

}


function disconnectVPN(){

status.innerHTML="Status: Disconnected";

server.innerHTML="";
ip.innerHTML="";

}


const list=document.getElementById("countries");

countries.forEach(country=>{

const div=document.createElement("div");

div.className="country";

div.innerHTML=
country.flag+" "+country.name+
' <button>Connect VPN</button>';

div.querySelector("button")
.onclick=()=>connectVPN(country);

list.appendChild(div);

});

</script>

</body>
</html>
`;

fs.writeFileSync("index.html", htmlContent);

console.log("index.html created successfully");
