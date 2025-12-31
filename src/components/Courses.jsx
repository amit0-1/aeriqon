export default function Courses() {
  return (
    <section id="courses" style={styles.section}>
      <h2 style={styles.heading}>Our GDS Training Program</h2>

      <div style={styles.cardGrid}>
        <div className="glass-card" style={styles.card}>
          <h3>Amadeus GDS</h3>
          <p>
            Complete hands-on training on Amadeus covering availability, PNR,
            pricing, and ticketing.
          </p>
        </div>

        <div className="glass-card" style={styles.card}>
          <h3>Galileo GDS</h3>
          <p>
            Learn Galileo commands, booking management, fare calculation, and
            post-booking operations.
          </p>
        </div>

        <div className="glass-card" style={styles.card}>
          <h3>Sabre GDS</h3>
          <p>
            Master Sabre system including reservations, ticket issuance,
            refunds, and cancellations.
          </p>
        </div>

        <div className="glass-card" style={styles.card}>
          <h3>PNR & Ticketing</h3>
          <p>
            Create and manage PNRs, apply fares, issue e-tickets, and handle
            modifications professionally.
          </p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#eef5fb",
    textAlign: "center",
  },
  heading: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "#0b3c5d",
  },
  cardGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "auto",
  },
  card: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    textAlign: "left",
    color: "#0b3c5d",
  },
};
