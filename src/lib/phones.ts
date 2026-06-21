import { Phone, BudgetCategory, ProductCategory } from "@/types/phone";

// ── Product Categories (gadgets + home & kitchen) ──
export const productCategories: ProductCategory[] = [
  { label: "Home & Kitchen", slug: "home-kitchen", description: "Everyday essentials for a smarter home", icon: "🏠", color: "from-orange-500 to-amber-500" },
  { label: "Tech Gadgets", slug: "tech-gadgets", description: "Latest gadgets worth your money", icon: "⚡", color: "from-blue-500 to-cyan-500" },
  { label: "Smart Home Devices", slug: "smart-home", description: "Automate and upgrade your living space", icon: "🤖", color: "from-violet-500 to-purple-500" },
  { label: "Kitchen Appliances", slug: "kitchen-appliances", description: "Cook smarter, not harder", icon: "🍳", color: "from-red-500 to-rose-500" },
  { label: "Home Organization", slug: "home-organization", description: "Declutter and organize in style", icon: "📦", color: "from-emerald-500 to-teal-500" },
  { label: "Car Accessories", slug: "car-accessories", description: "Essential add-ons for your ride", icon: "🚗", color: "from-slate-500 to-gray-600" },
  { label: "Lifestyle Gadgets", slug: "lifestyle-gadgets", description: "Gadgets that make life easier", icon: "✨", color: "from-pink-500 to-fuchsia-500" },
];

// ── Demo Products ──
// NOTE: Replace affiliateLink + price with your real Amazon links later
export const phones: Phone[] = [
  // ───── UNDER ₹500 ─────
  {
    id: "1", slug: "stainless-steel-vegetable-chopper", name: "Stainless Steel Vegetable Chopper", brand: "Kitchen Pro",
    price: 399, originalPrice: 799, rating: 4.3, reviewCount: 8420,
    image: "https://placehold.co/400x400/f97316/ffffff?text=Veg+Chopper",
    badge: "Best Seller",
    shortDescription: "Chop vegetables in seconds with this sturdy steel hand-press chopper.",
    fullDescription: "This compact vegetable chopper makes meal prep effortless. The sharp stainless steel blades cut onions, tomatoes, and more in seconds with a simple hand press. Easy to clean and durable.",
    pros: ["Fast manual chopping", "Sharp stainless steel blades", "Easy to clean", "No electricity needed", "Compact storage"],
    cons: ["Manual effort needed", "Small capacity", "Not for hard vegetables"],
    specs: { Material: "Stainless Steel + ABS", Capacity: "500ml", Blades: "3 sharp blades", Warranty: "6 months", Use: "Onion, tomato, garlic" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE001",
    category: ["under-500", "home-kitchen", "kitchen-appliances"],
    isAvailable: true, publishedAt: "2026-06-01", updatedAt: "2026-06-21",
  },
  {
    id: "2", slug: "microfiber-cleaning-cloth-set", name: "Microfiber Cleaning Cloth Set (Pack of 6)", brand: "CleanMax",
    price: 299, originalPrice: 599, rating: 4.4, reviewCount: 12300,
    image: "https://placehold.co/400x400/10b981/ffffff?text=Cloth+Set",
    badge: "Top Deal",
    shortDescription: "Lint-free microfiber cloths for streak-free cleaning of any surface.",
    fullDescription: "These ultra-absorbent microfiber cloths trap dust and dirt without scratching surfaces. Perfect for cars, kitchens, glass, and electronics. Reusable and machine washable.",
    pros: ["Lint-free cleaning", "Highly absorbent", "Machine washable", "Multi-surface use", "Pack of 6 value"],
    cons: ["Colors may fade", "Thin material"],
    specs: { Material: "Microfiber", Quantity: "6 pieces", Size: "30x30 cm", Washable: "Yes", Use: "Car, kitchen, glass" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE002",
    category: ["under-500", "home-kitchen", "car-accessories"],
    isAvailable: true, publishedAt: "2026-06-02", updatedAt: "2026-06-21",
  },
  {
    id: "3", slug: "usb-led-light", name: "Portable USB LED Light", brand: "GlowTech",
    price: 149, originalPrice: 399, rating: 4.1, reviewCount: 5600,
    image: "https://placehold.co/400x400/3b82f6/ffffff?text=USB+LED",
    badge: "Value Pick",
    shortDescription: "Plug-and-play USB LED light for laptops, power banks, and night reading.",
    fullDescription: "This flexible USB LED light plugs into any USB port to provide bright, eye-friendly light. Great for late-night work, reading, or as an emergency light during power cuts.",
    pros: ["Plug and play", "Flexible neck", "Eye-friendly light", "Ultra portable", "Very affordable"],
    cons: ["Needs USB power source", "Single brightness"],
    specs: { Power: "USB 5V", Light: "LED warm white", Length: "Flexible 20cm", Use: "Laptop, power bank", Warranty: "3 months" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE003",
    category: ["under-500", "tech-gadgets", "lifestyle-gadgets"],
    isAvailable: true, publishedAt: "2026-06-03", updatedAt: "2026-06-21",
  },

  // ───── UNDER ₹1000 ─────
  {
    id: "4", slug: "wireless-mouse", name: "Wireless Optical Mouse", brand: "TechGrip",
    price: 599, originalPrice: 1299, rating: 4.2, reviewCount: 9800,
    image: "https://placehold.co/400x400/3b82f6/ffffff?text=Wireless+Mouse",
    badge: "Best Seller",
    shortDescription: "Smooth 2.4GHz wireless mouse with silent clicks and long battery life.",
    fullDescription: "Enjoy clutter-free productivity with this ergonomic wireless mouse. The 2.4GHz connection is lag-free, and the silent click design is perfect for offices and shared spaces.",
    pros: ["Lag-free 2.4GHz", "Silent clicks", "Ergonomic design", "Long battery life", "Plug-and-play USB receiver"],
    cons: ["AA battery needed", "Not rechargeable"],
    specs: { Connectivity: "2.4GHz Wireless", DPI: "1600", Battery: "1x AA", Range: "10 meters", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE004",
    category: ["under-1000", "tech-gadgets"],
    isAvailable: true, publishedAt: "2026-06-04", updatedAt: "2026-06-21",
  },
  {
    id: "5", slug: "spice-rack-organizer", name: "Rotating Spice Rack Organizer", brand: "HomeNeat",
    price: 899, originalPrice: 1499, rating: 4.5, reviewCount: 4300,
    image: "https://placehold.co/400x400/10b981/ffffff?text=Spice+Rack",
    badge: "Editor's Pick",
    shortDescription: "360° rotating spice rack that keeps your kitchen counter tidy.",
    fullDescription: "This rotating spice rack holds all your spices in one compact, accessible spot. The 360° spin makes finding the right spice quick and easy, decluttering your kitchen counter.",
    pros: ["360° rotation", "Saves counter space", "Sturdy build", "Easy to assemble", "Modern look"],
    cons: ["Jars not included", "Medium capacity"],
    specs: { Material: "ABS Plastic", Tiers: "2 levels", Rotation: "360 degrees", Capacity: "16 jars", Use: "Kitchen counter" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE005",
    category: ["under-1000", "home-organization", "kitchen-appliances"],
    isAvailable: true, publishedAt: "2026-06-05", updatedAt: "2026-06-21",
  },
  {
    id: "6", slug: "car-phone-holder", name: "Magnetic Car Phone Holder", brand: "DriveSafe",
    price: 449, originalPrice: 999, rating: 4.3, reviewCount: 15600,
    image: "https://placehold.co/400x400/64748b/ffffff?text=Car+Holder",
    badge: "Trending",
    shortDescription: "Strong magnetic dashboard mount for safe hands-free navigation.",
    fullDescription: "Keep your phone secure and visible while driving with this strong magnetic car mount. The 360° rotation lets you view in any orientation, perfect for navigation and calls.",
    pros: ["Strong magnetic hold", "360° rotation", "Easy installation", "Works with any phone", "Compact design"],
    cons: ["Magnet plate needs sticking", "Not for thick cases"],
    specs: { Mount: "Dashboard/Vent", Hold: "Magnetic", Rotation: "360 degrees", Compatible: "All phones", Warranty: "6 months" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE006",
    category: ["under-1000", "car-accessories", "tech-gadgets"],
    isAvailable: true, publishedAt: "2026-06-06", updatedAt: "2026-06-21",
  },

  // ───── UNDER ₹2000 ─────
  {
    id: "7", slug: "bluetooth-neckband", name: "Bluetooth Wireless Neckband", brand: "SoundPro",
    price: 1299, originalPrice: 2499, rating: 4.2, reviewCount: 23400,
    image: "https://placehold.co/400x400/3b82f6/ffffff?text=Neckband",
    badge: "Best Seller",
    shortDescription: "20-hour playback neckband with deep bass and fast charging.",
    fullDescription: "Enjoy music on the go with this comfortable Bluetooth neckband. With 20 hours of playback, deep bass, and magnetic earbuds, it's perfect for workouts, commutes, and calls.",
    pros: ["20-hour playback", "Deep bass sound", "Fast charging", "Magnetic earbuds", "IPX5 sweat resistant"],
    cons: ["Average mic quality", "No ANC"],
    specs: { Battery: "20 hours", Bluetooth: "5.3", Charging: "Fast USB-C", Resistance: "IPX5", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE007",
    category: ["under-2000", "tech-gadgets", "lifestyle-gadgets"],
    isAvailable: true, publishedAt: "2026-06-07", updatedAt: "2026-06-21",
  },
  {
    id: "8", slug: "electric-handheld-blender", name: "Electric Handheld Blender", brand: "MixMaster",
    price: 1499, originalPrice: 2999, rating: 4.4, reviewCount: 6700,
    image: "https://placehold.co/400x400/ef4444/ffffff?text=Hand+Blender",
    badge: "Editor's Pick",
    shortDescription: "Powerful 250W handheld blender for smoothies, soups, and purees.",
    fullDescription: "This versatile handheld blender makes smoothies, soups, and baby food in seconds. The 250W motor and stainless steel blades blend smoothly, and it's easy to clean and store.",
    pros: ["Powerful 250W motor", "Stainless steel blades", "Easy to clean", "Compact storage", "Multi-use"],
    cons: ["Corded design", "Can heat up on long use"],
    specs: { Power: "250W", Blades: "Stainless Steel", Speed: "2 speeds", Use: "Smoothies, soups", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE008",
    category: ["under-2000", "kitchen-appliances", "home-kitchen"],
    isAvailable: true, publishedAt: "2026-06-08", updatedAt: "2026-06-21",
  },
  {
    id: "9", slug: "smart-led-bulb", name: "WiFi Smart LED Bulb", brand: "SmartGlow",
    price: 799, originalPrice: 1499, rating: 4.3, reviewCount: 11200,
    image: "https://placehold.co/400x400/8b5cf6/ffffff?text=Smart+Bulb",
    badge: "Trending",
    shortDescription: "16 million colors, voice control with Alexa and Google Home.",
    fullDescription: "Transform any room with this WiFi smart bulb. Control 16 million colors from your phone, set schedules, and use voice commands via Alexa or Google Home. No hub required.",
    pros: ["16 million colors", "Alexa & Google voice", "App scheduling", "No hub needed", "Energy efficient"],
    cons: ["Needs 2.4GHz WiFi", "Single bulb"],
    specs: { Power: "9W", Colors: "16 million", Control: "App + Voice", WiFi: "2.4GHz", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE009",
    category: ["under-2000", "smart-home", "tech-gadgets"],
    isAvailable: true, publishedAt: "2026-06-09", updatedAt: "2026-06-21",
  },

  // ───── UNDER ₹5000 ─────
  {
    id: "10", slug: "smart-watch", name: "Fitness Smart Watch", brand: "FitPulse",
    price: 2999, originalPrice: 5999, rating: 4.1, reviewCount: 34500,
    image: "https://placehold.co/400x400/3b82f6/ffffff?text=Smart+Watch",
    badge: "Best Seller",
    shortDescription: "AMOLED display smartwatch with SpO2, heart rate, and Bluetooth calling.",
    fullDescription: "Track your fitness goals with this feature-packed smartwatch. The AMOLED display, heart rate monitor, SpO2 tracking, and Bluetooth calling keep you connected and healthy all day.",
    pros: ["AMOLED display", "Bluetooth calling", "SpO2 & heart rate", "7-day battery", "100+ sports modes"],
    cons: ["No built-in GPS", "Basic app ecosystem"],
    specs: { Display: "1.43\" AMOLED", Battery: "7 days", Calling: "Bluetooth", Tracking: "Heart, SpO2, Sleep", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE010",
    category: ["under-5000", "tech-gadgets", "lifestyle-gadgets"],
    isAvailable: true, publishedAt: "2026-06-10", updatedAt: "2026-06-21",
  },
  {
    id: "11", slug: "electric-kettle", name: "Stainless Steel Electric Kettle", brand: "BoilPro",
    price: 1199, originalPrice: 2199, rating: 4.5, reviewCount: 18900,
    image: "https://placehold.co/400x400/ef4444/ffffff?text=Electric+Kettle",
    badge: "Editor's Pick",
    shortDescription: "1.5L fast-boil kettle with auto shut-off and boil-dry protection.",
    fullDescription: "Boil water in minutes with this 1500W electric kettle. The stainless steel body, auto shut-off, and boil-dry protection make it safe and durable for daily tea, coffee, and noodles.",
    pros: ["Fast 1500W boiling", "Auto shut-off", "Boil-dry protection", "1.5L capacity", "Stainless steel"],
    cons: ["Body gets hot", "No temperature control"],
    specs: { Power: "1500W", Capacity: "1.5 Litre", Body: "Stainless Steel", Safety: "Auto shut-off", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE011",
    category: ["under-5000", "kitchen-appliances", "home-kitchen"],
    isAvailable: true, publishedAt: "2026-06-11", updatedAt: "2026-06-21",
  },
  {
    id: "12", slug: "smart-door-lock", name: "Smart Fingerprint Door Lock", brand: "SecureHome",
    price: 4499, originalPrice: 7999, rating: 4.2, reviewCount: 3400,
    image: "https://placehold.co/400x400/8b5cf6/ffffff?text=Smart+Lock",
    badge: "New",
    shortDescription: "Keyless entry with fingerprint, PIN, and app unlock for your home.",
    fullDescription: "Upgrade your home security with this smart fingerprint door lock. Unlock with fingerprint, PIN code, RFID card, or smartphone app. Stores up to 100 fingerprints with anti-theft alarm.",
    pros: ["Fingerprint + PIN + app", "100 fingerprint storage", "Anti-theft alarm", "Easy installation", "Low battery alert"],
    cons: ["Needs battery backup", "Professional install advised"],
    specs: { Unlock: "Fingerprint/PIN/App/Card", Storage: "100 fingerprints", Battery: "AA x4", Alarm: "Anti-theft", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE012",
    category: ["under-5000", "smart-home", "home-kitchen"],
    isAvailable: true, publishedAt: "2026-06-12", updatedAt: "2026-06-21",
  },

  // ───── UNDER ₹10000 ─────
  {
    id: "13", slug: "robot-vacuum-cleaner", name: "Smart Robot Vacuum Cleaner", brand: "CleanBot",
    price: 8999, originalPrice: 14999, rating: 4.0, reviewCount: 5600,
    image: "https://placehold.co/400x400/8b5cf6/ffffff?text=Robot+Vacuum",
    badge: "Editor's Pick",
    shortDescription: "App-controlled robot vacuum with smart mapping and auto charging.",
    fullDescription: "Let this smart robot vacuum handle your floor cleaning. With app control, smart mapping, scheduled cleaning, and auto-return charging, your home stays spotless without lifting a finger.",
    pros: ["Smart app mapping", "Scheduled cleaning", "Auto-return charging", "Slim design for under furniture", "Strong suction"],
    cons: ["Small dustbin", "Struggles on thick carpets"],
    specs: { Suction: "2700Pa", Battery: "120 min runtime", Control: "App + Voice", Charging: "Auto-return", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE013",
    category: ["under-10000", "smart-home", "home-kitchen"],
    isAvailable: true, publishedAt: "2026-06-13", updatedAt: "2026-06-21",
  },
  {
    id: "14", slug: "air-fryer", name: "4.5L Digital Air Fryer", brand: "CrispChef",
    price: 4999, originalPrice: 8999, rating: 4.4, reviewCount: 21300,
    image: "https://placehold.co/400x400/ef4444/ffffff?text=Air+Fryer",
    badge: "Best Seller",
    shortDescription: "Oil-free air fryer with 8 presets for healthy, crispy cooking.",
    fullDescription: "Cook healthier meals with up to 90% less oil using this 4.5L digital air fryer. The 8 cooking presets, digital touch panel, and rapid air technology make crispy fries, chicken, and more.",
    pros: ["90% less oil cooking", "8 digital presets", "4.5L family size", "Easy-clean basket", "Rapid air tech"],
    cons: ["Bulky on counter", "Loud fan"],
    specs: { Capacity: "4.5 Litre", Power: "1400W", Presets: "8 modes", Control: "Digital touch", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE014",
    category: ["under-10000", "kitchen-appliances", "home-kitchen"],
    isAvailable: true, publishedAt: "2026-06-14", updatedAt: "2026-06-21",
  },
  {
    id: "15", slug: "wireless-earbuds-anc", name: "ANC Wireless Earbuds", brand: "SoundPro",
    price: 5999, originalPrice: 9999, rating: 4.3, reviewCount: 14200,
    image: "https://placehold.co/400x400/3b82f6/ffffff?text=ANC+Earbuds",
    badge: "Trending",
    shortDescription: "Active noise cancelling earbuds with 40-hour total playback.",
    fullDescription: "Immerse yourself in music with these ANC wireless earbuds. Active noise cancellation, 40-hour total battery with case, and crystal-clear calls make them perfect for travel and work.",
    pros: ["Active noise cancelling", "40-hour total battery", "Crystal-clear calls", "Fast charging", "Comfortable fit"],
    cons: ["ANC drains battery faster", "Touch controls sensitive"],
    specs: { ANC: "Yes", Battery: "40 hours total", Bluetooth: "5.3", Charging: "USB-C fast", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE015",
    category: ["under-10000", "tech-gadgets", "lifestyle-gadgets"],
    isAvailable: true, publishedAt: "2026-06-15", updatedAt: "2026-06-21",
  },

  // ───── UNDER ₹20000 ─────
  {
    id: "16", slug: "microwave-oven", name: "28L Convection Microwave Oven", brand: "CookWell",
    price: 12999, originalPrice: 18999, rating: 4.3, reviewCount: 8900,
    image: "https://placehold.co/400x400/ef4444/ffffff?text=Microwave",
    badge: "Editor's Pick",
    shortDescription: "28L convection microwave with grill and 100+ auto-cook menus.",
    fullDescription: "This versatile 28L convection microwave bakes, grills, and reheats with ease. With 100+ auto-cook menus and a stainless steel cavity, it handles everything from pizzas to cakes.",
    pros: ["28L large capacity", "Convection + grill", "100+ auto menus", "Stainless steel cavity", "Child lock safety"],
    cons: ["Heavy unit", "Learning curve for menus"],
    specs: { Capacity: "28 Litre", Type: "Convection + Grill", Menus: "100+ auto-cook", Cavity: "Stainless Steel", Warranty: "1 year + 3 yr magnetron" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE016",
    category: ["under-20000", "kitchen-appliances", "home-kitchen"],
    isAvailable: true, publishedAt: "2026-06-16", updatedAt: "2026-06-21",
  },
  {
    id: "17", slug: "smart-tv-32", name: "32-inch HD Smart LED TV", brand: "ViewMax",
    price: 11999, originalPrice: 17999, rating: 4.2, reviewCount: 27600,
    image: "https://placehold.co/400x400/3b82f6/ffffff?text=Smart+TV",
    badge: "Best Seller",
    shortDescription: "HD Ready smart TV with built-in apps and voice remote.",
    fullDescription: "Enjoy your favorite shows on this 32-inch HD smart LED TV. With built-in streaming apps, a voice remote, and crisp HD picture quality, it's the perfect entertainment hub for any room.",
    pros: ["HD Ready display", "Built-in streaming apps", "Voice remote", "Multiple ports", "Compact size"],
    cons: ["HD not Full HD", "Average built-in speakers"],
    specs: { Display: "32\" HD Ready", Resolution: "1366x768", OS: "Smart with apps", Ports: "2 HDMI, 2 USB", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE017",
    category: ["under-20000", "tech-gadgets", "smart-home"],
    isAvailable: true, publishedAt: "2026-06-17", updatedAt: "2026-06-21",
  },
  {
    id: "18", slug: "car-dash-camera", name: "Full HD Car Dash Camera", brand: "DriveSafe",
    price: 5499, originalPrice: 9999, rating: 4.1, reviewCount: 4500,
    image: "https://placehold.co/400x400/64748b/ffffff?text=Dash+Cam",
    badge: "New",
    shortDescription: "1080p dash cam with night vision and G-sensor crash detection.",
    fullDescription: "Protect yourself on the road with this Full HD dash camera. It records 1080p footage with night vision, loop recording, and G-sensor that auto-saves footage during sudden impacts.",
    pros: ["1080p Full HD recording", "Night vision", "G-sensor crash detect", "Loop recording", "Wide 170° angle"],
    cons: ["SD card not included", "Wiring setup needed"],
    specs: { Resolution: "1080p Full HD", Angle: "170 degrees", Night: "Yes", Sensor: "G-sensor", Warranty: "1 year" },
    affiliateLink: "https://www.amazon.in/dp/EXAMPLE018",
    category: ["under-20000", "car-accessories", "tech-gadgets"],
    isAvailable: true, publishedAt: "2026-06-18", updatedAt: "2026-06-21",
  },
];

// ── Price-based budget categories ──
export const budgetCategories: BudgetCategory[] = [
  { label: "Under ₹500", slug: "under-500", maxPrice: 500, description: "Smart picks that cost less than a movie ticket", icon: "🪙" },
  { label: "Under ₹1000", slug: "under-1000", maxPrice: 1000, description: "Everyday essentials under a thousand", icon: "💵" },
  { label: "Under ₹2000", slug: "under-2000", maxPrice: 2000, description: "Great value gadgets and home helpers", icon: "💰" },
  { label: "Under ₹5000", slug: "under-5000", maxPrice: 5000, description: "Premium picks without the premium price", icon: "💎" },
  { label: "Under ₹10000", slug: "under-10000", maxPrice: 10000, description: "Upgrade your home and tech setup", icon: "🚀" },
  { label: "Under ₹20000", slug: "under-20000", maxPrice: 20000, description: "Top-tier appliances and gadgets", icon: "👑" },
];

// ── Helper functions (same names kept for compatibility) ──
export function getPhonesByCategory(category: string): Phone[] {
  return phones.filter((p) => p.category.includes(category));
}

export function getProductsByCategory(category: string): Phone[] {
  return phones.filter((p) => p.category.includes(category));
}

export function getPhoneBySlug(slug: string): Phone | undefined {
  return phones.find((p) => p.slug === slug);
}

export function getLatestPhones(count = 6): Phone[] {
  return [...phones]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, count);
}

export function searchPhones(query: string): Phone[] {
  const q = query.toLowerCase();
  return phones.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.category.some((c) => c.toLowerCase().includes(q))
  );
}

export function getFeaturedPhones(): Phone[] {
  return phones.filter((p) => p.badge === "Editor's Pick" || p.badge === "Best Seller");
}

export function getTrendingProducts(count = 4): Phone[] {
  return phones.filter((p) => p.badge === "Trending" || p.badge === "Best Seller").slice(0, count);
}

export function getTopDeals(count = 4): Phone[] {
  return [...phones]
    .filter((p) => p.originalPrice)
    .sort((a, b) => {
      const discA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
      const discB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
      return discB - discA;
    })
    .slice(0, count);
}
