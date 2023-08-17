// import TimerComponent from "./TimerComponent";
import './App.css'
// import WordCounter from './components/WordCounter';
// import Counter from './views/components/Counter';
// import Form  from "./components/form";
// import Card from "./components/card";
// import Footer from "./components/footer";
// import HomePage from "./components/homepage";
// import Lifecycle from "./components/lifecycle";
// import Login from "./components/login";
// import Register from "./components/register";
// import RollDice from "./components/rollDice";
// import Table from "./components/table";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import UseState from "./components/hooks/useState";
// import UseEffect from "./components/hooks/useEffect";
// import Effect from "./components/hooks/effect";
// import Ref from "./components/hooks/ref";
// import Context from './components/hooks/context';
// import Reducer from './components/hooks/reducer';
// import Callback from './components/hooks/callback';
// library.add(fas)
// import Memo from './components/hooks/memo';
// import Router from "@/routes";
import HomePage from './views/pages/HomePage';
// import Navbar from './views/components/Navbar';
import Counter from './components/Counter';
import TodoApp from './components/TodoApp';

// const dogArray = [
//   {
//     id: 1,
//     url: "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*",
//     title: "Dog Fog",
//     body: "This is dog fog",
//   },
//   {
//     id: 2,
//     url: "https://www.southernliving.com/thmb/kbA2khXaJQqn9mo5R9ZRAYL8zCw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x665:1001x667)/gettyimages-837898820-2000-667fc4cc028a43369037e229c9bd52fb.jpg",
//     title: "Dog BecDe",
//     body: "This is dog becde",
//   },
// ];
// const productList = [
//   {
//     name: "Nike Air Force 1",
//     stock: 5,
//     price: 5000,
//     url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/13721f24-2774-443e-a27d-998d2c6be068/air-force-1-07-easyon-shoes-LKXPhZ.png",
//   },
//   {
//     name: "Nike InfinityRN 4",
//     stock: 7,
//     price: 7000,
//     url: "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e01eb9e0-ddc1-48bf-a516-bcbd40c78e39/infinityrn-4-road-running-shoes-mLRjcz.png",
//   },
// ];

function App() {
  return (
    <>
      <div>
        <HomePage />
        <Counter />
        <TodoApp />
        {/* <Router /> */}
        {/* <WordCounter /> */}
        {/* <Counter /> */}
        {/* <div className="d-flex justify-content-center align-item-center">
          {dogArray.map((item) => (
            <Card key={item.id} dogs={item} />
          ))}
        </div>
        <Table productList={productList} />
        <RollDice /> */}
        {/* <Lifecycle /> */}
        {/* <Login /> */}
        {/* <Register /> */}
        {/* <Form /> */}
        {/* <UseState /> */}
        {/* <UseEffect /> */}
        {/* <Effect /> */}
        {/* <Ref /> */}
        {/* <Context /> */}
        {/* <Reducer /> */}
        {/* <Callback /> */}
        {/* <Memo /> */}
        {/* <TimerComponent /> */}
      </div>
    </>
  );
}

export default App;
