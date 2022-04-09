import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();

    const genres = useSelector(store => store.genres)
    const details = useSelector(store => store.details)
    
    return(
        <>
        
        
        </>
    )
}

export default MovieDetails; 