import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  const [stateClick, setstateClick] = useState(false);
  const [cityClick, setcityClick] = useState(false);
  const [townClick, settownClick] = useState(false);

  const displaycity = (evt) => {
    let display = evt.target.value;
    setstateClick(!stateClick);
  };
  const hanldetownClick = (evt) => {
    evt.stopPropagation();

    setcityClick(!cityClick);
  };

  return (
    <div id="main">
      {states.map((state, index) => {
        let rendercity = false;

        return (
          <>
            <li id={`state${index + 1}`} value={index} onClick={displaycity}>
              {state.name}
              {stateClick
                ? state.cities.map((city, indexcity) => {
                    return (
                      <>
                        <ul
                          id={`city${indexcity + 1}`}
                          value={indexcity}
                          onClick={hanldetownClick}
                        >
                          {city.name}
                          {cityClick
                            ? city.towns.map((town, indextown) => {
                                return (
                                  <>
                                    <ul id={`town${indextown + 1}`}>
                                      {town.name}
                                    </ul>
                                  </>
                                );
                              })
                            : null}
                        </ul>
                      </>
                    );
                  })
                : null}
            </li>
          </>
        );
      })}
    </div>
  );
}

export default App;
