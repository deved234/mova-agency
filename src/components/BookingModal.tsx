import { useState, FormEvent } from 'react';
import { X, Calendar, Clock, Video, CheckCircle, Ticket, Mail, User, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNiche?: string;
}

export default function BookingModal({ isOpen, onClose, initialNiche = 'General' }: BookingModalProps) {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    niche: initialNiche || 'Restaurants',
    platform: 'Tiktok / Shorts',
    volume: '2-5 videos/m',
    driveLink: '',
    comments: '',
    date: '2026-06-18',
    time: '15:00',
  });

  const [bookingTicketId, setBookingTicketId] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Generate a random ticket identification code
    const ticketId = `MOVA-REEL-${Math.floor(100000 + Math.random() * 900000)}`;
    setBookingTicketId(ticketId);
    setStep(2);
  };

  const timeSlots = ['10:00 AM', '11:30 AM', '01:00 PM', '03:00 PM', '04:30 PM', '06:00 PM'];
  const dates = [
    { label: 'Thursday, Jun 18', value: '2026-06-18' },
    { label: 'Friday, Jun 19', value: '2026-06-19' },
    { label: 'Monday, Jun 22', value: '2026-06-22' },
    { label: 'Tuesday, Jun 23', value: '2026-06-23' },
    { label: 'Wednesday, Jun 24', value: '2026-06-24' },
  ];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-fade-in transition-all">
      <div className="relative w-full max-w-2xl bg-neutral-950 border border-brand/20 rounded-[32px] p-8 md:p-10 shadow-[0_0_50px_rgba(212,255,0,0.15)] overflow-hidden">
        {/* Neon light leak */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-brand/10 blur-[90px] rounded-full pointer-events-none"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/10 hover:border-brand/40 text-gray-400 hover:text-brand transition-all hover:rotate-90"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 1 ? (
          <form onSubmit={handleSubmit} className="relative z-10" id="booking-modal-form">
            <div className="mb-8">
              <span className="text-xs font-black tracking-widest text-brand uppercase bg-brand/5 px-3 py-1 rounded-full border border-brand/20">
                🚀 Strategic Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 uppercase tracking-tight">
                Let's double your <span className="text-brand">Impact</span>
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                Secure a 1-on-1 session with our lead editor. We'll audit your current videos and construct a tailored social framework.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              {/* Name */}
              <div>
                <label className="block text-xs font-black tracking-wider uppercase text-gray-400 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    required
                    placeholder=""
                    className="w-full pl-11 pr-4 py-3 bg-neutral-900/60 border border-white/10 rounded-xl focus:border-brand/60 focus:outline-none text-white text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-black tracking-wider uppercase text-gray-400 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-3.5 w-4 h-4 text-gray-500" />
                  <input
                    type="email"
                    required
                    placeholder=""
                    className="w-full pl-11 pr-4 py-3 bg-neutral-900/60 border border-white/10 rounded-xl focus:border-brand/60 focus:outline-none text-white text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              {/* Niche Indicator */}
              <div>
                <label className="block text-xs font-black tracking-wider uppercase text-gray-400 mb-2">
                  Industry / Niche
                </label>
                <select
                  className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl focus:border-brand/60 focus:outline-none text-white text-sm"
                  value={formData.niche}
                  onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
                >
                  <option value="Restaurants">🍗 Restaurants & Food</option>
                  <option value="Healthcare">🦷 Healthcare & Clinics</option>
                  <option value="Pharmacies">💊 Pharmacies & MedTech</option>
                  <option value="Wellness">🧘 Wellness & Spas</option>
                  <option value="SaaS & Tech">💻 Tech & SaaS Branding</option>
                </select>
              </div>

              {/* Platform */}
              <div>
                <label className="block text-xs font-black tracking-wider uppercase text-gray-400 mb-2">
                  Target Format
                </label>
                <select
                  className="w-full px-4 py-3 bg-neutral-900 border border-white/10 rounded-xl focus:border-brand/60 focus:outline-none text-white text-sm"
                  value={formData.platform}
                  onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                >
                  <option value="Tiktok / Shorts">🎬 Portrait Reels (9:16 TikTok / YT Shorts)</option>
                  <option value="YouTube Long">📺 Landscape Video (16:9 Long-Form)</option>
                  <option value="Premium Ads">💎 Cinematic Promos & Paid Ads</option>
                </select>
              </div>
            </div>

            {/* Date & Time Selectors */}
            <div className="p-5 bg-neutral-900/40 border border-white/5 rounded-2xl mb-8">
              <h3 className="text-xs font-black tracking-wider uppercase text-brand flex items-center gap-1.5 mb-4">
                <Calendar className="w-4 h-4" /> Select Consultation Time
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Date dropdown */}
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Date</span>
                  <select
                    className="w-full px-3 py-2 bg-neutral-950 border border-white/10 rounded-lg text-xs"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  >
                    {dates.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>
                {/* Time select */}
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 mb-1.5">Available Slots (London Time)</span>
                  <div className="grid grid-cols-3 gap-1.5">
                    {timeSlots.map((ts) => (
                      <button
                        type="button"
                        key={ts}
                        onClick={() => setFormData({ ...formData, time: ts })}
                        className={`py-1.5 text-[10px] font-black rounded-lg transition-all ${
                          formData.time === ts
                            ? 'bg-brand text-black shadow-[0_0_8px_rgba(212,255,0,0.4)]'
                            : 'bg-neutral-800 text-gray-300 hover:bg-neutral-700'
                        }`}
                      >
                        {ts}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Raw footage optional link */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs font-black tracking-wider uppercase text-gray-400 flex items-center gap-1">
                  <Video className="w-3.5 h-3.5 text-gray-500" /> Raw Clip Folder URL (Optional)
                </label>
                <span className="text-[10px] text-gray-500 font-bold">Google Drive / Dropbox / WeTransfer</span>
              </div>
              <input
                type="url"
                placeholder="https://drive.google.com/drive/folders/your-footage..."
                className="w-full px-4 py-3 bg-neutral-900/60 border border-white/10 rounded-xl focus:border-brand/60 focus:outline-none text-white text-sm"
                value={formData.driveLink}
                onChange={(e) => setFormData({ ...formData, driveLink: e.target.value })}
              />
            </div>

            {/* CTA action button */}
            <button
              type="submit"
              className="w-full bg-brand text-black py-4 rounded-xl font-black text-base flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(212,255,0,0.25)] hover:bg-white transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Secure My Booked Time
              <svg className="h-5 w-5 fill-none stroke-current stroke-3" viewBox="0 0 24 24">
                <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            </button>
          </form>
        ) : (
          /* Confirmation Ticket display screen */
          <div className="relative text-center py-6 relative z-10" id="booking-modal-success">
            <div className="w-20 h-20 rounded-full bg-brand/10 border-2 border-brand flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(212,255,0,0.3)]">
              <CheckCircle className="w-10 h-10 text-brand" />
            </div>

            <h2 className="text-3xl font-black uppercase text-white mb-2 tracking-tight">Booking Secured!</h2>
            <p className="text-gray-400 text-sm max-w-md mx-auto mb-8">
              We have scheduled your custom optimization session. An invitation plus pre-call outline has been generated.
            </p>

            {/* Custom SVG Ticket layout */}
            <div className="bg-neutral-900 border border-white/10 rounded-2xl text-left max-w-sm mx-auto overflow-hidden divide-y divide-white/5 shadow-xl">
              <div className="p-5 bg-gradient-to-r from-neutral-900 to-black flex justify-between items-center">
                <span className="text-[10px] font-black tracking-widest text-brand uppercase">MOVA AGENT TICKET</span>
                <span className="text-[10px] font-mono text-gray-500 font-bold">{bookingTicketId}</span>
              </div>
              <div className="p-5 space-y-3.5 text-xs text-gray-300">
                <p className="flex justify-between">
                  <span className="text-gray-500 font-bold">Client:</span>
                  <span className="font-semibold text-white">{formData.name}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500 font-bold">Contact Email:</span>
                  <span className="font-semibold text-white truncate max-w-[200px]">{formData.email}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500 font-bold">Industry Focus:</span>
                  <span className="font-semibold text-brand">{formData.niche}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-500 font-bold">Video Format:</span>
                  <span className="font-semibold text-white">{formData.platform}</span>
                </p>
                {formData.driveLink && (
                  <p className="flex justify-between items-center">
                    <span className="text-gray-500 font-bold">Footage Link:</span>
                    <span className="font-semibold text-xs text-brand underline truncate max-w-[150px]">Link Saved</span>
                  </p>
                )}
              </div>
              <div className="p-5 bg-neutral-950 flex gap-4 items-center">
                <Calendar className="w-5 h-5 text-brand shrink-0" />
                <div>
                  <p className="text-[11px] text-white font-semibold flex items-center gap-1.5">
                    {dates.find((d) => d.value === formData.date)?.label || formData.date}
                  </p>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-gray-500" /> {formData.time} (London GMT)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-white font-black text-xs rounded-xl uppercase tracking-wider"
              >
                Close Portal
              </button>
              <button
                type="button"
                className="px-6 py-2.5 bg-brand text-black font-black text-xs rounded-xl uppercase tracking-wider flex items-center gap-1.5 justify-center shadow-lg"
                onClick={() => {
                  alert(`Ticket token copied: ${bookingTicketId}\nCheck your inbox at: ${formData.email}`);
                }}
              >
                <Ticket className="w-3.5 h-3.5" /> Download Digital Pass
              </button>
            </div>

            <div className="mt-6 flex justify-center items-center gap-1.5 text-[10px] text-gray-500 font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-brand" /> SSL Encrypted Integration Client
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
