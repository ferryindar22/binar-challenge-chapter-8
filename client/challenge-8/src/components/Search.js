import React, { useState } from 'react';
import '../css/Search.css';
import { Modal, Button } from 'react-bootstrap';

function Search() {
    const [show, setShow] = useState();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [level, setLevel] = useState('');
    const [exp, setExp] = useState('');
    const handleModal = () => setShow(true);
    const closeModal = () => setShow(false);
    
  return (
    <>
        <form class="row g-3" method='GET'>
            <div class="col-auto">
                <input type="text" class="form-control me-2" id="Username" aria-describedby="username" placeholder="Username" value={username} 
                    onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div class="col-auto">
                <input type="text" class="form-control me-2" id="Email" aria-describedby="email" placeholder="Email" value={email}
                     onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div class="col-auto">
                <input type="number" class="form-control me-2" id="Level" aria-describedby="level" placeholder="Level" value={level}
                    onChange={(e) => setLevel(e.target.value)}/>
            </div>
            <div class="col-auto">
                <input type="number" class="form-control me-2" id="EXP" aria-describedby="experience" placeholder="EXP" value={exp}
                    onChange={(e) => setExp(e.target.value)}/>
            </div>
            <div class="col-2">
                <Button onClick={handleModal} className="btn button-search" type='button'>Search</Button>
            </div>

        </form>
        <Modal show={show} onHide={closeModal}>
            <Modal.Header>
                <b>SEARCH RESULT</b>
            </Modal.Header>

            <Modal.Body>
            <b>Username:</b>
                <p>{username}</p>
                <b>Email: </b>
                <p>{email}</p>
                <b>Level: </b>
                <p> {level}</p>
                <b>Exp: </b>
                <p> {exp}</p>
            </Modal.Body>

            <Modal.Footer className='center'>
                <button className='buttonSumbit btn-dark' onClick={closeModal}>Close</button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default Search