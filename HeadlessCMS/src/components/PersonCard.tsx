export type Person = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
  website: string;
  image?: string;
  address: { city: string; country: string };
};

type Props = { person: Person };

export default function PersonCard({ person }: Props) {
  const name = `${person.firstname} ${person.lastname}`;
  const img = `https://picsum.photos/seed/${person.id}/600/420`;

  const bday = new Date(person.birthday).toLocaleDateString("de-AT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return (
    <article className="card">
      <img className="card-img" src={img} alt={name} />
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur. Quis vitae ut quam urna ut
          turpis. Nunc imperdiet augue dis suspendisse.
        </p>
        <ul className="card-list">
          <li>
            <strong>E-Mail:</strong>{" "}
            <a href={`mailto:${person.email}`}>{person.email}</a>
          </li>
          <li>
            <strong>Telefon:</strong>{" "}
            <a href={`tel:${person.phone}`}>{person.phone}</a>
          </li>
          <li>
            <strong>Geburtstag:</strong> {bday}
          </li>
          <li>
            <strong>Ort:</strong> {person.address.city},{" "}
            {person.address.country}
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a href={person.website} target="_blank" rel="noreferrer">
              {person.website}
            </a>
          </li>
        </ul>
      </div>
    </article>
  );
}
