import {Paper, TextField} from '@mui/material';
import Marker from './Marker';

function Dash(){
return(

    <Paper sx={{
        width:"99.5vw",
        height:"92vh",
        marginLeft:"0.25vw",
        marginTop:"0.1vh"
    }}
    elevation={24}>
        <Marker />
    </Paper>
);
}

export default Dash;