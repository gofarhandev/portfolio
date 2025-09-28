import { useEffect } from "react";

const SECTION_TITLES = {
  hero: "Farhan Sadik | Crafting Digital Experiences",
  about: "About Me | Code, Create, Inspire",
  services: "Services | Building Modern Web Solutions",
  work: "Portfolio | Projects that Speak",
  "contact-summary": "Connect | Let’s Collaborate",
  contact: "Contact | Bring Ideas to Life",
};

export default function DynamicTitle() {
  useEffect(() => {
    const ids = Object.keys(SECTION_TITLES);

    // Helper: set title by id, fallback to default
    const setTitleById = (id) => {
      const title =
        SECTION_TITLES[id] || "Farhan Sadik | Full Stack Developer | Portfolio";
      document.title = title;
    };

    // If page loaded with a hash (e.g. /#about), set title immediately
    if (window.location.hash) {
      const hashId = window.location.hash.replace("#", "");
      if (ids.includes(hashId)) setTitleById(hashId);
    }

    // Hashchange listener (user clicks anchor or browser changes hash)
    const onHashChange = () => {
      const hashId = window.location.hash.replace("#", "");
      if (ids.includes(hashId)) {
        setTitleById(hashId);
      } else {
        document.title = "Farhan Sadik | Full Stack Developer | Portfolio";
      }
    };
    window.addEventListener("hashchange", onHashChange);

    // Intersection Observer to detect the section in viewport
    const observerOptions = {
      root: null,
      // rootMargin shifts the bounding box so a section becomes "visible" when its middle area reaches near viewport center
      rootMargin: "-30% 0px -30% 0px",
      threshold: 0, // using rootMargin for central detection
    };

    let currentActive = null;

    const observerCallback = (entries) => {
      // choose the entry closest to center / that isIntersecting
      const visible = entries.filter((e) => e.isIntersecting);
      if (visible.length > 0) {
        // sort by intersectionRatio descending to pick the most visible
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0].target.id;
        if (id && id !== currentActive) {
          currentActive = id;
          setTitleById(id);
          // update the hash without adding history entry (optional)
          // history.replaceState(null, "", `#${id}`);
        }
      }
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // observe only if elements exist
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, []);

  return null;
}
