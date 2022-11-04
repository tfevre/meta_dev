import { useState } from "react";
import { ethers } from "ethers";
import ProviderData from "./ProvdiderData";
import Contract from "./Contract";
import TransferBTN from "./TransferBTN";

const Home = () => {
    const [state, setState] = useState({});

    const connect = async () => {
        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();
            const signerAddress = await signer.getAddress();
            const network = await provider.getNetwork();
            const networkName = network.name;
            const chainId = network.chainId;
            setState({providerData: {networkName, chainId, signerAddress}, provider, signer});
        } catch (error) {
          console.log(error);
          setState({error: "une erreur est survenue"});
        };
    };

    return (
        <>
            <div className="section">
                <button className="button" onClick={connect}>Connecter Metamask</button>
            </div>
            {state.error && <div className="section">
                <div className="box">
                    <p className="alertMsg">{state.error}</p>
                </div>
            </div>}
            {state.provider && 
                <>
                    <ProviderData providerData={state.providerData} />
                    <Contract provider={state.provider} signer={state.signer}/>
                </>
            }
        </>
    );
};

export default Home;