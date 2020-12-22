// import React from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// const containerStyle = {
//   width: '400px',
//   heigth: '400px'
// }
// const center = {
//   lat: -3.745,
//   lng: -38.532
// }
// export default function App() {
//   const [map, setMap] = React.useState(null)
//   const onLoad = React.useCallback(function callback(map) {
//     const bounds = new window.google.maps.LatLngBounds()
//     map.fitBounds(bounds)
//     setMap(map)
//   }, [])
//   const onUnmount = React.useCallback(function callback(map) {
//     setMap(null)
//   }, [])
//   return (
//     <div>
//       <LoadScript
//         googleMapsApiKey="AIzaSyB4g2M0pL7L0BTpHGUuA04cZJedjMkZAuU">
//         <GoogleMap
//           mapContainerStyle={containerStyle}
//           center={center}
//           zoom={10}
//           onLoad={onLoad}
//           onUnmount={onUnmount}
//           >
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   )
// }
"use strict";