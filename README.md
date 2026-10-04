# Mi semana

Web estática en español para una rutina de siete días. Sin dependencias ni backend.

- Ejercicios con ilustraciones originales generadas con imagegen.
- Checks semanales guardados en el navegador.
- Temporizador de descanso y ejercicio con pausa, reinicio, duración editable y señal sonora (si el navegador permite audio).
- El contador calcula el tiempo con una hora de finalización: sigue al recargar, cerrar o cambiar de día. El sonido necesita la página abierta.
- Editor de ejercicios, series, instrucciones, imagen de referencia y tiempos.
- Diseño móvil y escritorio.

La semana incluida es una fase inicial PPL de 3 semanas para alguien que empieza o retoma y refiere dolor lumbar al hacer sentadillas. Se usa el equipo mostrado: mancuernas, banco, poleas y caminadora. No es un protocolo de rehabilitación ni una copia de la rutina original de Arnold o Ronnie. Las ilustraciones son orientativas. Referencia de técnica: [ACSM](https://acsm.org/resistance-training-guidelines-update-2026/) y [CDC](https://www.cdc.gov/physical-activity-basics/adding-adults/index.html).

## Ejecutar

`python3 -m http.server 8765`

Abrir http://localhost:8765. Publicación: GitHub Pages desde `main`, raíz.

Los datos se guardan en localStorage por navegador; no se sincronizan entre dispositivos. Los checks se separan por semana (lunes a domingo). La rutina editada se conserva entre semanas.

## Imágenes

`assets/exercise-0.webp` a `assets/exercise-13.webp` son recortes de un atlas original generado con la herramienta integrada imagegen. Prompt: atlas educativo de 4 columnas × 3 filas, dos posiciones por ejercicio, sin texto, persona con ropa azul, fondo gris azulado; sentadilla, flexión en pared, puente, bird dog, zancada atrás, elevación de talones, dead bug, plancha, marcha, caminata, gato–vaca y postura del niño.

Atlas de gimnasio: sentadilla goblet, press de pecho, remo en polea, peso muerto rumano, jalón al pecho, press de hombros, elevaciones laterales, tríceps en polea, curl de bíceps, zancada atrás, caminadora y dead bug. Movilidad conservada del primer atlas. Imágenes ampliables desde cada tarjeta.

## Personaje personalizado

Las tarjetas usan `assets/chibi-0.webp` a `assets/chibi-13.webp`, generadas con imagegen a partir de una referencia personal: pelo corto, barba, tatuajes, contextura robusta y shorts negros. Prompt: personaje adulto chibi consistente, dos poses por ejercicio, equipamiento visible, fondo gris azulado, flechas de movimiento, sin texto; misma lista de 12 ejercicios de gimnasio más gato–vaca y postura del niño. La foto original no se publica. Las ilustraciones son orientativas y no sustituyen una demostración técnica.

## Guía con voz

Cada ejercicio tiene «Guiar con voz». Incluye preparación, fases con duración hablada (por ejemplo: baja en dos segundos, aguanta dos segundos, sube en dos segundos), repeticiones, series, cambio de lado y descanso automático. Los tiempos y cantidades son editables y se guardan por ejercicio. Las actividades cronometradas usan su duración. Al completar todas las series marca el ejercicio; detener antes no lo marca. Al retomar una pausa reinicia la fase actual para dar una indicación completa.

Usa SpeechSynthesis y la voz española disponible en el dispositivo; sin soporte muestra señales visuales. Requiere página abierta. Solicita Screen Wake Lock cuando está disponible; al ocultar la página pausa el ejercicio. El temporizador de descanso independiente sí conserva la hora al cerrar. No se garantiza voz con pantalla bloqueada. El tempo es una guía de control editable, no una velocidad óptima universal de hipertrofia. No bloquees la respiración durante las pausas.

Verificación: reloj de prueba en Chrome comprobó fases de dos segundos, indicaciones enviadas a síntesis de voz, pausa, descanso de dos segundos, segunda serie, check automático y ancho móvil. La reproducción audible depende del dispositivo y su voz instalada.

## Registro de cargas

«Registrar peso» en los ejercicios de fuerza abre un registro con fecha, peso decimal en kg y repeticiones realizadas por serie, notas e historial editable. Distingue kg por mancuerna, kg totales incluyendo barra, kg indicados por polea y sin peso añadido. El último peso sirve como referencia; las repeticiones nuevas se dejan vacías para anotar lo realmente realizado. Un registro puede editarse sin duplicarlo; «Nuevo registro» crea otra sesión. El historial reúne ejercicios con el mismo nombre e ilustración entre días, y conserva la asociación con el ejercicio original si se renombra.

Datos en `localStorage` (`rutina-training-log-v1`), solo en el navegador actual; sin sincronización ni copia en GitHub. No borrar los datos del navegador si se desea conservar el registro. La interfaz confirma el guardado únicamente si la escritura tuvo éxito.

Verificado en Chrome móvil: series con pesos decimales y repeticiones distintas, persistencia al recargar, edición sin duplicados, historial compartido entre días, nuevo registro y peso corporal.


## Plan actual: PPL de inicio

- Lunes Push: press plano 3×8–12, press de hombros sentado 2×8–12, laterales 2×12–15, tríceps en polea 2×10–15; 10 min de cardio.
- Martes: 20 min de caminata conversacional.
- Miércoles Pull: jalón 3×8–12, remo sentado 3×10–12, curl 2×10–15; 10 min de cardio.
- Jueves: 20 min de caminata.
- Viernes Legs provisional: split squat con apoyo sin peso 2×8–10 por lado, puente sin peso 2×10–15 y gemelos con apoyo 3×12–15. Solo si son tolerados sin dolor; omitir cualquier movimiento provocador. Sin sentadilla cargada ni RDL mientras se revisa la molestia lumbar.
- Sábado: 25 min de caminata.
- Domingo: descanso, sin checks obligatorios.

5 min de calentamiento en días de pesas; series ligeras de aproximación antes del primer compuesto, sin contarlas como trabajo. Descansos 120 s en compuestos, 90 s en accesorios y 60 s en gemelos. Reservar 3 repeticiones las primeras dos semanas y después 2. Se inicia con poco volumen para conocer tolerancia y técnica; no se presenta como volumen máximo de hipertrofia. Cada grupo tiene una sesión semanal en esta fase introductoria. Evaluar tras tres semanas antes de aumentar frecuencia o volumen.

Doble progresión: máximo del rango en todas las series durante dos sesiones, con técnica, reserva y sin dolor; aumentar mínimo peso disponible y regresar al extremo inferior. Piernas siguen sin carga hasta revisar el dolor. Cardio inicial 85 min/semana más calentamientos; aumentar 5 min en una caminata por semana si hay buena tolerancia, hacia 150 min.

Tempo de guía: bajada 3 s y subida 2 s en press plano y split squat; otros movimientos concéntrico 2 s y retorno 3 s. Pausas de 1 s en jalón, remo, puente y gemelos; 0 en los otros. Tiempos editables; no se afirma que sean óptimos universales. Guía guardada bajo nueva versión para no heredar las pausas generales de 2 s. Nueva rutina `rutina-plan-ppl-intro-v2`; versiones anteriores permanecen almacenadas, y no se elimina `rutina-training-log-v1`.

Principios de referencia: [ACSM 2026](https://acsm.org/resistance-training-guidelines-update-2026/), [cardio CDC](https://www.cdc.gov/physical-activity-basics/adding-adults/index.html), [dolor lumbar NHS](https://www.nhs.uk/conditions/back-pain/). La selección y calendario son una adaptación propia, no un plan exacto publicado por estas fuentes. Si el dolor persiste, empeora o se repite, revisar con fisioterapeuta.

Imágenes adicionales `assets/chibi-14.webp` a `chibi-16.webp`, generadas con imagegen: atlas personalizado de split squat de rango corto con apoyo, puente de glúteos en suelo y elevación de talones con apoyo; dos posiciones completas, sin texto, mismo personaje y fondo. Archivo de atlas /private/tmp/rutina-chibi-legs.png utilizado solo durante integración.

Verificación Chrome: nueva rutina sustituye predeterminada anterior, historial previo accesible, imágenes de toda la semana, domingo vacío, ausencia de sentadilla y RDL, tempos específicos y cambio de lado, registro sin peso añadido y ancho móvil.
