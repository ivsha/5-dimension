import React from "react";

const makanans = [
  {
    nama: "Soto",
    harga: 12000,
  },
  {
    nama: "Bakso",
    harga: 10000,
  },
  {
    nama: "Mie Ayam",
    harga: 7000,
  },
  {
    nama: "Nasi Goreng",
    harga: 15000,
  },
];

// REDUCE
const total_bayar = makanans.reduce((total_harga,makanan) => {
    return total_harga+makanan.harga;
}, 0)

const Map = () => {
  return (
    <div class="Body">
        
{/* MAP BIASA */}
      <h2>Map</h2>
      <ul>
        {makanans.map((makanan) => (
          <li>
            {makanan.nama} - {makanan.harga}
          </li>
        ))}
      </ul>

{/* MAP PAKE FILTER */}
      <h2>Map Filter</h2>
      <ul>
        {makanans
          .filter((makanans) => makanans.harga > 10000)
          .map((makanan) => (
            <li>
              {makanan.nama} - {makanan.harga}
            </li>
          ))}
      </ul>

      <h2>Total Harga : {total_bayar}</h2>
    </div>
  );
};

export default Map;
