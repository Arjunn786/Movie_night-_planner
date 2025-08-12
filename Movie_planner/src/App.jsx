import "./App.css";
import MovieCard from "./Components/MovieCard.jsx";
import GuestList from "./Components/GuestList.jsx";
import Counter from "./Components/Counter.jsx";
import PlanForm from "./Components/PlanForm.jsx";

export default function App() {
  const selectedMovie = {
    title: "The Batman",
    genre: "",
    posterUrl: "https://cdna.artstation.com/p/assets/images/images/048/085/636/large/sam-green-the-batman-shadows-webwm.jpg?1649175094",
    rating: 8.5,
  };

   return (
    <div className="App">
      <h1>🎥 Movie Night Planner</h1>

      <div className="card">
        <MovieCard {...selectedMovie} />
      </div>

      <div className="card">
        <GuestList />
      </div>

      <div className="card">
        <Counter />
      </div>

      <div className="card">
        <PlanForm />
      </div>
    </div>
  )
}