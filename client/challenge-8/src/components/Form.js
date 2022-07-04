import React, { useState } from 'react';
import '../css/Form.css'
import { Modal, Button } from 'react-bootstrap';


function FormCreateUser() {
    const [show, setShow] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [level, setLevel] = useState('');
    const [exp, setExp] = useState('');
    const handleModal = () => setShow(true);
    const closeModal = () => setShow(false);

  return (
    <>
        <div class="container">
            <div class="row">
                <div class="col-md-6 offset-md-3">
                <div class="card my-5 pt-3">
                    <form class="card-body cardbody-color" method='POST'>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="Username" aria-describedby="username" placeholder="Username" value={username} 
                            onChange={(e) => setUsername(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <input type="text" class="form-control" id="Email" aria-describedby="email" placeholder="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <input type="password" class="form-control" id="password" placeholder="password" value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <input type="number" class="form-control" id="Level" aria-describedby="level" placeholder="Level" value={level}
                            onChange={(e) => setLevel(e.target.value)}/>
                        </div>
                        <div class="mb-3">
                            <input type="number" class="form-control" id="EXP" aria-describedby="experience" placeholder="EXP" value={exp}
                            onChange={(e) => setExp(e.target.value)}/>
                        </div>
                    </form>
                    <Button onClick={handleModal} className="btn btn-success px-5 mb-2 w-100">SUBMIT</Button>
                    <a href='/api/v1/players'><button class="btn btn-primary w-100">BACK</button></a>
                </div>
                </div>
            </div>
        </div>
        <Modal show={show} onHide={closeModal}>
            <Modal.Header>
                <b>DATA RESULT</b>
            </Modal.Header>

            <Modal.Body>
                <b>Username:</b>
                <p>{username}</p>
                <b>Email: </b>
                <p>{email}</p>
                <b>Password: </b>
                <p>{password}</p>
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

export default FormCreateUser