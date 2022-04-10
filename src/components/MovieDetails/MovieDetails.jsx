import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Button } from '@material-ui/core'

function MovieDetails() {

    const history = useHistory();

    //Grab details and genres out of store
    const genres = useSelector(store => store.genres)
    const details = useSelector(store => store.details)

    //create green theme
    const theme = createTheme({
        palette: {
            primary: {
                main: '#88B04B'
            }
        }
    })

    //Jump to home page 
    const home = () => {
        history.push('/');
    }

    return (
        <>
            {/* Show details and genres on DOM */}
            <ThemeProvider theme={theme}>
                <div>
                    <header>
                        <h1>{details.title}</h1>
                    </header>
                    
                    <img className="centerImg" src={details.poster}></img>
                    <h3>{details.description}</h3>
                    <h4 className="genre"> {genres.map((genre, i) => {
                        return (<p key={i}>{genre.name}</p>)
                    })}
                    </h4>
                    <Button color="primary" variant="contained" onClick={home}>HOME</Button>
                </div>
            </ThemeProvider>
        </>
    )
}

export default MovieDetails; 