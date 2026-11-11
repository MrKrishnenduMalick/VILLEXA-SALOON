export interface Stylist {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  instagram?: string;
  facebook?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  price: string;
  priceValue: number;
  duration: string;
  description: string;
  features: string[];
  image: string;
  iconName: 'scissors' | 'droplet' | 'sparkles' | 'crown' | 'user' | 'wind';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  categoryLabel: string;
  image: string;
  description: string;
}

export const SALON_DATA = {
  name: "LUXE Hair Studio",
  tagline: "Hair That Defines Your Style",
  subTagline: "Expert stylists, personalised care and modern techniques for a look you'll love.",
  currencySymbol: "$",
  phone: "+44 20 7946 0830",
  phoneClean: "+442079460830",
  email: "hello@luxehairstudio.com",
  address: "123 High Street, Chelsea, London SW3 4RX, UK",
  googleMapsUrl: "https://maps.google.com/?q=Chelsea,London+SW3",
  whatsappUrl: "https://wa.me/442079460830?text=Hi%20LUXE%20Hair%20Studio,%20I'd%20like%20to%20enquire%20about%20booking%20an%20appointment.",
  externalBookingUrl: "", // Optional third-party booking URL (e.g. Fresha, Mindbody)

  hours: [
    { days: "Mon – Fri", time: "9:00 AM – 7:00 PM" },
    { days: "Saturday", time: "9:00 AM – 6:00 PM" },
    { days: "Sunday", time: "10:00 AM – 4:00 PM" },
  ],

  highlights: [
    { label: "Expert Stylists", subtext: "Master craft & precision", icon: "diamond" },
    { label: "Premium Products", subtext: "Organic & cruelty-free", icon: "leaf" },
    { label: "5★ Client Reviews", subtext: "Over 2,400+ delighted clients", icon: "star" },
    { label: "Flexible Booking", subtext: "Seamless online scheduling", icon: "calendar" },
  ],

  stats: [
    { value: "10+", label: "Years Experience" },
    { value: "2K+", label: "Happy Clients" },
    { value: "4.9★", label: "Client Rating" },
  ],

  reviews: [
    {
      id: "rev-1",
      client: "Lady Victoria Sterling",
      location: "Mayfair, London",
      service: "Bespoke Balayage & Gloss",
      rating: 5,
      date: "October 2026",
      quote: "Emma transformed my hair beyond expectation. The depth of color, gloss finish, and the relaxing private Chelsea atmosphere is unmatched anywhere in London.",
      avatar: "/images/stylist-emma.jpg"
    },
    {
      id: "rev-2",
      client: "Alexander Wright",
      location: "Manhattan, New York",
      service: "Executive Scissor Cut & Beard Sculpt",
      rating: 5,
      date: "November 2026",
      quote: "James provides the sharpest precision cut I've had. The eucalyptus hot towel ritual and discreet luxury experience is why I fly in for every key event.",
      avatar: "/images/stylist-james.jpg"
    },
    {
      id: "rev-3",
      client: "Camilla Montgomery",
      location: "Sydney, Australia",
      service: "Bridal Suite Experience",
      rating: 5,
      date: "September 2026",
      quote: "Ava and her team created pure magic for my wedding day. My Hollywood vintage waves lasted through tears, dancing, and 14 hours of celebrations.",
      avatar: "/images/stylist-ava.jpg"
    }
  ],

  carouselCards: [
    {
      id: "hair-colour",
      title: "Hair Colour",
      subtitle: "Balayage • Highlights",
      image: "/images/carousel-colour.jpg",
      serviceSlug: "hair-colour",
      badge: "Signature Color",
      desc: "Custom multidimensional balayage, gloss toner, and bespoke colour melt."
    },
    {
      id: "hair-styling",
      title: "Hair Styling",
      subtitle: "Cut • Colour • Style",
      image: "/images/carousel-styling.jpg",
      serviceSlug: "cut-and-style",
      badge: "Bestseller",
      desc: "Tailored precision cut, signature blowout, and red-carpet finish."
    },
    {
      id: "bridal-hair",
      title: "Bridal Hair",
      subtitle: "Elegant • Timeless",
      image: "/images/carousel-bridal.jpg",
      serviceSlug: "bridal-hair",
      badge: "Luxury Experience",
      desc: "Romantic updos, Hollywood waves, veil placement & event styling."
    },
    {
      id: "mens-grooming",
      title: "Men's Grooming",
      subtitle: "Cut • Beard • Style",
      image: "/images/carousel-mens.jpg",
      serviceSlug: "mens-grooming",
      badge: "Precision Grooming",
      desc: "Modern fades, scissor-over-comb cuts, hot towel beard sculpting."
    },
  ],

  homeFeatures: [
    {
      icon: "scissors",
      title: "Cut & Style",
      desc: "Precision cuts and tailored styling curated for your face shape and personal aesthetic."
    },
    {
      icon: "droplet",
      title: "Colour Services",
      desc: "From natural sun-kissed tones to bold editorial transformations with zero damage."
    },
    {
      icon: "sparkles",
      title: "Treatments",
      desc: "Deep peptide infusions, molecular bond repair and keratin shine therapy."
    },
    {
      icon: "wind",
      title: "Styling & Finish",
      desc: "Bouncy salon blowouts, sleek glass hair finishes and red-carpet ready curls."
    }
  ],

  stylists: [
    {
      id: "emma-carter",
      name: "Emma Carter",
      role: "Creative Director",
      image: "/images/stylist-emma.jpg",
      bio: "With over 12 years of runway and editorial styling across London and New York, Emma directs the salon's creative vision with effortless elegance.",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    {
      id: "james-reed",
      name: "James Reed",
      role: "Senior Stylist",
      image: "/images/stylist-james.jpg",
      bio: "Specializing in precision geometry cuts and modern texturizing techniques, James brings effortless, low-maintenance luxury to every client.",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    {
      id: "sophie-moore",
      name: "Sophie Moore",
      role: "Colour Specialist",
      image: "/images/stylist-sophie.jpg",
      bio: "Master colourist known for seamless dimensional blondes, creamy copper balayages, and customized bond-building formulations.",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
    {
      id: "ava-bennett",
      name: "Ava Bennett",
      role: "Bridal & Events",
      image: "/images/stylist-ava.jpg",
      bio: "Crafting timeless, romantic bridal aesthetics and red-carpet glam that withstand emotional moments and last all evening.",
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
    },
  ],

  services: [
    {
      id: "cut-and-style",
      title: "Cut & Style",
      subtitle: "Precision haircuts & signature blow-dry",
      category: "Styling",
      price: "$45",
      priceValue: 45,
      duration: "60 mins",
      description: "Includes bespoke consultation, aromatherapy wash, scalp massage, tailored precision cut and signature volumizing blowout.",
      features: ["Custom hair consultation", "Luxury wash & scalp ritual", "Precision texturizing", "Signature thermal finish"],
      image: "/images/carousel-styling.jpg",
      iconName: "scissors",
    },
    {
      id: "hair-colour",
      title: "Hair Colour",
      subtitle: "Balayage, highlights & gloss toners",
      category: "Colour",
      price: "$95",
      priceValue: 95,
      duration: "120 mins",
      description: "Bespoke dimensional colour tailored to complement your skin tone, featuring protective bond-building technology and gloss shine finish.",
      features: ["Full / partial balayage or foil", "Custom gloss toner formulation", "Bond-reinforcing treatment", "Blow-dry & styling finish"],
      image: "/images/carousel-colour.jpg",
      iconName: "droplet",
    },
    {
      id: "treatments",
      title: "Treatments",
      subtitle: "Deep bond repair & hydration therapy",
      category: "Care",
      price: "$65",
      priceValue: 65,
      duration: "45 mins",
      description: "Intensive molecular repair treatment that restores damaged disulfide bonds, replenishing lost hydration, elasticity and mirror-like gloss.",
      features: ["Molecular bond restoration", "Micro-steam moisture infusion", "Anti-humidity sealing shield", "Scalp rejuvenating massage"],
      image: "/images/gallery-4.jpg",
      iconName: "sparkles",
    },
    {
      id: "bridal-hair",
      title: "Bridal Hair",
      subtitle: "Timeless bridal artistry & trials",
      category: "Events",
      price: "$180",
      priceValue: 180,
      duration: "90 mins",
      description: "Complete bridal styling experience including veil and headpiece placement, weatherproof setting, and optional trial session.",
      features: ["Bridal styling consultation", "Textured updos or Hollywood waves", "Veil & accessory placement", "Long-lasting humidity protection"],
      image: "/images/carousel-bridal.jpg",
      iconName: "crown",
    },
    {
      id: "mens-grooming",
      title: "Men's Grooming",
      subtitle: "Tailored haircut, beard sculpt & hot towel",
      category: "Grooming",
      price: "$35",
      priceValue: 35,
      duration: "45 mins",
      description: "Executive haircut, skin fade or classic scissor cut, hot towel infused with eucalyptus, and precision beard grooming.",
      features: ["Consultation & scissor/fade cut", "Hot towel aromatherapy treatment", "Precision beard edge & shape", "Matte or satin styling finish"],
      image: "/images/carousel-mens.jpg",
      iconName: "user",
    },
  ],

  gallery: [
    {
      id: "gal-1",
      title: "Sun-Kissed Balayage Blonde",
      category: "colour",
      categoryLabel: "Hair Colour",
      image: "/images/gallery-1.jpg",
      description: "Seamless dimensional blonde with soft golden undertones and shadow root."
    },
    {
      id: "gal-2",
      title: "Textured Parisian Bob",
      category: "styling",
      categoryLabel: "Styling",
      image: "/images/gallery-2.jpg",
      description: "Airy blunt cut with gentle curtain bangs and effortless lived-in movement."
    },
    {
      id: "gal-3",
      title: "Romantic Pearl Bridal Updo",
      category: "bridal",
      categoryLabel: "Bridal",
      image: "/images/gallery-3.jpg",
      description: "Intricately twisted low bun with delicate pearl accents and face-framing tendrils."
    },
    {
      id: "gal-4",
      title: "Gloss Treatment & Red Tone",
      category: "treatments",
      categoryLabel: "Treatments",
      image: "/images/gallery-7.jpg",
      description: "Deep conditioning gloss formulation reviving vibrant burgundy-copper radiance."
    },
    {
      id: "gal-5",
      title: "Modern Fade & Textured Beard",
      category: "mens",
      categoryLabel: "Men's",
      image: "/images/gallery-5.jpg",
      description: "Clean mid-taper fade paired with sharp line work and natural scissor texture on top."
    },
    {
      id: "gal-6",
      title: "Hollywood Glamour Waves",
      category: "styling",
      categoryLabel: "Styling",
      image: "/images/carousel-styling.jpg",
      description: "High-shine sculpted vintage waves for evening and red-carpet appearances."
    },
    {
      id: "gal-7",
      title: "Creamy Platinum Blonde Melt",
      category: "colour",
      categoryLabel: "Hair Colour",
      image: "/images/carousel-colour.jpg",
      description: "Ultra-cool iced blonde transformation with zero brass and maximum integrity."
    },
    {
      id: "gal-8",
      title: "Executive Scissor Cut",
      category: "mens",
      categoryLabel: "Men's",
      image: "/images/gallery-8.jpg",
      description: "Classic executive tapered silhouette with natural matte finish."
    },
  ]
};

