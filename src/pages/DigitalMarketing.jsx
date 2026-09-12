import React from "react";
import { Link } from "react-router-dom";
import SiteHeader from "../components/SiteHeader";

/**
 * DigitalMarketing — strategy + portfolio.
 *
 * Mirrors mnkmars.wixsite.com/certi/digitalmarketing as an infographic
 * narrative — Strategy → Paid / Owned / Earned channel boards →
 * Analytics — with the source page's actual graphics embedded inline.
 */
const IMG = "/images/digital-marketing";

// Tile component for a channel screenshot with a caption.
function Tile({ src, label }) {
  return (
    <div className="bg-surface-container border border-outline-variant hover:border-primary/40 transition-colors group">
      <div className="aspect-[16/10] overflow-hidden bg-surface-container-lowest">
        <img
          src={`${IMG}/${src}`}
          alt={label}
          loading="lazy"
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
        />
      </div>
      <p className="font-label text-[10px] tracking-[0.2em] uppercase text-on-surface-variant text-center py-3 group-hover:text-primary transition-colors">
        {label}
      </p>
    </div>
  );
}

export default function DigitalMarketing() {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">

      <SiteHeader />

      <main className="pt-32 pb-24">

        {/* ── HERO ──────────────────────────────────────── */}
        <header className="px-8 mb-16 max-w-7xl mx-auto">
          <div className="border-b border-outline-variant pb-12">
            <span className="font-label text-primary text-sm tracking-[0.3em] uppercase block mb-4">
              MARKETING STRATEGY // PAID · OWNED · EARNED
            </span>
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
              Marketing the <span className="text-primary">Idea</span>.<br/>
              Not the Product.
            </h1>
            <p className="mt-8 text-on-surface-variant font-light leading-relaxed max-w-2xl text-lg">
              Three-pillar digital marketing strategy — paid, earned, owned —
              wired through a single analytics layer. The framework we use to
              put animation work in front of the right rooms.
            </p>
          </div>
        </header>

        {/* ── PORTFOLIO BANNER ──────────────────────────── */}
        <section className="px-8 mb-24 max-w-7xl mx-auto">
          <div className="bg-surface-container-high border border-outline-variant p-6 md:p-10">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4 text-center">
              [ PORTFOLIO // SOCIAL_MEDIA · DIGITAL_MARKETING ]
            </p>
            <img src={`${IMG}/dm_03.png`} alt="Social Media Digital Marketing" className="w-full max-w-3xl mx-auto opacity-90" />
          </div>
        </section>

        {/* ── CONTENT VS TRADITIONAL ────────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-1 items-stretch">
            <div className="bg-surface-container border border-primary/30 p-10 flex flex-col justify-between">
              <div>
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  CONTENT MARKETING
                </p>
                <p className="text-2xl md:text-3xl font-headline font-bold tracking-tight leading-tight">
                  Sells the <span className="text-primary">idea</span> of a product.
                </p>
              </div>
              <img src={`${IMG}/dm_04.png`} alt="" className="mt-6 w-40 opacity-80 self-start" />
            </div>
            <div className="bg-surface-container border border-outline-variant p-10 flex flex-col justify-between">
              <div>
                <p className="font-label text-[10px] tracking-[0.4em] text-on-surface-variant uppercase mb-3">
                  TRADITIONAL
                </p>
                <p className="text-2xl md:text-3xl font-headline font-bold tracking-tight leading-tight">
                  Aims to sell the <span className="text-on-surface-variant">product</span>.
                </p>
              </div>
              <img src={`${IMG}/dm_07.png`} alt="" className="mt-6 w-40 opacity-80 self-end" />
            </div>
          </div>
        </section>

        {/* ── STRATEGY INFOGRAPHIC ──────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ FRAMEWORK // STRATEGY ]
            </p>
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tighter leading-none uppercase">
              The <span className="text-primary">strategy</span> map.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl mx-auto">
              Goals, audience, competitors, channels, content — the eight-piece
              loop every campaign runs through.
            </p>
          </div>
          <div className="bg-surface-container border border-outline-variant p-8 md:p-16">
            <img src={`${IMG}/dm_06.png`} alt="Digital marketing strategy framework" className="w-full max-w-4xl mx-auto" />
          </div>
        </section>

        {/* ── PILLAR 1 · PAID MEDIA ───────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ PILLAR 01 // PAID_MEDIA ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                Paid <span className="text-primary">Media</span>.
              </h2>
              <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
                Native and traditional advertising — display, banner, print,
                radio, TV, sponsored social, out-of-home and in-store.
              </p>
            </div>

            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Social Ads</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              <Tile src="dm_14.png" label="LinkedIn Ads" />
              <Tile src="dm_15.png" label="Facebook Ads" />
              <Tile src="dm_16.png" label="Facebook Ad Types" />
              <Tile src="dm_17.png" label="Twitter Ads" />
            </div>

            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Video & Display</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              <Tile src="dm_20.png" label="YouTube Ads" />
              <Tile src="dm_21.png" label="YouTube Display" />
              <Tile src="dm_22.png" label="Yahoo Ads" />
              <Tile src="dm_23.png" label="Yahoo Mail Ads" />
            </div>

            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Influencers & Content</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              <Tile src="dm_26.png" label="Who Are Influencers" />
              <Tile src="dm_27.png" label="Social Media Influencers" />
              <Tile src="dm_28.png" label="Content Copywriting" />
              <Tile src="dm_29.png" label="Content Strategy" />
            </div>

            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Search & Retargeting</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Tile src="dm_34.jpg" label="AdWords" />
              <Tile src="dm_35.png" label="Paid Search Ads" />
              <Tile src="dm_36.jpg" label="Pay-per-Click" />
              <Tile src="dm_37.jpg" label="Redirect Ads" />
            </div>
          </div>
        </section>

        {/* ── PILLAR 2 · OWNED MEDIA ──────────────────── */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
              [ PILLAR 02 // OWNED_MEDIA ]
            </p>
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
              Owned <span className="text-primary">Media</span>.
            </h2>
            <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
              Branded communication that makes a direct connection between
              brand and consumer — sites, blogs, CRM, email, social pages.
            </p>
          </div>

          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Web · Blog · CRM · Email</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
            <Tile src="dm_44.png" label="Responsive Web" />
            <Tile src="dm_45.png" label="Blogs · Articles" />
            <Tile src="dm_46.png" label="Social CRM Process" />
            <Tile src="dm_47.png" label="Email Campaigns" />
          </div>

          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Social Pages</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Tile src="dm_50.png" label="Google+ Profile" />
            <Tile src="dm_49.png" label="LinkedIn Page" />
            <Tile src="dm_51.png" label="Facebook Page" />
            <Tile src="dm_52.png" label="Twitter Site" />
          </div>
        </section>

        {/* ── PILLAR 3 · EARNED MEDIA ─────────────────── */}
        <section className="bg-surface-container-lowest py-24 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto px-8">
            <div className="mb-12">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ PILLAR 03 // EARNED_MEDIA ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                Earned <span className="text-primary">Media</span>.
              </h2>
              <p className="mt-6 text-on-surface-variant font-light max-w-2xl">
                Communication about the brand that isn't managed — exposure
                that comes through word of mouth, organic shares, reviews and
                viral spread.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <Tile src="dm_56.png" label="Blog & Article Mentions" />
              <Tile src="dm_57.png" label="Reviews & Ratings" />
              <Tile src="dm_58.png" label="Likes & Reposts" />
              <Tile src="dm_59.png" label="Viral Shares" />
            </div>
          </div>
        </section>

        {/* ── ANALYTICS ─────────────────────────────── */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center mb-12">
            <div className="lg:col-span-5">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ ANALYTICS // CLOSED LOOP ]
              </p>
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tighter uppercase leading-none">
                What gets<br />measured.
              </h2>
              <p className="mt-6 text-on-surface-variant font-light leading-relaxed">
                Every campaign is wired through one analytics layer — Google
                Analytics, Hootsuite Core, and Power BI sentiment dashboards
                — so the same spend can be evaluated across paid, owned and
                earned channels in one report.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
                {["Clicks", "Traffic", "Comments", "Shares"].map((m) => (
                  <div key={m} className="bg-surface-container border border-outline-variant p-4 text-center">
                    <p className="font-headline text-2xl text-primary font-bold mb-1">·</p>
                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">{m}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-surface-container border border-outline-variant p-6">
                <img src={`${IMG}/dm_62.jpg`} alt="Analysis Strategy" className="w-full" />
              </div>
            </div>
          </div>

          <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-4">// Analytics Stack</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <Tile src="dm_66.jpg" label="Google Analytics" />
            <Tile src="dm_65.png" label="Hootsuite Core" />
            <Tile src="dm_64.png" label="Power BI · Sentiment" />
          </div>
        </section>

        {/* ── RELATED PIPELINES ─────────────────────── */}
        <section className="bg-surface-container-lowest py-24 px-8 border-y border-outline-variant">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                [ RELATED // PIPELINES ]
              </p>
              <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter leading-none uppercase">
                How the work gets made.
              </h2>
              <p className="mt-4 text-on-surface-variant font-light max-w-2xl">
                The strategy frames the campaign — these pipelines deliver the
                creative that runs through it.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              <a
                href="/articles/UGC_Pipeline.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-surface-container border border-outline-variant hover:border-primary/40 hover:bg-surface-container-high p-8 transition-all group"
              >
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  [ FIELD_NOTE // SOCIAL_MEDIA_CONTENT ]
                </p>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                  UGC Pipeline →
                </h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  One Google Sheet row in. One finished UGC, ad, or podcast video
                  out. Vision-graded QA. The factory behind owned + paid social
                  creative.
                </p>
              </a>
              <Link
                to="/commercials"
                className="block bg-surface-container border border-outline-variant hover:border-primary/40 hover:bg-surface-container-high p-8 transition-all group"
              >
                <p className="font-label text-[10px] tracking-[0.4em] text-primary uppercase mb-3">
                  [ PORTFOLIO // PAID_MEDIA ]
                </p>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
                  Ad Commercials & Trailers →
                </h3>
                <p className="text-sm text-on-surface-variant font-light leading-relaxed">
                  Ad commercials, brand promos, trailer visualisations and
                  biomedical explainers — the on-air work that paid campaigns
                  push.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────── */}
        <section className="py-32 px-8 text-center bg-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/30 blur-[140px] rounded-full"></div>
          </div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight text-headline uppercase">
              Need a campaign that<br />actually closes the loop?
            </h2>
            <a href="mailto:nanda@nmediaservices.com" className="nm-btn-primary inline-block font-label uppercase px-12 py-5 font-bold text-sm tracking-widest">
              Brief the Studio →
            </a>
          </div>
        </section>

        <SiteFooter />
      </main>
    </div>
  );
}

function SiteFooter() {
  const CHANNEL = "https://www.youtube.com/@nmediaservices2014";
  return (
    <footer className="bg-surface-container-lowest py-16 px-8 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Contact</p>
          <a href="mailto:nanda@nmediaservices.com" className="block text-sm text-on-surface hover:text-primary transition-colors mb-1">nanda@nmediaservices.com</a>
          <a href="mailto:nmedia.services@gmail.com" className="block text-sm text-on-surface-variant hover:text-primary transition-colors">nmedia.services@gmail.com</a>
        </div>
        <div>
          <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Studio</p>
          <p className="text-sm text-on-surface-variant">Toronto · M6N 4K7 · CA</p>
        </div>
        <div>
          <p className="font-label text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Channels</p>
          <a href={CHANNEL} target="_blank" rel="noopener noreferrer" className="block text-sm text-on-surface-variant hover:text-primary transition-colors">YouTube · @nmediaservices2014</a>
          <a href="https://github.com/NmediaCloud" target="_blank" rel="noopener noreferrer" className="block text-sm text-on-surface-variant hover:text-primary transition-colors mt-1">GitHub · @NmediaCloud</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-outline-variant">
        <p className="text-xs text-on-surface-variant font-label">© Nmedia Inc. · Digital Marketing Strategy</p>
      </div>
    </footer>
  );
}
