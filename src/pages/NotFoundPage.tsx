import { Link } from "../components/Link";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <div className="orbit" />
      <p className="eyebrow">404</p>
      <h1>Lost in Space</h1>
      <p>The page you are looking for has drifted beyond this orbit.</p>
      <Link href="/" className="button">Return to Earth</Link>
    </section>
  );
}
