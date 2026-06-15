export interface Campaign {
  id: string;
  title: string;
  tagline: string;
  category: 'restaurants' | 'healthcare' | 'pharmacies' | 'wellness';
  beforeImage: string;
  afterImage: string;
  logoUrl?: string;
  iconType?: 'logo' | 'heart' | 'pill' | 'sparkle';
  views: string;
  likes: string;
  engagement: string;
  about: string;
  keyUpdates: string[];
}

export const CAMPAIGNS: Campaign[] = [
  {
    id: 'cluckin-fried-chicken',
    title: "Cluckin' Fried Chicken",
    tagline: 'Promotional Reel',
    category: 'restaurants',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQgJw_tv2xtGtWl1vD9UdlBqYLJdAFIHsU41KGYyI5MjsDcjpT_1covIlhWYeWCDNndonXltnrByc3fdRuO70kMKALUpSE6YGTAjg21xYHuqzYyvwHzFD7kokFSfiBn5MfA9HQCiLM392xKo_Tve5aao6n7ad97rzKVyhFe5LVQO_jtUoHRGSOmBQUdMX2jOp1nsfYANHYaSZT9lGY8rMz99Qd90_bCMTJsQXOGpPzFmFYTPFSlaqx4myIQZ-UwhHGhl4Ce0wvauY',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1KGYLreN0oSWbcbhbhCPXUe9ZFAIt3dkAbdkK7XK9k5unDGWUh9fkI3hZkTpcAjMHHnVzO-hNpeMgrJ0u-PhbplodmnIYwzsk3A8q-0kmiYoPTDmcEZBOKzW7qudMxAhm7gbwXOGTdUC8I2FbTtjbcG28aQ5wSv27clQpytiXlbMVRdPbY8QgRAAt30zeJOsDKY_3MpLNaMv9M1sYLBHRr4pkFfexhpcXNthOvrOjEvcxcreH4txoFjU0s2YxtK9B93LfqJzNo5M',
    logoUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCj8PhlBMELaumhV29LH20vkvs44N4Twh4zzA5RJ4gucTKs1zJY5B_dPLAc3oSeY_QRJ0NQShr98VrscKvfFUFXJk6slWLRB4F307ppEncX-Dv9lbNaJ8zwh9yc7e6anI-VzxYBbFB2psC4fspzQuatgODfnsBp16t7RVOjS-uCTwkH11yYEt1NRg6TvYah795pvkRojGsdCjCQmqqJ8M2SqDBFO_yScxbKR0VTt7-mNlBEP9g3SzT8A6T0ldCXKYdsEGNLykrG8Bw',
    iconType: 'logo',
    views: '1.2M',
    likes: '65K',
    engagement: '+135%',
    about: 'Transforming delicious high-retention chicken closeups with rapid sound cues, color pop layers, and beat-matched cuts. Designed to turn casual mouth-watering views into concrete foot traffic.',
    keyUpdates: ['Custom Sound Design for sizzle and crunch', '15% Speed Ramp Hook inside first 2 seconds', 'Chroma-key background isolation for title text pop']
  },
  {
    id: 'bright-dental-clinic',
    title: 'Bright Dental Clinic',
    tagline: 'Awareness Reel',
    category: 'healthcare',
    beforeImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5km9Wvm82Sag_gJZjYJWVvDIf1nHNM1CO3Us2b1Z_NUIO5RYWPI1lE8vfw3QgFHfFvF02VdpcgzALY6Xpsl5eLfxNL50acYe6Ne3PfmTZBL6T1gWKCatpmp0mBB2rDEf1pKJsonNgLzByN31qEPDJpf9x6wyqKYfkIWF_xAUrqKsPjm--zj7E-PVqUwuk1L6IkryA3wXakDfdgS-RyNmmgkkticx8nhZt0Toc9F7Spf1AKvOncwBbwBv7IwIIJPsnoemrKG-Iw-0',
    afterImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCAkDvuGMa_Wg6tzXYUxIMudX_x7CBN_jOIlU9qdWlKB6YjtC-6fUUkvydW9QuVAlrvGpa6ljhTDPh7P038l0YpDTr_9sx-gHKtro82CVe6oWh2wJSzd91-AOWaUTaC6N-u1rXJHwyBsACPZYUNW2LLBacQYAvvZRR7KV7emv4VuAAmfPdHkl-3q-nIEvq99CrBm8y1GiKtxJpa9bsE8ji9ZXktUmch1MVQIku2ttTOspLLjVIknAipOE2Tn88BE8FtZJz3MmgcEXg',
    iconType: 'heart',
    views: '823K',
    likes: '46K',
    engagement: '+120%',
    about: 'Crafting clean, bright dental service introductions. This campaign replaced gloomy doctor office footage with vibrant transitions and premium ambient color tuning, maximizing patient trust.',
    keyUpdates: ['Cine-lighting filter overlay', 'Stabilized active camera motions', 'Interactive patient safety call-to-actions']
  },
  {
    id: 'pizza-planet-reel',
    title: 'Pizza Planet',
    tagline: 'Social Media Ad',
    category: 'restaurants',
    beforeImage: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=1000&auto=format&fit=crop',
    iconType: 'logo',
    views: '940K',
    likes: '51K',
    engagement: '+112%',
    about: 'Taking plain, flat telephone recordings of cheese-pulls and upgrading them into a high-energy culinary journey with custom transitions, camera zooms, and bass-boosted sound design.',
    keyUpdates: ['High-contrast cheese pull speed ramp', 'Glow border overlays', 'Engaging sub-titles optimized for mute scroll']
  },
  {
    id: 'pharmaquick-delivery',
    title: 'PharmaQuick Delivery',
    tagline: 'Explainer Promo',
    category: 'pharmacies',
    beforeImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1607619056574-7b8d304f3b24?q=80&w=1000&auto=format&fit=crop',
    iconType: 'pill',
    views: '450K',
    likes: '18K',
    engagement: '+110%',
    about: 'Improving delivery convenience comprehension. Replaced low-energy slideshow walkthroughs with visual kinetic typography and step-by-step phone-screen mockups.',
    keyUpdates: ['Mock smartphone UI integration', 'Fast panning active transitions', 'Lively color pop icons to emphasize quickness']
  },
  {
    id: 'zen-wellness-retreat',
    title: 'Zen Wellness Spa',
    tagline: 'TikTok Series',
    category: 'wellness',
    beforeImage: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000&auto=format&fit=crop',
    afterImage: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1000&auto=format&fit=crop',
    iconType: 'sparkle',
    views: '1.5M',
    likes: '90K',
    engagement: '+160%',
    about: 'Upgrading typical, grainy smartphone spa clips into peaceful, ultra-cinematic meditations utilizing breath-synchronized zoom loops and rich atmospheric master grading.',
    keyUpdates: ['Inhalation/exhalation smooth pacing effect', 'Subtle soft blur borders', 'Lush foliage color enhancements']
  }
];
