export default function About() {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Aeriqon Academy</h2>

      <div className="glass-card" style={styles.card}>
        <p style={styles.text}>
          <strong>Aeriqon Academy</strong> is a professional aviation training
          institute dedicated to shaping the next generation of aviation
          professionals. We focus on industry-oriented learning, hands-on
          training, and real-world exposure.
        </p>

        <p style={styles.text}>
          Our programs are designed to meet global aviation standards, helping
          students gain practical knowledge in GDS systems, ticketing, and
          airline operations with confidence.
        </p>

        <p style={styles.text}>
          At Aeriqon, aviation is not just a career — it’s a discipline, a
          passion, and a global opportunity.
        </p>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "90px 20px",
    backgroundColor: "#eef5fb",
    textAlign: "center",
  },
  heading: {
    fontSize: "34px",
    color: "#0b3c5d",
    marginBottom: "40px",
  },
  card: {
    maxWidth: "900px",
    margin: "auto",
    padding: "40px",
    lineHeight: "1.8",
    color: "#0b3c5d",
    fontSize: "16px",
  },
  text: {
    marginBottom: "20px",
  },
};
