import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import heroSapphire from "@/assets/hero-sapphire.jpg";
import gemSapphire from "@/assets/gem-sapphire.jpg";
import gemRuby from "@/assets/gem-ruby.jpg";
import gemEmerald from "@/assets/gem-emerald.jpg";
import gemYellow from "@/assets/gem-yellow.jpg";
import blogMining from "@/assets/blog-mining.jpg";
import blogLab from "@/assets/blog-lab.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

/* ---------- data ---------- */

const NAV = [
  "Home", "About Us", "Gemstones", "Collections",
  "Certifications", "Services", "Blog", "Contact",
];

const CATEGORIES: { name: string; tint: string; count: number; note: string }[] = [
  { name: "Blue Sapphire", tint: "from-[oklch(0.4_0.16_260)] to-[oklch(0.65_0.18_245)]", count: 428, note: "Royal & cornflower" },
  { name: "Pink Sapphire", tint: "from-[oklch(0.55_0.18_10)] to-[oklch(0.78_0.12_20)]", count: 116, note: "Fancy vivid pink" },
  { name: "Yellow Sapphire", tint: "from-[oklch(0.7_0.16_85)] to-[oklch(0.88_0.14_95)]", count: 204, note: "Golden canary" },
  { name: "Ruby", tint: "from-[oklch(0.45_0.22_25)] to-[oklch(0.6_0.24_20)]", count: 87, note: "Pigeon blood" },
  { name: "Emerald", tint: "from-[oklch(0.42_0.12_160)] to-[oklch(0.6_0.16_155)]", count: 74, note: "Muzo & Colombian" },
  { name: "Cat's Eye", tint: "from-[oklch(0.55_0.08_95)] to-[oklch(0.78_0.09_90)]", count: 39, note: "Chatoyant chrysoberyl" },
  { name: "Alexandrite", tint: "from-[oklch(0.4_0.1_160)] to-[oklch(0.5_0.14_320)]", count: 12, note: "Color change rarity" },
  { name: "Garnet", tint: "from-[oklch(0.4_0.16_30)] to-[oklch(0.55_0.18_40)]", count: 58, note: "Rhodolite & tsavorite" },
  { name: "Spinel", tint: "from-[oklch(0.5_0.16_15)] to-[oklch(0.7_0.14_5)]", count: 66, note: "Mahenge & jedi" },
  { name: "Topaz", tint: "from-[oklch(0.75_0.1_75)] to-[oklch(0.88_0.06_230)]", count: 92, note: "Imperial & sky" },
  { name: "Moonstone", tint: "from-[oklch(0.9_0.02_220)] to-[oklch(0.75_0.04_240)]", count: 143, note: "Blue adularescence" },
  { name: "Aquamarine", tint: "from-[oklch(0.78_0.08_215)] to-[oklch(0.9_0.05_210)]", count: 71, note: "Santa Maria" },
  { name: "Tourmaline", tint: "from-[oklch(0.55_0.15_150)] to-[oklch(0.6_0.18_355)]", count: 89, note: "Paraiba & rubellite" },
  { name: "Zircon", tint: "from-[oklch(0.65_0.15_215)] to-[oklch(0.8_0.12_195)]", count: 47, note: "Ceylon zircon" },
  { name: "Quartz", tint: "from-[oklch(0.85_0.04_320)] to-[oklch(0.7_0.1_290)]", count: 128, note: "Amethyst & citrine" },
  { name: "Other Rare Gems", tint: "from-[oklch(0.35_0.08_260)] to-[oklch(0.55_0.12_75)]", count: 31, note: "Taaffeite, sphene…" },
];

const WHY = [
  ["Certified Natural Gems", "Every stone verified by GIA, GRS, IGI or Lotus Gemology."],
  ["International Shipping", "Insured door-to-door delivery to 120+ countries."],
  ["Secure Payments", "Bank wire, card and escrow options with full buyer protection."],
  ["Laboratory Certificates", "Independent, non-branded reports included with every gem."],
  ["Ethical Sourcing", "Direct mine-to-market chain from Ratnapura artisan miners."],
  ["Trusted Seller", "Four decades serving jewelers, wholesalers and collectors."],
  ["Competitive Pricing", "Direct-from-source pricing without wholesale markups."],
  ["Expert Consultation", "In-house gemologists for bespoke sourcing requests."],
  ["Lifetime Support", "Recut, repolish and appraisal services for original clients."],
];

const PRODUCTS = [
  {
    img: gemSapphire, tone: "sapphire",
    name: "Royal Blue Ceylon Sapphire", carats: "4.28 ct", shape: "Cushion",
    color: "Vivid Royal Blue", clarity: "Eye-clean", origin: "Ratnapura, Sri Lanka",
    treatment: "Unheated", cert: "GRS Platinum", price: "$28,400", stock: "1 in stock",
  },
  {
    img: gemRuby, tone: "ruby",
    name: "Pigeon Blood Ruby", carats: "2.15 ct", shape: "Oval",
    color: "Vivid Red", clarity: "VS", origin: "Mogok, Burma",
    treatment: "Heat only", cert: "GRS Type I", price: "$41,900", stock: "1 in stock",
  },
  {
    img: gemEmerald, tone: "emerald",
    name: "Muzo Colombian Emerald", carats: "3.62 ct", shape: "Emerald",
    color: "Vivid Green", clarity: "VVS", origin: "Muzo, Colombia",
    treatment: "Minor oil", cert: "GIA + Lotus", price: "$34,750", stock: "1 in stock",
  },
  {
    img: gemYellow, tone: "gold",
    name: "Golden Yellow Sapphire", carats: "5.10 ct", shape: "Round",
    color: "Golden Canary", clarity: "IF", origin: "Ceylon",
    treatment: "Unheated", cert: "GIA", price: "$12,900", stock: "2 in stock",
  },
];

const CERTS = ["GIA", "GRS", "IGI", "GIC", "Lotus Gemology", "SSEF", "Local Gem Authority"];

const PROCESS = [
  ["01", "Artisanal Mining", "Responsibly extracted from the alluvial pits of Ratnapura by traditional miners."],
  ["02", "Expert Selection", "Master gemologists hand-select rough for color, clarity and fire potential."],
  ["03", "Laboratory Testing", "Independent labs verify natural origin, treatments and country of provenance."],
  ["04", "Certification", "Full graded reports from GIA, GRS, Lotus or SSEF accompany every stone."],
  ["05", "Studio Photography", "Calibrated macro capture — what you see is precisely what you receive."],
  ["06", "Secure Packaging", "Tamper-evident sealed cases with insured, tracked international courier."],
  ["07", "Worldwide Delivery", "White-glove door-to-door to 120+ countries within 3–5 business days."],
];

const TESTIMONIALS = [
  {
    name: "Elisabeth Moreau", country: "Paris, France", rating: 5,
    text: "The unheated Ceylon sapphire I acquired exceeded even the archival photography. Impeccable service from acquisition to delivery.",
    gem: "3.4ct Royal Blue Sapphire",
  },
  {
    name: "Rajesh Mehta", country: "Mumbai, India", rating: 5,
    text: "As a wholesaler for two decades, I have not found a more reliable partner for certified Sri Lankan material. Consistent quality, honest disclosure.",
    gem: "Parcel of 14 sapphires",
  },
  {
    name: "James Whitfield", country: "London, UK", rating: 5,
    text: "A discreet, professional acquisition of a museum-grade Padparadscha for a private commission. Everything handled with quiet excellence.",
    gem: "5.02ct Padparadscha",
  },
];

const COUNTRIES = [
  "United States", "United Kingdom", "France", "Germany", "Switzerland",
  "Japan", "Singapore", "Australia", "UAE", "Hong Kong", "Canada", "India",
];

const BLOG = [
  { tag: "Field Report", img: blogMining, title: "Inside the alluvial pits of Ratnapura", excerpt: "How Sri Lanka's artisan miners still find world-class rough by hand — and why it matters for provenance." },
  { tag: "Gemology", img: blogLab, title: "Understanding the GRS 'Vivid' color grade", excerpt: "A working guide to color-grade terminology on independent laboratory reports for sapphires and rubies." },
  { tag: "Investment", img: heroSapphire, title: "Why unheated sapphires appreciate", excerpt: "A ten-year price study of unheated Ceylon material at major auction houses across Europe and Asia." },
];

const FAQ = [
  ["Are all your gemstones natural?", "Yes. Every gemstone we list is 100% natural, mined earth, with treatments (if any) fully disclosed on the certificate."],
  ["Do you ship internationally?", "We ship fully insured to 120+ countries via FedEx, Malca-Amit and Brinks with door-to-door tracking."],
  ["Can I return a stone?", "Yes — 14-day inspection window with a no-questions-refund policy provided the certificate seal is intact."],
  ["Do you accept custom sourcing?", "Absolutely. Our gemologists locate specific colors, sizes and origins for jewelry designers and collectors."],
];

/* ---------- helpers ---------- */

function GoldRule({ className = "" }: { className?: string }) {
  return <div className={`hairline ${className}`} aria-hidden />;
}

function Icon({ path, className = "size-4" }: { path: string; className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </svg>
  );
}

/* ---------- component ---------- */

function Index() {
  return (
    <div className="min-h-dvh bg-background text-foreground selection:bg-gold/20 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <WhyUs />
        <Featured />
        <Certifications />
        <Process />
        <Testimonials />
        <Shipping />
        <BlogPreview />
        <Newsletter />
        <Instagram />
        <FAQPreview />
        <ContactCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* ---------- 1. Header ---------- */

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      {/* Announcement strip */}
      <div className="bg-primary text-primary-foreground text-[11px] tracking-[0.2em] uppercase text-center py-2 font-medium">
        Complimentary insured worldwide shipping on all certified gemstones
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <span className="grid place-items-center size-9 rounded-full bg-[image:var(--gradient-sapphire)] text-white font-display text-lg italic shadow-[var(--shadow-luxury)]">A</span>
          <span className="font-display text-xl sm:text-2xl tracking-tight leading-none">
            <span className="text-primary">Aurum</span>
            <span className="text-gold ml-1 italic font-medium">Ceylon</span>
          </span>
        </a>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-7 text-[11px] uppercase tracking-[0.18em] font-medium text-muted-foreground">
          {NAV.map((n) => (
            <a key={n} href="#" className="hover:text-primary transition-colors">
              {n}
            </a>
          ))}
        </nav>

        {/* Utility */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <div className="hidden md:flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground border-r border-border pr-3 mr-1">
            <button className="hover:text-primary transition-colors">EN</button>
            <span className="opacity-30">·</span>
            <button className="hover:text-primary transition-colors">USD $</button>
          </div>
          <IconBtn label="Search" path="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
          <IconBtn label="Account" path="M16 14a4 4 0 10-8 0M20 21a8 8 0 10-16 0" />
          <IconBtn label="Wishlist" path="M12 21s-7-4.35-7-10a4 4 0 017-2.646A4 4 0 0119 11c0 5.65-7 10-7 10z" />
          <IconBtn label="Cart" path="M6 6h15l-1.5 9h-13zM6 6L5 3H2m4 3l1.5 9m0 0a2 2 0 104 0m5 0a2 2 0 104 0" badge="2" />
          <a
            href="https://wa.me/94770000000"
            className="hidden sm:inline-flex items-center gap-2 ml-2 pl-3 pr-4 py-2 rounded-full bg-emerald text-white text-[11px] uppercase tracking-[0.15em] font-semibold shadow-[var(--shadow-card)] hover:opacity-90 transition-opacity"
          >
            <Icon className="size-3.5" path="M20 15.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 23l1.9-4.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            WhatsApp
          </a>

          {/* Mobile Navigation Drawer */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open navigation menu"
                className="lg:hidden p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] flex flex-col justify-between p-6">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Mobile navigation links</SheetDescription>
              <div className="mt-8 flex flex-col gap-6">
                <a href="#" className="flex items-center gap-2 mb-4">
                  <span className="grid place-items-center size-9 rounded-full bg-[image:var(--gradient-sapphire)] text-white font-display text-lg italic">A</span>
                  <span className="font-display text-xl tracking-tight">
                    <span className="text-primary font-semibold">Aurum</span>
                    <span className="text-gold ml-1 italic font-medium">Ceylon</span>
                  </span>
                </a>
                <nav className="flex flex-col gap-4 text-xs uppercase tracking-widest font-semibold text-muted-foreground">
                  {NAV.map((n) => (
                    <a key={n} href="#" className="hover:text-primary transition-colors py-2 border-b border-border/40">
                      {n}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex flex-col gap-4 pt-6 border-t border-border text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <button className="hover:text-primary transition-colors">EN</button>
                  <span className="opacity-30">·</span>
                  <button className="hover:text-primary transition-colors">USD $</button>
                </div>
                <a
                  href="https://wa.me/94770000000"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-full bg-emerald text-white text-[10px] uppercase tracking-wider font-semibold"
                >
                  <Icon className="size-3.5" path="M20 15.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 23l1.9-4.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                  WhatsApp
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function IconBtn({ label, path, badge }: { label: string; path: string; badge?: string }) {
  return (
    <button
      aria-label={label}
      className="relative p-2 rounded-full text-foreground/70 hover:text-primary hover:bg-secondary transition-colors"
    >
      <Icon path={path} />
      {badge && (
        <span className="absolute -top-0.5 -right-0.5 min-w-4 h-4 px-1 rounded-full bg-gold text-white text-[9px] font-bold grid place-items-center">
          {badge}
        </span>
      )}
    </button>
  );
}

/* ---------- 2. Hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden gem-shine">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center pt-16 pb-24 lg:pt-24 lg:pb-32">
        {/* Copy */}
        <div className="lg:col-span-6 animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-8 text-[10px] uppercase tracking-[0.3em] text-gold font-semibold">
            <span className="size-1.5 rounded-full bg-gold" />
            Est. 1984 · Ratnapura, Sri Lanka
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance text-primary">
            Discover authentic{" "}
            <span className="italic text-emerald">natural gemstones</span>{" "}
            from Sri Lanka
          </h1>
          <p className="mt-8 max-w-lg text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Ethically mined, laboratory-certified, and hand-selected by master gemologists.
            Serving collectors, jewelers and investors across 120+ countries with insured worldwide delivery.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#collection" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-xs uppercase tracking-[0.18em] font-semibold shadow-[var(--shadow-luxury)] hover:translate-y-[-1px] transition-transform">
              Explore collection
              <Icon className="size-3.5" path="M5 12h14M13 5l7 7-7 7" />
            </a>
            <a href="#quote" className="inline-flex items-center gap-2 border border-border px-7 py-4 rounded-full text-xs uppercase tracking-[0.18em] font-semibold hover:border-primary hover:text-primary transition-colors">
              Request a quote
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-4 text-xs uppercase tracking-[0.18em] font-semibold text-emerald hover:opacity-80">
              Contact an expert
              <Icon className="size-3.5" path="M5 12h14M13 5l7 7-7 7" />
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-14 grid grid-cols-3 gap-6 max-w-lg">
            {[
              ["40+", "Years of trust"],
              ["15k", "Certified gems"],
              ["120", "Countries served"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl md:text-4xl italic text-emerald">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] w-full max-w-lg mx-auto">
            <div className="absolute inset-0 rounded-[2rem] bg-[image:var(--gradient-hero)] blur-3xl opacity-70" aria-hidden />
            <img
              src={heroSapphire}
              alt="Certified Royal Blue Ceylon Sapphire, cushion cut, on cream silk"
              width={1600}
              height={1200}
              className="relative rounded-[2rem] w-full h-full object-cover shadow-[var(--shadow-luxury)] ring-1 ring-black/5"
            />

            {/* Floating cards */}
            <div className="absolute -top-4 left-2 sm:-left-4 md:-left-10 bg-card/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[var(--shadow-card)] ring-1 ring-border animate-float">
              <div className="text-[9px] uppercase tracking-[0.2em] text-gold font-semibold">Featured</div>
              <div className="mt-1 font-display text-lg leading-tight">Royal Blue Sapphire</div>
              <div className="text-[11px] text-muted-foreground">4.28 ct · Unheated · GRS</div>
            </div>
            <div className="absolute -bottom-6 right-2 sm:-right-4 md:-right-10 bg-card/95 backdrop-blur-md rounded-2xl px-5 py-4 shadow-[var(--shadow-card)] ring-1 ring-border animate-float [animation-delay:1s]">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-full bg-emerald-soft grid place-items-center text-emerald">
                  <Icon className="size-4" path="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-muted-foreground">Verified</div>
                  <div className="text-sm font-semibold text-primary">GIA · GRS · Lotus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Trust bar (marquee of labs) ---------- */

function TrustBar() {
  const items = [...CERTS, ...CERTS];
  return (
    <section aria-label="Certification laboratories" className="border-y border-border bg-cream/50 overflow-hidden">
      <div className="flex gap-16 animate-marquee py-6 whitespace-nowrap">
        {items.map((c, i) => (
          <span key={i} className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground/70 font-semibold">
            {c} · Certified Partner
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------- 3. Categories ---------- */

function Categories() {
  return (
    <section id="collection" className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div className="max-w-xl">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">The Collection</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-primary">
            Sixteen varieties, <span className="italic text-emerald">one standard</span>
          </h2>
          <p className="mt-5 text-muted-foreground max-w-md">
            Browse our vault by species. Every gemstone is natural, individually photographed, and paired with an independent laboratory report.
          </p>
        </div>
        <a href="#" className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary border-b border-gold pb-1 self-start md:self-auto">
          Browse all gemstones →
        </a>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
        {CATEGORIES.map((c) => (
          <a
            key={c.name}
            href="#"
            className="group relative overflow-hidden rounded-2xl bg-card ring-1 ring-border shadow-[var(--shadow-card)] hover:-translate-y-1 transition-transform duration-500 ease-out"
          >
            <div className={`aspect-square bg-gradient-to-br ${c.tint} relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />
              <div className="absolute inset-0 opacity-20 mix-blend-screen bg-[radial-gradient(circle_at_75%_80%,white,transparent_45%)]" />
              <div className="absolute top-3 right-3 text-[9px] uppercase tracking-widest text-white/90 font-semibold bg-black/20 backdrop-blur px-2 py-1 rounded-full">
                {c.count} avail.
              </div>
            </div>
            <div className="p-3 sm:p-4">
              <div className="font-display text-lg md:text-xl leading-tight text-primary">{c.name}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5 truncate">{c.note}</div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold group-hover:text-primary transition-colors">
                  Explore →
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

/* ---------- 4. Why Us ---------- */

function WhyUs() {
  return (
    <section className="bg-cream/60 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
        <div className="max-w-2xl mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">Why Aurum</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-primary">
            Provenance, transparency, and quiet <span className="italic text-emerald">expertise</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 sm:gap-y-12">
          {WHY.map(([title, body], i) => (
            <div key={title} className="group">
              <div className="flex items-center gap-4 mb-4">
                <span className="font-display italic text-lg text-gold w-8">{String(i + 1).padStart(2, "0")}</span>
                <span className="flex-1 hairline" />
              </div>
              <h3 className="font-display text-2xl text-primary mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Featured Gemstones ---------- */

function Featured() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">New Acquisitions</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-primary">
            Exceptional stones, <span className="italic text-emerald">hand-selected</span>
          </h2>
        </div>
        <a href="#" className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary border-b border-gold pb-1 self-start md:self-auto">
          View full catalog →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {PRODUCTS.map((p) => (
          <article
            key={p.name}
            className="group flex flex-col rounded-2xl bg-card ring-1 ring-border shadow-[var(--shadow-card)] overflow-hidden hover:shadow-[var(--shadow-luxury)] transition-shadow duration-500"
          >
            <div className="relative aspect-square bg-cream overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                <span className="bg-background/95 backdrop-blur text-[9px] uppercase tracking-widest font-bold text-primary px-2 py-1 rounded-full ring-1 ring-border">
                  {p.cert}
                </span>
                <span className="bg-emerald/10 text-emerald text-[9px] uppercase tracking-widest font-bold px-2 py-1 rounded-full">
                  {p.stock}
                </span>
              </div>
              <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                <IconChip label="Wishlist" path="M12 21s-7-4.35-7-10a4 4 0 017-2.646A4 4 0 0119 11c0 5.65-7 10-7 10z" />
                <IconChip label="Compare" path="M3 6h13m-13 6h13m-13 6h13M20 4v16" />
                <IconChip label="Quick view" path="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z" />
              </div>
            </div>

            <div className="flex flex-col flex-1 p-5">
              <h3 className="font-display text-xl text-primary leading-tight">{p.name}</h3>
              <div className="mt-4 grid grid-cols-2 gap-y-2 gap-x-3 text-[11px]">
                <Spec k="Carat" v={p.carats} />
                <Spec k="Shape" v={p.shape} />
                <Spec k="Color" v={p.color} />
                <Spec k="Clarity" v={p.clarity} />
                <Spec k="Origin" v={p.origin} />
                <Spec k="Treatment" v={p.treatment} />
              </div>
              <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                <span className="font-display italic text-xl text-emerald">{p.price}</span>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Ex. shipping</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="bg-primary text-primary-foreground text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold py-2.5 sm:py-3 rounded-full hover:bg-primary/90 transition">
                  Add to cart
                </button>
                <button className="border border-border text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold py-2.5 sm:py-3 rounded-full hover:border-primary hover:text-primary transition">
                  Request quote
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Spec({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{k}</div>
      <div className="text-foreground font-medium truncate">{v}</div>
    </div>
  );
}

function IconChip({ label, path }: { label: string; path: string }) {
  return (
    <button
      aria-label={label}
      className="grid place-items-center size-9 rounded-full bg-background/95 backdrop-blur ring-1 ring-border text-foreground/70 hover:text-primary hover:ring-primary transition"
    >
      <Icon path={path} className="size-3.5" />
    </button>
  );
}

/* ---------- 6. Certifications ---------- */

function Certifications() {
  return (
    <section className="bg-cream/60 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">Certifications</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-primary mb-6">
              Independently verified by the world's{" "}
              <span className="italic text-emerald">leading laboratories</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mb-8">
              Every stone in our vault ships with an unbranded, independent laboratory report — never our own.
              We provide full disclosure on origin, treatments and clarity characteristics.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <GuaranteeCard title="100% Natural" body="Every gem earth-mined, never synthetic." />
              <GuaranteeCard title="Money-back" body="14-day full-refund inspection window." />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {CERTS.map((c) => (
              <div
                key={c}
                className="aspect-[4/3] rounded-2xl bg-background ring-1 ring-border grid place-items-center p-3 sm:p-4 shadow-[var(--shadow-card)] hover:ring-gold transition-colors"
              >
                <div className="text-center">
                  <div className="font-display text-2xl text-primary tracking-tight">{c}</div>
                  <div className="text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                    Certified Partner
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GuaranteeCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-2xl bg-background ring-1 ring-border p-4 sm:p-5 shadow-[var(--shadow-card)]">
      <div className="size-9 rounded-full bg-gold-soft grid place-items-center text-gold mb-3">
        <Icon path="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </div>
      <div className="font-display text-base sm:text-lg text-primary">{title}</div>
      <div className="text-[11px] sm:text-xs text-muted-foreground mt-1">{body}</div>
    </div>
  );
}

/* ---------- 7. Process ---------- */

function Process() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">Our Process</div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-primary">
          From the earth of Ceylon <br className="hidden sm:block" />
          <span className="italic text-emerald">to your hand</span>
        </h2>
      </div>

      <ol className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6">
        <div className="hidden lg:block absolute top-6 left-[7%] right-[7%] h-px bg-gradient-to-r from-transparent via-gold to-transparent" aria-hidden />
        {PROCESS.map(([n, title, body]) => (
          <li key={n} className="relative">
            <div className="grid place-items-center size-12 rounded-full bg-background ring-1 ring-border shadow-[var(--shadow-card)] mx-auto lg:mx-0 mb-4 font-display italic text-lg text-gold">
              {n}
            </div>
            <h4 className="font-display text-lg text-primary text-center lg:text-left">{title}</h4>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed text-center lg:text-left">{body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

/* ---------- 8. Testimonials ---------- */

function Testimonials() {
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,oklch(0.55_0.15_245/0.5),transparent_60%)]" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
        <div className="max-w-2xl mb-16">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">Client Testimonials</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
            Trusted by collectors <span className="italic text-gold">worldwide</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl bg-white/5 backdrop-blur-md ring-1 ring-white/10 p-8 flex flex-col">
              <div className="flex gap-1 text-gold mb-5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg key={i} className="size-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <blockquote className="font-display italic text-lg sm:text-xl leading-relaxed text-primary-foreground/90 flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="size-10 rounded-full bg-[image:var(--gradient-gold)] grid place-items-center text-primary font-display text-base">
                  {t.name.split(" ").map((s) => s[0]).join("")}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{t.name}</div>
                  <div className="text-[10px] uppercase tracking-widest text-primary-foreground/60 truncate">
                    {t.country} · {t.gem}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. Worldwide Shipping ---------- */

function Shipping() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">Worldwide Shipping</div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-primary mb-6">
            Fully insured delivery to <span className="italic text-emerald">120+ countries</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Every shipment is tracked, insured to full declared value, and dispatched via FedEx, Malca-Amit or Brinks with signature confirmation.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {COUNTRIES.map((c) => (
              <div key={c} className="flex items-center gap-2 text-sm text-foreground/80">
                <span className="size-1.5 rounded-full bg-gold shrink-0" />
                <span className="truncate">{c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-3xl bg-[image:var(--gradient-hero)] ring-1 ring-border p-8 grid place-items-center overflow-hidden shadow-[var(--shadow-card)]">
          {/* Stylised world map dots */}
          <svg viewBox="0 0 200 100" className="w-full h-full text-primary/60" aria-hidden>
            <defs>
              <pattern id="dots" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="0.5" fill="currentColor" opacity="0.35" />
              </pattern>
            </defs>
            <path d="M20,55 Q30,35 45,40 T80,45 Q95,25 110,35 T150,40 Q165,30 180,45 L180,70 Q160,80 140,72 T100,75 Q75,85 55,75 T25,72 Z" fill="url(#dots)" />
            {/* pins */}
            {[[38,52],[70,44],[95,50],[125,42],[155,48],[100,66],[140,58]].map(([x,y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="2.5" className="fill-gold" />
                <circle cx={x} cy={y} r="5" className="fill-gold/20 animate-ping" />
              </g>
            ))}
          </svg>
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 flex items-center justify-between bg-background/90 backdrop-blur rounded-full ring-1 ring-border px-4 py-2.5 sm:px-5 sm:py-3">
            <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-muted-foreground">Avg. delivery</div>
            <div className="font-display text-base sm:text-lg text-primary">3–5 business days</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. Blog ---------- */

function BlogPreview() {
  return (
    <section className="bg-cream/60 border-y border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">The Journal</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-primary">
              Notes from the <span className="italic text-emerald">gemologist's desk</span>
            </h2>
          </div>
          <a href="#" className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary border-b border-gold pb-1 self-start md:self-auto">
            Read all articles →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG.map((b) => (
            <article key={b.title} className="group flex flex-col">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-border mb-5 bg-cream">
                <img src={b.img} alt={b.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold mb-2">{b.tag}</div>
              <h3 className="font-display text-2xl text-primary leading-tight mb-3 group-hover:italic transition-all">
                {b.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.excerpt}</p>
              <a href="#" className="mt-4 text-[11px] uppercase tracking-[0.2em] font-semibold text-emerald">
                Continue reading →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. Newsletter ---------- */

function Newsletter() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-24 text-center">
      <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">The Collector's List</div>
      <h2 className="font-display text-4xl md:text-5xl leading-tight text-primary mb-4">
        Early access to <span className="italic text-emerald">new acquisitions</span>
      </h2>
      <p className="text-muted-foreground max-w-lg mx-auto mb-8">
        Receive private previews of rare stones before they reach the public catalog, plus monthly market notes from our gemologists.
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2 max-w-lg mx-auto">
        <input
          type="email"
          required
          placeholder="you@example.com"
          aria-label="Email address"
          className="flex-1 bg-background ring-1 ring-border rounded-full px-5 py-4 text-sm focus:outline-none focus:ring-gold transition"
        />
        <button className="bg-primary text-primary-foreground px-7 py-4 rounded-full text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-primary/90 transition">
          Subscribe
        </button>
      </form>
      <div className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">No spam · unsubscribe anytime</div>
    </section>
  );
}

/* ---------- 12. Instagram ---------- */

function Instagram() {
  const tiles = [gemSapphire, gemRuby, gemEmerald, gemYellow, heroSapphire, blogMining, blogLab, gemSapphire];
  return (
    <section className="bg-cream/60 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20">
        <div className="text-center mb-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">@aurum.ceylon</div>
          <h2 className="font-display text-3xl md:text-4xl text-primary">
            Follow our <span className="italic text-emerald">workshop</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
          {tiles.map((t, i) => (
            <a key={i} href="#" className="group relative aspect-square overflow-hidden rounded-xl ring-1 ring-border">
              <img src={t} alt="" loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 grid place-items-center transition-colors">
                <Icon className="size-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" path="M4 4h16v16H4z M8 4v16 M16 4v16 M4 8h16 M4 16h16" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 13. FAQ ---------- */

function FAQPreview() {
  return (
    <section className="mx-auto max-w-4xl px-4 sm:px-6 py-24 lg:py-32">
      <div className="text-center mb-14">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">FAQ</div>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl leading-tight text-primary">
          Answers to <span className="italic text-emerald">common questions</span>
        </h2>
      </div>
      <div className="divide-y divide-border border-y border-border">
        {FAQ.map(([q, a], i) => (
          <details key={i} className="group py-6" open={i === 0}>
            <summary className="flex items-center justify-between cursor-pointer list-none gap-6">
              <span className="font-display text-lg sm:text-xl md:text-2xl text-primary">{q}</span>
              <span className="grid place-items-center size-8 rounded-full ring-1 ring-border text-gold shrink-0 transition-transform group-open:rotate-45">
                <Icon className="size-4" path="M12 5v14M5 12h14" />
              </span>
            </summary>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-2xl">{a}</p>
          </details>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#" className="text-[11px] uppercase tracking-[0.25em] font-semibold text-primary border-b border-gold pb-1">
          View all FAQs →
        </a>
      </div>
    </section>
  );
}

/* ---------- 14. Contact CTA ---------- */

function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl bg-[image:var(--gradient-sapphire)] text-white p-6 sm:p-10 md:p-16 shadow-[var(--shadow-luxury)]">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_80%_20%,oklch(0.72_0.11_75/0.6),transparent_50%)]" aria-hidden />
        <div className="relative grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-center">
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold font-semibold mb-4">Private Consultation</div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-white">
              Speak with a master <span className="italic text-gold">gemologist</span>
            </h2>
            <p className="mt-6 text-white/80 max-w-lg">
              Custom sourcing, investment-grade acquisitions, or bespoke jewelry projects — our team is available across every time zone.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="inline-flex items-center justify-between gap-4 bg-background text-primary px-6 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-cream transition">
              Book a consultation
              <Icon className="size-4" path="M5 12h14M13 5l7 7-7 7" />
            </a>
            <a href="https://wa.me/94770000000" className="inline-flex items-center justify-between gap-4 bg-emerald text-white px-6 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:opacity-90 transition">
              WhatsApp our expert
              <Icon className="size-4" path="M20 15.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 23l1.9-4.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </a>
            <a href="mailto:concierge@aurumceylon.com" className="inline-flex items-center justify-between gap-4 border border-white/30 text-white px-6 py-4 rounded-full text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/10 transition">
              concierge@aurumceylon.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 15. Footer ---------- */

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 mb-16">
          <div className="col-span-1 xs:col-span-2 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="grid place-items-center size-9 rounded-full bg-[image:var(--gradient-gold)] text-primary font-display text-lg italic">A</span>
              <span className="font-display text-2xl">Aurum <span className="italic text-gold">Ceylon</span></span>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-xs mb-6">
              Specialists in natural, ethically sourced gemstones from Sri Lanka since 1984. Serving collectors, jewelers and investors worldwide.
            </p>
            <div className="flex gap-3">
              {["IG", "FB", "in", "YT", "WA"].map((s) => (
                <a key={s} href="#" className="size-9 grid place-items-center rounded-full ring-1 ring-white/20 text-xs font-semibold hover:bg-white hover:text-primary transition">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Gemstones" items={["Blue Sapphire", "Ruby", "Emerald", "Padparadscha", "Alexandrite", "Rare Gems"]} />
          <FooterCol title="Company" items={["About Us", "Our Journal", "Certifications", "Sustainability", "Careers", "Press"]} />
          <FooterCol title="Support" items={["Contact", "Shipping", "Returns", "FAQ", "Care Guide", "Track Order"]} />
          <FooterCol title="Contact" items={["Colombo · Sri Lanka", "concierge@aurumceylon.com", "+94 77 000 0000", "Mon–Sat · 9am–7pm IST"]} />
        </div>

        <GoldRule />

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-4 opacity-70">
            {["VISA", "MC", "AMEX", "WIRE", "ESCROW", "USDC"].map((p) => (
              <span key={p} className="text-[10px] uppercase tracking-[0.2em] font-bold ring-1 ring-white/20 rounded px-2.5 py-1">{p}</span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-4 opacity-70">
            {CERTS.slice(0, 5).map((c) => (
              <span key={c} className="text-[10px] uppercase tracking-[0.25em] font-semibold">{c}</span>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[10px] uppercase tracking-widest text-primary-foreground/50">
          <div>© 2026 Aurum Ceylon. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold">Privacy</a>
            <a href="#" className="hover:text-gold">Terms of Trade</a>
            <a href="#" className="hover:text-gold">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h5 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-6 text-gold">{title}</h5>
      <ul className="space-y-3 text-sm text-primary-foreground/70">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-white transition-colors">{i}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Floating WhatsApp ---------- */

function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/94770000000"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid place-items-center size-14 rounded-full bg-emerald text-white shadow-[var(--shadow-luxury)] hover:scale-105 transition-transform"
    >
      <Icon className="size-6" path="M20 15.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 23l1.9-4.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      <span className="absolute -top-1 -right-1 size-3 rounded-full bg-gold animate-ping" />
    </a>
  );
}
