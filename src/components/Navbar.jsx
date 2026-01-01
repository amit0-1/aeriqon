import { useRef } from "react";
import { useState, useEffect } from "react";
// import logo from "../assets/logo/aeriqon-icon.png";
import logoDark from "../assets/logo/aeriqon-icon-dark.png";
import logoLight from "../assets/logo/aeriqon-icon-light.png";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [darkBg, setDarkBg] = useState(true);
  const menuLock = useRef(false);



  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchEndX - touchStartX > 80) {
      setOpen(false); // swipe right closes
    }
  };



  useEffect(() => {
    const handleScroll = () => {
      if (open) return; // 🔥 KEY FIX — ignore scroll when menu is open

      const currentScrollY = window.scrollY;

      setDarkBg(currentScrollY < 400);
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, open]);

  // useEffect(() => {
  //   document.body.style.overflow = open ? "hidden" : "auto";
  //   return () => {
  //     document.body.style.overflow = "auto";
  //   };
  // }, [open]);



  return (
    <header 
      style={{
      ...styles.wrapper,
      transform: show ? "translateY(0)" : "translateY(-120%)",
      transition: "transform 0.35s ease",
    }}
    >
      <nav className="glass"
        style={{
        ...styles.nav,
        padding: scrolled ? "10px 24px" : "14px 28px",
        boxShadow: scrolled
          ? "0 12px 30px rgba(0,0,0,0.25)"
          : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div style={styles.brand}>
          <img
            src={darkBg ? logoLight : logoDark}
            alt="Aeriqon"
            style={{
              height: scrolled ? "42px" : "52px",
              transition: "height 0.3s ease",
            }} 
          />
          <span className="brand-name" style={styles.name}>Aeriqon</span>
        </div>

        {/* Desktop Links */}
        <div style={styles.links} className="desktop-nav">
          <a href="#home" className="nav-link">Home</a>
          <a href="#courses" className="nav-link">Courses</a>
          <a href="#about" className="nav-link">About</a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUD3wLjNoD_etp8iSnxRppIYqTIAdgit7uqPk6umueLmRLfw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.enrollBtn}
          >
            Enroll
          </a>
        </div>

        <div
          className={`mobile-nav hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span className="line" />
          <span className="line" />
          <span className="line" />
        </div>




        {/* <div
          className="mobile-nav"
          onClick={() => setOpen((prev) => !prev)}
          style={styles.hamburger}
          aria-label="Menu"
        >
          ☰
        </div> */}



      </nav>


      {/* Mobile Menu */}
      {/* Mobile Dropdown Menu (Below Navbar) */}
      {open && (
        <div style={styles.mobileDropdown}>
          <a href="#home" className="mobile-link" onClick={() => setOpen(false)}>
            Home
          </a>
          <a href="#courses" className="mobile-link" onClick={() => setOpen(false)}>
            Courses
          </a>
          <a href="#about" className="mobile-link" onClick={() => setOpen(false)}>
            About
          </a>
      
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUD3wLjNoD_etp8iSnxRppIYqTIAdgit7uqPk6umueLmRLfw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.enrollLink}
            onClick={() => setOpen(false)}
          >
            Enroll
          </a>
        </div>
      )}

    </header>
  );
}

const styles = {
  wrapper: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100%",
    maxWidth: "1200px",
    margin: "12px auto",
    padding: "12px 16px", // ⬅️ smaller padding for mobile
    borderRadius: "16px",
    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    border: "1px solid rgba(255,255,255,0.12)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "all 0.35s ease",
  },

  

  brand: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  logo: {
    height: "48px",
    transition: "height 0.3s ease",
  },

  name: {
    fontSize: "22px",
    fontWeight: "600",
    color: "#fff",
  },
  links: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
    marginLeft: "auto", // ⬅️ pushes links to right
  },

  enrollBtn: {
    padding: "8px 18px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #1d8cf8, #0b3c5d)",
    color: "#fff",
    fontWeight: "600",
  },

  mobileDropdown: {
    width: "92%",
    margin: "8px auto 0",
    padding: "20px",
    borderRadius: "16px",
    background: "rgba(15, 23, 42, 0.95)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    animation: "slideDownFade 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
  },


  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.35)",
    zIndex: 998,
  },

  sideMenu: {
    position: "absolute",
    top: "100%",              // ⬅️ below navbar
    left: "50%",
    transform: "translateX(-50%)",
    width: "92%",
    maxWidth: "420px",
    padding: "20px",
    borderRadius: "18px",

    background: "rgba(15, 23, 42, 0.85)",
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: "1px solid rgba(255,255,255,0.08)",

    boxShadow: "0 30px 60px rgba(0,0,0,0.45)",

    display: "flex",
    flexDirection: "column",
    gap: "18px",

    opacity: 0,
    transformOrigin: "top center",
    pointerEvents: "none",

    transition: "opacity 0.25s ease, transform 0.25s ease",
  },



  close: {
    position: "absolute",
    top: "18px",
    right: "18px",
    fontSize: "26px",
    cursor: "pointer",
    color: "#fff",
  },

  enrollLink: {
    width: "100%",
    padding: "10px 18px",
    borderRadius: "20px",
    background: "linear-gradient(135deg, #1d8cf8, #0b3c5d)",
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
  },

  link: {
    color: "#d4af37",
    fontWeight: 500,
    position: "relative",
  },

  // linkHover: {
  //   color: "#ffffff",
  // },

  

};

