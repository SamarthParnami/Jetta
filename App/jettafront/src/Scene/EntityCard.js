import {Card,Typography,Fab,FormControl,InputLabel,Select,MenuItem, TextField} from '@mui/material'
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import Papa from 'papaparse';
import Box from '../attributes/box.csv'

const fileMap={
    "Box":"box.csv",
    "Camera": "camera.csv",
    "Circle": "circle.csv",
    "Cone": "cone.csv",
    "Cursor": "cursor.csv",
    "Curved image": "curved image.csv",
    "Cylinder": "cylinder.csv",
    "Dodecahedron": "dodecahedron.csv",
    "Gltf-model": "gltf-model.csv",
    "Icosahedron": "icosahedron.csv",
    "Image": "image.csv",
    "Light": "light.csv",
    "Link": "link.csv",
    "Obj-model": "obj-model.csv",
    "Octahedron": "octahedron.csv",
    "Plane": "plane.csv",
    "Ring": "ring.csv",
    "Sky": "sky.csv",
    "Sound": "sound.csv",
    "Sphere": "sphere.csv",
    "Tetrahedron": "tetrahedron.csv",
    "Text": "text.csv",
    "Torus-knot": "torus-knot.csv",
    "Torus": "torus.csv",
    "Triangle": "triangle.csv",
    "Video": "video.csv"
}

function getMenuItems(){
    let items=[]
    for (let key in fileMap){
        items.push(<MenuItem value={fileMap[key]}>{key}</MenuItem>);
    }
    return items;
}
function getTextFields(filename){
    let data=Papa.parse(Box,{
        complete: (results, file) => {
          let data=results.data;
          let fields=[]
          for (let i=1;i<data.length;i++)
          {
            fields.push(<TextField
                label={data[i][0]}
                defaultValue={data[i][2]}
                variant="standard"
            />)
          }
          return fields;
        },
        download: true,
        error: (error, file) => {
          console.log('Error while parsing:', error, file);
        },
      });
}

function EntityCard({small=false}){
    if(small)
    {
        return (
            <Card sx={{
                margin:2,
                width:"20vw",
                height:"24vh",
                padding:3,
                display:"flex",
                flexDirection:"column",
                justifyContent:"space-evenly",
                alignItems:"normal",

            }}>
                <Typography variant='h4'>Name of Enity</Typography>
                <Typography variant="caption"> 6 Features</Typography>
                <Typography variant="subtitle2">Description of the Entity. This place can be used to display some features, significance etc. Although there is no way of currently editing it but it can be added easily in expanded view.</Typography>
                <Fab  size="small" color="primary">
                <OpenInFullIcon />
                </Fab>
            </Card>
        );
    }
    return (
        <Card sx={{
            margin:2,
            width:"20vw",
            height:"24vh",
            padding:3,
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-evenly",
            alignItems:"normal",

        }}>
            <Typography variant='h4'>Name of Enity</Typography>
            <FormControl >
                                <InputLabel>Type</InputLabel>
                                <Select
                                label="Entity-Type"
                                >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {/* <MenuItem value="audio">Audio</MenuItem> */}
                                {getMenuItems()}
                                </Select>
                        </FormControl>

            


            <Fab  size="small" color="primary">
            <CloseFullscreenIcon />
            </Fab>
            
            {getTextFields('box.csv')}
        </Card>
    );
}
export default EntityCard;

