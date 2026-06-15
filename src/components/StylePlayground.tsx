import { useState, useEffect, useRef } from 'react';
import { Play, Pause, RefreshCw, Volume2, Layers, Cpu, Compass, AudioLines, Flame } from 'lucide-react';

interface StylePreset {
  name: string;
  niche: string;
  desc: string;
  colorGrade: string;
  zoomCuts: string[];
  soundFx: string[];
  engagementGraph: number[];
  speedMultipiers: string;
}

const PRESETS: StylePreset[] = [
  {
    name: 'TikTok Hook Master',
    niche: 'Viral Content',
    desc: 'Starts with an instant extreme close-up + massive spatial sound effects, then drops into a high-retention rapid speed-ramp template.',
    colorGrade: 'High Contrast, Warm Saturation',
    zoomCuts: ['0.2s: Extreme close-up zoom', '1.5s: Face tracking pan', '3.1s: Split crop overlay'],
    soundFx: ['0.1s: Deep bass whoosh', '1.5s: Camera shutter slap', '3.1s: Text ding chime'],
    engagementGraph: [100, 95, 92, 94, 91, 95, 96, 92, 98],
    speedMultipiers: '1.5x -> 0.3x (Slowmo hook) -> 1.2x continuous',
  },
  {
    name: 'Gourmet Sizzle Zoom',
    niche: 'Restaurants & Cooking',
    desc: 'Emphasizes close-up juices and steam loops. Syncs heavy bass drops with visual flips and dynamic sizzle amplification tracks.',
    colorGrade: 'Deep Chocolate, Vivid Reds, High Gloss',
    zoomCuts: ['0.5s: Extreme food macro crop', '1.8s: Plate rotation orbit', '4.2s: Sauce drip vertical'],
    soundFx: ['0.0s: Oil frying hiss', '1.8s: Bass drop pulse', '4.2s: Knife chop sound'],
    engagementGraph: [98, 97, 88, 93, 95, 99, 94, 91, 95],
    speedMultipiers: '1.0x -> 2.5x speedup -> 0.4x macro action',
  },
  {
    name: 'Trust-Builder Clean',
    niche: 'Clinics & Professional',
    desc: 'Implements smart camera stabilizers, soft corporate glow grading, and smart-cut gaps to make medical interviews sound fast, concise, and incredibly trustworthy.',
    colorGrade: 'Soft Aqua-Clean, Air Diffuse, Bright White',
    zoomCuts: ['0.0s: Face-aligned portrait', '2.5s: Subtle shoulder swing', '5.0s: Ambient clinic B-roll overlay'],
    soundFx: ['0.0s: Airy soft acoustic pad', '2.5s: Swoosh transition', '5.0s: Soft bell notification chime'],
    engagementGraph: [90, 89, 91, 92, 90, 93, 94, 95, 97],
    speedMultipiers: '1.0x continuous stabilizer active',
  }
];

export default function StylePlayground() {
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0); // 0 to 100
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const activePreset = PRESETS[selectedPresetIndex];

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + 1.25;
        });
      }, 50);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const handlePlayToggle = () => {
    if (progress >= 100) {
      setProgress(0);
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setProgress(0);
  };

  return (
    <div className="bg-cardBg border border-white/5 rounded-[40px] p-8 md:p-10 w-full" id="style-timeline-playground">
      <div className="flex flex-col xl:flex-row gap-10 items-stretch">
        
        {/* Left Column: Preset Controller list */}
        <div className="xl:w-1/3 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-brand mb-4">
              <Cpu className="w-5 h-5 animate-spin" />
              <span className="text-xs font-black tracking-widest uppercase">MOVA Engine Preset Simulator</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 uppercase tracking-tight">
              Pick Your <span className="text-brand">Vibe</span>
            </h3>

            <div className="space-y-4">
              {PRESETS.map((preset, index) => (
                <button
                  key={preset.name}
                  onClick={() => {
                    setSelectedPresetIndex(index);
                    handleReset();
                  }}
                  className={`w-full text-left p-5 rounded-2xl border transition-all ${
                    selectedPresetIndex === index
                      ? 'bg-brand/10 border-brand text-white shadow-lg'
                      : 'bg-neutral-900/40 border-white/5 hover:border-white/10 text-gray-400'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-sm text-white">{preset.name}</span>
                    <span className={`text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full ${
                      selectedPresetIndex === index ? 'bg-brand text-black' : 'bg-neutral-800 text-gray-500'
                    }`}>
                      {preset.niche}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed mt-1">{preset.desc}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 space-y-3">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500 font-bold">LIFETIME ENGAGEMENT ESTIMATE:</span>
              <span className="text-brand font-black">+145% AVERAGE</span>
            </div>
            <p className="text-[10px] text-gray-500 leading-normal">
              Simulation speeds and trigger timings are estimated based on MOVA historical retention metrics collected over 10+ industries.
            </p>
          </div>
        </div>

        {/* Right Column: Dynamic Interactive Player & Timeline Tracks */}
        <div className="xl:w-2/3 bg-black border border-white/5 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden">
          
          {/* Mock Video Canvas Display with dynamic overlay changes */}
          <div className="relative aspect-video rounded-2xl bg-neutral-900 border border-white/5 overflow-hidden flex items-center justify-center p-4">
            {/* Dynamic visual indicator representing style active on timeline */}
            <div className="absolute inset-0 bg-radial-gradient from-brand/5 to-transparent mix-blend-screen pointer-events-none"></div>
            
            {/* Simulation overlay background */}
            <div className="absolute inset-0 opacity-20 flex flex-wrap gap-1 pointer-events-none">
              {Array.from({ length: 80 }).map((_, i) => (
                <div
                  key={i}
                  className="w-4 h-4 bg-brand/10 rounded transition-all duration-300"
                  style={{
                    opacity: isPlaying ? Math.sin((progress + i) / 5) * 0.5 + 0.5 : 0.2,
                    transform: isPlaying ? `scale(${Math.sin((progress + i) / 10) * 0.2 + 1})` : 'none',
                  }}
                ></div>
              ))}
            </div>

            {/* Simulated Live Footage preview change */}
            <div className="relative z-10 text-center space-y-4 max-w-sm">
              {progress === 0 && (
                <div className="animate-pulse">
                  <p className="text-2xs font-mono font-bold tracking-widest text-gray-500 uppercase">SYSTEM FEED READY</p>
                  <p className="text-md font-bold text-gray-400 mt-1">Press Play to Initialize Timeline</p>
                </div>
              )}

              {progress > 0 && progress < 100 && (
                <div>
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-ping"></span>
                    <span className="text-[10px] font-mono tracking-widest text-red-500 font-bold">STREAM LIVE EDIT</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white italic tracking-tight uppercase">
                    {progress < 25 ? '🔥 1. RAPID HOOK CUT' : progress < 70 ? '🎸 2. TIMED SPEED SWAMP' : '⚡ 3. SUBTITLE FLASHER'}
                  </h4>
                  <p className="text-xs text-brand tracking-wider font-extrabold mt-1 uppercase">
                    COLOR GRADE: {activePreset.colorGrade}
                  </p>
                  
                  {/* Dynamic Zoom illustration scale */}
                  <div className="mt-4 flex justify-center">
                    <div 
                      className="border-2 border-dashed border-brand/50 rounded-xl px-4 py-2 bg-black/40 text-[10px] font-mono transition-transform duration-300 text-brand"
                      style={{
                        transform: `scale(${progress % 20 < 10 ? 1.15 : 1})`
                      }}
                    >
                      CAMERA MULTIPLIER: {activePreset.speedMultipiers}
                    </div>
                  </div>
                </div>
              )}

              {progress >= 100 && (
                <div className="animate-fade-in text-brand text-center">
                  <Flame className="w-10 h-10 mx-auto animate-bounce" />
                  <h4 className="text-lg font-black uppercase text-white mt-2">Render Complete!</h4>
                  <p className="text-xs text-gray-400 mt-1">Ready for TikTok, Instagram and Youtube feeds.</p>
                </div>
              )}
            </div>

            {/* Time progress tag */}
            <div className="absolute bottom-4 left-4 font-mono text-[9px] font-black text-gray-500 tracking-widest">
              00:0{Math.floor((progress / 100) * 6)}:{Math.floor((progress % 10) * 10)} / 00:06:00
            </div>

            {/* Speed Curve indicator */}
            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-3.5 py-1.5 rounded-lg border border-white/5 flex items-center gap-2">
              <AudioLines className="w-4 h-4 text-brand animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-gray-300">ENGAGEMENT PEAK PREDICTOR</span>
            </div>
          </div>

          {/* Timeline and Trigger Points */}
          <div className="mt-6 space-y-4">
            
            {/* Slider track line */}
            <div className="relative h-12 bg-neutral-900/80 rounded-xl border border-white/5 flex items-center px-4 overflow-hidden">
              {/* Audio Waveform mock bars inside background */}
              <div className="absolute inset-0 flex items-center justify-around px-8 opacity-25">
                {Array.from({ length: 45 }).map((_, i) => {
                  const h = Math.abs(Math.sin(i / 1.5)) * 24 + 4;
                  return (
                    <div
                      key={i}
                      className="w-[2px] bg-brand rounded-full transition-all"
                      style={{
                        height: `${h}px`,
                        opacity: isPlaying && (progress / 100) * 45 > i ? 1 : 0.4
                      }}
                    ></div>
                  );
                })}
              </div>

              {/* Dynamic seek line playhead bar */}
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-brand z-10 shadow-[0_0_8px_brand]"
                style={{ left: `${progress}%` }}
              >
                <div className="absolute top-0 -translate-x-1/2 w-2 h-2 rounded-full bg-brand"></div>
              </div>

              {/* Timeline annotations nodes */}
              <div className="absolute top-1 left-[15%] w-1.5 h-1.5 rounded-full bg-red-500" title="Hook Zoom"></div>
              <div className="absolute top-1 left-[50%] w-1.5 h-1.5 rounded-full bg-yellow-500" title="Audio transition"></div>
              <div className="absolute top-1 left-[80%] w-1.5 h-1.5 rounded-full bg-green-500" title="Speed transition"></div>
            </div>

            {/* Visual triggers log */}
            <div className="grid grid-cols-2 gap-4 text-left">
              {/* Zoom Cuts Column */}
              <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                <span className="text-[9px] uppercase font-black text-brand tracking-widest flex items-center gap-1 mb-2">
                  <Layers className="w-3.5 h-3.5" /> Video Zoom Cuts
                </span>
                <ul className="space-y-1">
                  {activePreset.zoomCuts.map((item, i) => {
                    // Extract trigger time seconds fraction roughly
                    const timeMark = parseFloat(item.split('s:')[0]) || 0;
                    const triggerPercent = (timeMark / 6) * 100;
                    const isFired = progress >= triggerPercent;
                    return (
                      <li
                        key={i}
                        className={`text-[10px] font-mono flex items-center gap-1.5 transition-colors duration-200 ${
                          isFired ? 'text-white' : 'text-gray-600'
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${isFired ? 'bg-brand' : 'bg-neutral-800'}`}></span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Sound Fx Cuts */}
              <div className="bg-neutral-900/50 p-4 rounded-xl border border-white/5">
                <span className="text-[9px] uppercase font-black text-brand tracking-widest flex items-center gap-1 mb-2">
                  <Volume2 className="w-3.5 h-3.5" /> Beat FX & Audio
                </span>
                <ul className="space-y-1">
                  {activePreset.soundFx.map((item, i) => {
                    const timeMark = parseFloat(item.split('s:')[0]) || 0;
                    const triggerPercent = (timeMark / 6) * 100;
                    const isFired = progress >= triggerPercent;
                    return (
                      <li
                        key={i}
                        className={`text-[10px] font-mono flex items-center gap-1.5 transition-colors duration-200 ${
                          isFired ? 'text-white' : 'text-gray-600'
                        }`}
                      >
                        <span className={`w-1 h-1 rounded-full ${isFired ? 'bg-brand' : 'bg-neutral-800'}`}></span>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Play/Pause/Trigger controls footer bar */}
            <div className="flex justify-between items-center bg-neutral-900/30 p-3.5 rounded-2xl border border-white/5">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handlePlayToggle}
                  className={`px-5 py-2 rounded-lg font-black text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                    isPlaying
                      ? 'bg-neutral-800 text-yellow-400 hover:bg-neutral-700'
                      : 'bg-brand text-black shadow-lg shadow-brand/10 hover:bg-white'
                  }`}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5" /> Pause Engine
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-black" /> Run Simulator
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="p-2 border border-white/10 hover:border-white/20 rounded-lg text-gray-400 hover:text-white transition-all"
                  title="Reset playhead"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {/* Engagement Peak Score tag */}
              <div className="text-right">
                <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-none">RETENTION ENGAGEMENT VALUE</p>
                <p className="text-sm font-black text-brand tracking-wide mt-1 leading-none">
                  {isPlaying ? `${Math.floor(82 + (progress % 18))}% AVERAGE` : '96% STANDBY'}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
