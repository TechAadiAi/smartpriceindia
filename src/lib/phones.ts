import { Phone, BudgetCategory, ProductCategory } from "@/types/phone";

// ── Product Categories (gadgets + home & kitchen) ──
export const productCategories: ProductCategory[] = [
  { label: "Mobiles & Electronics", slug: "mobiles-electronics", description: "Phones, laptops, gadgets and accessories", icon: "📱", color: "from-blue-500 to-cyan-500" },
  { label: "Fashion & Beauty", slug: "fashion-beauty", description: "Clothing, footwear, grooming and cosmetics", icon: "👗", color: "from-pink-500 to-rose-500" },
  { label: "Home & Furniture", slug: "home-furniture", description: "Furniture, decor and home essentials", icon: "🛋️", color: "from-orange-500 to-amber-500" },
  { label: "Groceries & Pet Supplies", slug: "groceries-pets", description: "Daily groceries and pet care products", icon: "🛒", color: "from-green-500 to-emerald-500" },
  { label: "Books & Education", slug: "books-education", description: "Books, stationery and learning material", icon: "📚", color: "from-indigo-500 to-violet-500" },
  { label: "Video & Music", slug: "video-music", description: "Audio, video and entertainment gear", icon: "🎵", color: "from-purple-500 to-fuchsia-500" },
  { label: "Games & Live Shopping", slug: "games-live", description: "Gaming gear and live shopping deals", icon: "🎮", color: "from-red-500 to-pink-500" },
  { label: "Pharmacy & Household", slug: "pharmacy-household", description: "Health, wellness and household needs", icon: "💊", color: "from-teal-500 to-cyan-500" },
  { label: "Toys & Kids", slug: "toys-kids", description: "Toys, baby care and kids products", icon: "🧸", color: "from-yellow-500 to-orange-500" },
  { label: "Sports & Fitness", slug: "sports-fitness", description: "Fitness gear and sports equipment", icon: "🏏", color: "from-lime-500 to-green-500" },
];

// Helper to build a product with less repetition
function p(
  id: string, slug: string, name: string, brand: string, price: number, originalPrice: number,
  rating: number, reviewCount: number, color: string, label: string,
  badge: Phone["badge"], short: string, full: string,
  pros: string[], cons: string[], specs: Record<string, string>,
  priceCat: string, prodCats: string[], date: string
): Phone {
  return {
    id, slug, name, brand, price, originalPrice, rating, reviewCount,
    image: `https://placehold.co/400x400/${color}/ffffff?text=${encodeURIComponent(label)}`,
    badge, shortDescription: short, fullDescription: full, pros, cons, specs,
    affiliateLink: `https://www.amazon.in/dp/EXAMPLE${id.padStart(3, "0")}`,
    category: [priceCat, ...prodCats], isAvailable: true, publishedAt: date, updatedAt: "2026-06-21",
  };
}

// ── Demo Products (30 total, 5 per price range, all 7 categories covered) ──
// NOTE: Replace affiliateLink + price with your real Amazon links later
export const phones: Phone[] = [
  // ───── UNDER ₹500 ─────
  p("1", "stainless-steel-vegetable-chopper", "Stainless Steel Vegetable Chopper", "Kitchen Pro", 399, 799, 4.3, 8420, "f97316", "Veg Chopper", "Best Seller",
    "Chop vegetables in seconds with this sturdy steel hand-press chopper.",
    "This compact vegetable chopper makes meal prep effortless. Sharp stainless steel blades cut onions, tomatoes, and more in seconds with a simple hand press.",
    ["Fast manual chopping", "Sharp steel blades", "Easy to clean", "No electricity needed", "Compact storage"],
    ["Manual effort needed", "Small capacity", "Not for hard vegetables"],
    { Material: "Stainless Steel + ABS", Capacity: "500ml", Blades: "3 sharp blades", Warranty: "6 months", Use: "Onion, tomato, garlic" },
    "under-500", ["groceries-pets"], "2026-06-01"),

  p("2", "microfiber-cleaning-cloth-set", "Microfiber Cleaning Cloth Set (Pack of 6)", "CleanMax", 299, 599, 4.4, 12300, "10b981", "Cloth Set", "Top Deal",
    "Lint-free microfiber cloths for streak-free cleaning of any surface.",
    "These ultra-absorbent microfiber cloths trap dust and dirt without scratching. Perfect for cars, kitchens, glass, and electronics. Reusable and machine washable.",
    ["Lint-free cleaning", "Highly absorbent", "Machine washable", "Multi-surface use", "Pack of 6 value"],
    ["Colors may fade", "Thin material"],
    { Material: "Microfiber", Quantity: "6 pieces", Size: "30x30 cm", Washable: "Yes", Use: "Car, kitchen, glass" },
    "under-500", ["fashion-beauty"], "2026-06-02"),

  p("3", "usb-led-light", "Portable USB LED Light", "GlowTech", 149, 399, 4.1, 5600, "3b82f6", "USB LED", "Value Pick",
    "Plug-and-play USB LED light for laptops, power banks, and night reading.",
    "This flexible USB LED light plugs into any USB port for bright, eye-friendly light. Great for late-night work, reading, or as an emergency light during power cuts.",
    ["Plug and play", "Flexible neck", "Eye-friendly light", "Ultra portable", "Very affordable"],
    ["Needs USB power source", "Single brightness"],
    { Power: "USB 5V", Light: "LED warm white", Length: "Flexible 20cm", Use: "Laptop, power bank", Warranty: "3 months" },
    "under-500", ["mobiles-electronics"], "2026-06-03"),

  p("4", "drawer-organizer-set", "Drawer Organizer Set (Pack of 4)", "HomeNeat", 449, 899, 4.2, 3200, "10b981", "Drawer Set", "New",
    "Adjustable drawer dividers to organize clothes, socks, and accessories.",
    "Keep your drawers tidy with this set of 4 adjustable organizers. Perfect for socks, underwear, ties, and accessories. Foldable fabric design fits any drawer.",
    ["Set of 4 organizers", "Adjustable compartments", "Foldable fabric", "Fits any drawer", "Easy to clean"],
    ["Fabric only, not rigid", "Medium durability"],
    { Material: "Non-woven fabric", Quantity: "4 pieces", Compartments: "Adjustable", Foldable: "Yes", Use: "Wardrobe, drawer" },
    "under-500", ["books-education"], "2026-06-04"),

  p("5", "car-mobile-charger", "Dual USB Car Charger", "DriveSafe", 299, 699, 4.3, 9100, "64748b", "Car Charger", "Best Seller",
    "Fast-charging dual USB car charger for phones and tablets on the go.",
    "Charge two devices at once with this dual-port car charger. Fast charging support keeps your phone powered during long drives. Compact design with LED indicator.",
    ["Dual USB ports", "Fast charging", "LED indicator", "Compact design", "Universal compatibility"],
    ["No USB-C port", "Plastic build"],
    { Ports: "2 USB-A", Output: "3.1A fast charge", Indicator: "LED", Compatible: "All phones", Warranty: "6 months" },
    "under-500", ["groceries-pets"], "2026-06-05"),

  // ───── UNDER ₹1000 ─────
  p("6", "wireless-mouse", "Wireless Optical Mouse", "TechGrip", 599, 1299, 4.2, 9800, "3b82f6", "Mouse", "Best Seller",
    "Smooth 2.4GHz wireless mouse with silent clicks and long battery life.",
    "Enjoy clutter-free productivity with this ergonomic wireless mouse. The 2.4GHz connection is lag-free, and the silent click design is perfect for offices and shared spaces.",
    ["Lag-free 2.4GHz", "Silent clicks", "Ergonomic design", "Long battery life", "Plug-and-play USB"],
    ["AA battery needed", "Not rechargeable"],
    { Connectivity: "2.4GHz Wireless", DPI: "1600", Battery: "1x AA", Range: "10 meters", Warranty: "1 year" },
    "under-1000", ["mobiles-electronics"], "2026-06-06"),

  p("7", "rotating-spice-rack", "Rotating Spice Rack Organizer", "HomeNeat", 899, 1499, 4.5, 4300, "10b981", "Spice Rack", "Editor's Pick",
    "360° rotating spice rack that keeps your kitchen counter tidy.",
    "This rotating spice rack holds all your spices in one compact, accessible spot. The 360° spin makes finding the right spice quick and easy, decluttering your counter.",
    ["360° rotation", "Saves counter space", "Sturdy build", "Easy to assemble", "Modern look"],
    ["Jars not included", "Medium capacity"],
    { Material: "ABS Plastic", Tiers: "2 levels", Rotation: "360 degrees", Capacity: "16 jars", Use: "Kitchen counter" },
    "under-1000", ["books-education"], "2026-06-07"),

  p("8", "car-phone-holder", "Magnetic Car Phone Holder", "DriveSafe", 449, 999, 4.3, 15600, "64748b", "Car Holder", "Trending",
    "Strong magnetic dashboard mount for safe hands-free navigation.",
    "Keep your phone secure and visible while driving with this strong magnetic car mount. The 360° rotation lets you view in any orientation, perfect for navigation and calls.",
    ["Strong magnetic hold", "360° rotation", "Easy installation", "Works with any phone", "Compact design"],
    ["Magnet plate needs sticking", "Not for thick cases"],
    { Mount: "Dashboard/Vent", Hold: "Magnetic", Rotation: "360 degrees", Compatible: "All phones", Warranty: "6 months" },
    "under-1000", ["games-live"], "2026-06-08"),

  p("9", "smart-plug", "WiFi Smart Plug", "SmartGlow", 699, 1299, 4.2, 7800, "8b5cf6", "Smart Plug", "New",
    "Control any appliance from your phone with this WiFi smart plug.",
    "Turn any regular appliance into a smart one. Control it from your phone, set schedules, and use voice commands with Alexa or Google Home. Track energy usage too.",
    ["App + voice control", "Schedule timers", "Energy monitoring", "Alexa & Google", "Easy setup"],
    ["Needs 2.4GHz WiFi", "Single socket"],
    { Power: "16A max", Control: "App + Voice", WiFi: "2.4GHz", Timer: "Yes", Warranty: "1 year" },
    "under-1000", ["groceries-pets"], "2026-06-09"),

  p("10", "insulated-water-bottle", "Insulated Steel Water Bottle 1L", "HydroLife", 749, 1499, 4.6, 18200, "f97316", "Water Bottle", "Best Seller",
    "Keeps drinks hot for 12 hours and cold for 24 hours.",
    "This double-wall vacuum insulated bottle keeps beverages at the perfect temperature all day. Leak-proof, BPA-free, and built from premium stainless steel.",
    ["12hr hot / 24hr cold", "Leak-proof lid", "BPA-free steel", "1L capacity", "Durable build"],
    ["Slightly heavy", "Hand wash recommended"],
    { Material: "Stainless Steel", Capacity: "1 Litre", Insulation: "Double-wall vacuum", Leakproof: "Yes", Warranty: "1 year" },
    "under-1000", ["fashion-beauty"], "2026-06-10"),

  // ───── UNDER ₹2000 ─────
  p("11", "bluetooth-neckband", "Bluetooth Wireless Neckband", "SoundPro", 1299, 2499, 4.2, 23400, "3b82f6", "Neckband", "Best Seller",
    "20-hour playback neckband with deep bass and fast charging.",
    "Enjoy music on the go with this comfortable Bluetooth neckband. With 20 hours of playback, deep bass, and magnetic earbuds, it's perfect for workouts and commutes.",
    ["20-hour playback", "Deep bass sound", "Fast charging", "Magnetic earbuds", "IPX5 sweat resistant"],
    ["Average mic quality", "No ANC"],
    { Battery: "20 hours", Bluetooth: "5.3", Charging: "Fast USB-C", Resistance: "IPX5", Warranty: "1 year" },
    "under-2000", ["fashion-beauty"], "2026-06-11"),

  p("12", "electric-handheld-blender", "Electric Handheld Blender", "MixMaster", 1499, 2999, 4.4, 6700, "ef4444", "Hand Blender", "Editor's Pick",
    "Powerful 250W handheld blender for smoothies, soups, and purees.",
    "This versatile handheld blender makes smoothies, soups, and baby food in seconds. The 250W motor and stainless steel blades blend smoothly, and it's easy to clean.",
    ["Powerful 250W motor", "Stainless steel blades", "Easy to clean", "Compact storage", "Multi-use"],
    ["Corded design", "Can heat up on long use"],
    { Power: "250W", Blades: "Stainless Steel", Speed: "2 speeds", Use: "Smoothies, soups", Warranty: "1 year" },
    "under-2000", ["pharmacy-household"], "2026-06-12"),

  p("13", "smart-led-bulb", "WiFi Smart LED Bulb", "SmartGlow", 799, 1499, 4.3, 11200, "8b5cf6", "Smart Bulb", "Trending",
    "16 million colors, voice control with Alexa and Google Home.",
    "Transform any room with this WiFi smart bulb. Control 16 million colors from your phone, set schedules, and use voice commands via Alexa or Google Home. No hub required.",
    ["16 million colors", "Alexa & Google voice", "App scheduling", "No hub needed", "Energy efficient"],
    ["Needs 2.4GHz WiFi", "Single bulb"],
    { Power: "9W", Colors: "16 million", Control: "App + Voice", WiFi: "2.4GHz", Warranty: "1 year" },
    "under-2000", ["books-education"], "2026-06-13"),

  p("14", "foldable-storage-boxes", "Foldable Storage Boxes (Set of 3)", "HomeNeat", 1199, 2199, 4.4, 5400, "10b981", "Storage Box", "Value Pick",
    "Collapsible fabric storage boxes for wardrobes, shelves, and toys.",
    "Organize your home with these sturdy foldable storage boxes. Perfect for clothes, toys, books, and accessories. Collapse them flat when not in use to save space.",
    ["Set of 3 boxes", "Foldable design", "Sturdy handles", "Multi-purpose", "Saves space"],
    ["Fabric not waterproof", "Medium load capacity"],
    { Material: "Non-woven fabric", Quantity: "3 boxes", Foldable: "Yes", Handles: "Reinforced", Use: "Wardrobe, shelf" },
    "under-2000", ["home-furniture"], "2026-06-14"),

  p("15", "car-vacuum-cleaner", "Portable Car Vacuum Cleaner", "DriveSafe", 1599, 2999, 4.1, 8900, "64748b", "Car Vacuum", "New",
    "Powerful handheld vacuum for cleaning your car interior.",
    "Keep your car spotless with this portable vacuum cleaner. Strong suction picks up dust, crumbs, and pet hair. Comes with multiple nozzles and plugs into the car socket.",
    ["Strong suction", "Multiple nozzles", "Plugs into car socket", "Washable filter", "Lightweight"],
    ["Corded (12V socket)", "Small dustbin"],
    { Suction: "5000Pa", Power: "12V car socket", Nozzles: "3 attachments", Filter: "Washable", Warranty: "1 year" },
    "under-2000", ["games-live"], "2026-06-15"),

  // ───── UNDER ₹5000 ─────
  p("16", "fitness-smart-watch", "Fitness Smart Watch", "FitPulse", 2999, 5999, 4.1, 34500, "3b82f6", "Smart Watch", "Best Seller",
    "AMOLED display smartwatch with SpO2, heart rate, and Bluetooth calling.",
    "Track your fitness goals with this feature-packed smartwatch. The AMOLED display, heart rate monitor, SpO2 tracking, and Bluetooth calling keep you connected and healthy.",
    ["AMOLED display", "Bluetooth calling", "SpO2 & heart rate", "7-day battery", "100+ sports modes"],
    ["No built-in GPS", "Basic app ecosystem"],
    { Display: "1.43in AMOLED", Battery: "7 days", Calling: "Bluetooth", Tracking: "Heart, SpO2, Sleep", Warranty: "1 year" },
    "under-5000", ["mobiles-electronics"], "2026-06-16"),

  p("17", "electric-kettle", "Stainless Steel Electric Kettle", "BoilPro", 1199, 2199, 4.5, 18900, "ef4444", "Kettle", "Editor's Pick",
    "1.5L fast-boil kettle with auto shut-off and boil-dry protection.",
    "Boil water in minutes with this 1500W electric kettle. The stainless steel body, auto shut-off, and boil-dry protection make it safe and durable for daily use.",
    ["Fast 1500W boiling", "Auto shut-off", "Boil-dry protection", "1.5L capacity", "Stainless steel"],
    ["Body gets hot", "No temperature control"],
    { Power: "1500W", Capacity: "1.5 Litre", Body: "Stainless Steel", Safety: "Auto shut-off", Warranty: "1 year" },
    "under-5000", ["pharmacy-household"], "2026-06-17"),

  p("18", "smart-door-lock", "Smart Fingerprint Door Lock", "SecureHome", 4499, 7999, 4.2, 3400, "8b5cf6", "Smart Lock", "New",
    "Keyless entry with fingerprint, PIN, and app unlock for your home.",
    "Upgrade your home security with this smart fingerprint door lock. Unlock with fingerprint, PIN, RFID card, or app. Stores up to 100 fingerprints with anti-theft alarm.",
    ["Fingerprint + PIN + app", "100 fingerprint storage", "Anti-theft alarm", "Easy installation", "Low battery alert"],
    ["Needs battery backup", "Professional install advised"],
    { Unlock: "Fingerprint/PIN/App/Card", Storage: "100 fingerprints", Battery: "AA x4", Alarm: "Anti-theft", Warranty: "1 year" },
    "under-5000", ["toys-kids"], "2026-06-18"),

  p("19", "wall-mounted-organizer", "Wall-Mounted Storage Organizer", "HomeNeat", 1999, 3499, 4.3, 4100, "10b981", "Wall Organizer", "Value Pick",
    "Multi-shelf wall organizer to maximize vertical space at home.",
    "Make the most of your wall space with this sturdy multi-shelf organizer. Perfect for kitchens, bathrooms, and home offices. Holds spices, toiletries, books, and more.",
    ["Multiple shelves", "Wall-mounted space saver", "Sturdy metal build", "Easy installation", "Versatile use"],
    ["Drilling required", "Hardware extra"],
    { Material: "Powder-coated metal", Shelves: "3 tiers", Mount: "Wall", Load: "Up to 10kg", Warranty: "1 year" },
    "under-5000", ["home-furniture"], "2026-06-19"),

  p("20", "car-dash-camera", "Full HD Car Dash Camera", "DriveSafe", 3499, 5999, 4.1, 4500, "64748b", "Dash Cam", "Trending",
    "1080p dash cam with night vision and G-sensor crash detection.",
    "Protect yourself on the road with this Full HD dash camera. Records 1080p footage with night vision, loop recording, and G-sensor that auto-saves footage during impacts.",
    ["1080p Full HD recording", "Night vision", "G-sensor crash detect", "Loop recording", "Wide 170° angle"],
    ["SD card not included", "Wiring setup needed"],
    { Resolution: "1080p Full HD", Angle: "170 degrees", Night: "Yes", Sensor: "G-sensor", Warranty: "1 year" },
    "under-5000", ["sports-fitness"], "2026-06-20"),

  // ───── UNDER ₹10000 ─────
  p("21", "robot-vacuum-cleaner", "Smart Robot Vacuum Cleaner", "CleanBot", 8999, 14999, 4.0, 5600, "8b5cf6", "Robot Vacuum", "Editor's Pick",
    "App-controlled robot vacuum with smart mapping and auto charging.",
    "Let this smart robot vacuum handle your floor cleaning. With app control, smart mapping, scheduled cleaning, and auto-return charging, your home stays spotless.",
    ["Smart app mapping", "Scheduled cleaning", "Auto-return charging", "Slim design", "Strong suction"],
    ["Small dustbin", "Struggles on thick carpets"],
    { Suction: "2700Pa", Battery: "120 min runtime", Control: "App + Voice", Charging: "Auto-return", Warranty: "1 year" },
    "under-10000", ["sports-fitness"], "2026-06-13"),

  p("22", "air-fryer", "4.5L Digital Air Fryer", "CrispChef", 4999, 8999, 4.4, 21300, "ef4444", "Air Fryer", "Best Seller",
    "Oil-free air fryer with 8 presets for healthy, crispy cooking.",
    "Cook healthier meals with up to 90% less oil using this 4.5L digital air fryer. The 8 cooking presets and rapid air technology make crispy fries, chicken, and more.",
    ["90% less oil cooking", "8 digital presets", "4.5L family size", "Easy-clean basket", "Rapid air tech"],
    ["Bulky on counter", "Loud fan"],
    { Capacity: "4.5 Litre", Power: "1400W", Presets: "8 modes", Control: "Digital touch", Warranty: "1 year" },
    "under-10000", ["pharmacy-household"], "2026-06-14"),

  p("23", "wireless-earbuds-anc", "ANC Wireless Earbuds", "SoundPro", 5999, 9999, 4.3, 14200, "3b82f6", "ANC Earbuds", "Trending",
    "Active noise cancelling earbuds with 40-hour total playback.",
    "Immerse yourself in music with these ANC wireless earbuds. Active noise cancellation, 40-hour total battery with case, and crystal-clear calls make them perfect for travel.",
    ["Active noise cancelling", "40-hour total battery", "Crystal-clear calls", "Fast charging", "Comfortable fit"],
    ["ANC drains battery faster", "Touch controls sensitive"],
    { ANC: "Yes", Battery: "40 hours total", Bluetooth: "5.3", Charging: "USB-C fast", Warranty: "1 year" },
    "under-10000", ["video-music"], "2026-06-15"),

  p("24", "security-camera", "WiFi Smart Security Camera", "SecureHome", 2999, 4999, 4.3, 16700, "8b5cf6", "Security Cam", "Best Seller",
    "360° home security camera with night vision and motion alerts.",
    "Keep an eye on your home from anywhere with this WiFi security camera. 360° coverage, night vision, two-way audio, and motion alerts straight to your phone.",
    ["360° pan and tilt", "Night vision", "Two-way audio", "Motion alerts", "Cloud + SD storage"],
    ["Needs 2.4GHz WiFi", "SD card extra"],
    { Resolution: "1080p Full HD", Coverage: "360 degrees", Night: "Yes", Audio: "Two-way", Warranty: "1 year" },
    "under-10000", ["toys-kids"], "2026-06-12"),

  p("25", "trolley-organizer", "3-Tier Kitchen Trolley Organizer", "HomeNeat", 3999, 6999, 4.2, 3800, "10b981", "Trolley", "New",
    "Rolling 3-tier trolley for kitchen, bathroom, or office storage.",
    "Add mobile storage anywhere with this 3-tier rolling trolley. Sturdy metal build with smooth wheels, perfect for organizing fruits, snacks, toiletries, or stationery.",
    ["3-tier storage", "Smooth rolling wheels", "Sturdy metal build", "Easy assembly", "Multi-room use"],
    ["Assembly required", "Wheels basic"],
    { Material: "Powder-coated steel", Tiers: "3 levels", Wheels: "4 (2 locking)", Load: "Up to 15kg", Warranty: "1 year" },
    "under-10000", ["home-furniture"], "2026-06-11"),

  // ───── UNDER ₹20000 ─────
  p("26", "microwave-oven", "28L Convection Microwave Oven", "CookWell", 12999, 18999, 4.3, 8900, "ef4444", "Microwave", "Editor's Pick",
    "28L convection microwave with grill and 100+ auto-cook menus.",
    "This versatile 28L convection microwave bakes, grills, and reheats with ease. With 100+ auto-cook menus and a stainless steel cavity, it handles everything from pizzas to cakes.",
    ["28L large capacity", "Convection + grill", "100+ auto menus", "Stainless steel cavity", "Child lock safety"],
    ["Heavy unit", "Learning curve for menus"],
    { Capacity: "28 Litre", Type: "Convection + Grill", Menus: "100+ auto-cook", Cavity: "Stainless Steel", Warranty: "1 yr + 3 yr magnetron" },
    "under-20000", ["sports-fitness"], "2026-06-16"),

  p("27", "smart-tv-32", "32-inch HD Smart LED TV", "ViewMax", 11999, 17999, 4.2, 27600, "3b82f6", "Smart TV", "Best Seller",
    "HD Ready smart TV with built-in apps and voice remote.",
    "Enjoy your favorite shows on this 32-inch HD smart LED TV. With built-in streaming apps, a voice remote, and crisp HD picture quality, it's the perfect entertainment hub.",
    ["HD Ready display", "Built-in streaming apps", "Voice remote", "Multiple ports", "Compact size"],
    ["HD not Full HD", "Average built-in speakers"],
    { Display: "32in HD Ready", Resolution: "1366x768", OS: "Smart with apps", Ports: "2 HDMI, 2 USB", Warranty: "1 year" },
    "under-20000", ["video-music"], "2026-06-17"),

  p("28", "car-infotainment", "Android Car Stereo Infotainment", "DriveSafe", 8999, 14999, 4.1, 5200, "64748b", "Car Stereo", "Trending",
    "9-inch touchscreen Android car stereo with GPS and camera support.",
    "Upgrade your car with this 9-inch Android touchscreen stereo. Built-in GPS, Bluetooth, WiFi, and support for reverse cameras turn your dashboard into a smart hub.",
    ["9-inch HD touchscreen", "Android with apps", "GPS navigation", "Bluetooth + WiFi", "Reverse cam support"],
    ["Professional install needed", "Camera sold separately"],
    { Display: "9in touchscreen", OS: "Android", GPS: "Built-in", Connectivity: "BT + WiFi", Warranty: "1 year" },
    "under-20000", ["games-live"], "2026-06-18"),

  p("29", "induction-cooktop", "Induction Cooktop with Storage Stand", "CookWell", 4999, 8499, 4.3, 11400, "ef4444", "Induction", "Value Pick",
    "2000W induction cooktop with preset menus and a storage stand.",
    "Cook efficiently with this 2000W induction cooktop featuring Indian preset menus. Comes with a handy storage stand to organize it neatly when not in use.",
    ["2000W fast heating", "Indian preset menus", "Storage stand included", "Auto shut-off", "Easy to clean"],
    ["Needs induction cookware", "Glass top care needed"],
    { Power: "2000W", Presets: "Indian menus", Safety: "Auto shut-off", Extra: "Storage stand", Warranty: "1 year" },
    "under-20000", ["toys-kids"], "2026-06-19"),

  p("30", "smart-speaker", "Voice Assistant Smart Speaker", "SmartGlow", 4499, 6999, 4.4, 19800, "8b5cf6", "Smart Speaker", "Best Seller",
    "Voice-controlled smart speaker with rich sound and home control.",
    "Play music, control smart devices, set reminders, and get answers with this voice assistant speaker. Rich 360° sound fills the room and links your whole smart home.",
    ["Voice assistant built-in", "360° rich sound", "Controls smart devices", "Hands-free calls", "Compact design"],
    ["Needs WiFi", "Subscription for some features"],
    { Audio: "360° sound", Assistant: "Voice built-in", Connectivity: "WiFi + Bluetooth", Control: "Smart home", Warranty: "1 year" },
    "under-20000", ["video-music"], "2026-06-20"),
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

// ── Helper functions ──
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
  return [...phones].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()).slice(0, count);
}
export function searchPhones(query: string): Phone[] {
  const q = query.toLowerCase();
  return phones.filter((p) =>
    p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q) ||
    p.shortDescription.toLowerCase().includes(q) || p.category.some((c) => c.toLowerCase().includes(q))
  );
}
export function getFeaturedPhones(): Phone[] {
  return phones.filter((p) => p.badge === "Editor's Pick" || p.badge === "Best Seller");
}
export function getTrendingProducts(count = 4): Phone[] {
  return phones.filter((p) => p.badge === "Trending" || p.badge === "Best Seller").slice(0, count);
}
export function getTopDeals(count = 4): Phone[] {
  return [...phones].filter((p) => p.originalPrice).sort((a, b) => {
    const discA = ((a.originalPrice! - a.price) / a.originalPrice!) * 100;
    const discB = ((b.originalPrice! - b.price) / b.originalPrice!) * 100;
    return discB - discA;
  }).slice(0, count);
}