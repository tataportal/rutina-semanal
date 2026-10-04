'use strict';
let voiceContext,voiceBuffer,voiceManifest,voiceLoad,voiceSources=[];
function fetchVoiceFiles(){return Promise.all([fetch('assets/voice/manifest.json?v=1').then(r=>{if(!r.ok)throw Error('manifest');return r.json()}),fetch('assets/voice/guide-es.mp3?v=1').then(r=>{if(!r.ok)throw Error('audio');return r.arrayBuffer()})])}
let voiceFiles=fetchVoiceFiles();voiceFiles.catch(()=>{voiceFiles=null});
async function readyVoice(){
 const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)throw Error('audio unavailable');
 voiceContext??=new Audio();await voiceContext.resume();if(voiceContext.state!=='running')throw Error('audio blocked');
 voiceLoad??=(voiceFiles??=fetchVoiceFiles()).then(async([manifest,bytes])=>{voiceManifest=manifest;voiceBuffer=await voiceContext.decodeAudioData(bytes.slice(0))}).catch(e=>{voiceLoad=null;voiceFiles=null;throw e});await voiceLoad;
}
function stopVoice(){for(const source of voiceSources){try{source.stop()}catch{}}voiceSources=[]}
function voiceNumber(n){n=Math.max(0,Math.floor(n));if(n<=29||[30,40,50,60,70,80,90,100,200,300,400,500,600,700,800,900,1000].includes(n))return ['number-'+n];if(n>=1000){const thousands=Math.floor(n/1000),rest=n%1000;return [...(thousands===1?[]:voiceNumber(thousands)),'number-1000',...(rest?voiceNumber(rest):[])]}if(n>=100){const hundreds=Math.floor(n/100)*100,rest=n%100;return [hundreds===100?'ciento':'number-'+hundreds,...voiceNumber(rest)]}return ['number-'+Math.floor(n/10)*10,'y','number-'+n%10]}
function voiceKeys(text){if(voiceManifest[text])return [text];let m=text.match(/^Serie terminada\. Descansa (\d+) segundos$/);if(m)return ['Serie terminada. Descansa',...voiceNumber(Number(m[1])),'segundos'];m=text.match(/^(Camina a tu ritmo|Mantén la posición) durante (\d+) segundos$/);if(m)return [m[1]+' durante',...voiceNumber(Number(m[2])),'segundos'];return []}
function playVoice(text){stopVoice();if(!voiceBuffer||voiceContext.state!=='running')throw Error('audio not ready');const keys=voiceKeys(text);if(!keys.length||keys.some(key=>!voiceManifest[key]))throw Error('missing cue');let at=voiceContext.currentTime;for(const key of keys){const [offset,duration]=voiceManifest[key];const source=voiceContext.createBufferSource();source.buffer=voiceBuffer;source.connect(voiceContext.destination);source.start(at,offset,duration);voiceSources.push(source);at+=duration}}
