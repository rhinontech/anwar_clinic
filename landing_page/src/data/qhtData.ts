export interface NavDropdownItem {
  label: string;
  href: string;
  image?: string;
  desc?: string;
}

export interface CelebritySlide {
  name: string;
  location?: string;
  image: string;
}

export interface TruthItem {
  id: number;
  title: string;
  desc: string;
}

export interface PromiseItem {
  id: number;
  title: string;
  desc: string;
}

export interface DifferenceItem {
  title: string;
  icon: string;
  qhtPromise: string;
  otherClinics: string;
}

export interface ExpertStage {
  title: string;
  percentage: string;
  whoWithYou: {
    role: string;
    icon: string;
  }[];
  howTheySupport: string[];
}

export interface PricePackage {
  technique: string;
  fullName: string;
  desc: string;
  perGraft: number;
  totalRange: string;
  isFeatured?: boolean;
  features: string[];
  link: string;
}

export interface ServiceAccordionItem {
  id: number;
  title: string;
  subtitle: string;
  paragraphs: string[];
  image: string;
  link: string;
}

export interface TransformationItem {
  id: number;
  patientName: string;
  grade: string;
  beforeImg: string;
  afterImg: string;
}

export interface GoogleReview {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Branch {
  region: string;
  name: string;
  address: string;
  mapLink: string;
}

// 1. Navigation Data
export const NAV_RESULTS_MENU = {
  baldnessGrades: [
    { label: "Grade 02", href: "/results/?baldness-grade=grade-02" },
    { label: "Grade 2A", href: "/results/?baldness-grade=grade-2a" },
    { label: "Grade 03", href: "/results/?baldness-grade=grade-03" },
    { label: "Grade 04", href: "/results/?baldness-grade=grade-04" },
    { label: "Grade 05", href: "/results/?baldness-grade=grade-05" },
    { label: "Grade 06", href: "/results/?baldness-grade=grade-06" },
    { label: "Grade 07", href: "/results/?baldness-grade=grade-07" },
    { label: "Diffuse Grade 3A", href: "/results/?baldness-grade=diffuse-grade-3a" },
    { label: "Diffuse Grade 4A", href: "/results/?baldness-grade=diffuse-grade-4a" },
    { label: "Diffuse Grade 5A", href: "/results/?baldness-grade=diffuse-grade-5a" },
    { label: "Diffuse Grade 6A", href: "/results/?baldness-grade=diffuse-grade-06" },
  ],
  patientTypes: [
    { label: "Celebrity Results", href: "/results/?patient-type=celebrity" },
    { label: "Indian Patients", href: "/results/?patient-type=normal" },
    { label: "International Patients", href: "/results/?patient-type=international" },
  ],
  graftRanges: [
    { label: "1000–2000 Grafts", href: "/results/?grafts-range=1100-2000" },
    { label: "2100-3000 Grafts", href: "/results/?grafts-range=2100-3000" },
    { label: "3100-4000 Grafts", href: "/results/?grafts-range=3100-4000" },
    { label: "4100-5000 Grafts", href: "/results/?grafts-range=4100-5000" },
    { label: "5100-6000 Grafts", href: "/results/?grafts-range=5100-6000" },
    { label: "6100-7000 Grafts", href: "/results/?grafts-range=6100-7000" },
    { label: "7100-8000 Grafts", href: "/results/?grafts-range=7100-8000" },
    { label: "8000+ Grafts", href: "/results/?grafts-range=8000+" },
  ],
  areasTreated: [
    { label: "Frontal Hairline Results", href: "/results/?area-treated=frontal", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/rm-area-icon-1.png" },
    { label: "Crown Area Results", href: "/results/?area-treated=frontalcrown", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/rm-area-icon-2.png" },
    { label: "Temples & Hairline Reconstruction", href: "/results/?area-treated=frontal-temples", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/rm-area-icon-3.png" },
    { label: "Full Scalp Restorations", href: "/results/?area-treated=frontalmid-scalptemples", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/rm-area-icon-4.png" },
  ],
};

export const NAV_SERVICES_LIST = [
  { label: "Hair Transplant For Men", href: "/services/hair-transplant-for-men/" },
  { label: "Hair Transplant Repair", href: "/services/failed-hair-transplant-repair/" },
  { label: "Bad Hair Transplant Correction", href: "/services/bad-hair-transplant-correction/" },
  { label: "Unshaven Hair Transplant", href: "/services/unshaven-hair-transplant/" },
  { label: "Beard Hair Transplant", href: "/services/beard-hair-transplant-in-india/" },
  { label: "Ultra-Dense Hair Transplant", href: "/services/ultra-dense-hair-transplant/" },
  { label: "QHT Hair Transplant", href: "/services/quick-hair-transplant-in-india/" },
  { label: "FUE Hair Transplant", href: "/services/best-fue-hair-transplant-in-india/" },
  { label: "Moustache Hair Transplant", href: "/services/moustache-hair-transplant-in-india/" },
  { label: "Afro Hair Transplant", href: "/services/afro-hair-transplant-in-india/" },
  { label: "Female Hair Transplant", href: "/services/female-hair-transplantation/" },
  { label: "Burn Hair Transplant", href: "/services/burn-hair-transplant/" },
  { label: "Caucasian Patients Hair Transplant", href: "/services/caucasian-patients-hair-transplant/" },
  { label: "Crown Hair Transplant", href: "/services/crown-hair-transplant/" },
  { label: "Custom Hairline Transplant", href: "/services/custom-hairline-transplant/" },
  { label: "Eyebrow Reconstruction", href: "/services/eyebrow-reconstruction-in-india/" },
  { label: "Hairline Reconstruction", href: "/services/hairline-reconstruction/" },
  { label: "Natural Look Hair Restoration", href: "/services/natural-look-hair-restoration/" },
  { label: "Social Media Influencer Hair", href: "/services/social-media-influencer-hair-transplant/" },
  { label: "Temple Hair Transplant", href: "/services/temple-hair-transplant/" },
  { label: "FUT Hair Transplant", href: "/services/fut-hair-transplant/" },
];

export const NAV_ABOUT_LIST = [
  { label: "Who we are", href: "/about/", image: "https://www.qhtclinic.com/wp-content/uploads/2025/09/about-list-1.webp" },
  { label: "Blog", href: "/blogs/", image: "https://www.qhtclinic.com/wp-content/uploads/2025/09/about-list-2.webp" },
  { label: "Career", href: "/career/", image: "https://www.qhtclinic.com/wp-content/uploads/2025/09/about-list-3.webp" },
  { label: "Medical Tourism", href: "/medical-tourism/", image: "https://www.qhtclinic.com/wp-content/uploads/2025/09/about-list-4.webp" },
  { label: "Frequently Asked Questions", href: "/faq/", image: "https://www.qhtclinic.com/wp-content/uploads/2025/09/about-list-5.webp" },
];

// 2. Hero Results Slider Data
export const HERO_SLIDES: CelebritySlide[] = [
  { name: "Rajpal Yadav", location: "Mumbai, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Rajpal-Yadav-2.webp" },
  { name: "Dayanand Shetty", location: "Mumbai, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Dayanand-Shetty.webp" },
  { name: "Nadeem", location: "Delhi, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Nadeem.webp" },
  { name: "Armaan Malik", location: "Mumbai, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Armaan-Malik-3.webp" },
  { name: "Saurav", location: "Haridwar, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Saurav.webp" },
  { name: "Tarun", location: "Rajasthan, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Tarun.webp" },
  { name: "Shubham", location: "Gurugram, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Shubham.webp" },
  { name: "Sanat", location: "Kolkata, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Sanat.webp" },
  { name: "Puneet", location: "Bangalore, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Puneet.webp" },
  { name: "Anurudra", location: "Noida, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Anurudra.webp" },
  { name: "Kshitij", location: "Jabalpur, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Kshitij.webp" },
  { name: "Gaurav", location: "Dehradun, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Gaurav.webp" },
  { name: "Dheerendra", location: "Lucknow, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Dheerendra.webp" },
  { name: "Utkrishta", location: "Hyderabad, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/utkrishta.webp" },
  { name: "Rajat", location: "Chandigarh, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Rajat.webp" },
  { name: "Kamal", location: "Ahmedabad, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Kamal.webp" },
  { name: "Abhyudaya", location: "Delhi, India", image: "https://www.qhtclinic.com/wp-content/uploads/2026/07/Abhyudaya.webp" },
];

// 3. The Bald Truth
export const BALD_TRUTH_ITEMS: TruthItem[] = [
  {
    id: 1,
    title: "10% of transplants need repair",
    desc: "ISHRS reports that around 10% of global cases require corrective surgery for failed results.",
  },
  {
    id: 2,
    title: "Donor hair is non-regenerative",
    desc: "Once removed from the donor site, it never grows back.",
  },
  {
    id: 3,
    title: "Hair Loss doesn’t stop on its own",
    desc: "Once balding starts, it progresses, making the recovery troublesome.",
  },
  {
    id: 4,
    title: "Cheap clinics cost more later",
    desc: "Low-cost procedures often lead to expensive repair surgeries.",
  },
  {
    id: 5,
    title: "The Wrong Technique causes permanent damage.",
    desc: "The old method of Hair transplant leaves scars and poor hairlines.",
  },
  {
    id: 6,
    title: "Experience matters",
    desc: "Only skilled surgeons, like those at QHT Clinic, deliver safe, lasting results.",
  },
];

// 4. Our Promises
export const PROMISES_LIST: PromiseItem[] = [
  {
    id: 1,
    title: "Natural Hairline Design",
    desc: "Custom hairlines designed for your face, age, and unique personality.",
  },
  {
    id: 2,
    title: "Safe Hair Transplant",
    desc: "All procedures in world-class OTs by QHT-trained experts only, always.",
  },
  {
    id: 3,
    title: "Advanced Tools & QHT Technique",
    desc: "State-of-the-art tools and the QHT method ensure precise, quick & pain free recovery.",
  },
  {
    id: 4,
    title: "Life-Long Results",
    desc: "Our transplants last; enjoy permanent hair and confidence that stays.",
  },
  {
    id: 5,
    title: "Transparent Pricing (No Hidden Costs)",
    desc: "Upfront pricing, no surprises — clear packages, honest billing, guaranteed always.",
  },
];

export const PROMISE_GALLERY_IMAGES = [
  "https://www.qhtclinic.com/wp-content/uploads/2025/11/OT-4-1.webp",
  "https://www.qhtclinic.com/wp-content/uploads/2025/11/OT-3-1.webp",
  "https://www.qhtclinic.com/wp-content/uploads/2025/11/Hairline-design.webp",
  "https://www.qhtclinic.com/wp-content/uploads/2025/11/Surgical-suite.webp",
  "https://www.qhtclinic.com/wp-content/uploads/2025/11/OT-5-1.webp",
  "https://www.qhtclinic.com/wp-content/uploads/2025/11/Hairline-design-1.webp",
];

// 5. See the Difference
export const DIFFERENCE_ITEMS: DifferenceItem[] = [
  {
    title: "Natural Hairline",
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/11/Vector.png",
    qhtPromise: "We design your hairline to match your age and face, so it looks naturally yours.",
    otherClinics: "They use the same template on everyone, which often makes the hairline look fake.",
  },
  {
    title: "Safe Procedure",
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/11/2005565196496.png",
    qhtPromise: "Your procedure is done in a proper, world-class OT under expert supervision.",
    otherClinics: "Many operate in casual setups where safety is not always guaranteed.",
  },
  {
    title: "Advanced Technique",
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/11/2005565196496.png",
    qhtPromise: "We utilise the latest tools and methods to ensure a smooth, scar-free recovery.",
    otherClinics: "Older techniques can leave marks and take longer to heal.",
  },
  {
    title: "Life-Long Results",
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/11/2004932934464.png",
    qhtPromise: "With 95%+ graft survival, your results are dense, natural, and stay with you for life.",
    otherClinics: "Results are often uneven and don’t last very long.",
  },
  {
    title: "Transparent Pricing",
    icon: "https://www.qhtclinic.com/wp-content/uploads/2025/11/Vector-2.png",
    qhtPromise: "You’ll always know exactly what you’re paying for—no hidden surprises.",
    otherClinics: "Extra charges and unclear billing are common.",
  },
];

// 6. Experts Journey
export const EXPERT_STAGES: ExpertStage[] = [
  {
    title: "Consultation",
    percentage: "0%",
    whoWithYou: [
      { role: "Hair Transplant Surgeon", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/hp-expert-icon-1.webp" },
      { role: "Dermatologist", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/derma-icon.webp" },
      { role: "Consultation Coordinator", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/coordinator-icon.webp" },
    ],
    howTheySupport: [
      "Surgeon designs a natural hairline",
      "Dermatologist checks scalp health",
      "Coordinator explains process, cost, and results clearly.",
    ],
  },
  {
    title: "Pre-Op",
    percentage: "30%",
    whoWithYou: [
      { role: "Hair Restoration Surgeon", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/hp-expert-icon-1.webp" },
      { role: "Anesthetist", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/anesthetist-icon.webp" },
      { role: "Technicians", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/technicians-icon.webp" },
    ],
    howTheySupport: [
      "The team plans grafts",
      "Ensures painless preparation",
      "Maintains strict hygiene and surgical safety.",
    ],
  },
  {
    title: "Surgery",
    percentage: "60%",
    whoWithYou: [
      { role: "Hair Transplant Surgeon", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/hp-expert-icon-1.webp" },
      { role: "Anesthetist", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/anesthetist-icon.webp" },
    ],
    howTheySupport: [
      "Each graft is carefully extracted",
      "Implanted with precision while ensuring your comfort and safety.",
    ],
  },
  {
    title: "Recovery",
    percentage: "100%",
    whoWithYou: [
      { role: "Hair Transplant Surgeon", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/hp-expert-icon-1.webp" },
      { role: "Dermatologist", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/derma-icon.webp" },
      { role: "Patient Care Team", icon: "https://www.qhtclinic.com/wp-content/uploads/2025/10/care-team.webp" },
    ],
    howTheySupport: [
      "Monitored recovery with scalp care",
      "Medication",
      "Follow-ups for natural, long-lasting results.",
    ],
  },
];

// 7. Pricing by Technique
export const PRICING_PACKAGES: PricePackage[] = [
  {
    technique: "FUT Technique",
    fullName: "Follicular Unit Transplantation",
    desc: "Strip-harvesting technique. Ideal for advanced baldness (Norwood 5–7) requiring a high number of grafts in a single session. Most cost-effective per-graft rate.",
    perGraft: 50,
    totalRange: "₹40,000 – ₹2,50,000",
    features: [
      "Best for Norwood Grade 4–7",
      "Maximum grafts in one session",
      "Linear donor scar (concealable)",
      "Lower per-graft cost",
      "Suitable for longer hairstyles",
    ],
    link: "/services/fut-hair-transplant/",
  },
  {
    technique: "FUE Technique",
    fullName: "Follicular Unit Extraction",
    desc: "Minimally invasive, no linear scar. Each follicle extracted individually. Globally preferred for its scar-free outcome and versatility for scalp and facial hair.",
    perGraft: 70,
    totalRange: "₹56,000 – ₹3,50,000",
    isFeatured: true,
    features: [
      "Suitable for Norwood Grade 2–7",
      "No linear scar",
      "Faster recovery than FUT",
      "Suitable for scalp + facial hair",
      "Most popular globally",
    ],
    link: "/services/best-fue-hair-transplant-in-india/",
  },
  {
    technique: "QHT Technique",
    fullName: "Quick Hair Transplant (Patented)",
    desc: "QHT Clinic’s exclusive patented method. Simultaneous extraction and implantation reduces graft out-of-body time to under 2 hours for superior survival and density.",
    perGraft: 100,
    totalRange: "₹80,000 – ₹5,00,000",
    features: [
      "Highest graft survival rate",
      "Simultaneous extraction + implantation",
      "SAVA implanter pen precision",
      "Faster procedure duration",
      "Ultra-dense natural results",
    ],
    link: "/services/quick-hair-transplant-in-india/",
  },
];

// 8. Services Accordion
export const SERVICES_ACCORDION: ServiceAccordionItem[] = [
  {
    id: 1,
    title: "Hair Transplant for Men",
    subtitle: "A surgical procedure used for treating receding hairlines or baldness in men.",
    paragraphs: [
      "Male pattern hair loss, also known as Androgenetic Alopecia, affects the temples and scalp, gradually causing hair loss and reduced density.",
      "Male hair transplant treatment has become a reliable option for those seeking to restore hair and confidence. QHT Clinic offers the best affordable packages for male hair transplant procedures, providing denser, natural-looking hair. The results are permanent and long-lasting.",
    ],
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/11/Hair-Transplant-for-men.jpg",
    link: "/services/hair-transplant-for-men/",
  },
  {
    id: 2,
    title: "Hairline Redesigning",
    subtitle: "Hairline Reconstruction: The Art of Restoring a Natural, Youthful Look.",
    paragraphs: [
      "Hairline reconstruction is a hair transplant procedure that brings back a natural and balanced hairline. For many people, a receding hairline makes the face look older than it should.",
      "This treatment is all about designing a hairline that looks real, blends well with your features, and stays permanent. At QHT Clinic, we use modern methods like FUE, DHI, and our own QHT approach to achieve high graft survival and natural results that patients can trust.",
    ],
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/11/Hairline-Redesign-1.jpg",
    link: "/services/hairline-reconstruction/",
  },
  {
    id: 3,
    title: "Failed Hair Transplant Repair",
    subtitle: "Correcting unnatural hairlines, visible scars, and low density from prior surgeries.",
    paragraphs: [
      "Hair Transplant Repair is a procedure that can be used to correct the results of a hair transplant that has not been successful. It helps restore hairline and density, as well as conceal scars caused by earlier procedures.",
      "At QHT Clinic, our experts use advanced techniques and treatment is centered on nurturing natural growth, avoiding complications, and for long-lasting results.",
    ],
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/11/Failed-Hair-Transplant-Repair.jpg",
    link: "/services/failed-hair-transplant-repair/",
  },
  {
    id: 4,
    title: "GFC Treatment",
    subtitle: "Growth Factor Concentrate Therapy: Revolutionary non-surgical hair restoration.",
    paragraphs: [
      "Growth Factor Concentrate (GFC) therapy is a revolutionary treatment which involves the extraction of the growth factors from your own blood and their injection into the scalp directly to promote hair growth. It is one of the most effective non-invasive solutions for those suffering from severe hair loss.",
      "A higher success rate is achieved with this treatment in recent times, mainly in those suffering from severe hair thinning but who have not acquired baldness yet. It is becoming popular in India, as the cost of treatment is highly affordable.",
    ],
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/11/Gfc-Tretment@2x.webp",
    link: "/services/gfc-treatment/",
  },
  {
    id: 5,
    title: "Beard Transplant",
    subtitle: "Beard hair transplant is a permanent solution to achieve a fuller, well-defined beard naturally.",
    paragraphs: [
      "Beard hair transplant refers to the cosmetic surgery in which hair follicles usually obtained on the scalp are implanted into sparse or bare bald spots on your beard. It can help men gain a fuller, more defined and naturally growing beard that can be styled, trimmed, and maintained identically to facial hair.",
      "With QHT techniques, results are long-lasting, with minimal scarring and virtually invisible marks.",
    ],
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/10/Mask-group-3.webp",
    link: "/services/beard-hair-transplant-in-india/",
  },
  {
    id: 6,
    title: "PRP Treatment",
    subtitle: "Platelet-Rich Plasma Therapy to stimulate dormant hair follicles naturally.",
    paragraphs: [
      "Platelet-rich plasma hair therapy is a non-surgical treatment that uses your blood platelets to help your hair grow back. More and more people are choosing this treatment because it doesn’t involve surgery or chemicals.",
      "The treatment works especially well for people who are losing hair or thinning hair at an early stage because of genetic conditions, hormonal changes, or stress.",
    ],
    image: "https://www.qhtclinic.com/wp-content/uploads/2025/10/Mask-group-4.webp",
    link: "/services/prp-treatment/",
  },
];

// 9. Transformation Gallery
export const TRANSFORMATION_GALLERY: TransformationItem[] = [
  {
    id: 1,
    patientName: "Irfan",
    grade: "Uttar Pradesh · Grade 5A",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Post.webp",
  },
  {
    id: 2,
    patientName: "Kshitij Ahuja",
    grade: "Jabalpur · Grade 4",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Kshitij-Ahuja-Jabalpur-Grade-4-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Kshitij-Ahuja-Jabalpur-Grade-4-Post.webp",
  },
  {
    id: 3,
    patientName: "Pranav Meshram",
    grade: "Grade 6",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Pranav-Meshram-Grade-6-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Pranav-Meshram-Grade-6-Post.webp",
  },
  {
    id: 4,
    patientName: "Praveen Kumar",
    grade: "Bangalore · DHI",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Praveen-Kumar-Grade-Bangalore-DHI-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Praveen-Kumar-Grade-Bangalore-DHI-Post.webp",
  },
  {
    id: 5,
    patientName: "Puneet Chandra",
    grade: "Grade 6",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Puneet-Chandra-Grade-6-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Puneet-Chandra-Grade-6-Post.webp",
  },
  {
    id: 6,
    patientName: "Sagar Kumar",
    grade: "Grade 4A",
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Sagar-Kumar-Grade-4A-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Sagar-Kumar-Grade-4A-Post.webp",
  },
];

// 10. Google Reviews
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 1,
    name: "Abhishek Thapa",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/abhishek_thapa.png",
    rating: 5,
    review: "Really happy with my experience at QHT Clinic. The staff was polite and professional, and doctors explained everything properly.",
  },
  {
    id: 2,
    name: "Sudhir Chandra",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/sudhir_chandra.png",
    rating: 5,
    review: "I had 5000 grafts done and my results are amazing! It really boosted my confidence. Highly recommend QHT Haridwar to family and friends.",
  },
  {
    id: 3,
    name: "Shubham Chaudhary",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/shubham_chaudhary.png",
    rating: 5,
    review: "My hair transplant journey was amazing. The staff was excellent and cooperative, clearing all doubts. Painless surgery with great results.",
  },
  {
    id: 4,
    name: "Daksh",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/daksh.png",
    rating: 5,
    review: "My experience has been excellent. Doctors and staff are extremely professional and supportive. Clean clinic with natural-looking results.",
  },
  {
    id: 5,
    name: "Irfan Ansari",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/irfan_ansari.png",
    rating: 5,
    review: "Got 4500 grafts in a single session. The results are amazing beyond my expectations. Feeling much happier and confident now.",
  },
  {
    id: 6,
    name: "Virendra Kumar",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/virendra_kumar.png",
    rating: 5,
    review: "Extremely satisfied with the entire experience! The results are truly impressive—my hair growth is natural, consistent, and better than expected.",
  },
  {
    id: 7,
    name: "Ankit Khan",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/ankit_khan.png",
    rating: 5,
    review: "Had 3000+ grafts done in 2 days. They took care of transport and meals. Doctors, nurses, and technicians are well behaved and highly professional.",
  },
  {
    id: 8,
    name: "Chandan Pandey",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/chandan_pandey.png",
    rating: 5,
    review: "Appointment booking was so easy and quick. Staff was very friendly and doctors were experienced. Painless surgery and great overall experience.",
  },
  {
    id: 9,
    name: "Nishant Kumar Singh",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/nishant_kumar_singh.png",
    rating: 5,
    review: "Amazing experience in the clinic! Great hygiene and helpful staff behavior. The team maintains a wonderful environment. Must visit for hair transplant.",
  },
  {
    id: 10,
    name: "Mohd Shahrukh",
    avatar: "https://www.qhtclinic.com/wp-content/themes/qht/assets/img/google-avatars/mohd_shahrukh.png",
    rating: 5,
    review: "My experience has been amazing. Behavior of staff, doctors and operational team was awesome. One of the best hair transplant clinics in North India.",
  },
];

// 11. FAQ Items
export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "01",
    question: "Is QHT Clinic the best hair transplant Clinic in India?",
    answer: "Yes, with the best in class surgeons, natural and scar-free personalised care, QHT stands strong to be the best hair transplant clinic in India. We have successfully treated over 15,000 patients using our proprietary QHT (Quick Hair Transplant) technique with a 95%+ graft survival rate.",
  },
  {
    id: "02",
    question: "How is QHT Clinic different from others?",
    answer: "Unlike many hair transplant clinics, QHT Clinic implants the extracted grafts immediately at the recipient site for higher survival and faster recovery. Our proprietary QHT technique uses specially engineered instruments enabling simultaneous extraction and implantation.",
  },
  {
    id: "03",
    question: "Is a Hair Transplant in India Permanent?",
    answer: "When performed at a trusted hair transplant clinic in India, the procedure gives permanent results. The transplanted hair follicles are taken from DHT-resistant donor areas and continue to grow naturally for life.",
  },
  {
    id: "04",
    question: "Can a failed hair transplant be repaired?",
    answer: "With corrective hair transplant procedures, a failed or undesired transplant can be redesigned for natural results. We specialise in repairing plug-like, unnatural, or misaligned grafts from poorly executed prior surgeries at other clinics.",
  },
  {
    id: "05",
    question: "How long does it take to recover after a hair transplant in India?",
    answer: "At QHT Clinic, the advanced technique makes recovery faster; just 7-10 days. Most patients can return to normal activities within a week. Full hair growth results are visible within 9 to 12 months post-surgery.",
  },
];

// 12. Clinic Branches & Cities
export const CLINIC_BRANCHES: Branch[] = [
  {
    region: "North India Branch - Haridwar",
    name: "QHT Clinic Haridwar",
    address: "521, Model Colony, Haridwar, Uttarakhand",
    mapLink: "https://maps.app.goo.gl/eHNZ67iJPGpmUrZx6",
  },
  {
    region: "North India Branch - Delhi",
    name: "QHT Clinic Delhi",
    address: "D -15, Outer Ring Rd, Opp. Prashant Vihar Metro Station, Sector 14, Rohini, New Delhi, Delhi, 110085",
    mapLink: "https://maps.app.goo.gl/v1tXP3y8oM1K58YN6",
  },
  {
    region: "North India Branch - Gurugram",
    name: "QHT Clinic Gurugram",
    address: "Plot No. 3, opposite Huda Market, Sector 46, Gurugram, Haryana 122022",
    mapLink: "https://maps.app.goo.gl/WmKVvniW9erc3hmy8",
  },
  {
    region: "South India Branch - Hyderabad",
    name: "QHT Clinic Hyderabad",
    address: "Opposite Hotel Park Hyatt, Road No. 2 Banjara Hills, Hyderabad, Telangana",
    mapLink: "https://maps.app.goo.gl/NcNQH3MtLWponejy8",
  },
  {
    region: "Consultation Office - Kolkata",
    name: "QHT Clinic Kolkata",
    address: "5th Floor, Prasad House, 16 Sudder Street, Kolkata, West Bengal 700016",
    mapLink: "https://share.google/fKyubEl5ZWPxBcpx3",
  },
];

export const CITY_PAGES = [
  "Delhi", "Ahmedabad", "Bangalore", "Chandigarh", "Chennai", "Dehradun",
  "Ghaziabad", "Gurgaon", "Guwahati", "Haridwar", "Hyderabad", "Indore",
  "Jaipur", "Kochi", "Kolkata", "Lucknow", "Mumbai", "Nagpur",
  "Noida", "Patna", "Pune", "Surat",
];

export const COUNTRY_CODES = [
  { code: "+91", label: "+91 🇮🇳", country: "India" },
  { code: "+1", label: "+1 🇺🇸", country: "USA/Canada" },
  { code: "+44", label: "+44 🇬🇧", country: "UK" },
  { code: "+971", label: "+971 🇦🇪", country: "UAE" },
  { code: "+61", label: "+61 🇦🇺", country: "Australia" },
  { code: "+65", label: "+65 🇸🇬", country: "Singapore" },
  { code: "+49", label: "+49 🇩🇪", country: "Germany" },
  { code: "+33", label: "+33 🇫🇷", country: "France" },
  { code: "+7", label: "+7 🇷🇺", country: "Russia" },
  { code: "+966", label: "+966 🇸🇦", country: "Saudi Arabia" },
];
