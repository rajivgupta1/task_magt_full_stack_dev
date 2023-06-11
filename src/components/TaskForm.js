
import { useState } from "react";

import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { toast } from 'react-toastify';
import { postTask } from "../helper/axiosHelper";
import { fetchTasks } from "../helper/axiosHelper";


export const TaskForm = ({getTaskList}) => {
  
  const [form, setForm] = useState({});

  const handleOnChange = (e) =>{
    const {name,value} = e.target;
    // console.log(name, value);
     setForm({
      ...form,
      [name]: value,
     });
  };
  // console.log(form);

  const handleOnSubmit = async (e)=>{
    e.preventDefault();
    console.log(form);

      // send data  to the api
      const respPromise = postTask(form);

      toast.promise(respPromise, {
      pending: "please wait...",
      });

const { status, message }= await respPromise;
toast[status](message);
  
if (status === "success");{

//call the api to fetch all the tasks
getTaskList();
    }
  };


  return (

    <Form className=" border p-2 bg-light rounded" onSubmit= {handleOnSubmit}>
      <Row className="g-2">
        <Col md="6">
          <Form.Control required placeholder="watching tv" name="task" onChange={handleOnChange} />
        </Col>
        <Col md="2">
          <Form.Control required placeholder="33" type="number" name="hr" onChange={handleOnChange}/>
        </Col>
        <Col className="d-grid">
          <Button variant="primary" type="submit">Add Task</Button>
        </Col>
      </Row>
    </Form>
  );
};
