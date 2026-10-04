# Mi semana

Web estática en español para una rutina de siete días. Sin dependencias ni backend.

- Ejercicios con ilustraciones originales generadas con imagegen.
- Checks semanales guardados en el navegador.
- Temporizador de descanso y ejercicio con pausa, reinicio, duración editable y señal sonora (si el navegador permite audio).
- El contador calcula el tiempo con una hora de finalización: sigue al recargar, cerrar o cambiar de día. El sonido necesita la página abierta.
- Editor de ejercicios, series, instrucciones, imagen de referencia y tiempos.
- Diseño móvil y escritorio.

La semana incluida es una base de fuerza, cardio y recuperación para un gimnasio con mancuernas, banco y poleas; no es una rutina personalizada. Las ilustraciones son orientativas. Referencia de técnica: [ACSM](https://acsm.org/resistance-training-guidelines-update-2026/) y [CDC](https://www.cdc.gov/physical-activity-basics/adding-adults/index.html).

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
