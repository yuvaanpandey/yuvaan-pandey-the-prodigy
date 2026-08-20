import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Nav } from "@/components/Nav";
import { Reveal, RevealText } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import portrait from "@/assets/yuvaan-portrait.jpg";
import pitch from "@/assets/cricket-pitch.jpg";
import bowling from "@/assets/bowling-action.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yuvaan Pandey — Student Athlete, Researcher, Cricketer" },
      { name: "description", content: "Singapore-based student athlete, sports analytics researcher, national cricketer, and entrepreneur. Combining elite sport, research and leadership to create impact." },
      { property: "og:title", content: "Yuvaan Pandey — Singapore" },
      { property: "og:description", content: "Combining elite sport, academic excellence, research and entrepreneurship to create impact on and beyond the field." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="bg-background text-foreground overflow-x-clip">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Education />
      <Achievements />
      <Leadership />
      <Research />
      <Projects />
      <Cricket />
      <Community />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] pt-24 md:pt-32 pb-16 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px] grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div style={{ y, opacity }} className="lg:col-span-7 order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <span className="type-eyebrow">Portfolio · MMXXVI</span>
            <span className="h-px w-12 bg-border" />
            <span className="type-mono text-muted-foreground">Singapore</span>
          </div>
          <h1 className="type-hero">
            <RevealText text="Yuvaan" /> <br />
            <span className="font-display italic text-accent">
              <RevealText text="Pandey." />
            </span>
          </h1>
          <Reveal delay={0.4} className="mt-10 max-w-xl">
            <p className="font-display italic text-2xl md:text-3xl text-ink/85 leading-snug">
              Student Athlete. Sports Analytics Researcher. National Cricketer. Entrepreneur. Future Builder.
            </p>
            <p className="mt-6 type-body max-w-lg">
              Combining elite sport, academic excellence, research, leadership and entrepreneurship
              to create impact on and beyond the field.
            </p>
          </Reveal>
          <Reveal delay={0.6} className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#about" className="group inline-flex items-center gap-3 text-sm tracking-wide">
              <span className="link-underline">Explore the work</span>
              <span className="size-9 rounded-full bg-ink text-white flex items-center justify-center transition-transform group-hover:translate-x-1">↓</span>
            </a>
            <a href="#contact" className="link-underline text-sm tracking-wide text-muted-foreground">
              Get in touch
            </a>
          </Reveal>
        </motion.div>

        <div className="lg:col-span-5 order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[4/5] w-full max-w-[480px] ml-auto overflow-hidden bg-surface"
          >
            <img src={portrait} alt="Portrait of Yuvaan Pandey" width={896} height={1120} className="absolute inset-0 size-full object-cover grayscale" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white mix-blend-difference">
              <div className="type-mono">N° 01 — Portrait</div>
              <div className="type-mono">SG / 2026</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4, duration: 1 }}
        className="absolute left-1/2 -translate-x-1/2 bottom-6 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="type-mono">Scroll</span>
        <span className="block h-10 w-px bg-ink/40 origin-top animate-[scrollLine_2s_ease-in-out_infinite]" />
        <style>{`@keyframes scrollLine{0%,100%{transform:scaleY(.3);opacity:.4}50%{transform:scaleY(1);opacity:1}}`}</style>
      </motion.div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const items = ["Singapore National Cricket", "UWCSEA Dover", "Sports Analytics", "SMO Platinum", "Odisha FC", "Cricscore+", "Stories From The Stumps", "Ummeed Global Concern"];
  return (
    <section aria-hidden className="border-y border-border py-6 overflow-hidden marquee-fade">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display italic text-2xl md:text-3xl text-ink/70">
            {t} <span className="text-accent mx-6">✦</span>
          </span>
        ))}
      </motion.div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  const stats = [
    { v: 10, suf: "/10", label: "Grade 7s — IGCSE" },
    { v: 2, suf: "M+", label: "Content Views" },
    { v: 140000, suf: "", label: "IPL Deliveries Analyzed" },
    { v: 23, suf: "", label: "Wickets, SCA Adult Div" },
  ];
  return (
    <section id="about" className="py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal>
              <span className="type-eyebrow">01 — About</span>
              <h2 className="type-h2 mt-6">
                Beyond the <em className="font-display">scoreboard.</em>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.1}>
              <p className="type-statement text-ink">
                A Singapore national cricketer, IB student at UWCSEA, Olympiad mathematician,
                sports analytics researcher, founder, and community leader.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-8 type-body">
                <p>
                  My work sits at the intersection of <span className="text-ink">elite sport</span>,
                  <span className="text-ink"> rigorous research</span> and <span className="text-ink">human impact</span>.
                  Whether breaking down 140,000 IPL deliveries or leading a U16 national side, the discipline is the same:
                  curiosity, preparation, and the courage to commit.
                </p>
                <p>
                  Off the field I build tools for grassroots cricketers, chair a service initiative for children with
                  developmental disabilities, and tell stories about the athletes the game forgets.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6 border-t border-border pt-12">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-5xl md:text-6xl text-ink tracking-tight">
                <Counter to={s.v} suffix={s.suf} />
              </div>
              <div className="mt-3 type-mono text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- EDUCATION ---------------- */
function Education() {
  const ibSubjects = [
    "HL Mathematics: Analysis & Approaches",
    "HL Sports, Exercise & Health Science",
    "HL Physics",
    "SL Economics",
    "SL English Literature",
    "SL Spanish B",
  ];
  const commendations = ["Additional Mathematics", "Economics", "Coordinated Sciences"];

  return (
    <section className="bg-surface py-28 md:py-36 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="type-eyebrow">02 — Education</span>
          <h2 className="type-h2 mt-6 max-w-3xl">A foundation of <em className="font-display">rigour and curiosity.</em></h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-5">
            <div className="border-l border-ink/20 pl-8 relative">
              <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-accent" />
              <div className="type-mono text-muted-foreground">2013 — 2027</div>
              <h3 className="font-serif text-3xl md:text-4xl mt-3">UWCSEA Dover</h3>
              <p className="text-muted-foreground mt-2">Singapore · IGCSE & IB Diploma Programme</p>
              <div className="mt-8 space-y-3 type-body">
                <p><span className="text-ink font-medium">IGCSE.</span> 10 / 10 Grade 7s · 6 A*</p>
                <p>Additional Mathematics 99th percentile · Economics 97th · Sciences 97th.</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
              {ibSubjects.map((s) => (
                <div key={s} className="bg-white p-6 hover:bg-surface transition-colors">
                  <div className="type-mono text-accent">IB</div>
                  <div className="font-serif text-xl mt-2">{s}</div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <div className="type-mono text-muted-foreground mb-3">Certificates of Commendation</div>
              <div className="flex flex-wrap gap-3">
                {commendations.map((c) => (
                  <span key={c} className="px-4 py-2 border border-ink/15 rounded-full text-sm">{c}</span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- ACHIEVEMENTS ---------------- */
function Achievements() {
  const items = [
    { t: "SMO Platinum", d: "Singapore Mathematical Olympiad — top student mathematicians nationwide.", tall: true },
    { t: "Player of the Final", d: "SCA JID U15 League 2024. Match-winning bowling performance.", tall: false },
    { t: "KUMON Math Completion at 13", d: "Among the youngest completers in Singapore — five years ahead of grade.", tall: false },
    { t: "Best Bowler of Tournament", d: "SCA JID U15 League 2024.", tall: false },
    { t: "Team MVP", d: "KRS Tour to Jamshedpur 2023–24.", tall: true },
    { t: "Two-time MPL Champion", d: "MPL Junior League, UWCSEA.", tall: false },
    { t: "GCSE PE Academic Award", d: "Sole recipient — highest academic performance across course.", tall: false },
    { t: "National Cricket Representation", d: "Singapore U16, U19 and Senior Squad selections.", tall: true },
  ];
  return (
    <section id="achievements" className="py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <Reveal className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <span className="type-eyebrow">03 — Awards</span>
            <h2 className="type-h2 mt-6">Recognition.</h2>
          </div>
          <p className="type-body max-w-md">A selection of academic and athletic honours that have shaped the journey.</p>
        </Reveal>

        <div className="mt-16 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.04} className="mb-6 break-inside-avoid">
              <article className={`group relative border border-border p-7 ${it.tall ? "min-h-[260px]" : "min-h-[180px]"} flex flex-col justify-between transition-colors hover:bg-ink hover:text-white hover:border-ink`}>
                <div className="type-mono opacity-60">№ {String(i + 1).padStart(2, "0")}</div>
                <div>
                  <h3 className="font-serif text-2xl md:text-[28px] leading-tight">{it.t}</h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-80">{it.d}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LEADERSHIP ---------------- */
function Leadership() {
  const roles = [
    { role: "Vice Captain", org: "Singapore U16 National Cricket Team", date: "Jun–Jul 2025", impact: "Led team to runner-up finish in ACC East Zone Cup. Tournament's 2nd highest wicket-taker." },
    { role: "Captain", org: "Knight Riders Sports U15", date: "Nov 2024", impact: "Led team to finals in nationwide SCA JID U15 League. Player of the Final + Best Bowler of Tournament." },
    { role: "Co-Captain", org: "UWCSEA U16A Basketball", date: "2024 — 2025", impact: "On-court leadership and team coordination across league and inter-school competitions." },
    { role: "Chair", org: "Ummeed Global Concern", date: "Nov 2025 — Present", impact: "Lead service initiative supporting children with developmental disabilities in Mumbai." },
    { role: "Workshop & Event Coordinator", org: "Socially Sustainable Entrepreneurship Program", date: "2025 — Present", impact: "Coordinate logistics for Shark Tank Capstone and Launch Events; collaborate with Marketing leads." },
  ];
  return (
    <section id="leadership" className="bg-surface py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="type-eyebrow">04 — Leadership</span>
          <h2 className="type-h2 mt-6 max-w-3xl">Leading <em className="font-display">from the front,</em> on and off the field.</h2>
        </Reveal>

        <div className="mt-20">
          {roles.map((r, i) => (
            <Reveal key={r.role + r.org} delay={i * 0.05}>
              <div className="grid grid-cols-12 gap-6 py-8 md:py-10 border-t border-ink/15 group">
                <div className="col-span-12 md:col-span-2 type-mono text-muted-foreground pt-2">{r.date}</div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors">{r.role}</h3>
                  <div className="mt-1 text-muted-foreground">{r.org}</div>
                </div>
                <div className="col-span-12 md:col-span-6 type-body">{r.impact}</div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-ink/15" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESEARCH ---------------- */
function Research() {
  return (
    <section id="research" className="py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="type-eyebrow">05 — Research</span>
          <h2 className="type-h2 mt-6 max-w-4xl">IPL Ball Tracking <em className="font-display">Performance Study.</em></h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-5">
            <p className="type-body">
              An original sports analytics study analysing ~140,000 IPL deliveries from Hawk-Eye tracking data
              to interrogate the widely-taught <span className="text-ink">"good length outside off"</span> bowling strategy.
            </p>
            <ul className="mt-8 space-y-3 type-body">
              {["Statistical modelling", "Spatial analysis", "Tactical findings", "Hawk-Eye data pipeline"].map((x) => (
                <li key={x} className="flex items-center gap-3">
                  <span className="size-1.5 rounded-full bg-accent" /> {x}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="grid grid-cols-3 gap-6">
              <Stat big={<><Counter to={140000} />+</>} label="Deliveries Analyzed" />
              <Stat big={<><Counter to={6} duration={1.4} />%</>} label="Higher Wicket Probability" />
              <Stat big="T20" label="Format Studied" />
            </div>
            <PitchHeatmap />
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-20 border-t border-b border-ink py-14">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-1 type-mono text-accent">Key Finding</div>
            <p className="lg:col-span-11 font-display italic text-3xl md:text-5xl leading-tight text-ink">
              "Traditional cricket wisdom doesn't always align with statistical reality."
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ big, label }: { big: React.ReactNode; label: string }) {
  return (
    <div className="border border-border p-6">
      <div className="font-serif text-3xl md:text-4xl">{big}</div>
      <div className="mt-3 type-mono text-muted-foreground">{label}</div>
    </div>
  );
}

function PitchHeatmap() {
  // Pseudo heat distribution
  const cells = Array.from({ length: 8 * 6 });
  const intensity = (i: number) => {
    const x = i % 8; const y = Math.floor(i / 8);
    // hot zone: just outside off, good length
    const dx = x - 5.5; const dy = y - 3.5;
    return Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / 4);
  };
  return (
    <div className="mt-8 border border-border p-6 bg-white">
      <div className="flex items-center justify-between mb-4">
        <div className="type-mono">Fig. 01 — Wicket Probability Heatmap</div>
        <div className="type-mono text-muted-foreground">Hawk-Eye / 140k balls</div>
      </div>
      <div className="relative aspect-[8/6] w-full bg-[#fafbfc] border border-border">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-px">
          {cells.map((_, i) => {
            const v = intensity(i);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.012 }}
                style={{ background: `rgba(4, 107, 210, ${v * 0.85})` }}
              />
            );
          })}
        </div>
        {/* Pitch stripe */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-12 border-x border-dashed border-ink/30" />
      </div>
      <div className="mt-3 flex items-center justify-between type-mono text-muted-foreground">
        <span>Leg side</span><span>Off stump</span><span>Outside off</span>
      </div>
    </div>
  );
}

/* ---------------- PROJECTS ---------------- */
function Projects() {
  const projects = [
    {
      tag: "Founder",
      title: "Cricscore+",
      desc: "Web-based cricket analytics platform for grassroots players. Custom performance metrics and accessible dashboards translating elite analytics into a simple UX.",
      stack: ["Python", "Firebase", "Flutter", "Flask"],
    },
    {
      tag: "Creator & Podcaster",
      title: "Stories From The Stumps",
      desc: "Partnership with the Cricket Association for the Blind in India. First high schooler to promote the Blind Women's T20 World Cup — 2M+ views, interviews across 7 countries.",
      stack: ["Documentary", "Advocacy", "Interviews", "Social"],
    },
    {
      tag: "Data Analyst Intern",
      title: "Odisha FC · Indian Super League",
      desc: "Two seasons of player data cleaned and analysed. Role-specific performance metrics, ranking models, and dynamic Excel dashboards for scouting decisions.",
      stack: ["Scouting", "Ranking Models", "Excel", "XLOOKUP"],
    },
    {
      tag: "Operations Intern",
      title: "Bank of India · Staff Training College",
      desc: "Coordinated daily operations for 130+ trainees across 7 concurrent classrooms. Resolved scheduling crisis affecting 80+ trainees; reduced wait times 15–20%.",
      stack: ["Operations", "Process Design", "Scheduling"],
    },
  ];
  return (
    <section id="projects" className="bg-ink text-white py-28 md:py-40 px-6 md:px-12 relative grain">
      <div className="mx-auto max-w-[1400px] relative">
        <Reveal>
          <span className="type-eyebrow text-white/60">06 — Projects & Internships</span>
          <h2 className="type-h2 mt-6 max-w-3xl">Building things that <em className="font-display">matter.</em></h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <article className="bg-ink p-8 md:p-12 h-full flex flex-col justify-between min-h-[360px] group">
                <div className="flex items-center justify-between type-mono text-white/50">
                  <span>{p.tag}</span>
                  <span>0{i + 1}</span>
                </div>
                <div className="mt-12">
                  <h3 className="font-serif text-3xl md:text-5xl leading-tight group-hover:text-accent transition-colors">{p.title}</h3>
                  <p className="mt-5 text-white/70 max-w-xl">{p.desc}</p>
                </div>
                <div className="mt-10 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="px-3 py-1.5 border border-white/20 rounded-full text-xs tracking-wide">{s}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CRICKET ---------------- */
function Cricket() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const timeline = [
    { y: "2023", t: "First steps in competitive cricket", d: "MPL Junior League titles · KRS U13/U14 development." },
    { y: "2024", t: "Captain, KRS U15 — Champions", d: "Player of the Final, Best Bowler of Tournament — SCA JID U15." },
    { y: "Jun 2025", t: "Vice-Captain, Singapore U16", d: "ACC Men's East Zone Cup — runner-up. Hat-trick vs Japan." },
    { y: "Jul 2025", t: "Singapore U19 — Bilateral T20s", d: "5 wickets in 2 matches @ 5.4 economy." },
    { y: "2024–25", t: "Top Wicket-Taker — SCA Adult Div 2", d: "23 wickets in 9 matches. Youngest in top 50 at age 15/16." },
    { y: "Nov 2025", t: "Singapore U19 — ACC Premier Cup", d: "Asia Cup qualifiers. Led Singapore in wickets taken." },
    { y: "Present", t: "Men's Senior Squad", d: "HPP Member. Reserve in T20I Quadrangular & Asia Pacific Champions Trophy." },
  ];
  const stats = [
    { v: 16, l: "Wickets, ACC East Zone Cup" },
    { v: 2.9, l: "Economy Rate" },
    { v: 23, l: "Wickets, SCA Adult Div" },
    { v: 5, l: "5-Wicket Hauls" },
  ];

  return (
    <section id="cricket" ref={ref} className="relative py-28 md:py-40 px-6 md:px-12 overflow-hidden">
      <motion.img
        src={bowling} alt="" aria-hidden width={1200} height={1500} loading="lazy"
        style={{ y: y1 }}
        className="hidden lg:block absolute right-0 top-20 w-[36%] max-w-[520px] opacity-95 grayscale"
      />
      <motion.img
        src={pitch} alt="" aria-hidden width={1600} height={900} loading="lazy"
        style={{ y: y2 }}
        className="absolute -left-20 bottom-0 w-[60%] max-w-[700px] opacity-10 grayscale pointer-events-none"
      />

      <div className="mx-auto max-w-[1400px] relative">
        <Reveal>
          <span className="type-eyebrow">07 — Cricket Journey</span>
          <h2 className="type-h2 mt-6 max-w-3xl">
            From school grounds to <em className="font-display">national colours.</em>
          </h2>
        </Reveal>

        <div className="mt-20 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-[88px] top-0 bottom-0 w-px bg-ink/15" />
              {timeline.map((m, i) => (
                <Reveal key={m.y + m.t} delay={i * 0.04}>
                  <div className="relative grid grid-cols-[88px_1fr] gap-6 pb-10">
                    <div className="font-serif italic text-accent text-lg pt-1">{m.y}</div>
                    <div className="relative pl-8">
                      <span className="absolute -left-[5px] top-2 size-2.5 rounded-full bg-ink ring-4 ring-background" />
                      <h3 className="font-serif text-2xl md:text-[28px] leading-tight">{m.t}</h3>
                      <p className="mt-2 text-muted-foreground">{m.d}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <Reveal>
              <div className="grid grid-cols-2 gap-px bg-border border border-border">
                {stats.map((s) => (
                  <div key={s.l} className="bg-white p-6">
                    <div className="font-serif text-4xl md:text-5xl">
                      <Counter to={s.v} />
                    </div>
                    <div className="mt-3 type-mono text-muted-foreground">{s.l}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-surface">
                <div className="type-mono text-accent">Playing Role</div>
                <p className="font-serif text-2xl mt-3 leading-snug">
                  Bowling all-rounder — right-arm off-spin, right-handed middle-order batter.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMMUNITY ---------------- */
function Community() {
  const items = [
    { t: "Ummeed Global Concern", d: "Chair (UWCSEA). Service supporting children with developmental disabilities in Mumbai — Down syndrome, autism." },
    { t: "Genesis Special School", d: "Coach-mentor for weekly integration sessions promoting empathy, inclusion and student reflection." },
    { t: "Volunteer Mathematics Tutor", d: "Weekly 1-on-1 instruction in arithmetic and logical reasoning for primary school students." },
  ];
  const metrics = [
    { v: 1800, p: "$", l: "Raised for Ummeed (24–25)" },
    { v: 100, suf: "+", l: "Volunteer Hours" },
    { v: 3, l: "Community Programs" },
  ];
  return (
    <section id="community" className="bg-surface py-28 md:py-40 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="type-eyebrow">08 — Community</span>
          <h2 className="type-h2 mt-6 max-w-3xl">Sport as <em className="font-display">service.</em></h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {items.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="bg-white border border-border p-8 h-full hover:border-ink transition-colors">
                <div className="type-mono text-accent">Initiative 0{i + 1}</div>
                <h3 className="font-serif text-2xl md:text-[28px] mt-6 leading-tight">{c.t}</h3>
                <p className="mt-4 text-muted-foreground">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 grid grid-cols-3 gap-6 border-t border-ink/15 pt-12">
          {metrics.map((m) => (
            <div key={m.l}>
              <div className="font-serif text-4xl md:text-6xl">
                {m.p ?? ""}<Counter to={m.v} suffix={m.suf ?? ""} />
              </div>
              <div className="mt-3 type-mono text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  const groups = [
    { t: "Technical", items: ["Python", "Statistical Modelling", "Spatial Analysis", "Excel", "Streamlit", "GitHub"] },
    { t: "Domains", items: ["Sports Analytics", "Performance Evaluation", "Data Storytelling", "Leadership", "Entrepreneurship"] },
    { t: "Languages", items: ["English — Fluent", "Hindi — Proficient", "Spanish — Conversational"] },
  ];
  return (
    <section className="py-28 md:py-36 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px]">
        <Reveal>
          <span className="type-eyebrow">09 — Skills</span>
          <h2 className="type-h2 mt-6">Toolkit.</h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-10 border-t border-border pt-12">
          {groups.map((g, gi) => (
            <Reveal key={g.t} delay={gi * 0.06}>
              <div className="type-mono text-muted-foreground">{g.t}</div>
              <ul className="mt-6 space-y-3">
                {g.items.map((i) => (
                  <li key={i} className="font-serif text-2xl">{i}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section id="contact" className="py-32 md:py-48 px-6 md:px-12 border-t border-border">
      <div className="mx-auto max-w-[1400px] text-center">
        <Reveal>
          <span className="type-eyebrow">10 — Contact</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-8 font-serif text-5xl md:text-8xl leading-[1.02] tracking-tight max-w-5xl mx-auto">
            Let's build something <em className="font-display italic text-accent">meaningful.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="mailto:yuvaanpandey@gmail.com"
            className="mt-16 inline-block font-display italic text-3xl md:text-5xl link-underline"
          >
            yuvaanpandey@gmail.com
          </a>
        </Reveal>
        <Reveal delay={0.3}>
          <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 type-mono text-muted-foreground">
            <span>Singapore</span>
            <span className="hidden md:block">·</span>
            <a href="tel:+6597230209" className="link-underline">+65 9723 0209</a>
            <span className="hidden md:block">·</span>
            <span>Available worldwide</span>
          </div>
        </Reveal>
        <Reveal delay={0.4}>
          <div className="mt-12 flex items-center justify-center gap-6">
            {[
              { l: "LinkedIn", h: "#" }, { l: "Instagram", h: "#" }, { l: "YouTube", h: "#" }, { l: "GitHub", h: "#" },
            ].map((s) => (
              <a key={s.l} href={s.h} className="link-underline text-sm tracking-wide">{s.l}</a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 md:px-12">
      <div className="mx-auto max-w-[1400px] flex flex-col md:flex-row items-center justify-between gap-4 type-mono text-muted-foreground">
        <span>© MMXXVI · Yuvaan Pandey</span>
        <span>Designed & built with intention in Singapore</span>
      </div>
    </footer>
  );
}
