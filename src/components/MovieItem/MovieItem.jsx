import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {Grid } from '@material-ui/core'

function MovieItem ({movie}) {

    const dispatch = useDispatch();
    const history = useHistory();

    const handleDetails = () => {
        console.log('hi');
        dispatch({type: 'FETCH_GENRES', payload: movie})
        history.push('/details');
    }

    return( 
        <>
         <Grid item xs={12} s={6} md={3} lg={4}>
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img onClick={handleDetails} src={movie.poster} alt={movie.title}/>   
            </div>
            </Grid>
        </>
    )
}
export default MovieItem;