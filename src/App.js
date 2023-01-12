import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';

function App() {

  const [tasks, setTasks] = useState([]);
  const url = 'https://react-backend-connection-default-rtdb.firebaseio.com/tasks.json';
  const requestConfig = {url:url};

  const transformTasks = (data)=>{

    const loadedTasks = [];
    for(const taskKey in data)//Looping through javascript object
    {
       loadedTasks.push({id:taskKey , text:data[taskKey].text});
    }
    setTasks(loadedTasks);
    //Although it seems we are accessing setTasks here
    //But the function will be called in there
    //Reason being : its not a single function that will execute
    //the code and return .
    //But rather , everything within the hook will actually 
    //be deported here as a separate set of hooks and all
    //So , we need not pass setTasks..interesting naaa.

  }


  const {isLoading , error , sendRequest:fetchTasks} = useHttp();
  //For destructuring a javascript object , the destructuring is done
  //On the basis of the property name ,and that cannot be altered as per will
  //But for custom use ,we can always assign an alias name to it.
  //Here , fetchTasks is the alias name assigned to sendRequests
  
  useEffect(() => {
    fetchTasks(requestConfig , transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
