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
        el.innerHTML = '<div class="empty-state"><div class="emoji">👟</div><p>Aucune course enregistrée.<br>Va courir le mimicul</p></div>';
        renderWeekChart(); return;
    }
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
    el.innerHTML = appData.runs.slice(0, 20).map((r, idx) => {
        const d = new Date(r.date); const dur = r.duration / 1000;
        const m = Math.floor(dur / 60); const s = Math.floor(dur % 60);
        const dist = r.distance || 0;
        const pace = dist > 0.01 ? (() => { const p = dur / dist; return `${Math.floor(p / 60)}:${String(Math.floor(p % 60)).padStart(2, '0')}`; })() : '--:--';
        const feelingBadge = r.feelingEmoji ? `<span style="font-size:15px;margin-left:5px">${r.feelingEmoji}</span>` : '';
        const titleLine = r.title ? `<div style="font-size:12px;font-weight:700;color:var(--text);margin-bottom:1px">${r.title}</div>` : '';
        const descLine  = r.description ? `<div style="font-size:10px;color:var(--text3);margin-top:1px;line-height:1.3">${r.description}</div>` : '';
        // Miniature média
        let thumbHtml = '';
        if (r.media && r.media.thumbnail) {
            const isVid = r.media.type === 'video';
            thumbHtml = `
            <div class="hi-thumb-wrap" onclick="event.stopPropagation(); openMediaViewer(${idx})">
              <img src="${r.media.thumbnail}" alt="media">
              ${isVid ? '<div class="hi-thumb-video-icon">▶</div>' : ''}
            </div>`;
        }
        const clickAttr = r.media ? `onclick="openMediaViewer(${idx})"` : '';
        return `<div class="history-item" ${clickAttr}>
          <div class="hi-date"><div class="hi-day">${d.getDate()}</div><div class="hi-month">${months[d.getMonth()]}</div></div>
          <div class="hi-info">${titleLine}<div class="hi-dist">${dist.toFixed(2)} km${feelingBadge}</div><div class="hi-meta">${m}min ${s}s</div>${descLine}</div>
          <div class="hi-pace">${pace}<br><span style="font-size:9px;color:var(--text3)">min/km</span></div>
          ${thumbHtml}
          <button class="hi-delete-btn" onclick="event.stopPropagation(); askDeleteRun(${idx})" title="Supprimer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>
        </div>`;
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

// ==================== MEDIA ====================
let pendingMedia = null; // { type, thumbnail, fullData, videoObjectUrl }

function compressImage(file, maxPx = 1000, quality = 0.72) {
    return new Promise(resolve => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
            let w = img.width, h = img.height;
            if (w > maxPx || h > maxPx) {
                if (w > h) { h = Math.round(h * maxPx / w); w = maxPx; }
                else       { w = Math.round(w * maxPx / h); h = maxPx; }
            }
            const c = document.createElement('canvas');
            c.width = w; c.height = h;
            c.getContext('2d').drawImage(img, 0, 0, w, h);
            URL.revokeObjectURL(url);
            resolve(c.toDataURL('image/jpeg', quality));
        };
        img.onerror = () => { URL.revokeObjectURL(url); resolve(null); };
        img.src = url;
    });
}

function extractVideoThumb(file) {
    return new Promise(resolve => {
        const video = document.createElement('video');
        const url   = URL.createObjectURL(file);
        video.muted = true;
        video.playsInline = true;
        video.onloadeddata = () => { video.currentTime = 0.5; };
        video.onseeked = () => {
            const maxPx = 600;
            let w = video.videoWidth, h = video.videoHeight;
            if (w > maxPx || h > maxPx) {
                if (w > h) { h = Math.round(h * maxPx / w); w = maxPx; }
                else       { w = Math.round(w * maxPx / h); h = maxPx; }
            }
            const c = document.createElement('canvas');
            c.width = w; c.height = h;
            c.getContext('2d').drawImage(video, 0, 0, w, h);
            resolve({ thumbnail: c.toDataURL('image/jpeg', 0.7), videoObjectUrl: url });
        };
        video.onerror = () => { URL.revokeObjectURL(url); resolve(null); };
        video.src = url;
    });
}

async function handleMediaSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const isVideo = file.type.startsWith('video/');
    const preview = document.getElementById('finish-media-preview');
    const addBtn  = document.querySelector('.finish-media-add');

    // Feedback chargement
    addBtn.innerHTML = '<span>Caro la GOAT !<span>';

    if (isVideo) {
        const result = await extractVideoThumb(file);
        if (!result) return;
        pendingMedia = { type: 'video', thumbnail: result.thumbnail, videoObjectUrl: result.videoObjectUrl, fullData: null };
    } else {
        const compressed = await compressImage(file);
        if (!compressed) return;
        pendingMedia = { type: 'image', thumbnail: compressed, fullData: compressed, videoObjectUrl: null };
    }

    // Affiche aperçu
    addBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg><span>Média ajouté ✓</span>`;
    addBtn.classList.add('has-media');

    preview.innerHTML = `
    <div class="finish-media-thumb-wrap">
      <img src="${pendingMedia.thumbnail}" alt="aperçu">
      ${isVideo ? '<div class="finish-media-video-badge">▶ Vidéo</div>' : ''}
      <button class="finish-media-remove" onclick="removePendingMedia()" type="button">✕</button>
    </div>`;
}

function removePendingMedia() {
    pendingMedia = null;
    if (pendingMedia && pendingMedia.videoObjectUrl) URL.revokeObjectURL(pendingMedia.videoObjectUrl);
    document.getElementById('finish-media-preview').innerHTML = '';
    document.getElementById('finish-media-input').value = '';
    const addBtn = document.querySelector('.finish-media-add');
    addBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Ajouter une photo ou vidéo</span>`;
    addBtn.classList.remove('has-media');
}

// ===== MEDIA VIEWER =====
let activeVideoUrl = null; // garde en mémoire les URL des vidéos pour la session

function openMediaViewer(runIndex) {
    const run = appData.runs[runIndex];
    if (!run) return;
    const viewer  = document.getElementById('media-viewer');
    const content = document.getElementById('media-viewer-content');
    const info    = document.getElementById('media-viewer-info');

    content.innerHTML = '';

    const media = run.media;
    if (!media) return;

    if (media.type === 'image') {
        content.innerHTML = `<img src="${media.fullData || media.thumbnail}" alt="photo">`;
        info.textContent  = run.title || new Date(run.date).toLocaleDateString('fr-FR');
    } else {
        // Vidéo : utilise l'objectUrl en mémoire si disponible
        const vurl = run._videoObjectUrl || null;
        if (vurl) {
            const vid = document.createElement('video');
            vid.src = vurl; vid.controls = true; vid.playsInline = true;
            vid.autoplay = true;
            content.appendChild(vid);
            info.textContent = run.title || new Date(run.date).toLocaleDateString('fr-FR');
        } else {
            // Plus de mémoire (appli relancée) → montre la miniature avec message
            content.innerHTML = `<img src="${media.thumbnail}" alt="aperçu vidéo" style="opacity:.7">`;
            info.textContent  = 'Plus de mémoire si tu as ca ro franchement bravo redemarre lapp et ouvre ta galerie';
        }
    }

    viewer.classList.add('show');
}

function closeMediaViewer() {
    const viewer  = document.getElementById('media-viewer');
    const content = document.getElementById('media-viewer-content');
    viewer.classList.remove('show');
    // Arrête la vidéo si en cours
    const vid = content.querySelector('video');
    if (vid) { vid.pause(); vid.src = ''; }
    content.innerHTML = '';
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

    // Reset média
    pendingMedia = null;
    document.getElementById('finish-media-preview').innerHTML = '';
    document.getElementById('finish-media-input').value = '';
    const addBtn = document.querySelector('.finish-media-add');
    if (addBtn) {
        addBtn.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg><span>Ajouter une photo ou vidéo</span>`;
        addBtn.classList.remove('has-media');
    }

    // Reset ressenti
    selectedFeeling = null;
    document.querySelectorAll('.feeling-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('btn-save-run').disabled = true;

    // Affiche le modal puis initialise la carte Leaflet
    document.getElementById('finish-overlay').classList.add('show');
    setTimeout(() => initFinishMap(runPositions), 100);
}

function closeFinishModal() {
    document.getElementById('finish-overlay').classList.remove('show');
    if (finishRouteMap) { finishRouteMap.remove(); finishRouteMap = null; }
}

function selectFeeling(idx) {
    selectedFeeling = idx;
    document.querySelectorAll('.feeling-btn').forEach((b, i) => b.classList.toggle('selected', i === idx));
    document.getElementById('btn-save-run').disabled = false;
}

function saveFinishedRun() {
    if (selectedFeeling === null || !finishRunData) return;
    const feelings   = ['😵', '😤', '😊', '😁', '🚀'];
    const feelNames  = ['OSKUR', 'Finito', 'Tranquilouuu', 'P\'tite ruby maintenant!', 'EZ'];

    // Allège les positions GPS pour le stockage
    const pts = finishRunData.positions;
    const step = pts.length > 120 ? Math.ceil(pts.length / 120) : 1;
    const savedPositions = pts.filter((_, i) => i % step === 0);

    const runTitle = document.getElementById('fm-run-title').value.trim();
    const runDesc  = document.getElementById('fm-run-desc').value.trim();

    const newRun = {
        date:          finishRunData.date,
        duration:      finishRunData.elapsed,
        distance:      finishRunData.dist,
        title:         runTitle || null,
        description:   runDesc  || null,
        feeling:       selectedFeeling,
        feelingEmoji:  feelings[selectedFeeling],
        feelingName:   feelNames[selectedFeeling],
        positions:     savedPositions,
        media:         pendingMedia ? {
                           type:       pendingMedia.type,
                           thumbnail:  pendingMedia.thumbnail,
                           fullData:   pendingMedia.fullData
                       } : null
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
    // Refresh carte explore si déjà ouverte
    if (exploreMap) refreshRunsOnMap();
    if (explorerMap) { visitedHexCache = null; renderHexGrid(); }
}

let finishRouteMap = null;

function initFinishMap(positions) {
    if (finishRouteMap) { finishRouteMap.remove(); finishRouteMap = null; }

    const mapEl  = document.getElementById('finish-route-map');
    const emptyEl = document.getElementById('finish-map-empty');
    if (!mapEl || typeof L === 'undefined') return;

    const hasGPS = positions && positions.length >= 2;
    emptyEl.style.display = hasGPS ? 'none' : 'flex';

    finishRouteMap = L.map('finish-route-map', {
        zoomControl:       false,
        attributionControl: false,
        dragging:          hasGPS,
        scrollWheelZoom:   false,
        tap:               hasGPS
    }).setView([46.6, 2.4], 13);

    L.tileLayer(getTileUrl(), { subdomains: 'abcd', maxZoom: 19 }).addTo(finishRouteMap);

    if (hasGPS) {
        const latlngs = positions.map(p => [p.lat, p.lng]);
        const accent  = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#c8ff2e';

        const poly = L.polyline(latlngs, {
            color: accent, weight: 5, opacity: 0.95, lineCap: 'round', lineJoin: 'round'
        }).addTo(finishRouteMap);

        L.circleMarker(latlngs[0], {
            radius: 7, fillColor: '#4cff72', color: '#fff', weight: 2, fillOpacity: 1, opacity: 1
        }).addTo(finishRouteMap);
        L.circleMarker(latlngs[latlngs.length - 1], {
            radius: 7, fillColor: '#ff4757', color: '#fff', weight: 2, fillOpacity: 1, opacity: 1
        }).addTo(finishRouteMap);

        finishRouteMap.fitBounds(poly.getBounds().pad(0.3));
    }

    setTimeout(() => finishRouteMap && finishRouteMap.invalidateSize(), 150);
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

// ==================== SUPPRIMER COURSE ====================
let pendingDeleteIndex = null;

function askDeleteRun(idx) {
    pendingDeleteIndex = idx;
    document.getElementById('confirm-delete-overlay').classList.add('show');
}
function cancelDelete(event) {
    if (event && event.target !== document.getElementById('confirm-delete-overlay')) return;
    pendingDeleteIndex = null;
    document.getElementById('confirm-delete-overlay').classList.remove('show');
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
    document.getElementById('confirm-delete-overlay').classList.remove('show');
    renderHistory();
    renderProfile();
    if (exploreMap)   refreshRunsOnMap();
    if (explorerMap)  renderHexGrid();
}

// ==================== RECORDS ====================
const STANDARD_DISTANCES = [
    { label: '100 m',         sub: null,         dist: 0.1     },
    { label: '200 m',         sub: null,         dist: 0.2     },
    { label: '400 m',         sub: null,         dist: 0.4     },
    { label: '1 km',          sub: null,         dist: 1       },
    { label: '5 km',          sub: null,         dist: 5       },
    { label: '10 km',         sub: null,         dist: 10      },
    { label: '15 km',         sub: null,         dist: 15      },
    { label: '20 km',         sub: null,         dist: 20      },
    { label: 'Semi-Marathon', sub: '21,1 km',    dist: 21.0975 },
    { label: '25 km',         sub: null,         dist: 25      },
    { label: '30 km',         sub: null,         dist: 30      },
    { label: '40 km',         sub: null,         dist: 40      },
    { label: 'Marathon',      sub: '42,195 km',  dist: 42.195  },
    { label: '50 km',         sub: null,         dist: 50      },
    { label: '100 km',        sub: null,         dist: 100     },
];

function fmtTime(ms) {
    if (ms === null) return null;
    const s  = Math.floor(ms / 1000);
    const h  = Math.floor(s / 3600);
    const m  = Math.floor((s % 3600) / 60);
    const ss = s % 60;
    if (h > 0) return `${h}h ${String(m).padStart(2,'0')}'${String(ss).padStart(2,'0')}"`;
    if (m > 0) return `${m}'${String(ss).padStart(2,'0')}"`;
    return `${ss}s`;
}

function getBestForDist(targetDist) {
    let best = null, bestRun = null;
    appData.runs.forEach(run => {
        if (!run.distance || run.distance < targetDist || !run.duration) return;
        const pace = run.duration / run.distance;
        const est  = pace * targetDist;
        if (best === null || est < best) { best = est; bestRun = run; }
    });
    return { ms: best, run: bestRun };
}

function renderRecords() {
    const months = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];

    // ---- Section 1 : distances standards ----
    const stdEl = document.getElementById('standard-records-list');
    if (!stdEl) return;
    let unlockedCount = 0;

    stdEl.innerHTML = STANDARD_DISTANCES.map(({ label, sub, dist }) => {
        const { ms, run } = getBestForDist(dist);
        const time  = ms !== null ? fmtTime(ms) : null;
        const dateStr = run ? (() => { const d = new Date(run.date); return `${d.getDate()} ${months[d.getMonth()]}`; })() : '';
        if (ms !== null) unlockedCount++;
        return `
        <div class="record-row">
          <div class="record-dist-label">${label}${sub ? `<small>${sub}</small>` : ''}</div>
          ${time
            ? `<div class="record-time-val">${time}</div><div class="record-date-lbl">${dateStr}</div>`
            : `<div class="record-time-val locked">🔒</div><div class="record-date-lbl"></div>`
          }
        </div>`;
    }).join('');

    // Petit résumé
    const summary = document.createElement('div');
    summary.style.cssText = 'font-size:11px;color:var(--text3);text-align:center;padding:8px 0 4px;font-weight:600;';
    summary.textContent = unlockedCount > 0
        ? `${unlockedCount} / ${STANDARD_DISTANCES.length} distances débloquées`
        : 'Faut courir pour en avoir grognasse';
    stdEl.appendChild(summary);

    // ---- Section 2 : meilleurs runs par allure ----
    const bestEl = document.getElementById('best-runs-list');
    if (!bestEl) return;

    const validRuns = appData.runs
        .filter(r => r.distance > 0.5 && r.duration > 0)
        .map(r => ({
            ...r,
            paceMs: r.duration / r.distance,
            paceStr: (() => {
                const ps = (r.duration / 1000) / r.distance;
                return `${Math.floor(ps / 60)}:${String(Math.floor(ps % 60)).padStart(2,'0')}`;
            })()
        }))
        .sort((a, b) => a.paceMs - b.paceMs)
        .slice(0, 8);

    if (validRuns.length === 0) {
        bestEl.innerHTML = '<div class="empty-state"><div class="emoji">🏃</div><p>VA COURIIIIIIIR</p></div>';
        return;
    }

    const rankLabels = ['🥇','🥈','🥉'];
    const rankClasses = ['gold','silver','bronze'];

    bestEl.innerHTML = validRuns.map((r, i) => {
        const d    = new Date(r.date);
        const dist = r.distance.toFixed(2);
        const dur  = Math.floor(r.duration / 1000);
        const m    = Math.floor(dur / 60), s = dur % 60;
        const title = r.title || `${d.getDate()} ${months[d.getMonth()]}`;
        const feel  = r.feelingEmoji || '';
        const rankLabel = rankLabels[i] || `${i+1}`;
        const rankCls   = rankClasses[i] || '';
        return `
        <div class="best-run-card">
          <div class="best-run-rank ${rankCls}">${rankLabel}</div>
          <div class="best-run-info">
            <div class="best-run-pace">${r.paceStr} <span style="font-size:12px;color:var(--text2);font-family:Outfit">min/km</span></div>
            <div class="best-run-meta">${title} · ${dist} km · ${m}min ${s}s</div>
          </div>
          <div class="best-run-feeling">${feel}</div>
        </div>`;
    }).join('');
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
    if (page === 'record')  renderRecords();
}

// ==================== INIT ====================
setTheme(appData.theme || 'dark');
renderHistory();
renderProfile();