import './App.scss';
import MyFirstComponent from "./components/MyFirstComponent/MyFirstComponent";
import TextOptionsComponent from "./components/TextOptionsComponent/TextOptionsComponent";

function App() {
  return (
    <div className={'App'}>
      <p className={'title'}>Hello world!</p>

      <MyFirstComponent />
      <TextOptionsComponent />
    </div>
  );
}

export default App;
