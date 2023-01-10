import './App.scss';
import MyFirstComponent from "./components/MyFirstComponent/MyFirstComponent";
import TextOptionsComponent from "./components/TextOptionsComponent/TextOptionsComponent";
import Task1_NameList from "./components/HW_3/Task1_NameList";
import Task2_Counter from "./components/HW_3/Task2_Counter";
import HideOrShowBtn from "./components/HW_4/HideOrShowBtn";

function App() {

  return (
    <div className={'App'}>
      <p className={'title'}>Hello world!</p>

      <MyFirstComponent />
      <TextOptionsComponent />
      <Task1_NameList />
      <Task2_Counter />
      <HideOrShowBtn />
    </div>
  );
}

export default App;
