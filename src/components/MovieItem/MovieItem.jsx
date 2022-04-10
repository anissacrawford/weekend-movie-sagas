import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Grid } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

function MovieItem ({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDetails = () => {
        console.log('hi');
        dispatch({type: 'FETCH_GENRES', payload: movie})
        history.push('/details');
    }

    //adds tooltip
    const HtmlTooltip = withStyles((theme) => ({
        tooltip: {
          backgroundColor: '#88B04B',
          color: 'rgba(0, 0, 0, 0.87)'
        },
      }))(Tooltip);

    return( 
        <>
         <Grid item xs={12} s={6} md={3} lg={4}>
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <HtmlTooltip title="Click me" placement="right-start">
                <img onClick={handleDetails} src={movie.poster} alt={movie.title}/> 
                </HtmlTooltip>  
            </div>
            </Grid>
        </>
    )
}
export default MovieItem;