export const navigation = [
  { href: "/dashboard", label: "Dashboard", short: "SOC" },
  { href: "/monitoring", label: "Monitoring", short: "MON" },
  { href: "/personas", label: "Personas", short: "PER" },
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
    description:
      "Persona score, anomaly streams, risk meter, and behavior drift state.",
    href: "/dashboard",
  },
  {
    title: "Behavioral Monitoring",
    description:
      "Heatmaps, typing dynamics, interaction timelines, and sensor-level views.",
    href: "/monitoring",
  },
  {
    title: "Intrusion Detection",
    description:
      "Deviation comparisons, AI confidence, anomaly classification, and baseline mismatches.",
    href: "/intrusion",
  },
  {
    title: "Alert & Response",
    description:
      "Playbooks, mobile notifications, lock decisions, and user verification actions.",
    href: "/alerts",
  },
  {
    title: "Reports & Analytics",
    description:
      "Historical anomalies, FAR and FRR trends, and compliance-ready exports.",
    href: "/reports",
  },
  {
    title: "Admin Control",
    description:
      "User profiles, model health, adaptive weighting, and system status management.",
    href: "/admin",
  },
] as const;

export const liveFeed = [
  {
    time: "02:14:07",
    title: "Typing cadence drift detected",
    detail:
      "Latency variance exceeded baseline by 18% on workstation `SEA-44`.",
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
    summary:
      "Mouse acceleration and network spike mismatch with approved baseline.",
  },
  {
    title: "Behavior Drift Escalation",
    timestamp: "01:48 AM",
    risk: "Medium",
    summary:
      "Typing dwell time shifted outside adaptive threshold for 7 minutes.",
  },
  {
    title: "Identity Reverification Requested",
    timestamp: "01:05 AM",
    risk: "Low",
    summary:
      "Passive verification flow triggered after unusual app switching pattern.",
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

export const dashboardHealthStats = [
  {
    label: "System status",
    value: "Normal",
    detail:
      "All behavioral pipelines are processing within normal latency thresholds.",
  },
  {
    label: "Protected endpoints",
    value: "1,248",
    detail:
      "Active workstations continuously profiled by the behavioral engine.",
  },
  {
    label: "Detection latency",
    value: "142ms",
    detail: "Median time from telemetry ingestion to scoring decision.",
  },
  {
    label: "Alert backlog",
    value: "07",
    detail:
      "Analyst queue remains within operational target for the current shift.",
  },
] as const;

export const monitoringMetricCards = [
  {
    label: "Average mouse rate",
    value: "120Hz",
    detail: "Current pointer telemetry sample rate for the active session.",
  },
  {
    label: "Typing speed",
    value: "83 WPM",
    detail: "Observed key cadence for the active user in the last 5 minutes.",
  },
  {
    label: "Dwell time",
    value: "56ms",
    detail: "Average key hold duration measured from the live session stream.",
  },
  {
    label: "Window switches",
    value: "14/hr",
    detail: "Foreground application changes tracked for the active endpoint.",
  },
  {
    label: "Mouse speed",
    value: "742 px/s",
    detail: "Average cursor traversal speed across the last rolling window.",
  },
  {
    label: "Click interval",
    value: "1.9 s",
    detail: "Mean time between click actions over the monitored session.",
  },
] as const;

export const currentPersonaDetection = {
  detectedPersona: "Finance analyst / R. Patel",
  confidence: "96.8%",
  status: "Matched trusted persona",
  outcome: "No alert generated",
  detail:
    "Current behavioral metrics align with the trusted persona envelope, so the session remains allowed.",
} as const;

export const personaLogicSteps = [
  {
    label: "Trusted persona match",
    value: "Allow session",
    detail:
      "If current metrics match any approved persona, monitoring continues without flagging.",
  },
  {
    label: "All persona matches fail",
    value: "Log alert",
    detail:
      "If no trusted persona matches, the engine creates an alert entry for analyst review.",
  },
  {
    label: "Intrusion score > 90",
    value: "Block and report",
    detail:
      "Critical confidence immediately blocks access and generates an incident report.",
  },
] as const;

export const liveStatusRows = [
  { metric: "Telemetry ingestion", status: "Healthy", value: "28.6K evt/s" },
  {
    metric: "Feature extraction",
    status: "Healthy",
    value: "12 active workers",
  },
  { metric: "Scoring pipeline", status: "Healthy", value: "142ms p50 latency" },
  {
    metric: "Profile sync",
    status: "Drift watch",
    value: "03 pending refreshes",
  },
  { metric: "Alert dispatcher", status: "Healthy", value: "99.4% delivery" },
] as const;

export const personaProfiles = [
  {
    id: "PER-001",
    name: "R. Patel",
    role: "Finance analyst",
    status: "Trusted",
    baseline: "Stable for 41 days",
  },
  {
    id: "PER-002",
    name: "S. Miller",
    role: "SOC analyst",
    status: "Drift watch",
    baseline: "Cadence recalibration pending",
  },
  {
    id: "PER-003",
    name: "N. Chen",
    role: "Infrastructure admin",
    status: "Review",
    baseline: "Window-switch pattern elevated",
  },
] as const;

export const personaMetrics = [
  {
    label: "Average mouse speed",
    value: "742 px/s",
    range: "Baseline 710-765 px/s",
  },
  { label: "Click interval", value: "1.9 s", range: "Baseline 1.7-2.2 s" },
  { label: "Typing speed", value: "81 WPM", range: "Baseline 76-84 WPM" },
  { label: "Key dwell time", value: "54 ms", range: "Baseline 50-58 ms" },
  { label: "Scroll burst length", value: "3.1 s", range: "Baseline 2.8-3.4 s" },
  { label: "Window switch rate", value: "11/hr", range: "Baseline 9-13/hr" },
  { label: "Session duration", value: "46 min", range: "Baseline 38-52 min" },
  { label: "Network burst score", value: "0.18", range: "Baseline 0.12-0.21" },
] as const;

export const personaCreationFields = [
  "Persona name",
  "Assigned role or team",
  "Baseline collection window",
  "Verification threshold",
] as const;

export const blockedIntrusions = [
  {
    id: "INC-2044",
    user: "R. Patel",
    vector: "Keyboard + window focus",
    deviation: "34%",
    confidence: "97.2%",
    score: 97,
    action: "Session locked",
    time: "02:14 AM",
    reportId: "RPT-2044",
    flaggedMetrics: [
      {
        label: "Typing speed",
        observed: "103 WPM",
        baseline: "76-84 WPM",
      },
      {
        label: "Key dwell time",
        observed: "31 ms",
        baseline: "50-58 ms",
      },
      {
        label: "Window switching",
        observed: "31/hr",
        baseline: "9-13/hr",
      },
    ],
  },
  {
    id: "INC-2039",
    user: "N. Chen",
    vector: "Privileged app switching",
    deviation: "28%",
    confidence: "95.1%",
    score: 94,
    action: "Step-up verification",
    time: "01:52 AM",
    reportId: "RPT-2039",
    flaggedMetrics: [
      {
        label: "Window switching",
        observed: "28/hr",
        baseline: "11-15/hr",
      },
      {
        label: "Mouse acceleration",
        observed: "0.82",
        baseline: "0.54-0.63",
      },
      {
        label: "Network burst score",
        observed: "0.39",
        baseline: "0.12-0.21",
      },
    ],
  },
  {
    id: "INC-2033",
    user: "S. Miller",
    vector: "Mouse trajectory mismatch",
    deviation: "22%",
    confidence: "90.8%",
    score: 91,
    action: "Session paused",
    time: "12:48 AM",
    reportId: "RPT-2033",
    flaggedMetrics: [
      {
        label: "Mouse speed",
        observed: "981 px/s",
        baseline: "640-760 px/s",
      },
      {
        label: "Click interval",
        observed: "0.8 s",
        baseline: "1.7-2.2 s",
      },
      {
        label: "Scroll burst length",
        observed: "5.1 s",
        baseline: "2.8-3.4 s",
      },
    ],
  },
] as const;

export const intrusionMetricRows = [
  { label: "Typing cadence delta", baseline: 72, current: 91 },
  { label: "Window switching delta", baseline: 44, current: 88 },
  { label: "Mouse acceleration delta", baseline: 68, current: 84 },
  { label: "Network burst delta", baseline: 52, current: 77 },
] as const;

export const alertLogRows = [
  {
    id: "ALT-881",
    time: "02:14:07",
    severity: "High",
    source: "Behavioral engine",
    summary:
      "Typing cadence drift and app-switch mismatch exceeded escalation policy.",
    action: "Awaiting analyst",
  },
  {
    id: "ALT-877",
    time: "01:48:33",
    severity: "Medium",
    source: "Adaptive profile",
    summary:
      "Dwell-time trend moved outside confidence band for seven minutes.",
    action: "Verification sent",
  },
  {
    id: "ALT-872",
    time: "01:05:11",
    severity: "Low",
    source: "Network monitor",
    summary: "Short outbound burst normalized after package sync completed.",
    action: "Closed automatically",
  },
] as const;

export const reportRecommendations = [
  {
    title: "Detection quality",
    detail:
      "Include FAR, FRR, confidence distribution, and analyst-confirmed true positive rate by period.",
  },
  {
    title: "Incident trends",
    detail:
      "Show blocked intrusions, escalation volume, dominant vectors, and time-to-containment.",
  },
  {
    title: "Persona drift",
    detail:
      "Track which user personas drift most often and which signals trigger retraining or review.",
  },
  {
    title: "Operational health",
    detail:
      "Add ingestion rate, scoring latency, queue depth, and endpoint coverage to make the report actionable.",
  },
] as const;

export const generatedReports = [
  {
    id: "RPT-2044",
    incidentId: "INC-2044",
    user: "R. Patel",
    createdAt: "02:15 AM",
    reason: "Intrusion score crossed 90 and the session was locked.",
    status: "Generated",
    export: "PDF",
  },
  {
    id: "RPT-2039",
    incidentId: "INC-2039",
    user: "N. Chen",
    createdAt: "01:53 AM",
    reason: "No persona match and privileged workflow deviation persisted.",
    status: "Generated",
    export: "PDF + JSON",
  },
  {
    id: "RPT-2033",
    incidentId: "INC-2033",
    user: "S. Miller",
    createdAt: "12:49 AM",
    reason: "Mouse trajectory deviation exceeded the block threshold.",
    status: "Generated",
    export: "PDF",
  },
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
