import {Fab, Paper} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


function Marker(){

        const EnitiyCards=[];
        return (
            <>
            <>
            {EnitiyCards}
            </>
            
                <Fab variant="extended" color="primary" sx={{position:"absolute",top:"92%",left:"90%"}}>
                    
                    <AddIcon/>
                    Add Entity
                </Fab>
            </>
        );
}


export default Marker