# Mi semana

Web estática en español para una rutina de siete días. Sin dependencias ni backend.

- Ejercicios con ilustraciones originales generadas con imagegen.
- Checks semanales guardados en el navegador.
- Temporizador de descanso y ejercicio con pausa, reinicio, duración editable y señal sonora (si el navegador permite audio).
- El contador calcula el tiempo con una hora de finalización: sigue al recargar, cerrar o cambiar de día. El sonido necesita la página abierta.
- Editor de ejercicios, series, instrucciones, imagen de referencia y tiempos.
- Diseño móvil y escritorio.

La semana incluida es un PPL de seis sesiones de musculación repartidas en dos turnos diarios para alguien que empieza o retoma y refiere dolor lumbar al hacer sentadillas. Se usa el equipo mostrado: mancuernas, banco, poleas y caminadora. No es un protocolo de rehabilitación ni una copia de la rutina original de Arnold o Ronnie. Las ilustraciones son orientativas. Referencia de técnica: [ACSM](https://acsm.org/resistance-training-guidelines-update-2026/) y [CDC](https://www.cdc.gov/physical-activity-basics/adding-adults/index.html).

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


## Plan actual: PPL, seis días y dos turnos

Lunes Push A, martes Pull A, miércoles Legs A, jueves Push B, viernes Pull B, sábado Legs B. Domingo recuperación con caminata suave opcional. A y B repiten movimientos al inicio para aprender técnica y comparar cargas. Esto es una programación propia, no una copia de la rutina original de Ronnie o Arnold.

Turno 1, 25–40 min: musculación y 5 min de calentamiento. Turno 2: caminata conversacional 15 min de lunes a sábado; domingo 20 min opcionales. Se pueden separar por varias horas; el segundo turno sustituye el antiguo cardio al terminar las pesas. No se suma una tercera sesión.

- Push: press plano 2×8–12; press de hombros sentado 2×8–12; laterales 2×12–15; tríceps en polea 2×10–15.
- Pull: jalón al pecho 2×8–12; remo sentado 2×10–12; curl 2×10–15.
- Legs provisional: split squat de rango cómodo con apoyo sin peso 2×8–10 por lado; puente sin peso 2×10–15; gemelos con apoyo 2×12–15. Solo sin dolor. No sentadilla cargada ni RDL mientras se revisa la molestia lumbar.

Calentamiento de 5 min y 1–2 series ligeras antes del primer compuesto, sin contarlas como trabajo. Descanso 120 s en compuestos, 90 s en accesorios y 60 s en gemelos. Mantener 3 repeticiones en reserva durante las primeras dos semanas. Si se recupera bien, bajar luego a 2; añadir una tercera serie al press o jalón de uno en uno, no a todos a la vez. Si cae el rendimiento o aumenta el dolor, reducir volumen y añadir descanso. La disponibilidad diaria no obliga a completar sesiones con dolor o mala recuperación.

Doble progresión: completar máximo del rango en todas las series durante 2 sesiones con técnica, reserva y sin dolor; aumentar mínimo peso disponible y volver al extremo inferior. Piernas permanecen sin carga hasta revisar la molestia lumbar. Cardio inicial 90 min obligatorios y 20 opcionales; aumentar 5 min en una caminata por semana según tolerancia hacia 150 min.

Tempos: bajar 3 s y subir 2 s en press plano y split squat; concéntrico 2 s y retorno 3 s en otros. Pausa 1 s en jalón, remo, puente y gemelos; 0 s en los otros. Editables. No se afirman como óptimos universales. No bloquear respiración ni forzar repetición para seguir la voz.

Nueva rutina `rutina-plan-ppl-turnos-v3`; versiones anteriores siguen almacenadas. `rutina-training-log-v1` no se borra; registros por nombre e ilustración siguen accesibles. Cada ejercicio tiene `session` (1 o 2); agrupación visible y turno editable.

Principios: [ACSM 2026](https://acsm.org/resistance-training-guidelines-update-2026/), [cardio CDC](https://www.cdc.gov/physical-activity-basics/adding-adults/index.html), [dolor lumbar NHS](https://www.nhs.uk/conditions/back-pain/). Selección propia: no es un programa exacto publicado por las fuentes. Consulta con fisioterapeuta si la molestia persiste, empeora o se repite.

Imágenes adicionales `assets/chibi-14.webp` a `chibi-16.webp`, generadas con imagegen: split squat con apoyo, puente de glúteos y gemelos con apoyo; mismo personaje, dos poses, fondo azul y sin texto.

Verificado en Chrome móvil con fecha sábado: Legs B aparece por defecto, seis días incluyen musculación y dos grupos de turno, domingo recuperación, imágenes de toda la semana, guía unilateral, registro sin peso en piernas y edición del turno.
