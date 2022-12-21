import "./styles.css";
import { useState } from "react";
const destinationList = {
  Australia: [
    {
      name: "Sky diving in Goldcoast",
      rating: "4/5",
      location: "Goldcoast"
    },
    {
      name: "Skuba Diving in Great Barrier Reef",
      rating: "3.5/5",
      location: "Hamiltion Island"
    },
    {
      name: "Driving By 12 Apostles",
      rating: "5/5",
      location: "Melbourne"
    }
  ],

  Macau: [
    {
      name: "Free fall Adventure",
      rating: "5/5",
      location: "Macau Tower, Macau"
    },
    {
      name: "Movie Experience",
      rating: "3.5/5",
      location: "Venitian Resort"
    },
    {
      name: "Hiking",
      rating: "4/5",
      location: "Guia Hill"
    }
  ],

  Dubai: [
    {
      name: "Snow Experience",
      rating: "4/5",
      location: "Mall of Emerites"
    },
    {
      name: "Visit to aquiariam",
      rating: "3/5",
      location: "Dubai Mall"
    },
    {
      name: "Helicoper Ride",
      rating: "5/5",
      location: "Palm Jumeriah"
    }
  ]
};
export default function App() {
  const [city, setCity] = useState("Dubai");
  const cityClickHandler = (cityName) => {
    setCity(cityName);
  };
  return (
    <div className="App">
      <h1>🌉Destination Checklist🌉</h1>
      <p>
        Recently I visited to below destinations and I have listed favourite
        activites are below
      </p>
      <div>
        {Object.keys(destinationList).map((destination) => (
          <button
            className="btn"
            onClick={() => {
              cityClickHandler(destination);
            }}
          >
            {destination}
          </button>
        ))}
      </div>
      <hr />
      {/* Deltails of selected destination */}
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {destinationList[city].map((destination) => (
            <li
              key={destination.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #000",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", marginBotton: "1em" }}>
                {" "}
                {destination.name}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}>
                {" "}
                {destination.location}{" "}
              </div>
              <div style={{ fontSize: "smaller" }}> {destination.rating} </div>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <div className="footer">
        I had awesome experiences at this places. Enjoy life!!
      </div>
    </div>
  );
}
