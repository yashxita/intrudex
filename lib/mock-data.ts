export const navigation = [
  { href: "/dashboard", label: "Dashboard", short: "SOC" },
  { href: "/monitoring", label: "Monitoring", short: "MON" },
  { href: "/intrusion", label: "Intrusion", short: "IDS" },
  { href: "/alerts", label: "Alerts", short: "ALR" },
  { href: "/reports", label: "Reports", short: "RPT" },
  { href: "/admin", label: "Admin", short: "ADM" },
] as const;

export const heroStats = [
  { label: "Active users profiled", value: "12.4K" },
  { label: "Streaming events per second", value: "28.6K" },
  { label: "Average drift detection latency", value: "240ms" },
];

export const featureCards = [
  {
    title: "Behavior Tracking",
    description:
      "Continuously profile mouse movement, typing cadence, window focus shifts, and network interaction patterns.",
  },
  {
    title: "AI Detection",
    description:
      "Baseline each identity and detect drift with machine learning confidence scores, comparative vectors, and risk scoring.",
  },
  {
    title: "Adaptive Alerts",
    description:
      "Escalate intelligently with layered responses from passive verification to user lockout and SOC notifications.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Capture Behavioral Signals",
    description:
      "Sensors collect normalized mouse, keyboard, app switching, and network metadata in real time.",
  },
  {
    step: "02",
    title: "Build a Trusted Baseline",
    description:
      "Per-user behavioral biometrics establish a secure profile without extra hardware or invasive prompts.",
  },
  {
    step: "03",
    title: "Detect Drift and Anomalies",
    description:
      "Deviation models compare live activity against baseline vectors and classify the current session risk.",
  },
  {
    step: "04",
    title: "Respond with Context",
    description:
      "Intrudex triggers alerts, verification flows, and automated actions while preserving a complete audit trail.",
  },
] as const;

export const benefitCards = [
  {
    title: "Privacy-friendly telemetry",
    description:
      "No webcams, no fingerprint readers, and no extra hardware. Intrudex works with behavioral metadata you already generate.",
  },
  {
    title: "Continuous security posture",
    description:
      "Authentication does not end at login. Risk is recalculated throughout the session for persistent trust verification.",
  },
  {
    title: "SOC-ready observability",
    description:
      "Give security teams dashboards, live activity trails, and explainable anomaly signals that fit monitoring workflows.",
  },
] as const;

export const moduleCards = [
  {
    title: "Live SOC Dashboard",
    description: "Persona score, anomaly streams, risk meter, and behavior drift state.",
    href: "/dashboard",
  },
  {
    title: "Behavioral Monitoring",
    description: "Heatmaps, typing dynamics, interaction timelines, and sensor-level views.",
    href: "/monitoring",
  },
  {
    title: "Intrusion Detection",
    description: "Deviation comparisons, AI confidence, anomaly classification, and baseline mismatches.",
    href: "/intrusion",
  },
  {
    title: "Alert & Response",
    description: "Playbooks, mobile notifications, lock decisions, and user verification actions.",
    href: "/alerts",
  },
  {
    title: "Reports & Analytics",
    description: "Historical anomalies, FAR and FRR trends, and compliance-ready exports.",
    href: "/reports",
  },
  {
    title: "Admin Control",
    description: "User profiles, model health, adaptive weighting, and system status management.",
    href: "/admin",
  },
] as const;

export const liveFeed = [
  {
    time: "02:14:07",
    title: "Typing cadence drift detected",
    detail: "Latency variance exceeded baseline by 18% on workstation `SEA-44`.",
    status: "drift",
  },
  {
    time: "02:13:42",
    title: "Network spike normalized",
    detail: "Outbound session burst resolved after managed package update.",
    status: "normal",
  },
  {
    time: "02:12:19",
    title: "Suspicious window switching",
    detail: "Rapid app focus changes mapped to lateral movement pattern.",
    status: "anomaly",
  },
  {
    time: "02:10:51",
    title: "Baseline refresh completed",
    detail: "Adaptive profile weights recalculated for 128 monitored sessions.",
    status: "normal",
  },
] as const;

export const anomalyRows = [
  {
    id: "AN-044",
    user: "R. Patel",
    vector: "Keyboard + window focus",
    deviation: "34%",
    risk: "High",
    confidence: "97.2%",
  },
  {
    id: "AN-039",
    user: "S. Miller",
    vector: "Mouse trajectory",
    deviation: "18%",
    risk: "Medium",
    confidence: "88.4%",
  },
  {
    id: "AN-036",
    user: "J. Gomez",
    vector: "Network pattern",
    deviation: "12%",
    risk: "Low",
    confidence: "74.8%",
  },
  {
    id: "AN-031",
    user: "N. Chen",
    vector: "App switching",
    deviation: "28%",
    risk: "High",
    confidence: "95.1%",
  },
] as const;

export const alerts = [
  {
    title: "Suspicious Activity Detected",
    timestamp: "02:14 AM",
    risk: "High",
    summary: "Mouse acceleration and network spike mismatch with approved baseline.",
  },
  {
    title: "Behavior Drift Escalation",
    timestamp: "01:48 AM",
    risk: "Medium",
    summary: "Typing dwell time shifted outside adaptive threshold for 7 minutes.",
  },
  {
    title: "Identity Reverification Requested",
    timestamp: "01:05 AM",
    risk: "Low",
    summary: "Passive verification flow triggered after unusual app switching pattern.",
  },
] as const;

export const weightData = [
  { label: "Mouse", value: 78 },
  { label: "Keyboard", value: 91 },
  { label: "Network", value: 64 },
  { label: "System", value: 72 },
] as const;

export const adminUsers = [
  {
    name: "Aisha Reed",
    role: "Security Analyst",
    profile: "Stable",
    lastSeen: "2 min ago",
  },
  {
    name: "Marcus Hill",
    role: "SOC Lead",
    profile: "Drift Watch",
    lastSeen: "9 min ago",
  },
  {
    name: "Olivia Park",
    role: "Infrastructure Admin",
    profile: "Baseline Update",
    lastSeen: "16 min ago",
  },
] as const;

export const healthMetrics = [
  { label: "Model freshness", value: "98.6%" },
  { label: "Sensor coverage", value: "96.1%" },
  { label: "Alert delivery", value: "99.4%" },
  { label: "Inference queue", value: "142ms" },
] as const;

export const heatmapMatrix = [
  [0.1, 0.3, 0.2, 0.15, 0.2, 0.38, 0.55, 0.2],
  [0.12, 0.42, 0.66, 0.55, 0.25, 0.2, 0.3, 0.18],
  [0.08, 0.28, 0.74, 0.92, 0.64, 0.34, 0.26, 0.1],
  [0.1, 0.35, 0.62, 0.88, 0.72, 0.48, 0.22, 0.12],
  [0.16, 0.22, 0.3, 0.58, 0.68, 0.4, 0.18, 0.1],
  [0.12, 0.2, 0.18, 0.26, 0.34, 0.3, 0.2, 0.12],
] as const;

export const typingSeries = [61, 64, 62, 68, 70, 72, 69, 75, 81, 79, 83, 87];
export const dwellSeries = [42, 45, 43, 46, 49, 50, 52, 48, 53, 55, 56, 58];
export const networkSpikes = [18, 24, 14, 33, 29, 40, 22, 47, 32, 39, 27, 44];
export const farSeries = [2.4, 2.3, 2.1, 1.9, 1.8, 1.7, 1.5, 1.4];
export const frrSeries = [4.6, 4.4, 4.2, 4.1, 3.8, 3.7, 3.5, 3.3];

export const deviationRows = [
  { label: "Mouse acceleration", baseline: 68, current: 91 },
  { label: "Typing dwell time", baseline: 74, current: 82 },
  { label: "Window switching cadence", baseline: 44, current: 88 },
  { label: "Network burst profile", baseline: 52, current: 77 },
] as const;
