import { Box, Container, Grid, Divider } from "@material-ui/core";
import { useState } from "react";
import Header from "./components/Header"
import WalletValueDisplay from "./components/WalletValueDisplay";
import CapitalAndGains from "./components/CapitalAndGains";
import AssetBreakdown from "./components/AssetBreakdown";

function App() {
  const [walletValue, setWalletValue] = useState(0);
  const assets = [{assetName:"Bitcoin"}, {assetName:"Ethereum"}]

  return (
    <div className="App">
      <Box display="flex" flexDirection="column" alignItems="center" alignContent="center">
        <br></br>
        <br></br>
        <Box display="flex" flexDirection="column" >
          <Header titleText="Luno Asset Tracker"></Header>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <WalletValueDisplay walletValue={walletValue}></WalletValueDisplay>
          <br></br>
          <br></br>
          <CapitalAndGains></CapitalAndGains>
          <br></br>
          <br></br>
          <AssetBreakdown assets={assets}></AssetBreakdown>
        </Box>
      </Box>
      
      
    </div>
  );
}

export default App;
