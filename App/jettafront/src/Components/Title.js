import {TextField} from '@mui/material';
function Title({state,updateState,sx}){
    function handleTitleChange(e)
    {
        updateState({
            "id":state.id,
            "name":e.target.value,
            "markerIndex":state.markerIndex,
            "markers":[...state.markers.slice(0,state.markerIndex),{
                "name":nothing,
                "id":0,
                description:state.markers[state.markerIndex].
            }]
        });

    }
    return (<TextField 
            id='title'
            defaultValue={state.name} 
            placeholder='Title'
            variant="outlined"
            type="text" 
            required
            onChange={handleTitleChange}
            sx={sx}
            ></TextField>);
}

export default Title;


// {TODO update the state on changing text value}