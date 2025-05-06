import { useState } from "react";
import { Display } from "./components/Display";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import { Total } from "./components/Total";
import { Button } from "./components/Button";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => {
    const newClicks = {
      left: clicks.left + 1,
      right: clicks.right,
    };
    setClicks(newClicks);
  };

  const handleRightClick = () => {
    const newClicks = {
      left: clicks.left,
      right: clicks.right + 1,
    };
    setClicks(newClicks);
  };

  /*  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0); */
  /* const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  }; */

  return (
    <>
      <div>
        {clicks.left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {clicks.right}
      </div>
      {/* <Button handleEvent={increment} text="+1"></Button>
      <Display counter={counter} />
      <Button handleEvent={decrement} text="-1"></Button>
      <Button handleEvent={reset} text="Reset"></Button> */}
      {/* <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} /> */}
    </>
  );
};

export default App;
