import {Card, TextField, FormControl, Select, MenuItem, InputLabel} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
function LoadedAsset(){


        return (
            <Card sx={{
                padding:2,
                margin:2,
                display:"flex",
                flexDirection:"row",
                justifyContent:"space-around"
            }} >
                <TextField
                    required
                    label="Unique ID"
                    variant="standard"
                    />
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel>Type</InputLabel>
                                <Select
                                label="Asset-Type"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="audio">Audio</MenuItem>
                                <MenuItem value="img">Image</MenuItem>
                                <MenuItem value="asset-item">Model</MenuItem>
                                <MenuItem value="video">Video</MenuItem>
                                </Select>
                        </FormControl>
                
                <VisibilityIcon sx={{
                    marginTop:3
                }}/>
                <DeleteIcon sx={{
                    marginTop:3
                }}/>

            </Card>
        )
}

export default LoadedAsset;