import React from "react";
import { useState } from "react";

function SearchFilterComponent() {
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name"]);
  const [filterParam, setFilterParam] = useState("");

  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      } else if (filterParam == "All") {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });
      }
    });
  }

  const items = [
    {
      name: "Colombia",
      topLevelDomain: [".co"],
      alpha2Code: "CO",
      alpha3Code: "COL",
      callingCodes: ["57"],
      capital: "Bogotá",
      altSpellings: ["CO", "Republic of Colombia", "República de Colombia"],
      region: "Americas",
      subregion: "South America",
      population: 48759958,
      latlng: [4.0, -72.0],
      demonym: "Colombian",
      area: 1141748.0,
      gini: 55.9,
      timezones: ["UTC-05:00"],
      borders: ["BRA", "ECU", "PAN", "PER", "VEN"],
      nativeName: "Colombia",
      numericCode: "170",
      currencies: [
        {
          code: "COP",
          name: "Colombian peso",
          symbol: "$",
        },
      ],
      languages: [
        {
          iso639_1: "es",
          iso639_2: "spa",
          name: "Spanish",
          nativeName: "Español",
        },
      ],
      translations: {
        de: "Kolumbien",
        es: "Colombia",
        fr: "Colombie",
        ja: "コロンビア",
        it: "Colombia",
        br: "Colômbia",
        pt: "Colômbia",
      },
      flag: "https://restcountries.eu/data/col.svg",
      regionalBlocs: [
        {
          acronym: "PA",
          name: "Pacific Alliance",
          otherAcronyms: [],
          otherNames: ["Alianza del Pacífico"],
        },
        {
          acronym: "USAN",
          name: "Union of South American Nations",
          otherAcronyms: ["UNASUR", "UNASUL", "UZAN"],
          otherNames: [
            "Unión de Naciones Suramericanas",
            "União de Nações Sul-Americanas",
            "Unie van Zuid-Amerikaanse Naties",
            "South American Union",
          ],
        },
      ],
      cioc: "COL",
    },
    {
      capital: "Bogotá2",
    },
    {
      capital: "Bogotá3",
    },
  ];

  return (
    <>
      <div className="wrapper">
        <label htmlFor="search-form">
          <input
            type="search"
            name="search-form"
            placeholder="Search for..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="sr-only">Search countries here</span>
        </label>
        <span>
          {" "}
          <select
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            className="custom-select"
            aria-label="Filter Countries By Region"
          >
            <option value="All">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </span>
        <ul className="card-grid">
          {items.map((item) => (
            <li>
              <article className="card" key={item.callingCodes}>
                {/* <div className="card-image">
                  <img src={item.flag} alt={item.name} />
                </div> */}
                <div className="card-content">
                  <ol className="card-list">
                    <li>
                      population: <span>{item.population}</span>
                    </li>
                    <li>
                      Region: <span>{item.region}</span>
                    </li>
                    <li>
                      Capital: <span>{item.capital}</span>
                    </li>
                  </ol>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default SearchFilterComponent;
