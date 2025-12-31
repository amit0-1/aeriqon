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


  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 80) {
      setOpen(false); // swipe left closes
    }
  };


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setDarkBg(window.scrollY < 400);

      // Add shadow & shrink after 20px
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
          <span style={styles.name}>Aeriqon</span>
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
        className="mobile-nav"
        onClick={() => setOpen(!open)}
        style={styles.hamburger}
        aria-label="Menu"
        >
          ☰
        </div>

      </nav>


      {/* Mobile Menu */}
      {/* Overlay */}
      {open && (
        
        <div
          style={styles.overlay}
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side Drawer */}
      <div
        style={{
        ...styles.sideMenu,
        transform: open ? "translateX(0)" : "translateX(-100%)",
      }}
        onTouchStart={handleTouchStart}
        onTouchMove={(e) => (touchEndX = e.changedTouches[0].screenX)}
        onTouchEnd={handleTouchEnd}
      >
      {/* Close Icon */}
      <div style={styles.close} onClick={() => setOpen(false)}>
        ✕
      </div>

        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#courses" onClick={() => setOpen(false)}>Courses</a>
        <a href="#about" onClick={() => setOpen(false)}>About</a>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdUD3wLjNoD_etp8iSnxRppIYqTIAdgit7uqPk6umueLmRLfw/viewform"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          style={styles.enrollLink}
        >
          Enroll
        </a>

      </div>


    </header>
  );
}

const styles = {
  wrapper: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  // nav: {
  //   maxWidth: "1200px",
  //   margin: "12px auto",
  //   padding: "14px 28px",
  //   borderRadius: "18px",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },

  nav: {
    position: "sticky",
    top: 0,
    zIndex: 1000,
    padding: "14px 28px",
    margin: "20px auto",
    width: "92%",
    borderRadius: "18px",
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
  hamburger: {
    fontSize: "26px",
    color: "#fff",
    cursor: "pointer",
    padding: "8px 12px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.18)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
  },

  mobileMenu: {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "90%",
    marginTop: "12px",
    borderRadius: "16px",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    textAlign: "center",
    zIndex: 999,
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
    position: "fixed",
    top: 0,
    left: 0,
    height: "100vh",
    width: "70%",
    maxWidth: "320px",
    padding: "80px 24px",
    background: "rgba(255,255,255,0.18)",
    backdropFilter: "blur(18px)",
    WebkitBackdropFilter: "blur(18px)",
    boxShadow: "10px 0 30px rgba(0,0,0,0.25)",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    zIndex: 999,
    transition: "transform 0.35s ease",
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

  linkHover: {
    color: "#ffffff",
  },

  

};

