import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 400);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const waHref = "https://wa.me/919588019759?text=Hello%20VM%20Legacy%20Group%2C%20I%27d%20like%20to%20discuss%20an%20engineering%20consultancy%20project.";
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="grid h-12 w-12 place-items-center rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-110 transition-transform gold-pulse"
      >
        <FaWhatsapp size={22} />
      </a>
      {show && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="grid h-12 w-12 place-items-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold hover:scale-110 transition-transform animate-fade-up"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </div>
  );
}
