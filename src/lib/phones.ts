import { Phone, BudgetCategory, ProductCategory } from "@/types/phone";

// ── Product Categories (10 categories) ──
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

// Helper to build a product
function p(
  id: string, slug: string, name: string, brand: string, price: number, originalPrice: number,
  rating: number, reviewCount: number, image: string, badge: Phone["badge"],
  short: string, full: string, pros: string[], cons: string[], specs: Record<string, string>,
  affiliateLink: string, priceCat: string, prodCat: string, date: string
): Phone {
  return {
    id, slug, name, brand, price, originalPrice, rating, reviewCount, image, badge,
    shortDescription: short, fullDescription: full, pros, cons, specs, affiliateLink,
    category: [priceCat, prodCat], isAvailable: true, publishedAt: date, updatedAt: "2026-06-28",
  };
}

// ── 30 Real Products ──
export const phones: Phone[] = [
  // ═══ MOBILES & ELECTRONICS ═══
  p("1", "motorola-g42", "Motorola g42 (Atlantic Green, 4GB+64GB)", "Motorola", 13380, 16999, 4.1, 2400,
    "https://m.media-amazon.com/images/I/31tiAyYs7OL.jpg", "Best Seller",
    "AMOLED display, 50MP camera and Snapdragon 680 in a sleek, stock-Android phone.",
    "The Motorola g42 offers a clean stock Android experience with a vibrant AMOLED display and Dolby Atmos speakers. Powered by the Snapdragon 680 with a 50MP triple camera and 5000mAh battery, it's a reliable everyday smartphone.",
    ["AMOLED display with Dolby Atmos", "Clean stock Android", "50MP triple camera", "5000mAh battery", "Expandable storage"],
    ["Snapdragon 680 is mid-range", "64GB base storage", "No high refresh rate"],
    { Display: "6.4in AMOLED", Camera: "50MP triple", Processor: "Snapdragon 680", RAM: "4GB + 64GB", Battery: "5000mAh", OS: "Stock Android 12" },
    "https://www.amazon.in/Motorola-g42-4GB-Atlantic-Green/dp/B0BSGMDSDD?tag=smartpricei09-21", "under-20000", "mobiles-electronics", "2026-06-21"),

  p("2", "boat-rockerz-650-pro", "boAt Rockerz 650 Pro Headphones", "boAt", 2899, 8990, 4.2, 5600,
    "https://m.media-amazon.com/images/I/61-XNG5lPBL._SL1500_.jpg", "Top Deal",
    "40mm drivers, Dolby Audio and an incredible 80-hour battery life.",
    "The boAt Rockerz 650 Pro delivers boAt Signature Sound with 40mm dynamic drivers and Dolby Audio. With 80 hours of playback, fast charging, and Bluetooth 5.3, these over-ear headphones are built for long listening sessions.",
    ["80-hour playback", "40mm drivers with Dolby Audio", "1-hour fast charging", "Bluetooth 5.3 + AUX", "ENx call clarity"],
    ["Over-ear may feel warm", "No active noise cancellation"],
    { Drivers: "40mm dynamic", Audio: "Dolby Audio", Battery: "80 hours", Connectivity: "Bluetooth 5.3 + AUX", Controls: "Touch & swipe", Mics: "2 with ENx" },
    "https://www.amazon.in/boAt-Rockerz-650-Pro-Headphones/dp/B0DV5J28LW?tag=smartpricei09-21", "under-5000", "mobiles-electronics", "2026-06-20"),

  p("3", "casio-youth-digital-watch", "Casio Youth Digital Black Dial Unisex Watch", "Casio", 1294, 1295, 4.4, 12800,
    "https://m.media-amazon.com/images/I/51oNy5CTCOL._SX679_.jpg", "Value Pick",
    "Classic Casio digital watch with LED backlight and durable resin band.",
    "The Casio Youth Series digital watch is a timeless, lightweight unisex watch with a clear digital display and LED backlight. With quartz accuracy and a durable resin band, it's perfect for daily wear.",
    ["Reliable quartz movement", "LED backlight", "Lightweight 140g", "Durable resin band", "Trusted Casio brand"],
    ["Basic feature set", "Resin band only"],
    { Display: "Digital", Movement: "Quartz", Backlight: "LED", Weight: "140g", Dimensions: "38.2 x 35.2 x 8.5 mm", Band: "Black resin" },
    "https://www.amazon.in/Casio-Vintage-Digital-Black-Watch/dp/B00HFPIIOI?tag=smartpricei09-21", "under-2000", "mobiles-electronics", "2026-06-19"),

  // ═══ FASHION & BEAUTY ═══
  p("4", "calvin-klein-polo-tshirt", "Calvin Klein Jeans Slim Fit Cotton Polo T-Shirt", "Calvin Klein", 2719, 3999, 4.3, 1800,
    "https://m.media-amazon.com/images/I/61SK7MPUf1L._SY741_.jpg", "Editor's Pick",
    "Classic slim-fit white polo in 100% breathable cotton.",
    "This Calvin Klein Jeans polo brings premium style with a slim, tailored fit and a classic collared neckline. Made from 100% Better Cotton Initiative fabric, it's breathable and perfect for casual and everyday wear.",
    ["Premium Calvin Klein brand", "100% breathable cotton", "Slim modern fit", "Classic collared design", "Versatile casual wear"],
    ["Slim fit not for everyone", "Premium price"],
    { Material: "100% Cotton", Fit: "Slim Fit", Style: "Polo collar", Colour: "Bright White", Occasion: "Casual", Care: "Machine wash" },
    "https://www.amazon.in/Calvin-Klein-Jeans-Cotton-T-Shirt/dp/B0GFLPTBFP?tag=smartpricei09-21", "under-5000", "fashion-beauty", "2026-06-18"),

  p("5", "rareism-womens-shirt", "RAREISM Women's Regular Fit Plain Shirt", "RAREISM", 1125, 2499, 4.2, 940,
    "https://m.media-amazon.com/images/I/41wVQGTtVKL._SX569_.jpg", "Trending",
    "Light beige cotton shirt with mandarin collar and 3/4 sleeves.",
    "The RAREISM plain shirt is a versatile light beige piece in 100% cotton, featuring a mandarin collar and 3/4 sleeves. Its regular fit and button-front design make it perfect for modern everyday wear.",
    ["100% breathable cotton", "Mandarin collar style", "Versatile light beige", "Regular comfortable fit", "Sizes 2XS to 2XL"],
    ["Light colour stains easily", "Iron required"],
    { Material: "100% Cotton", Fit: "Regular Fit", Collar: "Mandarin", Sleeves: "3/4 length", Colour: "Light Beige", Sizes: "2XS - 2XL" },
    "https://www.amazon.in/RAREISM-Womens-Cuba-T-Mandarin-Regular/dp/B0G4D2DF1C?tag=smartpricei09-21", "under-2000", "fashion-beauty", "2026-06-17"),

  p("6", "sanfe-exfoliating-gel", "Sanfe Instant Tan & Dead Skin Removal Exfoliating Gel", "Sanfe", 349, 399, 4.0, 3200,
    "https://m.media-amazon.com/images/I/61-c5C3ocTL._SL1500_.jpg", "Value Pick",
    "Removes tan and dead skin in just 2 minutes with AHA formula.",
    "Sanfe's exfoliating gel uses AHAs and natural cellulose to gently remove dead skin and tan in just 2 minutes. Unscented and suitable for all skin types, it leaves skin brighter and smoother.",
    ["Works in 2 minutes", "AHA + natural cellulose", "Removes tan & brightens", "Gentle on all skin types", "Unscented formula"],
    ["Small 100g size", "Patch test advised"],
    { Quantity: "100g", Formula: "AHA + cellulose", Action: "Exfoliation & tan removal", SkinType: "All types", Scent: "Unscented", Use: "Body" },
    "https://www.amazon.in/Sanfe-Instant-Removal-Exfoliating-Exfoliation/dp/B0CJ5KRQ2D?tag=smartpricei09-21", "under-500", "fashion-beauty", "2026-06-16"),

  // ═══ HOME & FURNITURE ═══
  p("7", "banchmark-bath-mat", "Banchmark Home Furnishings Floral Tufted Bath Mat", "Banchmark", 345, 999, 4.1, 2100,
    "https://m.media-amazon.com/images/I/71h0ZHOoJ0L._SL1500_.jpg", "Top Deal",
    "Soft microfibre bath mat with anti-slip backing and floral design.",
    "Brighten your bathroom with this vibrant yellow daisy bath mat. The soft 40x60cm microfibre feels great underfoot, while the anti-slip rubber backing keeps it firmly in place. Machine washable and quick-drying.",
    ["Soft microfibre feel", "Anti-slip rubber backing", "Quick-drying & absorbent", "Machine washable", "Bright floral design"],
    ["Small single mat", "Colour may fade over time"],
    { Size: "40 x 60 cm", Material: "Microfibre", Backing: "Anti-slip rubber", Washable: "Machine washable", Design: "Yellow floral", Use: "Bath/bedroom/entryway" },
    "https://www.amazon.in/Banchmark-Home-Furnishings-Mat-Microfibre/dp/B0GZ5BX8TP?tag=smartpricei09-21", "under-500", "home-furniture", "2026-06-15"),

  p("8", "callas-computer-desk", "Callas Engineered Wood Computer Desk (Black)", "Callas", 3369, 4999, 4.2, 1400,
    "https://m.media-amazon.com/images/I/81hGvXvzf5L._SL1500_.jpg", "Editor's Pick",
    "Compact modern study desk in black engineered wood.",
    "The Callas computer desk is a compact, minimalist study table ideal for home offices, bedrooms, and study areas. Its sturdy engineered wood build and modern black finish fit neatly into small spaces.",
    ["Compact space-saving size", "Modern minimalist design", "Sturdy engineered wood", "Versatile study/office use", "Easy to assemble"],
    ["Assembly required", "Fixed height"],
    { Dimensions: "100 x 50 x 132 cm", Material: "Engineered Wood", Finish: "Black", Height: "75 cm", Shape: "Rectangular", Use: "Study/Office" },
    "https://www.amazon.in/Callas-Wooden-Storage-Computer-ST-04-Black/dp/B0DRNSNBYL?tag=smartpricei09-21", "under-5000", "home-furniture", "2026-06-14"),

  p("9", "uhud-floating-shelves", "UHUD Crafts Floating Wall Shelves (Set of 3)", "UHUD Crafts", 449, 1199, 4.0, 5800,
    "https://m.media-amazon.com/images/I/71Ay-N19PfL._SL1500_.jpg", "Best Seller",
    "Set of 3 U-shaped wall shelves with white laminated finish.",
    "These UHUD floating wall shelves add stylish storage to any room. The set of 3 U-shaped MDF shelves with white laminate finish hold up to 9kg each and come with pre-drilled keyholes for easy installation.",
    ["Set of 3 different sizes", "Holds up to 9kg each", "Easy keyhole installation", "Sturdy MDF build", "Multi-room use"],
    ["Wall drilling needed", "MDF not solid wood"],
    { Quantity: "3 shelves", Sizes: "40/33/28 cm", Material: "MDF laminated", Capacity: "9kg per shelf", Mount: "Wall", Colour: "White" },
    "https://www.amazon.in/UHUD-CRAFTS-Floating-Decoration-Engineered/dp/B0BTZRTDXF?tag=smartpricei09-21", "under-500", "home-furniture", "2026-06-13"),

  // ═══ GROCERIES & PET SUPPLIES ═══
  p("10", "aashirvaad-atta-5kg", "Aashirvaad Superior MP Atta (5kg)", "Aashirvaad", 306, 358, 4.5, 45000,
    "https://m.media-amazon.com/images/I/9104JpXbv6L._SL1500_.jpg", "Best Seller",
    "India's No.1 whole wheat atta for soft, fluffy chapatis.",
    "Aashirvaad Superior MP Atta is made from 100% pure whole wheat using the traditional chakki method. Its superior water absorption makes soft rotis that stay fresh longer, packed with natural fibre and protein.",
    ["100% pure whole wheat", "Traditional chakki method", "Superior water absorption", "High in fibre & protein", "Trusted No.1 brand"],
    ["Heavy 5kg to store", "Use within shelf life"],
    { Weight: "5kg", Type: "Whole Wheat", Method: "Chakki ground", Benefit: "High fibre & protein", PricePerKg: "Rs 61.20", Brand: "Aashirvaad" },
    "https://www.amazon.in/Aashirvaad-Superior-MP-Atta-5kg/dp/B00K0LUSSS?tag=smartpricei09-21", "under-500", "groceries-pets", "2026-06-12"),

  p("11", "vedaka-almonds-1kg", "Amazon Brand Vedaka California Almonds (1kg)", "Vedaka", 1089, 1639, 4.3, 28000,
    "https://m.media-amazon.com/images/I/71d9Qve9soL._SL1500_.jpg", "Value Pick",
    "100% natural premium California almonds, rich in protein.",
    "Vedaka California Almonds are 100% natural whole almonds with no added preservatives. Rich in protein and dietary fibre, these crunchy, premium-quality nuts are hygienically packed to FSSAI standards.",
    ["100% natural almonds", "Rich in protein & fibre", "Premium California quality", "FSSAI hygienic packing", "1kg value pack"],
    ["Refrigerate after opening", "Premium pricing"],
    { Weight: "1kg", Type: "California Almonds", Nutrition: "Protein & fibre", Quality: "FSSAI standard", Storage: "Cool dry place", Brand: "Vedaka" },
    "https://www.amazon.in/Amazon-Brand-Vedaka-Popular-Almonds/dp/B07GQNM6N2?tag=smartpricei09-21", "under-2000", "groceries-pets", "2026-06-11"),

  p("12", "fruitri-walnut-kernels", "Fruitri Kashmiri Walnut Kernels (1kg)", "Fruitri", 1649, 2999, 4.1, 4200,
    "https://m.media-amazon.com/images/I/71rPeNdcrlL._SL1500_.jpg", "Trending",
    "Premium shell-free Kashmiri walnut kernels, rich in Omega-3.",
    "Fruitri Kashmiri Walnut Kernels are premium, 100% natural walnuts sourced from Kashmir. Shell-free and ready to eat, they're rich in Omega-3 and antioxidants, vacuum-sealed in resealable pouches for freshness.",
    ["Premium Kashmiri walnuts", "Rich in Omega-3", "Shell-free ready to eat", "Vacuum-sealed freshness", "1kg (500g x 2)"],
    ["Higher price point", "Refrigerate to keep fresh"],
    { Weight: "1kg (500g x 2)", Origin: "Kashmir", Type: "Shell-free kernels", Nutrition: "Omega-3 & antioxidants", Packing: "Vacuum-sealed", Brand: "Fruitri" },
    "https://www.amazon.in/dp/B07N8F6Q4Q?tag=smartpricei09-21", "under-2000", "groceries-pets", "2026-06-10"),

  // ═══ BOOKS & EDUCATION ═══
  p("13", "the-invisible-man", "The Invisible Man by H.G. Wells", "Fingerprint", 375, 450, 4.4, 3400,
    "https://m.media-amazon.com/images/I/710u9aNNwnL._SY466_.jpg", "Value Pick",
    "H.G. Wells' gripping science fiction classic about science and morality.",
    "The Invisible Man is H.G. Wells' timeless science fiction novel exploring science, morality, and human nature. Set in a quaint English village, it follows a scientist who turns himself invisible with chilling consequences.",
    ["Timeless sci-fi classic", "Gripping storytelling", "Affordable edition", "Great for all ages", "Thought-provoking themes"],
    ["Classic English prose", "Paperback edition"],
    { Author: "H.G. Wells", Genre: "Science Fiction", Format: "Paperback", Language: "English", Type: "Classic Novel", Theme: "Science & morality" },
    "https://www.amazon.in/dp/9392895968?tag=smartpricei09-21", "under-500", "books-education", "2026-06-09"),

  p("14", "harry-potter-order-phoenix", "Harry Potter and the Order of the Phoenix (Book 5)", "Bloomsbury", 563, 699, 4.8, 38000,
    "https://m.media-amazon.com/images/I/81Budsu1XBL._SL1500_.jpg", "Best Seller",
    "The fifth book in J.K. Rowling's beloved Harry Potter series.",
    "Harry Potter and the Order of the Phoenix is the fifth installment in J.K. Rowling's legendary series. Harry returns to Hogwarts to face new challenges, a secret order, and the growing threat of Lord Voldemort.",
    ["Beloved J.K. Rowling series", "Bestselling fantasy novel", "Great for all ages", "Collectible edition", "Engaging storytelling"],
    ["Long read", "Better after earlier books"],
    { Author: "J.K. Rowling", Genre: "Fantasy", Format: "Paperback", Series: "Harry Potter Book 5", Language: "English", Publisher: "Bloomsbury" },
    "https://www.amazon.in/HARRY-POTTER-ORDER-PHOENIX-5/dp/1408855690?tag=smartpricei09-21", "under-1000", "books-education", "2026-06-08"),

  p("15", "designing-data-intensive-apps", "Designing Data-Intensive Applications (2nd Edition)", "O'Reilly", 1950, 2200, 3.9, 173,
    "https://m.media-amazon.com/images/I/718mrBeIGAL._SL1319_.jpg", "Editor's Pick",
    "The definitive guide to building reliable, scalable data systems.",
    "Designing Data-Intensive Applications by Martin Kleppmann is the essential book for engineers building modern data systems. This 2nd edition covers the big ideas behind reliable, scalable, and maintainable applications.",
    ["Essential for engineers", "Covers system design depth", "Updated 2nd edition", "Clear explanations", "Industry-standard reference"],
    ["Technical & dense", "Greyscalereprint"],
    { Author: "Martin Kleppmann", Genre: "Technology", Format: "Paperback", Edition: "2nd Edition", Language: "English", Topic: "System Design" },
    "https://www.amazon.in/Designing-Data-Intensive-Applications-Maintainable-Greyscale/dp/9368089043?tag=smartpricei09-21", "under-2000", "books-education", "2026-06-07"),

  // ═══ VIDEO & MUSIC ═══
  p("16", "saregama-gulzar-vinyl", "Saregama Vinyl Record - Gulzar's Fursat Ke Raat Din", "Saregama", 3590, 3590, 3.6, 20,
    "https://m.media-amazon.com/images/I/711krnEHzgL._SL1500_.jpg", "New",
    "Classic Bollywood vinyl record featuring Gulzar and R.D. Burman.",
    "This Saregama vinyl record brings the timeless poetry of Gulzar to life, composed by legends R.D. Burman and Khaiyyaam. A collector's delight for lovers of classic Bollywood music on authentic vinyl.",
    ["Authentic vinyl record", "Classic Gulzar poetry", "R.D. Burman compositions", "Collector's item", "Premium Saregama quality"],
    ["Needs a turntable", "Niche collector appeal"],
    { Format: "Vinyl", Artist: "Gulzar", Composer: "R.D. Burman, Khaiyyaam", Genre: "Bollywood Classic", Label: "Saregama", Type: "LP Record" },
    "https://www.amazon.in/Saregama-Vinyl-Record-Gulzars-Fursat/dp/B0FKC1YLLF?tag=smartpricei09-21", "under-5000", "video-music", "2026-06-06"),

  p("17", "arijit-singh-vinyl-lp", "The Essential Arijit Singh - Coloured LP", "Sony Music", 2499, 2499, 5.0, 6,
    "https://m.media-amazon.com/images/I/61KGSai7q4L._SL1280_.jpg", "Editor's Pick",
    "Coloured vinyl LP featuring the best of Arijit Singh.",
    "The Essential Arijit Singh on coloured vinyl is a must-have for fans. This LP collects some of the most loved tracks by India's favourite voice, pressed on premium coloured vinyl. Amazon's Choice.",
    ["Coloured premium vinyl", "Best of Arijit Singh", "Amazon's Choice", "Collector's edition", "Top 5.0 rating"],
    ["Needs a turntable", "Limited track selection"],
    { Format: "Coloured Vinyl", Artist: "Arijit Singh", Genre: "Bollywood", Type: "LP Record", Label: "Sony Music", Edition: "Coloured" },
    "https://www.amazon.in/ESSENTIAL-ARIJIT-SINGH-COLOURED-LP/dp/B0DGLQM9Q9?tag=smartpricei09-21", "under-5000", "video-music", "2026-06-05"),

  p("18", "beatles-abbey-road-lp", "Abbey Road Anniversary (1LP) - The Beatles", "Universal Music", 3360, 9781, 4.8, 30675,
    "https://m.media-amazon.com/images/I/81Q7HZYO1rL._SL1500_.jpg", "Top Deal",
    "The Beatles' iconic Abbey Road on anniversary edition vinyl.",
    "Abbey Road Anniversary edition brings The Beatles' legendary album to vinyl with remastered sound. A #1 best seller in Rock, this 1LP edition is essential for any music lover's collection.",
    ["Iconic Beatles album", "#1 Best Seller in Rock", "Anniversary remaster", "66% off deal", "Top 4.8 rating"],
    ["Needs a turntable", "Collector demand varies"],
    { Format: "Vinyl 1LP", Artist: "The Beatles", Genre: "Rock", Edition: "Anniversary", Type: "LP Record", Ranking: "#1 in Rock" },
    "https://www.amazon.in/Abbey-Road-Anniversary-1LP-Beatles/dp/B07VNS48HD?tag=smartpricei09-21", "under-5000", "video-music", "2026-06-04"),

  // ═══ GAMES & LIVE SHOPPING ═══
  p("19", "evofox-gaming-controller", "EvoFox One S V2 Wireless Gaming Controller", "EvoFox", 1599, 2299, 4.4, 2770,
    "https://m.media-amazon.com/images/I/61JXE-Hrh7L._SL1500_.jpg", "Best Seller",
    "3-mode wireless controller with HallSense precision joysticks.",
    "The EvoFox One S V2 is a universal 3-mode wireless gaming controller with HallSense precision joysticks. With Bluetooth 5.0, 2.4GHz, and Type-C fast charging, it works across PC, mobile, and Android TV.",
    ["Universal 3-mode connectivity", "HallSense precision joysticks", "Type-C fast charging", "Works on PC/Mobile/TV", "Top 4.4 rating"],
    ["Not console-specific", "White shows dirt"],
    { Modes: "BT 5.0 / 2.4GHz / Wired", Joysticks: "HallSense", Charging: "Type-C fast", Compatible: "PC, Mobile, Android TV", Colour: "White", Rating: "4.4 stars" },
    "https://www.amazon.in/EvoFox-One-Universal-Wireless-Controller/dp/B0DZ6T16SD?tag=smartpricei09-21", "under-2000", "games-live", "2026-06-03"),

  p("20", "ps5-ghost-of-yotei", "Sony PS5 Ghost of Yotei (PlayStation 5)", "Sony", 4543, 5199, 4.4, 361,
    "https://m.media-amazon.com/images/I/81p8hiryVYL._SL1500_.jpg", "Trending",
    "Epic PlayStation 5 action-adventure game, rated 18+.",
    "Ghost of Yotei is an epic action-adventure exclusive for PlayStation 5. Dive into a stunning open world with immersive combat and breathtaking visuals. A must-have title for any PS5 owner.",
    ["PS5 exclusive title", "Stunning open world", "Immersive combat", "Highly rated 4.4", "400+ bought monthly"],
    ["Rated 18+ only", "Requires PS5 console"],
    { Platform: "PlayStation 5", Genre: "Action-Adventure", Rating: "18+", Type: "Game Disc", Players: "Single player", Brand: "Sony" },
    "https://www.amazon.in/Sony-PS5-Ghost-of-Yotei/dp/B0F6VH981P?tag=smartpricei09-21", "under-5000", "games-live", "2026-06-02"),

  p("21", "evofox-katana-keyboard", "EvoFox Katana S Mini Mechanical Wireless Keyboard", "EvoFox", 2349, 3499, 4.3, 380,
    "https://m.media-amazon.com/images/I/61bFfzSUVSL._SL1500_.jpg", "Editor's Pick",
    "68-key mechanical keyboard with hot-swap switches and RGB.",
    "The EvoFox Katana S is a compact 68-key mechanical keyboard with tri-mode connectivity, hot-swappable red switches, and rainbow backlight. Perfect for gamers and typists who want portability and customization.",
    ["Tri-mode connectivity", "Hot-swappable red switches", "Compact 68-key layout", "Rainbow RGB backlight", "Rechargeable battery"],
    ["Compact may lack keys", "Red switches not for all"],
    { Keys: "68-key compact", Switches: "Hot-swap Red", Modes: "3x BT / 2.4GHz / Wired", Backlight: "Rainbow RGB", Battery: "Rechargeable", Rating: "4.3 stars" },
    "https://www.amazon.in/EvoFox-Mechanical-Connectivity-Hot-Swappable-Rechargeable/dp/B0FBRXM2RG?tag=smartpricei09-21", "under-5000", "games-live", "2026-06-01"),

  // ═══ PHARMACY & HOUSEHOLD ═══
  p("22", "pharmeasy-bp-monitor", "PharmEasy Digital Blood Pressure Monitor", "PharmEasy", 1219, 2599, 3.9, 346,
    "https://m.media-amazon.com/images/I/61eQGnN5hcL._SL1254_.jpg", "Top Deal",
    "Automatic BP machine storing 90 readings for 2 users.",
    "The PharmEasy Digital BP Monitor offers accurate home blood pressure monitoring with single-touch operation. It stores 90 readings for 2 users, with irregular heartbeat and hypertension indicators. USB powered.",
    ["Accurate automatic readings", "Stores 90 readings/2 users", "Single touch operation", "Irregular heartbeat alert", "USB powered"],
    ["Cuff fit matters", "Average 3.9 rating"],
    { Type: "Automatic BP Monitor", Memory: "90 readings, 2 users", Power: "USB", Indicators: "Heartbeat & hypertension", Operation: "Single touch", Use: "Home & clinic" },
    "https://www.amazon.in/PharmEasy-Digital-Monitor-Instrument-Monitoring/dp/B0DP9S6GDG?tag=smartpricei09-21", "under-2000", "pharmacy-household", "2026-05-30"),

  p("23", "pharmeasy-weight-machine", "PharmEasy Smart Body Weight Machine", "PharmEasy", 799, 2799, 5.0, 7,
    "https://m.media-amazon.com/images/I/517EyCJdRIL._SL1254_.jpg", "Best Seller",
    "Smart digital scale with BMI and 18 body composition metrics.",
    "The PharmEasy Smart Weight Machine measures weight plus 18 body composition parameters including BMI and body fat. It syncs with Android & iOS apps to help you track your fitness progress over time.",
    ["18 body metrics", "BMI & body fat analysis", "Android & iOS app sync", "Sleek modern design", "Top 5.0 rating"],
    ["App needed for full data", "Few reviews so far"],
    { Type: "Smart Digital Scale", Metrics: "18 parameters", Analysis: "BMI & body fat", App: "Android & iOS", Display: "Digital", Use: "Home fitness" },
    "https://www.amazon.in/PharmEasy-Analyzer-Weighing-Composition-Parameters/dp/B0FZBKXR3S?tag=smartpricei09-21", "under-1000", "pharmacy-household", "2026-05-29"),

  p("24", "pharmeasy-steam-vaporizer", "PharmEasy All-in-One Steam Vaporizer", "PharmEasy", 399, 599, 3.6, 7333,
    "https://m.media-amazon.com/images/I/51kZSyIpWuL._SL1500_.jpg", "Value Pick",
    "Steam vaporizer and facial steamer for cold, cough and skincare.",
    "This versatile PharmEasy vaporizer doubles as a facial steamer and nozzle inhaler. Ideal for relieving cold and cough symptoms for adults and kids, and great for facial sauna and skincare routines.",
    ["Relieves cold & cough", "Doubles as facial steamer", "Nozzle inhaler included", "For adults & kids", "Affordable price"],
    ["Average 3.6 rating", "Basic build quality"],
    { Type: "Steam Vaporizer", Extras: "Facial steamer + inhaler", Use: "Cold, cough, skincare", Suitable: "Adults & kids", Power: "Electric", Brand: "PharmEasy" },
    "https://www.amazon.in/PharmEasy-Vaporizer-machine-Inhaler-Steamer/dp/B093T9HBMW?tag=smartpricei09-21", "under-500", "pharmacy-household", "2026-05-28"),

  // ═══ TOYS & KIDS ═══
  p("25", "scooba-crown-pig-toy", "SCOOBA Crown Pig Soft Toy for Kids (40cm)", "SCOOBA", 699, 1999, 4.2, 4435,
    "https://m.media-amazon.com/images/I/61fTyntZ1YL._SL1080_.jpg", "Best Seller",
    "Adorable 40cm soft plush crown pig toy for kids and babies.",
    "This SCOOBA Crown Pig soft toy is a huggable 40cm plush perfect for kids and babies. Soft, cuddly, and Amazon's Choice, it makes a delightful gift and a comforting companion for little ones.",
    ["Soft cuddly plush", "Large 40cm size", "Amazon's Choice", "Safe for babies", "65% off deal"],
    ["Spot clean only", "Colour varies slightly"],
    { Size: "40cm", Material: "Soft plush", Suitable: "Kids & babies", Type: "Stuffed toy", Design: "Crown Pig", Rating: "4.2 stars" },
    "https://www.amazon.in/SCOOBA-Crown-Soft-Toys-Babies/dp/B0G3WZWGQS?tag=smartpricei09-21", "under-1000", "toys-kids", "2026-05-27"),

  p("26", "masha-bear-playset", "Masha and the Bear Playset", "Masha and the Bear", 1639, 2059, 4.2, 316,
    "https://m.media-amazon.com/images/I/71aD7j9z6kS._SL1100_.jpg", "Editor's Pick",
    "Collectible Masha and Bear figurine playset for kids.",
    "Bring the popular Masha and the Bear cartoon to life with this adorable playset featuring a 4cm Masha and 6cm Bear figurine. A multicolour collectible that kids love for imaginative roleplay.",
    ["Popular cartoon characters", "Collectible figurines", "Encourages roleplay", "Amazon's Choice", "Great gift for kids"],
    ["Small figures", "Limited play pieces"],
    { Contents: "Masha 4cm + Bear 6cm", Material: "Plastic", Colour: "Multicolour", Type: "Figurine playset", Brand: "Masha and the Bear", Rating: "4.2 stars" },
    "https://www.amazon.in/Masha-Bear-Playset-Multicolour/dp/B0995W915C?tag=smartpricei09-21", "under-2000", "toys-kids", "2026-05-26"),

  p("27", "baby-paws-dalmatian", "Baby Paws Dalmatian Puppy Toy (22cm)", "Baby Paws", 1638, 2499, 4.6, 2366,
    "https://m.media-amazon.com/images/I/719CctioYgL._SL1500_.jpg", "Trending",
    "Interactive puppy toy with swaddle bag and 5 sounds.",
    "The Baby Paws Dalmatian puppy is an interactive pretend-play toy with a cute swaddle bag. It makes 5 adorable sounds and offers QR-code roleplay, making it a perfect birthday gift for kids aged 4+.",
    ["Interactive 5 sounds", "Cute swaddle bag", "QR roleplay feature", "Great for ages 4+", "Top 4.6 rating"],
    ["Needs batteries", "QR app dependent"],
    { Size: "22cm", Sounds: "5 adorable sounds", Extras: "Swaddle bag + QR play", Age: "4+ years", Type: "Interactive toy", Rating: "4.6 stars" },
    "https://www.amazon.in/Baby-Paws-918276-Dalmatian/dp/B0BZN6187R?tag=smartpricei09-21", "under-2000", "toys-kids", "2026-05-25"),

  // ═══ SPORTS & FITNESS ═══
  p("28", "klapp-cricket-kit", "KLAPP Champion Cricket Kit (Junior)", "KLAPP", 2999, 5999, 3.6, 1386,
    "https://m.media-amazon.com/images/I/713f57lfa1L._SL1500_.jpg", "Best Seller",
    "Complete junior cricket kit for young right-handed players.",
    "The KLAPP Champion Cricket Kit is a complete junior set for budding cricketers. Designed for right-hand players, it includes everything needed to start playing, all at a great 50% off value.",
    ["Complete cricket set", "Junior size", "Great 50% off value", "Good for beginners", "Trusted KLAPP brand"],
    ["Average 3.6 rating", "Junior size only"],
    { Type: "Complete cricket kit", Size: "Junior", Hand: "Right hand", Contents: "Bat, pads & gear", Level: "Beginner", Rating: "3.6 stars" },
    "https://www.amazon.in/Klapp-Stainless-Champion-Cricket-Junior/dp/B07W97M67S?tag=smartpricei09-21", "under-5000", "sports-fitness", "2026-05-24"),

  p("29", "solpro-badminton-set", "SOLPRO Vortek 3000 Badminton Racket Set", "SOLPRO", 479, 1369, 4.0, 17,
    "https://m.media-amazon.com/images/I/71QHI90NI2L._SL1500_.jpg", "Top Deal",
    "2 lightweight badminton rackets with 3 shuttlecocks and bag.",
    "The SOLPRO Vortek 3000 set includes 2 lightweight, durable badminton rackets, 3 shuttlecocks, and a full cover bag. Perfect for beginners and intermediate players, for both kids and adults.",
    ["2 rackets + 3 shuttles", "Lightweight & durable", "Full cover bag included", "For kids & adults", "65% off deal"],
    ["Entry-level rackets", "Few reviews"],
    { Contents: "2 rackets + 3 shuttles", Extras: "Full cover bag", Level: "Beginner-Intermediate", Suitable: "Kids & adults", Colour: "Black/Red", Rating: "4.0 stars" },
    "https://www.amazon.in/SOLPRO-Badminton-Shuttlecocks-Intermediate-Lightweight/dp/B0GS5DZ83Y?tag=smartpricei09-21", "under-500", "sports-fitness", "2026-05-23"),

  p("30", "usi-hand-grip", "USI Universal Steel Hand Grip Strengthener", "USI Universal", 999, 1049, 4.4, 826,
    "https://m.media-amazon.com/images/I/411Yz6S-yZL.jpg", "Value Pick",
    "Heavy-duty hand grip strengthener with 150kg capacity.",
    "The USI Universal Hand Grip Strengthener is a heavy-duty steel forearm and finger exerciser with up to 150kg resistance. Built tough for serious grip strength training, ideal for athletes and gym-goers.",
    ["Heavy-duty steel build", "Up to 150kg resistance", "Builds grip & forearm", "Compact portable size", "Trusted USI brand"],
    ["High resistance for some", "Single resistance level"],
    { Type: "Hand grip trainer", Capacity: "150kg / 300lbs", Material: "Steel", Targets: "Grip, wrist, forearm", Colour: "Silver", Rating: "4.4 stars" },
    "https://www.amazon.in/USI-UNIVERSAL-UNBEATABLE-Strengthener-Silver-300/dp/B01N6E8BSY?tag=smartpricei09-21", "under-1000", "sports-fitness", "2026-05-22"),
];

// ── Price-based budget categories ──
export const budgetCategories: BudgetCategory[] = [
  { label: "Under ₹500", slug: "under-500", maxPrice: 500, description: "Smart picks that cost less than a movie ticket", icon: "🪙" },
  { label: "Under ₹1000", slug: "under-1000", maxPrice: 1000, description: "Everyday essentials under a thousand", icon: "💵" },
  { label: "Under ₹2000", slug: "under-2000", maxPrice: 2000, description: "Great value finds under ₹2000", icon: "💰" },
  { label: "Under ₹5000", slug: "under-5000", maxPrice: 5000, description: "Premium picks without the premium price", icon: "💎" },
  { label: "Under ₹10000", slug: "under-10000", maxPrice: 10000, description: "Upgrade your home and tech setup", icon: "🚀" },
  { label: "Under ₹20000", slug: "under-20000", maxPrice: 20000, description: "Top-tier products and gadgets", icon: "👑" },
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