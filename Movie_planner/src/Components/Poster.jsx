export default function Poster({ src, alt, size = "medium" }) {
  return <img src={src} alt={alt} className={`poster-${size}`} />;
}
