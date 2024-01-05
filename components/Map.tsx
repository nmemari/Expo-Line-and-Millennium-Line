import React from 'react'

import 'leaflet/dist/leaflet.css'
import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import L from 'leaflet'

const icon = L.icon({
    iconUrl:"/Images/map-marker.png",
    iconSize: [60, 60]
})

const expoLine:[number, number][] = [
    [
        [49.28596833770496, -123.1116239890303],
        [49.28546253382044, -123.12025519065295],
        [49.28324209349458, -123.11619937432181],
        [49.279604134740865, -123.10982594865854],
        [49.2730834852031, -123.10041066074695],
        [49.26263919968743, -123.0693402099451],
        [49.248221509641354, -123.05594153099398],
        [49.244247020062744, -123.04620096403309],
        [49.238330887792124, -123.03176648206654],
        [49.22973955422616, -123.01265937117627],
        [49.225812011633884, -123.0038728926795],
        [49.22006750867169, -122.98849063901615],
        [49.21233125137076, -122.95921256948142],
        [49.19993693275801, -122.94906323637566],
        [49.20140012874868, -122.91265655556629],
        [49.204821122448145, -122.90613165897135],
        [49.22463366961944, -122.88942527655387],
        [49.23306685684515, -122.88312251882961],
        [49.248421082734396, -122.8970270900068],
        [49.253351354197065, -122.91831310020399],
    ],
    [
        [49.204821122448145, -122.90613165897135],
        [49.20428007598739, -122.8743961710331],
        [49.19884937622468, -122.85067391236464],
        [49.18947259059859, -122.84815360274337],
        [49.18274262421472, -122.8448356986807],
    ],
]

const millenniumLine:[number, number][] = [
    [49.26574771018396, -123.07917512880775],
    [49.26254123079139, -123.06958191548901],
    [49.25887642777524, -123.04571587259845],
    [49.26101426260851, -123.0330809087152],
    [49.26483159447601, -123.01366050126504],
    [49.26620576165956, -123.00149349900711],
    [49.26467890687103, -122.9823070723696],
    [49.25887642777524, -122.96405656898268],
    [49.25460048030855, -122.93925459873788],
    [49.25322598994449, -122.91819632559913],
    [49.2483234794561, -122.8970150224198],
    [49.261096375112785, -122.88980524477238],
    [49.2778977813806, -122.8460315947701],
    [49.277113843031714, -122.82817881202405],
    [49.274696165708306, -122.80077211980823],
    [49.280376384347306, -122.7939250961812],
    [49.28560557625573, -122.79161577352502]
]

const orangeOptions = {color: 'orange'}
const blueOptions = {color: 'blue'}

const center:[number, number] = [49.24966, -123.00600] 

export default function Map() {
  return (
    <MapContainer
        style={{height: '85vh'}}
        center={[49.23878021249505, -122.9870520213466]}
        zoom={12}
        scrollWheelZoom={true}
    >
        <TileLayer 
            attribution='&copy; <a href="https://github.com/nmemari/Expo-Line-and-Millennium-Line">By Navid Memari</a>'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />

        <Polyline
            pathOptions={blueOptions}
            positions={millenniumLine}
        />
        <CircleMarker
            center={[49.26574771018396, -123.07917512880775]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>VCC–Clark Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.26254123079139, -123.06958191548901]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Commercial–Broadway Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.25887642777524, -123.04571587259845]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Renfrew Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.26101426260851, -123.0330809087152]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Rupert Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.26483159447601, -123.01366050126504]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Gilmore Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.26620576165956, -123.00149349900711]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Brentwood Town Centre Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.26467890687103, -122.9823070723696]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Holdom Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.25887642777524, -122.96405656898268]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Sperling–Burnaby Lake Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.25460048030855, -122.93925459873788]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Lake City Way Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.25322598994449, -122.91819632559913]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Production Way–University Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.2483234794561, -122.8970150224198]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Lougheed Town Centre Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.261096375112785, -122.88980524477238]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Burquitlam Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.2778977813806, -122.8460315947701]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Moody Centre Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.277113843031714, -122.82817881202405]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Inlet Centre Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.274696165708306, -122.80077211980823]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Coquitlam Central Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.280376384347306, -122.7939250961812]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Lincoln Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.28560557625573, -122.79161577352502]}
            pathOptions={blueOptions}
            radius={10}
        >
            <Popup>Lafarge Lake–Douglas Station</Popup>
        </CircleMarker>

        <Polyline
            pathOptions={orangeOptions}
            positions={expoLine}
        />
        <CircleMarker
            center={[49.28596833770496, -123.1116239890303]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Waterfront Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.28546253382044, -123.12025519065295]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Burrard Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.28324209349458, -123.11619937432181]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Granville Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.279604134740865, -123.10982594865854]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Stadium–Chinatown Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.2730834852031, -123.10041066074695]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Main Street–Science World Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.26263919968743, -123.0693402099451]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Commercial–Broadway Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.248221509641354, -123.05594153099398]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Nanaimo Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.244247020062744, -123.04620096403309]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>29th Ave Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.238330887792124, -123.03176648206654]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Joyce–Collingwood Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.22973955422616, -123.01265937117627]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Patterson Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.225812011633884, -123.0038728926795]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Metrotown Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.22006750867169, -122.98849063901615]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Royal Oak Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.21233125137076, -122.95921256948142]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Edmonds Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.19993693275801, -122.94906323637566]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>22nd Street Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.20140012874868, -122.91265655556629]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>New Westminster Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.204821122448145, -122.90613165897135]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Columbia Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.22463366961944, -122.88942527655387]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Sapperton Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.23306685684515, -122.88312251882961]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Braid Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.248421082734396, -122.8970270900068]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Lougheed Town Centre Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.253351354197065, -122.91831310020399]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Production Way–University Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.20428007598739, -122.8743961710331]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Scott Road Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.19884937622468, -122.85067391236464]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Gateway Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.18947259059859, -122.84815360274337]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>Surrey Central Station</Popup>
        </CircleMarker>
        <CircleMarker
            center={[49.18274262421472, -122.8448356986807]}
            pathOptions={orangeOptions}
            radius={10}
        >
            <Popup>King George Station</Popup>
        </CircleMarker>
    </MapContainer>
  )
}
