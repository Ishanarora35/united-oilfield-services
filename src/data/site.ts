export const contact = {
  company: "United Oilfield Services LLC",
  address: "2472, Millview, Zeeland, Michigan - USA",
  phone: "616-210-9891",
  phoneHref: "tel:+16162109891",
  email: "office@unitedoilfields.com",
  emailHref: "mailto:office@unitedoilfields.com",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Safety & Environment", href: "/safety" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const heroSlides = [
  {
    image: "/images/home/drilling-rig.webp",
    alt: "An aerial view of a drilling rig in a wide oilfield",
    title: "The Blueprint for Safe Oilfield Solutions",
    position: "center 54%",
  },
  {
    image: "/images/home/pumpjack-tanks.webp",
    alt: "A pumpjack and storage tanks in a working field",
    title: "Driving Environmental Integrity",
    position: "center center",
  },
  {
    image: "/images/home/pipelines-sunset.webp",
    alt: "Oil and gas pipelines extending toward a sunset",
    title: "Proven History. Trusted Performance",
    position: "center center",
  },
  {
    image: "/images/home/pumpjack-flare.webp",
    alt: "Pumpjack and flare stack at an oilfield site",
    title: "Setting the Standard for Oilfield Excellence",
    position: "center 52%",
  },
  {
    image: "/images/home/storage-tanks.webp",
    alt: "Industrial storage tanks at an oilfield facility",
    title: "Optimizing Energy Assets",
    position: "center center",
  },
];

export type Service = {
  number: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  image: string;
  alt: string;
  imagePosition?: string;
  description: string;
  capabilities: string[];
  detail?: string;
  advantages?: { title: string; copy: string }[];
};

export const services: Service[] = [
  {
    number: "01",
    slug: "brine-production-water",
    title: "Brine & Production Water Services",
    shortTitle: "Brine & Production Water",
    tagline: "Reliable Fluid Management. Safe, Compliant Logistics.",
    image: "/images/services/brine-water.webp",
    alt: "Brine water hauling truck on a treated road",
    description:
      "Comprehensive fluid management and specialized transport solutions designed to keep operations moving. Our transport fleet supports every stage of the fluid lifecycle with scheduled reliability and rapid-response capability.",
    detail:
      "From high-salinity oilfield fluids to seasonal infrastructure maintenance, UOS handles fluid logistics with strict attention to safety, asset integrity, and environmental requirements.",
    capabilities: [
      "Production & Brine Water Hauling",
      "Fluid Transfer Services",
      "On-Site Tank & Equipment Support",
      "Comprehensive Pickup & Disposal Logistics",
      "Flexible Operational Scheduling",
      "Winter Road-Treatment & Dust Control",
    ],
  },
  {
    number: "02",
    slug: "well-pump-maintenance",
    title: "Well & Pump Maintenance Services",
    shortTitle: "Well & Pump Maintenance",
    tagline: "Maximizing Mechanical Reliability. Minimizing Operational Downtime.",
    image: "/images/services/well-pump-maintenance.webp",
    alt: "Pumpjack operating in an open oilfield",
    imagePosition: "center 52%",
    description:
      "Complete well-site mechanical maintenance designed to preserve asset integrity and prevent costly mechanical failures. Our technicians inspect, service, and troubleshoot critical production pumps and electrical motors.",
    detail:
      "Structured preventative programs and fast emergency troubleshooting help upstream and midstream operations run at peak mechanical and operational efficiency.",
    capabilities: [
      "Core Pump Servicing & Repairs",
      "Motor & Power Transmission Care",
      "Belt, Pulley & Drive Optimization",
      "Bearing & Component Lubrication",
      "Mechanical Inspections & Asset Safety",
      "Preventative & Emergency Programs",
    ],
  },
  {
    number: "03",
    slug: "pumping-well-operations",
    title: "Pumping & Well Operation Services",
    shortTitle: "Pumping & Well Operations",
    tagline: "Optimizing Production Yields. Driving Operational Efficiency.",
    image: "/images/services/pumping-well-operations.webp",
    alt: "Field operator on well-site pipeline equipment",
    description:
      "Comprehensive lease pumping and well management solutions engineered to support asset performance and production yields. Field operators pair technical expertise with proactive asset stewardship.",
    detail:
      "Routine mechanical monitoring and preventative checks reduce unplanned downtime while supporting environmental compliance and the production lifecycle of your assets.",
    capabilities: [
      "Lease Pumping & Well Services",
      "Routine Site Checks & Inspections",
      "Asset Troubleshooting & Adjustments",
      "Routine Production Maintenance",
      "Site Housekeeping & HSE Compliance",
      "On-Call Production Support",
    ],
  },
  {
    number: "04",
    slug: "roustabout",
    title: "Roustabout Services",
    shortTitle: "Roustabout Services",
    tagline: "Turnkey Roustabout Services.",
    image: "/images/services/roustabout.webp",
    alt: "Roustabout crew working at an oilfield site",
    imagePosition: "center 42%",
    description:
      "A single, capable partner for work across the project lifecycle. UOS helps reduce fragmented contractor networks, streamline communication, and keep field work moving forward.",
    detail:
      "From initial pad preparation and dirt work to tank battery and containment installation, our crews handle both new setups and existing-site upgrades.",
    capabilities: [
      "Pad Preparation & Dirt Work",
      "Tank Battery & Containment Installation",
      "Painting, Electrical & Automation",
      "Pipe Replacement & Valve Change-Outs",
      "Fence Repair",
      "Site Maintenance",
    ],
  },
  {
    number: "05",
    slug: "steaming",
    title: "Steaming Services",
    shortTitle: "Steaming Services",
    tagline: "Specialized Steaming. Cleaning Services.",
    image: "/images/services/steaming.webp",
    alt: "Technician pressure-steaming industrial production equipment",
    description:
      "High-pressure steaming and industrial cleaning tailored to maintain the integrity of upstream and midstream assets. Mobile thermal units help restore optimal flow and reduce equipment downtime.",
    detail:
      "From clearing paraffin and scale at the wellhead and production lines to deep-cleaning storage tanks and gathering pipelines, UOS provides heavy-duty field cleaning with strict safety standards.",
    capabilities: [
      "High-Pressure Steaming & Industrial Cleaning",
      "Paraffin & Scale Removal",
      "Wellhead & Production-Line Cleaning",
      "Storage Tank Cleaning",
      "Gathering Pipeline Cleaning",
      "Mobile Thermal Units",
    ],
  },
  {
    number: "06",
    slug: "flowback",
    title: "Flowback Services",
    shortTitle: "Flowback Services",
    tagline: "Advanced Flowback & Well Testing Services",
    image: "/images/services/flowback.webp",
    alt: "Flowback services wheel showing monitoring and reporting functions",
    imagePosition: "center",
    description:
      "Comprehensive flowback services that support the safe, efficient transition from completion to steady-state production. UOS manages on-site setup, equipment operation, and maintenance.",
    detail:
      "Well testing, continuous production monitoring, pressure monitoring, and coordination with drilling and completion crews help remove operational bottlenecks and support well performance.",
    capabilities: [
      "Flowback Equipment Setup",
      "Equipment Operation & Maintenance",
      "Well Testing",
      "Production & Pressure Monitoring",
      "Temporary Production Services",
      "Coordination with Drilling & Completion Crews",
    ],
  },
  {
    number: "07",
    slug: "plug-abandonment",
    title: "P & A Services",
    shortTitle: "Plug & Abandonment",
    tagline: "Comprehensive Plug & Abandonment Solutions.",
    image: "/images/services/plug-abandonment.webp",
    alt: "Wellhead in a field prepared for plug and abandonment work",
    description:
      "Specialized equipment and turnkey management for precision-focused plug and abandonment work. UOS delivers safe, compliant, cost-conscious well closures that safeguard both your bottom line and the environment.",
    detail:
      "Decommissioning projects demand careful project coordination. Our turnkey model is designed to manage each project from start to finish while keeping safety and environmental stewardship at the center.",
    capabilities: [
      "Specialized Equipment",
      "Turnkey Project Management",
      "Well Closure",
      "Safety & Environmental Protection",
      "Cost Control",
      "Project Coordination",
    ],
    advantages: [
      { title: "Predictable Budgeting", copy: "A strict, not-to-exceed spending ceiling." },
      { title: "In-House Efficiency", copy: "Minimize third-party subcontractors." },
      { title: "Flawless Execution", copy: "Seamless data sharing across specialized teams." },
      { title: "Safety First", copy: "Environmental stewardship and zero-shortcut safety standards." },
    ],
  },
];

export const specialistDisciplines = [
  {
    title: "Cementing",
    image: "/images/services/cementing.webp",
    alt: "Cement being poured for a specialized cementing operation",
    copy:
      "Specialized cementing solutions for plug and abandonment projects, designed to support well integrity and long-term durability. UOS assists with well-site preparation, equipment support, fluid handling, pumping operations, logistics, and final cleanup.",
  },
  {
    title: "Wireline Support",
    copy:
      "Comprehensive well-site support and dedicated manpower for wireline operations, including equipment handling, rig-up and rig-down assistance, and fluid and location logistics. Our teams work alongside primary service companies and adapt to their technical requirements and field procedures.",
  },
  {
    title: "Casing & Capping",
    copy:
      "Casing and capping solutions designed to permanently seal wellbores and support environmental integrity. Services include precision mechanical casing cutting, intermediate retrieval, and final welding of structural identification caps below ground level for long-term site safety.",
  },
];
