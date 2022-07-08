import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';

import { useNavigate } from 'react-router-dom';

const Home = ( )=>{

    const nagivate = useNavigate( ); 
    const [roomId, setRoomId ] = useState( );
    const [username, setUsername ] = useState();
    

    
    const createNewRoom = (e)=>{
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);

        toast.success('Created a new room!')

    };
    // if username and room id not entered
    const joinRoom = ()=>{
        if( !roomId || !username )
        {
            toast.error('ROOM ID & username is required!');
            return;
        }

    // f entered then redirect
    nagivate(`/editor/${roomId}`,{

        state: {
            username, 

        },
    
    })
   
    };
    const handleInputEnter = (e) =>{
        console.log('event', e.code);
        if(e.code === 'Enter')
        {
            joinRoom();
        }
    }
    
    return (
        
        <div className="homePagerapper">
            <div className='formWrapper'>
                <img src="/code-share.svg" alt="code-share-logo" />
                <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
                <div className="inputGroup">
                    <input type="text" 
                        className="inputBox" 
                        placeholder="ROOM ID"
                       
                        onChange={(e)=> setRoomId(e.target.value)}
                        value= {roomId}
                        onKeyUp={handleInputEnter}

                     />
         
                    <input type="text" 
                        className="inputBox"
                        placeholder="USER NAME"
                       
                        onChange={(e)=> setUsername(e.target.value)}
                        value= {username}
                        onKeyUp={handleInputEnter}

                    />

                <button className='btn joinBtn' onClick={joinRoom}>Join</button>
                <span className="createInfo">
                    If you don't have any invite then create &nbsp;
                    <a onClick={createNewRoom} href="" className='createNewBtn' >new room</a>
                </span>
            </div>
            <footer>
                {/* <h4>Buit with &nbsp;<b>prsndp</b></h4> */}
            </footer>

        </div>
        </div> 
    )

}

export default Home;