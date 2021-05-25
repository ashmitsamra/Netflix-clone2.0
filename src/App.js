
import './App.css';
import Navbar from './Navbar';
import requests from './requests';
import Row from './Row.jsx';
import Banner from './Banner.jsx';



const {
  fetchActionMovies,
  fetchComedyMovies,
  fetchDocumentariesMovies,
  fetchHorrorMovies,
  fetchNetflixOriginals,
  fetchRomanceMovies,
  fetchTopRated,
  fetchTrending

} = requests;

function App() {
  return (
    <div className="App">
      <h1> Netflix clone</h1>
      <Banner/>
      <Navbar/>
      <Row title = 'NETFLIX ORIGINALS' fetchUrl={fetchNetflixOriginals} isLargeRow/>
      <Row title='Trending Now' fetchUrl={fetchTrending} />
      <Row title='Top Rated' fetchUrl={fetchTopRated} />
      <Row title='Action' fetchUrl={fetchActionMovies} />
      <Row title='Comedy' fetchUrl={fetchComedyMovies} />
      <Row title='Horror' fetchUrl={fetchHorrorMovies} />
      <Row title='Romance' fetchUrl={fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={fetchDocumentariesMovies} />
    </div>
  );
}

export default App;
