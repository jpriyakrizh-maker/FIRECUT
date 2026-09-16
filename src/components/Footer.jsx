import {
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export default function Footer() {
  const number = "637997426";

  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <span className="eyebrow">
            FIRECUT / 2026
          </span>

          <h2 className="display">
            Come hungry.
            <br />
            <i>Leave happy.</i>
          </h2>
        </div>

        <div className="footer-links">
          <a
            href={`https://wa.me/91${number}`}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            WhatsApp
          </a>

          <a href={`tel:${number}`}>
            <Phone size={17} />
            Call {number}
          </a>

          <div>
            <MapPin size={17} />
            Theni, Tamil Nadu
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>
          Fresh cuts. Bold flavours.
        </span>

        <span>
          FIRECUT © 2026
        </span>
      </div>
    </footer>
  );
}