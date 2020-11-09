import React, { useContext } from "react"
import './style.scss';
import { RiReplyFill } from 'react-icons/ri';
import { AiFillLock } from 'react-icons/ai';
import { GrDocumentText } from 'react-icons/gr';
import { SearchContext } from "../../contexts/SearchContext";

function Project(props) {
    const [search] = useContext(SearchContext)

    return (
        <div className="project">
            {search === props.projectInfo.projectName ? (
                <div className="card">
                    <p className="title"><span>{props.projectInfo.projectName}</span> - {props.projectInfo.company}</p>
                    <div className="card-content">
                        <div>
                            <RiReplyFill style={{ fontSize: "22px", paddingBottom: "18px" }} />
                            <img alt="just-info" src={"https://i.pinimg.com/originals/e5/3c/1f/e53c1fad5d2be558238d64ae45cc01b6.jpg"} />
                            <p className="info">
                                <span className="name">{props.projectInfo.owner}</span> replied: <span className="message">{props.projectInfo.message}</span>
                            </p>
                        </div>

                        <div>
                            <p className="time">{props.projectInfo.hours} hours ago <span style={{ color: 'black' }}><AiFillLock /></span></p>
                        </div>
                    </div>
                </div>) : <div>




                    {props.projectInfo.company ? (
                        <div className="card">
                            <p className="title"><span>{props.projectInfo.projectName}</span> - {props.projectInfo.company}</p>
                            <div className="card-content">
                                <div>
                                    <RiReplyFill style={{ fontSize: "22px", paddingBottom: "18px" }} />
                                    <img alt="just-info" src={"https://i.pinimg.com/originals/e5/3c/1f/e53c1fad5d2be558238d64ae45cc01b6.jpg"} />
                                    <p className="info">
                                        <span className="name">{props.projectInfo.owner}</span> replied: <span className="message">{props.projectInfo.message}</span>
                                    </p>
                                </div>

                                <div>
                                    <p className="time">{props.projectInfo.hours} hours ago <span style={{ color: 'black' }}><AiFillLock /></span></p>
                                </div>
                            </div>
                        </div>
                    ) : ('')}

                    <div className="card">
                        <p className="title"><span>Newsletter design</span> - CP Global</p>
                        <div className="card-content">
                            <div>
                                <RiReplyFill style={{ fontSize: "22px", paddingBottom: "23px" }} />
                                <img alt="just-info" src={"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"} />
                                <p className="info">
                                    <span className="name">Matthweh</span> replied: <span className="message">Thank you! I will update all files soon.</span>
                                </p>
                            </div>
                            <div>
                                <p className="time">4 hours ago <span style={{ color: 'black' }}><AiFillLock /></span></p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <p className="title"><span>Website redesign</span> - Graham Co.</p>
                        <div className="card-content">
                            <div className="replays">
                                <div className="replay">
                                    <RiReplyFill style={{ fontSize: "22px", paddingBottom: "23px" }} />
                                    <img alt="just-info" src={"https://i.pinimg.com/originals/e5/3c/1f/e53c1fad5d2be558238d64ae45cc01b6.jpg"} />
                                    <p className="info">
                                        <span className="name">Aurdey</span> replied: <span className="message">Already working on that. I'll keep you updated! Thanks!</span>
                                    </p>
                                </div>
                                <div className="replay">
                                    <GrDocumentText style={{ fontSize: "22px", paddingBottom: "23px" }} />
                                    <img alt="just-info" src={"https://mpng.subpng.com/20180306/gfe/kisspng-businessperson-silhouette-company-vector-business-profile-5a9f3e8ca1ff88.4225865715203856766636.jpg"} />
                                    <p className="info">
                                        <span className="name">Chriss</span> added a file: <span className="message">homepage-design-draft.png</span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className="time">4 hours ago <span style={{ color: 'black' }}><AiFillLock /></span></p>
                            </div>
                        </div>
                    </div>

                    <div className="card">
                        <p className="title"><span>Wireframes</span> - Hoor Show</p>
                        <div className="card-content">
                            <div>
                                <RiReplyFill style={{ fontSize: "22px", paddingBottom: "23px" }} />
                                <img alt="just-info" src={"https://cdn.vox-cdn.com/thumbor/nu5u70UZveqNTcKAjboMil5PdSg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/13737224/AJ_Finn_author_photo_color_photo_courtesy_of_the_author.jpg"} />
                                <p className="info">
                                    <span className="name">Matthweh</span> replied: <span className="message">@Audrey, I'm still waiting for the feedback. Can you please check all the files and let...</span>
                                </p>
                            </div>
                            <div>
                                <p className="time">4 hours ago <span style={{ color: 'black' }}><AiFillLock /></span></p>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
}

export default Project;
