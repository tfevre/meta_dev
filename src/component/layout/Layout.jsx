import { Route, Routesi } from "react-router-dom";
import Nav from "../nav/Nav";
import Home from "../home/Home";
import { useEffect, useState } from "react";
import Metamask from "../install_metamask/Metamask";

const Layout = () => {
    const [state, setState] = useState(false);

    useEffect(() => {
        if (window.ethereum) {
            setState(true);
        };
    }, []);

    return (
        <>
            <Nav />
            {state ? <Home /> : <Metamask />}
        </>
    );
};

export default Layout;