import { useState } from 'react';

function Message() {
    

    
 const [message, setMessage] = useState ([
        {
            text: 'Hi',
            sender: 'person1',
            side: 'inbox',
            id: 1
        },
        {
            text: 'Hello',
            sender: 'person2',
            side: 'outbox',
            id: 2 
        },
        {
            text: 'bye',
            sender: 'person1',
            side: 'inbox',
            id: 3 
        },
    ]);
 

    const handlerRemove = (id) =>{
        setMessage(message.filter(item =>{
             if(item.id === id){
                return false
             }
             return true
        }))
    };

    

    return (
      <div>
        {message.map(item =>{
            return(
                <div className={`row ${item.side === 'outbox' ? 'justify-content-end' : ''}`}>
                    <div className="col-5">
                        <div className={item.side}>
                             {item.text}
                             <div>
                                {item.sender}
                             </div>
                             <button onClick={() => handlerRemove(item.id)}>
                                X
                             </button>
                        </div>
                    </div>
                </div>
                )
            })
        }
      </div>
    );
  }
  
  export default Message;