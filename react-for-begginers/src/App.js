import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    // onSubmit을 할 때 마다 브라우저가 새로고침되어 preventDefault를 주었다.
    event.preventDefault();
    // 만약 toDo가 없다면 있을 때까지 리턴해준다. 함수가 동작하지 않도록.
    if (toDo === "") {
      return;
    }
    // submit 후 input의 value를 비우기 위해 setToDo를 비워준다.
    setToDo("");
    // input에서 받은 value를 []배열 안에 넣어주고 기존의 toDo는 뒤에 두도록한다.
    // current앞에 '...'을 두지 않으면 [Array(x), toDo]로 표시되기 때문에 Array를 열어주는 역활을 한다.
    setToDos((currentArray) => [...currentArray, toDo]);
    console.log(toDos);
  };
  // # delete 버튼 구현
  // onClick={deleteBtn}이 아닌 함수를 사용하여 index를 넣은 이유는 "바로 실행"되지 않고 클릭을 기다리기 위해 쓰임
  // filter함수의 기본 구문은 다음과 같다.
  // arr.filter(callback(element[, index[, array]])[, thisArg])
  // 이 중 element엔 item을 index에는 삭제하고 싶은 button과 li의 index(toDoIndex)를 넣어준다.
  // 이후 요청받은 index와 toDoIndex 같을 경우만 제외한다.
  // * !== 를 사용한 이유 : filter 함수는 ~이 아닌 요소(!==)만 반환하기 위해
  const deleteBtn = (index) => {
    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex));
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <ul>
          <li key={index}>
            {item}
            <button
              key={index}
              onClick={() => {
                deleteBtn(index);
              }}
            >
              ❌
            </button>
          </li>
        </ul>
      ))}
    </div>
  );
}

export default App;
