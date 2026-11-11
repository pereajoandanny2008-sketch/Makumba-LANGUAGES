
"use strict";

/* =========================================
   MAKUMBA LANGUAGES
   Idiomas, lecciones, evaluaciones y progreso
========================================= */

const LANGUAGES = {
  en: { name: "Inglés", flag: "🇬🇧", speech: "en-US" },
  fr: { name: "Francés", flag: "🇫🇷", speech: "fr-FR" },
  pt: { name: "Portugués", flag: "🇧🇷", speech: "pt-BR" },
  it: { name: "Italiano", flag: "🇮🇹", speech: "it-IT" },
  de: { name: "Alemán", flag: "🇩🇪", speech: "de-DE" },
  es: { name: "Español", flag: "🇪🇸", speech: "es-ES" },
  ja: { name: "Japonés", flag: "🇯🇵", speech: "ja-JP" },
  ko: { name: "Coreano", flag: "🇰🇷", speech: "ko-KR" }
};

const LEVELS = ["A1", "A2", "B1", "B2", "C1", "C2"];

const LEVEL_DESCRIPTIONS = {
  A1: "Principiante: fundamentos y expresiones básicas.",
  A2: "Elemental: situaciones cotidianas.",
  B1: "Intermedio: comunicación independiente.",
  B2: "Intermedio alto: comunicación fluida.",
  C1: "Avanzado: precisión y comprensión.",
  C2: "Maestría: dominio avanzado del idioma."
};

/*
  Cada lección contiene su propia explicación,
  ejemplos y preguntas. La evaluación utiliza
  exclusivamente las preguntas de esa lección.
*/

const COURSE = {
  en: [
    {
      level: "A1",
      title: "The verb to be",
      description: "Aprende a usar am, is y are.",
      explanation: "El verbo to be significa ser o estar. Se utiliza para hablar de identidad, características, estados y ubicación.",
      examples: [
        ["I am a student.", "Yo soy estudiante."],
        ["She is happy.", "Ella está feliz."],
        ["They are friends.", "Ellos son amigos."]
      ],
      questions: [
        { q: "I ___ a student.", options: ["am", "is", "are"], answer: "am" },
        { q: "She ___ happy.", options: ["am", "is", "are"], answer: "is" },
        { q: "They ___ friends.", options: ["am", "is", "are"], answer: "are" },
        { q: "He ___ my brother.", options: ["are", "is", "am"], answer: "is" },
        { q: "We ___ ready.", options: ["is", "am", "are"], answer: "are" }
      ]
    },
    {
      level: "A1",
      title: "Personal pronouns",
      description: "Aprende los pronombres personales en inglés.",
      explanation: "Los pronombres personales reemplazan nombres de personas o cosas. Los principales son I, you, he, she, it, we y they.",
      examples: [
        ["I am Maria.", "Yo soy María."],
        ["He is my friend.", "Él es mi amigo."],
        ["They are students.", "Ellos son estudiantes."]
      ],
      questions: [
        { q: "___ am happy.", options: ["I", "He", "They"], answer: "I" },
        { q: "Maria is my sister. ___ is nice.", options: ["He", "She", "It"], answer: "She" },
        { q: "John and Peter are friends. ___ are friends.", options: ["We", "They", "He"], answer: "They" },
        { q: "My dog is small. ___ is small.", options: ["It", "She", "We"], answer: "It" },
        { q: "You and I are students. ___ are students.", options: ["They", "We", "He"], answer: "We" }
      ]
    }
  ],

  fr: [
    {
      level: "A1",
      title: "Le verbe être",
      description: "Aprende a conjugar el verbo être (ser o estar).",
      explanation: "El verbo être se utiliza para expresar identidad, características, estados y ubicación. Su conjugación cambia según el sujeto.",
      examples: [
        ["Je suis étudiant.", "Yo soy estudiante."],
        ["Tu es gentil.", "Tú eres amable."],
        ["Elle est française.", "Ella es francesa."],
        ["Nous sommes contents.", "Nosotros estamos contentos."],
        ["Vous êtes professeur.", "Usted es profesor."],
        ["Ils sont amis.", "Ellos son amigos."]
      ],
      questions: [
        { q: "Je ___ étudiant.", options: ["suis", "es", "est"], answer: "suis" },
        { q: "Tu ___ gentil.", options: ["suis", "es", "sommes"], answer: "es" },
        { q: "Elle ___ française.", options: ["est", "sont", "êtes"], answer: "est" },
        { q: "Nous ___ contents.", options: ["êtes", "sommes", "sont"], answer: "sommes" },
        { q: "Vous ___ professeur.", options: ["est", "suis", "êtes"], answer: "êtes" }
      ]
    },
    {
      level: "A1",
      title: "Le verbe avoir",
      description: "Aprende a utilizar el verbo avoir (tener).",
      explanation: "El verbo avoir expresa posesión y también aparece en muchas expresiones francesas.",
      examples: [
        ["J'ai un livre.", "Tengo un libro."],
        ["Tu as un chien.", "Tienes un perro."],
        ["Elle a vingt ans.", "Ella tiene veinte años."],
        ["Nous avons une maison.", "Tenemos una casa."]
      ],
      questions: [
        { q: "J'___ un livre.", options: ["ai", "as", "a"], answer: "ai" },
        { q: "Tu ___ un chien.", options: ["a", "as", "avons"], answer: "as" },
        { q: "Elle ___ vingt ans.", options: ["ont", "a", "ai"], answer: "a" },
        { q: "Nous ___ une maison.", options: ["avez", "ont", "avons"], answer: "avons" },
        { q: "Ils ___ deux enfants.", options: ["ont", "a", "as"], answer: "ont" }
      ]
    }
  ],

  pt: [
    {
      level: "A1", title: "O verbo ser e estar",
      description: "Aprende las formas básicas de ser y estar.",
      explanation: "En portugués, ser y estar se utilizan para identidad, características y estados.",
      examples: [["Eu sou estudante.", "Yo soy estudiante."], ["Ela está feliz.", "Ella está feliz."], ["Nós somos amigos.", "Somos amigos."]],
      questions: [
        { q: "Eu ___ estudante.", options: ["sou", "é", "são"], answer: "sou" },
        { q: "Ela ___ feliz.", options: ["estou", "está", "estão"], answer: "está" },
        { q: "Nós ___ amigos.", options: ["é", "somos", "são"], answer: "somos" },
        { q: "Eles ___ brasileiros.", options: ["são", "sou", "é"], answer: "são" },
        { q: "Você ___ professor.", options: ["somos", "é", "sou"], answer: "é" }
      ]
    },
    {
      level: "A1", title: "Pronomes pessoais",
      description: "Aprende los pronombres personales.",
      explanation: "Los pronombres personales identifican quién realiza una acción.",
      examples: [["Eu sou Ana.", "Yo soy Ana."], ["Ele é João.", "Él es João."], ["Nós somos amigos.", "Somos amigos."]],
      questions: [
        { q: "___ sou estudante.", options: ["Eu", "Ele", "Eles"], answer: "Eu" },
        { q: "Maria é minha irmã. ___ é simpática.", options: ["Ele", "Ela", "Nós"], answer: "Ela" },
        { q: "João e Pedro: ___ são amigos.", options: ["Nós", "Eles", "Ela"], answer: "Eles" },
        { q: "Você e eu: ___ somos amigos.", options: ["Nós", "Eles", "Ele"], answer: "Nós" },
        { q: "Pedro é professor. ___ é professor.", options: ["Ela", "Ele", "Eu"], answer: "Ele" }
      ]
    }
  ],

  it: [
    {
      level: "A1", title: "Il verbo essere",
      description: "Aprende a conjugar el verbo essere.",
      explanation: "Essere significa ser o estar y se utiliza para describir personas, identidades y estados.",
      examples: [["Io sono studente.", "Yo soy estudiante."], ["Lei è felice.", "Ella está feliz."], ["Noi siamo amici.", "Somos amigos."]],
      questions: [
        { q: "Io ___ studente.", options: ["sono", "sei", "è"], answer: "sono" },
        { q: "Tu ___ gentile.", options: ["è", "sei", "siamo"], answer: "sei" },
        { q: "Lei ___ italiana.", options: ["sono", "siete", "è"], answer: "è" },
        { q: "Noi ___ amici.", options: ["siamo", "sono", "sei"], answer: "siamo" },
        { q: "Loro ___ felici.", options: ["è", "sono", "siamo"], answer: "sono" }
      ]
    },
    {
      level: "A1", title: "I pronomi personali",
      description: "Aprende los pronombres personales italianos.",
      explanation: "Los pronombres personales indican quién realiza una acción.",
      examples: [["Io sono Maria.", "Yo soy María."], ["Lui è Paolo.", "Él es Paolo."], ["Noi siamo amici.", "Somos amigos."]],
      questions: [
        { q: "___ sono Maria.", options: ["Io", "Lui", "Loro"], answer: "Io" },
        { q: "Paolo è mio fratello. ___ è simpatico.", options: ["Lei", "Lui", "Noi"], answer: "Lui" },
        { q: "Maria e Anna: ___ sono amiche.", options: ["Loro", "Lui", "Io"], answer: "Loro" },
        { q: "Tu e io: ___ siamo amici.", options: ["Voi", "Noi", "Loro"], answer: "Noi" },
        { q: "___ sei gentile.", options: ["Tu", "Lei", "Loro"], answer: "Tu" }
      ]
    }
  ],

  de: [
    {
      level: "A1", title: "Das Verb sein",
      description: "Aprende el verbo sein (ser o estar).",
      explanation: "Sein se utiliza para expresar identidad, características y estados.",
      examples: [["Ich bin Student.", "Soy estudiante."], ["Du bist nett.", "Eres amable."], ["Wir sind Freunde.", "Somos amigos."]],
      questions: [
        { q: "Ich ___ Student.", options: ["bin", "bist", "ist"], answer: "bin" },
        { q: "Du ___ nett.", options: ["ist", "bist", "sind"], answer: "bist" },
        { q: "Er ___ müde.", options: ["bin", "sind", "ist"], answer: "ist" },
        { q: "Wir ___ Freunde.", options: ["sind", "seid", "ist"], answer: "sind" },
        { q: "Ihr ___ hier.", options: ["ist", "seid", "bin"], answer: "seid" }
      ]
    },
    {
      level: "A1", title: "Personalpronomen",
      description: "Aprende los pronombres personales alemanes.",
      explanation: "Los pronombres personales sustituyen nombres y personas.",
      examples: [["Ich bin Anna.", "Yo soy Anna."], ["Er ist Paul.", "Él es Paul."], ["Sie sind Freunde.", "Ellos son amigos."]],
      questions: [
        { q: "___ bin Anna.", options: ["Ich", "Er", "Sie"], answer: "Ich" },
        { q: "Paul ist hier. ___ ist hier.", options: ["Sie", "Er", "Wir"], answer: "Er" },
        { q: "Anna und Maria: ___ sind Freundinnen.", options: ["Wir", "Sie", "Er"], answer: "Sie" },
        { q: "Du und ich: ___ sind Freunde.", options: ["Wir", "Ihr", "Sie"], answer: "Wir" },
        { q: "___ bist nett.", options: ["Du", "Er", "Wir"], answer: "Du" }
      ]
    }
  ],

  es: [
    {
      level: "A1", title: "El verbo ser y estar",
      description: "Aprende cuándo utilizar ser y estar.",
      explanation: "Ser expresa identidad y características. Estar expresa estados y ubicaciones.",
      examples: [["Yo soy estudiante.", "Identidad."], ["Ella está feliz.", "Estado."], ["Nosotros estamos en casa.", "Ubicación."]],
      questions: [
        { q: "Yo ___ estudiante.", options: ["soy", "estoy", "eres"], answer: "soy" },
        { q: "Ella ___ feliz.", options: ["es", "está", "soy"], answer: "está" },
        { q: "Nosotros ___ amigos.", options: ["están", "somos", "es"], answer: "somos" },
        { q: "Tú ___ en casa.", options: ["estás", "soy", "es"], answer: "estás" },
        { q: "Ellos ___ profesores.", options: ["está", "soy", "son"], answer: "son" }
      ]
    },
    {
      level: "A1", title: "Los pronombres personales",
      description: "Aprende los pronombres personales.",
      explanation: "Los pronombres personales indican quién realiza una acción.",
      examples: [["Yo estudio.", "Primera persona."], ["Ella canta.", "Tercera persona."], ["Nosotros aprendemos.", "Primera persona plural."]],
      questions: [
        { q: "___ estudio español.", options: ["Yo", "Él", "Ellos"], answer: "Yo" },
        { q: "María es mi hermana. ___ canta.", options: ["Él", "Ella", "Nosotros"], answer: "Ella" },
        { q: "Pedro y Juan: ___ estudian.", options: ["Ellos", "Ella", "Yo"], answer: "Ellos" },
        { q: "Tú y yo: ___ aprendemos.", options: ["Ellos", "Nosotros", "Él"], answer: "Nosotros" },
        { q: "___ eres amable.", options: ["Tú", "Ella", "Ellos"], answer: "Tú" }
      ]
    }
  ],

  ja: [
    {
      level: "A1", title: "です (Desu)",
      description: "Aprende una estructura básica para identificar y describir.",
      explanation: "です (desu) aparece al final de frases corteses para expresar identidad o descripción.",
      examples: [["私は学生です。", "Soy estudiante."], ["これは本です。", "Esto es un libro."], ["田中さんは先生です。", "El señor Tanaka es profesor."]],
      questions: [
        { q: "私は学生__。", options: ["です", "ます", "ある"], answer: "です" },
        { q: "これは本__。", options: ["ます", "です", "いる"], answer: "です" },
        { q: "田中さんは先生__。", options: ["です", "でしたら", "ます"], answer: "です" },
        { q: "「です」の使い方は？", options: ["丁寧な説明", "命令", "質問だけ"], answer: "丁寧な説明" },
        { q: "「私は学生です」の意味は？", options: ["Soy estudiante", "Tengo un libro", "Buenos días"], answer: "Soy estudiante" }
      ]
    },
    {
      level: "A1", title: "人称代名詞",
      description: "Aprende pronombres personales básicos.",
      explanation: "Los pronombres como 私 (watashi) se utilizan para hablar de las personas.",
      examples: [["私は学生です。", "Yo soy estudiante."], ["彼は先生です。", "Él es profesor."], ["彼女は友達です。", "Ella es amiga."]],
      questions: [
        { q: "「私」の意味は？", options: ["Yo", "Él", "Ellos"], answer: "Yo" },
        { q: "「彼」の意味は？", options: ["Ella", "Él", "Nosotros"], answer: "Él" },
        { q: "「彼女」の意味は？", options: ["Yo", "Ella", "Tú"], answer: "Ella" },
        { q: "「私たち」の意味は？", options: ["Nosotros", "Ellos", "Tú"], answer: "Nosotros" },
        { q: "「あなた」の意味 es:", options: ["Tú", "Yo", "Él"], answer: "Tú" }
      ]
    }
  ],

  ko: [
    {
      level: "A1", title: "이에요 / 예요",
      description: "Aprende una forma básica de decir «ser».",
      explanation: "이에요 y 예요 se utilizan en coreano para identificar o describir algo de manera cortés.",
      examples: [["저는 학생이에요.", "Soy estudiante."], ["여기는 학교예요.", "Este lugar es una escuela."], ["저는 마리아예요.", "Soy María."]],
      questions: [
        { q: "저는 학생__.", options: ["이에요", "합니다", "있어요"], answer: "이에요" },
        { q: "여기는 학교__.", options: ["있어요", "예요", "합니다"], answer: "예요" },
        { q: "저는 마리아__.", options: ["예요", "있어요", "가요"], answer: "예요" },
        { q: "이에요 / 예요 expresa:", options: ["Identidad", "Pasado", "Movimiento"], answer: "Identidad" },
        { q: "«저는 학생이에요» significa:", options: ["Soy estudiante", "Estoy en casa", "Gracias"], answer: "Soy estudiante" }
      ]
    },
    {
      level: "A1", title: "인칭 대명사",
      description: "Aprende pronombres personales básicos.",
      explanation: "Los pronombres personales indican quién realiza una acción o de quién hablamos.",
      examples: [["저는 학생이에요.", "Yo soy estudiante."], ["그는 선생님이에요.", "Él es profesor."], ["우리는 친구예요.", "Somos amigos."]],
      questions: [
        { q: "«저» significa:", options: ["Yo", "Él", "Ellos"], answer: "Yo" },
        { q: "«그» significa:", options: ["Ella", "Él", "Nosotros"], answer: "Él" },
        { q: "«그녀» significa:", options: ["Ella", "Tú", "Yo"], answer: "Ella" },
        { q: "«우리» significa:", options: ["Nosotros", "Ellos", "Él"], answer: "Nosotros" },
        { q: "«당신» significa:", options: ["Tú / usted", "Yo", "Ellos"], answer: "Tú / usted" }
      ]
    }
  ]
};

/* Datos básicos de vocabulario y pronunciación */

const VOCABULARY = {
  en: [["Hello","Hola"],["Thank you","Gracias"],["Water","Agua"],["House","Casa"],["Book","Libro"],["Friend","Amigo"],["Good morning","Buenos días"]],
  fr: [["Bonjour","Hola / Buenos días"],["Merci","Gracias"],["Eau","Agua"],["Maison","Casa"],["Livre","Libro"],["Ami","Amigo"],["Bonsoir","Buenas noches"]],
  pt: [["Olá","Hola"],["Obrigado","Gracias"],["Água","Agua"],["Casa","Casa"],["Livro","Libro"],["Amigo","Amigo"],["Bom dia","Buenos días"]],
  it: [["Ciao","Hola"],["Grazie","Gracias"],["Acqua","Agua"],["Casa","Casa"],["Libro","Libro"],["Amico","Amigo"],["Buongiorno","Buenos días"]],
  de: [["Hallo","Hola"],["Danke","Gracias"],["Wasser","Agua"],["Haus","Casa"],["Buch","Libro"],["Freund","Amigo"],["Guten Morgen","Buenos días"]],
  es: [["Hola","Hola"],["Gracias","Gracias"],["Agua","Agua"],["Casa","Casa"],["Libro","Libro"],["Amigo","Amigo"],["Buenos días","Buenos días"]],
  ja: [["こんにちは","Hola"],["ありがとう","Gracias"],["水","Agua"],["家","Casa"],["本","Libro"],["友達","Amigo"],["おはよう","Buenos días"]],
  ko: [["안녕하세요","Hola"],["감사합니다","Gracias"],["물","Agua"],["집","Casa"],["책","Libro"],["친구","Amigo"],["좋은 아침","Buenos días"]]
};

const GRAMMAR = {
  en: [["Verb to be","Am, is y are para identidad y estados."],["Personal pronouns","I, you, he, she, it, we, they."],["Articles","Uso de a, an y the."]],
  fr: [["Être","Conjugación: je suis, tu es, il est, nous sommes."],["Avoir","Conjugación: j'ai, tu as, il a, nous avons."],["Articles","Le, la, les, un, une y des."]],
  pt: [["Ser e estar","Diferencias entre ser y estar."],["Pronomes","Eu, tu, ele, ela, nós, vocês."],["Artigos","O, a, os, as, um y uma."]],
  it: [["Essere","Sono, sei, è, siamo, siete, sono."],["Avere","Ho, hai, ha, abbiamo, avete, hanno."],["Articoli","Il, lo, la, i, gli y le."]],
  de: [["Sein","Bin, bist, ist, sind, seid."],["Personalpronomen","Ich, du, er, sie, es, wir, ihr."],["Artikel","Der, die, das, ein y eine."]],
  es: [["Ser y estar","Diferencias entre identidad, estados y ubicación."],["Pronombres","Yo, tú, él, ella, nosotros y ellos."],["Artículos","El, la, los, las, un y una."]],
  ja: [["です","Estructura básica para describir e identificar."],["Pronombres","私, あなた, 彼 y 彼女."],["Partículas","は, の y を en frases básicas."]],
  ko: [["이에요 / 예요","Estructura para identificar y describir."],["Pronombres","저, 너, 그, 그녀, 우리."],["Partículas","은, 는, 이, 가 en frases básicas."]]
};

/* Estado de la aplicación */

let currentUser = null;
let currentLanguage = "en";
let selectedLesson = null;
let currentPractice = 0;
let currentGame = 0;
let toastTimer = null;
let assessmentLocked = false;
let lastAssessment = null;
let authMode = "register";

const $ = id => document.getElementById(id);

function safeId(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]/g, "_");
}

function storageUserKey() {
  return safeId(currentUser?.email || "guest");
}

function languageKey() {
  return `makumba_${storageUserKey()}_stats_${currentLanguage}`;
}

function readStats() {
  try {
    return JSON.parse(localStorage.getItem(languageKey())) || {
      xp: 0,
      lessons: [],
      practices: 0,
      correct: 0,
      attempts: 0,
      unlocked: ["A1"],
      completedLevels: []
    };
  } catch {
    return {
      xp: 0, lessons: [], practices: 0,
      correct: 0, attempts: 0,
      unlocked: ["A1"], completedLevels: []
    };
  }
}

function saveStats(stats) {
  localStorage.setItem(languageKey(), JSON.stringify(stats));
}

function getCourse() {
  return COURSE[currentLanguage] || COURSE.en;
}

function getLessonKey(lesson) {
  return `${lesson.level}_${lesson.title}`;
}

function showToast(message) {
  const toast = $("toast");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2800);
}

/* Navegación */

function showPage(pageName) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.toggle("active-page", page.id === `page-${pageName}`);
  });

  document.querySelectorAll(".nav-item").forEach(button => {
    button.classList.toggle("active", button.dataset.page === pageName);
  });

  const titles = {
    inicio: "Inicio",
    academia: "Academia",
    practica: "Pronunciación",
    frases: "Frases",
    juegos: "Juegos",
    gramatica: "Gramática",
    traductor: "Traductor",
    progreso: "Mi progreso"
  };

  $("pageTitle").textContent = titles[pageName] || "Makumba";
  $("sidebar").classList.remove("open");

  if (pageName === "progreso") renderProgress();
  if (pageName === "academia") renderLevels();
  if (pageName === "gramatica") renderGrammar();
  if (pageName === "frases") renderPhrases();
  if (pageName === "juegos") renderGame();
}

function goTo(page) {
  showPage(page);
}

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.page));
});

document.querySelectorAll("[data-go]").forEach(button => {
  button.addEventListener("click", () => showPage(button.dataset.go));
});

$("mobileMenuButton").addEventListener("click", () => {
  $("sidebar").classList.toggle("open");
});

/* Autenticación de demostración */

function showAuth(mode = "register") {
  authMode = mode;
  $("landingPage").classList.add("hidden");
  $("authPage").classList.remove("hidden");
  $("appPage").classList.add("hidden");

  const registering = mode === "register";
  $("authTitle").textContent = registering ? "Crear cuenta" : "Iniciar sesión";
  $("authSubtitle").textContent = registering
    ? "Comienza tu aventura aprendiendo idiomas."
    : "Qué bueno tenerte de vuelta.";
  $("authSubmit").textContent = registering ? "Crear cuenta" : "Iniciar sesión";
  $("authSwitch").textContent = registering ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?";
  $("switchAuth").textContent = registering ? "Inicia sesión" : "Regístrate";
  $("nameGroup").classList.toggle("hidden", !registering);
  $("authMessage").textContent = "";
  $("authPassword").autocomplete = registering ? "new-password" : "current-password";
}

$("startLanding").addEventListener("click", () => showAuth("register"));
$("loginLanding").addEventListener("click", () => showAuth("login"));
$("backLanding").addEventListener("click", () => {
  $("authPage").classList.add("hidden");
  $("landingPage").classList.remove("hidden");
});
$("switchAuth").addEventListener("click", () => {
  showAuth(authMode === "register" ? "login" : "register");
});

$("authForm").addEventListener("submit", event => {
  event.preventDefault();

  const name = $("authName").value.trim();
  const email = $("authEmail").value.trim().toLowerCase();
  const password = $("authPassword").value;

  if (password.length < 6) {
    $("authMessage").textContent = "La contraseña debe tener al menos 6 caracteres.";
    $("authMessage").className = "message error";
    return;
  }

  const users = JSON.parse(localStorage.getItem("makumba_users") || "{}");

  if (authMode === "register") {
    if (!name) {
      $("authMessage").textContent = "Escribe tu nombre.";
      $("authMessage").className = "message error";
      return;
    }
    if (users[email]) {
      $("authMessage").textContent = "Este correo ya está registrado.";
      $("authMessage").className = "message error";
      return;
    }

    // Demo local: no utilizar para cuentas reales.
    users[email] = { name, password };
    localStorage.setItem("makumba_users", JSON.stringify(users));
    currentUser = { name, email };
  } else {
    if (!users[email] || users[email].password !== password) {
      $("authMessage").textContent = "Correo o contraseña incorrectos.";
      $("authMessage").className = "message error";
      return;
    }
    currentUser = { name: users[email].name, email };
  }

  localStorage.setItem("makumba_session", JSON.stringify(currentUser));
  openApp();
});

function openApp() {
  $("landingPage").classList.add("hidden");
  $("authPage").classList.add("hidden");
  $("appPage").classList.remove("hidden");

  $("welcomeName").textContent = currentUser.name;
  $("sidebarName").textContent = currentUser.name;
  $("sidebarAvatar").textContent = currentUser.name.charAt(0).toUpperCase();
  $("topAvatar").textContent = currentUser.name.charAt(0).toUpperCase();

  const savedLanguage = localStorage.getItem(
    `makumba_${storageUserKey()}_language`
  );

  currentLanguage = LANGUAGES[savedLanguage] ? savedLanguage : "en";
  $("globalLanguage").value = currentLanguage;

  updateLanguage();
  showPage("inicio");
}

$("logoutButton").addEventListener("click", () => {
  localStorage.removeItem("makumba_session");
  currentUser = null;
  $("appPage").classList.add("hidden");
  $("landingPage").classList.remove("hidden");
  showToast("Sesión cerrada.");
});

/* Selector global de idioma */

$("globalLanguage").addEventListener("change", event => {
  currentLanguage = event.target.value;
  localStorage.setItem(
    `makumba_${storageUserKey()}_language`,
    currentLanguage
  );

  selectedLesson = null;
  lastAssessment = null;
  $("assessmentPanel").classList.add("hidden");

  updateLanguage();
  showToast(`Ahora estás aprendiendo ${LANGUAGES[currentLanguage].name}.`);
});

function updateLanguage() {
  const language = LANGUAGES[currentLanguage];

  $("topLanguage").textContent = `${language.flag} ${language.name}`;
  $("translateLanguage").textContent = `Idioma destino: ${language.name}`;

  $("practiceLanguage")?.setAttribute("lang", language.speech);

  renderStats();
  renderLevels();
  renderPhrases();
  renderGrammar();
  renderGame();
  renderPractice();
  renderProgress();

  if (selectedLesson) {
    const updated = getCourse().find(item =>
      item.title === selectedLesson.title
    );
    if (updated) selectLesson(updated);
    else clearLesson();
  }

  updateNextLesson();
}

/* Estadísticas por idioma */

function renderStats() {
  const stats = readStats();
  const accuracy = stats.attempts
    ? Math.round(stats.correct / stats.attempts * 100)
    : 0;

  $("xpValue").textContent = `${stats.xp} XP`;
  $("lessonsValue").textContent = stats.lessons.length;
  $("accuracyValue").textContent = `${accuracy}%`;
  $("progressXP").textContent = `${stats.xp} XP`;
  $("progressLessons").textContent = stats.lessons.length;
  $("progressPractices").textContent = stats.practices;
  $("progressAccuracy").textContent = `${accuracy}%`;
}

/* Academia y niveles */

function renderLevels() {
  const container = $("level-grid");
  container.replaceChildren();

  const stats = readStats();

  LEVELS.forEach(level => {
    const unlocked = stats.unlocked.includes(level);
    const completed = stats.completedLevels.includes(level);
    const card = document.createElement("article");

    card.className = "level-card";
    if (!unlocked) card.classList.add("locked");
    if (selectedLesson?.level === level) card.classList.add("selected");

    const heading = document.createElement("h3");
    heading.textContent = level;

    const description = document.createElement("p");
    description.textContent = LEVEL_DESCRIPTIONS[level];

    const status = document.createElement("div");
    status.className = "level-status";
    status.textContent = completed
      ? "✓ Nivel aprobado"
      : unlocked ? "● Disponible" : "🔒 Bloqueado";

    card.append(heading, description, status);

    if (unlocked) {
      card.addEventListener("click", () => {
        const lessons = getCourse().filter(item => item.level === level);
        if (!lessons.length) {
          showToast("Este nivel todavía no tiene lecciones cargadas.");
          return;
        }
        renderLevelLessons(level, lessons);
      });
    }

    container.appendChild(card);
  });
}

function renderLevelLessons(level, lessons) {
  const container = $("lessonContent");
  container.replaceChildren();

  const heading = document.createElement("h3");
  heading.textContent = `Lecciones ${level}`;
  container.appendChild(heading);

  lessons.forEach(lesson => {
    const button = document.createElement("button");
    button.className = "lesson-choice";
    button.style.cssText = "display:block;width:100%;text-align:left;padding:13px;margin:8px 0;background:#101e34;border:1px solid rgba(255,255,255,.1);border-radius:12px;color:white;cursor:pointer";

    const done = readStats().lessons.includes(getLessonKey(lesson));
    button.textContent = `${done ? "✓ " : "📖 "}${lesson.title}`;

    button.addEventListener("click", () => selectLesson(lesson));
    container.appendChild(button);
  });

  $("lessonTitle").textContent = `Nivel ${level}`;
  $("lessonDescription").textContent = LEVEL_DESCRIPTIONS[level];
  $("lessonLevel").textContent = level;
  $("completeLesson").disabled = true;
  $("startAssessment").disabled = true;
  $("assessmentPanel").classList.add("hidden");
}

function selectLesson(lesson) {
  selectedLesson = lesson;
  assessmentLocked = false;

  $("lessonTitle").textContent = lesson.title;
  $("lessonDescription").textContent = lesson.description;
  $("lessonLevel").textContent = lesson.level;

  const content = $("lessonContent");
  content.replaceChildren();

  const explanation = document.createElement("p");
  explanation.textContent = lesson.explanation;
  content.appendChild(explanation);

  const examplesHeading = document.createElement("h3");
  examplesHeading.textContent = "Ejemplos";
  content.appendChild(examplesHeading);

  lesson.examples.forEach(example => {
    const box = document.createElement("div");
    box.className = "example-box";

    const target = document.createElement("p");
    target.textContent = example[0];
    target.lang = LANGUAGES[currentLanguage].speech;

    const translation = document.createElement("p");
    translation.textContent = `🇪🇸 ${example[1]}`;
    translation.className = "lesson-note";

    box.append(target, translation);
    content.appendChild(box);
  });

  const stats = readStats();
  const completed = stats.lessons.includes(getLessonKey(lesson));

  $("completeLesson").disabled = completed;
  $("completeLesson").textContent = completed
    ? "✓ Lección completada"
    : "Completar lección";

  $("startAssessment").disabled = false;
  $("assessmentPanel").classList.add("hidden");

  renderLevels();
}

function clearLesson() {
  $("lessonTitle").textContent = "Selecciona una lección";
  $("lessonDescription").textContent = "Elige una lección para ver su contenido.";
  $("lessonContent").replaceChildren();
  $("completeLesson").disabled = true;
  $("startAssessment").disabled = true;
}

$("completeLesson").addEventListener("click", () => {
  if (!selectedLesson) return;

  const stats = readStats();
  const key = getLessonKey(selectedLesson);

  if (!stats.lessons.includes(key)) {
    stats.lessons.push(key);
    stats.xp += 10;
    saveStats(stats);
    renderStats();
    updateNextLesson();
    renderLevelLessons(selectedLesson.level,
      getCourse().filter(item => item.level === selectedLesson.level)
    );
    selectLesson(selectedLesson);
    showToast("¡Lección completada! +10 XP");
  }
});

/* Evaluación vinculada a la lección actual */

$("startAssessment").addEventListener("click", () => {
  if (!selectedLesson) {
    showToast("Primero selecciona una lección.");
    return;
  }

  renderAssessment();
  $("assessmentPanel").classList.remove("hidden");
  $("assessmentPanel").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("closeAssessment").addEventListener("click", () => {
  $("assessmentPanel").classList.add("hidden");
});

function renderAssessment() {
  const lesson = selectedLesson;
  if (!lesson) return;

  const container = $("assessmentQuestions");
  container.replaceChildren();

  $("assessmentTitle").textContent = `Evaluación: ${lesson.title}`;
  $("assessmentResult").textContent = "";
  $("submitAssessment").disabled = false;
  assessmentLocked = false;

  // Estas son las preguntas de ESTA lección,
  // no un banco genérico de preguntas.
  lesson.questions.forEach((question, index) => {
    const box = document.createElement("div");
    box.className = "assessment-question";

    const title = document.createElement("h4");
    title.textContent = `${index + 1}. ${question.q}`;
    title.lang = LANGUAGES[currentLanguage].speech;
    box.appendChild(title);

    question.options.forEach(option => {
      const label = document.createElement("label");
      label.className = "assessment-option";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `assessment-${index}`;
      radio.value = option;

      const text = document.createElement("span");
      text.textContent = option;
      text.lang = LANGUAGES[currentLanguage].speech;

      label.append(radio, text);
      box.appendChild(label);
    });

    container.appendChild(box);
  });
}

$("submitAssessment").addEventListener("click", () => {
  if (!selectedLesson || assessmentLocked) return;

  const questions = selectedLesson.questions;
  const answers = [];

  for (let i = 0; i < questions.length; i++) {
    const selected = document.querySelector(
      `input[name="assessment-${i}"]:checked`
    );

    if (!selected) {
      $("assessmentResult").textContent =
        "Debes responder todas las preguntas antes de calificar.";
      return;
    }

    answers.push(selected.value);
  }

  let correct = 0;
  questions.forEach((question, index) => {
    if (answers[index] === question.answer) correct++;
  });

  const percentage = Math.round(correct / questions.length * 100);
  const passed = percentage >= 70;

  const stats = readStats();
  stats.attempts += questions.length;
  stats.correct += correct;

  if (passed) {
    const key = getLessonKey(selectedLesson);

    if (!stats.lessons.includes(key)) {
      stats.lessons.push(key);
      stats.xp += 25;
    }

    const lessonsInLevel = getCourse().filter(
      item => item.level === selectedLesson.level
    );

    const allPassed = lessonsInLevel.every(item =>
      stats.lessons.includes(getLessonKey(item))
    );

    if (allPassed) {
      if (!stats.completedLevels.includes(selectedLesson.level)) {
        stats.completedLevels.push(selectedLesson.level);
      }

      const currentIndex = LEVELS.indexOf(selectedLesson.level);
      const nextLevel = LEVELS[currentIndex + 1];

      if (nextLevel && !stats.unlocked.includes(nextLevel)) {
        stats.unlocked.push(nextLevel);
      }
    }

    assessmentLocked = true;
    $("submitAssessment").disabled = true;
    $("completeLesson").disabled = true;
    $("completeLesson").textContent = "✓ Lección aprobada";

    $("assessmentResult").textContent =
      `¡Excelente! ${correct}/${questions.length} respuestas correctas (${percentage}%). Has aprobado la evaluación.`;

    $("assessmentResult").style.color = "var(--green)";
    showToast("¡Evaluación aprobada! +25 XP");
  } else {
    $("assessmentResult").textContent =
      `${correct}/${questions.length} respuestas correctas (${percentage}%). Necesitas 70% para aprobar. Repasa la lección e inténtalo de nuevo.`;

    $("assessmentResult").style.color = "var(--red)";
  }

  saveStats(stats);
  renderStats();
  renderLevels();
  renderProgress();
  updateNextLesson();

  // Mostrar qué respuestas eran correctas.
  document.querySelectorAll(".assessment-question").forEach((box, index) => {
    const question = questions[index];
    const labels = box.querySelectorAll(".assessment-option");

    labels.forEach(label => {
      const radio = label.querySelector("input");
      radio.disabled = true;

      if (radio.value === question.answer) {
        label.classList.add("correct");
      } else if (radio.checked) {
        label.classList.add("incorrect");
      }
    });
  });
});

function updateNextLesson() {
  const stats = readStats();
  const next = getCourse().find(lesson =>
    stats.unlocked.includes(lesson.level) &&
    !stats.lessons.includes(getLessonKey(lesson))
  );

  $("nextLessonText").textContent = next
    ? `${next.level} · ${next.title}`
    : "¡Has completado todas las lecciones disponibles de este curso!";
}

/* Progreso */

function renderProgress() {
  const stats = readStats();
  const course = getCourse();

  const accuracy = stats.attempts
    ? Math.round(stats.correct / stats.attempts * 100)
    : 0;

  const total = course.length;
  const completed = course.filter(item =>
    stats.lessons.includes(getLessonKey(item))
  ).length;

  const percent = total ? Math.round(completed / total * 100) : 0;

  $("progressXP").textContent = `${stats.xp} XP`;
  $("progressLessons").textContent = completed;
  $("progressPractices").textContent = stats.practices;
  $("progressAccuracy").textContent = `${accuracy}%`;
  $("progressPercent").textContent = `${percent}%`;
  $("progressBar").style.width = `${percent}%`;
  $("progressText").textContent = `${completed} de ${total} lecciones disponibles completadas.`;
  $("unlockedText").textContent =
    `Niveles desbloqueados: ${stats.unlocked.join(", ")}`;
}

/* Pronunciación */

function renderPractice() {
  const words = VOCABULARY[currentLanguage];
  currentPractice = currentPractice % words.length;

  $("practiceText").textContent = words[currentPractice][0];
  $("practiceTranslation").textContent = words[currentPractice][1];
  $("practiceText").lang = LANGUAGES[currentLanguage].speech;
  $("practiceResult").textContent = "";
  $("recordingStatus").textContent = "";
}

$("speakPractice").addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    showToast("Tu navegador no admite síntesis de voz.");
    return;
  }

  speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(
    $("practiceText").textContent
  );

  utterance.lang = LANGUAGES[currentLanguage].speech;
  utterance.rate = 0.85;
  speechSynthesis.speak(utterance);

  const stats = readStats();
  stats.practices++;
  saveStats(stats);
  renderStats();
});

$("nextPractice").addEventListener("click", () => {
  currentPractice++;
  renderPractice();
});

$("startRecording").addEventListener("click", () => {
  const Recognition = window.SpeechRecognition ||
    window.webkitSpeechRecognition;

  if (!Recognition) {
    $("recordingStatus").textContent =
      "Tu navegador no admite reconocimiento de voz. Prueba con Chrome.";
    return;
  }

  const recognition = new Recognition();
  recognition.lang = LANGUAGES[currentLanguage].speech;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  $("recordingStatus").textContent = "🎙 Escuchando...";

  recognition.onresult = event => {
    const spoken = event.results[0][0].transcript;
    $("practiceResult").textContent = `Has dicho: ${spoken}`;
    $("recordingStatus").textContent = "¡Práctica terminada!";

    const stats = readStats();
    stats.practices++;
    saveStats(stats);
    renderStats();
  };

  recognition.onerror = () => {
    $("recordingStatus").textContent =
      "No se pudo reconocer tu voz. Comprueba el permiso del micrófono.";
  };

  recognition.start();
});

/* Frases */

function renderPhrases(filter = "") {
  const container = $("phraseList");
  container.replaceChildren();

  const words = VOCABULARY[currentLanguage];
  const filtered = words.filter(item =>
    item[0].toLowerCase().includes(filter.toLowerCase()) ||
    item[1].toLowerCase().includes(filter.toLowerCase())
  );

  filtered.forEach(item => {
    const card = document.createElement("article");
    card.className = "phrase-card";

    const target = document.createElement("strong");
    target.textContent = item[0];
    target.lang = LANGUAGES[currentLanguage].speech;

    const translation = document.createElement("span");
    translation.textContent = item[1];

    card.append(target, translation);
    container.appendChild(card);
  });

  if (!filtered.length) {
    container.textContent = "No se encontraron frases.";
  }
}

$("phraseSearch").addEventListener("input", event => {
  renderPhrases(event.target.value);
});

/* Juegos */

function renderGame() {
  const words = VOCABULARY[currentLanguage];
  currentGame = currentGame % words.length;

  const item = words[currentGame];
  $("gameWord").textContent = item[0];
  $("gameWord").lang = LANGUAGES[currentLanguage].speech;
  $("gameFeedback").textContent = "";

  const container = $("gameOptions");
  container.replaceChildren();

  const options = [item[1]];
  const alternatives = words
    .filter(word => word[1] !== item[1])
    .map(word => word[1]);

  while (options.length < 4 && alternatives.length) {
    const randomIndex = Math.floor(Math.random() * alternatives.length);
    options.push(alternatives.splice(randomIndex, 1)[0]);
  }

  options.sort(() => Math.random() - 0.5);

  options.forEach(option => {
    const button = document.createElement("button");
    button.className = "game-option";
    button.textContent = option;

    button.addEventListener("click", () => {
      container.querySelectorAll("button").forEach(btn => {
        btn.disabled = true;
      });

      const stats = readStats();
      stats.attempts++;

      if (option === item[1]) {
        stats.correct++;
        stats.xp += 5;
        $("gameFeedback").textContent = "¡Correcto! +5 XP 🎉";
        $("gameFeedback").style.color = "var(--green)";
      } else {
        $("gameFeedback").textContent = `La respuesta correcta era: ${item[1]}`;
        $("gameFeedback").style.color = "var(--red)";
      }

      saveStats(stats);
      renderStats();
    });

    container.appendChild(button);
  });
}

$("nextGame").addEventListener("click", () => {
  currentGame++;
  renderGame();
});

/* Gramática */

function renderGrammar() {
  const container = $("grammarGrid");
  container.replaceChildren();

  const topics = GRAMMAR[currentLanguage] || GRAMMAR.en;

  topics.forEach(topic => {
    const card = document.createElement("article");
    card.className = "grammar-card";

    const title = document.createElement("h3");
    title.textContent = topic[0];

    const description = document.createElement("p");
    description.textContent = topic[1];

    card.append(title, description);
    container.appendChild(card);
  });
}

/* Traductor: API MyMemory */

$("translateButton").addEventListener("click", async () => {
  const input = $("translateInput").value.trim();

  if (!input) {
    showToast("Escribe un texto para traducir.");
    return;
  }

  if (input.length > 500) {
    showToast("El texto no puede superar 500 caracteres.");
    return;
  }

  const result = $("translationResult");
  $("translateButton").disabled = true;
  $("translateButton").textContent = "Traduciendo...";
  result.textContent = "Buscando traducción...";

  const languageCodes = {
    en: "en", fr: "fr", pt: "pt", it: "it",
    de: "de", es: "es", ja: "ja", ko: "ko"
  };

  try {
    const target = languageCodes[currentLanguage];
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(input)}&langpair=es|${target}`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en el servicio");

    const data = await response.json();
    const translated = data.responseData?.translatedText;

    if (!translated) throw new Error("No se recibió traducción.");

    result.textContent = translated;
    result.lang = LANGUAGES[currentLanguage].speech;
  } catch (error) {
    result.textContent =
      "No fue posible traducir en este momento. Comprueba tu conexión e inténtalo nuevamente.";
  } finally {
    $("translateButton").disabled = false;
    $("translateButton").textContent = "Traducir →";
  }
});

$("copyTranslation").addEventListener("click", async () => {
  const text = $("translationResult").textContent;

  try {
    await navigator.clipboard.writeText(text);
    showToast("Traducción copiada.");
  } catch {
    showToast("No se pudo copiar automáticamente.");
  }
});

/* Robot de ayuda */

$("robotChatButton").addEventListener("click", () => {
  const speech = $("robotSpeech");
  speech.classList.toggle("hidden");

  speech.textContent = speech.classList.contains("hidden")
    ? ""
    : `¡Hola, ${currentUser?.name || "estudiante"}! Recuerda estudiar una lección y después realizar su evaluación. ¡Tú puedes!`;
});

/* Inicio de sesión guardado */

(function restoreSession() {
  try {
    const session = JSON.parse(localStorage.getItem("makumba_session"));
    const users = JSON.parse(localStorage.getItem("makumba_users") || "{}");

    if (session && users[session.email]) {
      currentUser = session;
      openApp();
    }
  } catch (error) {
    localStorage.removeItem("makumba_session");
  }
})();
