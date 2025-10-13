import { useEffect, useState } from "react";
import PersonCard, { type Person } from "./components/PersonCard";

type ApiResponse = { data: Person[] };

export default function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://fakerapi.it/api/v2/persons?_quantity=10");
        if (!res.ok) throw new Error(String(res.status));
        const json: ApiResponse = await res.json();
        setPeople(json.data ?? []);
      } catch (e) {
        setError("Konnte Daten nicht laden.");
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <div className="loading">Lade Personen…</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <main className="page">
      <h1 className="title">HTL Dornbirn 5bWI</h1>
      <section className="grid">
        {people.map((p) => <PersonCard key={p.id} person={p} />)}
      </section>
    </main>
  );
}
