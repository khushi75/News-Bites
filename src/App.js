import "./App.css";
import React, {useState} from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 9;
  const apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)

  const handleProgress = (newProgress) => {
    setProgress(newProgress);
  };
  
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            height={3}
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  catagory="general"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/business"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="business"
                  pageSize={pageSize}
                  country="in"
                  catagory="business"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="entertainment"
                  pageSize={pageSize}
                  country="in"
                  catagory="entertainment"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/general"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  catagory="general"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="health"
                  pageSize={pageSize}
                  country="in"
                  catagory="health"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/science"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="science"
                  pageSize={pageSize}
                  country="in"
                  catagory="science"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/sports"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="sports"
                  pageSize={pageSize}
                  country="in"
                  catagory="sports"
                />
              }
            >
              {" "}
            </Route>
            <Route
              path="/technology"
              element={
                <News setProgress={setProgress} apiKey={apiKey}
                  key="technology"
                  pageSize={pageSize}
                  country="in"
                  catagory="technology"
                />
              }
            >
              {" "}
            </Route>
          </Routes>
        </Router>
      </div>
    );
  
}

export default App;