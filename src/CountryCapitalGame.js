import React from "react";
import { useState } from "react";

const CountryCapitalGame = ({ data }) => {
  //Console.log data
  // console.log(data);

  //Original info -> Object
  const [info, setInfo] = useState(data);

  //Values -> index of button
  const [value, setValue] = useState(-1);

  //Color
  const [wrongPair, setWrongPair] = useState(true);

  //A button should be displayed for each country and each capital.
  const dataArray = () => {
    const array = [];
    for (const [key, value] of Object.entries(info)) {
      array.push(key);
      array.push(value);
    }
    return array;
  };

  // console.log(dataArray());
  const arrayData = dataArray();

  const [infoToArray, setInfoToArray] = useState(arrayData);

  //The buttons should be displayed in random order
  const arrayRandomNumbers = (arrayLenght) => {
    const arr = [];
    let random;
    for (let i = 0; i < 100; i++) {
      //Fix this to infoToArray.lenght -> ?????????
      random = Math.trunc(Math.random() * arrayLenght);
      // console.log(random);
      if (arr.indexOf(random) === -1) arr.push(random);
      // console.log(arr);
    }
    return arr;
  };

  // console.log(arrayRandomNumbers(infoToArray.length));
  const arrayIndex = arrayRandomNumbers(infoToArray.length);

  //Array of random nums from 0 to 4
  const [nums, setNumbs] = useState(arrayIndex);

  //Final array -> unordered list

  const dataArrayRandom = () => {
    const array = infoToArray;
    const index = nums;
    const finalArray = array.map((el, i, arr) => (el = array[index[i]]));
    // console.log(finalArray);
    return finalArray;
  };

  // console.log(dataArrayRandom());
  const finalArray = dataArrayRandom();

  const [infoToArrayRandom, setInfoToArrayRandom] = useState(finalArray);

  const [responsesReceived, setResponsesReceived] = useState([]);
  // console.log(responsesReceived);

  const retrieveData = (e) => {
    const clicked = e.target;
    // console.log(clicked.textContent);
    console.log(responsesReceived.length);
    if (responsesReceived.length <= 2) {
      responsesReceived.push(clicked.textContent);
    }
    setResponsesReceived(responsesReceived);
  };

  const compareData = (e, i) => {
    const clicked = e.target;
    console.log(clicked);
    // clicked.style.backgroundColor = "#ff0000";
    console.log(responsesReceived);
    // console.log(info);
    // console.log(arrayData);
    if (responsesReceived.length >= 0 && responsesReceived.length <= 1) {
      setWrongPair(!wrongPair);
      // return false;
    }
    if (responsesReceived.length === 2) {
      const response1 = responsesReceived[0].includes(" ")
        ? responsesReceived[0].replace(" ", "_")
        : responsesReceived[0];
      const response2 = responsesReceived[1].includes(" ")
        ? responsesReceived[1].replace(" ", "_")
        : responsesReceived[1];
      //if it is true and if it is false
      // console.log(responsesReceived);
      // if (
      //   (info.hasOwnProperty(responsesReceived[0]) &&
      //     info[responsesReceived[0]] === responsesReceived[1]) ||
      //   (info.hasOwnProperty(responsesReceived[1]) &&
      //     info[responsesReceived[1]] === responsesReceived[0])
      // )
      if (
        (info.hasOwnProperty(response1) && info[response1] === response2) ||
        (info.hasOwnProperty(response2) && info[response2] === response1)
      ) {
        const index1 = infoToArrayRandom.indexOf(responsesReceived[0]);
        infoToArrayRandom.splice(index1, 1);
        const index2 = infoToArrayRandom.indexOf(responsesReceived[1]);
        infoToArrayRandom.splice(index2, 1);
        //Set response to 0
        setResponsesReceived([]);
        setInfoToArrayRandom(infoToArrayRandom);
        setValue(-1);
        setWrongPair(!wrongPair);
      } else {
        // clicked.style.backgroundColor = "#ff0000";
        setWrongPair(!wrongPair);
        setResponsesReceived([]);
      }
      console.log(responsesReceived);
    }
  };

  if (infoToArrayRandom.length === 0) {
    return (
      <>
        <div className="flex">
          <h2 className="congratulations">
            Congratulations 🎉🎉🎉🎉🎉🎉!!!! !!!!
          </h2>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="grid">
        {infoToArrayRandom.map((el, i) => {
          return (
            <button
              className={`btn ${i === value ? "btn-blue" : ""} ${
                i === value && wrongPair ? "btn-red" : ""
              }`}
              key={i}
              onClick={(e) => {
                retrieveData(e);
                setValue(i);
                compareData(e, i);
              }}
            >
              {/* Meter en compare function al reves */}
              {el.includes("_") ? el.replace("_", " ") : el}
              {/* {el} */}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default CountryCapitalGame;
