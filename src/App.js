import { Link,Route,Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Post from "./Post";
import Posts from "./posts";
import './navication.css'
import EditPost from "./EditPost";
import WindowSize from "./windowSize";

function App() {
  let datas=[{
    id: 1,
    movie: "The Lord of Rings",
    review: "good",
    rating: "4.3"
  },
  {
    id: 2,
    movie: "Titanic",
    review: "fantastic",
    rating: "4.8"
  },
  {
    id: 3,
    movie: "King Kong",
    review: "good",
    rating: "4.7"
  },
  {
    id: 4,
    movie: "Black Adam",
    review: "good",
    rating: "4.2"
  }
]

  const {width}=WindowSize()
  return (
    <>
    <nav>
      <Link id="a" to="/">Home</Link>
      <Link id="a" to="/about">About</Link>
      <Link id="a" to="/post">Post</Link>
    </nav>
      <Routes>
        <Route path="/" element={<Home datas={datas} width={width}/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/post" element={<Post datas={datas}/>}/>
        <Route path="/post/:id" element={<Posts datas={datas}/>}/>
        <Route path="/editpost/:id" element={<EditPost datas={datas} />}/>
      </Routes>
      </>
  );
}

export default App;
