//! React uchun useNetwork hooki react-use kutubxonasida mavjud.
// npm install react-use
//! Asosiy foydalanish usuli:
// import { useNetworkState } from "react-use";

// function NetworkStatus() {
//   const networkState = useNetworkState();

//   return (
//     <div>
//       <h2>Internet holati: {networkState.online ? "Online" : "Offline"}</h2>
//       <p>Ulanish turi: {networkState.type || "Noma’lum"}</p>
//       <p>Tezlik: {networkState.downlink} Mbps</p>
//       <p>Ping (latency): {networkState.rtt} ms</p>
//       <p>Doimiy ulanib turish: {networkState.saveData ? "Yo‘q" : "Ha"}</p>
//     </div>
//   );
// }

// export default NetworkStatus;
// networkState.online — true bo‘lsa, foydalanuvchi internetga ulangan
// networkState.type — Ulanish turi (wifi, cellular, ethernet)
// networkState.downlink — Internet tezligi (Mbps)
// networkState.rtt — Ping (ms)
// networkState.saveData — Brauzer foydalanuvchiga trafikni tejashni tavsiya qilgan yoki qilmaganligi