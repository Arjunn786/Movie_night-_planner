import Poster from "./Poster.jsx";
import Tag from "./Tag.jsx";

export default function MovieCard({ title, genre, posterUrl, rating }) {
  return (
    <div className="movie-card" style={{border: "2px solid #ccc" , padding:"15px", borderRadius:'10px', marginBottom:'20px'}}>
      <Poster src={posterUrl} alt={title} size="large" />
      <h2>{title}</h2>
      <Tag label={genre} color="#4f46e5" />
      <p>Rating: {rating}/10</p>
      {rating >= 8 && <Tag label="Recommended" color="#10b981" />}
    </div>
  );
}
