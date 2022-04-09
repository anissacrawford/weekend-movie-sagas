import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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
            <div key={movie.id} >
                <h3>{movie.title}</h3>
                <img onClick={handleDetails} src={movie.poster} alt={movie.title}/>   
            </div>
            
        </>
    )
}
export default MovieItem;