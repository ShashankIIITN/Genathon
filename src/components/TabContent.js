import React, { useState, useEffect, useRef, useContext } from 'react'
import myImage from '../images/person.jpg'
import myImage2 from '../images/bott.jpg'
import NewContext from '../context/NewContext'

function TabContent(props) {
    const Context = useContext(NewContext)
    const reff = useRef(null)
    const [chatData, setchatData] = useState([])
    const [query, setquery] = useState("")
    useEffect(() => {
        setchatData(props.data)

    }, [])

    const AskHandler = async (e) => {
        let ques = reff.current.value;
        console.log(ques)
        if (ques.trim() === "") {
            alert("pls ask something!");
        } else {
            let qry = {}
            let res = await Context.AskQuery(ques)
            qry.me = ques

            // let str = ""

            // res.map((e) => {
            //     if (e.text != null)
            //         str += `<div id = 'newline' >${e.text}</div>`;
            // })
            qry.bot = res

            // chatlist.push(qry)



            setchatData([...chatData, qry])
            console.log(chatData)
        }

    }

    console.log("get")

    return (
        <>
            <div className='chatMenu container w-75 '>
                {
                    chatData && chatData.map(e => {
                        return (
                            <div className='message-container' >
                                <div className='layout'>
                                    <div className='sender'>
                                        <img src={myImage} className='person' alt="My Image" />
                                        <p className='mee text-success h4'>{e.me}</p>
                                    </div>
                                    <div className='bott'>
                                        <img src={myImage2} className='person' alt="My Image2" />
                                        {typeof e.bot != "string" && e.bot.map(e => {
                                            console.log("ai")
                                            console.log(e)
                                            if (e.text == null)
                                                return <img src={e.image} className=' text-secondary h4 w-25'></img>
                                            else return <p className=' text-secondary h4'>{e.text}</p>
                                        })}
                                        {typeof e.bot === "string" &&
                                            <p className=' text-secondary h4'>{e.bot}</p>
                                        }
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
                <input type="text" class="form-control" ref={reff} placeholder="Ask me Anything" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-success" type="button" id="button-addon2" onClick={AskHandler}>Button</button>
            </div>
        </>
    )
}

export default TabContent