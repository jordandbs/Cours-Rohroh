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
    const btn = document.getElementById('btn-run');
    const reset = document.getElementById('btn-reset');
    const finish = document.getElementById('btn-finish');
    if (runState === 'idle') {
        btn.className = 'run-btn start';
        btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>';
        reset.style.visibility = 'hidden';
        finish.style.visibility = 'hidden';
    } else if (runState === 'running') {
        btn.className = 'run-btn pause pulsing';
        btn.innerHTML = '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="5" height="18" rx="1"/><rect x="14" y="3" width="5" height="18" rx="1"/></svg>';
        reset.style.visibility = 'visible';
        finish.style.visibility = 'hidden';
    } else {
        // paused
        btn.className = 'run-btn start';
        btn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="6,3 20,12 6,21"/></svg>';
        reset.style.visibility = 'visible';
        finish.style.visibility = 'visible';
    }
}
function setGPSStatus(status) {
    // status: 'searching' | 'ok' | 'error' | 'off'
    const distEl = document.getElementById('run-dist');
    if (!distEl) return;
    const icons = { searching: '📡', ok: '', error: '📵', off: '' };
    if (status === 'searching') distEl.style.opacity = '0.5';
    else distEl.style.opacity = '1';
}

function startGPS() {
    if (!navigator.geolocation) {
        setGPSStatus('error');
        return;
    }
    setGPSStatus('searching');
    watchId = navigator.geolocation.watchPosition(
        pos => {
            setGPSStatus('ok');
            const p = { lat: pos.coords.latitude, lng: pos.coords.longitude, time: Date.now() };
            if (runPositions.length > 0) {
                const last = runPositions[runPositions.length - 1];
                const d = haversine(last.lat, last.lng, p.lat, p.lng);
                // Seuil de 2m pour éviter le bruit GPS, mais on accepte quand même
                if (d > 0.002) {
                    totalDist += d;
                    document.getElementById('run-dist').textContent = totalDist.toFixed(2);
                    runPositions.push(p);
                }
            } else {
                runPositions.push(p);
            }
        },
        err => {
            console.warn('GPS error:', err.code, err.message);
            setGPSStatus('error');
            // Codes : 1=PERMISSION_DENIED, 2=UNAVAILABLE, 3=TIMEOUT
        },
        { enableHighAccuracy: true, maximumAge: 1000, timeout: 15000 }
    );
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
        const feelingBadge = r.feelingEmoji ? `<span style="font-size:15px;margin-left:5px">${r.feelingEmoji}</span>` : '';
        const titleLine = r.title ? `<div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:1px">${r.title}</div>` : '';
        const descLine  = r.description ? `<div style="font-size:10px;color:var(--text3);margin-top:1px;line-height:1.3">${r.description}</div>` : '';
        return `<div class="history-item"><div class="hi-date"><div class="hi-day">${d.getDate()}</div><div class="hi-month">${months[d.getMonth()]}</div></div><div class="hi-info">${titleLine}<div class="hi-dist">${dist.toFixed(2)} km${feelingBadge}</div><div class="hi-meta">${m}min ${s}s</div>${descLine}</div><div class="hi-pace">${pace}<br><span style="font-size:9px;color:var(--text3)">min/km</span></div></div>`;
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

// ==================== FINISH MODAL ====================
let selectedFeeling = null;
let finishRunData = null;

function openFinishModal() {
    // Pause si en cours
    if (runState === 'running') pauseRun();

    // Capture des données
    const elapsed = runElapsed;
    const s = Math.floor(elapsed / 1000);
    const m = Math.floor(s / 60);
    const sec = s % 60;

    finishRunData = {
        elapsed,
        dist: totalDist,
        positions: [...runPositions],
        date: new Date().toISOString()
    };

    // Affiche les stats
    document.getElementById('fm-dist').textContent = totalDist.toFixed(2);
    document.getElementById('fm-time').textContent = `${m}:${String(sec).padStart(2, '0')}`;
    if (totalDist > 0.01) {
        const pS = (elapsed / 1000) / totalDist;
        document.getElementById('fm-pace').textContent = `${Math.floor(pS / 60)}:${String(Math.floor(pS % 60)).padStart(2, '0')}`;
    } else {
        document.getElementById('fm-pace').textContent = '--:--';
    }

    // Reset champs texte
    document.getElementById('fm-run-title').value = '';
    document.getElementById('fm-run-desc').value = '';

    // Reset ressenti
    selectedFeeling = null;
    document.querySelectorAll('.feeling-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('btn-save-run').disabled = true;

    // Dessine le tracé (avec délai pour que le DOM soit visible)
    document.getElementById('finish-overlay').classList.add('show');
    setTimeout(() => drawRoute(runPositions), 50);
}

function closeFinishModal() {
    document.getElementById('finish-overlay').classList.remove('show');
}

function selectFeeling(idx) {
    selectedFeeling = idx;
    document.querySelectorAll('.feeling-btn').forEach((b, i) => b.classList.toggle('selected', i === idx));
    document.getElementById('btn-save-run').disabled = false;
}

function saveFinishedRun() {
    if (selectedFeeling === null || !finishRunData) return;
    const feelings   = ['😵', '😤', '😊', '😁', '🚀'];
    const feelNames  = ['OSKUR', 'Maintenant ptite ruby', 'Ca vaaaa', 'Tranquillos', 'EZ'];

    // Allège les positions GPS pour le stockage
    const pts = finishRunData.positions;
    const step = pts.length > 120 ? Math.ceil(pts.length / 120) : 1;
    const savedPositions = pts.filter((_, i) => i % step === 0);

    const runTitle = document.getElementById('fm-run-title').value.trim();
    const runDesc  = document.getElementById('fm-run-desc').value.trim();

    appData.runs.unshift({
        date:          finishRunData.date,
        duration:      finishRunData.elapsed,
        distance:      finishRunData.dist,
        title:         runTitle || null,
        description:   runDesc  || null,
        feeling:       selectedFeeling,
        feelingEmoji:  feelings[selectedFeeling],
        feelingName:   feelNames[selectedFeeling],
        positions:     savedPositions
    });
    saveData(appData);
    visitedHexCache = null; // force recalcul des hexagones visités

    // Reset complet
    closeFinishModal();
    runState = 'idle';
    clearInterval(runInterval);
    stopGPS();
    runElapsed = 0; totalDist = 0; runPositions = [];
    document.getElementById('run-timer').innerHTML = '00:00<span class="ms">:00</span>';
    document.getElementById('run-dist').textContent = '0.00';
    document.getElementById('run-pace').textContent = '--:--';
    document.getElementById('run-cal').textContent = '0';
    updateRunUI();
    renderHistory();
}

function drawRoute(positions) {
    const canvas  = document.getElementById('finish-route-canvas');
    const emptyEl = document.getElementById('finish-map-empty');

    if (!positions || positions.length < 2) {
        canvas.style.display = 'none';
        emptyEl.style.display = 'flex';
        return;
    }
    canvas.style.display = 'block';
    emptyEl.style.display = 'none';

    // Dimensions réelles du conteneur
    const wrap = canvas.parentElement;
    const W = wrap.offsetWidth  || 300;
    const H = wrap.offsetHeight || 210;
    canvas.width  = W;
    canvas.height = H;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, W, H);

    // Couleur accent depuis les variables CSS
    const accentColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent').trim() || '#c8ff2e';
    const bgColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--surface').trim() || '#13131a';

    // Fond
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, W, H);

    const lats = positions.map(p => p.lat);
    const lngs = positions.map(p => p.lng);
    const minLat = Math.min(...lats), maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs), maxLng = Math.max(...lngs);
    const latRange = maxLat - minLat || 0.0001;
    const lngRange = maxLng - minLng || 0.0001;

    const pad = 32;
    const w = W - pad * 2;
    const h = H - pad * 2;

    const project = p => ({
        x: (p.lng - minLng) / lngRange * w + pad,
        y: (1 - (p.lat - minLat) / latRange) * h + pad
    });

    // Tracé avec dégradé
    const grad = ctx.createLinearGradient(pad, pad, pad + w, pad + h);
    grad.addColorStop(0, accentColor + '88');
    grad.addColorStop(1, accentColor);

    ctx.beginPath();
    const p0 = project(positions[0]);
    ctx.moveTo(p0.x, p0.y);
    for (let i = 1; i < positions.length; i++) {
        const pt = project(positions[i]);
        ctx.lineTo(pt.x, pt.y);
    }
    ctx.strokeStyle = grad;
    ctx.lineWidth   = 3.5;
    ctx.lineCap     = 'round';
    ctx.lineJoin    = 'round';
    ctx.stroke();

    // Point départ (vert)
    const sp = project(positions[0]);
    ctx.beginPath();
    ctx.arc(sp.x, sp.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#4cff72';
    ctx.fill();

    // Point arrivée (rouge)
    const ep = project(positions[positions.length - 1]);
    ctx.beginPath();
    ctx.arc(ep.x, ep.y, 6, 0, Math.PI * 2);
    ctx.fillStyle = '#ff4757';
    ctx.fill();
}

// ==================== EXPLORE MAP ====================
const TILE_DARK  = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
const TILE_LIGHT = 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
const TILE_ATTR  = '© <a href="https://openstreetmap.org">OpenStreetMap</a> © <a href="https://carto.com">CARTO</a>';
const LIGHT_THEMES = ['light', 'pastel'];

function getTileUrl() {
    return LIGHT_THEMES.includes(appData.theme || 'dark') ? TILE_LIGHT : TILE_DARK;
}

// --- Onglets ---
let currentExploreTab = 'trace';

function switchExploreTab(tab) {
    currentExploreTab = tab;
    document.querySelectorAll('.explore-tab').forEach(t =>
        t.classList.toggle('active', t.dataset.tab === tab));
    document.querySelectorAll('.explore-tab-content').forEach(c =>
        c.classList.toggle('active', c.id === `tab-content-${tab}`));
    if (tab === 'trace'    && exploreMap)   setTimeout(() => exploreMap.invalidateSize(), 80);
    if (tab === 'explorer') initExplorerMap();
}

function locateActiveMap() {
    if (currentExploreTab === 'trace') locateUser(false);
    else locateExplorer(false);
}

// -------- ONGLET TRACÉ --------
let exploreMap       = null;
let exploreTileLayer = null;
let exploreRunLayers = [];
let exploreUserMarker = null;

function initExploreMap() {
    const mapEl = document.getElementById('explore-map');
    if (!mapEl || typeof L === 'undefined') return;
    if (exploreMap) {
        setTimeout(() => exploreMap.invalidateSize(), 80);
        refreshRunsOnMap();
        return;
    }
    exploreMap = L.map('explore-map', { zoomControl: true, attributionControl: true, tap: true })
        .setView([46.6, 2.4], 5);
    exploreTileLayer = L.tileLayer(getTileUrl(), { attribution: TILE_ATTR, subdomains: 'abcd', maxZoom: 19 })
        .addTo(exploreMap);
    setTimeout(() => exploreMap.invalidateSize(), 80);
    refreshRunsOnMap();
    locateUser(true);
}

function locateUser(silent = false) {
    if (!exploreMap || !navigator.geolocation) return;
    const btn = document.getElementById('btn-locate');
    if (btn) btn.classList.add('locating');
    navigator.geolocation.getCurrentPosition(pos => {
        if (btn) btn.classList.remove('locating');
        const ll = [pos.coords.latitude, pos.coords.longitude];
        if (exploreUserMarker) exploreUserMarker.remove();
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c8ff2e';
        exploreUserMarker = L.layerGroup([
            L.circleMarker(ll, { radius: 14, fillColor: accent, color: accent, weight: 1, opacity: 0.22, fillOpacity: 0.18 }),
            L.circleMarker(ll, { radius: 7,  fillColor: accent, color: '#fff',   weight: 2, opacity: 1,    fillOpacity: 1    })
        ]).addTo(exploreMap);
        if (!silent) exploreMap.setView(ll, 15);
    }, err => {
        if (btn) btn.classList.remove('locating');
    }, { enableHighAccuracy: true, timeout: 10000 });
}

function refreshRunsOnMap() {
    if (!exploreMap) return;
    exploreRunLayers.forEach(l => l.remove());
    exploreRunLayers = [];
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c8ff2e';
    const runsWithGPS = appData.runs.filter(r => r.positions && r.positions.length >= 2);
    const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
    runsWithGPS.forEach(run => {
        const latlngs = run.positions.map(p => [p.lat, p.lng]);
        const poly = L.polyline(latlngs, { color: accent, weight: 4, opacity: 0.85, lineCap: 'round', lineJoin: 'round' }).addTo(exploreMap);
        const d = new Date(run.date);
        const dist = (run.distance || 0).toFixed(2);
        const dur = Math.floor((run.duration || 0) / 1000);
        const label = run.title || `Course du ${d.getDate()} ${months[d.getMonth()]}`;
        const feel  = run.feelingEmoji ? `&nbsp;${run.feelingEmoji}` : '';
        poly.bindPopup(
            `<div style="font-weight:700;font-size:14px;margin-bottom:4px">${label}${feel}</div>` +
            `<div style="opacity:.7">${dist} km · ${Math.floor(dur/60)}min ${dur%60}s</div>`,
            { maxWidth: 200 }
        );
        const s = L.circleMarker(latlngs[0],                   { radius:5, fillColor:'#4cff72', color:'#fff', weight:1.5, fillOpacity:1 }).addTo(exploreMap);
        const e = L.circleMarker(latlngs[latlngs.length - 1],  { radius:5, fillColor:'#ff4757', color:'#fff', weight:1.5, fillOpacity:1 }).addTo(exploreMap);
        exploreRunLayers.push(poly, s, e);
    });
    const bar = document.getElementById('explore-runs-bar');
    const lbl = document.getElementById('explore-runs-label');
    if (bar && lbl) {
        bar.style.display = runsWithGPS.length > 0 ? 'flex' : 'none';
        if (runsWithGPS.length > 0)
            lbl.textContent = `${runsWithGPS.length} parcours · Appuie sur un tracé pour les détails`;
    }
    if (runsWithGPS.length > 0) {
        try {
            const g = L.featureGroup(exploreRunLayers.filter(l => l instanceof L.Polyline));
            exploreMap.fitBounds(g.getBounds().pad(0.2), { maxZoom: 15 });
        } catch(e) {}
    }
}

function updateMapTiles() {
    if (exploreTileLayer)  exploreTileLayer.setUrl(getTileUrl());
    if (explorerTileLayer) explorerTileLayer.setUrl(getTileUrl());
    refreshRunsOnMap();
    renderHexGrid();
}

// -------- ONGLET EXPLORER (HEXAGONES) --------
let explorerMap       = null;
let explorerTileLayer = null;
let hexLayerGroup     = null;
let explorerUserMarker = null;
let hexRefLat = null, hexRefLng = null;
let visitedHexCache = null; // Set de "q,r"

// Rayon du circumcercle → flat-to-flat ≈ 500m (289 * sqrt(3) ≈ 500m)
const HEX_R_M = 289;

function initExplorerMap() {
    const mapEl = document.getElementById('explorer-map');
    if (!mapEl || typeof L === 'undefined') return;
    if (explorerMap) {
        setTimeout(() => explorerMap.invalidateSize(), 80);
        if (hexRefLat !== null) renderHexGrid();
        return;
    }
    explorerMap = L.map('explorer-map', { zoomControl: true, attributionControl: true, tap: true })
        .setView([46.6, 2.4], 13);
    explorerTileLayer = L.tileLayer(getTileUrl(), { attribution: TILE_ATTR, subdomains: 'abcd', maxZoom: 19, opacity: 0.65 })
        .addTo(explorerMap);
    hexLayerGroup = L.layerGroup().addTo(explorerMap);
    explorerMap.on('moveend zoomend', renderHexGrid);
    setTimeout(() => explorerMap.invalidateSize(), 80);
    locateExplorer(false);
}

function locateExplorer(centerMap = true) {
    if (!explorerMap || !navigator.geolocation) return;
    const btn = document.getElementById('btn-locate');
    if (btn) btn.classList.add('locating');
    navigator.geolocation.getCurrentPosition(pos => {
        if (btn) btn.classList.remove('locating');
        const lat = pos.coords.latitude, lng = pos.coords.longitude;
        // On fixe le point de référence une seule fois
        if (hexRefLat === null) { hexRefLat = lat; hexRefLng = lng; visitedHexCache = null; }
        if (explorerUserMarker) explorerUserMarker.remove();
        const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c8ff2e';
        explorerUserMarker = L.layerGroup([
            L.circleMarker([lat, lng], { radius:14, fillColor:accent, color:accent, weight:1, opacity:0.2, fillOpacity:0.15 }),
            L.circleMarker([lat, lng], { radius:7,  fillColor:accent, color:'#fff',  weight:2, opacity:1,  fillOpacity:1   })
        ]).addTo(explorerMap);
        explorerMap.setView([lat, lng], centerMap ? 15 : Math.max(explorerMap.getZoom(), 13));
        renderHexGrid();
    }, err => {
        if (btn) btn.classList.remove('locating');
        if (hexRefLat === null) { hexRefLat = 46.6; hexRefLng = 2.4; }
        renderHexGrid();
    }, { enableHighAccuracy: true, timeout: 10000 });
}

// ---- Maths hexagonales (pointy-top, coordonnées axiales) ----
function llToM(lat, lng) {
    const R = 6371000;
    return {
        mx: (lng - hexRefLng) * Math.PI / 180 * R * Math.cos(hexRefLat * Math.PI / 180),
        my: (lat - hexRefLat) * Math.PI / 180 * R
    };
}
function mToLL(mx, my) {
    const R = 6371000;
    return [
        hexRefLat + (my / R) * (180 / Math.PI),
        hexRefLng + (mx / (R * Math.cos(hexRefLat * Math.PI / 180))) * (180 / Math.PI)
    ];
}
function mToHex(mx, my) {
    const q = (mx * Math.sqrt(3) / 3 - my / 3) / HEX_R_M;
    const r = (my * 2 / 3) / HEX_R_M;
    return roundHex(q, r);
}
function hexToM(q, r) {
    return { mx: HEX_R_M * Math.sqrt(3) * (q + r / 2), my: HEX_R_M * 1.5 * r };
}
function roundHex(q, r) {
    const s = -q - r;
    let rq = Math.round(q), rr = Math.round(r), rs = Math.round(s);
    const dq = Math.abs(rq-q), dr = Math.abs(rr-r), ds = Math.abs(rs-s);
    if (dq > dr && dq > ds) rq = -rr - rs;
    else if (dr > ds) rr = -rq - rs;
    return { q: rq, r: rr };
}
function hexCornerLatLngs(q, r) {
    const { mx, my } = hexToM(q, r);
    return Array.from({ length: 6 }, (_, i) => {
        const a = Math.PI / 180 * (60 * i - 30); // pointy-top
        return mToLL(mx + HEX_R_M * Math.cos(a), my + HEX_R_M * Math.sin(a));
    });
}

// Calcule les hexagones visités à partir des tracés GPS
function getVisitedHexes() {
    if (visitedHexCache) return visitedHexCache;
    visitedHexCache = new Set();
    appData.runs.forEach(run => {
        if (!run.positions) return;
        run.positions.forEach(p => {
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
    const statsEl = document.getElementById('explorer-stats-label');
    if (zoom < 11) {
        if (statsEl) statsEl.textContent = '🔍 Zoome pour voir les hexagones';
        return;
    }

    const bounds = explorerMap.getBounds();
    const sw = llToM(bounds.getSouth(), bounds.getWest());
    const ne = llToM(bounds.getNorth(), bounds.getEast());

    const HEX_H = HEX_R_M * 1.5;
    const HEX_W = HEX_R_M * Math.sqrt(3);

    const minR = Math.floor(sw.my / HEX_H) - 2;
    const maxR = Math.ceil (ne.my / HEX_H) + 2;

    const visited = getVisitedHexes();
    const accent  = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c8ff2e';

    let total = 0, visitedCount = 0;

    for (let r = minR; r <= maxR; r++) {
        const qOff = r / 2;
        const minQ = Math.floor(sw.mx / HEX_W - qOff) - 2;
        const maxQ = Math.ceil (ne.mx / HEX_W - qOff) + 2;

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
                fillColor:    isVisited ? accent    : '#777777',
                fillOpacity:  isVisited ? 0.50      : 0.13,
                color:        isVisited ? accent    : '#555555',
                weight:       isVisited ? 1.5       : 0.7,
                opacity:      isVisited ? 0.9       : 0.4,
                interactive:  false
            }).addTo(hexLayerGroup);
        }
    }

    if (statsEl) {
        if (visitedCount > 0)
            statsEl.textContent = `🔷 ${visitedCount} hexagone${visitedCount>1?'s':''} exploré${visitedCount>1?'s':''} sur ${total} visible${total>1?'s':''}`;
        else
            statsEl.textContent = `${total} hexagone${total>1?'s':''} à explorer — VA COURIR ZEBI`;
    }
}


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
    if (page === 'run')     renderHistory();
    if (page === 'profile') renderProfile();
    if (page === 'explore') initExploreMap();
}

// ==================== INIT ====================
setTheme(appData.theme || 'dark');
renderHistory();
renderProfile();