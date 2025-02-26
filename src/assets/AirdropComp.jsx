import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useRef, useState } from "react";
export default function AirdropComp() {
  const [bal, setBal] = useState(0);
  const [loading, setLoading] = useState(false);
  const wallet = useWallet();
  const amtRef = useRef();
  const { connection } = useConnection();

  const style1 =
    "linear-gradient(rgba(141, 41, 166, 0), rgba(70, 1, 98, 0)),url('/Users/pk6710/Desktop/airdrop/src/assets/bg2.jpg')";

  useEffect(() => {
    if (wallet?.publicKey) {
      getBalance();
    }
  }, [wallet.publicKey]);

  const sendAmount = async () => {
    await connection.requestAirdrop(
      wallet.publicKey,
      Number(amtRef.current.value) * 1000000000
    );
    alert(`Airdrop Requested ${amtRef.current.value} SOL`);
  };
  const getBalance = async () => {
    setLoading(true);
    const bal = await connection.getBalance(wallet.publicKey);
    setBal(bal);
    setLoading(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          fontSize: "50px",
          maxWidth: "20vw",
          background: style1,
          borderRadius: "10px",
          border: "2px solid rgba(141, 41, 166, 0.29) ",
          boxShadow: "0 0 10px 5px rgba(141, 41, 166, 0.29) inset",
          minHeight: "100vh",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
          boxSizing: "border-box",
          color: "#ffgf",
          margin: "10px",
        }}
      >
        Solana Airdrop Dashboard
      </div>
      <div
        style={{
          top: "20%",
          padding: "10px",
          margin: "10px",
          marginRight: "15px",
          minHeight: "100vh",
          minWidth: "80vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          fontSize: "50px",
          boxSizing: "border-box",
          justifyContent: "center",
          maxWidth: "20vw",
          background: style1,
          borderRadius: "10px",
          border: "2px solid rgba(141, 41, 166, 0.29) ",
          boxShadow: "0 0 10px 5px rgba(141, 41, 166, 0.29) inset",

          textAlign: "center",

          paddingTop: "30px",

          color: "#ffgf",
        }}
      >
        Enter the amount you want to request
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "10px",
            fontSize: "30px",
            placeItems: "center",
            borderRadius: "10px",
            border: "2px solid rgba(141, 41, 166, 0.29) ",
             boxShadow: "0 0 10px 5px rgba(141, 41, 166, 0.29) inset",
             padding: "10px",

          }}
        >
          Balance :
          <span style={{ fontSize: "30px" }}>
            {loading ? "Loading..." : `${bal / 1000000000} SOL`}
          </span>
        </div>
        <div
          readOnly
          style={{ fontSize: "30px", backgroundColor: "#0000", color: "red",borderRadius: "10px",
            border: "2px solid rgba(141, 41, 166, 0.29) ",
            boxShadow: "0 0 10px 5px rgba(141, 41, 166, 0.29) inset",
          padding: "10px",}}
          type="text"
          placeholder={wallet?.publicKey?.toString()}
        >
          ADDRESS : {wallet?.publicKey?.toString()}
        </div>
        <input
          style={{ fontSize: "30px", textAlign: "center",backgroundColor: "#0000", color: "white",borderRadius: "10px",}}
          ref={amtRef}
          type="text"
          placeholder="Enter the amount"
        />
        <button style={{ fontSize: "30px" , backgroundColor:'#0000',color:"white",borderRadius:"10px",padding:"5px"}} onClick={sendAmount}>
          Request Airdrop
        </button>
      </div>
    </div>
  );
}
