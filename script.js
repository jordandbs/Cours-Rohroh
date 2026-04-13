// ==================== DATA ====================
const programs = {
    'warmup-express': {
        exercises: [
            { name: 'Rotation des chevilles', detail: '10 rotations par pied', duration: 30 },
            { name: 'Montées de genoux sur place', detail: '20 répétitions', duration: 40 },
            { name: 'Balancements de jambes', detail: '10 par jambe, avant/arrière', duration: 40 },
            { name: 'Rotation du bassin', detail: '10 cercles dans chaque sens', duration: 30 },
            { name: 'Talons-fesses sur place', detail: '20 répétitions', duration: 40 },
        ]
    },
    'warmup-full': {
        exercises: [
            { name: 'Rotation des chevilles', detail: '10 par pied', duration: 30 },
            { name: 'Flexions de genoux', detail: '15 répétitions', duration: 40 },
            { name: 'Rotation du bassin', detail: '10 par sens', duration: 30 },
            { name: 'Fentes avant dynamiques', detail: '8 par jambe', duration: 60 },
            { name: 'Rotation des bras', detail: '10 grands cercles', duration: 30 },
            { name: 'Montées de genoux', detail: '30 répétitions', duration: 50 },
            { name: 'Pas chassés', detail: '10 mètres × 4', duration: 60 },
            { name: 'Accélérations progressives', detail: '3 × 20 mètres', duration: 60 },
        ]
    },
    'warmup-intense': {
        exercises: [
            { name: 'Rotation chevilles + poignets', detail: '10 par sens', duration: 30 },
            { name: 'Flexions de genoux profondes', detail: '15 reps', duration: 40 },
            { name: 'Fentes latérales', detail: '8 par côté', duration: 50 },
            { name: 'Fentes avant + rotation tronc', detail: '8 par jambe', duration: 60 },
            { name: 'Montées de genoux dynamiques', detail: '20m × 2', duration: 50 },
            { name: 'Talons-fesses rapides', detail: '20m × 2', duration: 50 },
            { name: 'Pas chassés', detail: '20m × 2 chaque côté', duration: 60 },
            { name: 'Skipping (griffé)', detail: '20m × 2', duration: 50 },
            { name: 'Jambes tendues', detail: '20m × 2', duration: 50 },
            { name: 'Accélérations 50%', detail: '30m × 2', duration: 50 },
            { name: 'Accélérations 80%', detail: '30m × 2', duration: 50 },
            { name: 'Sprint départ arrêté', detail: '20m × 2', duration: 40 },
        ]
    },
    'stretch-quick': {
        exercises: [
            { name: 'Quadriceps debout', detail: '20s par jambe – tire le talon aux fesses', duration: 40 },
            { name: 'Ischio-jambiers', detail: '20s par jambe – pied sur un support', duration: 40 },
            { name: 'Mollets au mur', detail: '20s par jambe – mains au mur, talon au sol', duration: 40 },
            { name: 'Hanches (pigeon debout)', detail: '20s par côté', duration: 40 },
            { name: 'Adducteurs', detail: '20s – fente latérale douce', duration: 30 },
            { name: 'Dos + épaules', detail: '20s – bras croisé devant la poitrine', duration: 30 },
        ]
    },
    'stretch-full': {
        exercises: [
            { name: 'Quadriceps debout', detail: '30s par jambe', duration: 60 },
            { name: 'Ischio-jambiers assis', detail: '30s par jambe – jambe tendue', duration: 60 },
            { name: 'Mollets marche (gastrocnémien)', detail: '30s par jambe', duration: 60 },
            { name: 'Soléaire (genou plié)', detail: '25s par jambe', duration: 50 },
            { name: 'Psoas-iliaque (fente basse)', detail: '30s par côté', duration: 60 },
            { name: 'Piriforme (figure 4)', detail: '30s par côté', duration: 60 },
            { name: 'Adducteurs papillon', detail: '30s', duration: 30 },
            { name: 'Bandelette IT (croisé debout)', detail: '25s par côté', duration: 50 },
            { name: 'Fessiers (genou poitrine)', detail: '25s par côté', duration: 50 },
            { name: 'Torsion dorsale au sol', detail: '30s par côté', duration: 60 },
        ]
    },
    'stretch-deep': {
        exercises: [
            { name: 'Chat-vache (dos)', detail: '10 cycles lents', duration: 60 },
            { name: 'Chien tête en bas', detail: '30s – pédale pieds', duration: 40 },
            { name: 'Fente basse + rotation', detail: '30s par côté', duration: 60 },
            { name: 'Pigeon au sol', detail: '45s par côté', duration: 90 },
            { name: 'Grenouille (adducteurs)', detail: '45s', duration: 45 },
            { name: 'Quadriceps allongé', detail: '30s par jambe', duration: 60 },
            { name: 'Ischio-jambiers PNF', detail: '3 × 10s contraction/relâche', duration: 60 },
            { name: 'Écart latéral progressif', detail: '45s', duration: 45 },
            { name: 'Psoas profond (fente + bras levés)', detail: '30s par côté', duration: 60 },
            { name: 'Torsion assise', detail: '30s par côté', duration: 60 },
            { name: 'Pec + épaule au mur', detail: '25s par bras', duration: 50 },
            { name: 'Flexion avant assise', detail: '45s', duration: 45 },
            { name: 'Happy baby', detail: '30s', duration: 30 },
            { name: 'Savasana (relaxation)', detail: '60s – respire profondément', duration: 60 },
        ]
    },
};

// ==================== STORAGE ====================
const STORAGE_KEY = 'coursrohroh_data';
function loadData() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
            runs: [], name: 'Romanette', theme: 'dark', avatar: '/img/iconmaqprint.webp'
        };
    } catch {
        return { runs: [], name: 'Romanette', theme: 'dark', avatar: '/img/iconmaqprint.webp' };
    }
}
function saveData(d) { localStorage.setItem(STORAGE_KEY, JSON.stringify(d)); }
let appData = loadData();

// ==================== THEMES ====================
function setTheme(id) {
    document.documentElement.setAttribute('data-theme', id);
    appData.theme = id;
    saveData(appData);
    document.querySelectorAll('.theme-opt').forEach(el => {
        el.classList.toggle('selected', el.dataset.themeId === id);
    });
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
    document.getElementById('detail-title').textContent = prog.title || '';
    document.getElementById('detail-desc').textContent = prog.desc || '';
    renderExercises(prog.exercises);
    document.getElementById('detail-overlay').classList.add('show');
}
function closeDetail() {
    document.getElementById('detail-overlay').classList.remove('show');
    currentProgram = null;
}
function renderExercises(exercises) {
    document.getElementById('detail-exercises').innerHTML = exercises.map((ex, i) => `
    <div class="exercise-item ${completedExercises.has(i) ? 'done' : ''}" onclick="startExercise(${i})">
      <div class="ex-check">${completedExercises.has(i) ? '✓' : ''}</div>
      <div class="ex-info"><div class="ex-name">${ex.name}</div><div class="ex-detail">${ex.detail}</div></div>
      <div class="ex-timer">${ex.duration}s</div>
    </div>`).join('');
}

// ==================== EXERCISE TIMER ====================
let exTimerInterval = null, exTimeLeft = 0, exTotalTime = 0, currentExIndex = 0;

function startExercise(idx) {
    const prog = programs[currentProgram];
    if (!prog) return;
    currentExIndex = idx;
    const ex = prog.exercises[idx];
    exTimeLeft = ex.duration; exTotalTime = ex.duration;
    document.getElementById('timer-name').textContent = ex.name;
    document.getElementById('timer-count').textContent = exTimeLeft;
    document.getElementById('timer-bar').style.width = '100%';
    document.getElementById('timer-overlay').classList.add('show');
    clearInterval(exTimerInterval);
    exTimerInterval = setInterval(() => {
        exTimeLeft--;
        document.getElementById('timer-count').textContent = Math.max(0, exTimeLeft);
        document.getElementById('timer-bar').style.width = ((exTimeLeft / exTotalTime) * 100) + '%';
        if (exTimeLeft <= 0) completeExercise();
    }, 1000);
}
function completeExercise() {
    clearInterval(exTimerInterval);
    completedExercises.add(currentExIndex);
    const prog = programs[currentProgram];
    if (currentExIndex < prog.exercises.length - 1) setTimeout(() => startExercise(currentExIndex + 1), 400);
    else document.getElementById('timer-overlay').classList.remove('show');
    renderExercises(prog.exercises);
}
function stopExTimer() { clearInterval(exTimerInterval); document.getElementById('timer-overlay').classList.remove('show'); }
function skipExTimer() { completeExercise(); }

// ==================== RUN TRACKER ====================
let runState = 'idle', runStart = 0, runElapsed = 0, runInterval = null, watchId = null, runPositions = [], totalDist = 0;

function toggleRun() { if (runState === 'idle') startRun(); else if (runState === 'running') pauseRun(); else resumeRun(); }
function startRun() { runState = 'running'; runStart = Date.now(); runElapsed = 0; totalDist = 0; runPositions = []; updateRunUI(); runInterval = setInterval(tickRun, 100); startGPS(); }
function pauseRun() { runState = 'paused'; runElapsed += Date.now() - runStart; clearInterval(runInterval); updateRunUI(); }
function resumeRun() { runState = 'running'; runStart = Date.now(); runInterval = setInterval(tickRun, 100); updateRunUI(); }
function resetRun() {
    if (runState === 'running' || runState === 'paused') {
        const elapsed = runState === 'running' ? runElapsed + (Date.now() - runStart) : runElapsed;
        if (elapsed > 5000) { appData.runs.unshift({ date: new Date().toISOString(), duration: elapsed, distance: totalDist }); saveData(appData); }
    }
    runState = 'idle'; clearInterval(runInterval); stopGPS(); runElapsed = 0; totalDist = 0;
    document.getElementById('run-timer').innerHTML = '00:00<span class="ms">:00</span>';
    document.getElementById('run-dist').textContent = '0.00';
    document.getElementById('run-pace').textContent = '--:--';
    document.getElementById('run-cal').textContent = '0';
    updateRunUI(); renderHistory();
}
function tickRun() {
    const total = runElapsed + (Date.now() - runStart), s = Math.floor(total / 1000), m = Math.floor(s / 60), sec = s % 60, ms = Math.floor((total % 1000) / 10);
    document.getElementById('run-timer').innerHTML = `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}<span class="ms">:${String(ms).padStart(2, '0')}</span>`;
    document.getElementById('run-cal').textContent = Math.floor(s / 6);
    if (totalDist > 0.01) { const pS = (total / 1000) / totalDist; document.getElementById('run-pace').textContent = `${Math.floor(pS / 60)}:${String(Math.floor(pS % 60)).padStart(2, '0')}`; }
}
function updateRunUI() {
    const btn = document.getElementById('btn-run'), reset = document.getElementById('btn-reset');
    if (runState === 'idle') { btn.className = 'run-btn start'; btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>'; reset.style.visibility = 'hidden'; }
    else if (runState === 'running') { btn.className = 'run-btn pause pulsing'; btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="5" height="18" rx="1"/><rect x="14" y="3" width="5" height="18" rx="1"/></svg>'; reset.style.visibility = 'visible'; }
    else { btn.className = 'run-btn start'; btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>'; reset.style.visibility = 'visible'; }
}
function startGPS() {
    if (!navigator.geolocation) return;
    watchId = navigator.geolocation.watchPosition(pos => {
        const p = { lat: pos.coords.latitude, lng: pos.coords.longitude, time: Date.now() };
        if (runPositions.length > 0) {
            const last = runPositions[runPositions.length - 1];
            const d = haversine(last.lat, last.lng, p.lat, p.lng);
            if (d > 0.003) { totalDist += d; document.getElementById('run-dist').textContent = totalDist.toFixed(2); runPositions.push(p); }
        } else { runPositions.push(p); }
    }, null, { enableHighAccuracy: true, maximumAge: 2000 });
}
function stopGPS() { if (watchId !== null) navigator.geolocation.clearWatch(watchId); watchId = null; }
function haversine(lat1, lon1, lat2, lon2) {
    const R = 6371, dLat = (lat2 - lat1) * Math.PI / 180, dLon = (lon2 - lon1) * Math.PI / 180;
    const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2;
    return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// ==================== HISTORY ====================
function renderHistory() {
    const el = document.getElementById('history-list');
    if (appData.runs.length === 0) {
        el.innerHTML = '<div class="empty-state"><div class="emoji">👟</div><p>Aucune course enregistrée.<br>Lance ta première course !</p></div>';
        renderWeekChart(); return;
    }
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    el.innerHTML = appData.runs.slice(0, 20).map(r => {
        const d = new Date(r.date); const dur = r.duration / 1000;
        const m = Math.floor(dur / 60); const s = Math.floor(dur % 60);
        const dist = r.distance || 0;
        const pace = dist > 0.01 ? (() => { const p = dur / dist; return `${Math.floor(p / 60)}:${String(Math.floor(p % 60)).padStart(2, '0')}`; })() : '--:--';
        return `<div class="history-item"><div class="hi-date"><div class="hi-day">${d.getDate()}</div><div class="hi-month">${months[d.getMonth()]}</div></div><div class="hi-info"><div class="hi-dist">${dist.toFixed(2)} km</div><div class="hi-meta">${m}min ${s}s</div></div><div class="hi-pace">${pace}<br><span style="font-size:9px;color:var(--text3)">min/km</span></div></div>`;
    }).join('');
    renderWeekChart();
}
function renderWeekChart() {
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const now = new Date(); const ws = new Date(now);
    ws.setDate(now.getDate() - now.getDay() + (now.getDay() === 0 ? -6 : 1)); ws.setHours(0, 0, 0, 0);
    const dk = new Array(7).fill(0);
    appData.runs.forEach(r => { const rd = new Date(r.date); if (rd >= ws) { let di = rd.getDay() - 1; if (di < 0) di = 6; dk[di] += (r.distance || 0); } });
    const max = Math.max(...dk, 1);
    document.getElementById('week-chart').innerHTML = days.map((d, i) => {
        const h = Math.max(4, (dk[i] / max) * 70);
        return `<div class="week-bar-wrap"><div class="week-bar ${dk[i] > 0 ? 'has-data' : ''}" style="height:${h}px"></div><div class="week-day">${d}</div></div>`;
    }).join('');
}

// ==================== EXPLORE MAP ====================

// ==================== PROFILE ====================
const DEFAULT_AVATAR = '/img/iconmaqprint.webp';
let pendingAvatarDataUrl = null;

function isImageSrc(str) {
    return str && (str.startsWith('/') || str.startsWith('http') || str.startsWith('data:'));
}

function renderProfile() {
    const nameEl = document.getElementById('profile-name');
    const avatarEl = document.getElementById('profile-avatar');

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

    const statRuns = document.getElementById('stat-runs');
    const statKm = document.getElementById('stat-km');
    const statTime = document.getElementById('stat-time');
    if (statRuns) statRuns.textContent = totalRuns;
    if (statKm) statKm.textContent = totalKm.toFixed(1);
    if (statTime) statTime.textContent = totalHours + 'h';
}

function openProfileModal() {
    pendingAvatarDataUrl = null;
    // Pré-remplir le pseudo
    document.getElementById('modal-name-input').value = appData.name;
    // Pré-remplir l'aperçu avatar
    const src = isImageSrc(appData.avatar) ? appData.avatar : DEFAULT_AVATAR;
    document.getElementById('modal-avatar-img').src = src;
    // Reset l'input file
    document.getElementById('avatar-file-input').value = '';
    // Ouvrir le modal
    document.getElementById('profile-modal-overlay').classList.add('show');
    // Focus sur l'input nom
    setTimeout(() => document.getElementById('modal-name-input').focus(), 100);
}

function closeProfileModal(event) {
    // Si c'est un clic sur l'overlay (fond) on ferme, sinon on ignore
    if (event && event.target !== document.getElementById('profile-modal-overlay')) return;
    document.getElementById('profile-modal-overlay').classList.remove('show');
}

function previewAvatar(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        pendingAvatarDataUrl = e.target.result;
        document.getElementById('modal-avatar-img').src = pendingAvatarDataUrl;
    };
    reader.readAsDataURL(file);
}

function resetAvatar() {
    pendingAvatarDataUrl = DEFAULT_AVATAR;
    document.getElementById('modal-avatar-img').src = DEFAULT_AVATAR;
    document.getElementById('avatar-file-input').value = '';
}

function saveProfile() {
    const newName = document.getElementById('modal-name-input').value.trim();
    if (newName) appData.name = newName;
    if (pendingAvatarDataUrl !== null) appData.avatar = pendingAvatarDataUrl;
    saveData(appData);
    renderProfile();
    document.getElementById('profile-modal-overlay').classList.remove('show');
}

// ==================== NAV ====================
function switchPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    document.querySelector(`.nav-item[data-page="${page}"]`).classList.add('active');
    if (page === 'run') renderHistory();
    if (page === 'profile') renderProfile();
}

// ==================== INIT ====================
setTheme(appData.theme || 'dark');
renderHistory();
renderProfile();