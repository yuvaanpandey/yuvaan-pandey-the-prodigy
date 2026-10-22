import { createFileRoute } from "@tanstack/react-router";
import { Page } from "@/components/Page";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé — Yuvaan Pandey" },
      { name: "description", content: "Full résumé of Yuvaan Pandey — education, awards, leadership, projects, internships, sports and community engagement." },
    ],
  }),
  component: Resume,
});

type Entry = { title: string; date?: string; bullets?: string[]; sub?: Entry[] };
type Section = { heading: string; intro?: string[]; entries?: Entry[]; bullets?: string[] };

const resume: Section[] = [
  {
    heading: "Education",
    entries: [
      {
        title: "UWCSEA Dover, Singapore",
        date: "2013 – 2027",
        bullets: [
          "International General Certificate of Secondary Education (IGCSE) and International Baccalaureate Diploma Programme (IBDP)",
          "IGCSE: 10/10 7s (school), 6/6 A*",
          "Relevant Coursework (IBDP): HL Mathematics: Analysis & Approaches, HL Sports Exercise and Health Science, HL Physics, SL English Literature, SL Spanish B, SL Economics",
          "Certificates of Commendation for Additional Mathematics, Economics, and Coordinated Sciences – for outstanding effort, high achievement, and consistent top performance",
          "Top grade (7) awarded by school for all 10 subjects taken",
          "A* awarded in all subjects taken: Additional Mathematics (99 percentile), Cambridge International Mathematics (97 percentile), Economics (97 percentile), Co-ordinated Science Double Award (97 percentile), Physical Education (91 percentile)",
        ],
      },
    ],
  },
  {
    heading: "Awards & Achievements",
    bullets: [
      "Singapore Mathematical Olympiad (SMO) – Platinum Award recipient, placing among the top student mathematicians nationwide",
      "Completed the KUMON Math Program at age 13 – among the youngest program completers in Singapore, finishing 7 years ahead of school grade level",
      "Player of the Final & Best Bowler of Tournament – SCA JID U15 League 2024: recognised for pivotal bowling performances including a five-wicket semi-final haul and match-winning final",
      "Team MVP – KRS Tour to Jamshedpur (2023–24): Most Valuable Player for touring teams for consistent high-impact play",
      "Two-time Champion – MPL Junior League, UWCSEA",
      "GCSE Physical Education Academic Award: sole recipient of award for highest academic performance in subject across course",
      "IGCSE Certificates of Commendation: Additional Mathematics, Economics (×2), and Coordinated Sciences – for outstanding effort, high achievement, consistent top performance and academic excellence throughout course",
      "Sigma Xi Scientific Research Honor Society: one of few high school students internationally to be elected associate member of Sigma Xi, the world's largest general scientific research honor society. Recognised for original sports analytics research analysing ~140,000 IPL deliveries using Hawk-Eye ball-tracking data",
      "Phoenix Roll of Honour – Cricket | UWCSEA Dover, 2026: inducted into UWCSEA's Phoenix Roll of Honour for Cricket, recognising outstanding sporting achievement and contribution. One of 3 students selected for cricket",
    ],
  },
  {
    heading: "Leadership & Initiatives",
    entries: [
      {
        title: "Captain – Knight Riders Sports (KRS) U15 Team, Nationwide SCA JID U15 League",
        date: "Nov 2024",
        bullets: [
          "Led the team to finals in the tournament; league consisted of top 10 international schools, local schools, and clubs/academies",
          "Oversaw team strategy, lineup decisions, and on-field leadership, setting the tone for discipline, performance, and resilience under pressure",
          "Led from the front with Player of the Final and Best Bowler of the Tournament",
        ],
      },
      {
        title: "Vice-Captain – Singapore U16 National Cricket Team, ACC Men's East Zone Cup",
        date: "Jun – Jul 2025",
        bullets: [
          "Helped lead the team to a runner-up finish in a highly competitive international tournament featuring 10 top Asian youth sides",
          "Served as key tactical voice on the field, supporting match strategies and team morale",
        ],
      },
      {
        title: "Co-Captain – U16A Basketball Team, UWCSEA Dover",
        date: "2024 – 2025",
        bullets: [
          "Recognised for communication skills, competitive spirit, and ability to keep team performance consistent under pressure",
          "Provided on-court leadership and facilitated team coordination during league and inter-school competitions",
        ],
      },
      {
        title: "Socially Sustainable Entrepreneurship Program (SSEP)",
        sub: [
          {
            title: "Workshop and Event Coordinator — Leadership Team for Program",
            date: "2025 – Present",
            bullets: [
              "Tasked with ensuring smooth coordination of workshop logistics such as making speaker arrangements and preparing materials",
              "Assisting in organisation of Shark Tank Capstone Event and Launch Event; collaborating with Marketing and Communications officers to elevate event operations",
              "Supervising set-up and breakdown of event activities",
              "Collecting feedback from participants on events and ensuring feedback is incorporated into the Program",
            ],
          },
          {
            title: "Competitor: Chief Financial Officer — Community Creators School Team",
            date: "2024 – 2025",
            bullets: [
              "Developed a full financial plan for a community basketball recreation league focused on accessibility and well-being",
              "Worked on budgeting, cost projections, and financial trade-offs to balance inclusion with sustainability",
              "Gained hands-on experience applying finance concepts to a real-world social initiative",
            ],
          },
        ],
      },
      {
        title: "Chair – Ummeed Global Concern (UWCSEA)",
        date: "Nov 2025 – Present",
        bullets: [
          "Appointed to lead the Global Concerns Service initiative supporting children with developmental disabilities in Mumbai",
          "Oversee planning, coordination, and execution of service activities in partnership with a specialised care centre working with children with Down syndrome and autism",
          "Lead student teams across fundraising and awareness efforts; manage initiatives and ensure continuity of impact",
        ],
      },
    ],
  },
  {
    heading: "Projects & Internships",
    entries: [
      {
        title: "Creator & Podcaster, Stories from the Stumps – Cricket Association for the Blind in India (CABI)",
        date: "Apr 2025 – Present",
        bullets: [
          "First and only high schooler to promote the first Blind Women's T20 Cricket World Cup in India through Instagram and YouTube, generating 2.5M+ views and engaging a global cricket audience",
          "Partnered with CABI, conducting interviews with players, captains, coaches, and officials from 6 countries: Australia, India, Nepal, Pakistan, Sri Lanka and the USA",
          "Produced cross-border storytelling content highlighting blind women athletes and underrepresented voices in cricket, directly engaging players, team management, and coaches",
          "Collaborated with blind and wheelchair cricket leadership to expand coverage of inclusive sports ecosystems and support advocacy initiatives during the tournament",
          "Produced and directed the award-winning documentary “Awaaz Do” on the Indian Blind Women's Cricket Team to support fundraising and expand public awareness. Best Documentary at 4 international film festivals: Kookai International Film Festival, Blue Bird Film Festival, Asian Independent Film Festival, Rameshwaram International Film Festival. Best Director: Finalist at Asian Independent Film Festival; Winner at Sundarban International Film Festival and Rameshwaram International Film Festival. Outstanding Achievement Award for Documentary at Sundarban International Film Festival. Selected for Jagran Film Festival screening",
        ],
      },
      {
        title: "Researcher & Author — IPL Ball Tracking Performance Study",
        date: "Jun 2025 – Present",
        bullets: [
          "Designed and authored an original sports analytics study analysing ~140,000 IPL deliveries from Hawk-Eye tracking data to evaluate the effectiveness of the widely taught “good length outside off” bowling strategy",
          "Built spatial and statistical models, including a Generalized Additive Model (GAM), to distinguish the independent effect of ball location from match context (score, over, and bowling style) on wicket probability",
          "Identified measurable tactical patterns, including higher wicket probability from slightly fuller off-stump deliveries (~6%) and distinct length strategies for fast bowlers and spinners",
          "Confirmed the “good length” zone as a genuine wicket hotspot while showing its independent effect is modest (~13% above average) and that match situation is a stronger predictor of wickets",
          "Research recognised by Sigma Xi, the world's largest general scientific research honor society — one of few high school students internationally to receive Associate Membership",
          "Won a CREST Gold Award",
          "Published in the National High School Journal of Science; follow-up manuscript accepted and presented at the icSPORTS conference in October 2026 — one of the only high schoolers to publish at icSPORTS 2026",
        ],
      },
      {
        title: "Operations Intern, Staff Training College – Bank of India",
        date: "Dec 2025 – Jan 2026",
        bullets: [
          "Coordinated daily operations for a residential banking training facility serving 130+ trainees across 7 concurrent classrooms, managing room allocations, batch sequencing, and attendance tracking to maintain uninterrupted program delivery",
          "Resolved a major scheduling disruption affecting 80+ trainees by reorganising classroom assignments, restructuring training batches, and implementing real-time attendance updates, preventing cancellations and restoring the day's training schedule",
          "Designed a two-lane check-in system and coordination grid mapping room numbers, batch identifiers, and session timings, reducing trainee wait times by 15–20% and improving staff response time during peak training periods",
        ],
      },
      {
        title: "Data Analyst Intern – Odisha FC (Indian Super League)",
        date: "Apr – Jun 2025",
        bullets: [
          "Assisted Head of Scouting & Performance Analysis to clean and analyse two seasons of player data",
          "Analysed 2 seasons across 7 positions; built role-weighted ranking logic (1,000-min threshold, per-90 metrics, custom ratios) in Excel to deliver 3 scouting briefs",
          "Developed dynamic Excel dashboards using XLOOKUP, RANK, and nested logic for data-driven player selections",
        ],
      },
      {
        title: "Founder and CEO – Cricscore+ Sports Analytics Platform",
        date: "Feb 2024 – Present",
        bullets: [
          "Developed a web-based cricket analytics tool for grassroots players using Python, Firebase, Flask and Flutter",
          "Built custom performance metrics and scoring models to evaluate player impact beyond traditional statistics",
          "Translated elite-level analytics into simple dashboards, leaderboards and graphs",
          "Focused on underserved communities by enabling access through minimal data input and intuitive UX; project supports ongoing research on performance improvement through accessible analytics",
          "Adopted by STEAM IT Foundation across 95 partner schools; platform now supports 500+ student-athletes using data to guide training, selection & match strategy",
          "Project won a CREST Gold Award",
          "In active discussions with CricHeroes, the world's largest grassroots cricket platform, to integrate Cricscore+ features and expand equitable access to performance analytics",
        ],
      },
      {
        title: "Participant & Researcher — Wharton Moneyball Academy (1st Place, Research Competition)",
        date: "Jul 2026",
        bullets: [
          "Selected for the Wharton Moneyball Academy, a three-week on-campus summer program at the University of Pennsylvania (6–26 July 2026) focused on advanced sports analytics",
          "Placed 1st in the program's research competition, developing a LaLiga expected-goals (xG) model in R to evaluate player and team finishing performance",
          "Work published in Rookie Review; expansion submitted to the Wharton Sports Analytics Journal",
        ],
      },
    ],
  },
  {
    heading: "Sports Experience",
    entries: [
      {
        title: "Singapore National Cricket Team(s)",
        date: "2024 – Present",
        bullets: [
          "U19 High Performance Program (HPP) Member, Singapore Cricket Association",
          "Men's National Team Member, Singapore Cricket Association",
          "Selected Senior Men's National Squad Member – ACC Men's Premier Cup 2026",
          "Selected Senior Men's National Squad Member – Asia Pacific Cricket Champions Trophy 2026",
          "Selected U19 National Squad Member – ACC U19 Men's Premier Cup",
          "Selected U16 National Squad Member / Vice-Captain – ACC Men's U16 East Zone Cup",
          "Selected Reserve, Singapore Senior Squad – T20I Quadrangular Series (Singapore, Thailand, Saudi Arabia, Malaysia)",
          "Selected Reserve, Singapore Senior Squad – T20I Asia Pacific Champions Trophy 2025",
          "Selected to represent Singapore XI (Men's) in Singa Dragon Trophy – contributed 2 wickets as well as high SR/infinite batting average",
          "Selected to represent Singapore XI (Men's) in MB UMZ Trophy",
        ],
      },
      {
        title: "Vice-Captain, Singapore U16 Cricket Team – ACC Men's East Zone Cup",
        date: "Jun – Jul 2025",
        bullets: [
          "Delivered standout performances in pressure situations/knockout matches (hat-trick vs Japan, 4-wicket haul vs HK in semi-final)",
          "Led team to a runner-up finish; narrowly lost to Nepal in the final",
          "Tournament's 2nd highest wicket-taker, highest for Singapore – 16 wickets in 6 matches at 2.9 economy",
          "Match highlights: 5/14 (10 overs) vs Bhutan, 4/27 (9.2) vs Japan including a hat-trick, 4/36 (9) vs Hong Kong (semi-final)",
        ],
      },
      {
        title: "Team Member, Singapore U19 Cricket Team – ACC U19 Men's Premier Cup",
        date: "Nov 2025",
        bullets: [
          "Selected to represent Singapore U19 Men's Cricket Team at the ACC U19 Men's Premier Cup (Asia Cup qualifiers)",
          "Led Singapore in wickets taken with 5 wickets across 3 matches",
          "Contributed to team winning 2 of 3 matches",
        ],
      },
      {
        title: "Singapore U19 – Friendly T20 Bilateral Series",
        date: "Jul 2025",
        bullets: ["Took 5 wickets in 2 matches at an economy of 5.4 – 2nd highest in the series"],
      },
      {
        title: "SCA (Singapore Cricket Association) Domestic Leagues",
        date: "2023 – Present",
        bullets: [
          "Top Wicket-Taker, 2024–25 SCA Nationwide Adult Div 2 League: 23 wickets in 9 matches, including three 4-wicket hauls (most)",
          "Youngest in top 50 wicket-takers at age 15/16",
          "Player of the Final & Best Bowler of the Tournament, SCA JID U15 League 2024",
          "Captain, KRS U15 – Champions: 29*(18) and 2 wickets in final, 10 total wickets including a 5-wicket semi-final haul",
          "Champion, JID U14 Tournament",
        ],
      },
      {
        title: "School/Youth Cricket – UWCSEA & KRS",
        date: "2023 – 2026",
        bullets: [
          "Phoenix Roll of Honour 2026: inducted into UWCSEA's Phoenix Roll of Honour for Cricket, recognising outstanding sporting achievement. One of 3 students selected across the cricket program",
          "Two-time MPL Junior League Champion",
          "Mentored KRS U13 players as youth coach",
          "MVP, KRS Tour to Jamshedpur – ranked 3rd across teams",
          "Playing role: bowling all-rounder – right-arm off-spin, right-handed middle-order batter",
        ],
      },
      {
        title: "Basketball – UWCSEA Dover",
        date: "2023 – 2025",
        bullets: [
          "Captain, Junior Varsity Basketball Team",
          "Top scorer and rebounder for team in inter-school tournament (ACSIS)",
        ],
      },
      {
        title: "Softball – UWCSEA Dover",
        date: "Feb – Apr 2025",
        bullets: ["Member, Junior Varsity Softball Team"],
      },
    ],
  },
  {
    heading: "Other Extracurricular Involvement",
    entries: [
      {
        title: "Model United Nations (MUN)",
        bullets: [
          "Recognised for articulate debate, evidence-based negotiation, and leadership in resolution drafting",
          "Represented DPRK in the Disarmament and International Security Committee (DISEC), contributing to discussions on global arms control",
          "Represented Mauritania in the United Nations Security Council, debating pressing global security issues",
        ],
      },
    ],
  },
  {
    heading: "Certifications & Training",
    bullets: [
      "Bronze Medallion Lifeguard Certification – Singapore Lifesaving Society",
      "CPR Certified – First Aid & Emergency Response",
      "Awesome Math Algebra I 1.5 – Advanced coursework in abstract mathematical reasoning",
    ],
  },
  {
    heading: "Community Engagement",
    entries: [
      {
        title: "Volunteer Math Tutor – Residential Community",
        bullets: [
          "Delivered weekly 1-on-1 instruction in arithmetic and logical reasoning to primary school students",
          "Focused on building core skills and confidence through tailored, concept-driven sessions",
        ],
      },
      {
        title: "Ummeed Global Concern Service (UWCSEA)",
        date: "2024 – Present",
        sub: [
          {
            title: "Chair, Ummeed GC",
            date: "Nov 2025 – Present",
            bullets: [
              "Appointed to chair the Ummeed Global Concerns initiative at UWCSEA",
              "Raised $2,000+ while affiliated with the program",
              "Overseeing planning and execution of service activities focused on supporting children with developmental disabilities in Mumbai",
              "Coordinate student teams, fundraising efforts, and awareness initiatives",
            ],
          },
          {
            title: "Global Concerns Officer",
            date: "2024 – 2025",
            bullets: [
              "Involved in Global Concerns Service initiative that seeks to empower and help children in Mumbai with developmental disabilities; working closely with a centre that provides specialised care for children with disabilities such as Down syndrome and autism",
              "Participated in fundraisers and efforts to spread awareness through bake sales, food stalls, games, posters and school fairs",
            ],
          },
        ],
      },
      {
        title: "Coach-Mentor, Genesis Special School Integration Program: Service (UWCSEA)",
        date: "2025 – Present",
        bullets: [
          "Mentored primary school students during weekly inclusion sessions with children from Genesis Special School (for students with multiple disabilities)",
          "Planned and led interactive learning and play activities to promote empathy, understanding, and inclusion among all participants",
          "Modelled positive peer interaction and guided student reflections to deepen awareness of diversity and social responsibility",
        ],
      },
    ],
  },
  {
    heading: "Technical Skills",
    bullets: [
      "Programming: Python",
      "Analytics: statistical modelling, performance metrics, spatial analysis",
      "Tools: Excel, Streamlit, GitHub",
      "Domains: sports analytics, performance evaluation",
    ],
  },
  {
    heading: "Languages",
    bullets: ["English – Fluent", "Hindi – Proficient", "Spanish – Conversational"],
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-2">
      {items.map((b) => (
        <li key={b} className="relative pl-5 text-[15px] leading-relaxed text-ink/80">
          <span className="absolute left-0 top-[0.6em] size-1.5 rounded-full bg-accent" />
          {b}
        </li>
      ))}
    </ul>
  );
}

function EntryBlock({ e, nested = false }: { e: Entry; nested?: boolean }) {
  return (
    <div className={nested ? "mt-6 pl-5 border-l border-ink/15" : "mt-8 first:mt-0"}>
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
        <h3 className={`font-serif leading-snug ${nested ? "text-lg" : "text-xl"}`}>{e.title}</h3>
        {e.date && <span className="type-mono text-muted-foreground shrink-0">{e.date}</span>}
      </div>
      {e.bullets && <Bullets items={e.bullets} />}
      {e.sub?.map((s) => <EntryBlock key={s.title} e={s} nested />)}
    </div>
  );
}

function Resume() {
  return (
    <Page>
      <section className="pt-32 md:pt-40 pb-28 px-6 md:px-12 bg-surface">
        <div className="mx-auto max-w-[960px]">
          <Reveal>
            <span className="type-eyebrow">Résumé</span>
            <h1 className="type-h2 mt-6">Yuvaan <em className="font-display">Pandey.</em></h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 type-mono text-muted-foreground">
              <span>Singapore</span>
              <a href="mailto:yuvaanpandey@gmail.com" className="link-underline">yuvaanpandey@gmail.com</a>
              <a href="tel:+6597230209" className="link-underline">+65 9723 0209</a>
            </div>
          </Reveal>

          <div className="mt-14 bg-white border border-border">
            {resume.map((s) => (
              <Reveal key={s.heading}>
                <section className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 p-6 md:p-10 border-b border-border last:border-b-0">
                  <h2 className="type-mono text-accent pt-1">{s.heading}</h2>
                  <div>
                    {s.bullets && <Bullets items={s.bullets} />}
                    {s.entries?.map((e) => <EntryBlock key={e.title} e={e} />)}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Page>
  );
}
