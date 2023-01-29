import { Paper,Button } from "@mui/material";


function Head(){
    const headHeight=7.5;
    const LogoDimension={
        marginTop:`${headHeight/6}vh`,
        marginLeft:`${headHeight/3}vh`,
        height:`${headHeight/1.5}vh`,
    }
    const MediaDimension={
    marginRight:`${headHeight/3}vh`,
    marginTop:`${headHeight/6}vh`,
    marginBottom:`${headHeight/6}vh`,
}


    const HeadElevation=3;
    return (
        <Paper
        sx={{
            background:"#16212F",
            height:`${headHeight}vh`,
            width:"100vw",
        
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",

        }}
        square
        elevation={HeadElevation}
        >

            <img 
                src="https://static.beaconstac.com/assets/img/beaconstac-logo-white-tm.svg"
                style=
                        {
                            LogoDimension
                        }>
                    
            </img>


            <Button 
                variant="contained" 
                sx={MediaDimension}
            >
                    
                    Media Assets
                    
            </Button>

        </Paper>
    )
}
export default Head;