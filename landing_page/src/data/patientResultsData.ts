export interface PatientResultDetail {
  slug: string;
  name: string;
  location: string;
  grade: string;
  graftRange: string;
  areaTreated: string;
  ageGroup: string;
  graftsImplanted: number;
  resultsMonths: number;
  beforeImg: string;
  afterImg: string;
}

export const PATIENT_RESULTS_LIST: PatientResultDetail[] = [
  {
    slug: "pradeep-kumar-joshi",
    name: "Pradeep Kumar Joshi",
    location: "From Bareilly, India",
    grade: "Grade 03",
    graftRange: "3100–4000",
    areaTreated: "Frontal+Temples",
    ageGroup: "21–30",
    graftsImplanted: 3200,
    resultsMonths: 12,
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Post.webp",
  },
  {
    slug: "devendra",
    name: "Devendra",
    location: "From Delhi, India",
    grade: "Grade 03",
    graftRange: "2100–3000",
    areaTreated: "Crown+Mid Scalp+Frontal Hairline",
    ageGroup: "21–30",
    graftsImplanted: 2800,
    resultsMonths: 11,
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Irfan-Uttar-Pradesh-Grade-5A-Post.webp",
  },
  {
    slug: "harsh-sharma",
    name: "Harsh Sharma",
    location: "From Jaipur, Rajasthan",
    grade: "Grade 3A",
    graftRange: "4100–5000",
    areaTreated: "Frontal Hairline+Temples+Mid-Scalp+Crown",
    ageGroup: "31–40",
    graftsImplanted: 4600,
    resultsMonths: 9,
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Kshitij-Ahuja-Jabalpur-Grade-4-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Kshitij-Ahuja-Jabalpur-Grade-4-Post.webp",
  },
  {
    slug: "probir-das",
    name: "Probir Das",
    location: "From Kolkata, West Bengal",
    grade: "Grade 5A",
    graftRange: "3100–4000",
    areaTreated: "Frontal Hairline+Forelock Area & Vertex",
    ageGroup: "21–30",
    graftsImplanted: 3750,
    resultsMonths: 8,
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Pranav-Meshram-Grade-6-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Pranav-Meshram-Grade-6-Post.webp",
  },
  {
    slug: "ajay",
    name: "Ajay",
    location: "From Chandigarh, India",
    grade: "Grade 3A",
    graftRange: "3100–4000",
    areaTreated: "Frontal+Hairline+Mid-Scalp",
    ageGroup: "31–40",
    graftsImplanted: 3400,
    resultsMonths: 7,
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Praveen-Kumar-Grade-Bangalore-DHI-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Praveen-Kumar-Grade-Bangalore-DHI-Post.webp",
  },
  {
    slug: "dheerendra",
    name: "Dheerendra",
    location: "From Mumbai, Maharashtra",
    grade: "Grade 6A",
    graftRange: "4100–5000",
    areaTreated: "Frontal+Mid-Scalp+Crown",
    ageGroup: "41–50",
    graftsImplanted: 4800,
    resultsMonths: 49,
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Puneet-Chandra-Grade-6-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Puneet-Chandra-Grade-6-Post.webp",
  },
  {
    slug: "amit-kumar",
    name: "Amit Kumar",
    location: "From Lucknow, Uttar Pradesh",
    grade: "Grade 04",
    graftRange: "4100–5000",
    areaTreated: "Frontal Hairline+Temples & Mid-Scalp",
    ageGroup: "31–40",
    graftsImplanted: 4200,
    resultsMonths: 19,
    beforeImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Sagar-Kumar-Grade-4A-Pre.webp",
    afterImg: "https://www.qhtclinic.com/wp-content/uploads/2025/08/Copy-of-Sagar-Kumar-Grade-4A-Post.webp",
  },
];
