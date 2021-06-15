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
    return (
        <div>
            {/* 스타일 적용법 1 */}
            <h1
            style={{
                color: "#f00",
                borderRight: "12px solid #000",
                marginBottom: "50px",
                opacity: 1,
            }}
            >
                Hello
            </h1>
            <div className={styles.box}>Hello</div>
        </div>
    );
}; 