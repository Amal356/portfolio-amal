import { profile, skills } from './profile';

// Version de l'image, injectée au build Docker (--build-arg APP_VERSION=v1)
const version = process.env.APP_VERSION || 'dev';

export default function Home() {
  return (
    <main className="container">
      <header className="hero">
        <p className="badge">Portfolio</p>
        <h1>{profile.fullName}</h1>
        <h2>{profile.jobTitle}</h2>
        <p className="muted">{profile.location}</p>
        <p>{profile.about}</p>
      </header>

      <section>
        <h3>Compétences</h3>
        <ul className="chips">
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Contact</h3>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {' · '}
          <a href={`https://github.com/${profile.githubUser}`}>
            github.com/{profile.githubUser}
          </a>
        </p>
      </section>

      <footer className="muted">
        Version déployée : <strong>{version}</strong> · généré par Backstage
      </footer>
    </main>
  );
}
