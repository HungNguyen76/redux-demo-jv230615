import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";

function UserInfo() {
  const [userInfo, setUserInfo] = useState([]);
  useEffect(() =>  {
    try {
      fetch("https://voucher-hunter-api.onrender.com/api/v1/students")
        .then((res) => res.json())
        .then((data) => setUserInfo(data));
    } catch (err) {
      throw new Error(err);
    }
  }, []);
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Year of birth</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        {userInfo.map((user, index) => (
          <tr key={index}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.yob}</td>
            <td>{user.score}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default UserInfo;
