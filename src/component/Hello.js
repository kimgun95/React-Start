import World from './World';
import styles from "./Hello.module.css";
import React, { useState } from 'react';
import UserName from './UserName';
 
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
export default function Hello(props) {
  const [name, setName] = useState("Mike");
  const [age, setAge] = useState(props.age);
  const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

  return (
    <div>
      <h2 id="name">{name}({age}) : {msg}</h2>
      {/* Hello 컴포넌트에게는 name이 state지만 UserName 컴포넌트에게는 props이다. */}
      <UserName name={name} />
      <button onClick={() => {
        setName(name === "Mike" ? "Jane" : "Mike");
        setAge(age + 1);
      }}>Change Name!</button>
    </div>
  );
}; 