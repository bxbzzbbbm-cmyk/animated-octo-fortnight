export const VPN_API = {
  countries: "/api/vpn/countries",
  connect: "/api/vpn/connect",
  disconnect: "/api/vpn/disconnect",
  status: "/api/vpn/status"
};


export const countries = [
  { code:"US", name:"United States", flag:"🇺🇸" },
  { code:"GB", name:"United Kingdom", flag:"🇬🇧" },
  { code:"CA", name:"Canada", flag:"🇨🇦" },
  { code:"DE", name:"Germany", flag:"🇩🇪" },
  { code:"FR", name:"France", flag:"🇫🇷" },
  { code:"JP", name:"Japan", flag:"🇯🇵" },
  { code:"IN", name:"India", flag:"🇮🇳" },
  { code:"BR", name:"Brazil", flag:"🇧🇷" },
  { code:"AU", name:"Australia", flag:"🇦🇺" },
  { code:"IT", name:"Italy", flag:"🇮🇹" }
];


export function createVPNIP(){
  return `10.${num()}.${num()}.${num()}`;
}


function num(){
  return Math.floor(Math.random()*256);
}


export function connect(country){

  return {
    success:true,
    status:"Connected",
    country:country,
    ip:createVPNIP()
  };

}


export function disconnect(){

  return {
    success:true,
    status:"Disconnected",
    country:null,
    ip:null
  };

}


export function getStatus(state){

  return {
    success:true,
    ...state
  };

}
