import { Typography } from "@material-ui/core";
import { Card, CardContent, Avatar, Divider, Box } from "@material-ui/core"
import { useEffect } from "react";

const AssetItem = (props) => {
    const asset = props.asset;
    useEffect(()=>{
        console.log(asset);
    })

    return (  
        <>
            <Card m={5}>
                <CardContent>
                    <Box display="flex" flexDirection="row">
                        <Avatar m={2}>{asset.assetName.substring(0,3)}</Avatar>
                        <Divider orientation="vertical" flexItem></Divider>
                        <Typography>Hello</Typography>
                    </Box>
                </CardContent>
            </Card>
            <br></br>
        </>
    );
}
 
export default AssetItem;