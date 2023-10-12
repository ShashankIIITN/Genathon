import React, { useState, useEffect } from 'react'
import myImage from '../images/person.jpg'
import myImage2 from '../images/bott.jpg'

function TabContent(props) {
    const [chatData, setchatData] = useState([])
    useEffect(() => {
        setchatData(props.data)

    }, [chatData])

    console.log("get")

    return (
        <>
            <div className='chatMenu container w-75 '>
                {
                    chatData && chatData.map(e => {
                        return (
                            <div className='message-container' >
                                <div className='layout'>

                                    <div className='bott'>
                                        <img src={myImage2} className='person' alt="My Image2" />
                                        <p className=' text-secondary h4'>{e.bot}</p>
                                    </div>

                                    <div className='sender'>
                                        <img src={myImage} className='person' alt="My Image" />
                                        <p className='mee text-success h4'>{e.me}</p>
                                    </div>

                                </div>
                            </div>
                        );
                    })
                }
            </div>
            {/* <div className="asking position-absolute bottom-0 w-75 align-self-center input-group mb-3">
                <input type="text" className="form-control asking" placeholder="Ask about something" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button type="button" class="btn btn-success" id="button-addon2">Ask</button>
            </div> */}
            <div class="asking position-absolute bottom-0 w-75 align-self-center input-group mb-3">
                <input type="text" class="form-control" placeholder="Ask me Anything" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-success" type="button" id="button-addon2">Button</button>
            </div>
        </>
    )
}

export default TabContent