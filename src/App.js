import Home from "./components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Edit from "./components/Edit/Edit";

function App() {
    return (
        <BrowserRouter>
            <div
                className="App"
                style={{
                    backgroundColor: "#f2f2f2",
                    width: "100%",
                    paddingBottom: "150px",
                }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/edit/:id" element={<Edit />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
