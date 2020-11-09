import React, { useState, useContext  } from "react"
import './style.scss';
import myContext from '../../contexts/ProjectContext';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        opacity: '0.9',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

function Heading() {
    // const contextType = useContext(myContext)
    const { value, setValue} = useContext(myContext)

    const [projectName, setProjectName] = useState('')
    const [company, setCompany] = useState('')
    const [owner, setOwner] = useState('')
    const [message, setMessage] = useState('')
    const [hours, setHours] = useState('')

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Hello from handleSubmit");
        let info = [{projectName, company, owner, message, hours}]
        setValue(info)
        closeModal()
    }

    return (
        <div className="Heading">
            <h1>Dashboard</h1>

            <button className="add-btn" onClick={openModal}>Add Project</button>
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">

                <button className="btn-close" onClick={closeModal}>X</button>
                <div>Create new project</div>
                <form onSubmit={handleSubmit}>
                    <input type="text" required onChange={event => setProjectName(event.target.value)} placeholder="Project Name" />
                    <input type="text" required onChange={event => setCompany(event.target.value)} placeholder="Company" />
                    <input type="text" required onChange={event => setOwner(event.target.value)} placeholder="Owner" />
                    <input type="text" required onChange={event => setMessage(event.target.value)} placeholder="Message" />
                    <input type="text" required onChange={event => setHours(event.target.value)} placeholder="Hours" />
                    <br />
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </Modal>
        </div>
    );
}

export default Heading;
