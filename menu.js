/* Menú de 4 semanas del Plan de Alimentación.
   En archivo aparte para que otras apps tuyas (Mi Espacio) puedan enseñar qué comes hoy sin copiarlo. */
const weeksData = [
{ n:1, avg:1731, days:[
  {day:"Lunes 🐟", desayuno:"🍞 Tostada integral con jamón + manzana", media:"☕ Café con leche + yogur o fruta", comida:"🐟 Salmón al horno con espárragos y patata", merienda:"🍫 Yogur + plátano + onza de chocolate", cena:"🐟 Dorada al horno con espárragos y limón", kcal:1890,p:118,c:175,f:72},
  {day:"Martes 🍗", desayuno:"🥣 Kéfir + pera + nueces", media:"☕ Café con leche + yogur o fruta", comida:"🍗 Pollo a la plancha con arroz integral y pimientos", merienda:"🍎 Yogur + manzana", cena:"🥚 Tortilla francesa con espinacas y tomate aliñado", kcal:1770,p:110,c:158,f:69},
  {day:"Miércoles 🫘", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🫘 Garbanzos salteados con espinacas y taquitos de pavo", merienda:"🍎 Yogur + fruta", cena:"🦑 Calamar a la plancha con ensalada verde", kcal:1780,p:104,c:187,f:56},
  {day:"Jueves 🐟", desayuno:"🥣 Kéfir + plátano + nueces", media:"☕ Café con leche + yogur o fruta", comida:"🐟 Ensalada de pasta integral con atún, tomate y aceitunas", merienda:"🍫 Yogur + fruta + chocolate", cena:"🍗 Pavo al airfryer con pimiento y cebolla asados", kcal:1830,p:116,c:166,f:67},
  {day:"Viernes 🥩", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🥩 Solomillo de cerdo con patata al horno y pimientos", merienda:"🍎 Yogur + fruta", cena:"🎉 Cena libre — disfruta sin culpa", kcal:1490,p:86,c:151,f:56, libre:true},
  {day:"Sábado 🦑", desayuno:"🍳 Huevos revueltos + tostada + plátano", media:"☕ Café con leche + yogur o fruta", comida:"🦑 Calamares y pulpo a la gallega con patata", merienda:"🍫 Yogur + fruta + chocolate", cena:"🎉 Cena libre de finde — disfruta", kcal:1460,p:80,c:147,f:54, libre:true},
  {day:"Domingo 🍗", desayuno:"🍳 Huevos revueltos + tostada + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🍗 Arroz con pollo, pimiento y cebolla (comida en familia)", merienda:"🍎 Yogur + fruta", cena:"🥚 Tortilla de espinacas con ensalada", kcal:1900,p:122,c:163,f:76}
]},
{ n:2, avg:1740, days:[
  {day:"Lunes 🍗", desayuno:"🥣 Kéfir + manzana + nueces", media:"☕ Café con leche + yogur o fruta", comida:"🍗 Pechuga a la plancha con quinoa y brócoli", merienda:"🍎 Yogur + fruta", cena:"🐟 Caballa al papillote con pimiento y cebolla al horno", kcal:1830,p:120,c:161,f:69},
  {day:"Martes 🐟", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🐟 Salmón al airfryer con limón y ensalada de patata", merienda:"🍫 Yogur + fruta + chocolate", cena:"🥚 Huevo escalfado con tomate y espinacas", kcal:1870,p:106,c:172,f:78},
  {day:"Miércoles 🫘", desayuno:"🥣 Kéfir + pera + nueces", media:"☕ Café con leche + yogur o fruta", comida:"🫘 Lentejas estofadas con pimiento y zanahoria", merienda:"🍎 Yogur + fruta", cena:"🍗 Brochetas de pavo con pimiento", kcal:1790,p:108,c:177,f:60},
  {day:"Jueves 🥐", desayuno:"🥐 Bollería o empanadilla (tu capricho)", media:"☕ Café con leche + yogur o fruta", comida:"🐙 Pulpo a la gallega con patata y pimentón", merienda:"🍫 Yogur + fruta + chocolate", cena:"🐟 Bacalao crujiente al horno con ajo", kcal:1870,p:102,c:177,f:72},
  {day:"Viernes 🐟", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🐟 Ensalada de arroz con atún, maíz y pimiento", merienda:"🍎 Yogur + fruta", cena:"🎉 Cena libre — disfruta sin culpa", kcal:1420,p:82,c:156,f:46, libre:true},
  {day:"Sábado 🥩", desayuno:"🍳 Huevos revueltos + tostada + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🥩 Ternera a la plancha con espárragos trigueros y patata", merienda:"🍫 Yogur + fruta + chocolate", cena:"🎉 Cena libre de finde — disfruta", kcal:1560,p:88,c:145,f:66, libre:true},
  {day:"Domingo 🍗", desayuno:"🍳 Huevos revueltos + tostada + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🍗 Muslitos de pollo al horno con patata (comida familiar)", merienda:"🍎 Yogur + fruta", cena:"🥚 Tortilla de espinacas con ensalada", kcal:1840,p:116,c:158,f:74}
]},
{ n:3, avg:1727, days:[
  {day:"Lunes 🫘", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🫘 Ensalada de lentejas con pimiento, tomate y atún", merienda:"🍎 Yogur + fruta", cena:"🍗 Pavo a la plancha con ensalada", kcal:1710,p:110,c:182,f:47},
  {day:"Martes 🐟", desayuno:"🥣 Kéfir + plátano + nueces", media:"☕ Café con leche + yogur o fruta", comida:"🐟 Salmón a la plancha con arroz integral y brócoli", merienda:"🍫 Yogur + fruta + chocolate", cena:"🍗 Pollo al curry ligero con pimiento", kcal:1890,p:118,c:166,f:75},
  {day:"Miércoles 🦑", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🦑 Calamar encebollado con patata (hecho el domingo)", merienda:"🍎 Yogur + fruta", cena:"🥚 Revuelto de huevo con espárragos trigueros", kcal:1750,p:102,c:165,f:66},
  {day:"Jueves 🍗", desayuno:"🥣 Kéfir + manzana + nueces", media:"☕ Café con leche + yogur o fruta", comida:"🍗 Pavo con judías verdes salteadas y arroz", merienda:"🍫 Yogur + fruta + chocolate", cena:"🐟 Dorada a la plancha con judías verdes", kcal:1820,p:120,c:165,f:65},
  {day:"Viernes 🥐", desayuno:"🥐 Bollería o empanadilla (tu capricho)", media:"☕ Café con leche + yogur o fruta", comida:"🥩 Bistec de ternera con ensalada de patata", merienda:"🍎 Yogur + fruta", cena:"🎉 Cena libre — disfruta sin culpa", kcal:1560,p:76,c:156,f:66, libre:true},
  {day:"Sábado 🐟", desayuno:"🍳 Huevos revueltos + tostada + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🐟 Ensalada de arroz con atún, maíz y aceitunas", merienda:"🍫 Yogur + fruta + chocolate", cena:"🎉 Cena libre de finde — disfruta", kcal:1490,p:84,c:150,f:56, libre:true},
  {day:"Domingo 🫘", desayuno:"🍳 Huevos revueltos + tostada + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🫘 Garbanzos con espinacas (comida familiar)", merienda:"🍎 Yogur + fruta", cena:"🐟 Sardinas al horno con ensalada", kcal:1870,p:110,c:176,f:71}
]},
{ n:4, avg:1774, days:[
  {day:"Lunes 🍗", desayuno:"🥣 Kéfir + pera + nueces", media:"☕ Café con leche + yogur o fruta", comida:"🍗 Pollo a la plancha con pimiento y cebolla salteados, y arroz", merienda:"🍎 Yogur + fruta", cena:"🥚 Tortilla francesa con tomate", kcal:1770,p:110,c:158,f:69},
  {day:"Martes 🦑", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🐙 Pulpo con patata y pimentón", merienda:"🍫 Yogur + fruta + chocolate", cena:"🐟 Dorada al horno con espárragos y limón", kcal:1800,p:112,c:172,f:62},
  {day:"Miércoles 🐟", desayuno:"🥣 Kéfir + manzana + nueces", media:"☕ Café con leche + yogur o fruta", comida:"🐟 Salmón al airfryer con espárragos y patata", merienda:"🍎 Yogur + fruta", cena:"🍗 Pavo a la plancha con ensalada", kcal:2010,p:124,c:196,f:73},
  {day:"Jueves 🫘", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🫘 Alubias con pimiento, zanahoria y jamón", merienda:"🍫 Yogur + fruta + chocolate", cena:"🦑 Calamar a la plancha con ensalada", kcal:1810,p:102,c:191,f:58},
  {day:"Viernes 🍕", desayuno:"🍞 Tostada integral con jamón + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🍕 Comida de equipo: pizza Papa John's, hamburguesa o milanesas del Chalito", merienda:"🍎 Yogur + fruta", cena:"🎉 Cena libre — disfruta sin culpa", kcal:1510,p:66,c:181,f:54, libre:true, pizza:true},
  {day:"Sábado 🥩", desayuno:"🍳 Huevos revueltos + tostada + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🥩 Solomillo con patata y pimientos", merienda:"🍫 Yogur + fruta + chocolate", cena:"🎉 Cena libre de finde — disfruta", kcal:1560,p:88,c:145,f:66, libre:true},
  {day:"Domingo 🍗", desayuno:"🍳 Huevos revueltos + tostada + fruta", media:"☕ Café con leche + yogur o fruta", comida:"🍗 Muslitos al horno con patata (comida familiar)", merienda:"🍎 Yogur + fruta", cena:"🫘 Ensalada de lentejas con pimiento, tomate y atún", kcal:1960,p:128,c:203,f:60}
]}
];
window.MENU_ALI = weeksData;
