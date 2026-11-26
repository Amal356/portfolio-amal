import { profile, skills, certifications, projects } from './profile';
import ThemeToggle from './ThemeToggle';

// Version de l'image, injectée au build Docker (--build-arg APP_VERSION=v2)
const version = process.env.APP_VERSION || 'dev';

export default function Home() {
  return (
    <main className="container">
      <div className="topbar">
        <p className="badge">Portfolio</p>
        <ThemeToggle />
      </div>

      <header className="hero">
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
        <h3>Projets DevOps &amp; Cloud</h3>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className="card">
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <ul className="chips small">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3>Certifications</h3>
        <ul className="certs">
          {certifications.map((c) => (
            <li key={c.name}>
              <div>
                <strong>{c.name}</strong>
                <span className="muted"> · {c.issuer}</span>
              </div>
              <span className="status">{c.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Contact</h3>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          {' · '}
          <a href={`https://github.com/${profile.githubUser}`}>github.com/{profile.githubUser}</a>
          {profile.linkedin && (
            <>
              {' · '}
              <a href={profile.linkedin}>LinkedIn</a>
            </>
          )}
        </p>
      </section>

      <footer className="muted">
        Version déployée : <strong>{version}</strong> · généré et livré par Backstage
      </footer>
    </main>
  );
}
