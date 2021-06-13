import Typography from "@material-ui/core/Typography"

const Header = (props) => {
    const titleText = props.titleText;
    return (
        <>
            <Typography variant="h4">{titleText}</Typography>
        </>
      );
}
 
export default Header;