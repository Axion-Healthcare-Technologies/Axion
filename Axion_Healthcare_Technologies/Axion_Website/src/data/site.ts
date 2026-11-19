// ONE place to edit everything: text, links, contact details, solutions. Save and the site updates.
// Anything marked TODO is a placeholder: replace it with Axion's real details before launch.

export const site = {
  brand: "Axion Healthcare Technologies",
  short: "Axion",
  url: "https://your-domain.com", // TODO: real domain. Also set `site` in astro.config.mjs
  contact: {
    email: "info@your-domain.com", // TODO: real email
    phone: "", // TODO: e.g. "+880 ..." (leave empty to hide)
    whatsapp: "", // TODO: e.g. "https://wa.me/8801XXXXXXXXX" (leave empty to hide the floating button)
    address: "", // TODO: office address (leave empty to hide)
  },
  social: {
    linkedin: "", // TODO: company LinkedIn URL (leave empty to hide)
    facebook: "", // TODO: company Facebook URL (leave empty to hide)
  },
  seo: {
    title: "Axion Healthcare Technologies — Digital Tools for Clinics, Hospitals & Care Teams",
    description:
      "Axion Healthcare Technologies builds secure, easy-to-use software that helps healthcare providers manage care, connect with patients and make better use of their data.",
  },
  nav: {
    cta: "Request a Demo",
    links: [
      { label: "Home", href: "/" },
      { label: "About Us", href: "/about" },
    ],
  },
  hero: {
    eyebrow: "Healthcare technology",
    lines: ["Technology That", "Helps Care", "Run Better."],
    text: "Axion builds secure, simple digital tools for clinics, hospitals and care teams, so staff spend less time on admin and more time with patients.",
    primary: "Request a Demo",
    secondary: "Explore Solutions",
  },
  work: {
    heading: "Our solutions",
    intro: "Connected tools that cover the everyday needs of a healthcare provider.",
    cta: "Talk to us about this",
  },
  projects: [
    {
      name: "Clinic & Hospital Management",
      desc: "One system for the daily running of a facility: patient registration, appointments, records, billing and reporting. Designed around real clinical workflows so staff can learn it quickly and patients wait less.",
      tags: ["Registration", "Appointments", "Patient records", "Billing"],
    },
    {
      name: "Patient Engagement & Telehealth",
      desc: "Make it easy for patients to reach you: online booking, automatic reminders, follow-ups and remote consultations. Fewer missed appointments and a smoother experience before and after every visit.",
      tags: ["Online booking", "Reminders", "Remote consultations", "Follow-ups"],
    },
    {
      name: "Health Data & Analytics",
      desc: "Clear dashboards that turn operational and clinical data into something decision-makers can act on, from patient flow and workloads to service performance.",
      tags: ["Dashboards", "Operational reports", "Performance tracking"],
    },
    {
      name: "Integration & Interoperability",
      desc: "Connect the systems you already rely on, such as labs, diagnostics, devices and pharmacy, so information moves between them instead of being typed in twice.",
      tags: ["Labs & diagnostics", "Pharmacy", "Existing systems"],
    },
  ],
  services: {
    heading: "What we do",
    items: [
      { title: "Healthcare Software Development", text: "Custom platforms and modules built for the way your facility actually works." },
      { title: "Digital Transformation Consulting", text: "A practical roadmap for moving paper and legacy processes onto reliable digital systems." },
      { title: "Implementation & Training", text: "Careful rollout and hands-on staff training, so new tools are adopted rather than ignored." },
      { title: "Data Migration", text: "Safe, verified transfer of your existing records and data into the new system." },
      { title: "Security & Privacy Readiness", text: "Access controls, audit trails and good data-handling practice built in from the start." },
      { title: "Support & Maintenance", text: "Responsive support and regular updates so your systems stay dependable." },
    ],
  },
  why: {
    heading: "Healthcare technology should earn trust, every day.",
    items: [
      { title: "Patients come first", text: "Every feature is judged by one question: does it improve care or the patient experience?" },
      { title: "Privacy and security by design", text: "Health information is sensitive. Protecting it shapes how we build, not just how we describe the product." },
      { title: "Built around clinical workflows", text: "We learn how your doctors, nurses and front desk work, then fit the software to them." },
      { title: "Simple for busy teams", text: "Clean, intuitive screens that need minimal training and stay out of the way." },
      { title: "Works with what you have", text: "Integrations that connect to your existing equipment and systems rather than replacing everything." },
      { title: "A partner, not just a vendor", text: "Clear communication, honest timelines and support that continues after go-live." },
    ],
  },
  process: {
    heading: "How we work with you",
    steps: [
      { title: "Discover", text: "We study your facility, your workflows and your goals before proposing anything." },
      { title: "Design", text: "You review a clear plan and design with your clinical and admin teams involved." },
      { title: "Implement", text: "We build, migrate data, integrate and train your staff, with testing at each stage." },
      { title: "Support", text: "We stay beside you after launch with updates, fixes and improvements." },
    ],
  },
  cta: {
    heading: "Let’s modernise how your facility runs.",
    text: "Tell us about your clinic, hospital or care organisation. We’ll arrange a conversation and a demo around your needs.",
    button: "Request a Demo",
  },
  about: {
    seo: {
      title: "About Axion Healthcare Technologies — Technology in Service of Better Care",
      description:
        "Axion Healthcare Technologies helps healthcare providers work more efficiently and care for patients better through secure, practical digital tools.",
    },
    heading: ["Technology in service", "of better care."],
    intro:
      "Axion Healthcare Technologies exists to help healthcare providers spend less time on paperwork and systems, and more time on patients. We build practical, secure software that fits how care is really delivered.",
    story: {
      heading: "Why we exist",
      text: [
        "Many clinics and hospitals still rely on paper files, disconnected tools and manual processes. That costs staff time, creates avoidable errors and makes the patient experience harder than it needs to be.",
        "Axion was created to close that gap with technology that is simple to adopt, respects patient privacy and genuinely supports the people delivering care.",
      ],
    },
    mission: {
      mission: { title: "Our mission", text: "Give every healthcare provider dependable digital tools that improve efficiency and the patient experience." },
      vision: { title: "Our vision", text: "A healthcare system where good technology is a quiet, reliable part of every patient’s care." },
    },
    values: {
      heading: "What we stand for",
      items: [
        { title: "Patients first", text: "Every decision is measured against its effect on patient care and experience." },
        { title: "Privacy and security", text: "We treat health data with the seriousness it deserves, at every stage of a project." },
        { title: "Clinician-friendly", text: "Tools should reduce the load on busy staff, never add to it." },
        { title: "Reliable partnership", text: "Honest advice, clear timelines and support you can count on." },
      ],
    },
    serve: {
      heading: "Who we work with",
      items: ["Clinics & polyclinics", "Hospitals", "Diagnostic centres", "Pharmacies", "Specialist practices", "Care organisations"],
    },
    cta: {
      heading: "Let’s talk about your facility.",
      text: "Get in touch and we’ll arrange a conversation around your needs and goals.",
      button: "Get in Touch",
    },
  },
  footer: {
    tagline: "Secure, simple technology for healthcare providers.",
    disclaimer: "Axion Healthcare Technologies provides software and technology services. Information on this website is for general purposes and is not medical advice.",
    copyright: "© 2026 Axion Healthcare Technologies. All rights reserved.",
  },
};

// Primary "contact" link used by every button. Uses email; add a WhatsApp URL above to also show the floating chat button.
export const contactHref = `mailto:${site.contact.email}?subject=${encodeURIComponent("Demo request — Axion Healthcare Technologies")}`;
