import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Footer from "./components/Footer";
import "./App.css";
const App = () => {
  const pageSize = 36;

  const [progress, setProgress] = useState(0);
  let [mode, setmode] = useState("light");

  const changemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#2d2d2d";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#dde6e9";
    }
  };

  return (
    <div>
      <BrowserRouter>
        <NavBar changemode={changemode} />
        <LoadingBar
          color="#f11946"
          height={2}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                key="business"
                pageSize={pageSize}
                country="in"
                category="business"
              />
            }
          ></Route>

          <Route
            exact
            path="/entertainment"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                key="entertainment"
                pageSize={pageSize}
                country="in"
                category="entertainment"
              />
            }
          ></Route>

          <Route
            exact
            path="/general"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                key="general"
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          ></Route>

          <Route
            exact
            path="/science"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                key="science"
                pageSize={pageSize}
                country="in"
                category="science"
              />
            }
          ></Route>

          <Route
            exact
            path="/health"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                key="health"
                pageSize={pageSize}
                country="in"
                category="health"
              />
            }
          ></Route>

          <Route
            exact
            path="/sports"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                key="sports"
                pageSize={pageSize}
                country="in"
                category="sports"
              />
            }
          ></Route>

          <Route
            exact
            path="/technology"
            element={
              <News
                mode={mode}
                setProgress={setProgress}
                key="technology"
                pageSize={pageSize}
                country="in"
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
      <Footer mode={mode} />
    </div>
  );
};

export default App;
