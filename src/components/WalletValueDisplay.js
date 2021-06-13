import { Box, Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const WalletValueDisplay = (props) => {
    const walletValue = props.walletValue;

    return (  
        <>
            <Box display="flex" flexDirection="column" alignContent="flex-start">
                    <Typography variant="h5">Your current value:</Typography>

                    <Box display="inline-flex" alignItems="flex-end" justifyContent="flex-start">
                        <Typography variant="h1" align="center">{walletValue}</Typography>
                        <Typography variant="h6">MYR</Typography>
                    </Box>
            </Box>
        </>
    );
}
 
export default WalletValueDisplay;