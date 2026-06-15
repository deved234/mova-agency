import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Video, Building2, TrendingUp, Users,
  ChevronRight, Flame, Info, CalendarDays,
  Menu, Heart, Pill, Sparkles, ArrowUpRight,
  Sparkle, X, LayoutDashboard, Music, PlayCircle
} from 'lucide-react';
import { CAMPAIGNS, Campaign } from './data';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import BookingModal from './components/BookingModal';
import heroImg from './images/ChatGPT Image Jun 15, 2026, 02_18_24 AM.png';

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
      <main className="relative pt-24 md:pt-24 pb-0 overflow-hidden min-h-screen flex flex-col justify-center" id="hero-segment">
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-10 w-full flex-grow flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[0.9fr_1.8fr_0.75fr] xl:grid-cols-[0.85fr_2fr_0.7fr] gap-6 items-stretch pb-6">
            {/* Left Content Column */}
            <div className="lg:col-span-1 text-left flex flex-col justify-center pt-4 md:pt-0" id="hero-headline-left">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-3 h-3 rounded-full bg-brand shadow-[0_0_12px_rgba(212,255,0,0.9)] animate-pulse"></span>
                <span className="text-brand uppercase tracking-[0.3em] text-xs md:text-sm font-black">
                  VIDEO EDITING
                </span>
              </div>
              <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black leading-[1.05] mb-6 md:mb-8 uppercase tracking-tighter">
                ONE VIDEO.<br/>
                TWICE THE <span className="text-brand text-transparent bg-clip-text bg-gradient-to-r from-brand to-lime-300 animate-pulse">IMPACT.</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-10 md:mb-12 max-w-sm leading-relaxed font-medium">
                We turn raw clips into scroll-stopping content that connects, engages, and converts.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#work-section"
                  className="inline-flex items-center gap-3 border border-brand text-brand px-7 py-4 rounded-xl font-black text-sm md:text-base hover:bg-brand hover:text-black transition-all group cursor-pointer"
                >
                  See Editing Style
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform stroke-[3]" />
                </a>
              </div>
            </div>

            {/* Center Hero Image */}
            <div className="md:col-span-1 xl:col-span-1 flex justify-center items-stretch">
              <div className="relative w-full min-h-[60vh] md:min-h-[75vh] xl:min-h-[82vh] overflow-hidden">
                <img
                  alt="MOVA Hero Mascot"
                  className="w-full h-full object-cover object-top"
                  src={heroImg}
                />
              </div>
            </div>

            {/* Right Stats Column */}
            <div className="md:col-span-1 xl:col-span-1 flex flex-col gap-8 justify-center pt-8 md:pt-0 items-start">
              {/* Stat 1 */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-brand/40 flex items-center justify-center shrink-0 bg-brand/5">
                  <Video className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-white font-black text-2xl leading-none">100+</div>
                  <div className="text-gray-400 text-xs mt-1">Videos Edited</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-brand/40 flex items-center justify-center shrink-0 bg-brand/5">
                  <Building2 className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-white font-black text-2xl leading-none">10+</div>
                  <div className="text-gray-400 text-xs mt-1">Industries Served</div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-brand/40 flex items-center justify-center shrink-0 bg-brand/5">
                  <TrendingUp className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-white font-black text-2xl leading-none">2M+</div>
                  <div className="text-gray-400 text-xs mt-1">Total Views Generated</div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full border border-brand/40 flex items-center justify-center shrink-0 bg-brand/5">
                  <CalendarDays className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <div className="text-white font-black text-2xl leading-none">120%</div>
                  <div className="text-gray-400 text-xs mt-1">Avg. Engagement Increase</div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* FILTER BAR */}
        <div className="relative w-full z-20 mt-8">
          <div className="bg-[#0a0a0a] border-t border-b border-white/5 px-6 md:px-10 py-3 flex flex-wrap justify-start md:justify-center items-center gap-2 max-w-[1440px] mx-auto">
            
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
  <div className="border border-white/5 bg-neutral-950/60 backdrop-blur-md rounded-[24px] p-8 md:p-12">
    <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 lg:gap-16 items-center">
      
      {/* Left Header */}
      <div className="text-left">
        <h2 className="text-2xl md:text-3xl font-black leading-tight uppercase tracking-tight mb-4">
          <span className="text-brand">OUR EDITING</span><br/>
          PROCESS
        </h2>
        <p className="text-gray-400 text-xs md:text-sm font-medium leading-relaxed">
          A perfect blend of creativity, strategy, and precision.
        </p>
      </div>

      {/* Steps Row */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Step 1 */}
        <div className="flex flex-col items-center text-center max-w-[130px]">
          <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center mb-4 shrink-0">
            <Video className="w-7 h-7 text-brand" />
          </div>
          <h4 className="font-black text-xs uppercase mb-1 tracking-wide text-white">1. Raw Footage</h4>
          <p className="text-[11px] text-gray-500 font-medium leading-tight">Unfiltered & Uncut</p>
        </div>

        <div className="hidden md:block flex-1 h-[1px] border-t-2 border-dashed border-brand/40 mx-1"></div>

        {/* Step 2 */}
        <div className="flex flex-col items-center text-center max-w-[130px]">
          <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center mb-4 shrink-0">
            <LayoutDashboard className="w-7 h-7 text-brand" />
          </div>
          <h4 className="font-black text-xs uppercase mb-1 tracking-wide text-white">2. Story & Structure</h4>
          <p className="text-[11px] text-gray-500 font-medium leading-tight">We build the flow</p>
        </div>

        <div className="hidden md:block flex-1 h-[1px] border-t-2 border-dashed border-brand/40 mx-1"></div>

        {/* Step 3 */}
        <div className="flex flex-col items-center text-center max-w-[130px]">
          <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center mb-4 shrink-0">
            <Sparkle className="w-7 h-7 text-brand" />
          </div>
          <h4 className="font-black text-xs uppercase mb-1 tracking-wide text-white">3. Edit & Enhance</h4>
          <p className="text-[11px] text-gray-500 font-medium leading-tight">Cut, effects, color</p>
        </div>

        <div className="hidden md:block flex-1 h-[1px] border-t-2 border-dashed border-brand/40 mx-1"></div>

        {/* Step 4 */}
        <div className="flex flex-col items-center text-center max-w-[130px]">
          <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center mb-4 shrink-0">
            <Music className="w-7 h-7 text-brand" />
          </div>
          <h4 className="font-black text-xs uppercase mb-1 tracking-wide text-white">4. Sound & Music</h4>
          <p className="text-[11px] text-gray-500 font-medium leading-tight">Audio that fits</p>
        </div>

        <div className="hidden md:block flex-1 h-[1px] border-t-2 border-dashed border-brand/40 mx-1"></div>

        {/* Step 5 */}
        <div className="flex flex-col items-center text-center max-w-[130px]">
          <div className="w-16 h-16 rounded-full border-2 border-brand flex items-center justify-center mb-4 shrink-0">
            <PlayCircle className="w-7 h-7 text-brand" />
          </div>
          <h4 className="font-black text-xs uppercase mb-1 tracking-wide text-white">5. Final Output</h4>
          <p className="text-[11px] text-gray-500 font-medium leading-tight">Ready to perform</p>
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