import {
  BookOpen,
  CalendarDays,
  Clock3,
  ExternalLink,
  Globe2,
  HeartHandshake,
  Leaf,
  MapPin,
  Music2,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Theater,
  Trees,
  UsersRound,
} from "lucide-react";
import heroImage from "./assets/hero-community.png";

const registrationUrl = "https://forms.gle/jQNqhpzxRc2yqnE79";

const navItems = [
  ["Mission", "#mission"],
  ["Classes", "#classes"],
  ["Dharma", "#dharma"],
  ["Arts", "#arts"],
  ["Service", "#service"],
  ["Governance", "#governance"],
];

const principles = [
  "Love",
  "Peace",
  "Truth",
  "Right conduct",
  "Non-violence",
];

const schedules = [
  {
    name: "Vedam & Vedanta Classes",
    type: "Online",
    day: "Thursday",
    time: "20.30-22.00hrs",
    age: "Adults",
    countries: "UK; USA; Ireland and India",
  },
  {
    name: "Vedam Classes",
    type: "Online",
    day: "Fridays",
    time: "11.30-12.30hrs",
    age: "Adults",
    countries: "India (Karnataka)",
  },
  {
    name: "Vedam Classes",
    type: "Face-to-Face",
    day: "Saturdays",
    time: "15.30-16.30hrs",
    age: "Children & Adults",
    countries: "UK",
  },
  {
    name: "Dharma Sundays",
    type: "Face-to-Face",
    day: "Sundays",
    time: "11.30-13.00hrs",
    age: "Children (& Parents)",
    countries: "UK",
  },
];

const workstreams = [
  {
    title: "Vedic Learning",
    icon: BookOpen,
    text: "Mantras are taught through repetition by trained teachers, with meanings explained so students can connect practice with universal values.",
  },
  {
    title: "Dharma Sundays",
    icon: Sparkles,
    text: "Children explore Vedas and Vedanta through lively storytelling from the Smruthis, supported by parents and teachers.",
  },
  {
    title: "Performing Arts",
    icon: Theater,
    text: "Drama, musical productions and pantomimes bring courage, integrity, love and truth to life through scripture-inspired stories.",
  },
  {
    title: "Selfless Service",
    icon: HeartHandshake,
    text: "Food service, care for elderly people, and environmental action turn the teaching of Love All and Serve All into daily practice.",
  },
];

const serviceHighlights = [
  ["652", "trees planted in Jarrow, South Shields"],
  ["45", "volunteers joined the effort"],
  ["10", "children served alongside families"],
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Śruti CIC home">
          <span className="brand-mark">Ś</span>
          <span>
            <strong>Śruti</strong>
            <small>CIC</small>
          </span>
        </a>
        <nav className="desktop-nav">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={registrationUrl} target="_blank" rel="noreferrer">
          Register
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img className="hero-image" src={heroImage} alt="" />
          <div className="hero-shade" />
          <div className="hero-content">
            <p className="eyebrow">UK not-for-profit community interest company</p>
            <h1 id="hero-title">Śruti CIC</h1>
            <p className="hero-copy">
              Sharing Vedas and Vedanta with children, adults and families through
              chanting, storytelling, music, performing arts and selfless service.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href={registrationUrl} target="_blank" rel="noreferrer">
                <CalendarDays size={18} aria-hidden="true" />
                Registration Form
              </a>
              <a className="button secondary" href="#classes">
                <Clock3 size={18} aria-hidden="true" />
                View Sessions
              </a>
            </div>
            <div className="axioms" aria-label="Core teachings">
              <span>Help Ever. Hurt Never.</span>
              <span>Love All. Serve All.</span>
            </div>
          </div>
        </section>

        <section className="principles-band" aria-label="Guiding principles">
          {principles.map((principle) => (
            <span key={principle}>{principle}</span>
          ))}
        </section>

        <section className="section mission-section" id="mission">
          <div className="section-heading">
            <p className="eyebrow">Mission</p>
            <h2>Universal teachings, lived through community.</h2>
          </div>
          <div className="mission-grid">
            <div className="mission-copy">
              <p>
                Śruti CIC exists to take the learnings of Vedas and Vedanta to
                everyone, especially the next generation. The teachings are universal,
                not restricted to one religion, and are rooted in love, peace, truth,
                right conduct and non-violence.
              </p>
              <p>
                The team shares these learnings through face-to-face classes, online
                sessions, music, drama, performing arts and service in the community.
                Teachers use their specialities to inculcate good values and deepen
                each student&apos;s understanding of the self.
              </p>
            </div>
            <div className="quote-panel">
              <ScrollText size={28} aria-hidden="true" />
              <p>
                Viewing humanity as one family and treating everyone with love and
                care is the key to an inclusive and equal society.
              </p>
            </div>
          </div>
        </section>

        <section className="section workstream-section" aria-labelledby="pathways-title">
          <div className="section-heading compact">
            <p className="eyebrow">Pathways</p>
            <h2 id="pathways-title">Learning that moves from practice into life.</h2>
          </div>
          <div className="workstream-grid">
            {workstreams.map(({ title, icon: Icon, text }) => (
              <article className="workstream-card" key={title}>
                <div className="icon-tile">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section classes-section" id="classes">
          <div className="split-heading">
            <div>
              <p className="eyebrow">Classes / Sessions</p>
              <h2>Current Śruti sessions</h2>
            </div>
            <p>
              Vedic mantras are taught through repetition, with scripture meanings
              explained so students understand that mankind is one family.
            </p>
          </div>

          <div className="schedule-wrap">
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Type</th>
                  <th>Day</th>
                  <th>Time</th>
                  <th>Age Group</th>
                  <th>Participant Countries</th>
                </tr>
              </thead>
              <tbody>
                {schedules.map((session) => (
                  <tr key={`${session.name}-${session.day}`}>
                    <td>{session.name}</td>
                    <td>
                      <span className="session-type">{session.type}</span>
                    </td>
                    <td>{session.day}</td>
                    <td>{session.time}</td>
                    <td>{session.age}</td>
                    <td>{session.countries}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="feature-band" id="dharma">
          <div className="feature-copy">
            <p className="eyebrow">Dharma Sundays</p>
            <h2>Storytelling for children and parents.</h2>
            <p>
              Dharma Sundays are unique sessions started by teachers in Śruti school
              to teach children the concepts of Vedas and Vedanta. The sessions use
              lively storytelling techniques from the Smruthis to make deep ideas
              memorable, warm and practical.
            </p>
          </div>
          <div className="feature-detail">
            <UsersRound size={30} aria-hidden="true" />
            <strong>Children (& Parents)</strong>
            <span>Sundays, 11.30-13.00hrs</span>
            <span>Face-to-face in the UK</span>
          </div>
        </section>

        <section className="section arts-service-grid">
          <article className="deep-panel" id="arts">
            <div className="icon-tile">
              <Music2 size={24} aria-hidden="true" />
            </div>
            <p className="eyebrow">Performing Arts</p>
            <h2>Drama and music as values education.</h2>
            <p>
              Śruti plans dramas, musical productions and pantomimes with children
              and adults as artists. Heroes from scripture who stood for integrity,
              courage, love and truth become a way for everyone to learn the values
              expressed by the characters on stage.
            </p>
          </article>

          <article className="deep-panel green" id="service">
            <div className="icon-tile">
              <Leaf size={24} aria-hidden="true" />
            </div>
            <p className="eyebrow">Selfless Service</p>
            <h2>Love All and Serve All in action.</h2>
            <p>
              Serving food, caring for elderly people in the community and planting
              trees are central to Śruti. The Vedas speak deeply about creation,
              nature and environment, and the CIC treats service as part of learning.
            </p>
          </article>
        </section>

        <section className="service-spotlight" aria-labelledby="trees-title">
          <div className="spotlight-copy">
            <p className="eyebrow">Community Service</p>
            <h2 id="trees-title">Tree planting in Jarrow, South Shields.</h2>
            <p>
              On 18th April 2026, students and family members joined hands with Sri
              Sathya Sai Organisation CIO and Living Woods Trust for a day of tree
              planting at Jarrow, South Shields, Newcastle upon Tyne. The group began
              at 10am, shared music, food and care throughout the day, and finished
              at 15.30hrs with 652 trees planted.
            </p>
          </div>
          <div className="stats-row">
            {serviceHighlights.map(([value, label]) => (
              <div className="stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section governance-section" id="governance">
          <div className="governance-copy">
            <p className="eyebrow">Governance</p>
            <h2>Committed to safeguarding children and young people.</h2>
            <p>
              Śruti believes that no child or young person should experience abuse
              or harm. The academy is committed to the protection of children and
              young people, with full safeguarding information available through its
              governance materials.
            </p>
          </div>
          <div className="governance-list">
            <div>
              <ShieldCheck size={24} aria-hidden="true" />
              <span>Child protection</span>
            </div>
            <div>
              <Globe2 size={24} aria-hidden="true" />
              <span>Universal access</span>
            </div>
            <div>
              <Trees size={24} aria-hidden="true" />
              <span>Community service</span>
            </div>
          </div>
        </section>

        <section className="directors-section" aria-labelledby="directors-title">
          <div>
            <p className="eyebrow">Our Directors</p>
            <h2 id="directors-title">Stewarding Śruti CIC</h2>
          </div>
          <div className="director-list">
            <span>Mrs Vidya Praveena Srikailash</span>
            <span>Mr Vibhas Chengalavala</span>
            <span>Mr Giridhar Narimetla</span>
          </div>
        </section>

        <section className="register-section" aria-labelledby="register-title">
          <div>
            <p className="eyebrow">Registration Form</p>
            <h2 id="register-title">Join a class or enquire about new sessions.</h2>
          </div>
          <a className="button primary dark" href={registrationUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={18} aria-hidden="true" />
            Open Registration Form
          </a>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <strong>Śruti CIC</strong>
          <span>Help Ever. Hurt Never. Love All. Serve All.</span>
        </div>
        <div className="footer-links">
          <a href="#classes">
            <Clock3 size={16} aria-hidden="true" />
            Sessions
          </a>
          <a href="#service">
            <MapPin size={16} aria-hidden="true" />
            Service
          </a>
          <a href={registrationUrl} target="_blank" rel="noreferrer">
            <ExternalLink size={16} aria-hidden="true" />
            Register
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
