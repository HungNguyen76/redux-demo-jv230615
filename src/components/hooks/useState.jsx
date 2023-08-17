import {useState} from 'react'

//hooks => function, được gắn vào function component trong React
//thay thế cho class component để quản lý được vòng đời của component trong React
//bắt đầu băng chữ use...
// muốn sử dụng hooks thì import từ react
//thường thì sẽ sử dụng hooks ở đầu function component
// useState tương đương với constructor() bên class component để khai báo state
// const [count, setCount] = useState(initialState)
//useEffect (thể hiện side effect bên trong function component, callAPI, setTimeout, cập nhật dữ liệu...)
//3 cách sử dụng: 
//1. useEffect(callback) => Gọi callback mỗi khi component re-render, gọi callback mỗi khi thêm component vào DOM
//

export default function UseState() {
    const [userInfo, setUserInfo] = useState({
        name: '',
        age: 0,
        email: ''
    })
    // console.log("🚀 ~ file: useState.jsx:27 ~ UseState ~ userInfo:", userInfo)
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserInfo(prevUserInfo => ({
            ...prevUserInfo,
            [name]: value
        }))
    }
  return (
    <>
        <h2>Object state example</h2>
        <form>
            <label>Name:
                <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleInputChange} 
                />
            </label>
            <br />
            <label>Age:
                <input
                    type="number"
                    name="age"
                    value={userInfo.age}
                    onChange={handleInputChange} 
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={userInfo.email}
                    onChange={handleInputChange} 
                />
            </label>
            <br />
        </form>
        <div>
            <h3>Entered Information: </h3>
            <p>Name: {userInfo.name}</p>
            <p>Age: {userInfo.age}</p>
            <p>Email: {userInfo.email}</p>
        </div>
        {/* <button onClick={() => setName("Tuan")}>Change name</button>
        <p>{name}</p> */}
    </>
  );
}
