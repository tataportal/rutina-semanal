# Mi semana

Web estática en español para entrenar, publicada en https://tataportal.github.io/rutina-semanal/.

Checks semanales, descansos persistentes, guía de voz por fases y registro editable de peso/repeticiones por serie. Datos en localStorage del navegador, sin sincronización entre dispositivos. El contador de descanso se reconstruye al volver; la guía de voz necesita la página visible y se pausa al ocultarla. Las ilustraciones chibi son originales, generadas con imagegen; la foto de referencia no se publica.

## Programación de hipertrofia

PPL A/B: lunes Push A, martes Pull A, miércoles Legs A, jueves Push B, viernes Pull B, sábado Legs B; domingo recuperación. Cada día de fuerza tiene un primer turno de musculación y un segundo de caminata conversacional de 15 minutos. Domingo, 20 minutos de caminata opcional. Aumentar cardio gradualmente según tolerancia hacia 150 minutos semanales.

Volumen objetivo, tras adaptación:

- Push A: press plano 3×8–12, inclinado 2×10–12, hombro sentado 2×8–12, laterales 2×12–20, tríceps polea 2×10–15.
- Pull A: jalón 3×8–12, remo con pecho apoyado 3×8–12, pájaros con apoyo 2×12–20, curl 2×10–15, martillo 2×10–15.
- Legs A: split squat con apoyo 3×8–12 por lado, zancada atrás 2×10–12 por lado, curl deslizante 3×6–10, puente con mancuerna 2×10–15, gemelos con apoyo 3×12–20.
- Push B: inclinado 3×8–12, plano 2×10–12, laterales 2×12–20, extensión de tríceps sentado 2×10–15, tríceps polea 1×12–15.
- Pull B: remo con apoyo 3×8–12, jalón 2×10–12, pájaros con apoyo 2×12–20, curl 3×10–15.
- Legs B: zancada atrás 3×8–12 por lado, split squat con apoyo 2×10–12 por lado, puente con mancuerna 2×10–15, curl deslizante 3×6–10, gemelos con apoyo 3×12–20.

Esto suma 10 series directas de pecho, 11 de espalda y 10 de cuádriceps por semana; 6 de flexión de rodilla para isquios, 4 de puente para glúteos más los unilaterales y 6 de gemelos. No se cuenta cada pierna como doble volumen.

Durante las primeras dos semanas, como máximo 2 series por ejercicio y unas 3 repeticiones en reserva. Pasar gradualmente al volumen objetivo solo con buena recuperación, manteniendo unas 2 repeticiones en reserva. No aumentar carga y series a la vez. Calentar 5 minutos y hacer series ligeras de aproximación al primer compuesto. Descansos 120–150 segundos en compuestos, 90 en accesorios.

Doble progresión: alcanzar el máximo de repeticiones en todas las series durante dos sesiones con técnica y reserva; subir el menor incremento disponible y volver al extremo inferior. Empezar piernas sin carga, usar apoyo y rango tolerable. No hacer movimientos que reproduzcan dolor lumbar. No se programan sentadillas cargadas ni RDL mientras exista esa molestia; evaluación profesional si persiste o empeora. El curl deslizante requiere toallas y suelo liso, no la goma del gimnasio.

Tempos editables: generalmente 3 segundos al bajar y 2 al subir; en tirones, 2 al tirar y 3 al volver. Algunas contracciones tienen pausa de 1 segundo. La voz anuncia movimiento y duración. No se presentan estos tiempos como universalmente óptimos ni se fuerza una repetición para seguir el contador.

Los principios se basan en [ACSM 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12965823/), [CDC](https://www.cdc.gov/physical-activity-basics/adding-adults/index.html) y [NHS](https://www.nhs.uk/conditions/back-pain/). La selección es propia y adaptada al equipo mostrado, no una rutina original de Arnold o Ronnie ni rehabilitación.

## Datos e imágenes

Plan actual: `rutina-plan-hypertrophy-v4`; las versiones anteriores no se borran. Registro: `rutina-training-log-v1`; se conserva la continuidad de split squat, puente y gemelos con sus versiones anteriores. Las preferencias de guía se guardan por ejercicio y etapa de volumen.

`assets/chibi-0.webp` a `chibi-25.webp`: dos poses por ejercicio, adulto de pelo corto, barba, tatuajes y shorts negros; fondo azul claro. Imágenes ampliables, orientativas. Los nueve nuevos movimientos incluyen press inclinado, remo/pájaros con pecho apoyado, martillo, extensión de tríceps, curl deslizante, puente cargado, split squat y gemelos con apoyo.

## Ejecutar

`python3 -m http.server 8765`

GitHub Pages publica la raíz de `main`. Verificación en Chrome móvil: seis días de fuerza, dos turnos, domingo recuperación, imágenes cargadas, guía unilateral, cantidades según etapa, registro de cargas, etapa persistente y editor.

## Audio de la guía

La guía reproduce 249 clips MP3 en español generados localmente con Paulina. Usa un elemento audio con controles nativos, sin depender de voces del navegador ni de AudioContext. La primera reproducción se solicita directamente en el toque del usuario. «Probar voz» reproduce una frase; los errores se muestran y pausan la guía. Silenciar, pausar o cerrar detiene el audio. Se verifica reproducción real del elemento y avance del tiempo en Chrome y WebKit; esto no certifica la salida física del teléfono del usuario.
