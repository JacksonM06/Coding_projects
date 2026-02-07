import Image from "next/image";
import Red_box from "@/components/Red_box";
import Link from "next/link";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (

    <div className="page-root">
      <header className="site-header">
        <div className="brand">
          <h1>My Portfolio</h1>
        </div>

        <nav className="site-nav" aria-label="Main navigation">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/skills">Skills</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="hero">
        <section className="hero-left" aria-labelledby="hero-heading">
          <p className="intro-small">Hello, I'm</p>
          <h2 id="hero-heading" className="hero-name">
            Jackson<br />Meyer
          </h2>

          <div className="hero-ctas">
            <Link href="/contact" className="cta-button">Hire Me</Link>
            <Link href="/resume.pdf" className="cta-link">Download resume &gt;</Link>
          </div>
        </section>

        <aside className="hero-right" aria-hidden>
          <div className="picture-wrap">

          </div>
        </aside>
      </main>
    </div>

    

  );

  
}