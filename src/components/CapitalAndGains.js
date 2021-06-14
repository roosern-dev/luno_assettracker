import { Box, Typography, Divider } from "@material-ui/core"

const CapitalAndGains = (props) => {
    return (  
        <>
        <Box display="flex" alignItems ="center">
            <Box display="flex" flexDirection="column" mr={5}>
                <Typography variant="h6">Capital</Typography>
                <Typography>0</Typography>
            </Box>
            <Divider orientation="vertical" flexItem/>
            <Box display="flew" flexDirection="column" m={5}>
                <Typography variant="h6">Profit/loss</Typography>
                <Typography>0</Typography>
            </Box>
        </Box>
        </>
    );
}
 
export default CapitalAndGains;