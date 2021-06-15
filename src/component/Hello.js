import World from './World';
import styles from "./Hello.module.css";
 
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
  function showName() {
    console.log("Gun");
  }
  function showAge(age) {
    console.log(age);
  }
  function showText(txt) {
      console.log(txt);
  }
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={showName}>Show Name</button>
      <button
        onClick={() => {
          showAge(10);
        }}
      >
        Show Age
      </button>
      <input
      type="text"
      onChange={e => {
          const txt = e.target.value;
          showText(txt);
      }}
      />
    </div>
  );
}; 