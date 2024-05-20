import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const addUser = () => {
    if (name && dob && email) {
      const age = calculateAge(dob);
      const newUser = { name, dob, email, address, age };

      setUsers([...users, newUser]);
      setName("");
      setDob("");
      setEmail("");
      setAddress("");
    } else {
      alert("Please fill in the required fields (name, DOB, email)");
    }
  };

  const deleteUser = (index) => {
    const newUsers = users.filter((_, i) => i !== index);
    setUsers(newUsers);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>T/R</th>
                <th>Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.address}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => deleteUser(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <div className="desc">
            <div className="desc-header">
              <h3 className="text-center">Add User</h3>
            </div>
            <div className="desc-body">
              <form>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="form-control my-2"
                  required
                />
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  placeholder="DOB"
                  className="form-control my-2"
                  required
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="form-control my-2"
                  required
                />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Address"
                  className="form-control my-2"
                />
                
              </form>
            </div>
            <div className="desc-footer">
              <button className="btn btn-primary" onClick={addUser}>
                Add User
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
