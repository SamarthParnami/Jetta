import { Card, TextField, Typography } from "@mui/material";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
function SceneCard({name="Scene Name",entities=1}){
    return (
        <Card sx={{
            width:200,
            height:200,
        }}
        elevation={3}> 



                    <Typography variant="h5" marginTop={2}>{name}</Typography>


                    <TextField
                            label="Description"
                            multiline
                            rows={3}
                            variant="outlined"
                            sx={{
                                margin:1,
                            }}
                    ></TextField>



                    <DeleteRoundedIcon></DeleteRoundedIcon>
        </Card>
    )
}
export default SceneCard;