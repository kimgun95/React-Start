import './App.css';

function App() {
  const name = "Gun";
  const naver = {
    name: "네이버",
    url: "https://www.naver.com",
  };
  return (
    <div className="App">
      <h1 style={{
        color: "green"
      }}
      >
        hello! {name}!!
      </h1>
      <a href={naver.url}>{naver.name}</a>
    </div>
  );
}

export default App;
