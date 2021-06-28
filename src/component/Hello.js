import World from './World';
import styles from "./Hello.module.css";
import React, { useState } from 'react';
 
// 방법 1
// const Hello = function () {
//     <p>Hello</p>;
// };

// export default Hello;

// 방법 2
// const Hello = () => {
//     <p>Hello</p>;
// };

// export default Hello;

// 방법 3
export default function Hello() {
  // let name = "Mike";
  const [name, setName] = useState("Mike");

  function changeName() {
    setName(name === "Mike" ? "Jane" : "Mike");
    // document.getElementById("name").innerText = name;
  }
  return (
    <div>
      <h1>State</h1>
      <h2>컴포넌트의 속성 값</h2>
      <h2 id="name">{name}</h2>
      <button onClick={changeName}>Change Name!</button>
    </div>
  );
}; 