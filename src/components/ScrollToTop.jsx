import { useEffect, useState } from "react";
import plane from "../assets/logo/top-plane.png"; // use your image

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
        onClick={scrollToTop}
        style={{
            ...styles.button,
            opacity: visible ? 1 : 0,
            transform: visible
                ? "translateY(0)"
                : "translateY(30px)",
            pointerEvents: visible ? "auto" : "none",
        }}
    >
        <img
            src={plane}
            alt="Back to top"
            style={styles.icon}
            onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-6px)")
            }
            onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
            }
        />
    </div>
    );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "28px",
    right: "28px",
    cursor: "pointer",
    zIndex: 999,
    transition: "opacity 0.35s ease, transform 0.35s ease",
  },
  icon: {
    width: "56px",
    height: "80px", //increased
    filter: "drop-shadow(0 10px 18px rgba(0,0,0,0.35))",
    transition: "transform 0.3s ease",
  },
};


