// Todo el texto del CV vive aquí, en ambos idiomas.
// Los elementos con data-t="clave" toman textos[idioma].clave; las listas se generan abajo.
let idiomaActual = 'es';

const STACK = {
    es: [
        ['Android', ['Java', 'Android SDK', 'Gradle', 'ADB / Logcat', 'Android Studio', 'Firma y releases de APK']],
        ['Web / Backend', ['PHP · Laravel', 'Blade · Alpine.js', 'JavaScript', 'React', 'Angular', 'Node.js', 'HTML5 · CSS3']],
        ['Datos', ['MySQL / MariaDB', 'MongoDB', 'SQL']],
        ['Scripting y otros', ['Python', 'PowerShell', 'Bash', 'Luau (Roblox)', 'Arduino']],
        ['Herramientas', ['Git · GitHub', 'PHPUnit', 'Ollama (LLM local)', 'VS Code', 'NetBeans']]
    ],
    en: [
        ['Android', ['Java', 'Android SDK', 'Gradle', 'ADB / Logcat', 'Android Studio', 'APK signing & releases']],
        ['Web / Backend', ['PHP · Laravel', 'Blade · Alpine.js', 'JavaScript', 'React', 'Angular', 'Node.js', 'HTML5 · CSS3']],
        ['Data', ['MySQL / MariaDB', 'MongoDB', 'SQL']],
        ['Scripting & other', ['Python', 'PowerShell', 'Bash', 'Luau (Roblox)', 'Arduino']],
        ['Tools', ['Git · GitHub', 'PHPUnit', 'Ollama (local LLM)', 'VS Code', 'NetBeans']]
    ]
};

const PROYECTOS = {
    es: [
        {
            titulo: 'Aura · Launcher para TV Box Android',
            tags: ['Android nativo · Java', 'Open source', '2026'],
            link: 'github.com/jorgejbz/Aura-TVBox-Launcher',
            items: [
                'Desarrollé un <b>launcher Android nativo</b> estilo Apple TV en Java, sin librerías externas: APK de ~57 KB, compatible desde Android 5.0 y cualquier arquitectura, navegable con control remoto (D-pad) en 720p, 1080p y 4K.',
                'Implementé favoritas persistentes, un <b>servicio de accesibilidad</b> para reasignar los botones del control y una tarjeta de sistema que muestra la RAM, el almacenamiento y la versión <b>reales</b> del equipo.',
                'Creé un <b>puente HDMI-CEC</b> en Java (<code>app_process</code>) que permite usar el control de la TV cuando el firmware bloquea sus teclas; latencia medida de <b>2–4 ms</b>.',
                'Automaticé con <b>PowerShell + ADB</b> el diagnóstico, respaldo y limpieza de TV Box: detecté un ADB falso, firmware que falsificaba versión y RAM, una <b>puerta trasera root</b>, un proxy residencial e instaladores ocultos, y limpié dos equipos reales.'
            ]
        },
        {
            titulo: 'GTS Launcher · Launcher para pantallas Android de auto',
            tags: ['Android nativo · Java', 'Open source', 'v1.2 · 2026'],
            link: 'github.com/jorgejbz/GTS-Launcher',
            items: [
                'Launcher ligero (~100 KB, Android 8.0+) para estéreos Android de auto, con botones grandes para usarse manejando: CarPlay, Android Auto, radio y Bluetooth; el acceso conectado se amplía solo.',
                'Panel del vehículo con velocidad (CANBUS del auto o GPS como respaldo), hora y control de música mediante el servicio de notificaciones; temas configurables con vista previa.',
                'Integración con servicios del fabricante (Topway TS10/TS18): voltaje de batería y estado de luces leídos de la MCU, datos CANBUS y fuente de audio activa.',
                '<b>Actualización desde la propia app</b> vía GitHub Releases (3 versiones publicadas); sin root, sin rastreo y sin pedir permisos innecesarios.'
            ]
        },
        {
            titulo: 'Nutrilife · Clínica de nutrición digital',
            tags: ['Laravel + MySQL + Android', 'Equipo de 5', 'UTJ 2026'],
            link: 'github.com/jorgejbz/nutrilife',
            items: [
                'Plataforma con <b>app web</b> para el nutriólogo (Laravel 13, Blade, AdminLTE, Alpine.js) y <b>app Android nativa</b> para el paciente, conectadas a una misma base de datos MySQL en la nube.',
                'Expediente clínico, agenda de citas, seguimiento de peso/IMC/medidas y <b>dietas por equivalentes</b> (tabla INCAP, lógica SMAE).',
                '<b>Motor nutricional</b> con fórmulas Mifflin-St Jeor y Harris-Benedict, y alertas por alergias y patologías.',
                'Roles de acceso, control de versiones en GitHub y <b>pruebas automáticas con PHPUnit</b>; modelo de negocio SaaS por suscripción con 3 planes.'
            ]
        },
        {
            titulo: 'OptiRuta · Sistema para ópticas con venta en ruta',
            tags: ['Laravel 12 · PHP', 'API REST', '2026'],
            link: 'github.com/jorgejbz/optiRutaSistemaWeb',
            items: [
                'Sistema web para una óptica que vende en ruta: clientes, armazones, pedidos, cobros y anticipos, inventario con historial de movimientos, proveedores, personal por roles y rutas de venta.',
                '<b>API REST con Laravel Sanctum</b> para la app Android de los vendedores: sincroniza clientes y pedidos capturados en campo, con validación, transacciones y <b>UUID para no duplicar</b> pedidos cuando la app reintenta.',
                'Cada pedido genera un <b>código QR</b> con su estado, el cobrador asignado y la ubicación del cliente en Google Maps.'
            ]
        },
        {
            titulo: 'RUSH Sports Bar · Sitio web para cliente',
            tags: ['Laravel 11 · Bootstrap 5', 'Cliente real', '2026'],
            items: [
                'Rediseño del sitio de un sports bar en Zapopan: levanté los requerimientos con el cliente y armé la propuesta; 6 secciones (eventos, menú, club F1, ubicación con mapa, etc.), diseño responsivo y WhatsApp en todas las páginas.',
                '<b>Calendario de F1 automático</b> desde la API de api-sports.io, con caché de 6 horas, tarea programada y calendario de respaldo si la API falla.',
                '<b>Panel de administración</b> (AdminLTE) con acceso protegido para editar el menú (nombre, precio y foto) sin tocar código; el botón "Apartar mesa" abre WhatsApp con el evento y la fecha ya escritos.'
            ]
        },
        {
            titulo: 'Bomb Rush · Juego multijugador',
            tags: ['Roblox · Luau', '2026'],
            items: [
                'Juego de quemados con bombas: modos y matchmaking, rondas, monedas, mascotas, tienda y mejoras, con <b>guardado de progreso en DataStore</b> e interfaz adaptada a móvil.',
                '<b>Lógica autoritativa en el servidor</b>: valida cada evento del cliente (lanzamientos, atrapadas, compras) para evitar trampas.',
                'Plan de pruebas propio con varios clientes: fuzzing de eventos remotos (todos rechazados), 2 arenas simultáneas, desconexiones, persistencia entre sesiones, <b>0 errores con 4 clientes</b> y sin fugas de memoria.'
            ]
        },
        {
            titulo: 'JARVIS · Asistente de voz local',
            tags: ['Python · Ollama · LLM', '2026'],
            items: [
                'Asistente de voz en español para Windows que funciona <b>sin nube</b>: reconocimiento de voz, LLM local (Gemma vía Ollama) y síntesis de voz, con 34 herramientas validadas (memoria, búsqueda web, archivos).',
                'Diseñé una evaluación propia: la precisión subió de <b>17/32 a 30–32/32</b> tras rediseñar el intérprete y el verificador; 77 pruebas unitarias.'
            ]
        }
    ],
    en: [
        {
            titulo: 'Aura · Android TV Box Launcher',
            tags: ['Native Android · Java', 'Open source', '2026'],
            link: 'github.com/jorgejbz/Aura-TVBox-Launcher',
            items: [
                'Built a <b>native Android launcher</b> in the style of Apple TV, in Java with no external libraries: ~57 KB APK, Android 5.0+ on any CPU architecture, fully navigable with a remote (D-pad) at 720p, 1080p and 4K.',
                'Implemented persistent favorites, an <b>accessibility service</b> to remap remote buttons, and a system card that shows the device\'s <b>real</b> RAM, storage and Android version.',
                'Created an <b>HDMI-CEC bridge</b> in Java (<code>app_process</code>) so the TV remote works when the firmware blocks its keys; measured latency of <b>2–4 ms</b>.',
                'Automated TV box diagnosis, backup and cleanup with <b>PowerShell + ADB</b>: found a fake ADB, firmware spoofing its version and RAM, a <b>root backdoor</b>, a residential proxy and hidden installers, and cleaned two real devices.'
            ]
        },
        {
            titulo: 'GTS Launcher · Android car head-unit launcher',
            tags: ['Native Android · Java', 'Open source', 'v1.2 · 2026'],
            link: 'github.com/jorgejbz/GTS-Launcher',
            items: [
                'Lightweight launcher (~100 KB, Android 8.0+) for Android car stereos, with large buttons designed for driving: CarPlay, Android Auto, radio and Bluetooth; the connected shortcut expands automatically.',
                'Vehicle panel with speed (car CANBUS, GPS as fallback), clock and media controls through the notification listener; configurable themes with live preview.',
                'Integration with manufacturer services (Topway TS10/TS18): battery voltage and light status read from the MCU, CANBUS data and active audio source.',
                '<b>In-app updates</b> via GitHub Releases (3 versions published); no root, no tracking and no unnecessary permissions.'
            ]
        },
        {
            titulo: 'Nutrilife · Digital nutrition clinic',
            tags: ['Laravel + MySQL + Android', 'Team of 5', 'UTJ 2026'],
            link: 'github.com/jorgejbz/nutrilife',
            items: [
                'Platform with a <b>web app</b> for nutritionists (Laravel 13, Blade, AdminLTE, Alpine.js) and a <b>native Android app</b> for patients, sharing one cloud MySQL database.',
                'Clinical records, appointment scheduling, weight/BMI/measurement tracking and <b>exchange-based meal plans</b> (INCAP table, SMAE logic).',
                '<b>Nutrition engine</b> using Mifflin-St Jeor and Harris-Benedict equations, with alerts for allergies and medical conditions.',
                'Role-based access, Git/GitHub version control and <b>automated tests with PHPUnit</b>; subscription SaaS business model with 3 plans.'
            ]
        },
        {
            titulo: 'OptiRuta · Field-sales system for optical stores',
            tags: ['Laravel 12 · PHP', 'REST API', '2026'],
            link: 'github.com/jorgejbz/optiRutaSistemaWeb',
            items: [
                'Web system for an optical business that sells door to door: customers, frames, orders, payments and down payments, inventory with movement history, suppliers, role-based staff and sales routes.',
                '<b>REST API with Laravel Sanctum</b> for the sales reps\' Android app: syncs customers and orders captured in the field, with validation, transactions and <b>UUIDs to avoid duplicate</b> orders when the app retries.',
                'Each order generates a <b>QR code</b> showing its status, the assigned collector and a link to the customer\'s location on Google Maps.'
            ]
        },
        {
            titulo: 'RUSH Sports Bar · Client website',
            tags: ['Laravel 11 · Bootstrap 5', 'Real client', '2026'],
            items: [
                'Website redesign for a sports bar in Zapopan: gathered requirements with the client and prepared the proposal; 6 sections (events, menu, F1 club, location with map, etc.), responsive design and WhatsApp on every page.',
                '<b>Automatic F1 calendar</b> from the api-sports.io API, with a 6-hour cache, a scheduled task and a fallback calendar if the API fails.',
                '<b>Admin panel</b> (AdminLTE) with protected access to edit the menu (name, price and photo) without touching code; the "Book a table" button opens WhatsApp with the event and date pre-filled.'
            ]
        },
        {
            titulo: 'Bomb Rush · Multiplayer game',
            tags: ['Roblox · Luau', '2026'],
            items: [
                'Bomb dodgeball game: modes and matchmaking, rounds, coins, pets, shop and upgrades, with <b>progress saved in DataStore</b> and a mobile-friendly UI.',
                '<b>Server-authoritative logic</b>: every client event (throws, catches, purchases) is validated to prevent cheating.',
                'Own multi-client test plan: remote-event fuzzing (all rejected), 2 concurrent arenas, disconnects, cross-session persistence, <b>0 errors with 4 clients</b> and no memory leaks.'
            ]
        },
        {
            titulo: 'JARVIS · Local voice assistant',
            tags: ['Python · Ollama · LLM', '2026'],
            items: [
                'Spanish-language voice assistant for Windows that runs <b>offline</b>: speech recognition, a local LLM (Gemma via Ollama) and text-to-speech, with 34 validated tools (memory, web search, files).',
                'Designed my own evaluation: accuracy went from <b>17/32 to 30–32/32</b> after redesigning the interpreter and verifier; 77 unit tests.'
            ]
        }
    ]
};

const textos = {
    es: {
        profesion: 'Desarrollador de Software · Android y Full Stack',
        summaryTitle: 'Perfil profesional',
        summary: 'Desarrollador de software (TSU en Ingeniería en Software, UTJ) con proyectos reales en <b>Android nativo</b>, <b>web full stack</b> y videojuegos multijugador. Creé y publiqué como código abierto dos launchers Android: <b>Aura</b>, para TV Box, con herramientas que detectan y eliminan malware de fábrica (probado en equipos reales), y <b>GTS Launcher</b>, para pantallas de auto. Participé en <b>Nutrilife</b>, plataforma de nutrición digital con Laravel, MySQL y app Android. Diagnostico problemas a fondo (ADB, Logcat, redes), documento lo que hago y pruebo cada cambio. Busco un puesto de Desarrollador Junior (Android, web o full stack).',
        techTitle: 'Stack técnico',
        educationTitle: 'Educación',
        degree: 'TSU en Ingeniería en Software',
        eduDate: '2023 – Presente',
        eduDesc: 'Aplicaciones multiplataforma, bases de datos, arquitectura de software y administración de proyectos de TI.',
        softTitle: 'Fortalezas',
        langTitle: 'Idiomas',
        spanish: 'Español',
        english: 'Inglés',
        spanishLevel: 'Nativo',
        englishLevel: 'Técnico / B1',
        projectsTitle: 'Proyectos destacados',
        expTitle: 'Experiencia profesional',
        job1Title: 'Desarrollador Web Junior',
        job1Date: 'Dic 2024 – Abr 2025',
        otherTitle: 'Otros proyectos',
        footer: 'Referencias disponibles bajo solicitud · Código en github.com/jorgejbz',
        pdf: 'Descargar PDF'
    },
    en: {
        profesion: 'Software Developer · Android & Full Stack',
        summaryTitle: 'Professional Summary',
        summary: 'Software developer (Associate Degree in Software Engineering, UTJ) with real-world projects in <b>native Android</b>, <b>full stack web</b> and multiplayer games. Built and open-sourced two Android launchers: <b>Aura</b>, for TV boxes, with tools that detect and remove factory-installed malware (tested on real devices), and <b>GTS Launcher</b>, for car head units. Contributed to <b>Nutrilife</b>, a digital nutrition platform built with Laravel, MySQL and an Android app. I troubleshoot in depth (ADB, Logcat, networking), document my work and test every change. Seeking a Junior Developer role (Android, web or full stack).',
        techTitle: 'Technical Stack',
        educationTitle: 'Education',
        degree: 'Associate Degree (TSU) in Software Engineering',
        eduDate: '2023 – Present',
        eduDesc: 'Cross-platform applications, databases, software architecture and IT project management.',
        softTitle: 'Strengths',
        langTitle: 'Languages',
        spanish: 'Spanish',
        english: 'English',
        spanishLevel: 'Native',
        englishLevel: 'Technical / B1',
        projectsTitle: 'Featured Projects',
        expTitle: 'Professional Experience',
        job1Title: 'Junior Web Developer',
        job1Date: 'Dec 2024 – Apr 2025',
        otherTitle: 'Other Projects',
        footer: 'References available upon request · Code at github.com/jorgejbz',
        pdf: 'Download PDF'
    }
};

const LISTAS = {
    es: {
        soft: [
            'Diagnóstico y resolución de problemas',
            'Documentación clara (guías, reportes)',
            'Pruebas antes de entregar',
            'Trabajo en equipo y aprendizaje rápido'
        ],
        job1List: [
            'Rediseñé y optimicé el sitio web corporativo: diseño responsivo para móviles y mejor velocidad de carga.',
            'Integré información de nuevos productos y actualicé el contenido.',
            'Colaboré con equipos internos para mejorar la presencia digital.'
        ],
        other: [
            '<b>Sistema de inventarios</b> (Laravel + MySQL): CRUD de productos, autenticación de usuarios y diseño de base de datos relacional.',
            '<b>Tolva automatizada IoT</b> (Arduino): sensores ultrasónicos e infrarrojos, datos en tiempo real en pantalla LCD.'
        ]
    },
    en: {
        soft: [
            'Troubleshooting and problem solving',
            'Clear documentation (guides, reports)',
            'Testing before delivery',
            'Teamwork and fast learning'
        ],
        job1List: [
            'Redesigned and optimized the corporate website: responsive mobile design and faster loading.',
            'Added new product information and updated content.',
            'Collaborated with internal teams to strengthen the digital presence.'
        ],
        other: [
            '<b>Inventory management system</b> (Laravel + MySQL): product CRUD, user authentication and relational database design.',
            '<b>IoT automated hopper</b> (Arduino): ultrasonic and infrared sensors, real-time data on an LCD screen.'
        ]
    }
};

function llenarLista(id, items) {
    const ul = document.getElementById(id);
    ul.innerHTML = '';
    items.forEach(t => {
        const li = document.createElement('li');
        li.innerHTML = t;
        ul.appendChild(li);
    });
}

function cambiarIdioma(idioma) {
    const t = textos[idioma];
    document.documentElement.lang = idioma;

    document.querySelectorAll('[data-t]').forEach(el => {
        el.innerHTML = t[el.dataset.t];
    });

    // Stack por categorías
    const stack = document.getElementById('stack');
    stack.innerHTML = STACK[idioma].map(([cat, items]) =>
        `<div class="stack-group"><h4>${cat}</h4><ul class="tech-stack">` +
        items.map(i => `<li>${i}</li>`).join('') + '</ul></div>'
    ).join('');

    // Proyectos
    document.getElementById('projects').innerHTML = PROYECTOS[idioma].map(p => `
        <div class="project">
            <div class="project-header">
                <h3>${p.titulo}</h3>
                ${p.tags.map(tag => `<span class="project-context">${tag}</span>`).join('')}
            </div>
            ${p.link ? `<a class="project-link" href="https://${p.link}">${p.link}</a>` : ''}
            <ul>${p.items.map(i => `<li>${i}</li>`).join('')}</ul>
        </div>`).join('');

    llenarLista('soft', LISTAS[idioma].soft);
    llenarLista('job1List', LISTAS[idioma].job1List);
    llenarLista('other', LISTAS[idioma].other);

    document.getElementById('footer').textContent =
        `${idioma === 'es' ? 'Actualizado' : 'Updated'} ${new Date().getFullYear()} · ${t.footer}`;
    document.getElementById('descargarPDF').textContent = t.pdf;
    document.title = `Jorge Juárez - CV (${idioma.toUpperCase()})`;

    idiomaActual = idioma;
}

window.addEventListener('DOMContentLoaded', () => {
    const pedido = new URLSearchParams(location.search).get('lang');
    cambiarIdioma(pedido === 'en' ? 'en' : 'es');
});

document.getElementById('cambiarIdioma').addEventListener('click', () => {
    cambiarIdioma(idiomaActual === 'es' ? 'en' : 'es');
});
