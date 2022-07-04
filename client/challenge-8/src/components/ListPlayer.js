import React from 'react';
//IMPORT GLOBAL CSS
import '../css/ListPlayer.css';
//IMPORT REACT ICONS
import {FaPlusCircle} from 'react-icons/fa';
//IMPORT COMPONENT
import Search from '../components/Search';

function ListPlayer() {
  return (
    <>
      <div class="text-center pt-5 mb-3">
        <h2><i class="fa-solid fa-users me-2"></i>PLAYER LIST</h2>
      </div>
      
      <div class="container mt-4">
      <Search/>
        <div class="mt-4">
          <a href="/create-player" id="createbutton" class="btn btn-createUser"> <i class="me-2"><FaPlusCircle/></i>CREATE NEW USER</a>
        </div>
        <table class="table my-4">
          <thead class="table-dark text-center">
          <tr>
                <th scope="col">Id</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">EXP</th>
                <th scope="col">Level</th>
                <th colspan="3" scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="text-center">
          <tr>
              <th scope="row">1</th>
              <td>Dimasw123</td>
              <td>Dimasw@gmail.com</td>
              <td>eyJwYXNzd29yZCI6IkRpbWFzIiwiaWF0IjoxNTE2MjM5MDIyfQ</td>
              <td>500</td>
              <td>100</td>
              <td><a href="/" class="btn btn-success">Details</a></td>
              <td><a href="/edit-player" class="btn btn-primary">Update</a></td>
              <td><a href="/" class="btn btn-danger">Delete</a></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Haryo</td>
              <td>Haryo@gmail.com</td>
              <td>eyJwYXNzd29yZCI6Ik1ySGFyeW8iLCJpYXQiOjE1MTYyMzkwMjJ9</td>
              <td>200</td>
              <td>150</td>
              <td><a href="/" class="btn btn-success">Details</a></td>
              <td><a href="/edit-player" class="btn btn-primary">Update</a></td>
              <td><a href="/" class="btn btn-danger">Delete</a></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Yolanda</td>
              <td>YolYol@gmail.com</td>
              <td>eyJwYXNzd29yZCI6IllvbGFuZGFCaW5hciIsImlhdCI6MTUxNjIzOTAyMn0</td>
              <td>430</td>
              <td>300</td>
              <td><a href="/" class="btn btn-success">Details</a></td>
              <td><a href="/edit-player" class="btn btn-primary">Update</a></td>
              <td><a href="/" class="btn btn-danger">Delete</a></td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Haris</td>
              <td>Haris@gmail.com</td>
              <td>eyJwYXNzd29yZCI6Ik1hc3JpcyIsImlhdCI6MTUxNjIzOTAyMn0</td>
              <td>250</td>
              <td>190</td>
              <td><a href="/" class="btn btn-success">Details</a></td>
              <td><a href="/edit-player" class="btn btn-primary">Update</a></td>
              <td><a href="/" class="btn btn-danger">Delete</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListPlayer