"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Leaf, Sprout, Truck, MapPin, Phone, Mail, Clock, ShieldCheck, ArrowRight, Star, Instagram, Facebook, MessageCircle } from "lucide-react";

import logo from "@/assets/logo.asset.json";
import nursery1 from "@/assets/nursery1.asset.json";
import nursery2 from "@/assets/nursery2.asset.json";
import field from "@/assets/field.asset.json";
import crates from "@/assets/crates.asset.json";
import bagged from "@/assets/bagged.asset.json";
import roots from "@/assets/roots.asset.json";
import boxes from "@/assets/boxes.asset.json";
import berries from "@/assets/berries.asset.json";
import plant from "@/assets/plant.asset.json";
import image1 from "@/assets/image1.asset.json";
import image2 from "@/assets/image2.asset.json";
import image3 from "@/assets/image3.asset.json";
import image4 from "@/assets/image4.asset.json";
import image5 from "@/assets/image5.asset.json";
import image7 from "@/assets/image7.asset.json";
import image8 from "@/assets/image8.asset.json";
import image9 from "@/assets/image9.asset.json";
import image10 from "@/assets/image10.asset.json";
import image11 from "@/assets/image11.asset.json";
import video from "@/assets/video.asset.json";

function useMouseParallax() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setPos({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return pos;
}

function TiltCard({ children, className = "", float = false }: { children: React.ReactNode; className?: string; float?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);
  
  const springConfig = { damping: 20, stiffness: 300 };
  const rotateXSpring = useSpring(rotateX, springConfig);
  const rotateYSpring = useSpring(rotateY, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: rotateXSpring,
        rotateY: rotateYSpring,
        transformStyle: "preserve-3d",
      }}
      className={`will-change-transform ${className}`}
      animate={float ? {
        y: [0, -10, 0],
      } : undefined}
      transition={float ? {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      } : undefined}
    >
      {children}
    </motion.div>
  );
}

export default function Landing() {
  const parallax = useMouseParallax();
  const phone = "+91 98765 43210";
  const whatsapp = "919876543210";

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* NAV */}
      <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2.5 min-w-0">
            <div className="h-10 w-10 rounded-full bg-cream shrink-0 grid place-items-center shadow-3d ring-1 ring-primary/20">
              <img src={logo.url} alt="YK Agro Nursery logo" className="h-9 w-9 object-contain" />
            </div>
            <div className="min-w-0">
              <div className="font-display font-bold text-base sm:text-lg leading-tight truncate">YK Agro Nursery</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block">Rooted in quality</div>
            </div>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#dispatch" className="hover:text-primary transition-colors">Dispatch</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <a
            href={`https://wa.me/${whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-all hover:scale-105 shadow-3d"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">Book Order</span>
          </a>
        </div>
      </nav>

      {/* HERO */}
      <header id="top" className="relative pt-24 pb-16 md:pt-32 md:pb-24 bg-hero text-primary-foreground overflow-hidden">
        {/* floating deco */}
        <div
          className="absolute -top-20 -left-10 h-72 w-72 rounded-full bg-leaf-glow/40 blur-3xl animate-float-slow"
          style={{ transform: `translate(${parallax.x * 30}px, ${parallax.y * 30}px)` }}
        />
        <div
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-berry/30 blur-3xl animate-float-medium"
          style={{ transform: `translate(${parallax.x * -40}px, ${parallax.y * -40}px)` }}
        />
        <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="animate-grow-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1.5 text-xs font-medium mb-6">
              <Sprout className="h-3.5 w-3.5 text-leaf-glow" />
              Premium Wholesale Nursery · Pune, Maharashtra
            </div>
            <h1 className="text-balance text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.05]">
              Healthy roots.<br />
              <span className="italic text-leaf-glow">Sweeter harvests.</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              YK Agro Nursery grows premium strawberry runners and fruit plant
              saplings for farmers across India. Nursery-certified, root-inspected,
              and packed for a strong first season.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-leaf-glow text-primary px-6 py-3 text-sm font-bold hover:scale-105 transition-transform shadow-glow"
              >
                Reserve Your Plants
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                See Our Nursery
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { k: "10L+", v: "Runners / season" },
                { k: "100%", v: "Root inspected" },
                { k: "PAN", v: "India dispatch" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-white/5 border border-white/10 backdrop-blur p-3 text-center">
                  <div className="font-display text-2xl font-bold text-leaf-glow">{s.k}</div>
                  <div className="text-[11px] uppercase tracking-wider text-primary-foreground/70 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 3D floating collage */}
          <div className="relative h-[420px] sm:h-[520px] lg:h-[600px] max-w-full mx-auto isolate z-10">
            <div className="relative w-full h-full max-w-[500px] mx-auto">
              {/* main card */}
              <TiltCard float={true}>
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[70%] sm:w-[75%] aspect-[3/4] rounded-3xl overflow-hidden shadow-3d ring-1 ring-white/20">
                  <img src={image1.url} alt="Strawberry plant" className="h-full w-full object-cover" />
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                    <div className="text-xs font-semibold text-leaf-glow uppercase tracking-widest">Featured</div>
                    <div className="font-display text-xl font-bold">Winter Dawn Strawberry</div>
                  </div>
                </div>
              </TiltCard>
              {/* left small */}
              <TiltCard float={true}>
                <div className="absolute left-0 sm:left-2 top-[20%] w-32 sm:w-40 aspect-square rounded-2xl overflow-hidden shadow-3d ring-1 ring-white/20">
                  <img src={image2.url} alt="Root-inspected saplings" className="h-full w-full object-cover" />
                </div>
              </TiltCard>
              {/* right small */}
              <TiltCard float={true}>
                <div className="absolute right-0 sm:right-2 bottom-[15%] w-36 sm:w-44 aspect-[4/5] rounded-2xl overflow-hidden shadow-3d ring-1 ring-white/20">
                  <img src={image3.url} alt="Fresh strawberries" className="h-full w-full object-cover" />
                </div>
              </TiltCard>
              {/* badge */}
              <motion.div
                className="absolute bottom-4 left-4 sm:left-8 rounded-2xl bg-cream text-primary px-4 py-3 shadow-3d flex items-center gap-2"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ShieldCheck className="h-5 w-5 text-primary" />
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-bold">Since 2015</div>
                  <div className="text-sm font-display font-bold">Farmer-trusted</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* MARQUEE */}
      <div className="border-y border-border bg-cream/50 overflow-hidden">
        <div className="flex gap-12 py-4 animate-[shimmer_30s_linear_infinite] whitespace-nowrap">
          {[..."Strawberry Runners · Fruit Saplings · Wholesale Rates · Root-Certified · PAN India Dispatch · August 2nd Week Onwards · ".repeat(4)].join("")}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary">
              <Leaf className="h-3.5 w-3.5" /> What we grow
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-balance">
              Three services. <span className="italic text-primary">One promise</span> — healthy plants.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              From tissue-cultured runners to farm-ready fruit saplings, everything
              leaving our nursery is inspected root, stem, and leaf.
            </p>
          </motion.div>

          <motion.div
            className="mt-12 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              {
                title: "Plant Nurseries",
                desc: "Full-spectrum ornamental and productive nursery stock grown under climate-controlled shade houses.",
                img: image4.url,
                icon: Sprout,
              },
              {
                title: "Fruit Plant Nurseries",
                desc: "Grafted and seed-raised fruit saplings — hardened for transplant and ready for Indian agri-climates.",
                img: image5.url,
                icon: Leaf,
              },
              {
                title: "Strawberry Wholesalers",
                desc: "Wholesale strawberry runners packed field-ready. Bulk orders shipped nationwide with cold-chain care.",
                img: image7.url,
                icon: Truck,
              },
            ].map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <TiltCard className="card-3d">
                  <div className="group relative rounded-3xl overflow-hidden bg-card shadow-3d border border-border">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-leaf-gradient grid place-items-center shadow-glow">
                          <s.icon className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <div className="text-xs uppercase tracking-widest font-bold text-muted-foreground">0{i + 1}</div>
                      </div>
                      <h3 className="mt-4 text-2xl font-bold text-card-foreground">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* DISPATCH BANNER */}
      <section id="dispatch" className="relative py-20 md:py-24 bg-hero text-primary-foreground overflow-hidden">
        <div className="absolute -top-24 right-1/3 h-72 w-72 rounded-full bg-berry/40 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-leaf-glow/30 blur-3xl animate-float-medium" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-berry/20 border border-berry/40 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-leaf-glow">
              <Clock className="h-3.5 w-3.5" /> Dispatch season
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl font-extrabold text-balance">
              Dispatch begins<br />
              <span className="italic text-leaf-glow">2nd week of August.</span>
            </h2>
            <p className="mt-5 text-primary-foreground/80 text-lg max-w-lg">
              Reserve early — high-demand varieties are allocated on a first-book,
              first-served basis. Boxed, labelled, and shipped nationwide.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-leaf-glow text-primary px-6 py-3 text-sm font-bold hover:scale-105 transition-transform shadow-glow"
              >
                <Phone className="h-4 w-4" /> Call to book
              </a>
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur px-6 py-3 text-sm font-semibold hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp us
              </a>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {[
              { img: image11.url, label: "Export-grade boxes" },
              { img: image7.url, label: "Cold-chain crates" },
              { img: image8.url, label: "Root-bagged saplings" },
              { img: image9.url, label: "Poly-house grown" },
            ].map((it, i) => (
              <motion.div
                key={it.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className={i % 2 === 0 ? "mt-8" : ""}
              >
                <TiltCard>
                  <div className="relative rounded-2xl overflow-hidden aspect-square shadow-3d ring-1 ring-white/10">
                    <img src={it.img} alt={it.label} className="h-full w-full object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="text-xs font-semibold text-leaf-glow uppercase tracking-widest">{it.label}</div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-end justify-between gap-6 mb-12"
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary">
                <Leaf className="h-3.5 w-3.5" /> Inside the nursery
              </div>
              <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-balance">
                A closer look at how we grow.
              </h2>
            </div>
            <div className="flex items-center gap-1 text-berry">
              {[0,1,2,3,4].map(i => <Star key={i} className="h-5 w-5 fill-berry" />)}
              <span className="ml-2 text-sm text-muted-foreground font-medium">Trusted by 500+ farmers</span>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-12 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              className="col-span-12 md:col-span-8 aspect-[16/10] rounded-3xl overflow-hidden shadow-3d card-3d"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <video src={video.url} autoPlay muted loop playsInline className="h-full w-full object-cover" />
            </motion.div>
            {[{ img: image3.url, alt: "Harvested strawberries" }, { img: image2.url, alt: "Root-inspected runners" }, { img: image8.url, alt: "Bagged saplings" }, { img: image10.url, alt: "Field planting" }].map((item, i) => (
              <motion.div
                key={item.alt}
                className="col-span-6 md:col-span-4 aspect-square rounded-3xl overflow-hidden shadow-3d card-3d"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              >
                <img src={item.img} alt={item.alt} className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 md:py-28 bg-cream/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-primary">
              <MapPin className="h-3.5 w-3.5" /> Visit or call
            </div>
            <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold text-balance">
              Let's grow together.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-md">
              Whether it's ten trays or ten thousand runners — we'd love to hear
              what you're planting this season.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { icon: MapPin, label: "Nursery address", value: "Theur, Pune Solapur Road, Uruli Kanchan, Pune-412202, Maharashtra" },
                { icon: Phone, label: "Phone", value: phone, href: `tel:${phone}` },
                { icon: Mail, label: "Email", value: "hello@ykagronursery.in", href: "mailto:hello@ykagronursery.in" },
                { icon: Clock, label: "Nursery hours", value: "Mon – Sat · 8:00 AM to 6:00 PM" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border shadow-3d hover:-translate-y-1 transition-transform"
                >
                  <div className="h-11 w-11 shrink-0 rounded-xl bg-leaf-gradient grid place-items-center shadow-glow">
                    <c.icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground">{c.label}</div>
                    <div className="mt-0.5 font-semibold text-card-foreground">{c.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Thanks! We'll be in touch shortly."); }}
              className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-3d"
            >
              <h3 className="font-display text-2xl font-bold">Request a quote</h3>
              <p className="text-sm text-muted-foreground mt-1">Tell us what you need — we'll reply within 24 hours.</p>

              <div className="mt-6 grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Name</span>
                  <input required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Phone</span>
                  <input required className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="+91 ..." />
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Interested in</span>
                  <select className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Strawberry runners (wholesale)</option>
                    <option>Fruit plant saplings</option>
                    <option>Ornamental / nursery plants</option>
                    <option>Something else</option>
                  </select>
                </label>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Quantity & notes</span>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary" placeholder="E.g. 5,000 Winter Dawn runners, dispatch to Nashik…" />
                </label>
              </div>
              <button
                type="submit"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] shadow-3d"
              >
                Send enquiry <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </TiltCard>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-hero text-primary-foreground pt-16 pb-8 relative overflow-hidden">
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-leaf-glow/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-cream grid place-items-center ring-1 ring-white/20">
                  <img src={logo.url} alt="YK Agro Nursery" className="h-11 w-11 object-contain" />
                </div>
                <div>
                  <div className="font-display font-bold text-xl">YK Agro Nursery</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/60">Rooted in quality</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-primary-foreground/70 max-w-md leading-relaxed">
                A family-run wholesale nursery near Pune, growing strawberry
                runners and fruit saplings for progressive farmers across India.
              </p>
              <div className="mt-5 flex gap-3">
                {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
                  <a key={i} href="#" aria-label="social" className="h-10 w-10 rounded-full bg-white/10 border border-white/20 grid place-items-center hover:bg-white/20 transition-colors">
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-leaf-glow">Reach us</div>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0 text-leaf-glow" /><span>Theur, Pune Solapur Road, Uruli Kanchan, Pune-412202, Maharashtra</span></li>
                <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0 text-leaf-glow" /><span>{phone}</span></li>
                <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0 text-leaf-glow" /><span>hello@ykagronursery.in</span></li>
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest font-bold text-leaf-glow">Services</div>
              <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                <li>Plant Nurseries</li>
                <li>Fruit Plant Nurseries</li>
                <li>Strawberry Plant Wholesalers</li>
                <li className="text-leaf-glow font-semibold">Dispatch: Aug 2nd week</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap gap-3 justify-between text-xs text-primary-foreground/60">
            <div>© {new Date().getFullYear()} YK Agro Nursery. All rights reserved.</div>
            <div>Grown with care in Uruli Kanchan, Pune.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
