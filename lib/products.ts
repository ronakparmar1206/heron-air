export type Product = {
  slug: string
  eyebrow: string
  title: string
  shortDescription: string
  description: string
  image: string
  tags: string[]
  useCases: string[]
  keyFeatures: string[]
  specifications: Array<{ label: string; value: string }>
}

export const products: Product[] = [
  {
    slug: "high-pressure-compressor",
    eyebrow: "High Pressure",
    title: "High Pressure Compressor",
    shortDescription:
      "Built for applications that require strong and stable pressure output with dependable continuous performance.",
    description:
      "High pressure compressor engineered for demanding industrial environments where stable PSI, continuous duty operation, and robust reliability are essential.",
    image: "/products/highpressure.png",
    tags: ["High PSI", "Industrial", "Reliable"],
    useCases: [
      "Automobile workshop air systems",
      "PET blowing support lines",
      "Process plants with high pressure demand",
    ],
    keyFeatures: [
      "Reinforced compression stages for consistent output",
      "Durable components for long runtime cycles",
      "Stable pressure delivery under variable load",
      "Service-friendly layout for faster maintenance",
    ],
    specifications: [
      { label: "Pressure Range", value: "High PSI configuration" },
      { label: "Duty Pattern", value: "Continuous industrial duty" },
      { label: "Construction", value: "Heavy-duty metal body" },
      { label: "Support", value: "Installation + service guidance" },
    ],
  },
  {
    slug: "vacuum-pump",
    eyebrow: "Vacuum",
    title: "Vacuum Pump",
    shortDescription:
      "Engineered vacuum solution for workshops and process lines that need consistent suction and low maintenance.",
    description:
      "Industrial vacuum pump solution designed for reliable suction performance, smoother process flow, and dependable daily operation in workshop and production setups.",
    image: "/products/vaccum.png",
    tags: ["Vacuum", "Low Noise", "Service Ready"],
    useCases: [
      "Packaging and handling lines",
      "Workshop vacuum process stations",
      "Industrial suction transfer tasks",
    ],
    keyFeatures: [
      "Consistent suction with low noise behavior",
      "Optimized design for daily operations",
      "Reduced maintenance complexity",
      "Stable performance in process environments",
    ],
    specifications: [
      { label: "Operation", value: "Continuous suction workflow" },
      { label: "Noise Profile", value: "Low-noise design" },
      { label: "Serviceability", value: "Easy inspection points" },
      { label: "Build", value: "Industrial duty assembly" },
    ],
  },
  {
    slug: "booster-compressor",
    eyebrow: "Low Pressure Booster",
    title: "Low Pressure Booster Compressor",
    shortDescription:
      "Pressure-boosting setup designed to lift output where standard compressor pressure is not enough.",
    description:
      "Booster compressor built to raise output pressure efficiently when primary systems need additional lift for high-demand applications.",
    image: "/products/booster.png",
    tags: ["Booster", "High Output", "Compact"],
    useCases: [
      "Pressure uplift for critical tool lines",
      "Supplementary high pressure support",
      "Demand peaks in production systems",
    ],
    keyFeatures: [
      "Reliable pressure enhancement stage",
      "Compact layout for easier integration",
      "Efficient output boost with stable flow",
      "Suitable for targeted high-demand points",
    ],
    specifications: [
      { label: "Function", value: "Pressure boosting" },
      { label: "Integration", value: "Inline with base compressor" },
      { label: "Footprint", value: "Compact industrial layout" },
      { label: "Output", value: "Stable enhanced pressure" },
    ],
  },
  {
    slug: "high-pressure-booster-compressor",
    eyebrow: "High Pressure Booster",
    title: "High Pressure Booster Compressor",
    shortDescription:
      "Engineered booster configuration for applications that need elevated pressure with stable continuous delivery.",
    description:
      "High pressure booster compressor configured for advanced industrial systems requiring elevated pressure and dependable long-cycle operation.",
    image: "/products/highpressurebooster.png",
    tags: ["High PSI", "Booster", "Heavy Duty"],
    useCases: [
      "Specialized high-pressure process lines",
      "Precision pneumatic operations",
      "Heavy-duty industrial applications",
    ],
    keyFeatures: [
      "Dual strength: high pressure + booster performance",
      "Built for sustained industrial workloads",
      "Consistent output under demanding cycles",
      "Robust construction with long service life",
    ],
    specifications: [
      { label: "Pressure Class", value: "High-pressure booster class" },
      { label: "Runtime", value: "Extended continuous duty" },
      { label: "Use Profile", value: "Heavy industrial operations" },
      { label: "Engineering", value: "Reinforced stage design" },
    ],
  },
  {
    slug: "low-pressure-compressor",
    eyebrow: "Low Pressure",
    title: "Low Pressure Compressor",
    shortDescription:
      "Efficient compressor range for everyday air supply needs with smooth operation and reduced running cost.",
    description:
      "Low pressure compressor designed for dependable everyday compressed air supply with operational efficiency and consistent output quality.",
    image: "/products/lowpressure.png",
    tags: ["Low PSI", "Energy Efficient"],
    useCases: [
      "General workshop utilities",
      "Light-to-medium pneumatic tools",
      "Routine production air support",
    ],
    keyFeatures: [
      "Energy-conscious operation",
      "Smooth day-to-day performance",
      "Stable output for routine requirements",
      "Economical long-term running profile",
    ],
    specifications: [
      { label: "Pressure Range", value: "Low PSI class" },
      { label: "Efficiency", value: "Optimized for regular use" },
      { label: "Application", value: "General industrial utility" },
      { label: "Maintenance", value: "Service-ready configuration" },
    ],
  },
  {
    slug: "oil-free-compressor",
    eyebrow: "Oil Free",
    title: "Oil Free Compressor",
    shortDescription:
      "Clean-air compressor solution for operations that require oil-free output, low contamination risk, and dependable runtime.",
    description:
      "Oil free compressor built for sectors where cleaner compressed air and reduced contamination risk are critical to product quality and compliance.",
    image: "/products/oilfree.png",
    tags: ["Oil Free", "Clean Air", "Low Maintenance"],
    useCases: [
      "Food and pharma support processes",
      "Paint and finishing operations",
      "Electronics and clean-air requirements",
    ],
    keyFeatures: [
      "Oil-free air delivery for sensitive workflows",
      "Cleaner output for contamination control",
      "Reliable runtime for quality-critical operations",
      "Lower service burden in clean-air systems",
    ],
    specifications: [
      { label: "Air Quality", value: "Oil-free output profile" },
      { label: "Risk Control", value: "Low contamination risk" },
      { label: "Industries", value: "Clean-process compatible" },
      { label: "Operation", value: "Consistent long-cycle delivery" },
    ],
  },
  {
    slug: "screw-air-compressors",
    eyebrow: "Screw Air",
    title: "Screw Air Compressors",
    shortDescription:
      "Advanced screw air compressor range with high-efficiency drive systems, durable construction, and lower power consumption.",
    description:
      "Screw Air Compressors engineered for efficient industrial air delivery with lower power usage, longer service life, and reliable operational safety.",
    image: "/products/screwair.png",
    tags: ["Screw Air", "Energy Efficient", "Heavy Duty"],
    useCases: [
      "Continuous industrial compressed air supply",
      "Manufacturing plants with high uptime requirements",
      "Production lines needing efficient air delivery",
    ],
    keyFeatures: [
      "Less power consumption",
      "Longer service life",
      "Rust free body",
      "High-efficiency Drive System",
      "Heavy-duty Air Filter",
      "Heavy-duty Air Filter (with prefilter)",
      "Core electrical control components",
      "Sophisticated technology",
      "Design of Safety Measures",
    ],
    specifications: [
      { label: "Compressor Type", value: "Screw Air Compressor" },
      { label: "Efficiency", value: "High-efficiency drive system" },
      { label: "Filtration", value: "Heavy-duty air filter with prefilter" },
      { label: "Body", value: "Rust free industrial body" },
    ],
  },
  {
    slug: "single-stage-medium-pressure-air-compressor",
    eyebrow: "Single Stage",
    title: "Single Stage Medium Pressure Air Compressor",
    shortDescription:
      "Single stage reciprocating air compressor for low to medium pressure applications with easy installation and low maintenance.",
    description:
      "Single Stage Reciprocating Air Compressor designed for low and medium pressure requirements where dependable operation, quick installation, and maintenance efficiency are key.",
    image: "/products/singlestage.png",
    tags: ["Single Stage", "Medium Pressure", "Air Cooled"],
    useCases: [
      "General workshop and garage air supply",
      "Medium pressure tool line operations",
      "Small-to-mid industrial utility requirements",
    ],
    keyFeatures: [
      "Damage-resistant construction",
      "Easy to install",
      "Low maintenance needs",
      "Air-cooled operating method",
    ],
    specifications: [
      { label: "Compressor Type", value: "Single Stage Reciprocating" },
      {
        label: "Discharge Pressure",
        value: "Low Pressure, Medium Pressure",
      },
      { label: "Cooling Method", value: "Air Cooled" },
      { label: "Installation", value: "Easy installation design" },
    ],
  },
  {
    slug: "compressor-refrigerator-unit",
    eyebrow: "Cooling",
    title: "Compressor Refrigerator Unit",
    shortDescription:
      "Cooling companion unit for compressor systems to support stable operation in warmer conditions.",
    description:
      "Compressor refrigerator unit designed to support temperature stability and protect compressor performance in warmer or high-duty operating conditions.",
    image: "/products/refrigerator.png",
    tags: ["Cooling", "Durable", "Workshop Ready"],
    useCases: [
      "Compressor temperature support",
      "Warm-environment operation control",
      "Performance stability during long runs",
    ],
    keyFeatures: [
      "Supports thermal stability for compressor lines",
      "Helps maintain dependable operating performance",
      "Durable build for industrial conditions",
      "Simple integration with existing setups",
    ],
    specifications: [
      { label: "Purpose", value: "Compressor cooling support" },
      { label: "Environment", value: "High-temperature ready" },
      { label: "Integration", value: "Companion cooling module" },
      { label: "Build", value: "Industrial service-grade" },
    ],
  },
]

export const productBySlug = Object.fromEntries(
  products.map((product) => [product.slug, product]),
) as Record<string, Product>
