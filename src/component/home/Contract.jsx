import { isAddress } from "ethers/lib/utils";
import { ethers } from "ethers";
import { smartContract } from '../../smartContract/smartContract';
import { useState } from "react";

const Contract = ({provider}) => {
    const [state, setState] = useState({});

    const submit = async (e) => {
        e.preventDefault();
        const target = e.currentTarget;
        const contractAddress = target.contractAddress.value;
        if (isAddress(contractAddress)) {
            try {
                const ct = new ethers.Contract(contractAddress, smartContract.abi, provider);
                const name = await ct.name();
                const symbol = await ct.symbol();
                const totalSupplyBn = await ct.totalSupply();
                const totalSupply = ethers.utils.formatEther(totalSupplyBn);
                setState({contractName: name, contractSymbol: symbol, totalSupply});
            } catch (error) {
                console.log(error);  
            };
        };
    };

    return (
        <>
            <div className="section">
                <form className="box" onSubmit={submit}>
                    <h3 className="subtitle">Renseigner l'adresse de votre Smart Contract :</h3>
                    <input type="text" id="contractAddress" name="contractAddress" className="input" placeholder="Smart contract address*"/>
                    <button type="submit" className="button">Valider</button>
                </form>
            </div>
            <div className="section">
                <div className="box small">
                    <h3 className="subtitle">Nom du contract :</h3>
                    <p className="alertMsg">{state.contractName || ""}</p>
                </div>
                <div className="box small">
                    <h3 className="subtitle">Symbole du contract :</h3>
                    <p className="alertMsg">{state.contractSymbol || ""}</p>
                </div>
                <div className="box small">
                    <h3 className="subtitle">Total supply :</h3>
                    <p className="alertMsg">{state.totalSupply || ""}</p>
                </div>
            </div>
        </>
    );
};

export default Contract;