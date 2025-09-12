import logo from './logo.svg';
import './App.css';
import Film from "./Film";
function App() {
  return (
    <div className="App">
        <div className="Filmy">
            <Film Image="https://www.stylowy.net/data/film/38/3852_500x720.jpg" MainTag="Horror" Title="Film1" SubTags={["do lat 15","test2"]} Description="TestTestTest" TimeTable={["10:25 - 12:00","11:30-12:30"]}>

            </Film>
            <Film Image="https://www.stylowy.net/data/film/38/3872_500x720.jpg" MainTag="Bajka" Title="Film2" SubTags={["test1","test2"]} Description="TestTestTest" TimeTable={["10:25 - 12:00","11:30-12:30"]}>

            </Film>
            <Film Image="https://www.stylowy.net/data/film/38/3855_500x720.jpg" MainTag="Historyczny" Title="Film3" SubTags={["test1","test2"]} Description="TestTestTest" TimeTable={["10:25 - 12:00","11:30-12:30"]}>

            </Film>
        </div>


    </div>
  );
}

export default App;
