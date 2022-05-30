import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./layouts/home";
import Board from "./layouts/board";
import List from "./layouts/list";
import Login from "./layouts/login";
import Question from "./layouts/question";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="boards" element={<Board />} />
          <Route path="list" element={<List />} />
          <Route path="login" element={<Login />} />
          <Route path="questions" element={<Question />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
