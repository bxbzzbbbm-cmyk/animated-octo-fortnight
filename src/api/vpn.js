export const VPN_API = {
  countries: "/api/vpn/countries",
  status: "/api/vpn/status",
  connect: "/api/vpn/connect",
  disconnect: "/api/vpn/disconnect"
};


export async function apiGet(url){
  const res = await fetch(url);
  return res.json();
}


export async function apiPost(url,data={}){
  const res = await fetch(url,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
  });

  return res.json();
}
