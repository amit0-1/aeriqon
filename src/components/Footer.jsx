export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.inner}>
        <h3 style={styles.title}>Aeriqon Academy</h3>
        <p>Professional Aviation Training Institute</p>

        <div style={styles.contact}>
          <p>📞 +91 90580 37616</p>
          <p>✉️ aeriqon@gmail.com</p>
        </div>

        <p style={styles.copy}>
          © {new Date().getFullYear()} Aeriqon Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#0b3c5d",
    color: "#ffffff",
    padding: "40px 20px",
  },
  inner: {
    maxWidth: "1100px",
    margin: "auto",
    textAlign: "center",
  },
  title: {
    marginBottom: "10px",
  },
  contact: {
    margin: "15px 0",
    lineHeight: "1.8",
  },
  copy: {
    marginTop: "20px",
    fontSize: "14px",
    opacity: 0.8,
  },
};
