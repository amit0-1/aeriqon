export default function HomeCards() {
  return (
    <section style={styles.section}>
      <h2 style={styles.heading}>Why Choose Aeriqon?</h2>

      <div style={styles.cardGrid}>
        <div className="glass-card" style={styles.card}>
          ✈️
          <h3>Industry Oriented Training</h3>
          <p>
            Learn real aviation workflows aligned with airline and travel
            industry standards.
          </p>
        </div>

        <div className="glass-card" style={styles.card}>
          🎓
          <h3>Experienced Trainers</h3>
          <p>
            Get trained by professionals with hands-on experience in GDS and
            ticketing.
          </p>
        </div>

        <div className="glass-card" style={styles.card}>
          🌍
          <h3>Global Career Opportunities</h3>
          <p>
            Aviation skills open doors worldwide in airlines, airports, and
            travel companies.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    maxWidth: "100vw",
    padding: "60px 16px",
    boxSizing: "border-box",
    backgroundColor: "#f9fbfd",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "#0b3c5d",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "auto",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "32px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    fontSize: "18px",
    textAlign: "center",
    color: "#0b3c5d",
  },
};
