import { Box, List, ListItem, Avatar, ListItemText, Divider, Typography } from "@material-ui/core"
import { useEffect } from "react";
import AssetItem from "./AssetItem";

const AssetBreakdown = (props) => {
    const assets = props.assets;
    useEffect(()=>{
        console.log(assets);
    }, [])
    return ( 
        <>
                <Typography variant="h5">Asset breakdown</Typography>
                <Divider></Divider>
                <br></br>
                {assets.map((asset) => (
                    <AssetItem asset={asset}/>))}
        </>
     );
}
 
export default AssetBreakdown;