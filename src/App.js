import Body from "./components/Body";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/watchPage";
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Body/>}>
            <Route path="/" element={<MainContainer/>}/>
            <Route path="watch" element={<WatchPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
