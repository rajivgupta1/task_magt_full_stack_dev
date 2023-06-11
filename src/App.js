import { Col, Container, Row, Table } from "react-bootstrap";
import "./App.css";
import { TaskForm } from "./components/TaskForm";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchTasks } from "./helper/axiosHelper";
import { useState } from "react";
import { TaskContainer } from "./components/TaskContainer";

function App() {
  const [list, setList] = useState([]);

  const getTaskList = async ()=>{
    const {status, taskList} = await fetchTasks();

    if(status === "success" && taskList.length){
    setList(taskList);
    }
  };
     console.log(list);

  return (
    <div className="wrapper">
      <Container>
        <Row>
          <Col className="mt-5 text-center fs-1 mb-2"><h1>Task Mgmt</h1></Col>
        </Row>

        {/* form  */}
        <TaskForm getTaskList={getTaskList} />

        {/* task display table  */}

        <TaskContainer list={list} />
      </Container>
      <ToastContainer/>
    </div>
  );
};

export default App;
