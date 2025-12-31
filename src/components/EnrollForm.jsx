export default function EnrollForm() {
  return (
    <section id="enroll" style={styles.section}>
      <h2 style={styles.heading}>Enroll Now</h2>
      <p style={styles.subtext}>
        Fill the form below and our team will contact you
      </p>

      <div style={styles.formWrapper}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdUD3wLjNoD_etp8iSnxRppIYqTIAdgit7uqPk6umueLmRLfw/viewform?embedded=true"
          style={styles.iframe}
          title="Aeriqon Enrollment Form"
          loading="lazy"
        >
          Loading…
        </iframe>

        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdUD3wLjNoD_etp8iSnxRppIYqTIAdgit7uqPk6umueLmRLfw/viewform?embedded=true" width="640" height="1084" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}

      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    backgroundColor: "#f9fbfd",
    textAlign: "center",
  },
  heading: {
    fontSize: "34px",
    color: "#0b3c5d",
    marginBottom: "10px",
  },
  subtext: {
    marginBottom: "40px",
    fontSize: "16px",
    color: "#555",
  },
  formWrapper: {
    maxWidth: "700px",
    margin: "auto",
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
    overflow: "hidden",
  },
  iframe: {
    width: "100%",
    height: "820px",
    border: "none",
  },
};
