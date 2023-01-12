import { useState } from 'react';
import useHttp from '../../hooks/useHttp';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
  
  const {isLoading , error , sendRequest} = useHttp();
  const enterTaskHandler = async (taskText) => {

    const requestConfig = {url:"https://react-backend-connection-default-rtdb.firebaseio.com/tasks.json",
    method:'POST',
    body:{text:taskText},//String json transformation done by the hook when sending the request
    headers:{
      'Content-Type': 'application/json',
    },
  }

  const applyData = (data)=>{

    const generatedId = data.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
  }

    sendRequest(requestConfig , applyData);
    
  };

  

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
