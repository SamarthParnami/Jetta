import {Paper} from'@mui/material'
import Title from './Title';
function ScenePaper({state,updateState}){

    const verticalMargin=8;
    const horizontalMargin=3;
    


    function handleMarkerTitleChange(){
        updateState(draft=>{
            draft
        })
    }

    return (

        

        <Paper sx={
            {
                position:"fixed",
                top:0,
                left:0,
                marginTop:`${horizontalMargin/2}vh`,
                marginLeft:`${horizontalMargin/2}vw`,
                width:`${100-horizontalMargin}vw`,
                height:`${100-verticalMargin/2}vh`,
            }} elevation={15}>
            <Title
            state={state}
            onChange={handleMarkerTitleChange}
            sx={{
                marginTop:"1vh",
                marginLeft:"20vw",
                width:"40vw",
                padding:0
            }}
            ></Title>
            

        </Paper>
        
    )
}
export default ScenePaper;











