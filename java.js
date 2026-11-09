document.addEventListener('DOMContentLoaded', () => {

    // =========================================
    // 1. ELEMENTOS HTML
    // =========================================

    const $ = id => document.getElementById(id);

    const idioma = $('idioma');
    const fraseObjetivo = $('fraseObjetivo');
    const traduccion = $('traduccion');
    const escuchar = $('escuchar');
    const nuevoEjercicio = $('nuevoEjercicio');

    const grabar = $('grabar');
    const estadoMicrofono = $('estadoMicrofono');
    const resultado = $('resultado');
    const puntuacion = $('puntuacion');
    const mensajeResultado = $('mensajeResultado');
    const textoEsperado = $('textoEsperado');
    const textoReconocido = $('textoReconocido');

    const burbuja = $('burbuja');
    const personaje = $('personaje');
    const instruccion = $('instruccion');
    const ejecutar = $('ejecutar');
    const estado = $('estado');

    const totalPracticas = $('totalPracticas');
    const mejorPuntuacion = $('mejorPuntuacion');
    const palabrasCorrectas = $('palabrasCorrectas');
    const consejoMakumba = $('consejoMakumba');
    const numeroEjercicio = $('numeroEjercicio');

    // Traductor
    const idiomaOrigen = $('idiomaOrigen');
    const idiomaDestino = $('idiomaDestino');
    const textoOriginal = $('textoOriginal');
    const textoTraducido = $('textoTraducido');
    const traducirTexto = $('traducirTexto');
    const escucharTraduccion = $('escucharTraduccion');
    const copiarTraduccion = $('copiarTraduccion');
    const contadorTexto = $('contadorTexto');
    const estadoTraduccion = $('estadoTraduccion');

    // =========================================
    // 2. EJERCICIOS POR IDIOMA
    // =========================================

    const ejercicios = {
        'en-US': [
            { frase: 'Hello, how are you?', traduccion: 'Hola, ¿cómo estás?' },
            { frase: 'My name is John.', traduccion: 'Mi nombre es John.' },
            { frase: 'I want to learn English.', traduccion: 'Quiero aprender inglés.' },
            { frase: 'Where is the nearest restaurant?', traduccion: '¿Dónde está el restaurante más cercano?' },
            { frase: 'I would like a glass of water.', traduccion: 'Me gustaría un vaso de agua.' },
            { frase: 'Nice to meet you.', traduccion: 'Mucho gusto en conocerte.' },
            { frase: 'Could you help me, please?', traduccion: '¿Podrías ayudarme, por favor?' },
            { frase: 'I am practicing my pronunciation.', traduccion: 'Estoy practicando mi pronunciación.' }
        ],

        'es-ES': [
            { frase: 'Hola, ¿cómo estás?', traduccion: 'Hello, how are you?' },
            { frase: 'Me gusta aprender cosas nuevas.', traduccion: 'I like learning new things.' },
            { frase: 'Buenos días, mucho gusto.', traduccion: 'Good morning, nice to meet you.' },
            { frase: '¿Dónde está la estación?', traduccion: 'Where is the station?' },
            { frase: 'Quiero mejorar mi pronunciación.', traduccion: 'I want to improve my pronunciation.' }
        ],

        'fr-FR': [
            { frase: 'Bonjour, comment allez-vous?', traduccion: 'Hola, ¿cómo está usted?' },
            { frase: 'Je voudrais apprendre le français.', traduccion: 'Me gustaría aprender francés.' },
            { frase: 'Comment tu t’appelles?', traduccion: '¿Cómo te llamas?' },
            { frase: 'Merci beaucoup pour votre aide.', traduccion: 'Muchas gracias por su ayuda.' },
            { frase: 'Je suis très heureux.', traduccion: 'Estoy muy feliz.' }
        ],

        'pt-BR': [
            { frase: 'Olá, como você está?', traduccion: 'Hola, ¿cómo estás?' },
            { frase: 'Eu quero aprender português.', traduccion: 'Quiero aprender portugués.' },
            { frase: 'Muito prazer em conhecer você.', traduccion: 'Mucho gusto en conocerte.' },
            { frase: 'Onde fica o restaurante?', traduccion: '¿Dónde queda el restaurante?' },
            { frase: 'Eu gosto de estudar idiomas.', traduccion: 'Me gusta estudiar idiomas.' }
        ]
    };

    // =========================================
    // 3. ESTADÍSTICAS
    // =========================================

    function cargarEstadisticas() {
        try {
            const datos = JSON.parse(
                localStorage.getItem('makumbaEstadisticas')
            );

            return {
                practicas: Number(datos?.practicas) || 0,
                mejor: Number(datos?.mejor) || 0,
                palabras: Number(datos?.palabras) || 0
            };
        } catch (error) {
            return {
                practicas: 0,
                mejor: 0,
                palabras: 0
            };
        }
    }

    let estadisticas = cargarEstadisticas();

    function actualizarEstadisticas() {
        totalPracticas.textContent = estadisticas.practicas;
        mejorPuntuacion.textContent = estadisticas.mejor + '%';
        palabrasCorrectas.textContent = estadisticas.palabras;
    }

    function guardarEstadisticas() {
        try {
            localStorage.setItem(
                'makumbaEstadisticas',
                JSON.stringify(estadisticas)
            );
        } catch (error) {
            console.error('No se pudieron guardar las estadísticas.', error);
        }
    }

    actualizarEstadisticas();

    // =========================================
    // 4. VOZ DE MAKUMBA
    // =========================================

    let temporizadorVoz;

    function hablar(texto, idiomaVoz = idioma.value) {

        if (!('speechSynthesis' in window)) {
            estado.textContent =
                'Tu navegador no admite reproducción de voz.';
            return;
        }

        if (!texto || !texto.trim()) return;

        window.speechSynthesis.cancel();

        burbuja.textContent = texto;
        burbuja.classList.add('visible');

        personaje.classList.add('hablando');

        const mensaje = new SpeechSynthesisUtterance(texto);

        mensaje.lang = idiomaVoz;
        mensaje.rate = 0.88;
        mensaje.pitch = 1.05;
        mensaje.volume = 1;

        mensaje.onstart = () => {
            personaje.classList.add('hablando');
            estado.textContent = 'Makumba está hablando...';
        };

        mensaje.onend = () => {
            personaje.classList.remove('hablando');
            estado.textContent = 'Makumba está preparado.';
        };

        mensaje.onerror = event => {
            personaje.classList.remove('hablando');
            estado.textContent =
                'Error al reproducir la voz: ' + event.error;
        };

        clearTimeout(temporizadorVoz);

        temporizadorVoz = setTimeout(() => {
            window.speechSynthesis.speak(mensaje);
        }, 100);
    }

    // =========================================
    // 5. EJERCICIOS
    // =========================================

    let ejercicioActual = 0;

    function mostrarEjercicio() {

        const lista = ejercicios[idioma.value];
        const ejercicio = lista[ejercicioActual];

        fraseObjetivo.textContent = ejercicio.frase;
        traduccion.textContent = ejercicio.traduccion;

        numeroEjercicio.textContent =
            'EJERCICIO ' +
            String(ejercicioActual + 1).padStart(2, '0');

        textoEsperado.textContent = ejercicio.frase;

        resultado.classList.remove('visible');

        estadoMicrofono.textContent = 'Esperando tu voz...';

        consejoMakumba.textContent =
            'Escucha la frase y presta atención a cómo se pronuncia.';
    }

    function cambiarEjercicio() {

        const lista = ejercicios[idioma.value];

        let nuevo = ejercicioActual;

        if (lista.length > 1) {
            while (nuevo === ejercicioActual) {
                nuevo = Math.floor(Math.random() * lista.length);
            }
        }

        ejercicioActual = nuevo;

        mostrarEjercicio();

        hablar(
            '¡Vamos con un nuevo ejercicio! Escucha la frase y repítela.'
        );
    }

    nuevoEjercicio.addEventListener('click', cambiarEjercicio);

    idioma.addEventListener('change', () => {

        ejercicioActual = 0;

        mostrarEjercicio();

        hablar('Has cambiado el idioma. ¡Vamos a practicar!');
    });

    escuchar.addEventListener('click', () => {

        hablar(fraseObjetivo.textContent, idioma.value);

        estadoMicrofono.textContent =
            'Escucha atentamente la pronunciación.';
    });

    // =========================================
    // 6. RECONOCIMIENTO DE VOZ
    // =========================================

    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    let reconocimiento = null;
    let grabando = false;

    if (SpeechRecognition) {

        reconocimiento = new SpeechRecognition();

        reconocimiento.continuous = false;
        reconocimiento.interimResults = false;
        reconocimiento.maxAlternatives = 3;

        reconocimiento.onstart = () => {

            grabando = true;

            grabar.classList.add('recording');

            estadoMicrofono.textContent =
                '🎙️ Te estoy escuchando. Habla ahora...';

            personaje.classList.add('escuchando');

            burbuja.textContent = '¡Te estoy escuchando!';
            burbuja.classList.add('visible');
        };

        reconocimiento.onresult = event => {

            const alternativas = event.results[0];

            let texto = alternativas[0].transcript;
            let confianza = alternativas[0].confidence || 0;

            for (let i = 1; i < alternativas.length; i++) {

                const otraConfianza =
                    alternativas[i].confidence || 0;

                if (otraConfianza > confianza) {
                    texto = alternativas[i].transcript;
                    confianza = otraConfianza;
                }
            }

            evaluarPronunciacion(texto);
        };

        reconocimiento.onerror = event => {

            const errores = {
                'not-allowed': 'Debes permitir el acceso al micrófono.',
                'service-not-allowed': 'El navegador bloqueó el reconocimiento de voz.',
                'no-speech': 'No detecté tu voz. Inténtalo nuevamente.',
                'audio-capture': 'No se encontró un micrófono disponible.',
                'network': 'Error de conexión al reconocer tu voz.',
                'language-not-supported': 'Este idioma no está disponible para el reconocimiento.'
            };

            const mensaje = errores[event.error] ||
                'Ocurrió un problema con el micrófono: ' + event.error;

            estadoMicrofono.textContent = mensaje;

            burbuja.textContent = mensaje;
            burbuja.classList.add('visible');
        };

        reconocimiento.onend = () => {

            grabando = false;

            grabar.classList.remove('recording');

            personaje.classList.remove('escuchando');
        };

    } else {

        grabar.disabled = true;

        estadoMicrofono.textContent =
            'Tu navegador no admite reconocimiento de voz. Prueba con Chrome o Edge.';
    }

    grabar.addEventListener('click', () => {

        if (!reconocimiento) {
            estadoMicrofono.textContent =
                'El reconocimiento de voz no está disponible.';
            return;
        }

        if (grabando) {
            reconocimiento.stop();
            return;
        }

        if (!window.isSecureContext) {
            estadoMicrofono.textContent =
                'Abre la página mediante Live Server o una conexión HTTPS.';
            return;
        }

        window.speechSynthesis.cancel();

        personaje.classList.remove('hablando');

        reconocimiento.lang = idioma.value;

        try {
            reconocimiento.start();
        } catch (error) {
            estadoMicrofono.textContent =
                'No se pudo iniciar el micrófono. Intenta nuevamente.';
            console.error(error);
        }
    });

    // =========================================
    // 7. COMPARACIÓN DE PRONUNCIACIÓN
    // =========================================

    function normalizar(texto) {

        return texto
            .toLocaleLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[’']/g, '')
            .replace(/[^\p{L}\p{N}\s]/gu, ' ')
            .replace(/\s+/g, ' ')
            .trim();
    }

    function distanciaPalabras(a, b) {

        const matriz = Array.from(
            { length: a.length + 1 },
            () => Array(b.length + 1).fill(0)
        );

        for (let i = 0; i <= a.length; i++) {
            matriz[i][0] = i;
        }

        for (let j = 0; j <= b.length; j++) {
            matriz[0][j] = j;
        }

        for (let i = 1; i <= a.length; i++) {

            for (let j = 1; j <= b.length; j++) {

                const costo = a[i - 1] === b[j - 1] ? 0 : 1;

                matriz[i][j] = Math.min(
                    matriz[i - 1][j] + 1,
                    matriz[i][j - 1] + 1,
                    matriz[i - 1][j - 1] + costo
                );
            }
        }

        return matriz[a.length][b.length];
    }

    function evaluarPronunciacion(textoUsuario) {

        const correcta = normalizar(fraseObjetivo.textContent);
        const usuario = normalizar(textoUsuario);

        const palabrasObjetivo = correcta.split(' ').filter(Boolean);
        const palabrasUsuario = usuario.split(' ').filter(Boolean);

        if (!palabrasObjetivo.length || !palabrasUsuario.length) {

            estadoMicrofono.textContent =
                'No se reconocieron palabras suficientes. Inténtalo otra vez.';

            return;
        }

        const errores = distanciaPalabras(
            palabrasObjetivo,
            palabrasUsuario
        );

        const total = Math.max(
            palabrasObjetivo.length,
            palabrasUsuario.length
        );

        const aciertos = Math.max(0, total - errores);

        const porcentaje = Math.round((aciertos / total) * 100);

        let mensaje;
        let consejo;

        if (porcentaje >= 90) {

            mensaje = '¡Excelente! Reconociste casi toda la frase.';

            consejo = '¡Muy bien! Intenta mantener ese ritmo y prueba otra frase.';

        } else if (porcentaje >= 70) {

            mensaje = '¡Buen trabajo! Vas por buen camino.';

            consejo = 'Escucha nuevamente la frase y practica las palabras que faltaron.';

        } else if (porcentaje >= 40) {

            mensaje = 'Buen intento. Todavía podemos mejorar.';

            consejo = 'Practica más despacio y presta atención a cada palabra.';

        } else {

            mensaje = 'No te preocupes. Vamos a intentarlo otra vez.';

            consejo = 'Escucha la frase varias veces antes de repetirla.';
        }

        puntuacion.textContent = porcentaje + '%';

        mensajeResultado.textContent = mensaje;

        textoEsperado.textContent = fraseObjetivo.textContent;

        textoReconocido.textContent = textoUsuario;

        resultado.classList.add('visible');

        estadoMicrofono.textContent =
            'Práctica terminada. ¡Sigue aprendiendo!';

        consejoMakumba.textContent = consejo;

        estadisticas.practicas++;

        estadisticas.mejor = Math.max(
            estadisticas.mejor,
            porcentaje
        );

        estadisticas.palabras += aciertos;

        guardarEstadisticas();
        actualizarEstadisticas();

        hablar(
            porcentaje >= 70
                ? '¡Muy bien! Sigue practicando. Lo estás haciendo genial.'
                : 'No te rindas. Escúchame otra vez y vamos a practicar juntos.'
        );
    }

    // =========================================
    // 8. CONVERSAR CON MAKUMBA
    // =========================================

    function enviarMensaje() {

        const texto = instruccion.value.trim();

        if (!texto) {
            estado.textContent = 'Primero escribe un mensaje.';
            return;
        }

        hablar(texto, idioma.value);

        instruccion.value = '';
    }

    ejecutar.addEventListener('click', enviarMensaje);

    instruccion.addEventListener('keydown', event => {

        if (event.key === 'Enter') {
            enviarMensaje();
        }
    });

    // =========================================
    // 9. TRADUCTOR DE TEXTOS
    // =========================================

    const codigosVoz = {
        es: 'es-ES',
        en: 'en-US',
        fr: 'fr-FR',
        pt: 'pt-BR'
    };

    let ultimaTraduccion = '';

    textoOriginal.addEventListener('input', () => {

        contadorTexto.textContent =
            textoOriginal.value.length + ' / 500';

        if (textoOriginal.value.length > 500) {
            textoOriginal.value = textoOriginal.value.slice(0, 500);
            contadorTexto.textContent = '500 / 500';
        }
    });

    async function traducir() {

        const texto = textoOriginal.value.trim();

        const origen = idiomaOrigen.value;
        const destino = idiomaDestino.value;

        if (!texto) {

            estadoTraduccion.textContent =
                'Primero escribe un texto.';

            textoOriginal.focus();

            return;
        }

        if (origen === destino) {

            textoTraducido.textContent = texto;
            textoTraducido.classList.remove('placeholder');

            ultimaTraduccion = texto;

            escucharTraduccion.disabled = false;
            copiarTraduccion.disabled = false;

            estadoTraduccion.textContent =
                'El idioma de origen y destino son iguales.';

            return;
        }

        traducirTexto.disabled = true;
        traducirTexto.textContent = 'Traduciendo...';

        estadoTraduccion.textContent =
            'Conectando con el servicio de traducción...';

        textoTraducido.textContent =
            'Estamos traduciendo tu texto...';

        textoTraducido.classList.add('placeholder');

        escucharTraduccion.disabled = true;
        copiarTraduccion.disabled = true;

        try {

            const parametros = new URLSearchParams({
                q: texto,
                langpair: origen + '|' + destino
            });

            const respuesta = await fetch(
                'https://api.mymemory.translated.net/get?' +
                parametros.toString()
            );

            if (!respuesta.ok) {
                throw new Error('El servicio de traducción no respondió.');
            }

            const datos = await respuesta.json();

            if (datos.responseStatus !== 200) {
                throw new Error(
                    datos.responseDetails || 'No se pudo traducir el texto.'
                );
            }

            const traduccionObtenida =
                datos.responseData?.translatedText;

            if (!traduccionObtenida) {
                throw new Error('No se recibió una traducción.');
            }

            ultimaTraduccion = traduccionObtenida;

            textoTraducido.textContent = ultimaTraduccion;
            textoTraducido.classList.remove('placeholder');

            estadoTraduccion.textContent = 'Traducción completada.';

            escucharTraduccion.disabled = false;
            copiarTraduccion.disabled = false;

        } catch (error) {

            console.error('Error del traductor:', error);

            textoTraducido.textContent =
                'No se pudo realizar la traducción. Revisa tu conexión a internet e inténtalo nuevamente.';

            textoTraducido.classList.add('placeholder');

            estadoTraduccion.textContent =
                error.message || 'Error al traducir.';

            ultimaTraduccion = '';

        } finally {

            traducirTexto.disabled = false;
            traducirTexto.textContent = '🌐 Traducir texto';
        }
    }

    traducirTexto.addEventListener('click', traducir);

    textoOriginal.addEventListener('keydown', event => {

        if (event.ctrlKey && event.key === 'Enter') {
            traducir();
        }
    });

    // =========================================
    // 10. ESCUCHAR LA TRADUCCIÓN
    // =========================================

    escucharTraduccion.addEventListener('click', () => {

        if (!ultimaTraduccion) return;

        const idiomaVoz = codigosVoz[idiomaDestino.value] || 'en-US';

        hablar(ultimaTraduccion, idiomaVoz);
    });

    // =========================================
    // 11. COPIAR LA TRADUCCIÓN
    // =========================================

    copiarTraduccion.addEventListener('click', async () => {

        if (!ultimaTraduccion) return;

        try {

            await navigator.clipboard.writeText(ultimaTraduccion);

            estadoTraduccion.textContent =
                '¡Traducción copiada al portapapeles!';

        } catch (error) {

            estadoTraduccion.textContent =
                'No se pudo copiar. Selecciona el texto y cópialo manualmente.';
        }
    });

    // =========================================
    // 12. INTERCAMBIAR IDIOMAS
    // =========================================

    idiomaOrigen.addEventListener('change', () => {

        ultimaTraduccion = '';

        escucharTraduccion.disabled = true;
        copiarTraduccion.disabled = true;

        textoTraducido.textContent =
            'Tu traducción aparecerá aquí...';

        textoTraducido.classList.add('placeholder');
        estadoTraduccion.textContent = 'Esperando texto';
    });

    idiomaDestino.addEventListener('change', () => {

        ultimaTraduccion = '';

        escucharTraduccion.disabled = true;
        copiarTraduccion.disabled = true;

        textoTraducido.textContent =
            'Tu traducción aparecerá aquí...';

        textoTraducido.classList.add('placeholder');
        estadoTraduccion.textContent = 'Esperando texto';
    });

    // =========================================
    // 13. NAVEGACIÓN
    // =========================================

    document.querySelectorAll('.nav-link').forEach(link => {

        link.addEventListener('click', () => {

            document.querySelectorAll('.nav-link').forEach(item => {
                item.classList.remove('active');
            });

            link.classList.add('active');
        });
    });

    // =========================================
    // 14. INICIAR MAKUMBA
    // =========================================

    mostrarEjercicio();

    estado.textContent = 'Makumba está preparado.';

    burbuja.textContent =
        '¡Hola! Soy Makumba. Pulsa escuchar o habla conmigo.';

    burbuja.classList.add('visible');

});