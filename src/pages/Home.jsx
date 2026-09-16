import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowUpRight,
  Flame,
  MapPin,
  Utensils,
} from "lucide-react";
import { Link } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import { categories } from "../data/products";

export default function Home() {
  return (
    <main className="page home-page">

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />

        <div className="container hero-inner">

          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow">
              <Flame size={13} />
              THANI'S NON-VEG KITCHEN
            </span>

            <h1 className="display">
              Eat
              <br />
              <i>bold.</i>
            </h1>

            <p className="hero-text">
              Fresh cuts, smoky grills, coastal seafood
              and slow-cooked biryani made for serious
              food cravings.
            </p>

            <div className="hero-actions">

              {/* EXPLORE MENU → CATEGORIES */}
              <a href="#categories" className="btn btn-dark">
                Explore Menu
                <ArrowUpRight size={16} />
              </a>

              <a href="#categories" className="scroll-link">
                SCROLL TO DISCOVER
                <ArrowDownRight size={16} />
              </a>

            </div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="hero-image-frame">
              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=90"
                alt="Non vegetarian food"
              />

              <div className="hero-image-overlay" />

              <div className="hero-stamp">
                <span>FC</span>
                <small>EST. 2026</small>
              </div>
            </div>

            <div className="hero-note">
              <span>01</span>
              <p>
                FIRECUT
                <br />
                ORIGINAL
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* INTRO */}
      <section className="intro-section">
        <div className="container intro-grid">

          <div className="intro-number">
            01
          </div>

          <div className="intro-content">
            <span className="eyebrow">
              THE FIRECUT IDEA
            </span>

            <h2 className="display">
              No boring
              <br />
              <i>food here.</i>
            </h2>

            <p>
              We keep things simple: quality meat,
              powerful spices, proper cooking and
              flavours that stay with you.
            </p>

            <div className="intro-details">

              <div>
                <Flame size={19} />
                <span>Bold Flavours</span>
              </div>

              <div>
                <Utensils size={19} />
                <span>Freshly Prepared</span>
              </div>

              <div>
                <MapPin size={19} />
                <span>Theni Kitchen</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CATEGORIES */}
      <section
        className="section categories-section"
        id="categories"
      >
        <div className="container">

          <div className="section-head">

            <div>
              <span className="eyebrow">
                02 / MENU MAP
              </span>

              <h2 className="display">
                Choose your
                <br />
                craving.
              </h2>
            </div>

            <p>
              Explore each menu separately. Chicken,
              mutton, seafood and signature biryani
              have their own space.
            </p>

          </div>

          <div className="category-grid">
            {categories.map((item) => (
              <CategoryCard
                key={item.path}
                item={item}
              />
            ))}
          </div>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="experience-section">
        <div className="container experience-grid">

          <div className="experience-image">
            <img
              src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=90"
              alt="Restaurant food"
            />
          </div>

          <div className="experience-copy">

            <span className="eyebrow">
              03 / THE EXPERIENCE
            </span>

            <h2 className="display">
              From the
              <br />
              <i>fire to plate.</i>
            </h2>

            <p>
              Our menu is designed around big flavours,
              generous portions and food that feels
              satisfying from the first bite.
            </p>

            <Link
              to="/combos"
              className="text-link"
            >
              SEE COMBOS
              <ArrowUpRight size={17} />
            </Link>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">

        <div className="blueprint-lines" />

        <div className="container final-cta-inner">

          <span className="eyebrow">
            04 / READY?
          </span>

          <h2 className="display">
            Bring your
            <br />
            <i>appetite.</i>
          </h2>

          <Link
            to="/cart"
            className="btn btn-orange"
          >
            Start Your Order
            <ArrowUpRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}