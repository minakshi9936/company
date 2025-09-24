import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// ✅ Updated clients with your sub-locations
const clients = [
  // NCR & UP
  { id: 1, lat: 27.1767, lng: 78.0081, district: "Agra", pin: "282001" },
  { id: 2, lat: 28.6929, lng: 76.9356, district: "Bahadurgarh", pin: "124507" },
  { id: 3, lat: 28.4595, lng: 77.0266, district: "Gurgaon", pin: "122001" },
  { id: 4, lat: 28.6467, lng: 77.1103, district: "Vikas Puri", pin: "110018" },
  { id: 5, lat: 28.5921, lng: 77.0460, district: "Dwarka", pin: "110075" },
  { id: 6, lat: 28.4089, lng: 77.3178, district: "Faridabad", pin: "121001" },
  { id: 7, lat: 28.3549, lng: 76.9385, district: "Manesar", pin: "122050" },
  { id: 8, lat: 27.1591, lng: 78.3957, district: "Firozabad", pin: "283203" },
  { id: 9, lat: 24.6542, lng: 77.3152, district: "Guna", pin: "473001" },
  { id: 10, lat: 26.2183, lng: 78.1828, district: "Gwalior", pin: "474001" },
  { id: 11, lat: 32.7266, lng: 74.8570, district: "Jammu", pin: "180001" },
  { id: 12, lat: 27.4924, lng: 77.6737, district: "Mathura", pin: "281001" },
  { id: 13, lat: 26.4947, lng: 77.9941, district: "Morena", pin: "476001" },
  { id: 14, lat: 28.9288, lng: 77.0913, district: "Sonipat", pin: "131001" },
  { id: 15, lat: 32.9277, lng: 75.1367, district: "Udhampur", pin: "182101" },

  // NCR Extended
  { id: 16, lat: 28.7306, lng: 77.7807, district: "Hapur", pin: "245101" },
  { id: 17, lat: 28.6784, lng: 77.3210, district: "Kaushambi", pin: "201010" },
  { id: 18, lat: 28.9845, lng: 77.7064, district: "Meerut", pin: "250001" },
  { id: 19, lat: 28.5494, lng: 77.2517, district: "Nehru Place", pin: "110019" },

  // Uttarakhand
  { id: 20, lat: 30.3165, lng: 78.0322, district: "Dehradun", pin: "248001" },
  { id: 21, lat: 29.9457, lng: 78.1642, district: "Haridwar", pin: "249401" },
  { id: 22, lat: 29.8543, lng: 77.8880, district: "Roorkee", pin: "247667" },
  { id: 23, lat: 29.2200, lng: 79.5120, district: "Haldwani", pin: "263139" },

  // UP Big Cities
  { id: 24, lat: 26.8467, lng: 80.9462, district: "Lucknow", pin: "226001" },
  { id: 25, lat: 26.7755, lng: 82.1440, district: "Faizabad", pin: "224001" },
  { id: 26, lat: 26.4499, lng: 80.3319, district: "Kanpur", pin: "208001" },
  { id: 27, lat: 27.8974, lng: 78.0880, district: "Aligarh", pin: "202001" },
  { id: 28, lat: 28.3670, lng: 79.4304, district: "Bareilly", pin: "243001" },
  { id: 29, lat: 26.7606, lng: 83.3732, district: "Gorakhpur", pin: "273001" },
  { id: 30, lat: 26.5471, lng: 80.4878, district: "Unnao", pin: "209801" },
  { id: 31, lat: 25.4484, lng: 78.5685, district: "Jhansi", pin: "284001" },

  // Placeholder for full states
  { id: 32, lat: 27.0238, lng: 74.2179, district: "Rajasthan", pin: "-" },
  { id: 33, lat: 31.1471, lng: 75.3412, district: "Punjab", pin: "-" },
  { id: 34, lat: 29.0588, lng: 76.0856, district: "Haryana", pin: "-" },

  // MP Cluster
  { id: 35, lat: 24.9985, lng: 78.8590, district: "Tikamgarh", pin: "472001" },
  { id: 36, lat: 24.9142, lng: 79.5871, district: "Chhatarpur", pin: "471001" },
  { id: 37, lat: 23.8365, lng: 79.4410, district: "Damoh", pin: "470661" },
  { id: 38, lat: 21.9039, lng: 77.9010, district: "Betul", pin: "460001" },
  { id: 39, lat: 22.0574, lng: 78.9382, district: "Chhindwara", pin: "480001" },
  { id: 40, lat: 23.1980, lng: 79.9780, district: "Indrapuri (Bhopal)", pin: "-" },
  { id: 41, lat: 24.6005, lng: 80.8322, district: "Satna/Rewa", pin: "485001" },
  { id: 42, lat: 22.7451, lng: 77.7360, district: "Hoshangabad", pin: "461001" },
  { id: 43, lat: 23.2599, lng: 77.4126, district: "Rajendra Nagar (Indore)", pin: "-" },
  { id: 44, lat: 22.7196, lng: 75.8577, district: "MG Road (Indore)", pin: "-" },
  { id: 45, lat: 22.7500, lng: 75.8900, district: "Vijay Nagar (Indore)", pin: "-" },
  { id: 46, lat: 23.1765, lng: 75.7885, district: "Ujjain/Dewas/Pithampur", pin: "-" },

  { id: 47, lat: 24.4764, lng: 74.8720, district: "Neemuch", pin: "458441" },
  { id: 48, lat: 24.0730, lng: 75.0686, district: "Mandsaur", pin: "458001" },
  { id: 49, lat: 22.6013, lng: 75.3025, district: "Dhar", pin: "454001" },
  { id: 50, lat: 22.1770, lng: 76.0703, district: "Sanawad", pin: "451111" },
  { id: 51, lat: 22.2481, lng: 76.0400, district: "Badwah (Telephonic)", pin: "-" },


  { id: 101, lat: 13.0827, lng: 80.2707, district: "Chennai", pin: "600001" },
{ id: 102, lat: 22.5726, lng: 88.3639, district: "Kolkata", pin: "700001" },
{ id: 103, lat: 22.8046, lng: 86.2029, district: "Jamshedpur", pin: "831001" },
{ id: 104, lat: 20.4625, lng: 85.8828, district: "Cuttack", pin: "753001" },
{ id: 105, lat: 21.1458, lng: 79.0882, district: "Nagpur", pin: "440001" },
{ id: 106, lat: 20.9374, lng: 77.7796, district: "Amravati", pin: "444601" },
{ id: 107, lat: 21.1938, lng: 81.3509, district: "Bhilai", pin: "490001" },
{ id: 108, lat: 21.2514, lng: 81.6296, district: "Raipur", pin: "492001" },
{ id: 109, lat: 18.5204, lng: 73.8567, district: "Pune", pin: "411001" },
{ id: 110, lat: 19.0760, lng: 72.8777, district: "Mumbai", pin: "400001" },
{ id: 111, lat: 19.0948, lng: 74.7384, district: "Ahmadnagar", pin: "414001" },
{ id: 112, lat: 17.3850, lng: 78.4867, district: "Hyderabad", pin: "500001" },
{ id: 113, lat: 12.9716, lng: 77.5946, district: "Bengaluru", pin: "560001" },
{ id: 114, lat: 20.2961, lng: 85.8245, district: "Bhubaneswar", pin: "751001" },

];

export default function MapClients() {
  return (
    <div className="w-full min-h-screen bg-black text-yellow-400 px-6 py-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Left Box - Map */}
        <div className="bg-[#111] border-2 border-yellow-400 shadow-lg rounded-2xl p-4 hover:shadow-yellow-500/50 transition-all duration-300">
          <h2 className="text-2xl font-extrabold mb-4 text-center text-yellow-400">
            Presence in India
          </h2>
<MapContainer
  center={[22.9734, 78.6569]} // Center of India
  zoom={5}
  scrollWheelZoom={false}
  className="h-[420px] w-full rounded-xl overflow-hidden border-2 border-yellow-400"
>
  <TileLayer
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  />

  {clients.map((client) => (
    <Marker key={client.id} position={[client.lat, client.lng]}>
      <Popup>
        <strong style={{ color: "black" }}>{client.district}</strong>
        <br />
        {client.pin !== "-" ? (
          <span style={{ color: "black" }}>PIN: {client.pin}</span>
        ) : (
          <span style={{ color: "black" }}>Multiple Areas</span>
        )}
      </Popup>
    </Marker>
  ))}
</MapContainer>


        </div>

        {/* Right Box - Text */}
        <div className="bg-[#111] border-2 border-yellow-400 shadow-lg rounded-2xl p-8 flex flex-col items-center justify-center hover:shadow-yellow-500/50 transition-all duration-300">
          <h2 className="text-4xl font-extrabold text-center text-yellow-400 leading-snug">
            Our Clients Across <br /> India
          </h2>
          <p className="mt-4 text-lg text-gray-300 text-center">
            We proudly serve clients across multiple states, districts and regions of India.
          </p>
        </div>
      </div>
    </div>
  );
}