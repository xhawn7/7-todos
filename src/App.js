import ReduxThunkToDo from "./Components/biz/ReduxThunkToDo";
import ZustandToDo from "./Components/biz/ZustandToDo";

function App() {
  return (
    <div className="App">
      <h1>ToDo</h1>
      <ZustandToDo />
      <ReduxThunkToDo />
    </div>
  );
}

export default App;
