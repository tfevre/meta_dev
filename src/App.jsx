import { useEffect } from "react";
import { ethers } from "ethers";
import Layout from "./component/layout/Layout";

const App = () => {

    const connect = async () => {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            console.log(signer);
        };
    };

    useEffect(() => {
        connect();
    }, []);

    return (
        <>
            <Layout />
        </>
    );
};

export default App;