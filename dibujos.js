/* ==========================================================================
   DIBUJOS DE LOS PLATOS — Plan de Alimentación

   Cada comida del menú tiene su dibujo, visto desde arriba, sin que nadie
   tenga que hacer una foto. No son fotos ni pretenden serlo: se componen a
   partir del nombre del plato ("Salmón al horno con espárragos y patata" →
   un lomo de salmón, un manojo de espárragos y unos gajos de patata).

   Por eso un plato nuevo en el menú tiene dibujo sin tocar nada aquí, y un
   plato cambiado con «Cambiar» también. La foto que hagas tú en la ficha
   sigue ahí, debajo: una cosa no quita la otra.

   dibujoComida(texto)  → SVG en una cadena (cuadrado, 200×200)
   ========================================================================== */
(function(){
'use strict';

const norm = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
function azar(semilla){
  let a = semilla >>> 0;
  return function(){
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
function huella(s){ let h = 2166136261; for(let i = 0; i < s.length; i++){ h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
const r1 = n => Math.round(n * 10) / 10;
const en = (x, y, giro, k, dentro) =>
  '<g transform="translate(' + r1(x) + ' ' + r1(y) + ') rotate(' + r1(giro) + ') scale(' + (Math.round(k * 100) / 100) + ')">' + dentro + '</g>';

/* n puntos dentro de un círculo, separados al menos d entre sí. */
function puntos(n, cx, cy, r, d, R){
  const out = []; let intentos = 0;
  while(out.length < n && intentos < n * 50){
    intentos++;
    const a = R() * 6.2832, q = Math.sqrt(R()) * r;
    const x = cx + Math.cos(a) * q, y = cy + Math.sin(a) * q;
    if(out.every(p => (p[0] - x) * (p[0] - x) + (p[1] - y) * (p[1] - y) >= d * d)) out.push([x, y]);
  }
  return out;
}
function motas(n, r, color, R, tam){
  let s = '';
  puntos(n, 0, 0, r, 3, R).forEach(p => { s += '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="' + (tam || 1.3) + '" fill="' + color + '"/>'; });
  return s;
}
const elige = (lista, R) => lista[Math.floor(R() * lista.length)];

/* Formas que se repiten */
const LOMO = 'M-35,2 C-35,-15 -11,-24 9,-20 C27,-17 38,-5 35,8 C30,20 5,22 -14,18 C-28,15 -35,12 -35,2Z';
const MONTON = 'M-34,-4 C-36,-22 -14,-34 4,-32 C24,-31 38,-16 34,4 C31,24 12,35 -8,32 C-26,29 -33,14 -34,-4Z';
const GAJO = 'M-12,4 C-8,-9 8,-9 12,4 C5,7 -5,7 -12,4Z';
const ONDA = 'M-31,-6 C-21,-18 -1,-5 12,-14 C24,-21 35,-8 30,5 C24,16 4,6 -8,14 C-22,21 -37,8 -31,-6Z';
function marcas(color){
  return '<g stroke="' + color + '" stroke-width="3" stroke-linecap="round" opacity=".85">' +
    '<path d="M-22,-10 L-10,10"/><path d="M-9,-15 L4,12"/><path d="M5,-15 L17,10"/><path d="M19,-9 L27,5"/></g>';
}

/* ---------- Los ingredientes ----------
   tipo 'uno': una pieza grande, dibujada en una caja de ±40.
   tipo 'varios': piezas pequeñas que se reparten; n y d son para una zona
   de radio 36 y se escalan con la zona. capa: 0 debajo, 2 encima. */
const K = {
  /* Proteína */
  salmon:{ tipo:'uno', capa:2, d:() =>
    '<path d="' + LOMO + '" fill="#f58f6c" stroke="#dc6b47" stroke-width="2"/>' +
    '<g fill="none" stroke="#fcc3ab" stroke-width="2.6" stroke-linecap="round"><path d="M-22,-12 C-16,-2 -18,8 -24,14"/><path d="M-9,-18 C-2,-6 -4,8 -10,17"/><path d="M5,-19 C12,-6 10,8 4,19"/><path d="M19,-14 C25,-4 23,6 18,15"/></g>' },
  ahumado:{ tipo:'uno', capa:2, d:() =>
    '<path d="' + ONDA + '" fill="#f7a183" stroke="#e27d5b" stroke-width="1.5" transform="translate(-3,-9) rotate(-8)"/>' +
    '<path d="' + ONDA + '" fill="#f58f6c" stroke="#e27d5b" stroke-width="1.5" transform="translate(4,9) rotate(10) scale(.92)"/>' +
    '<g fill="none" stroke="#fcd0bd" stroke-width="2" stroke-linecap="round"><path d="M-22,-12 C-10,-18 2,-8 14,-16"/><path d="M-14,10 C-2,4 10,14 22,8"/></g>' },
  blanco:{ tipo:'uno', capa:2, d:R =>
    '<path d="' + LOMO + '" fill="#f7eedc" stroke="#d9c298" stroke-width="2"/>' +
    '<g fill="none" stroke="#e2b25e" stroke-width="3.4" stroke-linecap="round" opacity=".9"><path d="M-24,-8 C-14,-14 -4,-14 6,-12"/><path d="M-20,6 C-8,2 6,2 20,6"/><path d="M10,-4 C16,-6 22,-4 27,0"/></g>' +
    motas(9, 24, '#5d9a45', R, 1.5) },
  sardinas:{ tipo:'uno', capa:2, d:() => {
    const pez = y => '<g transform="translate(0,' + y + ')"><path d="M18,0 L30,-7 L27,0 L30,7Z" fill="#7d939e"/>' +
      '<path d="M-26,0 C-14,-9 8,-9 20,0 C8,9 -14,9 -26,0Z" fill="#b4c4cc"/>' +
      '<path d="M-26,0 C-14,-9 8,-9 20,0 C8,-3 -14,-3 -26,0Z" fill="#6f8793"/><circle cx="-18" cy="-.5" r="1.5" fill="#2c3a40"/></g>';
    return pez(-17) + pez(0) + pez(17); } },
  calamar:{ tipo:'varios', capa:2, n:7, dist:18, d:() =>
    '<circle r="8" fill="none" stroke="#dcc39a" stroke-width="7"/><circle r="8" fill="none" stroke="#f6ead4" stroke-width="5"/>' },
  pulpo:{ tipo:'varios', capa:2, n:7, dist:18, d:() =>
    '<circle r="8.5" fill="#f6e4e0" stroke="#a9587a" stroke-width="3.2"/><circle r="2.2" fill="#e9c6c6"/>' },
  pollo:{ tipo:'uno', capa:2, d:() =>
    '<path d="' + LOMO + '" fill="#e6ad63" stroke="#c48743" stroke-width="2"/>' + marcas('#9a672c') },
  carne:{ tipo:'uno', capa:2, d:() =>
    '<path d="' + LOMO + '" fill="#93503a" stroke="#6c3223" stroke-width="2"/>' + marcas('#4f2418') },
  medallones:{ tipo:'uno', capa:2, d:() => [[-17,-12],[17,-9],[0,15]].map(p =>
    '<g transform="translate(' + p[0] + ',' + p[1] + ')"><circle r="15.5" fill="#9a5640" stroke="#6c3223" stroke-width="2"/><circle r="9" fill="#b97058"/>' +
    '<path d="M-8,-5 L8,5" stroke="#6c3223" stroke-width="2.4" stroke-linecap="round" opacity=".7"/></g>').join('') },
  muslitos:{ tipo:'uno', capa:2, d:() => {
    const m = '<rect x="6" y="-3" width="22" height="6" rx="3" fill="#f6eddc" stroke="#dccfb4" stroke-width="1"/><circle cx="29" cy="-3" r="4" fill="#f6eddc" stroke="#dccfb4" stroke-width="1"/><circle cx="29" cy="3" r="4" fill="#f6eddc" stroke="#dccfb4" stroke-width="1"/>' +
      '<ellipse cx="-8" cy="0" rx="18" ry="13" fill="#cd8a41" stroke="#a3662a" stroke-width="2"/><path d="M-18,-4 C-12,-9 -2,-9 4,-5" fill="none" stroke="#e7b06c" stroke-width="3" stroke-linecap="round"/>';
    return '<g transform="translate(-4,-14) rotate(-14)">' + m + '</g><g transform="translate(2,15) rotate(12)">' + m + '</g>'; } },
  brocheta:{ tipo:'uno', capa:2, d:() => {
    const b = y => { let s = '<path d="M-39,' + y + ' L39,' + y + '" stroke="#c7a16a" stroke-width="2.4" stroke-linecap="round"/>';
      [-25,-9,7,23].forEach((x, i) => { s += '<rect x="' + (x - 7) + '" y="' + (y - 7) + '" width="14" height="14" rx="3" fill="' + ['#e6ad63','#d9432f','#e6ad63','#5c9e4a'][i] + '" stroke="rgba(0,0,0,.14)" stroke-width="1"/>'; });
      return s; };
    return b(-11) + b(11); } },
  taquito:{ tipo:'varios', capa:2, n:9, dist:13, d:() => '<rect x="-5.5" y="-5.5" width="11" height="11" rx="2.5" fill="#edc391" stroke="#d29c5f" stroke-width="1.2"/>' },
  tofu:{ tipo:'varios', capa:2, n:8, dist:14, d:() => '<rect x="-6" y="-6" width="12" height="12" rx="2" fill="#f4e9cc" stroke="#d4b273" stroke-width="1.4"/><path d="M-3,-2 L3,-2" stroke="#d9b06b" stroke-width="2" stroke-linecap="round"/>' },
  antojito:{ tipo:'varios', capa:2, n:6, dist:17, d:() => '<rect x="-8" y="-6" width="16" height="12" rx="4" fill="#e9b55c" stroke="#c58a35" stroke-width="1.4"/>' },
  huevo:{ tipo:'uno', capa:2, d:() =>
    '<path d="M-28,-2 C-30,-20 -10,-30 6,-26 C24,-24 32,-8 28,8 C26,24 8,30 -8,26 C-22,24 -27,12 -28,-2Z" fill="#fffdf6" stroke="#e6dcc6" stroke-width="2"/>' +
    '<circle cx="1" cy="0" r="11.5" fill="#f6b21b"/><circle cx="-3" cy="-4" r="3.4" fill="#fbd66e"/>' },
  tortilla:{ tipo:'uno', capa:2, d:(R, o) =>
    '<path d="M-37,5 C-35,-22 35,-22 37,5 C21,18 -21,18 -37,5Z" fill="#f6cf58" stroke="#dba52f" stroke-width="2"/>' +
    '<g fill="#e9b33c" opacity=".8"><ellipse cx="-14" cy="-4" rx="7" ry="3.5"/><ellipse cx="8" cy="-8" rx="6" ry="3"/><ellipse cx="14" cy="5" rx="7" ry="3"/><ellipse cx="-6" cy="8" rx="5" ry="2.4"/></g>' +
    (o.verde ? motas(12, 22, '#3f8a45', R, 2) : '') },
  tortillaPatata:{ tipo:'uno', capa:2, d:() =>
    '<circle r="35" fill="#f0c44e" stroke="#d39c2e" stroke-width="2.4"/><circle r="27" fill="#f5d369"/>' +
    '<g fill="#dfa738" opacity=".75"><ellipse cx="-10" cy="-10" rx="8" ry="4"/><ellipse cx="12" cy="6" rx="9" ry="4"/><ellipse cx="-8" cy="14" rx="6" ry="3"/></g>' +
    '<path d="M0,0 L35,0 M0,0 L-17.5,-30.3" stroke="#c98f25" stroke-width="2" stroke-linecap="round"/>' },
  revuelto:{ tipo:'uno', capa:2, d:() => [[-14,-8,15,'#f8d85f'],[10,-12,14,'#f3c63c'],[16,8,14,'#f8d85f'],[-4,10,16,'#f5cf4c'],[-20,8,10,'#f3c63c'],[0,-2,12,'#fbe07a']].map(c =>
    '<circle cx="' + c[0] + '" cy="' + c[1] + '" r="' + c[2] + '" fill="' + c[3] + '"/>').join('') },
  atun:{ tipo:'varios', capa:2, n:7, dist:14, d:() => '<path d="M-7,-3 L2,-6 L8,-1 L5,5 L-4,6Z" fill="#e8c0aa" stroke="#cf9f86" stroke-width="1.2" stroke-linejoin="round"/>' },
  jamon:{ tipo:'uno', capa:2, d:() => '<path d="' + ONDA + '" fill="#f09d9d" stroke="#fbe2dd" stroke-width="4"/><path d="M-20,-4 C-8,-10 4,2 18,-6" fill="none" stroke="#f8c4c0" stroke-width="2.4" stroke-linecap="round"/>' },
  queso:{ tipo:'varios', capa:2, n:6, dist:14, d:() => '<rect x="-5.5" y="-5.5" width="11" height="11" rx="2" fill="#fffdf8" stroke="#e3dccb" stroke-width="1.2"/>' },
  cheddar:{ tipo:'varios', capa:2, n:14, dist:7, d:() => '<path d="M-7,0 C-3,-3 3,3 7,0" fill="none" stroke="#f0962a" stroke-width="2.4" stroke-linecap="round"/>' },

  /* Hidrato */
  arroz:{ tipo:'uno', capa:0, d:R => { let s = '<path d="' + MONTON + '" fill="#fbf8ee" stroke="#e7dfca" stroke-width="2"/>';
    puntos(46, 0, 0, 27, 4.6, R).forEach(p => { s += '<ellipse cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" rx="3.3" ry="1.3" fill="#e2d9c2" transform="rotate(' + Math.round(R() * 180) + ' ' + r1(p[0]) + ' ' + r1(p[1]) + ')"/>'; });
    return s; } },
  quinoa:{ tipo:'uno', capa:0, d:R => '<path d="' + MONTON + '" fill="#ead9b3" stroke="#d3bd8b" stroke-width="2"/>' + motas(60, 28, '#c4a973', R, 1.5) + motas(40, 28, '#f8eed5', R, 1.4) },
  gajo:{ tipo:'varios', capa:0, n:6, dist:19, d:() => '<path d="' + GAJO + '" fill="#f1ca62" stroke="#cd9933" stroke-width="1.6" stroke-linejoin="round" transform="scale(1.15)"/>' },
  cubos:{ tipo:'varios', capa:0, n:10, dist:12.5, d:() => '<rect x="-5" y="-5" width="10" height="10" rx="2.4" fill="#f4e4a8" stroke="#d9c076" stroke-width="1.2"/>' },
  rodaja:{ tipo:'varios', capa:0, n:6, dist:18, d:() => '<circle r="9.5" fill="#f5e6ad" stroke="#d9c27a" stroke-width="1.6"/>' },
  pasta:{ tipo:'varios', capa:0, n:16, dist:10.5, d:() => '<path d="M-9,0 q3,-6 6,0 t6,0 t6,0" fill="none" stroke="#c99a3d" stroke-width="6" stroke-linecap="round"/><path d="M-9,0 q3,-6 6,0 t6,0 t6,0" fill="none" stroke="#efc96f" stroke-width="4" stroke-linecap="round"/>' },
  tostada:{ tipo:'uno', capa:0, fijo:true, d:R =>
    '<path d="M-28,-17 C-35,-30 -10,-35 0,-28 C10,-35 35,-30 28,-17 L28,24 C28,31 -28,31 -28,24Z" fill="#f3d6a4" stroke="#b9803f" stroke-width="4.5" stroke-linejoin="round"/>' + motas(16, 19, '#e2ba7c', R, 1.6) },
  bocadillo:{ tipo:'uno', capa:1, d:() =>
    '<rect x="-36" y="-17" width="72" height="34" rx="17" fill="#e6b06a" stroke="#b9803f" stroke-width="2.4"/>' +
    '<rect x="-31" y="-5" width="62" height="10" rx="5" fill="#f6cf58" stroke="#dba52f" stroke-width="1.4"/>' +
    '<g stroke="#c98f48" stroke-width="2.4" stroke-linecap="round"><path d="M-20,-13 L-14,-8"/><path d="M-4,-13 L2,-8"/><path d="M12,-13 L18,-8"/></g>' },
  garbanzos:{ tipo:'varios', capa:0, n:24, dist:10, d:() => '<circle r="5.4" fill="#e3b56f" stroke="#c9974e" stroke-width="1"/><circle cx="-1.5" cy="-1.7" r="1.7" fill="#f2d39c"/>' },
  lentejas:{ tipo:'varios', capa:0, n:52, dist:6.2, d:R => '<circle r="3.2" fill="' + elige(['#8a5a3a','#a56d43','#77492e'], R) + '"/>' },
  alubias:{ tipo:'varios', capa:0, n:22, dist:10.5, d:() => '<ellipse rx="6.4" ry="4" fill="#f7efdc" stroke="#dccdaa" stroke-width="1.2"/>' },
  kumpir:{ tipo:'uno', capa:1, d:R =>
    '<ellipse rx="36" ry="24" fill="#b9824a" stroke="#93622f" stroke-width="2"/><ellipse rx="28" ry="16" fill="#f6e3a4"/>' +
    motas(8, 14, '#f5cb3a', R, 2.6) + motas(6, 14, '#d9432f', R, 2.4) + motas(5, 14, '#3d3b2c', R, 2.2) + motas(6, 14, '#5d9a45', R, 2) },
  relleno:{ tipo:'uno', capa:1, d:R => { const m = x => '<g transform="translate(' + x + ',0)"><path d="M-14,-24 C2,-30 16,-22 15,0 C16,22 2,30 -14,24 C-18,10 -18,-10 -14,-24Z" fill="#d9432f" stroke="#a82d1e" stroke-width="2"/>' +
      '<ellipse cx="-1" cy="0" rx="9.5" ry="18" fill="#fbf8ee"/>' + motas(8, 8, '#e2d9c2', R, 1.4) + '</g>';
    return m(-17) + m(19); } },
  taco:{ tipo:'varios', capa:0, n:3, dist:30, d:R => '<circle r="15" fill="#f1d58c" stroke="#d4b25e" stroke-width="1.6"/>' + motas(5, 9, '#d9432f', R, 2.2) + motas(5, 9, '#5d9a45', R, 2) + motas(4, 9, '#f4e9cc', R, 2.8) },
  totopos:{ tipo:'varios', capa:2, n:5, dist:17, d:() => '<path d="M0,-10 L10,8 L-10,8Z" fill="#f1c95c" stroke="#d09f2f" stroke-width="1.4" stroke-linejoin="round"/>' },
  latke:{ tipo:'varios', capa:1, n:3, dist:27, d:R => '<circle r="13.5" fill="#dea648" stroke="#b97f2a" stroke-width="2" stroke-dasharray="5 2.4"/>' + motas(8, 9, '#f1c978', R, 1.6) },
  torrija:{ tipo:'varios', capa:1, n:4, dist:19, d:() => '<rect x="-13" y="-6" width="26" height="12" rx="5" fill="#e3a94e" stroke="#b97f2a" stroke-width="1.6"/><path d="M-7,-2 L7,-2" stroke="#f4d08a" stroke-width="2.4" stroke-linecap="round"/>' },

  /* Verdura */
  esparragos:{ tipo:'uno', capa:1, d:() => { let s = '';
    [-18,-9,0,9,18].forEach((y, i) => { const x = [-2,3,-4,2,-1][i];
      s += '<rect x="' + (-36 + x) + '" y="' + (y - 2.8) + '" width="62" height="5.6" rx="2.8" fill="#77ad4a"/>' +
           '<ellipse cx="' + (29 + x) + '" cy="' + y + '" rx="8" ry="3.6" fill="#4f8433"/>'; });
    return s; } },
  brocoli:{ tipo:'varios', capa:1, n:4, dist:21, d:() =>
    '<rect x="-2.6" y="2" width="5.2" height="10" rx="2.4" fill="#a9cc7a"/><circle cx="-6.5" cy="-1" r="7" fill="#4a8f3c"/><circle cx="6.5" cy="-1" r="7" fill="#4a8f3c"/><circle cy="-8" r="7.5" fill="#5aa049"/><circle cy="0" r="5.4" fill="#3f7d33"/>' },
  espinacas:{ tipo:'varios', capa:1, n:9, dist:12.5, d:() =>
    '<path d="M0,-12 C8,-7 9,6 0,12 C-9,6 -8,-7 0,-12Z" fill="#3f8a45"/><path d="M0,-9 L0,10" stroke="#2c6a34" stroke-width="1.4" stroke-linecap="round"/>' },
  ensalada:{ tipo:'varios', capa:1, n:7, dist:14, extra:['cherry'], d:R =>
    '<path d="M-12,-2 C-12,-10 -3,-13 4,-11 C12,-10 14,-2 11,5 C8,12 -2,13 -8,10 C-13,7 -13,2 -12,-2Z" fill="' + elige(['#9ccc5e','#7fb84a','#b3d873'], R) + '"/>' +
    '<path d="M-7,-3 C-2,-1 3,3 7,6" fill="none" stroke="#d3ea9f" stroke-width="1.6" stroke-linecap="round"/>' },
  cherry:{ tipo:'varios', capa:2, n:3, dist:17, d:() => '<circle r="5.4" fill="#e04a33"/><circle cx="-1.6" cy="-1.8" r="1.6" fill="#f08b78"/>' },
  pimiento:{ tipo:'varios', capa:1, n:9, dist:11, d:R => '<path d="M-10,3 C-4,-6 4,-6 10,3" fill="none" stroke="' + elige(['#d9432f','#d9432f','#e9a13a','#5c9e4a'], R) + '" stroke-width="4.6" stroke-linecap="round"/>' },
  champi:{ tipo:'varios', capa:1, n:7, dist:14, d:() => '<path d="M-9,0 C-9,-10 9,-10 9,0 C6,2 2.4,2 2.4,2 L2.4,8 L-2.4,8 L-2.4,2 C-2.4,2 -6,2 -9,0Z" fill="#ecdfcb" stroke="#b59c7a" stroke-width="1.4" stroke-linejoin="round"/>' },
  judias:{ tipo:'varios', capa:1, n:13, dist:5.5, alineado:true, d:() => '<rect x="-14" y="-1.8" width="28" height="3.6" rx="1.8" fill="#5d9a45"/>' },
  tomate:{ tipo:'varios', capa:1, n:4, dist:20, d:() =>
    '<circle r="9.5" fill="#e2472f"/><circle r="6.8" fill="#ef6a4f"/><g fill="#f8b29d"><ellipse cx="0" cy="-3.6" rx="1.7" ry="2.3"/><ellipse cx="3.2" cy="2" rx="1.7" ry="2.3" transform="rotate(120 3.2 2)"/><ellipse cx="-3.2" cy="2" rx="1.7" ry="2.3" transform="rotate(-120 -3.2 2)"/></g>' },
  cebolla:{ tipo:'varios', capa:1, n:6, dist:13, d:() => '<circle r="7.2" fill="none" stroke="#d9b4d2" stroke-width="2.4"/><circle r="3.6" fill="none" stroke="#e8cfe3" stroke-width="1.8"/>' },
  zanahoria:{ tipo:'varios', capa:1, n:9, dist:12, d:() => '<circle r="5.8" fill="#f08a2c"/><circle r="2.8" fill="#f7ad5b"/>' },
  maiz:{ tipo:'varios', capa:2, n:20, dist:7.4, d:() => '<rect x="-2.4" y="-3" width="4.8" height="6" rx="2" fill="#f5cb3a"/>' },
  aceitunas:{ tipo:'varios', capa:2, n:6, dist:14, d:() => '<circle r="4.8" fill="#3d3b2c"/><circle r="1.7" fill="#77735a"/>' },
  limon:{ tipo:'varios', capa:2, n:2, dist:24, d:() => '<path d="' + GAJO + '" fill="#f9e36f" stroke="#e6bd2c" stroke-width="2" stroke-linejoin="round" transform="scale(1.1)"/><path d="M0,-5 L0,5 M-5,-3 L-3,5 M5,-3 L3,5" stroke="#fdf3b0" stroke-width="1.2" stroke-linecap="round"/>' },
  aguacate:{ tipo:'uno', capa:1, d:() => '<ellipse rx="19" ry="27" fill="#4f7d32"/><ellipse rx="15" ry="23" fill="#d5e391"/><circle cy="7" r="8.5" fill="#7b4f2b"/><circle cx="-2.4" cy="4.6" r="2.4" fill="#a06c3f"/>' },
  berenjena:{ tipo:'varios', capa:1, n:5, dist:18, d:() => '<circle r="9" fill="#ece0c4" stroke="#6b3f6f" stroke-width="3"/>' },
  calabacin:{ tipo:'varios', capa:1, n:5, dist:18, d:() => '<circle r="9" fill="#e3ecb4" stroke="#5d9a45" stroke-width="3"/>' },
  pimenton:{ tipo:'varios', capa:2, n:22, dist:4.5, d:() => '<circle r="1.3" fill="#c93a22"/>' },
  sesamo:{ tipo:'varios', capa:2, n:26, dist:5, d:() => '<ellipse rx="1.7" ry="1" fill="#f2e3b6"/>' },
  perejil:{ tipo:'varios', capa:2, n:16, dist:6, d:() => '<circle r="1.6" fill="#4f9140"/>' },
  crema:{ tipo:'varios', capa:2, n:1, dist:10, d:() => '<circle r="11" fill="#fffdf8" stroke="#e6dfcf" stroke-width="1.4"/><path d="M-5,1 C-3,-4 3,-4 5,1" fill="none" stroke="#ece5d3" stroke-width="2" stroke-linecap="round"/>' },

  /* Desayunos y entre horas */
  fruta:{ tipo:'varios', capa:2, n:7, dist:15, d:R => K[elige(['manzana','platano','baya','baya'], R)].d(R) },
  baya:{ tipo:'varios', capa:2, n:6, dist:11, d:() => '<circle r="4.6" fill="#a8324a"/><circle cx="-1.4" cy="-1.5" r="1.4" fill="#d06a80"/>' },
  manzana:{ tipo:'varios', capa:2, n:4, dist:19, d:() => '<path d="' + GAJO + '" fill="#fbf0cf" stroke="#e6d5a3" stroke-width="1.2" transform="scale(1.1)"/><path d="M-12,4 C-8,-9 8,-9 12,4" fill="none" stroke="#d9432f" stroke-width="3" stroke-linecap="round" transform="scale(1.1)"/>' },
  pera:{ tipo:'varios', capa:2, n:4, dist:19, d:() => '<path d="' + GAJO + '" fill="#f6f1cf" stroke="#dfd69f" stroke-width="1.2" transform="scale(1.1)"/><path d="M-12,4 C-8,-9 8,-9 12,4" fill="none" stroke="#9bbf4a" stroke-width="3" stroke-linecap="round" transform="scale(1.1)"/>' },
  platano:{ tipo:'varios', capa:2, n:6, dist:16, d:() => '<circle r="7.4" fill="#f8e9ae" stroke="#e2cb78" stroke-width="1.4"/><g fill="#c9a85a"><circle cx="0" cy="-1.8" r="1"/><circle cx="1.7" cy="1.2" r="1"/><circle cx="-1.7" cy="1.2" r="1"/></g>' },
  nueces:{ tipo:'varios', capa:2, n:5, dist:14, d:() => '<path d="M-6,-1 C-6,-6 -1,-7 1,-5 C5,-7 8,-2 6,2 C6,6 1,7 -1,5 C-5,6 -7,3 -6,-1Z" fill="#ab7840" stroke="#855a2b" stroke-width="1.2"/><path d="M-3,-2 C0,0 0,2 3,2" fill="none" stroke="#855a2b" stroke-width="1.2" stroke-linecap="round"/>' },
  chocolate:{ tipo:'varios', capa:2, n:1, dist:10, d:() => '<rect x="-10" y="-10" width="20" height="20" rx="3" fill="#5b3624" stroke="#3f2416" stroke-width="1.4"/><path d="M0,-10 L0,10 M-10,0 L10,0" stroke="#7a4b33" stroke-width="1.6"/>' },
  cacahuete:{ tipo:'uno', capa:1, d:() => '<path d="M-20,-10 C-10,-18 12,-18 20,-8 C24,2 18,16 4,18 C-12,20 -24,10 -20,-10Z" fill="#b97c3d"/><path d="M-12,-4 C-4,-10 6,-8 12,-2" fill="none" stroke="#d49c5e" stroke-width="3" stroke-linecap="round"/>' },
  croissant:{ tipo:'uno', capa:1, d:() =>
    '<path d="M-36,12 C-34,-20 34,-20 36,12 C26,2 13,-3 0,-3 C-13,-3 -26,2 -36,12Z" fill="#e9b55c" stroke="#bf8530" stroke-width="2.4" stroke-linejoin="round"/>' +
    '<g fill="none" stroke="#c58a35" stroke-width="2.2" stroke-linecap="round"><path d="M-22,-9 C-19,-4 -19,1 -22,4"/><path d="M-8,-13 C-6,-9 -6,-5 -8,-2"/><path d="M8,-13 C6,-9 6,-5 8,-2"/><path d="M22,-9 C19,-4 19,1 22,4"/></g>' },
  pizza:{ tipo:'uno', capa:1, fijo:true, grande:true, d:R => { let s = '<circle r="40" fill="#e7b566" stroke="#c48d3c" stroke-width="2"/><circle r="33.5" fill="#d94b33"/>';
    puntos(9, 0, 0, 25, 13, R).forEach(p => { s += '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="6.5" fill="#f9e6a6"/>'; });
    puntos(6, 0, 0, 24, 15, R).forEach(p => { s += '<circle cx="' + r1(p[0]) + '" cy="' + r1(p[1]) + '" r="4.4" fill="#b83224"/>'; });
    puntos(4, 0, 0, 22, 16, R).forEach(p => { s += '<path d="M0,-4.5 C3.5,-2.5 3.5,2.5 0,4.5 C-3.5,2.5 -3.5,-2.5 0,-4.5Z" fill="#3f8a45" transform="translate(' + r1(p[0]) + ' ' + r1(p[1]) + ') rotate(' + Math.round(R() * 180) + ')"/>'; });
    return s + '<path d="M-40,0 L40,0 M-20,-34.6 L20,34.6 M20,-34.6 L-20,34.6" stroke="#c9882f" stroke-width="1.4" opacity=".7"/>'; } },
  cafe:{ tipo:'uno', capa:1, fijo:true, d:() =>
    '<circle r="38" fill="#ffffff" stroke="#dcd6c8" stroke-width="2"/><circle r="30" fill="none" stroke="#efeadf" stroke-width="2"/>' +
    '<rect x="20" y="-6" width="21" height="12" rx="6" fill="#ffffff" stroke="#cfc8b8" stroke-width="2"/>' +
    '<circle r="25" fill="#ffffff" stroke="#cfc8b8" stroke-width="2"/><circle r="20.5" fill="#a5714a"/>' +
    '<path d="M-9,-3 C-7,-11 6,-12 10,-5 C13,2 7,10 -1,9 C-7,8 -9,3 -5,-1 C-2,-4 4,-3 4,1" fill="none" stroke="#e3c3a0" stroke-width="3" stroke-linecap="round"/>' },
  yogur:{ tipo:'uno', capa:1, fijo:true, d:() =>
    '<circle r="38" fill="#ffffff" stroke="#dcd6c8" stroke-width="2"/><circle r="31" fill="#fdfcf6" stroke="#ece6d8" stroke-width="3"/>' +
    '<path d="M-13,-2 C-11,-13 9,-14 14,-4 C18,5 9,15 -2,13 C-10,12 -12,5 -7,0" fill="none" stroke="#ebe5d6" stroke-width="3" stroke-linecap="round"/>' },
  libre:{ tipo:'uno', capa:1, fijo:true, d:() =>
    '<g stroke="#a8a396" stroke-width="3.4" stroke-linecap="round" fill="none"><path d="M-11,-26 L-11,26"/><path d="M-17,-26 L-17,-12 C-17,-6 -5,-6 -5,-12 L-5,-26"/>' +
    '<path d="M12,26 L12,-26 C21,-20 21,-4 12,2"/></g>' +
    '<circle cx="-27" cy="-20" r="2.6" fill="#d9432f"/><circle cx="27" cy="16" r="2.6" fill="#e9a13a"/><circle cx="26" cy="-24" r="2.2" fill="#5c9e4a"/><circle cx="-26" cy="22" r="2.2" fill="#3f7fbf"/>' }
};

/* ---------- Del texto a los ingredientes ----------
   Por orden: primero lo específico. Lo que casa se borra del texto para que
   no vuelva a casar con una regla más general ("ensalada de patata" no es
   ensalada + patata). */
const REGLAS = [
  [/salmon ahumado/, 'ahumado'],
  [/ensalada de patata/, 'cubos'],
  [/ensalada de (?=lentejas|arroz|pasta)/, '', 'mezcla'],
  [/bowl/, '', 'bol-mezcla'],
  [/ratatouille/, 'berenjena,calabacin,tomate', 'mezcla'],
  [/tortilla de patata/, 'tortillaPatata'],
  [/chips de tortilla|totopos/, 'totopos'],
  [/bocadillo[^,+]*/, 'bocadillo'],
  [/tortilla de espinacas/, 'tortilla', 'verde'],
  [/tortilla( francesa)?/, 'tortilla'],
  [/huevos? revueltos?|revuelto( de huevo)?/, 'revuelto'],
  [/huevos?( escalfado| frito)?/, 'huevo'],
  [/brochetas?( de pavo| de pollo)?/, 'brocheta'],
  [/taquitos de pavo/, 'taquito'],
  [/muslitos( de pollo)?/, 'muslitos'],
  [/pollo al curry( ligero)?/, 'taquito', 'curry'],
  [/arroz con pollo/, 'arroz,taquito', 'mezcla'],
  [/arroz frito/, 'arroz', 'mezcla'],
  [/pollo|pechuga|pavo/, 'pollo'],
  [/solomillo( de cerdo)?/, 'medallones'],
  [/bistec( de ternera)?|ternera/, 'carne'],
  [/pulpo a la gallega/, 'pulpo', 'gallega'],
  [/calamar(es)?/, 'calamar'],
  [/pulpo/, 'pulpo', 'gallega'],
  [/pimenton/, 'pimenton'],
  [/dorada|bacalao( crujiente)?|caballa/, 'blanco'],
  [/sardinas/, 'sardinas'],
  [/salmon/, 'salmon'],
  [/atun/, 'atun'],
  [/garbanzos/, 'garbanzos', 'cuchara'],
  [/lentejas/, 'lentejas', 'cuchara'],
  [/chili de alubias|chili/, 'alubias', 'chili'],
  [/alubias/, 'alubias', 'cuchara'],
  [/arroz( integral)?/, 'arroz'],
  [/quinoa/, 'quinoa'],
  [/pasta( integral)?/, 'pasta'],
  [/patatas? rellenas?[^,+]*/, 'kumpir'],
  [/pure de patata[^,+]*/, '', 'pure'],
  [/patata( al horno)?/, 'gajo'],
  [/apionabo/, 'gajo'],
  [/pimientos rellenos[^,+]*/, 'relleno'],
  [/humus[^,+]*/, 'pimiento', 'humus'],
  [/sopa[^,+]*/, 'crema,perejil', 'sopa'],
  [/salsa de maiz/, 'maiz', 'salsa'],
  [/esparragos( trigueros)?/, 'esparragos'],
  [/brocoli/, 'brocoli'],
  [/espinacas/, 'espinacas'],
  [/ensalada( verde)?/, 'ensalada'],
  [/pimientos?( asados?)?/, 'pimiento'],
  [/champinon(es)?/, 'champi'],
  [/judias verdes/, 'judias'],
  [/tomate/, 'tomate'],
  [/cebolla|encebollado/, 'cebolla'],
  [/zanahoria/, 'zanahoria'],
  [/maiz/, 'maiz'],
  [/aceitunas/, 'aceitunas'],
  [/limon/, 'limon'],
  [/aguacate/, 'aguacate'],
  [/cafe( con leche)?/, 'cafe'],
  [/gachas( de avena)?/, '', 'avena'],
  [/yogur( griego)?|kefir/, '', 'yogur'],
  [/avena/, 'sesamo'],
  [/fruta/, 'fruta'],
  [/manzana/, 'manzana'],
  [/platano/, 'platano'],
  [/pera\b/, 'pera'],
  [/nueces/, 'nueces'],
  [/onza de chocolate|chocolate|onza/, 'chocolate'],
  [/tostada( integral)?/, 'tostada'],
  [/jamon/, 'jamon'],
  [/queso fresco/, 'queso'],
  [/crema de cacahuete|cacahuete/, 'cacahuete'],
  [/bolleria|empanadilla/, 'croissant'],
  [/pizza|comida de equipo/, 'pizza'],
  [/cena libre/, 'libre'],
  [/cheddar/, 'cheddar'],
  [/tofu/, 'tofu'],
  [/tacos?/, 'taco'],
  [/torrijas?/, 'torrija'],
  [/mascarpone|nata agria/, 'crema'],
  [/latkes/, 'latke'],
  [/antojitos( de queso)?/, 'antojito'],
  [/sesamo/, 'sesamo']
];
const FONDO_BOL = { yogur:'#fffefa', avena:'#ecdcb8', curry:'#e6ac3d', sopa:'#e2562f', humus:'#e6c597', pure:'#f2de9c', chili:'#8c3c26', salsa:'#f3d36a', lentejas:'#8d5a36', alubias:'#ecd3a4' };
const ENCIMA_TOSTADA = ['jamon','tomate','queso','aguacate','huevo','atun','cacahuete'];

function leer(texto){
  let t = norm(texto).replace(/[()]/g, ' ');
  const vistos = [], marcas = {};
  REGLAS.forEach(regla => {
    const m = regla[0].exec(t);
    if(!m) return;
    if(regla[2]) marcas[regla[2]] = true;
    regla[1].split(',').filter(Boolean).forEach((k, i) => { if(!vistos.some(v => v.k === k)) vistos.push({ k:k, pos:m.index + i * .01 }); });
    t = t.slice(0, m.index) + ' '.repeat(m[0].length) + t.slice(m.index + m[0].length);
  });
  vistos.sort((a, b) => a.pos - b.pos);
  return { tipos:vistos.map(v => v.k), marcas:marcas };
}

function recipiente(clase, fondo){
  if(clase === 'bol'){
    return '<circle cx="100" cy="100" r="92" fill="#ece7d9" stroke="#d3ccba" stroke-width="2"/>' +
           '<circle cx="100" cy="100" r="76" fill="' + (fondo || '#fbfaf5') + '"/>' +
           '<circle cx="100" cy="100" r="76" fill="none" stroke="rgba(40,30,10,.13)" stroke-width="5"/>';
  }
  if(clase === 'nada') return '';
  return '<circle cx="100" cy="100" r="92" fill="#ffffff" stroke="#d9d3c5" stroke-width="2"/>' +
         '<circle cx="100" cy="100" r="68" fill="#fdfcf8" stroke="#ece7db" stroke-width="2"/>';
}

/* Pinta un tipo dentro de una zona (cx, cy, r). */
function pinta(k, cx, cy, r, R, o, densidad){
  const def = K[k];
  if(!def) return '';
  if(def.tipo === 'uno'){
    const giro = def.fijo ? 0 : (R() * 40 - 20);
    return en(cx, cy, giro, (def.grande ? r / 34 : r / 37), def.d(R, o));
  }
  const esc = Math.max(.8, Math.min(1.35, r / 33));
  const n = Math.max(1, Math.round(def.n * (r / 36) * (r / 36) * (densidad || 1) * 1.15 / (esc * esc) * (def.n < 3 ? esc * esc / 1.15 : 1)));
  const base = R() * 180;
  let s = '';
  puntos(n, cx, cy, Math.max(4, r - 5 * esc), def.dist * esc * .93, R).forEach(p => {
    s += en(p[0], p[1], def.alineado ? base + R() * 36 - 18 : R() * 360, esc, def.d(R, o));
  });
  (def.extra || []).forEach(x => { s += pinta(x, cx, cy, r, R, o, 1); });
  return s;
}

const ZONAS = {
  1:[[100,100,60]],
  2:[[66,100,45],[138,100,41]],
  3:[[65,80,42],[139,84,38],[103,141,38]],
  4:[[66,66,35],[136,66,35],[66,136,35],[136,136,35]]
};

function componer(texto){
  const L = leer(texto), m = L.marcas, o = { verde:!!m.verde };
  let tipos = L.tipos.slice();
  const R = azar(huella(norm(texto)));
  if(m.gallega) tipos = tipos.map(k => k === 'gajo' ? 'rodaja' : k).concat(tipos.indexOf('pimenton') === -1 ? ['pimenton'] : []);
  if(!tipos.length && !Object.keys(m).length) tipos = ['libre'];

  /* Desayuno con café: taza y cuenco, sin plato. */
  if(tipos.indexOf('cafe') !== -1){
    const resto = tipos.filter(k => k !== 'cafe');
    let s = pinta('cafe', 76, 78, 50, R, o);
    if(m.yogur || resto.length){
      s += pinta('yogur', 138, 138, 40, R, o);
      (resto.length ? resto : ['fruta']).forEach(k => { s += pinta(k, 138, 138, 26, R, o, .55); });
    }
    return s;
  }

  /* De cuchara y cuencos: el fondo es el plato. */
  const fondo = ['yogur','avena','curry','sopa','humus','pure','chili','salsa'].find(f => m[f]);
  const legumbreGuiso = m.cuchara && !m.mezcla && tipos.indexOf('ensalada') === -1;
  if(fondo || legumbreGuiso || m['bol-mezcla']){
    const color = fondo ? FONDO_BOL[fondo] : (tipos[0] === 'lentejas' ? FONDO_BOL.lentejas : tipos[0] === 'alubias' ? FONDO_BOL.alubias : null);
    let s = recipiente('bol', color);
    if(fondo === 'yogur') s += '<path d="M72,96 C76,74 118,70 128,92 C136,112 116,132 94,126 C78,122 76,108 86,100" fill="none" stroke="#ebe5d6" stroke-width="5" stroke-linecap="round"/>';
    if(fondo === 'pure') s += pinta('pimenton', 100, 100, 60, azar(7), o, .5).replace(/#c93a22/g, '#c98a2f');
    const orden = tipos.slice().sort((a, b) => K[a].capa - K[b].capa);
    orden.forEach((k, i) => {
      const def = K[k];
      if(def.tipo === 'uno') s += pinta(k, 100, 100, def.capa === 0 ? 62 : 34, R, o);
      else s += pinta(k, 100, 100, 62, R, o, (def.capa === 0 ? 1.15 : (fondo === 'yogur' || fondo === 'avena') ? .95 : .5) * (def.n < 3 ? 3.2 : 1));
    });
    return s;
  }

  /* Tostadas: lo de encima va encima. */
  if(tipos.indexOf('tostada') !== -1){
    const encima = tipos.filter(k => ENCIMA_TOSTADA.indexOf(k) !== -1 || (k === 'platano' && tipos.indexOf('cacahuete') !== -1));
    const aparte = tipos.filter(k => k !== 'tostada' && encima.indexOf(k) === -1);
    const z = ZONAS[Math.min(4, 1 + aparte.length)];
    let s = recipiente('plato');
    s += pinta('tostada', z[0][0], z[0][1], z[0][2] * 1.08, R, o);
    encima.forEach(k => { s += pinta(k, z[0][0], z[0][1] + 2, z[0][2] * (K[k].tipo === 'uno' ? .62 : .6), R, o, K[k].n < 5 ? 2 : 1); });
    aparte.slice(0, 3).forEach((k, i) => { s += pinta(k, z[i + 1][0], z[i + 1][1], z[i + 1][2], R, o); });
    return s;
  }

  let s = recipiente('plato');
  const visibles = tipos.slice(0, 5);

  /* Ensaladas y salteados: todo junto. */
  if(m.mezcla){
    visibles.slice().sort((a, b) => K[a].capa - K[b].capa).forEach(k => {
      const def = K[k];
      if(def.tipo === 'uno') s += pinta(k, 100, 100, def.capa === 0 ? 56 : 30, R, o);
      else s += pinta(k, 100, 100, 58, R, o, (def.capa === 0 ? 1.1 : .5) * (def.n < 3 ? 3 : 1));
    });
    return s;
  }

  /* El resto: cada cosa en su parte del plato. Los aliños (limón, pimentón,
     perejil) no ocupan parte: van por encima. */
  const alino = visibles.filter(k => ['limon','pimenton','perejil','sesamo','crema','cheddar'].indexOf(k) !== -1);
  const partes = visibles.filter(k => alino.indexOf(k) === -1).slice(0, 4);
  const z = ZONAS[Math.max(1, partes.length)];
  partes.map((k, i) => ({ k:k, z:z[i] })).sort((a, b) => K[a.k].capa - K[b.k].capa)
    .forEach(p => { s += pinta(p.k, p.z[0], p.z[1], p.z[2], R, o); });
  alino.forEach(k => { s += pinta(k, 100, 100, k === 'limon' || k === 'crema' ? 46 : 56, R, o, k === 'limon' ? 1.6 : .7); });
  return s;
}

const memoria = {};
function dibujoComida(texto){
  /* Si el plato tiene foto real (fotos.js), va la foto. */
  const slug = typeof slugDePlato === 'function' ? slugDePlato(texto) : null;
  const foto = slug && window.FOTOS_PLATOS && window.FOTOS_PLATOS[slug];
  if(foto) return '<img class="dibujo foto" src="' + foto.f + '" alt="" loading="lazy" decoding="async">';
  const clave = norm(texto);
  if(!memoria[clave]){
    let dentro;
    try{ dentro = componer(texto); }catch(e){ dentro = recipiente('plato'); }
    memoria[clave] = '<svg class="dibujo" viewBox="0 0 200 200" role="img" aria-hidden="true" focusable="false">' + dentro + '</svg>';
  }
  return memoria[clave];
}

window.dibujoComida = dibujoComida;
})();
