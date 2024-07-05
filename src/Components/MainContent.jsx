/*import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {
  const airports = [
    { name: "Indira Gandhi International Airport", country: "India", code: "DEL", terminals: 3 },
    { name: "Dubai International Airport", country: "UAE", code: "DXB", terminals: 5 },
    { name: "Heathrow Airport", country: "England", code: "LHR", terminals: 6 },
    { name: "Istanbul Airport", country: "Turkey", code: "IST", terminals: 3 },
    { name: "Rajiv Gandhi International Airport", country: "Texas", code: "DFW", terminals: 14 },
  ];

  return (
    <main className="flex-1 p-6 mt-16">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Airports</h1>
        <button className="bg-black text-white px-4 py-2 rounded">+ Add new</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b">All Airports</th>
              <th className="px-6 py-3 border-b">Country</th>
              <th className="px-6 py-3 border-b">Code</th>
              <th className="px-6 py-3 border-b">Terminals</th>
              <th className="px-6 py-3 border-b"></th>
            </tr>
          </thead>
          <tbody>
            {airports.map((airport, index) => (
              <tr key={index}>
                <td className="px-6 py-4 border-b flex items-center">
                  <input type="checkbox" className="mr-4" />
                  <Link to={`/airport/${airport.code}`} className="text-blue-500 hover:underline">
                    {airport.name}
                  </Link>
                </td>
                <td className="px-6 py-4 border-b">{airport.country}</td>
                <td className="px-6 py-4 border-b">{airport.code}</td>
                <td className="px-6 py-4 border-b">{airport.terminals}</td>
                <td className="px-6 py-4 border-b flex justify-end">
                  <button className="text-gray-500 hover:text-black mr-4">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="text-gray-500 hover:text-black">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MainContent;*/

import React from 'react';
import { Link } from 'react-router-dom';


const MainContent = () => {
  const airports = [
    { name: "Indira Gandhi International Airport", country: "India", code: "DEL", terminals: 3 },
    { name: "Dubai International Airport", country: "UAE", code: "DXB", terminals: 5 },
    { name: "Heathrow Airport", country: "England", code: "LHR", terminals: 6 },
    { name: "Istanbul Airport", country: "Turkey", code: "IST", terminals: 3 },
    { name: "Rajiv Gandhi International Airport", country: "Texas", code: "DFW", terminals: 14 },
  ];

  return (
    <main className="main-container">
      <div className="header-container">
        <h1 className="header-title">Airports</h1>
        <button className="add-button">+ Add new</button>
      </div>
      <div className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>All Airports</th>
              <th>Country</th>
              <th>Code</th>
              <th>Terminals</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {airports.map((airport, index) => (
              <tr key={index}>
                <td className="flex-center">
                  <input type="checkbox" className="mr-4" />
                  <Link to={`/airport/${airport.code}`} className="link">
                    {airport.name}
                  </Link>
                </td>
                <td>{airport.country}</td>
                <td>{airport.code}</td>
                <td>{airport.terminals}</td>
                <td className="flex-end">
                  <button className="icon-button">
                    <i className="fas fa-edit"></i>
                  </button>
                  <button className="icon-button">
                    <i className="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default MainContent;
