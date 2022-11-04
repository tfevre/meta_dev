const TransferBTN = ({provider},{contract}) => {
    const [state, setState] = useState({});

    const submit = async (e) => {
        e.preventDefault();
        const contractAddress = contract.address;
        if (isAddress(contractAddress)) {
            try {
                const ct = new ethers.Contract(contractAddress, smartContract.abi, provider);
                const name = await ct.name();
                const symbol = await ct.symbol();
                const totalSupplyBn = await ct.totalSupply();
                const totalSupply = ethers.utils.formatEther(totalSupplyBn);
                setState({contractName: name, contractSymbol: symbol, totalSupply});
                console.log(ct);
            } catch (error) {
                console.log(error);  
            };
        };
    };

    return (
        <>
            <div className="section">
                <form className="box" onSubmit={submit}>
                    <button type="submit" className="button">Initiate Transfer</button>
                </form>
            </div>
        </>
    );
};

export default TransferBTN;