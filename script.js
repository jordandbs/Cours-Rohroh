// La config Firebase est chargée depuis firebase-config.js (généré par GitHub Actions, jamais commité)

// ==================== DATA ====================
const programs = {
  "warmup-express": {
    exercises: [
      {
        name: "Rotation des chevilles",
        detail: "10 rotations par pied",
        duration: 30,
      },
      {
        name: "Montées de genoux sur place",
        detail: "20 répétitions",
        duration: 40,
      },
      {
        name: "Balancements de jambes",
        detail: "10 par jambe, avant/arrière",
        duration: 40,
      },
      {
        name: "Rotation du bassin",
        detail: "10 cercles dans chaque sens",
        duration: 30,
      },
      {
        name: "Talons-fesses sur place",
        detail: "20 répétitions",
        duration: 40,
      },
    ],
  },
  "warmup-full": {
    exercises: [
      { name: "Rotation des chevilles", detail: "10 par pied", duration: 30 },
      { name: "Flexions de genoux", detail: "15 répétitions", duration: 40 },
      { name: "Rotation du bassin", detail: "10 par sens", duration: 30 },
      { name: "Fentes avant dynamiques", detail: "8 par jambe", duration: 60 },
      { name: "Rotation des bras", detail: "10 grands cercles", duration: 30 },
      { name: "Montées de genoux", detail: "30 répétitions", duration: 50 },
      { name: "Pas chassés", detail: "10 mètres × 4", duration: 60 },
      {
        name: "Accélérations progressives",
        detail: "3 × 20 mètres",
        duration: 60,
      },
    ],
  },
  "warmup-intense": {
    exercises: [
      {
        name: "Rotation chevilles + poignets",
        detail: "10 par sens",
        duration: 30,
      },
      { name: "Flexions de genoux profondes", detail: "15 reps", duration: 40 },
      { name: "Fentes latérales", detail: "8 par côté", duration: 50 },
      {
        name: "Fentes avant + rotation tronc",
        detail: "8 par jambe",
        duration: 60,
      },
      { name: "Montées de genoux dynamiques", detail: "20m × 2", duration: 50 },
      { name: "Talons-fesses rapides", detail: "20m × 2", duration: 50 },
      { name: "Pas chassés", detail: "20m × 2 chaque côté", duration: 60 },
      { name: "Skipping (griffé)", detail: "20m × 2", duration: 50 },
      { name: "Jambes tendues", detail: "20m × 2", duration: 50 },
      { name: "Accélérations 50%", detail: "30m × 2", duration: 50 },
      { name: "Accélérations 80%", detail: "30m × 2", duration: 50 },
      { name: "Sprint départ arrêté", detail: "20m × 2", duration: 40 },
    ],
  },
  "stretch-quick": {
    exercises: [
      {
        name: "Quadriceps debout",
        detail: "20s par jambe – tire le talon aux fesses",
        duration: 40,
      },
      {
        name: "Ischio-jambiers",
        detail: "20s par jambe – pied sur un support",
        duration: 40,
      },
      {
        name: "Mollets au mur",
        detail: "20s par jambe – mains au mur, talon au sol",
        duration: 40,
      },
      { name: "Hanches (pigeon debout)", detail: "20s par côté", duration: 40 },
      {
        name: "Adducteurs",
        detail: "20s – fente latérale douce",
        duration: 30,
      },
      {
        name: "Dos + épaules",
        detail: "20s – bras croisé devant la poitrine",
        duration: 30,
      },
    ],
  },
  "stretch-full": {
    exercises: [
      { name: "Quadriceps debout", detail: "30s par jambe", duration: 60 },
      {
        name: "Ischio-jambiers assis",
        detail: "30s par jambe – jambe tendue",
        duration: 60,
      },
      {
        name: "Mollets marche (gastrocnémien)",
        detail: "30s par jambe",
        duration: 60,
      },
      { name: "Soléaire (genou plié)", detail: "25s par jambe", duration: 50 },
      {
        name: "Psoas-iliaque (fente basse)",
        detail: "30s par côté",
        duration: 60,
      },
      { name: "Piriforme (figure 4)", detail: "30s par côté", duration: 60 },
      { name: "Adducteurs papillon", detail: "30s", duration: 30 },
      {
        name: "Bandelette IT (croisé debout)",
        detail: "25s par côté",
        duration: 50,
      },
      {
        name: "Fessiers (genou poitrine)",
        detail: "25s par côté",
        duration: 50,
      },
      { name: "Torsion dorsale au sol", detail: "30s par côté", duration: 60 },
    ],
  },
  "stretch-deep": {
    exercises: [
      { name: "Chat-vache (dos)", detail: "10 cycles lents", duration: 60 },
      { name: "Chien tête en bas", detail: "30s – pédale pieds", duration: 40 },
      { name: "Fente basse + rotation", detail: "30s par côté", duration: 60 },
      { name: "Pigeon au sol", detail: "45s par côté", duration: 90 },
      { name: "Grenouille (adducteurs)", detail: "45s", duration: 45 },
      { name: "Quadriceps allongé", detail: "30s par jambe", duration: 60 },
      {
        name: "Ischio-jambiers PNF",
        detail: "3 × 10s contraction/relâche",
        duration: 60,
      },
      { name: "Écart latéral progressif", detail: "45s", duration: 45 },
      {
        name: "Psoas profond (fente + bras levés)",
        detail: "30s par côté",
        duration: 60,
      },
      { name: "Torsion assise", detail: "30s par côté", duration: 60 },
      { name: "Pec + épaule au mur", detail: "25s par bras", duration: 50 },
      { name: "Flexion avant assise", detail: "45s", duration: 45 },
      { name: "Happy baby", detail: "30s", duration: 30 },
      {
        name: "Savasana (relaxation)",
        detail: "60s – respire profondément",
        duration: 60,
      },
    ],
  },
};

// ==================== STORAGE ====================
const STORAGE_KEY = "coursrohroh_data";
const SESSION_KEY = "rohroh_session";
const DEFAULT_AVATAR = "img/rohroh.png";

let db = null;
let storage = null;
let currentUser = null; // { username, displayName }
let appData = { runs: [], name: "", theme: "dark", avatar: DEFAULT_AVATAR, favorites: [] };

// Cache localStorage (utilisé comme fallback offline)
function saveData(d) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(d));
  // Sync Firestore en arrière-plan (on retire les médias base64 trop lourds)
  if (!currentUser || !db) return;
  const runsLight = (d.runs || []).map((r) => {
    const { _videoObjectUrl, ...rest } = r;
    // Garder le media seulement s'il contient des URLs Storage (pas du base64 lourd)
    const hasStorageUrl = r.media && (r.media.thumbnailUrl || r.media.fullUrl);
    if (!hasStorageUrl) rest.media = null;
    return rest;
  });
  db.collection("users")
    .doc(currentUser.username)
    .update({
      runs: runsLight,
      name: d.name,
      theme: d.theme,
      avatar: d.avatar,
      favorites: d.favorites || [],
      updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .catch((e) => console.warn("Sync Firestore:", e));
}

// Fusionne les données média du cache local dans les runs Firestore
function mergeLocalMedia(firestoreRuns) {
  const localData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  if (!localData || !localData.runs) return firestoreRuns;
  return firestoreRuns.map((fr) => {
    const lr = localData.runs.find((r) => r.date === fr.date);
    if (lr && lr.media)
      return { ...fr, media: lr.media, _videoObjectUrl: lr._videoObjectUrl };
    return fr;
  });
}

// ==================== AUTH ====================
async function hashPassword(pwd) {
  const data = new TextEncoder().encode(pwd + ":rohroh2025");
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function switchAuthTab(tab) {
  ["login", "register"].forEach((t) => {
    document
      .getElementById("auth-tab-" + t)
      .classList.toggle("active", t === tab);
    document
      .getElementById("auth-form-" + t)
      .classList.toggle("active", t === tab);
  });
  document.getElementById("login-err").textContent = "";
  document.getElementById("reg-err").textContent = "";
}

function showAuthForms() {
  document.getElementById("auth-loading").style.display = "none";
  document.getElementById("auth-box").style.display = "flex";
}

function hideAuthOverlay() {
  document.getElementById("auth-overlay").style.display = "none";
}

async function doLogin() {
  const id = document.getElementById("login-id").value.trim().toLowerCase();
  const pwd = document.getElementById("login-pwd").value;
  const errEl = document.getElementById("login-err");
  errEl.textContent = "";
  if (!id || !pwd) {
    errEl.textContent = "Remplis les deux champs";
    return;
  }

  const btn = document.getElementById("btn-login");
  btn.textContent = "Connexion…";
  btn.disabled = true;
  try {
    const hash = await hashPassword(pwd);
    const docSnap = await db.collection("users").doc(id).get();
    if (!docSnap.exists || docSnap.data().password !== hash) {
      errEl.textContent = "Identifiant ou mot de passe incorrect";
      btn.textContent = "Se connecter";
      btn.disabled = false;
      return;
    }
    const data = docSnap.data();
    currentUser = { username: id, displayName: data.name || id };
    localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
    appData = {
      runs: mergeLocalMedia(data.runs || []),
      name: data.name || id,
      theme: data.theme || "dark",
      avatar: data.avatar || DEFAULT_AVATAR,
      favorites: data.favorites || [],
    };
    saveData(appData);
    hideAuthOverlay();
    initApp();
  } catch (e) {
    console.error(e);
    errEl.textContent = "Erreur de connexion. Vérifie ta connexion internet.";
    btn.textContent = "Se connecter";
    btn.disabled = false;
  }
}

async function doRegister() {
  const id = document.getElementById("reg-id").value.trim().toLowerCase();
  const pwd = document.getElementById("reg-pwd").value;
  const errEl = document.getElementById("reg-err");
  errEl.textContent = "";
  if (!id || !pwd) {
    errEl.textContent = "Remplis les deux champs";
    return;
  }
  if (id.length < 2) {
    errEl.textContent = "Identifiant trop court (min 2 caractères)";
    return;
  }
  if (!/^[a-z0-9_\-]+$/.test(id)) {
    errEl.textContent = "Identifiant : lettres, chiffres, _ ou - uniquement";
    return;
  }

  const btn = document.getElementById("btn-register");
  btn.textContent = "Création…";
  btn.disabled = true;
  try {
    const hash = await hashPassword(pwd);
    const docRef = db.collection("users").doc(id);
    const docSnap = await docRef.get();
    if (docSnap.exists) {
      errEl.textContent = "Cet identifiant est déjà pris";
      btn.textContent = "Créer mon compte";
      btn.disabled = false;
      return;
    }
    // Pseudo affiché = id avec première lettre en majuscule
    const displayName = id.charAt(0).toUpperCase() + id.slice(1);
    await docRef.set({
      username: id,
      name: displayName,
      password: hash,
      theme: "dark",
      avatar: DEFAULT_AVATAR,
      runs: [],
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    currentUser = { username: id, displayName };
    localStorage.setItem(SESSION_KEY, JSON.stringify(currentUser));
    appData = {
      runs: [],
      name: displayName,
      theme: "dark",
      avatar: DEFAULT_AVATAR,
    };
    saveData(appData);
    hideAuthOverlay();
    initApp();
  } catch (e) {
    console.error(e);
    errEl.textContent = "Erreur lors de la création. Réessaie.";
    btn.textContent = "Créer mon compte";
    btn.disabled = false;
  }
}

// Demande confirmation avant de déconnecter
function logout() {
  document.getElementById("logout-modal-overlay").classList.add("show");
}
function cancelLogout(event) {
  if (event && event.target !== document.getElementById("logout-modal-overlay"))
    return;
  document.getElementById("logout-modal-overlay").classList.remove("show");
}
function confirmLogout() {
  document.getElementById("logout-modal-overlay").classList.remove("show");
  localStorage.removeItem(SESSION_KEY);
  currentUser = null;
  appData = { runs: [], name: "", theme: "dark", avatar: DEFAULT_AVATAR };
  // Réaffiche l'overlay auth
  document.getElementById("auth-overlay").style.display = "flex";
  document.getElementById("auth-loading").style.display = "none";
  document.getElementById("auth-box").style.display = "flex";
  // Reset les champs
  ["login-id", "login-pwd", "reg-id", "reg-pwd"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  document.getElementById("login-err").textContent = "";
  document.getElementById("reg-err").textContent = "";
  switchAuthTab("login");
}

async function checkSession() {
  const session = JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  if (!session) {
    showAuthForms();
    return;
  }
  try {
    const docSnap = await db.collection("users").doc(session.username).get();
    if (!docSnap.exists) {
      localStorage.removeItem(SESSION_KEY);
      showAuthForms();
      return;
    }
    const data = docSnap.data();
    currentUser = session;
    appData = {
      runs: mergeLocalMedia(data.runs || []),
      name: data.name || session.displayName,
      theme: data.theme || "dark",
      avatar: data.avatar || DEFAULT_AVATAR,
      favorites: data.favorites || [],
    };
    saveData(appData);
    hideAuthOverlay();
    initApp();
  } catch (e) {
    // Fallback offline
    console.warn("Firestore inaccessible, mode offline:", e);
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (localData) {
      currentUser = session;
      appData = localData;
      hideAuthOverlay();
      initApp();
    } else {
      localStorage.removeItem(SESSION_KEY);
      showAuthForms();
    }
  }
}

function initApp() {
  setTheme(appData.theme || "dark");
  renderHistory();
  renderProfile();
}

// ==================== THEMES ====================
function setTheme(id) {
  document.documentElement.setAttribute("data-theme", id);
  appData.theme = id;
  saveData(appData);
  document.querySelectorAll(".theme-opt").forEach((el) => {
    el.classList.toggle("selected", el.dataset.themeId === id);
  });
  updateMapTiles();
}

// ==================== DETAIL VIEW ====================
let currentProgram = null;
let completedExercises = new Set();

function openDetail(id) {
  const prog = programs[id];
  if (!prog) return;
  currentProgram = id;
  completedExercises = new Set();
  // title/desc optionnels
  document.getElementById("detail-title").textContent = prog.title || "";
  document.getElementById("detail-desc").textContent = prog.desc || "";
  renderExercises(prog.exercises);
  document.getElementById("detail-overlay").classList.add("show");
}
function closeDetail() {
  document.getElementById("detail-overlay").classList.remove("show");
  currentProgram = null;
}
function renderExercises(exercises) {
  document.getElementById("detail-exercises").innerHTML = exercises
    .map(
      (ex, i) => `
    <div class="exercise-item ${completedExercises.has(i) ? "done" : ""}" onclick="startExercise(${i})">
      <div class="ex-check">${completedExercises.has(i) ? "✓" : ""}</div>
      <div class="ex-info"><div class="ex-name">${ex.name}</div><div class="ex-detail">${ex.detail}</div></div>
      <div class="ex-timer">${ex.duration}s</div>
    </div>`,
    )
    .join("");
}

// ==================== EXERCISE TIMER ====================
let exTimerInterval = null,
  exTimeLeft = 0,
  exTotalTime = 0,
  currentExIndex = 0;

function startExercise(idx) {
  const prog = programs[currentProgram];
  if (!prog) return;
  currentExIndex = idx;
  const ex = prog.exercises[idx];
  exTimeLeft = ex.duration;
  exTotalTime = ex.duration;
  document.getElementById("timer-name").textContent = ex.name;
  document.getElementById("timer-count").textContent = exTimeLeft;
  document.getElementById("timer-bar").style.width = "100%";
  document.getElementById("timer-overlay").classList.add("show");
  clearInterval(exTimerInterval);
  exTimerInterval = setInterval(() => {
    exTimeLeft--;
    document.getElementById("timer-count").textContent = Math.max(
      0,
      exTimeLeft,
    );
    document.getElementById("timer-bar").style.width =
      (exTimeLeft / exTotalTime) * 100 + "%";
    if (exTimeLeft <= 0) completeExercise();
  }, 1000);
}
function completeExercise() {
  clearInterval(exTimerInterval);
  completedExercises.add(currentExIndex);
  const prog = programs[currentProgram];
  if (currentExIndex < prog.exercises.length - 1)
    setTimeout(() => startExercise(currentExIndex + 1), 400);
  else document.getElementById("timer-overlay").classList.remove("show");
  renderExercises(prog.exercises);
}
function stopExTimer() {
  clearInterval(exTimerInterval);
  document.getElementById("timer-overlay").classList.remove("show");
}
function skipExTimer() {
  completeExercise();
}

// ==================== RUN TRACKER ====================
let runState = "idle",
  runStart = 0,
  runElapsed = 0,
  runInterval = null,
  watchId = null,
  runPositions = [],
  totalDist = 0;

function toggleRun() {
  if (runState === "idle") startRun();
  else if (runState === "running") pauseRun();
  else resumeRun();
}
function startRun() {
  runState = "running";
  runStart = Date.now();
  runElapsed = 0;
  totalDist = 0;
  runPositions = [];
  updateRunUI();
  runInterval = setInterval(tickRun, 100);
  startGPS();
}
function pauseRun() {
  runState = "paused";
  runElapsed += Date.now() - runStart;
  clearInterval(runInterval);
  updateRunUI();
}
function resumeRun() {
  runState = "running";
  runStart = Date.now();
  runInterval = setInterval(tickRun, 100);
  updateRunUI();
}
function resetRun() {
  if (runState === "running" || runState === "paused") {
    const elapsed =
      runState === "running"
        ? runElapsed + (Date.now() - runStart)
        : runElapsed;
    if (elapsed > 5000) {
      appData.runs.unshift({
        date: new Date().toISOString(),
        duration: elapsed,
        distance: totalDist,
      });
      saveData(appData);
    }
  }
  runState = "idle";
  clearInterval(runInterval);
  stopGPS();
  runElapsed = 0;
  totalDist = 0;
  document.getElementById("run-timer").innerHTML =
    '00:00<span class="ms">:00</span>';
  document.getElementById("run-dist").textContent = "0.00";
  document.getElementById("run-pace").textContent = "--:--";
  document.getElementById("run-cal").textContent = "0";
  updateRunUI();
  renderHistory();
}
function tickRun() {
  const total = runElapsed + (Date.now() - runStart),
    s = Math.floor(total / 1000),
    m = Math.floor(s / 60),
    sec = s % 60,
    ms = Math.floor((total % 1000) / 10);
  document.getElementById("run-timer").innerHTML =
    `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}<span class="ms">:${String(ms).padStart(2, "0")}</span>`;
  document.getElementById("run-cal").textContent = Math.floor(s / 6);
  if (totalDist > 0.01) {
    const pS = total / 1000 / totalDist;
    document.getElementById("run-pace").textContent =
      `${Math.floor(pS / 60)}:${String(Math.floor(pS % 60)).padStart(2, "0")}`;
  }
}
function updateRunUI() {
  const btn = document.getElementById("btn-run");
  const reset = document.getElementById("btn-reset");
  const finish = document.getElementById("btn-finish");
  if (runState === "idle") {
    btn.className = "run-btn start";
    btn.innerHTML =
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>';
    reset.style.visibility = "hidden";
    finish.style.visibility = "hidden";
  } else if (runState === "running") {
    btn.className = "run-btn pause pulsing";
    btn.innerHTML =
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="5" height="18" rx="1"/><rect x="14" y="3" width="5" height="18" rx="1"/></svg>';
    reset.style.visibility = "visible";
    finish.style.visibility = "hidden";
  } else {
    // paused
    btn.className = "run-btn start";
    btn.innerHTML =
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>';
    reset.style.visibility = "visible";
    finish.style.visibility = "visible";
  }
}
function setGPSStatus(status) {
  // status: 'searching' | 'ok' | 'error' | 'off'
  const distEl = document.getElementById("run-dist");
  if (!distEl) return;
  const icons = { searching: "📡", ok: "", error: "📵", off: "" };
  if (status === "searching") distEl.style.opacity = "0.5";
  else distEl.style.opacity = "1";
}

function startGPS() {
  if (!navigator.geolocation) {
    setGPSStatus("error");
    return;
  }
  setGPSStatus("searching");
  watchId = navigator.geolocation.watchPosition(
    (pos) => {
      setGPSStatus("ok");
      const p = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
        time: Date.now(),
      };
      if (runPositions.length > 0) {
        const last = runPositions[runPositions.length - 1];
        const d = haversine(last.lat, last.lng, p.lat, p.lng);
        // Seuil de 2m pour éviter le bruit GPS, mais on accepte quand même
        if (d > 0.002) {
          totalDist += d;
          document.getElementById("run-dist").textContent =
            totalDist.toFixed(2);
          runPositions.push(p);
        }
      } else {
        runPositions.push(p);
      }
    },
    (err) => {
      console.warn("GPS error:", err.code, err.message);
      setGPSStatus("error");
      // Codes : 1=PERMISSION_DENIED, 2=UNAVAILABLE, 3=TIMEOUT
    },
    { enableHighAccuracy: true, maximumAge: 1000, timeout: 15000 },
  );
}
function stopGPS() {
  if (watchId !== null) navigator.geolocation.clearWatch(watchId);
  watchId = null;
}
function haversine(lat1, lon1, lat2, lon2) {
  const R = 6371,
    dLat = ((lat2 - lat1) * Math.PI) / 180,
    dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ==================== HISTORY ====================
function renderHistory() {
  const el = document.getElementById("history-list");
  if (appData.runs.length === 0) {
    el.innerHTML =
      '<div class="empty-state"><div class="emoji">👟</div><p>Aucune course enregistrée.<br>Va courir le mimicul</p></div>';
    renderWeekChart();
    return;
  }
  const months = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Jun",
    "Jul",
    "Aoû",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];
  el.innerHTML = appData.runs
    .slice(0, 20)
    .map((r, idx) => {
      const d = new Date(r.date);
      const dur = r.duration / 1000;
      const m = Math.floor(dur / 60);
      const s = Math.floor(dur % 60);
      const dist = r.distance || 0;
      const pace =
        dist > 0.01
          ? (() => {
              const p = dur / dist;
              return `${Math.floor(p / 60)}:${String(Math.floor(p % 60)).padStart(2, "0")}`;
            })()
          : "--:--";
      const feelingBadge = r.feelingEmoji
        ? `<span style="font-size:15px;margin-left:5px">${r.feelingEmoji}</span>`
        : "";
      const titleLine = r.title
        ? `<div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:1px">${r.title}</div>`
        : "";
      const descLine = r.description
        ? `<div style="font-size:10px;color:var(--text3);margin-top:1px;line-height:1.3">${r.description}</div>`
        : "";
      // Miniature média
      let thumbHtml = "";
      const thumb = mediaThumbnail(r.media);
      if (thumb) {
        const isVid = r.media.type === "video";
        thumbHtml = `
            <div class="hi-thumb-wrap" onclick="event.stopPropagation(); openMediaViewer(${idx})">
              <img src="${thumb}" alt="media">
              ${isVid ? '<div class="hi-thumb-video-icon">▶</div>' : ""}
            </div>`;
      }
      const clickAttr = thumb ? `onclick="openMediaViewer(${idx})"` : "";
      return `<div class="history-item" ${clickAttr}>
          <div class="hi-date"><div class="hi-day">${d.getDate()}</div><div class="hi-month">${months[d.getMonth()]}</div></div>
          <div class="hi-info">${titleLine}<div class="hi-dist">${dist.toFixed(2)} km${feelingBadge}</div><div class="hi-meta">${m}min ${s}s</div>${descLine}</div>
          <div class="hi-pace">${pace}<br><span style="font-size:9px;color:var(--text3)">min/km</span></div>
          ${thumbHtml}
          <button class="hi-delete-btn" onclick="event.stopPropagation(); askDeleteRun(${idx})" title="Supprimer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>
        </div>`;
    })
    .join("");
  renderWeekChart();
}
function renderWeekChart() {
  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];
  const now = new Date();
  const ws = new Date(now);
  ws.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1));
  ws.setHours(0, 0, 0, 0);
  const dk = new Array(7).fill(0);
  appData.runs.forEach((r) => {
    const rd = new Date(r.date);
    if (rd >= ws) {
      let di = rd.getDay() - 1;
      if (di < 0) di = 6;
      dk[di] += r.distance || 0;
    }
  });
  const max = Math.max(...dk, 1);
  document.getElementById("week-chart").innerHTML = days
    .map((d, i) => {
      const h = Math.max(4, (dk[i] / max) * 70);
      return `<div class="week-bar-wrap"><div class="week-bar ${dk[i] > 0 ? "has-data" : ""}" style="height:${h}px"></div><div class="week-day">${d}</div></div>`;
    })
    .join("");
}

// ==================== MEDIA ====================
let pendingMedia = null; // { type, thumbnail, fullData, videoObjectUrl }

function compressImage(file, maxPx = 1000, quality = 0.72) {
  return new Promise((resolve) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      let w = img.width,
        h = img.height;
      if (w > maxPx || h > maxPx) {
        if (w > h) {
          h = Math.round((h * maxPx) / w);
          w = maxPx;
        } else {
          w = Math.round((w * maxPx) / h);
          h = maxPx;
        }
      }
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      c.getContext("2d").drawImage(img, 0, 0, w, h);
      URL.revokeObjectURL(url);
      resolve(c.toDataURL("image/jpeg", quality));
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };
    img.src = url;
  });
}

function extractVideoThumb(file) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    const url = URL.createObjectURL(file);
    video.muted = true;
    video.playsInline = true;
    video.onloadeddata = () => {
      video.currentTime = 0.5;
    };
    video.onseeked = () => {
      const maxPx = 600;
      let w = video.videoWidth,
        h = video.videoHeight;
      if (w > maxPx || h > maxPx) {
        if (w > h) {
          h = Math.round((h * maxPx) / w);
          w = maxPx;
        } else {
          w = Math.round((w * maxPx) / h);
          h = maxPx;
        }
      }
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      c.getContext("2d").drawImage(video, 0, 0, w, h);
      resolve({
        thumbnail: c.toDataURL("image/jpeg", 0.7),
        videoObjectUrl: url,
      });
    };
    video.onerror = () => {
      URL.revokeObjectURL(url);
      resolve(null);
    };
    video.src = url;
  });
}

async function handleMediaSelect(event) {
  const file = event.target.files[0];
  if (!file) return;

  const isVideo = file.type.startsWith("video/");
  const preview = document.getElementById("finish-media-preview");
  const addBtn = document.querySelector(".finish-media-add");

  // Feedback chargement
  addBtn.innerHTML = "<span>Caro la GOAT !<span>";

  if (isVideo) {
    const result = await extractVideoThumb(file);
    if (!result) return;
    pendingMedia = {
      type: "video",
      thumbnail: result.thumbnail,
      videoObjectUrl: result.videoObjectUrl,
      fullData: null,
    };
  } else {
    const compressed = await compressImage(file);
    if (!compressed) return;
    pendingMedia = {
      type: "image",
      thumbnail: compressed,
      fullData: compressed,
      videoObjectUrl: null,
    };
  }

  // Affiche aperçu
  addBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Média ajouté ✓</span>`;
  addBtn.classList.add("has-media");

  preview.innerHTML = `
    <div class="finish-media-thumb-wrap">
      <img src="${pendingMedia.thumbnail}" alt="aperçu">
      ${isVideo ? '<div class="finish-media-video-badge">▶ Vidéo</div>' : ""}
      <button class="finish-media-remove" onclick="removePendingMedia()" type="button">✕</button>
    </div>`;
}

function removePendingMedia() {
  pendingMedia = null;
  if (pendingMedia && pendingMedia.videoObjectUrl)
    URL.revokeObjectURL(pendingMedia.videoObjectUrl);
  document.getElementById("finish-media-preview").innerHTML = "";
  document.getElementById("finish-media-input").value = "";
  const addBtn = document.querySelector(".finish-media-add");
  addBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Ajouter une photo ou vidéo</span>`;
  addBtn.classList.remove("has-media");
}

// ===== MEDIA VIEWER =====
let activeVideoUrl = null; // garde en mémoire les URL des vidéos pour la session

function openMediaViewer(runIndex) {
  const run = appData.runs[runIndex];
  if (!run) return;
  const viewer = document.getElementById("media-viewer");
  const content = document.getElementById("media-viewer-content");
  const info = document.getElementById("media-viewer-info");

  content.innerHTML = "";

  const media = run.media;
  if (!media) return;

  if (media.type === "image") {
    content.innerHTML = `<img src="${mediaFull(media)}" alt="photo">`;
    info.textContent = run.title || new Date(run.date).toLocaleDateString("fr-FR");
  } else {
    // Vidéo : objectUrl en mémoire si dispo, sinon miniature
    const vurl = run._videoObjectUrl || null;
    if (vurl) {
      const vid = document.createElement("video");
      vid.src = vurl;
      vid.controls = true;
      vid.playsInline = true;
      vid.autoplay = true;
      content.appendChild(vid);
    } else {
      content.innerHTML = `<img src="${mediaThumbnail(media)}" alt="aperçu vidéo" style="opacity:.7">`;
    }
    info.textContent = run.title || new Date(run.date).toLocaleDateString("fr-FR");
  }

  viewer.classList.add("show");
}

function closeMediaViewer() {
  const viewer = document.getElementById("media-viewer");
  const content = document.getElementById("media-viewer-content");
  viewer.classList.remove("show");
  // Arrête la vidéo si en cours
  const vid = content.querySelector("video");
  if (vid) {
    vid.pause();
    vid.src = "";
  }
  content.innerHTML = "";
}

// ==================== FINISH MODAL ====================
let selectedFeeling = null;
let finishRunData = null;

function openFinishModal() {
  // Pause si en cours
  if (runState === "running") pauseRun();

  // Capture des données
  const elapsed = runElapsed;
  const s = Math.floor(elapsed / 1000);
  const m = Math.floor(s / 60);
  const sec = s % 60;

  finishRunData = {
    elapsed,
    dist: totalDist,
    positions: [...runPositions],
    date: new Date().toISOString(),
  };

  // Affiche les stats
  document.getElementById("fm-dist").textContent = totalDist.toFixed(2);
  document.getElementById("fm-time").textContent =
    `${m}:${String(sec).padStart(2, "0")}`;
  if (totalDist > 0.01) {
    const pS = elapsed / 1000 / totalDist;
    document.getElementById("fm-pace").textContent =
      `${Math.floor(pS / 60)}:${String(Math.floor(pS % 60)).padStart(2, "0")}`;
  } else {
    document.getElementById("fm-pace").textContent = "--:--";
  }

  // Reset champs texte
  document.getElementById("fm-run-title").value = "";
  document.getElementById("fm-run-desc").value = "";

  // Reset média
  pendingMedia = null;
  document.getElementById("finish-media-preview").innerHTML = "";
  document.getElementById("finish-media-input").value = "";
  const addBtn = document.querySelector(".finish-media-add");
  if (addBtn) {
    addBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Ajouter une photo ou vidéo</span>`;
    addBtn.classList.remove("has-media");
  }

  // Reset ressenti
  selectedFeeling = null;
  document
    .querySelectorAll(".feeling-btn")
    .forEach((b) => b.classList.remove("selected"));
  document.getElementById("btn-save-run").disabled = true;

  // Affiche le modal, attend la fin de l'animation (320ms) puis initialise Leaflet
  document.getElementById("finish-overlay").classList.add("show");
  setTimeout(() => initFinishMap(runPositions), 380);
}

function closeFinishModal() {
  document.getElementById("finish-overlay").classList.remove("show");
  if (finishRouteMap) {
    finishRouteMap.remove();
    finishRouteMap = null;
  }
}

function selectFeeling(idx) {
  selectedFeeling = idx;
  document
    .querySelectorAll(".feeling-btn")
    .forEach((b, i) => b.classList.toggle("selected", i === idx));
  document.getElementById("btn-save-run").disabled = false;
}

async function saveFinishedRun() {
  if (selectedFeeling === null || !finishRunData) return;
  const feelings = ["😵", "😤", "😊", "😁", "🚀"];
  const feelNames = ["OSKUR", "Finito", "Tranquilouuu", "P'tite ruby maintenant!", "EZ"];

  // Bouton en loading
  const saveBtn = document.getElementById("btn-save-run");
  if (saveBtn) { saveBtn.disabled = true; saveBtn.textContent = "Envoi…"; }

  // Allège les positions GPS pour le stockage
  const pts = finishRunData.positions;
  const step = pts.length > 120 ? Math.ceil(pts.length / 120) : 1;
  const savedPositions = pts.filter((_, i) => i % step === 0);

  const runTitle = document.getElementById("fm-run-title").value.trim();
  const runDesc = document.getElementById("fm-run-desc").value.trim();
  const runDate = finishRunData.date;

  // Upload média vers Firebase Storage si présent
  let mediaToSave = null;
  if (pendingMedia) {
    const base = `media/${currentUser.username}/${runDate}`;
    try {
      if (pendingMedia.type === "image" && pendingMedia.fullData && storage) {
        const url = await uploadToStorage(base + "_full", pendingMedia.fullData);
        const thumbUrl = await uploadToStorage(base + "_thumb", pendingMedia.thumbnail);
        mediaToSave = { type: "image", thumbnailUrl: thumbUrl, fullUrl: url };
      } else if (pendingMedia.type === "video" && pendingMedia.thumbnail && storage) {
        const thumbUrl = await uploadToStorage(base + "_thumb", pendingMedia.thumbnail);
        mediaToSave = { type: "video", thumbnailUrl: thumbUrl, fullUrl: null };
      }
    } catch (e) {
      console.warn("Upload média Storage:", e);
      // Fallback : garder en base64 local uniquement
      mediaToSave = {
        type: pendingMedia.type,
        thumbnail: pendingMedia.thumbnail,
        fullData: pendingMedia.fullData,
      };
    }
  }

  const newRun = {
    date: runDate,
    duration: finishRunData.elapsed,
    distance: finishRunData.dist,
    title: runTitle || null,
    description: runDesc || null,
    feeling: selectedFeeling,
    feelingEmoji: feelings[selectedFeeling],
    feelingName: feelNames[selectedFeeling],
    positions: savedPositions,
    media: mediaToSave,
  };

  // Garde l'objectUrl vidéo en mémoire (session uniquement)
  if (pendingMedia && pendingMedia.videoObjectUrl) {
    newRun._videoObjectUrl = pendingMedia.videoObjectUrl;
  }

  appData.runs.unshift(newRun);
  saveData(appData);
  visitedHexCache = null; // force recalcul des hexagones visités

  // Reset complet
  closeFinishModal();
  runState = "idle";
  clearInterval(runInterval);
  stopGPS();
  runElapsed = 0;
  totalDist = 0;
  runPositions = [];
  document.getElementById("run-timer").innerHTML =
    '00:00<span class="ms">:00</span>';
  document.getElementById("run-dist").textContent = "0.00";
  document.getElementById("run-pace").textContent = "--:--";
  document.getElementById("run-cal").textContent = "0";
  updateRunUI();
  renderHistory();
  // Refresh carte explore si déjà ouverte
  if (exploreMap) refreshRunsOnMap();
  if (explorerMap) {
    visitedHexCache = null;
    renderHexGrid();
  }
}

let finishRouteMap = null;

function initFinishMap(positions) {
  if (finishRouteMap) {
    finishRouteMap.remove();
    finishRouteMap = null;
  }

  const mapEl = document.getElementById("finish-route-map");
  const emptyEl = document.getElementById("finish-map-empty");
  if (!mapEl || typeof L === "undefined") return;

  const hasGPS = positions && positions.length >= 2;
  emptyEl.style.display = hasGPS ? "none" : "flex";

  finishRouteMap = L.map("finish-route-map", {
    zoomControl: false,
    attributionControl: false,
    dragging: hasGPS,
    scrollWheelZoom: false,
    tap: hasGPS,
  }).setView([46.6, 2.4], 13);

  L.tileLayer(getTileUrl(), { subdomains: "abcd", maxZoom: 19 }).addTo(
    finishRouteMap,
  );

  if (hasGPS) {
    const latlngs = positions.map((p) => [p.lat, p.lng]);
    const accent =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--accent")
        .trim() || "#c8ff2e";

    const poly = L.polyline(latlngs, {
      color: accent,
      weight: 5,
      opacity: 0.95,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(finishRouteMap);

    L.circleMarker(latlngs[0], {
      radius: 7,
      fillColor: "#4cff72",
      color: "#fff",
      weight: 2,
      fillOpacity: 1,
      opacity: 1,
    }).addTo(finishRouteMap);
    L.circleMarker(latlngs[latlngs.length - 1], {
      radius: 7,
      fillColor: "#ff4757",
      color: "#fff",
      weight: 2,
      fillOpacity: 1,
      opacity: 1,
    }).addTo(finishRouteMap);

    // fitBounds après invalidateSize pour que les dimensions soient correctes
    setTimeout(() => {
      if (!finishRouteMap) return;
      finishRouteMap.invalidateSize();
      finishRouteMap.fitBounds(poly.getBounds().pad(0.25));
    }, 100);
  } else {
    setTimeout(() => finishRouteMap && finishRouteMap.invalidateSize(), 100);
  }
}

// ==================== EXPLORE MAP ====================
const TILE_DARK =
  "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
const TILE_LIGHT =
  "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";
const TILE_ATTR =
  '© <a href="https://openstreetmap.org">OpenStreetMap</a> © <a href="https://carto.com">CARTO</a>';
const LIGHT_THEMES = ["light", "pastel"];

function getTileUrl() {
  return LIGHT_THEMES.includes(appData.theme || "dark")
    ? TILE_LIGHT
    : TILE_DARK;
}

// --- Onglets ---
let currentExploreTab = "trace";

function switchExploreTab(tab) {
  currentExploreTab = tab;
  document
    .querySelectorAll(".explore-tab")
    .forEach((t) => t.classList.toggle("active", t.dataset.tab === tab));
  document
    .querySelectorAll(".explore-tab-content")
    .forEach((c) =>
      c.classList.toggle("active", c.id === `tab-content-${tab}`),
    );
  if (tab === "trace" && exploreMap)
    setTimeout(() => exploreMap.invalidateSize(), 80);
  if (tab === "explorer") initExplorerMap();
}

function locateActiveMap() {
  if (currentExploreTab === "trace") locateUser(false);
  else locateExplorer(false);
}

// -------- ONGLET TRACÉ --------
let exploreMap = null;
let exploreTileLayer = null;
let exploreRunLayers = [];
let exploreUserMarker = null;

function initExploreMap() {
  const mapEl = document.getElementById("explore-map");
  if (!mapEl || typeof L === "undefined") return;
  if (exploreMap) {
    setTimeout(() => exploreMap.invalidateSize(), 80);
    refreshRunsOnMap();
    return;
  }
  exploreMap = L.map("explore-map", {
    zoomControl: true,
    attributionControl: true,
    tap: true,
  }).setView([46.6, 2.4], 5);
  exploreTileLayer = L.tileLayer(getTileUrl(), {
    attribution: TILE_ATTR,
    subdomains: "abcd",
    maxZoom: 19,
  }).addTo(exploreMap);
  setTimeout(() => exploreMap.invalidateSize(), 80);
  refreshRunsOnMap();
  locateUser(true);
}

function locateUser(silent = false) {
  if (!exploreMap || !navigator.geolocation) return;
  const btn = document.getElementById("btn-locate");
  if (btn) btn.classList.add("locating");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      if (btn) btn.classList.remove("locating");
      const ll = [pos.coords.latitude, pos.coords.longitude];
      if (exploreUserMarker) exploreUserMarker.remove();
      const accent =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--accent")
          .trim() || "#c8ff2e";
      exploreUserMarker = L.layerGroup([
        L.circleMarker(ll, {
          radius: 14,
          fillColor: accent,
          color: accent,
          weight: 1,
          opacity: 0.22,
          fillOpacity: 0.18,
        }),
        L.circleMarker(ll, {
          radius: 7,
          fillColor: accent,
          color: "#fff",
          weight: 2,
          opacity: 1,
          fillOpacity: 1,
        }),
      ]).addTo(exploreMap);
      if (!silent) exploreMap.setView(ll, 15);
    },
    (err) => {
      if (btn) btn.classList.remove("locating");
    },
    { enableHighAccuracy: true, timeout: 10000 },
  );
}

function refreshRunsOnMap() {
  if (!exploreMap) return;
  exploreRunLayers.forEach((l) => l.remove());
  exploreRunLayers = [];
  const accent =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim() || "#c8ff2e";
  const runsWithGPS = appData.runs.filter(
    (r) => r.positions && r.positions.length >= 2,
  );
  const months = [
    "Jan",
    "Fév",
    "Mar",
    "Avr",
    "Mai",
    "Jun",
    "Jul",
    "Aoû",
    "Sep",
    "Oct",
    "Nov",
    "Déc",
  ];
  runsWithGPS.forEach((run) => {
    const latlngs = run.positions.map((p) => [p.lat, p.lng]);
    const poly = L.polyline(latlngs, {
      color: accent,
      weight: 4,
      opacity: 0.85,
      lineCap: "round",
      lineJoin: "round",
    }).addTo(exploreMap);
    const d = new Date(run.date);
    const dist = (run.distance || 0).toFixed(2);
    const dur = Math.floor((run.duration || 0) / 1000);
    const label =
      run.title || `Course du ${d.getDate()} ${months[d.getMonth()]}`;
    const feel = run.feelingEmoji ? `&nbsp;${run.feelingEmoji}` : "";
    poly.bindPopup(
      `<div style="font-weight:700;font-size:14px;margin-bottom:4px">${label}${feel}</div>` +
        `<div style="opacity:.7">${dist} km · ${Math.floor(dur / 60)}min ${dur % 60}s</div>`,
      { maxWidth: 200 },
    );
    const s = L.circleMarker(latlngs[0], {
      radius: 5,
      fillColor: "#4cff72",
      color: "#fff",
      weight: 1.5,
      fillOpacity: 1,
    }).addTo(exploreMap);
    const e = L.circleMarker(latlngs[latlngs.length - 1], {
      radius: 5,
      fillColor: "#ff4757",
      color: "#fff",
      weight: 1.5,
      fillOpacity: 1,
    }).addTo(exploreMap);
    exploreRunLayers.push(poly, s, e);
  });
  const bar = document.getElementById("explore-runs-bar");
  const lbl = document.getElementById("explore-runs-label");
  if (bar && lbl) {
    bar.style.display = runsWithGPS.length > 0 ? "flex" : "none";
    if (runsWithGPS.length > 0)
      lbl.textContent = `${runsWithGPS.length} parcours · Appuie sur un tracé pour les détails`;
  }
  if (runsWithGPS.length > 0) {
    try {
      const g = L.featureGroup(
        exploreRunLayers.filter((l) => l instanceof L.Polyline),
      );
      exploreMap.fitBounds(g.getBounds().pad(0.2), { maxZoom: 15 });
    } catch (e) {}
  }
}

function updateMapTiles() {
  if (exploreTileLayer) exploreTileLayer.setUrl(getTileUrl());
  if (explorerTileLayer) explorerTileLayer.setUrl(getTileUrl());
  refreshRunsOnMap();
  renderHexGrid();
}

// -------- ONGLET EXPLORER (HEXAGONES) --------
let explorerMap = null;
let explorerTileLayer = null;
let hexLayerGroup = null;
let explorerUserMarker = null;
let hexRefLat = null,
  hexRefLng = null;
let visitedHexCache = null; // Set de "q,r"

// Rayon du circumcercle → flat-to-flat ≈ 500m (289 * sqrt(3) ≈ 500m)
const HEX_R_M = 289;

function initExplorerMap() {
  const mapEl = document.getElementById("explorer-map");
  if (!mapEl || typeof L === "undefined") return;
  if (explorerMap) {
    setTimeout(() => explorerMap.invalidateSize(), 80);
    if (hexRefLat !== null) renderHexGrid();
    return;
  }
  explorerMap = L.map("explorer-map", {
    zoomControl: true,
    attributionControl: true,
    tap: true,
  }).setView([46.6, 2.4], 13);
  explorerTileLayer = L.tileLayer(getTileUrl(), {
    attribution: TILE_ATTR,
    subdomains: "abcd",
    maxZoom: 19,
    opacity: 0.65,
  }).addTo(explorerMap);
  hexLayerGroup = L.layerGroup().addTo(explorerMap);
  explorerMap.on("moveend zoomend", renderHexGrid);
  setTimeout(() => explorerMap.invalidateSize(), 80);
  locateExplorer(false);
}

function locateExplorer(centerMap = true) {
  if (!explorerMap || !navigator.geolocation) return;
  const btn = document.getElementById("btn-locate");
  if (btn) btn.classList.add("locating");
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      if (btn) btn.classList.remove("locating");
      const lat = pos.coords.latitude,
        lng = pos.coords.longitude;
      // On fixe le point de référence une seule fois
      if (hexRefLat === null) {
        hexRefLat = lat;
        hexRefLng = lng;
        visitedHexCache = null;
      }
      if (explorerUserMarker) explorerUserMarker.remove();
      const accent =
        getComputedStyle(document.documentElement)
          .getPropertyValue("--accent")
          .trim() || "#c8ff2e";
      explorerUserMarker = L.layerGroup([
        L.circleMarker([lat, lng], {
          radius: 14,
          fillColor: accent,
          color: accent,
          weight: 1,
          opacity: 0.2,
          fillOpacity: 0.15,
        }),
        L.circleMarker([lat, lng], {
          radius: 7,
          fillColor: accent,
          color: "#fff",
          weight: 2,
          opacity: 1,
          fillOpacity: 1,
        }),
      ]).addTo(explorerMap);
      explorerMap.setView(
        [lat, lng],
        centerMap ? 15 : Math.max(explorerMap.getZoom(), 13),
      );
      renderHexGrid();
    },
    (err) => {
      if (btn) btn.classList.remove("locating");
      if (hexRefLat === null) {
        hexRefLat = 46.6;
        hexRefLng = 2.4;
      }
      renderHexGrid();
    },
    { enableHighAccuracy: true, timeout: 10000 },
  );
}

// ---- Maths hexagonales (pointy-top, coordonnées axiales) ----
function llToM(lat, lng) {
  const R = 6371000;
  return {
    mx:
      (((lng - hexRefLng) * Math.PI) / 180) *
      R *
      Math.cos((hexRefLat * Math.PI) / 180),
    my: (((lat - hexRefLat) * Math.PI) / 180) * R,
  };
}
function mToLL(mx, my) {
  const R = 6371000;
  return [
    hexRefLat + (my / R) * (180 / Math.PI),
    hexRefLng +
      (mx / (R * Math.cos((hexRefLat * Math.PI) / 180))) * (180 / Math.PI),
  ];
}
function mToHex(mx, my) {
  const q = ((mx * Math.sqrt(3)) / 3 - my / 3) / HEX_R_M;
  const r = (my * 2) / 3 / HEX_R_M;
  return roundHex(q, r);
}
function hexToM(q, r) {
  return { mx: HEX_R_M * Math.sqrt(3) * (q + r / 2), my: HEX_R_M * 1.5 * r };
}
function roundHex(q, r) {
  const s = -q - r;
  let rq = Math.round(q),
    rr = Math.round(r),
    rs = Math.round(s);
  const dq = Math.abs(rq - q),
    dr = Math.abs(rr - r),
    ds = Math.abs(rs - s);
  if (dq > dr && dq > ds) rq = -rr - rs;
  else if (dr > ds) rr = -rq - rs;
  return { q: rq, r: rr };
}
function hexCornerLatLngs(q, r) {
  const { mx, my } = hexToM(q, r);
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30); // pointy-top
    return mToLL(mx + HEX_R_M * Math.cos(a), my + HEX_R_M * Math.sin(a));
  });
}

// Calcule les hexagones visités à partir des tracés GPS
function getVisitedHexes() {
  if (visitedHexCache) return visitedHexCache;
  visitedHexCache = new Set();
  appData.runs.forEach((run) => {
    if (!run.positions) return;
    run.positions.forEach((p) => {
      const { mx, my } = llToM(p.lat, p.lng);
      const { q, r } = mToHex(mx, my);
      visitedHexCache.add(`${q},${r}`);
    });
  });
  return visitedHexCache;
}

function renderHexGrid() {
  if (!explorerMap || hexRefLat === null) return;
  hexLayerGroup.clearLayers();

  const zoom = explorerMap.getZoom();
  const statsEl = document.getElementById("explorer-stats-label");
  if (zoom < 11) {
    if (statsEl) statsEl.textContent = "🔍 Zoome pour voir les hexagones";
    return;
  }

  const bounds = explorerMap.getBounds();
  const sw = llToM(bounds.getSouth(), bounds.getWest());
  const ne = llToM(bounds.getNorth(), bounds.getEast());

  const HEX_H = HEX_R_M * 1.5;
  const HEX_W = HEX_R_M * Math.sqrt(3);

  const minR = Math.floor(sw.my / HEX_H) - 2;
  const maxR = Math.ceil(ne.my / HEX_H) + 2;

  const visited = getVisitedHexes();
  const accent =
    getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim() || "#c8ff2e";

  let total = 0,
    visitedCount = 0;

  for (let r = minR; r <= maxR; r++) {
    const qOff = r / 2;
    const minQ = Math.floor(sw.mx / HEX_W - qOff) - 2;
    const maxQ = Math.ceil(ne.mx / HEX_W - qOff) + 2;

    for (let q = minQ; q <= maxQ; q++) {
      const { mx, my } = hexToM(q, r);
      // Filtre spatial rapide
      if (mx < sw.mx - HEX_R_M || mx > ne.mx + HEX_R_M) continue;
      if (my < sw.my - HEX_R_M || my > ne.my + HEX_R_M) continue;
      if (total >= 900) continue; // sécurité perf

      const isVisited = visited.has(`${q},${r}`);
      if (isVisited) visitedCount++;
      total++;

      L.polygon(hexCornerLatLngs(q, r), {
        fillColor: isVisited ? accent : "#777777",
        fillOpacity: isVisited ? 0.5 : 0.13,
        color: isVisited ? accent : "#555555",
        weight: isVisited ? 1.5 : 0.7,
        opacity: isVisited ? 0.9 : 0.4,
        interactive: false,
      }).addTo(hexLayerGroup);
    }
  }

  if (statsEl) {
    if (visitedCount > 0)
      statsEl.textContent = `🔷 ${visitedCount} hexagone${visitedCount > 1 ? "s" : ""} exploré${visitedCount > 1 ? "s" : ""} sur ${total} visible${total > 1 ? "s" : ""}`;
    else
      statsEl.textContent = `${total} hexagone${total > 1 ? "s" : ""} à explorer — VA COURIR ZEBI`;
  }
}

// ==================== PROFILE ====================
let pendingAvatarDataUrl = null;

function isImageSrc(str) {
  return (
    str &&
    (str.startsWith("/") || str.startsWith("http") || str.startsWith("data:"))
  );
}

function renderProfile() {
  const nameEl = document.getElementById("profile-name");
  const avatarEl = document.getElementById("profile-avatar");

  // Nom + clic pour ouvrir le modal
  if (nameEl) {
    nameEl.textContent = appData.name;
    nameEl.onclick = openProfileModal;
  }

  // Avatar + clic pour ouvrir le modal
  if (avatarEl) {
    avatarEl.onclick = openProfileModal;
    if (isImageSrc(appData.avatar)) {
      avatarEl.innerHTML = `<img src="${appData.avatar}" alt="avatar">`;
    } else {
      // Emoji ou texte
      avatarEl.textContent = appData.avatar;
    }
  }

  // Stats
  const totalRuns = appData.runs.length;
  const totalKm = appData.runs.reduce((acc, r) => acc + (r.distance || 0), 0);
  const totalMs = appData.runs.reduce((acc, r) => acc + (r.duration || 0), 0);
  const totalHours = Math.floor(totalMs / 3600000);

  const statRuns = document.getElementById("stat-runs");
  const statKm = document.getElementById("stat-km");
  const statTime = document.getElementById("stat-time");
  if (statRuns) statRuns.textContent = totalRuns;
  if (statKm) statKm.textContent = totalKm.toFixed(1);
  if (statTime) statTime.textContent = totalHours + "h";

  // Records intégrés au profil
  renderProfileRecords();
}

function renderProfileRecords() {
  renderRecordsInto(
    appData.runs,
    "profile-standard-records-list",
    "profile-best-runs-list"
  );
}

function openProfileModal() {
  pendingAvatarDataUrl = null;
  // Pré-remplir le pseudo
  document.getElementById("modal-name-input").value = appData.name;
  // Pré-remplir l'aperçu avatar
  const src = isImageSrc(appData.avatar) ? appData.avatar : DEFAULT_AVATAR;
  document.getElementById("modal-avatar-img").src = src;
  // Reset l'input file
  document.getElementById("avatar-file-input").value = "";
  // Ouvrir le modal
  document.getElementById("profile-modal-overlay").classList.add("show");
  // Focus sur l'input nom
  setTimeout(() => document.getElementById("modal-name-input").focus(), 100);
}

function closeProfileModal(event) {
  // Si c'est un clic sur l'overlay (fond) on ferme, sinon on ignore
  if (
    event &&
    event.target !== document.getElementById("profile-modal-overlay")
  )
    return;
  document.getElementById("profile-modal-overlay").classList.remove("show");
}

function previewAvatar(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    pendingAvatarDataUrl = e.target.result;
    document.getElementById("modal-avatar-img").src = pendingAvatarDataUrl;
  };
  reader.readAsDataURL(file);
}

function resetAvatar() {
  pendingAvatarDataUrl = DEFAULT_AVATAR;
  document.getElementById("modal-avatar-img").src = DEFAULT_AVATAR;
  document.getElementById("avatar-file-input").value = "";
}

async function saveProfile() {
  const btn = document.querySelector("#profile-modal-overlay .modal-btn.save");
  if (btn) { btn.disabled = true; btn.textContent = "Envoi…"; }

  const newName = document.getElementById("modal-name-input").value.trim();
  if (newName) appData.name = newName;

  if (pendingAvatarDataUrl !== null) {
    // Si c'est un base64 → upload vers Firebase Storage
    if (pendingAvatarDataUrl !== DEFAULT_AVATAR && pendingAvatarDataUrl.startsWith("data:") && storage) {
      try {
        const url = await uploadToStorage(`avatars/${currentUser.username}`, pendingAvatarDataUrl);
        appData.avatar = url;
      } catch (e) {
        console.warn("Upload avatar Storage:", e);
        appData.avatar = pendingAvatarDataUrl; // fallback base64
      }
    } else {
      appData.avatar = pendingAvatarDataUrl;
    }
  }

  saveData(appData);
  renderProfile();
  if (btn) { btn.disabled = false; btn.textContent = "Enregistrer"; }
  document.getElementById("profile-modal-overlay").classList.remove("show");
}

// ==================== SUPPRIMER COURSE ====================
let pendingDeleteIndex = null;

function askDeleteRun(idx) {
  pendingDeleteIndex = idx;
  document.getElementById("confirm-delete-overlay").classList.add("show");
}
function cancelDelete(event) {
  if (
    event &&
    event.target !== document.getElementById("confirm-delete-overlay")
  )
    return;
  pendingDeleteIndex = null;
  document.getElementById("confirm-delete-overlay").classList.remove("show");
}
function confirmDelete() {
  if (pendingDeleteIndex === null) return;
  // Libère l'objectUrl vidéo si présent
  const run = appData.runs[pendingDeleteIndex];
  if (run && run._videoObjectUrl) URL.revokeObjectURL(run._videoObjectUrl);
  appData.runs.splice(pendingDeleteIndex, 1);
  saveData(appData);
  visitedHexCache = null;
  pendingDeleteIndex = null;
  document.getElementById("confirm-delete-overlay").classList.remove("show");
  renderHistory();
  renderProfile();
  if (exploreMap) refreshRunsOnMap();
  if (explorerMap) renderHexGrid();
}

// ==================== RECORDS ====================
const STANDARD_DISTANCES = [
  { label: "100 m", sub: null, dist: 0.1 },
  { label: "200 m", sub: null, dist: 0.2 },
  { label: "400 m", sub: null, dist: 0.4 },
  { label: "1 km", sub: null, dist: 1 },
  { label: "5 km", sub: null, dist: 5 },
  { label: "10 km", sub: null, dist: 10 },
  { label: "15 km", sub: null, dist: 15 },
  { label: "20 km", sub: null, dist: 20 },
  { label: "Semi-Marathon", sub: "21,1 km", dist: 21.0975 },
  { label: "25 km", sub: null, dist: 25 },
  { label: "30 km", sub: null, dist: 30 },
  { label: "40 km", sub: null, dist: 40 },
  { label: "Marathon", sub: "42,195 km", dist: 42.195 },
  { label: "50 km", sub: null, dist: 50 },
  { label: "100 km", sub: null, dist: 100 },
];

function fmtTime(ms) {
  if (ms === null) return null;
  const s = Math.floor(ms / 1000);
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  if (h > 0)
    return `${h}h ${String(m).padStart(2, "0")}'${String(ss).padStart(2, "0")}"`;
  if (m > 0) return `${m}'${String(ss).padStart(2, "0")}"`;
  return `${ss}s`;
}

function getBestForDist(targetDist) {
  let best = null,
    bestRun = null;
  appData.runs.forEach((run) => {
    if (!run.distance || run.distance < targetDist || !run.duration) return;
    const pace = run.duration / run.distance;
    const est = pace * targetDist;
    if (best === null || est < best) {
      best = est;
      bestRun = run;
    }
  });
  return { ms: best, run: bestRun };
}

function renderRecords() {
  // Gardé pour compatibilité (plus utilisé directement depuis switchPage)
  renderRecordsInto(appData.runs, "profile-standard-records-list", "profile-best-runs-list");
}

function renderRecordsInto(runs, stdElId, bestElId) {
  const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];

  // Helper local : meilleur temps pour une distance donnée dans un tableau de runs
  function getBestForDistInRuns(targetDist, runsArr) {
    let best = null, bestRun = null;
    runsArr.forEach((run) => {
      if (!run.distance || run.distance < targetDist || !run.duration) return;
      const pace = run.duration / run.distance;
      const est = pace * targetDist;
      if (best === null || est < best) { best = est; bestRun = run; }
    });
    return { ms: best, run: bestRun };
  }

  // ---- Section 1 : distances standards ----
  const stdEl = document.getElementById(stdElId);
  if (!stdEl) return;
  let unlockedCount = 0;

  stdEl.innerHTML = STANDARD_DISTANCES.map(({ label, sub, dist }) => {
    const { ms, run } = getBestForDistInRuns(dist, runs);
    const time = ms !== null ? fmtTime(ms) : null;
    const dateStr = run
      ? (() => { const d = new Date(run.date); return `${d.getDate()} ${months[d.getMonth()]}`; })()
      : "";
    if (ms !== null) unlockedCount++;
    return `
      <div class="record-row">
        <div class="record-dist-label">${label}${sub ? `<small>${sub}</small>` : ""}</div>
        ${time
          ? `<div class="record-time-val">${time}</div><div class="record-date-lbl">${dateStr}</div>`
          : `<div class="record-time-val locked">🔒</div><div class="record-date-lbl"></div>`
        }
      </div>`;
  }).join("");

  const summary = document.createElement("div");
  summary.style.cssText = "font-size:11px;color:var(--text3);text-align:center;padding:8px 0 4px;font-weight:600;";
  summary.textContent = unlockedCount > 0
    ? `${unlockedCount} / ${STANDARD_DISTANCES.length} distances débloquées`
    : "Faut courir pour en avoir grognasse";
  stdEl.appendChild(summary);

  // ---- Section 2 : meilleurs runs par allure ----
  const bestEl = document.getElementById(bestElId);
  if (!bestEl) return;

  const validRuns = runs
    .filter((r) => r.distance > 0.5 && r.duration > 0)
    .map((r) => ({
      ...r,
      paceMs: r.duration / r.distance,
      paceStr: (() => {
        const ps = r.duration / 1000 / r.distance;
        return `${Math.floor(ps / 60)}:${String(Math.floor(ps % 60)).padStart(2, "0")}`;
      })(),
    }))
    .sort((a, b) => a.paceMs - b.paceMs)
    .slice(0, 8);

  if (validRuns.length === 0) {
    bestEl.innerHTML = runs.length === 0
      ? '<div class="empty-state"><div class="emoji">🏃</div><p>Aucune course</p></div>'
      : '<div class="empty-state"><div class="emoji">🏃</div><p>VA COURIIIIIIIR</p></div>';
    return;
  }

  const rankLabels = ["🥇", "🥈", "🥉"];
  const rankClasses = ["gold", "silver", "bronze"];

  bestEl.innerHTML = validRuns.map((r, i) => {
    const d = new Date(r.date);
    const dist = r.distance.toFixed(2);
    const dur = Math.floor(r.duration / 1000);
    const m = Math.floor(dur / 60), s = dur % 60;
    const title = r.title || `${d.getDate()} ${months[d.getMonth()]}`;
    const feel = r.feelingEmoji || "";
    const rankLabel = rankLabels[i] || `${i + 1}`;
    const rankCls = rankClasses[i] || "";
    return `
      <div class="best-run-card">
        <div class="best-run-rank ${rankCls}">${rankLabel}</div>
        <div class="best-run-info">
          <div class="best-run-pace">${r.paceStr} <span style="font-size:12px;color:var(--text2);font-family:Outfit">min/km</span></div>
          <div class="best-run-meta">${title} · ${dist} km · ${m}min ${s}s</div>
        </div>
        <div class="best-run-feeling">${feel}</div>
      </div>`;
  }).join("");
}

// ==================== NAV ====================
function switchPage(page) {
  document.querySelectorAll(".page").forEach((p) => p.classList.remove("active"));
  document.querySelectorAll(".nav-item").forEach((n) => n.classList.remove("active"));
  document.getElementById("page-" + page).classList.add("active");
  document.querySelector(`.nav-item[data-page="${page}"]`).classList.add("active");
  if (page === "warmup") renderFeed();
  if (page === "run") renderHistory();
  if (page === "profile") renderProfile();
  if (page === "explore") initExploreMap();
  if (page === "amis") renderAmis();
}

// ==================== FEED ====================
let feedMaps = []; // instances Leaflet mini-cartes à détruire lors du refresh

async function renderFeed() {
  const el = document.getElementById("feed-list");
  if (!el) return;

  const favs = appData.favorites || [];
  if (favs.length === 0) {
    el.innerHTML = '<div class="empty-state"><div class="emoji">🏃</div><p>Met az en favori<br>pour voir ses courses</p></div>';
    return;
  }

  el.innerHTML = '<div class="feed-loading">Chargement du feed…</div>';

  // Détruire les anciennes mini-cartes Leaflet
  feedMaps.forEach(m => { try { m.remove(); } catch(e){} });
  feedMaps = [];

  try {
    // Fetch tous les amis en parallèle
    const snaps = await Promise.all(favs.map(f => db.collection("users").doc(f.username).get()));

    // Construire la liste de toutes les courses avec info de l'ami
    let allEntries = [];
    snaps.forEach((snap, i) => {
      if (!snap.exists) return;
      const data = snap.data();
      const fav = favs[i];
      const runs = data.runs || [];
      runs.forEach(run => {
        allEntries.push({
          run,
          username: fav.username,
          name: data.name || fav.username,
          avatar: data.avatar || fav.avatar || DEFAULT_AVATAR,
        });
      });
    });

    if (allEntries.length === 0) {
      el.innerHTML = '<div class="empty-state"><div class="emoji">👟</div><p>Tes amis n\'ont pas encore couru c\'est des feignants</p></div>';
      return;
    }

    // Trier du plus récent au plus ancien
    allEntries.sort((a, b) => new Date(b.run.date) - new Date(a.run.date));
    _feedEntries = allEntries;

    el.innerHTML = allEntries.map((entry, idx) => buildFeedCard(entry, idx)).join("");

    // Initialiser les mini-cartes Leaflet après le rendu
    requestAnimationFrame(() => {
      allEntries.forEach((entry, idx) => {
        const positions = entry.run.positions;
        if (positions && positions.length >= 2) {
          initFeedMap(idx, positions);
        }
      });
    });

  } catch(e) {
    console.warn("Feed error:", e);
    el.innerHTML = '<div class="empty-state"><div class="emoji">😢</div><p>Erreur de chargement<br>Paye la facture SFR</p></div>';
  }
}

function buildFeedCard(entry, idx) {
  const { run, name, username, avatar } = entry;
  const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];
  const d = new Date(run.date);
  const dateStr = `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  const dur = run.duration / 1000;
  const m = Math.floor(dur / 60), s = Math.floor(dur % 60);
  const dist = run.distance || 0;
  const pace = dist > 0.01
    ? (() => { const p = dur / dist; return `${Math.floor(p/60)}:${String(Math.floor(p%60)).padStart(2,"0")}`; })()
    : "--:--";

  const avatarHtml = isImageSrc(avatar)
    ? `<img src="${avatar}" alt="avatar">`
    : `<span>${avatar}</span>`;

  const hasTrace = run.positions && run.positions.length >= 2;
  const mapHtml = hasTrace
    ? `<div class="feed-map" id="feed-map-${idx}"></div>`
    : "";

  const feedThumb = mediaThumbnail(run.media);
  const mediaHtml = feedThumb
    ? `<div class="feed-media" onclick="openFeedMedia(${idx})">
        <img src="${feedThumb}" alt="photo">
        ${run.media.type === "video" ? '<div class="hi-thumb-video-icon">▶</div>' : ""}
       </div>`
    : "";

  const titleHtml = run.title
    ? `<div class="feed-run-title">${run.title}</div>` : "";
  const descHtml = run.description
    ? `<div class="feed-run-desc">${run.description}</div>` : "";
  const feelHtml = run.feelingEmoji
    ? `<span class="feed-feeling">${run.feelingEmoji}</span>` : "";

  return `
    <div class="feed-card" data-idx="${idx}">
      <div class="feed-card-header">
        <div class="feed-avatar" onclick="openFriendOverlay('${username}')">${avatarHtml}</div>
        <div class="feed-card-meta">
          <div class="feed-card-name" onclick="openFriendOverlay('${username}')">${name}</div>
          <div class="feed-card-date">${dateStr}</div>
        </div>
      </div>
      ${titleHtml}
      ${descHtml}
      ${mapHtml}
      ${mediaHtml}
      <div class="feed-stats">
        <div class="feed-stat"><span class="feed-stat-val">${dist.toFixed(2)}</span><span class="feed-stat-lbl">km</span></div>
        <div class="feed-stat-sep"></div>
        <div class="feed-stat"><span class="feed-stat-val">${m}min ${s}s</span><span class="feed-stat-lbl">durée</span></div>
        <div class="feed-stat-sep"></div>
        <div class="feed-stat"><span class="feed-stat-val">${pace}</span><span class="feed-stat-lbl">min/km</span></div>
        ${feelHtml}
      </div>
    </div>`;
}

function initFeedMap(idx, positions) {
  const mapEl = document.getElementById(`feed-map-${idx}`);
  if (!mapEl) return;
  const map = L.map(`feed-map-${idx}`, {
    zoomControl: false,
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    boxZoom: false,
    keyboard: false,
    attributionControl: false,
  });
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { maxZoom: 18 }).addTo(map);
  const latlngs = positions.map(p => [p.lat, p.lng]);
  const poly = L.polyline(latlngs, {
    color: getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#c8ff2e",
    weight: 3,
    opacity: 0.9,
  }).addTo(map);
  L.circleMarker(latlngs[0], { radius: 5, color: "#fff", fillColor: "#22c55e", fillOpacity: 1, weight: 2 }).addTo(map);
  L.circleMarker(latlngs[latlngs.length - 1], { radius: 5, color: "#fff", fillColor: "#ef4444", fillOpacity: 1, weight: 2 }).addTo(map);
  setTimeout(() => {
    map.invalidateSize();
    map.fitBounds(poly.getBounds().pad(0.2));
  }, 50);
  feedMaps.push(map);
}

let _feedEntries = [];
function openFeedMedia(idx) {
  // Récupérer la course depuis le DOM (on relit feedEntries)
  const card = document.querySelector(`.feed-card[data-idx="${idx}"]`);
  if (!card) return;
  // Trouver la course dans allEntries via l'index — on stocke dans _feedEntries
  const entry = _feedEntries[idx];
  if (!entry || !entry.run.media) return;
  const run = entry.run;
  const viewer = document.getElementById("media-viewer");
  const content = document.getElementById("media-viewer-content");
  const info = document.getElementById("media-viewer-info");
  content.innerHTML = run.media.type === "image"
    ? `<img src="${mediaFull(run.media)}" alt="photo">`
    : `<img src="${mediaThumbnail(run.media)}" alt="aperçu vidéo" style="opacity:.7">`;
  info.textContent = run.title || new Date(run.date).toLocaleDateString("fr-FR");
  viewer.classList.add("show");
}

// ==================== AMIS ====================
let currentFriendData = null; // données de l'ami actuellement affiché dans l'overlay

function renderAmis() {
  renderFavorites();
}

async function searchFriend() {
  const input = document.getElementById("amis-search-input");
  const query = input.value.trim().toLowerCase();
  const resultEl = document.getElementById("amis-search-result");

  if (!query) {
    resultEl.innerHTML = "";
    return;
  }

  resultEl.innerHTML = `<div class="amis-loading">Recherche en cours…</div>`;

  try {
    const docSnap = await db.collection("users").doc(query).get();

    if (!docSnap.exists) {
      resultEl.innerHTML = `<div class="amis-not-found">
        <div class="emoji" style="font-size:28px">🔍</div>
        <p>Compte "<strong>${query}</strong>" introuvable</p>
      </div>`;
      return;
    }

    const data = docSnap.data();
    renderFriendCard(resultEl, query, data, false);

  } catch (e) {
    resultEl.innerHTML = `<div class="amis-not-found"><p>Erreur de connexion 😢</p></div>`;
    console.warn("searchFriend:", e);
  }
}

function renderFriendCard(container, username, data, isFav) {
  const runs = data.runs || [];
  const totalRuns = runs.length;
  const totalKm = runs.reduce((a, r) => a + (r.distance || 0), 0);
  const totalMs = runs.reduce((a, r) => a + (r.duration || 0), 0);
  const totalHours = Math.floor(totalMs / 3600000);
  const name = data.name || username;
  const avatar = data.avatar || "img/rohroh.png";
  const isFavorite = isFriendFavorite(username);

  const avatarHtml = isImageSrc(avatar)
    ? `<img src="${avatar}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`
    : `<span>${avatar}</span>`;

  container.innerHTML = `
    <div class="friend-card" onclick="openFriendOverlay('${username}')">
      <div class="friend-card-header">
        <div class="friend-card-avatar">${avatarHtml}</div>
        <div class="friend-card-info">
          <div class="friend-card-name">${name}</div>
          <div class="friend-card-handle">@${username}</div>
        </div>
        <button class="friend-card-star ${isFavorite ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite('${username}')" title="Favori">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="${isFavorite ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        </button>
      </div>
      <div class="friend-card-stats">
        <div class="friend-stat-item"><span class="friend-stat-val">${totalRuns}</span><span class="friend-stat-lbl">Courses</span></div>
        <div class="friend-stat-item"><span class="friend-stat-val">${totalKm.toFixed(1)}</span><span class="friend-stat-lbl">Km</span></div>
        <div class="friend-stat-item"><span class="friend-stat-val">${totalHours}h</span><span class="friend-stat-lbl">Temps</span></div>
      </div>
    </div>`;
}

function isFriendFavorite(username) {
  return (appData.favorites || []).some(f => f.username === username);
}

function toggleFavorite(username) {
  if (!appData.favorites) appData.favorites = [];
  const idx = appData.favorites.findIndex(f => f.username === username);
  if (idx >= 0) {
    // Retirer des favoris
    appData.favorites.splice(idx, 1);
    saveData(appData);
    renderAmis();
    // Rafraîchir la star dans l'overlay si ouvert
    if (currentFriendData && currentFriendData.username === username) updateFriendStarUI(username);
    // Rafraîchir la star dans la carte de résultat
    refreshSearchResultStar(username);
  } else {
    // Ajouter aux favoris — utiliser currentFriendData si disponible, sinon fetch
    if (currentFriendData && currentFriendData.username === username) {
      appData.favorites.push({
        username,
        name: currentFriendData.name || username,
        avatar: currentFriendData.avatar || "img/rohroh.png"
      });
      saveData(appData);
      renderAmis();
      updateFriendStarUI(username);
      refreshSearchResultStar(username);
    } else {
      db.collection("users").doc(username).get().then(snap => {
        if (!snap.exists) return;
        const d = snap.data();
        appData.favorites.push({ username, name: d.name || username, avatar: d.avatar || "img/rohroh.png" });
        saveData(appData);
        renderAmis();
        updateFriendStarUI(username);
        refreshSearchResultStar(username);
      });
    }
  }
}

function refreshSearchResultStar(username) {
  const resultEl = document.getElementById("amis-search-result");
  if (!resultEl || !resultEl.querySelector(".friend-card")) return;
  const starBtn = resultEl.querySelector(".friend-card-star");
  const starIcon = resultEl.querySelector(".friend-card-star svg");
  if (!starBtn || !starIcon) return;
  const isFav = isFriendFavorite(username);
  starBtn.classList.toggle("active", isFav);
  starIcon.setAttribute("fill", isFav ? "currentColor" : "none");
}

function renderFavorites() {
  const el = document.getElementById("amis-favorites-list");
  if (!el) return;
  const favs = appData.favorites || [];
  if (favs.length === 0) {
    el.innerHTML = `<div class="empty-state"><div class="emoji">⭐</div><p>T'as pas d'amis mskn<br><small style="color:var(--text3)">Cherche un ami et mets-le en ★</small></p></div>`;
    return;
  }
  el.innerHTML = favs.map(f => {
    const avatarHtml = isImageSrc(f.avatar)
      ? `<img src="${f.avatar}" alt="avatar" style="width:100%;height:100%;border-radius:50%;object-fit:cover">`
      : `<span>${f.avatar}</span>`;
    return `
      <div class="fav-chip" onclick="openFriendFromFav('${f.username}')">
        <div class="fav-chip-avatar">${avatarHtml}</div>
        <div class="fav-chip-info">
          <div class="fav-chip-name">${f.name}</div>
          <div class="fav-chip-handle">@${f.username}</div>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" stroke-width="1.5" style="flex-shrink:0">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      </div>`;
  }).join("");
}

async function openFriendFromFav(username) {
  const snap = await db.collection("users").doc(username).get();
  if (!snap.exists) return;
  const data = snap.data();
  openFriendOverlayWithData(username, data);
}

async function openFriendOverlay(username) {
  const snap = await db.collection("users").doc(username).get();
  if (!snap.exists) return;
  const data = snap.data();
  openFriendOverlayWithData(username, data);
}

function openFriendOverlayWithData(username, data) {
  currentFriendData = { username, ...data };

  const runs = data.runs || [];
  const totalRuns = runs.length;
  const totalKm = runs.reduce((a, r) => a + (r.distance || 0), 0);
  const totalMs = runs.reduce((a, r) => a + (r.duration || 0), 0);
  const totalHours = Math.floor(totalMs / 3600000);
  const name = data.name || username;
  const avatar = data.avatar || "img/rohroh.png";

  // Avatar
  const avatarEl = document.getElementById("friend-overlay-avatar");
  if (isImageSrc(avatar)) {
    avatarEl.innerHTML = `<img src="${avatar}" alt="avatar">`;
  } else {
    avatarEl.textContent = avatar;
  }

  document.getElementById("friend-overlay-name").textContent = name;
  document.getElementById("friend-overlay-username").textContent = "@" + username;
  document.getElementById("friend-stat-runs").textContent = totalRuns;
  document.getElementById("friend-stat-km").textContent = totalKm.toFixed(1);
  document.getElementById("friend-stat-time").textContent = totalHours + "h";

  updateFriendStarUI(username);

  // Records de l'ami
  renderRecordsInto(runs, "friend-standard-records-list", "friend-best-runs-list");

  // Historique de l'ami
  renderFriendHistory(runs);

  document.getElementById("friend-overlay").classList.add("show");
}

let _friendRunsSorted = [];

function renderFriendHistory(runs) {
  const el = document.getElementById("friend-history-list");
  if (!el) return;
  if (!runs || runs.length === 0) {
    el.innerHTML = '<div class="empty-state"><div class="emoji">👟</div><p>Aucune course enregistrée</p></div>';
    return;
  }
  const months = ["Jan","Fév","Mar","Avr","Mai","Jun","Jul","Aoû","Sep","Oct","Nov","Déc"];
  _friendRunsSorted = [...runs].sort((a, b) => new Date(b.date) - new Date(a.date));
  el.innerHTML = _friendRunsSorted.map((r, idx) => {
    const d = new Date(r.date);
    const dur = r.duration / 1000;
    const m = Math.floor(dur / 60);
    const s = Math.floor(dur % 60);
    const dist = r.distance || 0;
    const pace = dist > 0.01
      ? (() => { const p = dur / dist; return `${Math.floor(p / 60)}:${String(Math.floor(p % 60)).padStart(2, "0")}`; })()
      : "--:--";
    const feelingBadge = r.feelingEmoji
      ? `<span style="font-size:15px;margin-left:5px">${r.feelingEmoji}</span>` : "";
    const titleLine = r.title
      ? `<div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:1px">${r.title}</div>` : "";
    const descLine = r.description
      ? `<div style="font-size:10px;color:var(--text3);margin-top:1px;line-height:1.3">${r.description}</div>` : "";
    let thumbHtml = "";
    const friendThumb = mediaThumbnail(r.media);
    if (friendThumb) {
      const isVid = r.media.type === "video";
      thumbHtml = `
        <div class="hi-thumb-wrap" onclick="event.stopPropagation(); openFriendMediaViewer(${idx})">
          <img src="${friendThumb}" alt="media">
          ${isVid ? '<div class="hi-thumb-video-icon">▶</div>' : ""}
        </div>`;
    }
    const clickAttr = friendThumb ? `onclick="openFriendMediaViewer(${idx})"` : "";
    return `
      <div class="history-item" ${clickAttr}>
        <div class="hi-date"><div class="hi-day">${d.getDate()}</div><div class="hi-month">${months[d.getMonth()]}</div></div>
        <div class="hi-info">${titleLine}<div class="hi-dist">${dist.toFixed(2)} km${feelingBadge}</div><div class="hi-meta">${m}min ${s}s</div>${descLine}</div>
        <div class="hi-pace">${pace}<br><span style="font-size:9px;color:var(--text3)">min/km</span></div>
        ${thumbHtml}
      </div>`;
  }).join("");
}

function openFriendMediaViewer(idx) {
  const run = _friendRunsSorted[idx];
  if (!run || !run.media) return;
  const viewer = document.getElementById("media-viewer");
  const content = document.getElementById("media-viewer-content");
  const info = document.getElementById("media-viewer-info");
  content.innerHTML = "";
  if (run.media.type === "image") {
    content.innerHTML = `<img src="${mediaFull(run.media)}" alt="photo">`;
  } else {
    // Vidéo : objectUrl pas disponible pour les amis, on montre la miniature
    content.innerHTML = `<img src="${mediaThumbnail(run.media)}" alt="aperçu vidéo" style="opacity:.7">`;
  }
  info.textContent = run.title || new Date(run.date).toLocaleDateString("fr-FR");
  viewer.classList.add("show");
}

function closeFriendOverlay() {
  document.getElementById("friend-overlay").classList.remove("show");
  currentFriendData = null;
}

function updateFriendStarUI(username) {
  const btn = document.getElementById("friend-star-btn");
  const icon = document.getElementById("friend-star-icon");
  if (!btn || !icon) return;
  const isFav = isFriendFavorite(username);
  btn.classList.toggle("active", isFav);
  icon.setAttribute("fill", isFav ? "currentColor" : "none");
}

function toggleFavoriteOverlay() {
  if (!currentFriendData) return;
  toggleFavorite(currentFriendData.username);
  updateFriendStarUI(currentFriendData.username);
}

// ==================== INIT ====================
firebase.initializeApp(FIREBASE_CONFIG);
db = firebase.firestore();
storage = firebase.storage();
checkSession();

// Upload un dataUrl vers Firebase Storage, retourne l'URL publique
async function uploadToStorage(path, dataUrl) {
  const ref = storage.ref(path);
  await ref.putString(dataUrl, "data_url");
  return await ref.getDownloadURL();
}

// Retourne la miniature affichable (URL Storage ou base64 legacy)
function mediaThumbnail(media) {
  if (!media) return null;
  return media.thumbnailUrl || media.thumbnail || null;
}

// Retourne l'URL complète pour le viewer (URL Storage ou base64 legacy)
function mediaFull(media) {
  if (!media) return null;
  return media.fullUrl || media.thumbnailUrl || media.fullData || media.thumbnail || null;
}