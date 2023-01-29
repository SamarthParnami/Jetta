import { Fab, Paper, Typography } from "@mui/material";
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import LoadedAsset from "./AssetLoaded";
import ClickAwayListener from '@mui/base/ClickAwayListener';



function MediaExpanded(){

    function handleClickAway()
    {
        console.log("click outside");
    }


return( 
    <ClickAwayListener
    mouseEvent="onMouseDown"
    touchEvent="onTouchStart"
    onClickAway={handleClickAway}
  >

    <Paper
    // hidden
    sx={{
        height:"90vh",
        width:"33vw",
        position:"absolute",
        left:"66.7vw",
        top:"8vh",
        
    }}
    elevation={24}
    >
        <div style={{display:"flex",
    flexDirection:"row",
    justifyContent:"space-around",
    padding:15}}>

                <Typography variant="h3">Media Assets</Typography>
                <Fab variant="extended" color="primary">
                    
                    <CloudQueueIcon/>
                    Upload
                </Fab>
        </div>

    <Paper   sx={{
        height:"77vh",
        width:"31.2vw",
        padding:2,
        // position:"absolute",
        // left:"66.7vw",
        // top:"8vh",
        overflow:"scroll",
    }}>

    <LoadedAsset/>

    <LoadedAsset/>


    <LoadedAsset/>

    <LoadedAsset/>

    <LoadedAsset/>
    <LoadedAsset/>

    <LoadedAsset/>


    <LoadedAsset/>

    <LoadedAsset/>

    <LoadedAsset/>
    <LoadedAsset/>

    <LoadedAsset/>


    <LoadedAsset/>

    <LoadedAsset/>

    <LoadedAsset/>
    </Paper>
    </Paper>
        </ClickAwayListener>
);
}

export default MediaExpanded