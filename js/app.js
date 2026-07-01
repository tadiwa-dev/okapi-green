/* OkapiGreen Tracker — prototype app logic (client-side only, no backend) */

/* ---------------- Icons (feather-style, 1.8 stroke) ---------------- */
function icon(name, size = 18) {
  const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"`;
  const paths = {
    grid: `<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>`,
    users: `<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
    briefcase: `<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
    barchart: `<path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/>`,
    mappin: `<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>`,
    settings: `<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>`,
    search: `<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>`,
    chevronleft: `<path d="m15 18-6-6 6-6"/>`,
    x: `<path d="M18 6 6 18"/><path d="M6 6l12 12"/>`,
    plus: `<path d="M12 5v14"/><path d="M5 12h14"/>`,
    upload: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M17 8l-5-5-5 5"/><path d="M12 3v12"/>`,
    download: `<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>`,
    edit: `<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/>`,
    send: `<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>`,
    checkcircle: `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/>`,
    mail: `<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>`,
    phonecall: `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>`,
    linkedin: `<rect x="2" y="2" width="20" height="20" rx="4"/><path d="M7 10v7"/><circle cx="7" cy="6.5" r="1"/><path d="M11 17v-4.5a2 2 0 0 1 4 0V17"/><path d="M11 12v5"/>`,
    filetext: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M9 13h6"/><path d="M9 17h6"/>`,
    alertcircle: `<circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="M12 16h.01"/>`,
    clock: `<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>`,
    smartphone: `<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/>`,
    externallink: `<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/>`,
    filecheck: `<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>`,
    logout: `<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="M16 17l5-5-5-5"/><path d="M21 12H9"/>`,
    sun: `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`,
  };
  return `<svg ${s}>${paths[name] || ""}</svg>`;
}

/* ---------------- State ---------------- */
const state = {
  screen: "login",
  selectedTraineeId: null,
  dashboardCohort: "all",
  traineeFilters: { cohort: "all", status: "all", completeness: "all", search: "" },
  settingsTab: "fluxx",
  geoActiveIndex: 0,
  employmentModal: { open: false, traineeId: null },
  addTraineeModalOpen: false,
  importModalOpen: false,
  learnerPreview: { open: false, returnScreen: null, inlineFormOpen: false },
};

const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: "grid" },
  { id: "trainees", label: "Trainees", icon: "users" },
  { id: "employment", label: "Employment Tracking", icon: "briefcase" },
  { id: "placement", label: "Placement Reports", icon: "barchart" },
  { id: "geographic", label: "Geographic View", icon: "mappin" },
  { id: "settings", label: "Settings", icon: "settings" },
];

/* ---------------- Helpers ---------------- */
function initials(name) {
  return name.split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
}
function statusPillClass(status) {
  if (status === "Employed") return "status-employed";
  if (status === "Seeking") return "status-seeking";
  return "status-unknown";
}
function surveyPillClass(status) {
  if (status === "Submitted") return "survey-submitted";
  if (status === "Pending") return "survey-pending";
  return "survey-notsent";
}
function completenessFillClass(pct) {
  if (pct >= 80) return "";
  if (pct >= 50) return "mid";
  return "low";
}
function fmtDate(d) {
  if (!d) return "—";
  const dt = new Date(d + "T00:00:00");
  if (isNaN(dt)) return d;
  return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
function getTrainee(id) {
  return TRAINEES.find((t) => t.id === id);
}
function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function showToast(message) {
  const existing = document.querySelector(".toast");
  if (existing) existing.remove();
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span class="toast-dot"></span><span>${escapeHtml(message)}</span>`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

/* ---------------- Login ---------------- */
function renderLogin() {
  return `
  <div class="login-screen">
    <div class="login-card">
      <div class="login-logo-lockup">
        <div style="display:flex;align-items:center;gap:9px;">
          <div style="width:38px;height:38px;border-radius:10px;background:var(--red);display:flex;align-items:center;justify-content:center;color:#fff;">${icon("sun", 22)}</div>
          <div style="text-align:left;">
            <div style="font-family:'Manrope',sans-serif;font-weight:800;font-size:17px;line-height:1.1;">OkapiGreen Tracker</div>
            <div style="font-size:11px;color:var(--grey);letter-spacing:.03em;">powered by pamba · paNhari</div>
          </div>
        </div>
        <div class="login-title">Sign in to manage trainee &amp; alumni employment outcomes</div>
      </div>
      <div class="login-error" id="login-error">Invalid email or password. Try any email + password — this is a prototype.</div>
      <form onsubmit="handleLogin(event)">
        <div class="field">
          <label>Email address</label>
          <input type="email" placeholder="you@okapigreen.org" value="admin@okapigreen.org" required />
        </div>
        <div class="field">
          <label>Password</label>
          <input type="password" placeholder="••••••••" value="••••••••" required />
        </div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </form>
      <div class="login-footnote">Forgot your password? Contact your paNhari program admin.</div>
    </div>
  </div>`;
}
function handleLogin(e) {
  e.preventDefault();
  state.screen = "dashboard";
  render();
}
function handleLogout() {
  state.screen = "login";
  render();
}

/* ---------------- Shell (sidebar + topbar) ---------------- */
function renderSidebar() {
  const items = NAV_ITEMS.map((item) => {
    const active = state.screen === item.id;
    return `<li class="nav-item ${active ? "active" : ""}" onclick="goTo('${item.id}')">${icon(item.icon, 17)}<span>${item.label}</span></li>`;
  }).join("");
  return `
  <nav class="sidebar">
    <div class="sidebar-logo">
      <div style="width:32px;height:32px;border-radius:8px;background:var(--red);display:flex;align-items:center;justify-content:center;color:#fff;flex-shrink:0;">${icon("sun", 18)}</div>
      <div>
        <div class="brand-name">OkapiGreen<br/>Tracker</div>
        <div class="brand-sub">by paNhari · pamba</div>
      </div>
    </div>
    <ul class="nav-list">${items}</ul>
    <div class="sidebar-footer">OkapiGreen Solar Training<br/>Kakuma Refugee Camp, Kenya</div>
  </nav>`;
}

function renderTopbar() {
  return `
  <header class="topbar">
    <div class="topbar-search">
      ${icon("search", 16)}
      <input type="text" placeholder="Search trainees, employers…" oninput="handleGlobalSearch(this.value)" />
    </div>
    <div class="topbar-right">
      <button class="btn btn-outline-orange btn-sm" onclick="openLearnerPreview()">${icon("smartphone", 15)} Preview learner view</button>
      <div class="topbar-user" onclick="handleLogout()" title="Sign out">
        <div style="text-align:right;">
          <div class="topbar-user-name">Wendo Kilonzo</div>
          <div class="topbar-user-role">Program Admin</div>
        </div>
        <div class="avatar">WK</div>
      </div>
    </div>
  </header>`;
}

function handleGlobalSearch(val) {
  if (state.screen !== "trainees") {
    state.screen = "trainees";
  }
  state.traineeFilters.search = val;
  render();
  const input = document.querySelector(".topbar-search input");
  if (input) { input.focus(); input.value = val; input.setSelectionRange(val.length, val.length); }
}

function renderShell(contentHtml) {
  return `
  <div class="app-shell">
    ${renderSidebar()}
    <div class="main-col">
      ${renderTopbar()}
      <main class="main-content">${contentHtml}</main>
    </div>
  </div>`;
}

/* ---------------- Dashboard ---------------- */
function filteredTrainees(cohort) {
  if (!cohort || cohort === "all") return TRAINEES;
  return TRAINEES.filter((t) => t.cohortId === cohort);
}

function renderDashboard() {
  const list = filteredTrainees(state.dashboardCohort);
  const total = list.length;
  const employed = list.filter((t) => t.employment.status === "Employed").length;
  const employmentRate = total ? Math.round((employed / total) * 100) : 0;
  const avgCompleteness = total ? Math.round(list.reduce((s, t) => s + t.completeness, 0) / total) : 0;
  const activeCohorts = new Set(list.map((t) => t.cohortId)).size;

  const cohortStats = COHORTS.map((c) => {
    const ct = TRAINEES.filter((t) => t.cohortId === c.id);
    const emp = ct.filter((t) => t.employment.status === "Employed").length;
    const rate = ct.length ? Math.round((emp / ct.length) * 100) : 0;
    return { ...c, rate, count: ct.length };
  });

  const cohortOptions = `<option value="all">All cohorts</option>` + COHORTS.map((c) => `<option value="${c.id}" ${state.dashboardCohort === c.id ? "selected" : ""}>${c.label}</option>`).join("");

  return `
    <div class="page-header">
      <div>
        <h1>Dashboard</h1>
        <div class="page-sub">Overview of trainee and alumni employment outcomes</div>
      </div>
      <div class="page-header-actions">
        <select class="filter-select" onchange="setDashboardCohort(this.value)">${cohortOptions}</select>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-icon red">${icon("users", 18)}</div>
        <div class="kpi-label">Total Trainees</div>
        <div class="kpi-value">${total}</div>
        <div class="kpi-trend flat">Across ${activeCohorts} cohort${activeCohorts === 1 ? "" : "s"}</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon orange">${icon("grid", 18)}</div>
        <div class="kpi-label">Active Cohorts</div>
        <div class="kpi-value">${COHORTS.length}</div>
        <div class="kpi-trend flat">Cohort 14 in progress</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon green">${icon("briefcase", 18)}</div>
        <div class="kpi-label">Employment Rate</div>
        <div class="kpi-value">${employmentRate}%</div>
        <div class="kpi-trend up">▲ 8pts vs. last quarter</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-icon grey">${icon("checkcircle", 18)}</div>
        <div class="kpi-label">Profile Completeness</div>
        <div class="kpi-value">${avgCompleteness}%</div>
        <div class="kpi-trend flat">Avg. across filtered trainees</div>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="card">
        <div class="card-title-row">
          <h3>Employment Rate by Cohort</h3>
          <span style="font-size:12px;color:var(--grey);">% of trainees currently employed</span>
        </div>
        <div class="bar-chart">
          ${cohortStats.map((c) => `
            <div class="bar-chart-col">
              <div class="bar-chart-track">
                <div class="bar-chart-fill" style="height:${Math.max(c.rate, 4)}%;">
                  <span class="bar-value">${c.rate}%</span>
                </div>
              </div>
              <div class="bar-chart-label">${c.label}<span>${c.count} trainees</span></div>
            </div>`).join("")}
        </div>
      </div>
      <div class="card">
        <div class="card-title-row"><h3>Recent Updates</h3></div>
        <ul class="update-list">
          ${RECENT_UPDATES.map((u) => `
            <li class="update-item">
              <span class="update-dot"></span>
              <div>
                <div class="update-text">${u.text}</div>
                <div class="update-time">${u.time}</div>
              </div>
            </li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}
function setDashboardCohort(val) {
  state.dashboardCohort = val;
  render();
}

/* ---------------- Trainee List ---------------- */
function applyTraineeFilters() {
  const f = state.traineeFilters;
  return TRAINEES.filter((t) => {
    if (f.cohort !== "all" && t.cohortId !== f.cohort) return false;
    if (f.status !== "all" && t.employment.status !== f.status) return false;
    if (f.completeness !== "all") {
      if (f.completeness === "high" && t.completeness < 80) return false;
      if (f.completeness === "mid" && (t.completeness < 50 || t.completeness >= 80)) return false;
      if (f.completeness === "low" && t.completeness >= 50) return false;
    }
    if (f.search) {
      const q = f.search.toLowerCase();
      if (!t.name.toLowerCase().includes(q) && !t.id.toLowerCase().includes(q) && !(t.employment.employer || "").toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

function renderTrainees() {
  const rows = applyTraineeFilters();
  const cohortOptions = `<option value="all">All cohorts</option>` + COHORTS.map((c) => `<option value="${c.id}" ${state.traineeFilters.cohort === c.id ? "selected" : ""}>${c.label}</option>`).join("");
  const statusOptions = ["all", "Employed", "Seeking", "Unknown"].map((s) => `<option value="${s}" ${state.traineeFilters.status === s ? "selected" : ""}>${s === "all" ? "All statuses" : s}</option>`).join("");
  const completenessOptions = `
    <option value="all" ${state.traineeFilters.completeness === "all" ? "selected" : ""}>All completeness</option>
    <option value="high" ${state.traineeFilters.completeness === "high" ? "selected" : ""}>High (80%+)</option>
    <option value="mid" ${state.traineeFilters.completeness === "mid" ? "selected" : ""}>Medium (50–79%)</option>
    <option value="low" ${state.traineeFilters.completeness === "low" ? "selected" : ""}>Low (&lt;50%)</option>`;

  return `
    <div class="page-header">
      <div>
        <h1>Trainee Database</h1>
        <div class="page-sub">${rows.length} of ${TRAINEES.length} trainees shown</div>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary" onclick="openImportModal()">${icon("upload", 15)} Import Cohort</button>
        <button class="btn btn-primary" onclick="openAddTraineeModal()">${icon("plus", 15)} Add Trainee</button>
      </div>
    </div>

    <div class="card">
      <div class="table-toolbar">
        <div class="table-search">
          ${icon("search", 15)}
          <input type="text" placeholder="Search by name, ID, or employer…" value="${escapeHtml(state.traineeFilters.search)}" oninput="setTraineeFilter('search', this.value)" />
        </div>
        <div class="table-filters">
          <select class="filter-select" onchange="setTraineeFilter('cohort', this.value)">${cohortOptions}</select>
          <select class="filter-select" onchange="setTraineeFilter('status', this.value)">${statusOptions}</select>
          <select class="filter-select" onchange="setTraineeFilter('completeness', this.value)">${completenessOptions}</select>
        </div>
      </div>

      <div style="overflow-x:auto;">
      <table class="data-table">
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Full Name</th>
            <th>Cohort</th>
            <th>Course / Program</th>
            <th>Employment Status</th>
            <th>Profile Completeness</th>
            <th>Survey Status</th>
          </tr>
        </thead>
        <tbody>
          ${rows.length ? rows.map((t) => `
            <tr onclick="openTraineeDetail('${t.id}')">
              <td style="color:var(--grey);">${t.id}</td>
              <td>
                <div class="cell-name">${t.name}</div>
                <div class="cell-sub">${t.gender}, ${t.age}</div>
              </td>
              <td><span class="cohort-badge">${cohortLabel(t.cohortId)}</span></td>
              <td>${t.program}</td>
              <td><span class="status-pill ${statusPillClass(t.employment.status)}">${t.employment.status}</span></td>
              <td>
                <div class="progress-cell">
                  <div class="progress-track"><div class="progress-fill ${completenessFillClass(t.completeness)}" style="width:${t.completeness}%;"></div></div>
                  <span class="progress-pct">${t.completeness}%</span>
                </div>
              </td>
              <td><span class="status-pill ${surveyPillClass(t.surveyStatus)}">${t.surveyStatus}</span></td>
            </tr>`).join("") : `<tr><td colspan="7"><div class="empty-state">No trainees match these filters.</div></td></tr>`}
        </tbody>
      </table>
      </div>
    </div>
  `;
}
function setTraineeFilter(key, val) {
  state.traineeFilters[key] = val;
  render();
  if (key === "search") {
    const input = document.querySelector(".table-search input");
    if (input) { input.focus(); input.setSelectionRange(val.length, val.length); }
  }
}

/* ---------------- Trainee Detail ---------------- */
function openTraineeDetail(id) {
  state.selectedTraineeId = id;
  state.screen = "trainee-detail";
  render();
}
function backToTrainees() {
  state.screen = "trainees";
  render();
}

function renderTraineeDetail() {
  const t = getTrainee(state.selectedTraineeId);
  if (!t) return `<div class="empty-state">Trainee not found.</div>`;
  const surveyBadgeClass = surveyPillClass(t.surveyStatus);

  return `
    <div class="breadcrumb" onclick="backToTrainees()">${icon("chevronleft", 15)} Back to Trainees</div>
    <div class="detail-header">
      <div class="detail-header-left">
        <div class="detail-avatar">${initials(t.name)}</div>
        <div>
          <div class="detail-name">${t.name}</div>
          <div class="detail-meta">
            <span class="cohort-badge">${cohortLabel(t.cohortId)}</span>
            <span class="detail-id">${t.id}</span>
            <span class="status-pill ${statusPillClass(t.employment.status)}">${t.employment.status}</span>
          </div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:20px;">
        <div class="completeness-ring-wrap">
          <div>
            <div class="completeness-label">${t.completeness}% complete</div>
            <div class="completeness-track"><div class="completeness-fill" style="width:${t.completeness}%;"></div></div>
          </div>
        </div>
        <button class="btn btn-secondary">${icon("edit", 15)} Edit</button>
      </div>
    </div>

    <div class="detail-grid">
      <div>
        <div class="card detail-section">
          <div class="section-title">Contact Info</div>
          <div class="kv-grid">
            <div class="kv-item"><div class="kv-label">Email</div><div class="kv-value ${t.email ? "" : "muted"}">${t.email || "Not provided"}</div></div>
            <div class="kv-item"><div class="kv-label">Phone</div><div class="kv-value ${t.phone ? "" : "muted"}">${t.phone || "Not provided"}</div></div>
            <div class="kv-item" style="grid-column:1/-1;"><div class="kv-label">LinkedIn</div><div class="kv-value ${t.linkedin ? "" : "muted"}">${t.linkedin || "Not provided"}</div></div>
          </div>
        </div>

        <div class="card detail-section">
          <div class="section-title">Program Info</div>
          <div class="kv-grid">
            <div class="kv-item"><div class="kv-label">Course / Program</div><div class="kv-value">${t.program}</div></div>
            <div class="kv-item"><div class="kv-label">Cohort</div><div class="kv-value">${cohortLabel(t.cohortId)}</div></div>
            <div class="kv-item"><div class="kv-label">Graduation Date (Expected)</div><div class="kv-value">${fmtDate(t.gradDateExpected)}</div></div>
            <div class="kv-item"><div class="kv-label">Graduation Date (Actual)</div><div class="kv-value ${t.gradDateActual ? "" : "muted"}">${t.gradDateActual ? fmtDate(t.gradDateActual) : "Not yet graduated"}</div></div>
          </div>
        </div>

        <div class="card detail-section">
          <div class="section-title">Demographics <span style="font-weight:400;text-transform:none;letter-spacing:0;font-size:11.5px;">for donor disaggregated reporting</span></div>
          <div class="kv-grid">
            <div class="kv-item"><div class="kv-label">Gender</div><div class="kv-value">${t.gender}</div></div>
            <div class="kv-item"><div class="kv-label">Age</div><div class="kv-value">${t.age}</div></div>
            <div class="kv-item"><div class="kv-label">Location Type</div><div class="kv-value">${t.locationType}</div></div>
            <div class="kv-item"><div class="kv-label">Refugee Status</div><div class="kv-value">${t.refugeeStatus}</div></div>
            <div class="kv-item" style="grid-column:1/-1;"><div class="kv-label">Disability Status</div><div class="kv-value">${t.disability}</div></div>
          </div>
        </div>
      </div>

      <div>
        <div class="card detail-section">
          <div class="section-title">
            Employment
            <button class="btn btn-primary btn-sm" onclick="openEmploymentModal('${t.id}')">Update Employment</button>
          </div>
          <div class="kv-grid">
            <div class="kv-item"><div class="kv-label">Current Status</div><div class="kv-value"><span class="status-pill ${statusPillClass(t.employment.status)}">${t.employment.status}</span></div></div>
            <div class="kv-item"><div class="kv-label">Date Updated</div><div class="kv-value">${fmtDate(t.employment.dateUpdated)}</div></div>
            <div class="kv-item"><div class="kv-label">Employer</div><div class="kv-value ${t.employment.employer ? "" : "muted"}">${t.employment.employer || "Not provided"}</div></div>
            <div class="kv-item"><div class="kv-label">Industry</div><div class="kv-value ${t.employment.industry ? "" : "muted"}">${t.employment.industry || "Not provided"}</div></div>
            <div class="kv-item"><div class="kv-label">Contract Type</div><div class="kv-value ${t.employment.contractType ? "" : "muted"}">${t.employment.contractType || "Not provided"}</div></div>
            <div class="kv-item"><div class="kv-label">Location</div><div class="kv-value ${t.employment.location ? "" : "muted"}">${t.employment.location || "Not provided"}</div></div>
          </div>
        </div>

        <div class="card detail-section">
          <div class="section-title">Survey Status</div>
          <div class="kv-grid">
            <div class="kv-item"><div class="kv-label">Google Form Response</div><div class="kv-value"><span class="status-pill ${surveyBadgeClass}">${t.surveyStatus}</span></div></div>
            <div class="kv-item"><div class="kv-label">Last Submitted</div><div class="kv-value ${t.surveySubmitted ? "" : "muted"}">${t.surveySubmitted ? fmtDate(t.surveySubmitted) : "Never submitted"}</div></div>
          </div>
          <div style="margin-top:14px;">
            <button class="btn btn-secondary btn-sm" onclick="sendSurveyReminder('${t.id}')">${icon("send", 14)} Send reminder</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function sendSurveyReminder(id) {
  const t = getTrainee(id);
  showToast(`Reminder sent to ${t.name} via WhatsApp/SMS`);
}

/* ---------------- Employment Tracking (list + modal) ---------------- */
function renderEmployment() {
  const rows = TRAINEES;
  return `
    <div class="page-header">
      <div>
        <h1>Employment Tracking</h1>
        <div class="page-sub">Record and update employment outcomes for each trainee</div>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-primary" onclick="openEmploymentModal(null)">${icon("plus", 15)} Update Employment</button>
      </div>
    </div>

    <div class="card">
      <div style="overflow-x:auto;">
      <table class="data-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Cohort</th>
            <th>Status</th>
            <th>Employer</th>
            <th>Industry</th>
            <th>Contract Type</th>
            <th>Location</th>
            <th>Last Updated</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${rows.map((t) => `
            <tr>
              <td onclick="openTraineeDetail('${t.id}')"><div class="cell-name">${t.name}</div><div class="cell-sub">${t.id}</div></td>
              <td onclick="openTraineeDetail('${t.id}')"><span class="cohort-badge">${cohortLabel(t.cohortId)}</span></td>
              <td onclick="openTraineeDetail('${t.id}')"><span class="status-pill ${statusPillClass(t.employment.status)}">${t.employment.status}</span></td>
              <td onclick="openTraineeDetail('${t.id}')">${t.employment.employer || "—"}</td>
              <td onclick="openTraineeDetail('${t.id}')">${t.employment.industry || "—"}</td>
              <td onclick="openTraineeDetail('${t.id}')">${t.employment.contractType || "—"}</td>
              <td onclick="openTraineeDetail('${t.id}')">${t.employment.location || "—"}</td>
              <td onclick="openTraineeDetail('${t.id}')">${fmtDate(t.employment.dateUpdated)}</td>
              <td><button class="btn btn-secondary btn-sm" onclick="event.stopPropagation(); openEmploymentModal('${t.id}')">Update</button></td>
            </tr>`).join("")}
        </tbody>
      </table>
      </div>
    </div>
  `;
}

function openEmploymentModal(traineeId) {
  state.employmentModal = { open: true, traineeId };
  render();
}
function closeEmploymentModal() {
  state.employmentModal = { open: false, traineeId: null };
  render();
}

function renderEmploymentModal() {
  if (!state.employmentModal.open) return "";
  const selected = state.employmentModal.traineeId;
  const t = selected ? getTrainee(selected) : null;
  const traineeOptions = `<option value="">Select a trainee…</option>` + TRAINEES.map((tr) => `<option value="${tr.id}" ${tr.id === selected ? "selected" : ""}>${tr.name} — ${tr.id}</option>`).join("");
  const statusOptions = ["Employed", "Seeking", "Unknown"].map((s) => `<option value="${s}" ${t && t.employment.status === s ? "selected" : ""}>${s}</option>`).join("");
  const industryOptions = `<option value="">Select industry…</option>` + INDUSTRIES.map((i) => `<option value="${i}" ${t && t.employment.industry === i ? "selected" : ""}>${i}</option>`).join("");
  const contractOptions = `<option value="">Select contract type…</option>` + CONTRACT_TYPES.map((c) => `<option value="${c}" ${t && t.employment.contractType === c ? "selected" : ""}>${c}</option>`).join("");

  return `
  <div class="modal-overlay" onclick="if(event.target===this) closeEmploymentModal()">
    <div class="modal-card">
      <div class="modal-header">
        <h3>Update Employment</h3>
        <button class="modal-close" onclick="closeEmploymentModal()">${icon("x", 18)}</button>
      </div>
      <form onsubmit="saveEmployment(event)">
        <div class="modal-body">
          <div class="field">
            <label>Trainee</label>
            <select name="traineeId" required>${traineeOptions}</select>
          </div>
          <div class="form-row-2">
            <div class="field">
              <label>Employment Status</label>
              <select name="status">${statusOptions}</select>
            </div>
            <div class="field">
              <label>Contract Type</label>
              <select name="contractType">${contractOptions}</select>
            </div>
          </div>
          <div class="field">
            <label>Employer Name</label>
            <input type="text" name="employer" placeholder="e.g. SolarNow Kenya" value="${t ? escapeHtml(t.employment.employer) : ""}" />
          </div>
          <div class="form-row-2">
            <div class="field">
              <label>Industry</label>
              <select name="industry">${industryOptions}</select>
            </div>
            <div class="field">
              <label>Location</label>
              <input type="text" name="location" placeholder="e.g. Kakuma, Turkana County" value="${t ? escapeHtml(t.employment.location) : ""}" />
            </div>
          </div>
          <div class="field">
            <label>Date</label>
            <input type="date" name="date" value="2026-07-01" />
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeEmploymentModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>`;
}

function saveEmployment(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const traineeId = form.get("traineeId");
  const t = getTrainee(traineeId);
  if (!t) { showToast("Please select a trainee."); return; }
  t.employment.status = form.get("status") || t.employment.status;
  t.employment.employer = form.get("employer") || "";
  t.employment.industry = form.get("industry") || "";
  t.employment.contractType = form.get("contractType") || "";
  t.employment.location = form.get("location") || "";
  t.employment.dateUpdated = form.get("date") || t.employment.dateUpdated;
  const cameFromDetail = state.selectedTraineeId === traineeId && state.screen === "trainee-detail";
  state.employmentModal = { open: false, traineeId: null };
  state.selectedTraineeId = traineeId;
  if (!cameFromDetail && state.screen !== "employment") {
    // leave current list screen as-is
  }
  showToast(`Employment updated for ${t.name}`);
  render();
}

/* ---------------- Placement Dashboard ---------------- */
function renderPlacement() {
  const cohortStats = COHORTS.map((c) => {
    const ct = TRAINEES.filter((t) => t.cohortId === c.id);
    const emp = ct.filter((t) => t.employment.status === "Employed").length;
    return { label: c.label, rate: ct.length ? Math.round((emp / ct.length) * 100) : 0, count: ct.length };
  });

  const employed = TRAINEES.filter((t) => t.employment.status === "Employed");
  const industryCounts = {};
  employed.forEach((t) => { industryCounts[t.employment.industry] = (industryCounts[t.employment.industry] || 0) + 1; });
  const industryColors = { "Renewable Energy": "var(--red)", "Utilities": "var(--orange)", "Construction": "#6b7280", "Retail / Trade": "#a3a3a3", "Other": "var(--grey)" };
  const industryEntries = Object.entries(industryCounts);
  const totalEmployed = employed.length;

  // build conic gradient for donut
  let cumulative = 0;
  const gradientStops = industryEntries.map(([name, count]) => {
    const start = (cumulative / totalEmployed) * 360;
    cumulative += count;
    const end = (cumulative / totalEmployed) * 360;
    return `${industryColors[name] || "var(--grey)"} ${start}deg ${end}deg`;
  }).join(", ");

  const contractCounts = {};
  employed.forEach((t) => { contractCounts[t.employment.contractType] = (contractCounts[t.employment.contractType] || 0) + 1; });
  const maxContract = Math.max(...Object.values(contractCounts), 1);

  return `
    <div class="page-header">
      <div>
        <h1>Placement Reports</h1>
        <div class="page-sub">Employment outcomes across cohorts, industries, and contract types</div>
      </div>
      <div class="page-header-actions">
        <button class="btn btn-secondary" onclick="exportReport()">${icon("download", 15)} Export to CSV / Excel</button>
      </div>
    </div>

    <div class="charts-grid">
      <div class="card">
        <div class="card-title-row"><h3>Employment Rate by Cohort</h3></div>
        <div class="bar-chart" style="height:170px;">
          ${cohortStats.map((c) => `
            <div class="bar-chart-col">
              <div class="bar-chart-track">
                <div class="bar-chart-fill" style="height:${Math.max(c.rate, 4)}%;"><span class="bar-value">${c.rate}%</span></div>
              </div>
              <div class="bar-chart-label">${c.label}<span>${c.count} trainees</span></div>
            </div>`).join("")}
        </div>
      </div>

      <div class="card">
        <div class="card-title-row"><h3>Employment Rate by Industry</h3></div>
        <div class="donut-wrap">
          <div style="width:140px;height:140px;border-radius:50%;background:conic-gradient(${gradientStops}); position:relative; flex-shrink:0;">
            <div style="position:absolute;inset:22px;background:var(--white);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-direction:column;">
              <div style="font-family:'Manrope',sans-serif;font-weight:800;font-size:20px;">${totalEmployed}</div>
              <div style="font-size:10.5px;color:var(--grey);">employed</div>
            </div>
          </div>
          <div class="donut-legend">
            ${industryEntries.map(([name, count]) => `
              <div class="legend-item">
                <span class="legend-swatch" style="background:${industryColors[name] || "var(--grey)"};"></span>
                <span>${name} — ${Math.round((count / totalEmployed) * 100)}%</span>
              </div>`).join("")}
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row"><h3>Employment Rate by Contract Type</h3></div>
        <div class="hbar-list">
          ${Object.entries(contractCounts).map(([type, count]) => `
            <div class="hbar-row">
              <div class="hbar-label">${type}</div>
              <div class="hbar-track"><div class="hbar-fill" style="width:${(count / maxContract) * 100}%;"></div></div>
              <div class="hbar-value">${count}</div>
            </div>`).join("")}
        </div>
      </div>
    </div>

    <div class="card" style="margin-top:20px;">
      <div class="card-title-row"><h3>Placement Summary</h3></div>
      <div style="overflow-x:auto;">
      <table class="data-table">
        <thead><tr><th>Cohort</th><th># Trainees</th><th># Employed</th><th>Employment Rate</th></tr></thead>
        <tbody>
          ${cohortStats.map((c) => `<tr style="cursor:default;"><td>${c.label}</td><td>${c.count}</td><td>${Math.round((c.rate / 100) * c.count)}</td><td>${c.rate}%</td></tr>`).join("")}
        </tbody>
      </table>
      </div>
    </div>
  `;
}
function exportReport() {
  showToast("Export started — placement_report.xlsx will download shortly");
}

/* ---------------- Geographic View ---------------- */
function renderGeographic() {
  const employers = EMPLOYER_LOCATIONS;
  return `
    <div class="page-header">
      <div>
        <h1>Geographic View</h1>
        <div class="page-sub">Employer locations sourced from Employment Tracking data</div>
      </div>
    </div>

    <div class="card">
      <div class="geo-layout">
        <div class="geo-sidebar">
          ${employers.map((emp, i) => `
            <div class="employer-card ${i === state.geoActiveIndex ? "active" : ""}" onclick="selectEmployerPin(${i})">
              <div class="emp-name">${emp.employer}</div>
              <div class="emp-loc">${icon("mappin", 12)} ${emp.location}</div>
              <div class="emp-trainee">${emp.trainee}</div>
            </div>`).join("")}
        </div>
        <div class="map-frame" id="map-frame">
          <svg class="map-grid" viewBox="0 0 100 100" preserveAspectRatio="none">
            ${Array.from({ length: 9 }).map((_, i) => `<line x1="${(i + 1) * 10}" y1="0" x2="${(i + 1) * 10}" y2="100" stroke="#ffffff" stroke-width="0.3"/>`).join("")}
            ${Array.from({ length: 9 }).map((_, i) => `<line x1="0" y1="${(i + 1) * 10}" x2="100" y2="${(i + 1) * 10}" stroke="#ffffff" stroke-width="0.3"/>`).join("")}
          </svg>
          <div class="map-compass">N</div>
          ${employers.map((emp, i) => `
            <div class="map-pin ${i === state.geoActiveIndex ? "active" : ""}" style="left:${emp.x}%;top:${emp.y}%;" onclick="selectEmployerPin(${i})">
              <div class="map-pin-tooltip">${emp.employer}</div>
              ${icon("mappin", 30)}
            </div>`).join("")}
          <div class="map-legend">
            <div style="font-weight:700;margin-bottom:4px;">Turkana County, Kenya</div>
            <div style="color:var(--grey);">Placeholder map — illustrative only</div>
          </div>
        </div>
      </div>
    </div>
  `;
}
function selectEmployerPin(i) {
  state.geoActiveIndex = i;
  render();
}

/* ---------------- Settings ---------------- */
function switchSettingsTab(tab) {
  state.settingsTab = tab;
  render();
}

function renderSettingsFluxx() {
  return `
    <div class="card">
      <div class="card-title-row"><h3>Fluxx Parameters</h3></div>
      <p style="font-size:13px;color:var(--grey);margin-bottom:18px;max-width:600px;">
        These fields map directly to fields required for donor submission via Fluxx. Changes here affect how
        placement reports are formatted on export.
      </p>
      <div class="settings-form-grid">
        <div class="field"><label>Fluxx Organization ID</label><input type="text" value="OKG-4471" /></div>
        <div class="field"><label>Grant / Program Code</label><input type="text" value="SOLAR-KKM-2026" /></div>
        <div class="field"><label>Reporting Period</label>
          <select><option>Quarterly</option><option selected>Semi-annual</option><option>Annual</option></select>
        </div>
        <div class="field"><label>Fiscal Year Start</label><input type="date" value="2026-01-01" /></div>
        <div class="field"><label>Primary Donor Contact Email</label><input type="email" value="reporting@panhari.org" /></div>
        <div class="field"><label>Employment Rate Target (%)</label><input type="number" value="65" /></div>
      </div>
      <button class="btn btn-primary" style="margin-top:6px;" onclick="showToast('Fluxx parameters saved')">Save Parameters</button>
    </div>`;
}

function renderSettingsMou() {
  return `
    <div class="card">
      <div class="card-title-row"><h3>MOU Status</h3></div>
      <div class="mou-card">
        <div style="display:flex;gap:14px;align-items:center;">
          <div class="kpi-icon green" style="margin-bottom:0;">${icon("filecheck", 18)}</div>
          <div>
            <div class="mou-doc-name">OkapiGreen × paNhari MOU 2026–2027</div>
            <div class="mou-doc-meta">Signed 14 Jan 2026 · Expires 13 Jan 2027</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="mou-status-badge signed">Signed</span>
          <button class="btn btn-secondary btn-sm">View Document</button>
        </div>
      </div>
      <div class="mou-card">
        <div style="display:flex;gap:14px;align-items:center;">
          <div class="kpi-icon orange" style="margin-bottom:0;">${icon("filetext", 18)}</div>
          <div>
            <div class="mou-doc-name">Data Sharing Addendum — Donor Reporting</div>
            <div class="mou-doc-meta">Sent for signature 18 Jun 2026</div>
          </div>
        </div>
        <div style="display:flex;align-items:center;gap:12px;">
          <span class="mou-status-badge pending">Pending Signature</span>
          <button class="btn btn-secondary btn-sm">Upload Signed Copy</button>
        </div>
      </div>
    </div>`;
}

function renderSettingsImport() {
  return `
    <div class="card">
      <div class="card-title-row"><h3>Data Import</h3></div>
      <p style="font-size:13px;color:var(--grey);margin-bottom:16px;">Upload a CSV of trainee records. Map columns to OkapiGreen Tracker fields before confirming import.</p>
      <div class="dropzone" onclick="showToast('File picker would open here')">
        ${icon("upload", 26)}
        <div style="margin-top:8px;font-weight:600;color:var(--charcoal);">Drag &amp; drop a CSV file, or click to browse</div>
        <div style="margin-top:4px;">cohort_14_roster.csv · 42 KB</div>
      </div>
      <table class="mapping-table">
        <thead><tr><th>CSV Column</th><th></th><th>Maps To</th><th>Preview</th></tr></thead>
        <tbody>
          <tr><td>student_id</td><td class="mapping-arrow">→</td><td>Student ID</td><td>OG-2024-011</td></tr>
          <tr><td>full_name</td><td class="mapping-arrow">→</td><td>Full Name</td><td>Fatuma Ali Warsame</td></tr>
          <tr><td>cohort</td><td class="mapping-arrow">→</td><td>Cohort Number</td><td>Cohort 14</td></tr>
          <tr><td>program</td><td class="mapping-arrow">→</td><td>Course / Program</td><td>Solar PV Installation &amp; Maintenance</td></tr>
          <tr><td>phone_number</td><td class="mapping-arrow">→</td><td>Phone</td><td>+254 711 220 034</td></tr>
          <tr><td>gender</td><td class="mapping-arrow">→</td><td>Gender</td><td>Female</td></tr>
        </tbody>
      </table>
      <div style="display:flex;gap:10px;margin-top:18px;">
        <button class="btn btn-secondary">Cancel</button>
        <button class="btn btn-primary" onclick="showToast('12 trainee records imported')">Confirm Import</button>
      </div>
    </div>`;
}

function renderSettings() {
  const tabs = [
    { id: "fluxx", label: "Fluxx Parameters" },
    { id: "mou", label: "MOU Status" },
    { id: "import", label: "Data Import" },
  ];
  let body = "";
  if (state.settingsTab === "fluxx") body = renderSettingsFluxx();
  else if (state.settingsTab === "mou") body = renderSettingsMou();
  else body = renderSettingsImport();

  return `
    <div class="page-header">
      <div>
        <h1>Settings</h1>
        <div class="page-sub">Program configuration, donor reporting parameters, and partnership status</div>
      </div>
    </div>
    <div class="tabs">
      ${tabs.map((t) => `<button class="tab-btn ${state.settingsTab === t.id ? "active" : ""}" onclick="switchSettingsTab('${t.id}')">${t.label}</button>`).join("")}
    </div>
    ${body}
  `;
}

/* ---------------- Add Trainee Modal ---------------- */
function openAddTraineeModal() { state.addTraineeModalOpen = true; render(); }
function closeAddTraineeModal() { state.addTraineeModalOpen = false; render(); }

function renderAddTraineeModal() {
  if (!state.addTraineeModalOpen) return "";
  const cohortOptions = COHORTS.map((c) => `<option value="${c.id}">${c.label}</option>`).join("");
  const programOptions = PROGRAMS.map((p) => `<option value="${p}">${p}</option>`).join("");
  return `
  <div class="modal-overlay" onclick="if(event.target===this) closeAddTraineeModal()">
    <div class="modal-card modal-wide">
      <div class="modal-header">
        <h3>Add Trainee</h3>
        <button class="modal-close" onclick="closeAddTraineeModal()">${icon("x", 18)}</button>
      </div>
      <form onsubmit="saveNewTrainee(event)">
        <div class="modal-body">
          <div class="form-row-2">
            <div class="field"><label>Full Name</label><input type="text" name="name" placeholder="e.g. Fatuma Ali Warsame" required /></div>
            <div class="field"><label>Student ID</label><input type="text" name="id" placeholder="e.g. OG-2024-011" required /></div>
          </div>
          <div class="form-row-2">
            <div class="field"><label>Cohort</label><select name="cohort">${cohortOptions}</select></div>
            <div class="field"><label>Course / Program</label><select name="program">${programOptions}</select></div>
          </div>
          <div class="form-row-2">
            <div class="field"><label>Phone</label><input type="text" name="phone" placeholder="+254 7xx xxx xxx" /></div>
            <div class="field"><label>Email</label><input type="email" name="email" placeholder="name@example.com" /></div>
          </div>
          <div class="form-row-2">
            <div class="field"><label>Gender</label>
              <select name="gender"><option>Female</option><option>Male</option><option>Other</option></select>
            </div>
            <div class="field"><label>Age</label><input type="number" name="age" placeholder="e.g. 24" /></div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" onclick="closeAddTraineeModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Add Trainee</button>
        </div>
      </form>
    </div>
  </div>`;
}
function saveNewTrainee(e) {
  e.preventDefault();
  const form = new FormData(e.target);
  const id = form.get("id") || `OG-2024-0${TRAINEES.length + 1}`;
  TRAINEES.push({
    id, name: form.get("name"), email: form.get("email") || "", phone: form.get("phone") || "",
    linkedin: "", cohortId: form.get("cohort"), program: form.get("program"),
    gradDateActual: "", gradDateExpected: "2026-12-05", gender: form.get("gender"),
    age: Number(form.get("age")) || 0, locationType: "Rural", refugeeStatus: "Not specified",
    disability: "None reported",
    employment: { status: "Unknown", employer: "", industry: "", contractType: "", location: "", dateUpdated: "2026-07-01" },
    completeness: 20, surveyStatus: "Not sent", surveySubmitted: "",
  });
  state.addTraineeModalOpen = false;
  showToast(`${form.get("name")} added to Trainee Database`);
  render();
}

/* ---------------- Import Cohort Modal ---------------- */
function openImportModal() { state.importModalOpen = true; render(); }
function closeImportModal() { state.importModalOpen = false; render(); }
function renderImportModal() {
  if (!state.importModalOpen) return "";
  return `
  <div class="modal-overlay" onclick="if(event.target===this) closeImportModal()">
    <div class="modal-card modal-wide">
      <div class="modal-header">
        <h3>Import Cohort</h3>
        <button class="modal-close" onclick="closeImportModal()">${icon("x", 18)}</button>
      </div>
      <div class="modal-body">
        <div class="dropzone" onclick="showToast('File picker would open here')">
          ${icon("upload", 26)}
          <div style="margin-top:8px;font-weight:600;color:var(--charcoal);">Drag &amp; drop a CSV file, or click to browse</div>
          <div style="margin-top:4px;">Uses the same column mapping as Settings → Data Import</div>
        </div>
        <table class="mapping-table">
          <thead><tr><th>CSV Column</th><th></th><th>Maps To</th></tr></thead>
          <tbody>
            <tr><td>student_id</td><td class="mapping-arrow">→</td><td>Student ID</td></tr>
            <tr><td>full_name</td><td class="mapping-arrow">→</td><td>Full Name</td></tr>
            <tr><td>cohort</td><td class="mapping-arrow">→</td><td>Cohort Number</td></tr>
          </tbody>
        </table>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="closeImportModal()">Cancel</button>
        <button class="btn btn-primary" onclick="closeImportModal(); showToast('Cohort import complete — 8 trainees added')">Confirm Import</button>
      </div>
    </div>
  </div>`;
}

/* ---------------- Learner Touchpoint Preview ---------------- */
function openLearnerPreview() {
  state.learnerPreview = { open: true, returnScreen: state.screen, inlineFormOpen: false };
  render();
}
function closeLearnerPreview() {
  state.learnerPreview = { open: false, returnScreen: null, inlineFormOpen: false };
  render();
}
function toggleLearnerInlineForm() {
  state.learnerPreview.inlineFormOpen = !state.learnerPreview.inlineFormOpen;
  render();
}
function saveLearnerProfile(e) {
  e.preventDefault();
  showToast("Profile updated — thank you!");
  state.learnerPreview.inlineFormOpen = false;
  render();
}
function openLearnerSurvey() {
  showToast("Would open Google Form follow-up survey in a new tab");
}

function renderLearnerPreview() {
  if (!state.learnerPreview.open) return "";
  const t = TRAINEES[0];
  return `
  <div class="phone-overlay">
    <div class="phone-frame">
      <div class="phone-notch"></div>
      <div class="phone-screen">
        <div class="phone-status-bar"><span>9:41</span><span>●●● OkapiGreen</span></div>
        <div class="learner-header">
          <div class="lh-brand">${icon("sun", 14)} OkapiGreen · pamba</div>
          <h2>Hi ${t.name.split(" ")[0]} 👋</h2>
          <div class="lh-sub">${t.program}, ${cohortLabel(t.cohortId)}</div>
        </div>
        <div class="learner-body">
          <div class="learner-progress-card">
            <div class="learner-progress-label"><span>Profile completeness</span><span>${t.completeness}%</span></div>
            <div class="completeness-track"><div class="completeness-fill" style="width:${t.completeness}%;"></div></div>
          </div>

          <div class="learner-action-card" onclick="toggleLearnerInlineForm()">
            <div class="learner-action-icon red">${icon("edit", 18)}</div>
            <div>
              <div class="learner-action-title">Update my profile</div>
              <div class="learner-action-sub">Phone number &amp; LinkedIn</div>
            </div>
          </div>

          ${state.learnerPreview.inlineFormOpen ? `
          <form class="learner-inline-form" onsubmit="saveLearnerProfile(event)">
            <div class="field"><label>Phone Number</label><input type="text" value="${t.phone}" /></div>
            <div class="field" style="margin-bottom:12px;"><label>LinkedIn URL</label><input type="text" placeholder="linkedin.com/in/…" value="${t.linkedin}" /></div>
            <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center;">Save</button>
          </form>` : ""}

          <div class="learner-action-card" onclick="openLearnerSurvey()">
            <div class="learner-action-icon orange">${icon("externallink", 18)}</div>
            <div>
              <div class="learner-action-title">Complete follow-up survey</div>
              <div class="learner-action-sub">Opens Google Form (2 min)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="phone-close-btn" onclick="closeLearnerPreview()">Close preview</button>
    <div class="phone-caption">This is a preview of what ${t.name.split(" ")[0]} sees on their phone — most learners only have WhatsApp/phone access.</div>
  </div>`;
}

/* ---------------- Router / Render ---------------- */
function goTo(screen) {
  state.screen = screen;
  render();
}

function render() {
  const app = document.getElementById("app");
  if (state.screen === "login") {
    app.innerHTML = renderLogin();
    return;
  }
  let content = "";
  if (state.screen === "dashboard") content = renderDashboard();
  else if (state.screen === "trainees") content = renderTrainees();
  else if (state.screen === "trainee-detail") content = renderTraineeDetail();
  else if (state.screen === "employment") content = renderEmployment();
  else if (state.screen === "placement") content = renderPlacement();
  else if (state.screen === "geographic") content = renderGeographic();
  else if (state.screen === "settings") content = renderSettings();
  else content = renderDashboard();

  app.innerHTML = renderShell(content) + renderEmploymentModal() + renderAddTraineeModal() + renderImportModal() + renderLearnerPreview();
}

document.addEventListener("DOMContentLoaded", render);
