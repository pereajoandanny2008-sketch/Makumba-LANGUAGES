
"use strict";

/* =========================================
   MAKUMBA LANGUAGES
   Navegación, autenticación demo y aprendizaje
========================================= */

const $ = (id) => document.getElementById(id);
const read = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
};
const write = (key, value) => localStorage.setItem(key, JSON.stringify(value));

let currentUser = null;
let authMode = "login";
let toastTimer;

function showToast(message) {
    const toast = $("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* NAVEGACIÓN DE PANTALLAS */
function showLanding() {
    $("landingPage").classList.remove("hidden");
    $("authPage").classList.add("hidden");
    $("appPage").classList.add("hidden");
}

function showAuth(mode = "login") {
    authMode = mode;
    $("landingPage").classList.add("hidden");
    $("authPage").classList.remove("hidden");
    $("appPage").classList.add("hidden");

    const registering = mode === "register";
    $("authTitle").textContent = registering ? "Crea tu cuenta" : "Bienvenido de nuevo";
    $("authDescription").textContent = registering
        ? "Regístrate para comenzar tu aprendizaje."
        : "Ingresa a tu cuenta para continuar aprendiendo.";
    $("authSubmit").textContent = registering ? "Crear cuenta" : "Iniciar sesión";
    $("nameGroup").classList.toggle("hidden", !registering);
    $("authName").required = registering;
    $("authSwitch").innerHTML = registering
        ? '¿Ya tienes cuenta? <a href="#" id="switchAuth">Inicia sesión</a>'
        : '¿No tienes cuenta? <a href="#" id="switchAuth">Regístrate</a>';
    $("authMessage").textContent = "";

    $("switchAuth").addEventListener("click", (event) => {
        event.preventDefault();
        showAuth(registering ? "login" : "register");
    });
}

function openApp(user) {
    currentUser = user;
    $("landingPage").classList.add("hidden");
    $("authPage").classList.add("hidden");
    $("appPage").classList.remove("hidden");

    const name = user.name || user.email.split("@")[0];
    $("sidebarName").textContent = name;
    $("welcomeName").textContent = name;
    $("sidebarAvatar").textContent = name.charAt(0).toUpperCase();
    $("topAvatar").textContent = name.charAt(0).toUpperCase();

    navigate("inicio");
    updateStats();
}

function navigate(page) {
    document.querySelectorAll(".content-page").forEach(section => section.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(button => button.classList.remove("active"));

    const selectedPage = $("page-" + page);
    if (!selectedPage) return;
    selectedPage.classList.add("active");

    const navButton = document.querySelector(`.nav-item[data-page="${page}"]`);
    if (navButton) navButton.classList.add("active");

    const titles = {
        inicio: "Inicio",
        practica: "Pronunciación",
        academia: "Academia",
        frases: "Frases",
        juegos: "Juegos",
        gramatica: "Gramática",
        traductor: "Traductor",
        progreso: "Mi progreso"
    };
    $("pageTitle").textContent = titles[page] || "Makumba";
    $("sidebar").classList.remove("open");

    if (page === "progreso") updateStats();
    if (page === "frases") renderPhrases();
    if (page === "juegos") newGame();
}

function toggleSidebar() {
    $("sidebar").classList.toggle("open");
}

/* REGISTRO E INICIO DE SESIÓN: DEMOSTRACIÓN LOCAL */
$("authForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = $("authEmail").value.trim().toLowerCase();
    const password = $("authPassword").value;
    const users = read("makumbaUsers", []);

    if (authMode === "register") {
        const name = $("authName").value.trim();
        if (!name) return $("authMessage").textContent = "Escribe tu nombre.";
        if (users.some(user => user.email === email)) {
            return $("authMessage").textContent = "Este correo ya está registrado.";
        }

        const user = { name, email, password };
        users.push(user);
        write("makumbaUsers", users);
        write("makumbaSession", { name, email });
        $("authForm").reset();
        openApp(user);
        showToast("¡Cuenta creada correctamente!");
    } else {
        const user = users.find(item => item.email === email && item.password === password);
        if (!user) return $("authMessage").textContent = "Correo o contraseña incorrectos.";

        write("makumbaSession", { name: user.name, email: user.email });
        $("authForm").reset();
        openApp(user);
        showToast("¡Bienvenido nuevamente!");
    }
});

function logout() {
    localStorage.removeItem("makumbaSession");
    currentUser = null;
    showLanding();
    showToast("Has cerrado sesión.");
}

/* ESTADÍSTICAS */
function userKey() {
    return currentUser ? currentUser.email : "visitante";
}
function getStats() {
    return read("makumbaStats_" + userKey(), {
        xp: 0, lessons: 0, practices: 0, correct: 0, attempts: 0
    });
}
function saveStats(stats) {
    write("makumbaStats_" + userKey(), stats);
    updateStats();
}
function updateStats() {
    if (!currentUser) return;
    const stats = getStats();
    $("xpValue").textContent = stats.xp;
    $("lessonsValue").textContent = stats.lessons;
    $("accuracyValue").textContent = stats.attempts
        ? Math.round(stats.correct / stats.attempts * 100) + "%"
        : "0%";
    $("progressXP").textContent = stats.xp + " XP";
    $("progressLessons").textContent = stats.lessons;
    $("progressPractices").textContent = stats.practices;
    const percent = Math.min(100, stats.lessons * 10 + stats.practices * 2);
    $("progressBar").style.width = percent + "%";
    $("progressText").textContent = percent
        ? `Has completado aproximadamente el ${percent}% de tu recorrido inicial.`
        : "¡Comienza a aprender para registrar tu progreso!";
}

/* SÍNTESIS DE VOZ */
function speakText(text, language = "en-US") {
    if (!("speechSynthesis" in window)) {
        showToast("Tu navegador no permite reproducir voz.");
        return;
    }
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    utterance.rate = 0.85;
    speechSynthesis.speak(utterance);
}
window.speakText = speakText;

/* PRONUNCIACIÓN */
const practiceSentences = {
    "en-US": ["Hello, how are you?", "My name is Daniel.", "I love learning languages.", "Have a wonderful day."],
    "es-ES": ["Hola, ¿cómo estás?", "Me gusta aprender idiomas.", "Buenos días, mucho gusto.", "Hasta pronto."],
    "fr-FR": ["Bonjour, comment ça va?", "Je m'appelle Daniel.", "J'aime apprendre les langues.", "Bonne journée."],
    "pt-BR": ["Olá, como você está?", "Meu nome é Daniel.", "Eu gosto de aprender idiomas.", "Tenha um bom dia."]
};
let practiceIndex = 0;
let recognition = null;

function updatePracticeText() {
    $("practiceText").textContent = practiceSentences[$("practiceLanguage").value][practiceIndex % 4];
    $("practiceResult").classList.add("hidden");
}
$("practiceLanguage").addEventListener("change", () => {
    practiceIndex = 0;
    updatePracticeText();
});
$("nextPractice").addEventListener("click", () => {
    practiceIndex++;
    updatePracticeText();
});
$("speakPractice").addEventListener("click", () => {
    speakText($("practiceText").textContent, $("practiceLanguage").value);
});

$("startRecording").addEventListener("click", () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        $("recordingStatus").textContent = "Tu navegador no admite reconocimiento de voz. Usa Chrome y permite el micrófono.";
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = $("practiceLanguage").value;
    recognition.continuous = false;
    recognition.interimResults = false;

    $("recordingStatus").textContent = "🎙️ Escuchando... habla ahora.";
    $("startRecording").disabled = true;

    recognition.onresult = (event) => {
        const spoken = event.results[0][0].transcript;
        const expected = $("practiceText").textContent;
        const normalize = value => value.toLowerCase().replace(/[.,!?¿¡]/g, "").trim();
        const a = normalize(expected);
        const b = normalize(spoken);
        const similarity = a === b ? 100 : Math.max(0, Math.round((1 - Math.abs(a.length - b.length) / Math.max(a.length, b.length)) * 75));

        $("practiceResult").classList.remove("hidden");
        $("practiceResult").innerHTML = `<strong>Tu respuesta:</strong> ${escapeHTML(spoken)}<br><strong>Frase esperada:</strong> ${escapeHTML(expected)}<br><strong>Coincidencia aproximada:</strong> ${similarity}%<br><small>Esta puntuación compara el texto reconocido, no evalúa con precisión tu acento.</small>`;
        $("recordingStatus").textContent = "¡Práctica terminada!";
        const stats = getStats();
        stats.practices++;
        stats.attempts++;
        if (similarity >= 70) {
            stats.correct++;
            stats.xp += 10;
        }
        saveStats(stats);
    };

    recognition.onerror = (event) => {
        $("recordingStatus").textContent = "No se pudo usar el micrófono: " + event.error + ". Revisa los permisos del navegador.";
    };
    recognition.onend = () => { $("startRecording").disabled = false; };
    recognition.start();
});

/* ACADEMIA */
const lessons = {
    A1: ["Saludos básicos", "Aprende a saludar y presentarte en inglés."],
    A2: ["Conversaciones cotidianas", "Aprende a comunicarte en situaciones comunes."],
    B1: ["Expresar opiniones", "Aprende a expresar tus ideas y opiniones."],
    B2: ["Conversación avanzada", "Desarrolla conversaciones más complejas."],
    C1: ["Expresión profesional", "Practica expresiones académicas y profesionales."],
    C2: ["Dominio del idioma", "Perfecciona tu comprensión y expresión."]
};
document.querySelectorAll(".level-card").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelectorAll(".level-card").forEach(item => item.classList.remove("selected"));
        button.classList.add("selected");
        const level = button.dataset.level;
        $("lessonTitle").textContent = `Nivel ${level} · ${lessons[level][0]}`;
        $("lessonDescription").textContent = lessons[level][1];
    });
});
$("completeLesson").addEventListener("click", () => {
    const stats = getStats();
    stats.lessons++;
    stats.xp += 25;
    saveStats(stats);
    showToast("¡Lección completada! +25 XP");
});

/* FRASES */
const phrases = [
    { en: "Good morning", es: "Buenos días", fr: "Bonjour", pt: "Bom dia" },
    { en: "Thank you", es: "Gracias", fr: "Merci", pt: "Obrigado" },
    { en: "How are you?", es: "¿Cómo estás?", fr: "Comment ça va?", pt: "Como você está?" },
    { en: "See you later", es: "Hasta luego", fr: "À plus tard", pt: "Até logo" },
    { en: "I need help", es: "Necesito ayuda", fr: "J'ai besoin d'aide", pt: "Preciso de ajuda" },
    { en: "I love learning", es: "Me encanta aprender", fr: "J'aime apprendre", pt: "Adoro aprender" }
];
function renderPhrases() {
    const language = $("phraseLanguage").value;
    const query = $("phraseSearch").value.toLowerCase();
    const langName = { "en-US": "en", "fr-FR": "fr", "pt-BR": "pt" }[language];
    $("phraseList").innerHTML = "";
    phrases.filter(item => (item[langName] + item.es).toLowerCase().includes(query)).forEach(item => {
        const div = document.createElement("div");
        div.className = "phrase-item";
        div.innerHTML = `<div><strong>${escapeHTML(item[langName])}</strong><br><small>${escapeHTML(item.es)}</small></div>`;
        const button = document.createElement("button");
        button.textContent = "🔊";
        button.addEventListener("click", () => speakText(item[langName], language));
        div.appendChild(button);
        $("phraseList").appendChild(div);
    });
}
$("phraseSearch").addEventListener("input", renderPhrases);
$("phraseLanguage").addEventListener("change", renderPhrases);

/* JUEGO */
const gameQuestions = [
    { word: "Apple", answer: "Manzana", options: ["Manzana", "Casa", "Perro", "Agua"] },
    { word: "Book", answer: "Libro", options: ["Mesa", "Libro", "Ventana", "Cielo"] },
    { word: "Water", answer: "Agua", options: ["Fuego", "Agua", "Tierra", "Comida"] },
    { word: "House", answer: "Casa", options: ["Escuela", "Coche", "Casa", "Árbol"] },
    { word: "Friend", answer: "Amigo", options: ["Familia", "Amigo", "Profesor", "Hermano"] }
];
let gameIndex = 0;
function newGame() {
    const q = gameQuestions[gameIndex % gameQuestions.length];
    $("gameWord").textContent = q.word;
    $("gameFeedback").textContent = "";
    $("gameOptions").innerHTML = "";
    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => {
            if (button.disabled) return;
            document.querySelectorAll("#gameOptions button").forEach(b => b.disabled = true);
            if (option === q.answer) {
                $("gameFeedback").textContent = "¡Correcto! +10 XP 🎉";
                const stats = getStats();
                stats.xp += 10;
                saveStats(stats);
            } else {
                $("gameFeedback").textContent = "No es correcto. La respuesta era: " + q.answer;
            }
        });
        $("gameOptions").appendChild(button);
    });
}
function nextGame() {
    gameIndex++;
    newGame();
}
$("nextGame").addEventListener("click", nextGame);

/* TRADUCTOR */
$("translateButton").addEventListener("click", async () => {
    const text = $("translateInput").value.trim();
    const target = $("translateLanguage").value;
    if (!text) return showToast("Escribe algo para traducir.");

    $("translationResult").textContent = "Traduciendo...";
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=es|${target}`);
        const data = await response.json();
        $("translationResult").textContent = data.responseData?.translatedText || "No se encontró una traducción.";
    } catch {
        $("translationResult").textContent = "No se pudo conectar con el servicio de traducción. Inténtalo nuevamente.";
    }
});

/* ROBOT FLOTANTE ARRASTRABLE */
const robot = $("makumbaRobot");
let dragging = false;
let moved = false;
let pointerOffsetX = 0;
let pointerOffsetY = 0;

robot.addEventListener("pointerdown", (event) => {
    if (event.target.closest("#robotChatButton")) return;
    dragging = true;
    moved = false;
    const rect = robot.getBoundingClientRect();
    pointerOffsetX = event.clientX - rect.left;
    pointerOffsetY = event.clientY - rect.top;
    robot.classList.add("dragging");
    robot.setPointerCapture(event.pointerId);
});

robot.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    moved = true;
    const x = Math.max(0, Math.min(window.innerWidth - robot.offsetWidth, event.clientX - pointerOffsetX));
    const y = Math.max(0, Math.min(window.innerHeight - robot.offsetHeight, event.clientY - pointerOffsetY));
    robot.style.left = x + "px";
    robot.style.top = y + "px";
    robot.style.right = "auto";
    robot.style.bottom = "auto";
});

function stopDragging() {
    if (!dragging) return;
    dragging = false;
    robot.classList.remove("dragging");
}
robot.addEventListener("pointerup", stopDragging);
robot.addEventListener("pointercancel", stopDragging);

$("robotChatButton").addEventListener("click", (event) => {
    event.stopPropagation();
    const message = $("robotSpeech");
    message.textContent = "¡Hola! Soy Makumba. ¡Vamos a aprender juntos! 🤖";
    robot.classList.add("show-message");
    speakText("Hello! Let's learn together!", "en-US");
    setTimeout(() => robot.classList.remove("show-message"), 4000);
});

/* SEGURIDAD DE TEXTO INSERTADO */
function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
    })[char]);
}

/* INICIALIZACIÓN */
document.querySelectorAll(".nav-item").forEach(button => {
    button.addEventListener("click", () => navigate(button.dataset.page));
});

window.addEventListener("DOMContentLoaded", () => {
    updatePracticeText();
    renderPhrases();
    newGame();

    const session = read("makumbaSession", null);
    if (session) openApp(session);
    else showLanding();
});
