export const VPN_API = {
  countries: "/api/vpn/countries",
  status: "/api/vpn/status",
  connect: "/api/vpn/connect",
  disconnect: "/api/vpn/disconnect"
};


export function generateVPNIP(){
  return `10.${random()}.${random()}.${random()}`;
}

function random(){
  return Math.floor(Math.random()*256);
}


export function GET_status(state){
  return {
    success:true,
    ...state
  };
}


export function POST_connect(country){
  return {
    success:true,
    status:"Connected",
    country,
    ip:generateVPNIP()
  };
}


export function POST_disconnect(){
  return {
    success:true,
    status:"Disconnected",
    country:null,
    ip:null
  };
}
