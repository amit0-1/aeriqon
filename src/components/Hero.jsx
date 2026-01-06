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
        Launch Your Career Above the Clouds{" "}
        <span style={{ display: "inline-block", animation: "slowFloat 3.5s ease-in-out infinite" }}>
          ✈️
        </span>
      </h1>


      <p style={styles.subtitle}>
        Professional Aviation Training | GDS | Ticketing | Industry Ready Skills
      </p>

      
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc_iOufBwVDzc9tJYx6gszj-57Y5zMMJlX7HOqwYgDVU33VDw/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="ripple-btn"
          style={styles.button}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
            e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
          }}
          onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.96)")}
          onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Enroll Now
        </button>



      </a>

    </section>
  );
}

const styles = {
  hero: {
    // minHeight: "100vh",
    minHeight: "calc(100vh - 90px)",
    width: "100%",
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
    // animation: "bgFadeIn 1.2s ease forwards",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "90px 16px 40px",
    // backgroundAttachment: "scroll",
  },

  // title: {
  //   fontSize: "40px",
  //   animation: "fadeUp 0.9s ease forwards",
  // },

  title: {
    fontSize: "clamp(28px, 4vw, 36px)",
    fontWeight: "700",
    lineHeight: "1.2",
    marginTop: "10px",
  },

  subtitle: {
    marginTop: "14px",
    fontSize: "clamp(14px, 2vw, 17px)",
    color: "rgba(255,255,255,0.9)",
    maxWidth: "720px",
    lineHeight: "1.6",
    textShadow: "0 4px 12px rgba(0,0,0,0.6)",
  },


  button: {
    marginTop: "30px",
    padding: "14px 36px",
    fontSize: "16px",
    fontWeight: "700",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",

    background: "linear-gradient(135deg, #1d8cf8, #0b3c5d)",
    color: "#ffffff",

    // boxShadow: "0 12px 32px rgba(29,140,248,0.45)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },


};
