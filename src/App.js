import InputForm from "./components/DailyTaskManager/InputForm";
import TaskList from "./components/DailyTaskList/TaskList";
import { useState } from "react";
function App() {
  const [Tasks, updatetask] = useState([]);
  function handelUpdateArray(task) {
    updatetask((tasks) => {
      return [task, ...tasks];
    });
  }
  function RequestDelete(index) {
    updatetask(
      Tasks.filter((task, taskindex) => {
        return taskindex !== index ? task : null;
      })
    );
  }
  return (
    <div className="App">
      <InputForm updateList={handelUpdateArray} />
      <TaskList Tasks={Tasks} RequestDelete={RequestDelete} />
    </div>
  );
}

export default App;
