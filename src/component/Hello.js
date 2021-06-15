import World from './World';

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
            <h1>Hello</h1>
            <World />
            <World />
            <World />
        </div>
    );
}; 