import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();

    //Grab details and genres out of store
    const genres = useSelector(store => store.genres)
    const details = useSelector(store => store.details)

    //Jump to home page 
    const home = () => {
        history.push('/');
    }
    
    return(
        <>
            {/* Show details and genres on DOM */}
            <div>
                <button onClick={home}>HOME</button>
                <h1>{details.title}</h1>
                <img src={details.poster}></img>
                <h3>{details.description}</h3>
                <h4> {genres.map((genre, i) => {
                        return (<p key={i}>{genre.name}</p>)
                            })}
                </h4>
            </div>
        
        </>
    )
}

export default MovieDetails; 