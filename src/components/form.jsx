import { Component } from "react";
// import Login from "./login";
// import Register from "./register";
//Có 2 loại form trong React
//1 là controlled form => giá trị thành phần form được lưu trong state của component
//giá trị được cập nhật thông qua setState
//Dữ liệu trong form được quản lý hoàn toàn bởi componnet

export default class Form extends Component {
  constructor(props) {
    super(props);
    //khỏi tạo state
    this.state = {
      studentName: "",
      age: "",
      course: "ReactJS",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault(); //ngăn chặn hành vi mặc định của browser
    alert(
      `Xin Chào: ${this.state.studentName}. Bạn đã đăng ký khoá học: ${this.state.course}. Nam nay bạn chưa đủ tuổi: ${this.state.age} `
    );
  };
  handleChange = (e) => {
    let name = e.target.name;
    console.log("🚀 ~ file: form.jsx:26 ~ Form ~ name:", name);
    let value = e.target.value;
    console.log("🚀 ~ file: form.jsx:28 ~ Form ~ value:", value);
    //cạp nhật state
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Tên học viên:
            <input
              type="text"
              name="studentName"
              value={this.state.studentName}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Tuổi:
            <input
              type="text"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Chọn khoá học: &nbsp;
            <select
              name="course"
              value={this.state.course}
              onChange={this.handleChange}
            >
              <option value="ReactJs">ReactJs</option>
              <option value="HTML">HTML</option>
              <option value="CSS">CSS</option>
              <option value="Javascript">Javascript</option>
              <option value="NodeJs">NodeJs</option>
            </select>
          </label>
          <br />
          <input type="submit" value="submit"></input>
        </form>
      </>
    );
  }
}
