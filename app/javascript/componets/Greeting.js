import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllMessages } from '../redux/messageSlice';

const Greeting = () => {

    const messagesList = useSelector((state) => state.messages);
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (!messagesList.length) {
        dispatch(getAllMessages());
      }
    }, [dispatch]);

    const refresh = () => {
      window.location.reload(false);
    }
    
    return (
        <div>
         <p>{messagesList.description}</p>
         <button onClick={refresh}> Display another greeting message</button>
        </div>
      );
};

export default Greeting;