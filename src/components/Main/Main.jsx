import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import './Main.css'
import { Context } from '../../context/Context'
const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
    const [show, setShow] = useState(false)



    return (
        <div className='main'>

            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon}></img>
            </div>

            <div className="main-conta">

                {!showResult ?
                    <>
                        <div className="greet">
                            <p><span>Hello, Dev</span></p>
                            <p>How can I help you today?</p>
                        </div>

                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to visiton an upcoming road</p>
                                <img src={assets.compass_icon}></img>
                            </div>

                            <div className="card">
                                <p>Improve the readibility of code</p>
                                <img src={assets.code_icon}></img>
                            </div>

                            <div className="card">
                                <p>Briefly summarize this concept :urban planning</p>
                                <img src={assets.message_icon}></img>
                            </div>
                            <div className="card">
                                <p>Brainstrom team bonding activities for our workretreat</p>
                                <img src={assets.bulb_icon}></img>
                            </div>
                        </div>
                    </>
                    : <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon}></img>
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt=''></img>
                            {loading ? <div className='loader'>
                                <hr />
                                <hr />
                                <hr />
                            </div> :
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }



                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => { setInput(e.target.value) }} value={input} type='text' placeholder="Enter the prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input ? <img onClick={() => onSent()} src={assets.send_icon} alt="" /> : null}
                        </div>
                    </div>
                    <p className='bottom-info'>Gemini may display inaccurate info, including about people, so double-check its responses.<a href='https://support.google.com/gemini/answer/13594961?visit_id=638481633324751568-4289215448&p=privacy_notice&rd=1#privacy_notice' target='_blank'> Your privacy & Gemini Apps</a></p>
                </div>
            </div>


        </div >
    )
}

export default Main

