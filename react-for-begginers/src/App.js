import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [change, setChange] = useState([]);
  const [seed, setSeed] = useState(0);
  // fetch를 통해 암호화폐의 데이터를 불러옴.
  //json형태로 불러온 후 setCoins에 json을 넣음
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  // onClick은 select에 주고 option tag를 클릭 시 반응 하도록함
  // option tag를 클릭 시 암호화폐의 USD 환율을 받아오도록함
  const onClick = (event) => {
    setChange(event.target.value);
  };
  // input tag에서 원하는 USD(value)를 받아옴
  const onChange = (event) => {
    setSeed(event.target.value);
  };

  // map()함수를 활용하여 Object들 중 원하는 요소들을 받아옴
  // 원하는 USD로 얼마만큼의 암호화폐를 살 수 있는지 구현
  // 처음 실행 시 option의 coin.quotes.USD.price가 바로 받아지지 않음
  // 위의 에러를 해결 하기 위해 option의 최상단에 새로운 option을 추가하였고
  // 삼항식을 이용하여 'Click the Coin !' 일 땐 span을 비워둔다.
  return (
    <div>
      <h1>The Coins ! {loading ? "" : `${coins.length}`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onClick={onClick}>
          <option>Click the Coin !</option>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      <div>
        <input onChange={onChange} placeholder="How much do you have ?"></input>
        <br></br>
        <span>
          {change === "Click the Coin !" || seed === 0
            ? ""
            : `You can exchange ${seed / change}`}
        </span>
      </div>
    </div>
  );
}
export default App;
