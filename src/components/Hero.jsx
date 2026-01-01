import { useEffect, useState } from "react";
import fullLogo from "../assets/logo/aeriqon-full.png";
import heroBg from "../assets/images/hero-aviation.jpg";


export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 200);
  }, []);


  return (
    <section id="home" style={styles.hero}>

        <img
          src={fullLogo}
          alt="Aeriqon Aviation Training Academy"
          style={{
            width: "320px",
            maxWidth: "90%",
            marginBottom: "30px",
            filter: "drop-shadow(0 0 18px rgba(255,200,120,0.35))",
            transform: loaded
              ? "translateY(0) scale(1)"
              : "translateY(20px) scale(0.95)",
            opacity: loaded ? 1 : 0,
            transition: "all 0.8s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.filter =
              "drop-shadow(0 0 28px rgba(255,200,120,0.6))")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.filter =
              "drop-shadow(0 0 18px rgba(255,200,120,0.35))")
          }

        />


      <h1 style={styles.title}>
        Launch Your Career Above the Clouds ✈️
      </h1>

      <p style={styles.subtitle}>
        Professional Aviation Training | GDS | Ticketing | Industry Ready Skills
      </p>

      
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdUD3wLjNoD_etp8iSnxRppIYqTIAdgit7uqPk6umueLmRLfw/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button style={styles.button}>Enroll Now</button>
      </a>

    </section>
  );
}

const styles = {
  hero: {
    minHeight: "100vh",
    width: "100%",
    maxWidth: "100vw",
    background: `
      linear-gradient(
        to bottom,
        rgba(11,15,20,0.75),
        rgba(11,15,20,0.95)
      ),
      url(${heroBg})
    `,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px 16px",
  },


  title: {
    fontSize: "40px",
  },
  subtitle: {
    marginTop: "15px",
    fontSize: "18px",
  },
  button: {
    marginTop: "30px",
    padding: "12px 30px",
    fontSize: "16px",
    fontWeight: "bold",
    backgroundColor: "#fff",
    color: "#0b3c5d",
    border: "none",
    borderRadius: "6px",
  },
};
