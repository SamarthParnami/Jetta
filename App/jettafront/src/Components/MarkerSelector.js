
import { Pagination } from "@mui/material";

function MarkerPage({state}){
    const markers=15
    return (
    <Pagination count={15}
     hidePrevButton
      hideNextButton />);
}
export default MarkerPage;

// https://mui.com/material-ui/react-pagination/