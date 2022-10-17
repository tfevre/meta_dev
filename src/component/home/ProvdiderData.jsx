const ProviderData = ({providerData}) => {
    const networkName = providerData.networkName;
    const chainId = providerData.chainId;
    const signerAddress = providerData.signerAddress;

    return (
        <>
            <div className="section">
                <div className="box small">
                    <h3 className="subtitle">Nom du réseau :</h3>
                    <p className="alertMsg">{networkName === "unknown" ? "local" : ""}</p>
                </div>
                <div className="box small">
                    <h3 className="subtitle">Chain id :</h3>
                    <p className="alertMsg">{chainId}</p>
                </div>
                <div className="box small">
                    <h3 className="subtitle">Wallet :</h3>
                    <p className="alertMsg">{signerAddress}</p>
                </div>
            </div>
        </>
    );
};

export default ProviderData;