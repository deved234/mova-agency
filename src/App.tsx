import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Video,
  Building2,
  TrendingUp,
  Users,
  ChevronRight,
  Flame,
  Info,
  CalendarDays,
  Menu,
  Heart,
  Pill,
  Sparkles,
  ArrowUpRight,
  Sparkle,
  X
} from 'lucide-react';
import { CAMPAIGNS, Campaign } from './data';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import BookingModal from './components/BookingModal';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeAccordionProject, setActiveAccordionProject] = useState<string | null>(null);
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [bookingNiche, setBookingNiche] = useState<string>('General');

  // Filter campaigns based on selected tab
  const filteredCampaigns = selectedCategory === 'all'
    ? CAMPAIGNS
    : CAMPAIGNS.filter(c => c.category === selectedCategory);

  const handleOpenBooking = (niche: string) => {
    setBookingNiche(niche);
    setIsBookingOpen(true);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-black text-white selection:bg-brand selection:text-black">
      
      {/* Background ambient light effects */}
      <div className="hidden md:block absolute top-[10%] left-1/4 w-[500px] h-[500px] bg-brand/5 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="hidden md:block absolute top-[40%] right-10 w-[400px] h-[400px] bg-brand/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      {/* NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 md:h-24 flex items-center justify-between">
          
          <div className="flex items-center">
            <img
              alt="MOVA Logo"
              className="h-20 md:h-25 hover:brightness-125 transition-all cursor-pointer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_05rDrqvx5XehLlmFYB9bjh6InMSZx8RZ_FXkyw_BkDNmu4JpzYonR2DCV_Jc1ZB35y_ij7D2G2ObxvLELIRkrC2obMJVimpXAlzPgun4Jh2AKattzKsKBFM5jy7s54H09QOxdElNCt5vG7varK7kils-grOeDWmTRQ9l_T_bRX9MBwCLxz_2ruZutk_LkKJfPzMVOxrc47D80oXirIPnfRyRUtzUOpJnqPK9448A6CGmdVYts0cDYDF28g6WtPD7ymHnyPH3PcE"
              referrerPolicy="no-referrer"
            />
          </div>

          <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center space-x-12 text-xs md:text-sm font-semibold tracking-wide" id="desktop-navigation">
            <a className="text-gray-400 hover:text-brand transition-all font-bold hover:translate-y-[-1px]" href="#">Home</a>
            <a className="text-gray-400 hover:text-brand transition-all font-bold hover:translate-y-[-1px]" href="#process-section">Services</a>
            <a className="text-brand transition-all font-black hover:brightness-110 underline decoration-2 underline-offset-8" href="#work-section">Our Work</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md border border-white/5 bg-neutral-900/40 text-gray-200 hover:bg-neutral-800 transition-all"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <button
              onClick={() => handleOpenBooking('General')}
              className="hidden lg:inline-flex bg-brand text-black px-6 md:px-8 py-2.5 md:py-3.5 rounded-xl font-black text-xs md:text-sm flex items-center gap-2 hover:bg-white hover:text-black hover:shadow-[0_0_20px_rgba(212,255,0,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95"
              id="nav-book-a-call-button"
            >
              Book a Call
              <ChevronRight className="h-4 w-4 stroke-[3]" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile navigation panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-6 lg:hidden" role="dialog" aria-modal="true">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-between mb-6">
              <img alt="MOVA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_05rDrqvx5XehLlmFYB9bjh6InMSZx8RZ_FXkyw_BkDNmu4JpzYonR2DCV_Jc1ZB35y_ij7D2G2ObxvLELIRkrC2obMJVimpXAlzPgun4Jh2AKattzKsKBFM5jy7s54H09QOxdElNCt5vG7varK7kils-grOeDWmTRQ9l_T_bRX9MBwCLxz_2ruZutk_LkKJfPzMVOxrc47D80oXirIPnfRyRUtzUOpJnqPK9448A6CGmdVYts0cDYDF28g6WtPD7ymHnyPH3PcE" className="h-10" referrerPolicy="no-referrer" />
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 rounded-md border border-white/5">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 text-lg">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-white font-extrabold">Home</a>
              <a href="#process-section" onClick={() => setMobileMenuOpen(false)} className="text-gray-300">Services</a>
              <a href="#work-section" onClick={() => setMobileMenuOpen(false)} className="text-brand font-black">Our Work</a>
            </nav>

            <div className="mt-8">
              <button onClick={() => { setMobileMenuOpen(false); handleOpenBooking('General'); }} className="w-full bg-brand text-black py-3 rounded-xl font-black">Book a Call</button>
            </div>
          </div>
        </div>
      )}

      {/* HERO SECTION */}
      <main className="relative pt-28 sm:pt-36 md:pt-40 pb-20 md:pb-32 overflow-hidden min-h-[80vh] flex flex-col justify-center" id="hero-segment">
        
        {/* Full-bleed Background Mascot Wallpaper */}
        <div className="absolute inset-0 z-0 select-none overflow-hidden" id="hero-bg-media">
          <img
            alt="MOVA Hero Cybernetic Background Wallpaper"
            className="w-full h-full object-cover object-[75%_center] lg:object-[center_right] opacity-100 md:opacity-100 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoBd2ncdKvzPMtgSSOfe5C3hgrLkeFP7NezcGOHsZaGMu8ZDY5AzOKnSMtw47C4aoMTwzsIV_Bt345zdJThuZhIlPS5-miHtw01bGl-z237AEr-xp2pwQrvcLo0c7f86_2moiPmivT1R1LNPkjo42MgVH58xUzeGN2KhtMbwvYTAtA0iYu0u-6TLKLdDLFucl78sokgt7JRvHUeC4ejgIrxYXtYB8VlM_ZsrtaOl5XWK8M4Rh8bzi5WTCO3Z19MG-pVMhBMEwEDy8"
            referrerPolicy="no-referrer"
          />
          {/* Subtle dual gradient filters to guarantee premium typography contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 md:via-black/75 to-transparent z-10-fade"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 z-10-fade-top"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 w-full flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-12 sm:pb-16">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 xl:col-span-7 text-left" id="hero-headline-left">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-3 h-3 rounded-full bg-brand shadow-[0_0_12px_rgba(212,255,0,0.9)] animate-pulse"></span>
                <span className="text-brand uppercase tracking-[0.3em] text-xs md:text-sm font-black">
                  Video Editing Agency
                </span>
              </div>

            
            {/* Floating Right Stats (desktop) */}
            <div className="hidden lg:flex flex-col gap-4 absolute right-10 top-24 z-30" id="hero-stats-floating">
              <div className="px-4 py-3 rounded-full border border-white/5 bg-neutral-900/50 flex items-center gap-4">
                <div className="stat-icon">
                  <Video className="w-5 h-5 text-brand" />
                </div>
                <div className="text-left">
                  <div className="text-brand font-black text-lg">100+</div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-widest">Videos Edited</div>
                </div>
              </div>

              <div className="px-4 py-3 rounded-full border border-white/5 bg-neutral-900/50 flex items-center gap-4">
                <div className="stat-icon">
                  <Users className="w-5 h-5 text-brand" />
                </div>
                <div className="text-left">
                  <div className="text-brand font-black text-lg">10+</div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-widest">Industries Served</div>
                </div>
              </div>

              <div className="px-4 py-3 rounded-full border border-white/5 bg-neutral-900/50 flex items-center gap-4">
                <div className="stat-icon">
                  <TrendingUp className="w-5 h-5 text-brand" />
                </div>
                <div className="text-left">
                  <div className="text-brand font-black text-lg">2M+</div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-widest">Total Views</div>
                </div>
              </div>

              <div className="px-4 py-3 rounded-full border border-white/5 bg-neutral-900/50 flex items-center gap-4">
                <div className="stat-icon">
                  <CalendarDays className="w-5 h-5 text-brand" />
                </div>
                <div className="text-left">
                  <div className="text-brand font-black text-lg">120%</div>
                  <div className="text-[11px] text-gray-400 uppercase tracking-widest">Avg. Engagement</div>
                </div>
              </div>
            </div>
              <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1.05] mb-6 md:mb-8 uppercase tracking-tighter">
                ONE VIDEO.<br/>
                TWICE THE <span className="text-brand text-transparent bg-clip-text bg-gradient-to-r from-brand to-lime-300 animate-pulse">IMPACT.</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-10 md:mb-12 max-w-xl leading-relaxed font-semibold backdrop-blur-[2px] bg-black/10 rounded-lg py-1">
                We turn raw phone reels and dusty footage into scroll-stopping social content that connects, engages, and explodes conversions.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#work-section"
                  className="inline-flex items-center gap-3 bg-brand text-black px-7 py-4 rounded-xl font-black text-sm md:text-base hover:bg-white hover:shadow-[0_0_20px_rgba(212,255,0,0.4)] transition-all group shadow-lg cursor-pointer animate-none"
                >
                  Explore Work
                  <ChevronRight className="h-4.5 w-4.5 transform group-hover:translate-x-1.5 transition-transform stroke-[2.5]" />
                </a>

                <button
                  onClick={() => handleOpenBooking('General')}
                  className="inline-flex items-center gap-3 bg-neutral-900/90 border border-white/10 text-gray-300 px-7 py-4 rounded-xl font-bold text-sm md:text-base hover:bg-neutral-800 hover:text-white transition-all backdrop-blur-md cursor-pointer"
                >
                  Book a Call
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* FLOATING FILTER BAR (BOTTOM OF HERO) */}
        <div className="relative mx-auto w-full max-w-[1100px] px-6 z-20 translate-y-6">
          <div className="bg-neutral-950/80 border border-white/5 backdrop-blur-2xl p-2.5 rounded-2xl flex flex-wrap justify-center sm:justify-between items-center gap-2">
            
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                selectedCategory === 'all'
                  ? 'bg-brand text-black shadow-lg shadow-brand/40 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Menu className="w-4 h-4 stroke-[3]" /> All Campaigns
            </button>

            <button
              onClick={() => setSelectedCategory('restaurants')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                selectedCategory === 'restaurants'
                  ? 'bg-brand text-black shadow-lg shadow-brand/40 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Flame className="w-4 h-4 text-orange-400 shrink-0" /> Restaurants
            </button>

            <button
              onClick={() => setSelectedCategory('healthcare')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                selectedCategory === 'healthcare'
                  ? 'bg-brand text-black shadow-lg shadow-brand/40 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Heart className="w-4 h-4 text-red-500 shrink-0" /> Healthcare
            </button>

            <button
              onClick={() => setSelectedCategory('pharmacies')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                selectedCategory === 'pharmacies'
                  ? 'bg-brand text-black shadow-lg shadow-brand/40 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Pill className="w-4 h-4 text-sky-400 shrink-0" /> Pharmacies
            </button>

            <button
              onClick={() => setSelectedCategory('wellness')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                selectedCategory === 'wellness'
                  ? 'bg-brand text-black shadow-lg shadow-brand/40 font-black'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Sparkles className="w-4 h-4 text-yellow-400 shrink-0" /> Wellness
            </button>

          </div>
        </div>

      </main>

      {/* PORTFOLIO SHOWCASE SECTION */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 pt-28 pb-32" id="work-section">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-[10px] font-black uppercase text-brand tracking-widest bg-brand/5 border border-brand/20 px-3.5 py-1.5 rounded-full inline-block mb-3.5">
              Live Showcase Proof
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight">
              Selected Works & <span className="text-brand">Performance</span>
            </h2>
          </div>
          <p className="text-gray-400 text-xs md:text-sm max-w-sm">
            Slide each visual below to see the unedited raw footage vs our finalized, high-retention social edit structure.
          </p>
        </div>

        {/* Dynamic List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredCampaigns.map((camp, idx) => (
            <motion.article
              key={camp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.21, 0.85, 0.45, 1] }}
              className="bg-cardBg border border-white/5 rounded-[40px] overflow-hidden group hover:border-brand/40 hover:shadow-[0_0_30px_rgba(212,255,0,0.05)] transition-all duration-300"
              id={`project-card-${camp.id}`}
            >
              
              {/* Interactive Slide Comparison Screen */}
              <BeforeAfterSlider
                beforeImage={camp.beforeImage}
                afterImage={camp.afterImage}
              />

              {/* Informative Grid Details */}
              <div className="p-8 md:p-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  
                  {/* Left Label details and logo */}
                  <div className="flex items-center gap-4">
                    {camp.iconType === 'logo' && camp.logoUrl ? (
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center p-2">
                        <img
                          alt="Customer logo"
                          className="rounded-full w-full h-full object-cover"
                          src={camp.logoUrl}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 rounded-2xl bg-brand/10 border border-brand/20 flex items-center justify-center">
                        {camp.iconType === 'heart' ? (
                          <Heart className="w-6 h-6 text-brand" />
                        ) : camp.iconType === 'pill' ? (
                          <Pill className="w-6 h-6 text-brand" />
                        ) : (
                          <Sparkles className="w-6 h-6 text-brand" />
                        )}
                      </div>
                    )}

                    <div>
                      <h3 className="font-black text-xl md:text-2xl tracking-tight">{camp.title}</h3>
                      <p className="text-gray-400 text-xs md:text-sm font-semibold">{camp.tagline}</p>
                    </div>
                  </div>

                  {/* Performance Statistics Indicators */}
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-brand font-black text-base md:text-lg">{camp.views}</div>
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Views</p>
                    </div>
                    <div className="text-center">
                      <div className="text-brand font-black text-base md:text-lg">{camp.likes}</div>
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Likes</p>
                    </div>
                    <div className="text-center">
                      <div className="text-brand font-black text-base md:text-lg">{camp.engagement}</div>
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Growth</p>
                    </div>
                  </div>

                </div>

                {/* Retaining expandable details overlay */}
                <div className="mt-6 pt-6 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setActiveAccordionProject(activeAccordionProject === camp.id ? null : camp.id)}
                    className="flex items-center justify-between w-full text-xs font-black tracking-widest uppercase text-gray-400 hover:text-brand transition-all"
                  >
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-brand" />
                      {activeAccordionProject === camp.id ? 'Hide Strategy details' : 'See Editing Strategy'}
                    </span>
                    <span className="text-brand font-mono text-[14px]">
                      {activeAccordionProject === camp.id ? '[-] ' : '[+]'}
                    </span>
                  </button>

                  {activeAccordionProject === camp.id && (
                    <div className="mt-4 p-5 bg-black/60 rounded-2xl border border-white/5 animate-fade-in text-xs leading-relaxed space-y-3">
                      <p className="text-gray-300">{camp.about}</p>
                      
                      <div className="space-y-1.5">
                        <span className="block font-black text-[10px] tracking-widest uppercase text-brand">ENGAGEMENT HOOKS ADDED:</span>
                        {camp.keyUpdates.map((upd, i) => (
                          <div key={i} className="flex gap-2 text-gray-400">
                            <span className="text-brand font-bold">•</span>
                            <span className="font-medium">{upd}</span>
                          </div>
                        ))}
                      </div>

                      <div className="pt-3 flex justify-between">
                        <button
                          onClick={() => handleOpenBooking(camp.category)}
                          className="text-[10px] bg-brand text-black px-4 py-2 rounded-lg font-black uppercase flex items-center gap-1"
                        >
                          Request A Similar style <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* PROCESS OF EDITING STEP-BY-STEP */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 mb-32" id="process-section">
        <div className="border border-white/5 bg-neutral-950/40 backdrop-blur-md rounded-[40px] md:rounded-[60px] p-8 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-1 text-center lg:text-left">
              <span className="text-[10px] font-black uppercase text-brand tracking-widest bg-brand/5 border border-brand/20 px-3 py-1 rounded-full mb-3.5 inline-block">
                How We Deliver
              </span>
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight uppercase tracking-tighter">
                Our Editing<br/><span className="text-brand">Process</span>
              </h2>
              <p className="text-gray-400 text-xs md:text-base font-medium leading-relaxed max-w-[280px] mx-auto lg:mx-0">
                A perfect blend of active human creativity, pacing strategies, and visual precision to deliver maximum-retention results.
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center max-w-[200px] group">
                <div className="w-20 h-20 rounded-full border-2 border-brand/20 flex items-center justify-center mb-6 bg-brand/5 group-hover:bg-brand group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:border-brand shadow-2xl shrink-0">
                  <Video className="w-8 h-8" />
                </div>
                <h4 className="font-black text-sm uppercase mb-2 tracking-wide text-white">1. Raw Footage</h4>
                <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                  You drop unedited, raw cell or DSLR footage in our secure drive portal.
                </p>
              </div>

              <div className="hidden md:block flex-1 h-[2px] border-b-2 border-dashed border-brand/25"></div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center max-w-[200px] group">
                <div className="w-20 h-20 rounded-full border-2 border-brand/20 flex items-center justify-center mb-6 bg-brand/5 group-hover:bg-brand group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:border-brand shadow-2xl shrink-0">
                  <Menu className="w-8 h-8" />
                </div>
                <h4 className="font-black text-sm uppercase mb-2 tracking-wide text-white">2. Story & Flow</h4>
                <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                  We write the pacing flow, slice silence cuts, and retain the strongest retention hook.
                </p>
              </div>

              <div className="hidden md:block flex-1 h-[2px] border-b-2 border-dashed border-brand/25"></div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center max-w-[200px] group">
                <div className="w-20 h-20 rounded-full border-2 border-brand/20 flex items-center justify-center mb-6 bg-brand/5 group-hover:bg-brand group-hover:text-black transition-all duration-300 group-hover:scale-110 group-hover:border-brand shadow-2xl shrink-0">
                  <Sparkle className="w-8 h-8" />
                </div>
                <h4 className="font-black text-sm uppercase mb-2 tracking-wide text-white">3. Edit & Enhance</h4>
                <p className="text-xs text-gray-400 font-semibold leading-relaxed">
                  Adding premium sound effects, glow ramps, subtitle engines, and dynamic zooms.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* CTA FOOTER BOOKING PREVIEW ROW */}
      <footer className="max-w-[1440px] mx-auto px-6 md:px-10 mb-20" id="footer-segment">
        
        <div className="relative bg-cardBg rounded-[40px] md:rounded-[60px] p-10 md:p-24 overflow-hidden flex flex-col lg:flex-row items-center justify-between border border-white/5">
          {/* Radial light glow indicator */}
          <div className="absolute -right-40 -bottom-40 w-[500px] h-[500px] bg-brand/10 blur-[130px] rounded-full"></div>
          
          <div className="relative z-10 max-w-xl mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-black mb-6 md:mb-8 uppercase tracking-tighter leading-none">
              Ready to see<br/><span className="text-brand">your brand</span> here?
            </h2>
            <p className="text-gray-400 text-base md:text-xl mb-10 md:mb-12 font-medium">
              We translate unpolished raw drafts into massive continuous growth. Let's start crafting.
            </p>
            <button
              onClick={() => handleOpenBooking('General Promotion')}
              className="inline-flex items-center gap-3 bg-brand text-black px-10 md:px-12 py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-white hover:text-black transition-all shadow-2xl shadow-brand/40 transform hover:scale-105 active:scale-95"
            >
              Book a Free Call
              <ChevronRight className="h-6 w-6 stroke-[3]" />
            </button>
          </div>

          {/* Masked Mascot Graphics container */}
          <div className="relative z-10">
            <div className="relative w-72 md:w-[480px] pointer-events-none select-none">
              <img
                alt="Mova Mascot Badge"
                className="w-full h-auto object-cover transform scale-125 rotate-3 opacity-40 grayscale select-none"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3dHacXk4oJaApXYE-eNsAVX8ILUy_f4UqOFZ8V2rZJHEe_4qy805TziUJWMwNsvhKoetpvSnO0Ol5IgZVmXi99B7JO1b753jw_DfKOu_Arp1kGnCEeNWi3yP_TNEZ2VUjP3mRSsd0q5r7dteYNWXr0DZ9YdJKg2fuOyRGOo4XiYZsvS-Yh2WqHH6F1X88HrnGqe-aEvCEOKQgLimV_zIom2WAfYsSTH1yw5Bye_nPeJYvQbIoClBSjAC4-WofWGwjcLj1ZCXWYjU"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS CREDITS AND LINKS */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 pb-12">
          
          <img
            alt="MOVA Logo"
            className="h-8 hover:opacity-85 transition-opacity"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_05rDrqvx5XehLlmFYB9bjh6InMSZx8RZ_FXkyw_BkDNmu4JpzYonR2DCV_Jc1ZB35y_ij7D2G2ObxvLELIRkrC2obMJVimpXAlzPgun4Jh2AKattzKsKBFM5jy7s54H09QOxdElNCt5vG7varK7kils-grOeDWmTRQ9l_T_bRX9MBwCLxz_2ruZutk_LkKJfPzMVOxrc47D80oXirIPnfRyRUtzUOpJnqPK9448A6CGmdVYts0cDYDF28g6WtPD7ymHnyPH3PcE"
            referrerPolicy="no-referrer"
          />

          <div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs md:text-sm font-bold text-gray-400">
            <a className="hover:text-brand transition-colors" href="#">Privacy Policy</a>
            <a className="hover:text-brand transition-colors" href="#work-section">Terms of Service</a>
            <a className="hover:text-brand transition-colors" href="#process-section">Services</a>
          </div>

          <p className="text-xs md:text-sm font-bold text-gray-500">
            © 2026 MOVA Agency. All rights reserved.
          </p>

        </div>

      </footer>

      {/* DYNAMIC FORM BOOKING SLIDEOUT MODAL PORTAL */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialNiche={bookingNiche}
      />

    </div>
  );
}
