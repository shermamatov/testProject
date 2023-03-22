import React from "react";
import Head from "./Head/Head";
import SideBar from "./SideBar/SideBar";
import List from "./List/List";
import "./Home.scss";
const Home = () => {
    return (
        <div className="home">
            <Head />
            <SideBar />
            <List />
        </div>
    );
};

export default Home;
