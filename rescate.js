/* ==========================================================================
   RESCATE — lo que hace falta cuando el plan se cae
   Plan de Alimentación de Alejandro

   El resto de la app asume que estás tranquilo, en casa y con ganas de mirar
   un menú. Este archivo asume lo contrario: son las nueve, vienes reventado,
   no hay nada descongelado y estás a un minuto de bajar a por un bocata.

   Tres caminos, en el orden en que sirven de verdad:
     1. Comer en casa sin encender nada  (SIN_COCINAR)
     2. Comer en casa cocinando poco     (se calcula desde PLATOS)
     3. Comer fuera, pero eligiendo bien (FUERA)

   El tercero no es un premio de consolación ni una trampa. Salir a comer no
   rompe nada: lo que rompe es el "ya la he liado" de después. Así que si vas
   a salir, esto te dice qué pedir en el sitio al que ibas igualmente.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. SIN COCINAR — platos de verdad que no requieren fuego
   Todo esto sale de cosas que ya están en tu despensa base o aguantan semanas.
   --------------------------------------------------------------------------- */
const SIN_COCINAR = [
  {
    nombre: 'Lata de atún o caballa + pan + tomate',
    icono: 'pescado',
    min: 3,
    items: ['1 lata de atún o caballa al natural', 'Pan (del congelador, al tostador directo)', 'Tomate o lo que haya', 'Chorrito de aceite'],
    como: 'Escurre la lata, machaca el tomate sobre el pan tostado, encima el pescado, aceite y sal.',
    porQue: 'Proteína y pescado azul sin tocar la sartén. Es exactamente el objetivo del plan y te ha costado tres minutos.',
    esCena: true
  },
  {
    nombre: 'Legumbre de bote escurrida, aliñada',
    icono: 'legumbre',
    min: 2,
    items: ['1 bote de garbanzos, lentejas o alubias', 'Aceite de oliva, sal, vinagre', 'Lo que tengas: tomate, atún, cebolla, huevo duro'],
    como: 'Escurre bien bajo el grifo, aliña en el mismo bol y come. Frío está bueno, en serio.',
    porQue: 'La legumbre de bote ya está cocida. Lleva proteína y fibra, te llena, y no caduca — por eso está en tu despensa fija.',
    esCena: true
  },
  {
    nombre: 'Salmón ahumado del sobre + ensalada de bolsa',
    icono: 'pescado',
    min: 2,
    items: ['1 sobre de salmón ahumado', '1 bolsa de hojas (lechuga o mezclum) y 1 tomate', 'Limón o aceite'],
    como: 'Abre los dos, junta, limón por encima. Ya está.',
    porQue: 'Es el mismo salmón de tu bowl de quinoa, sin la quinoa. No es una versión de emergencia: es una cena completa sin tocar la sartén.',
    esCena: true
  },
  {
    nombre: 'Yogur griego o kéfir + fruta + nueces',
    icono: 'desayuno',
    min: 2,
    items: ['Yogur griego o kéfir', 'Fruta, la que sea', 'Puñado de nueces'],
    como: 'Todo en un bol.',
    porQue: 'Para cenas en las que no tienes hambre real pero sí necesitas cenar algo. Proteína, calcio y te deja dormir bien.',
    esCena: true
  },
  {
    nombre: 'Hummus + pan + zanahoria o pimiento',
    icono: 'legumbre',
    min: 2,
    items: ['Tarrina de hummus', 'Pan tostado', 'Verdura cruda para mojar'],
    como: 'Untar y mojar. Sin más.',
    porQue: 'El hummus es garbanzo. Cuenta como legumbre y encima te hace comer verdura cruda sin darte cuenta.',
    esCena: true
  },
  {
    nombre: 'Huevos duros (si ya los tienes hervidos) + pan + fruta',
    icono: 'huevo',
    min: 2,
    items: ['2 huevos duros', 'Pan', 'Fruta'],
    como: 'Pelar, sal, aceite. Come.',
    porQue: 'Hervir seis huevos un domingo te resuelve tres cenas. Es la media hora que más te rinde de toda la semana.',
    esCena: true
  },
  {
    nombre: 'Gazpacho de brik + huevo duro o atún',
    icono: 'ensalada',
    min: 2,
    items: ['Gazpacho fresco de nevera', 'Un huevo duro o una lata de atún'],
    como: 'Vaso de gazpacho, el huevo o el atún al lado o dentro.',
    porQue: 'El gazpacho solo no es una cena — es verdura líquida. Con proteína al lado sí lo es, y es de lo más fácil que hay.',
    esCena: true
  },
  {
    nombre: 'Queso fresco batido o skyr + fruta + miel',
    icono: 'media',
    min: 1,
    items: ['Queso fresco batido, skyr o yogur proteico', 'Fruta troceada', 'Miel o canela'],
    como: 'Mezclar.',
    porQue: 'Cuando lo que te pide el cuerpo es dulce y estás a punto de bajar a por un helado. Esto tiene 20 g de proteína y te quita el antojo igual.',
    esCena: false
  },
  {
    nombre: 'Tostada con jamón o pavo + fruta',
    icono: 'desayuno',
    min: 3,
    items: ['Pan del congelador', 'Jamón serrano, cocido o pavo loncheado', 'Fruta'],
    como: 'Pan al tostador, fiambre encima, fruta después.',
    porQue: 'Es tu desayuno de siempre. Como cena de urgencia funciona exactamente igual de bien y ya sabes que te gusta.',
    esCena: true
  },
  {
    nombre: 'Bocata en casa, hecho bien',
    icono: 'desayuno',
    min: 4,
    items: ['Pan', 'Lomo, pollo, jamón, atún o tortilla si hay', 'Tomate, lechuga', 'Aceite de oliva'],
    como: 'El mismo bocata que ibas a bajar a comprar, pero con tomate y aceite en vez de tres salsas.',
    porQue: 'Si lo que te pide el cuerpo es un bocata, no hace falta convencerte de que cenes brócoli. Hazlo aquí: te ahorras salir, la mitad de la grasa y ocho euros.',
    esCena: true
  }
];

/* ---------------------------------------------------------------------------
   2. FUERA — si vas a salir a comer, qué pedir en cada sitio
   Nada de "no vayas". Vas a ir. Esto es qué pedir cuando ya estás dentro.
   --------------------------------------------------------------------------- */
const FUERA = [
  {
    id: 'ametller',
    sitio: 'Ametller Origen',
    icono: 'ensalada',
    nivel: 'bien',
    resumen: 'Tu mejor opción y ya la conoces.',
    pide: [
      'Cualquier bowl con proteína — pollo, salmón, atún o huevo.',
      'Si hay, el de quinoa o arroz integral antes que el de pasta.',
      'Ensalada grande + una empanada o croqueta al lado, si el bowl se te queda corto.'
    ],
    evita: ['Los platos de pasta con salsas cremosas, que parecen ligeros y no lo son.'],
    bebida: 'Agua. La botella de zumo natural tiene el azúcar de cuatro naranjas.',
    truco: 'Si marcas días de bowl en Ajustes → Mi semana, Hoy te lo recuerda. Si un día cualquiera te agobias, este es el sitio: es la salida a comer fuera que no te desvía del plan absolutamente nada.',
    veredicto: 'Salir aquí no es romper el plan. Es el plan.'
  },
  {
    id: 'mcdonalds',
    sitio: "McDonald's o Burger King",
    icono: 'capricho',
    nivel: 'ok',
    resumen: 'Se puede comer aquí sin que pase nada. Depende de qué pidas.',
    pide: [
      'Una hamburguesa sencilla: McPollo, cheeseburger, hamburguesa normal, Long Chicken. Una, no doble.',
      'Patatas pequeñas, no medianas ni grandes. La diferencia entre pequeña y grande son unas 220 kcal por nada.',
      'Si hay ensalada como acompañamiento, cámbiala por las patatas.',
      'Nuggets de 6 con salsa de tomate o mostaza, mejor que con las cremosas.'
    ],
    evita: [
      'Las dobles y triples con bacon y salsa (Grand McExtreme, Big King, CBO...): una sola ronda las 900-1.000 kcal antes de patatas.',
      'El menú grande. Es la misma comida con 300 kcal de propina.',
      'El postre encadenado al menú — el McFlurry es un capricho aparte, no el final obligatorio.'
    ],
    bebida: 'Agua o refresco zero. Un refresco normal grande son ~60 g de azúcar, más que la hamburguesa entera en impacto.',
    truco: 'Pídelo para comer allí y sin el móvil delante. Comerlo en 4 minutos andando por la calle es lo que hace que a los 20 minutos sigas con hambre y piques otra cosa.',
    veredicto: 'Un menú sencillo son 700-900 kcal: es una comida normal, no un desastre. Lo que hace daño no es esta comida, es pensar que ya has roto el día y seguir rompiéndolo hasta la noche.'
  },
  {
    id: 'bocateria',
    sitio: 'Bar de barrio o bocatería',
    icono: 'desayuno',
    nivel: 'ok',
    resumen: 'Tu recaída típica. Tiene arreglo fácil.',
    pide: [
      'Bocata de lomo, pollo a la plancha, jamón serrano, atún o tortilla.',
      'Pide que le pongan tomate y lechuga: te llena más por casi nada.',
      'Si hay menú del día, casi siempre gana al bocata: primero de verdura o legumbre, segundo de carne o pescado a la plancha.'
    ],
    evita: [
      'La combinación bacon + queso + huevo + salsas, que es donde el bocata pasa de 500 a 1.100 kcal.',
      'Pedir bravas o croquetas "mientras traen el bocata". Ese pedido de más es el que sobra siempre.'
    ],
    bebida: 'Caña o agua. Si son dos cañas, que sea porque te apetece, no por inercia.',
    truco: 'Di "sin mayonesa, con tomate natural" al pedir. Es una frase, tarda dos segundos y se lleva 200 kcal.',
    veredicto: 'Un bocata de lomo con tomate es una comida perfectamente decente. El problema nunca fue el pan.'
  },
  {
    id: 'kebab',
    sitio: 'Kebab',
    icono: 'carne',
    nivel: 'ok',
    resumen: 'Mejor de lo que crees, si eliges el formato.',
    pide: [
      'Durum o pita de pollo, con toda la ensalada que te quieran meter.',
      'Salsa de yogur, y solo una.'
    ],
    evita: [
      'El plato combinado con patatas: duplica todo de golpe.',
      'Mezclar tres salsas — ahí se va la mitad de las calorías del plato.'
    ],
    bebida: 'Agua.',
    truco: 'Pide "con mucha ensalada, poca salsa". Sale por el mismo dinero y es otro plato distinto.',
    veredicto: 'Un durum de pollo con ensalada es carne magra, verdura y pan. Está más cerca de tu menú de lo que parece.'
  },
  {
    id: 'pizza',
    sitio: 'Pizzería, Telepizza o Papa John\'s',
    icono: 'equipo',
    nivel: 'ok',
    resumen: 'Lo comes una vez al mes en el trabajo y eso ya está contemplado.',
    pide: [
      'Masa fina antes que masa gruesa o pan.',
      'Ingredientes: jamón, pollo, atún, verduras.',
      'Empieza con una ensalada si el sitio la tiene: acabas comiendo dos porciones menos sin esfuerzo.'
    ],
    evita: [
      'Borde relleno de queso y extra de queso: son ~400 kcal invisibles.',
      'Barbacoa, carbonara y cuatro quesos, que son las tres más pesadas de la carta.'
    ],
    bebida: 'Agua o zero.',
    truco: 'Guarda dos porciones en la nevera nada más abrirla, antes de sentarte. Mañana tienes comida y hoy no te pasas. Fría o al horno un minuto está buena.',
    veredicto: 'La comida de equipo del último viernes de mes es tradición y está dentro del plan. No la toques ni la compenses.'
  },
  {
    id: 'poke',
    sitio: 'Poke, sushi o japo',
    icono: 'pescado',
    nivel: 'bien',
    resumen: 'De lo mejor que puedes pedir a domicilio.',
    pide: [
      'Poke bowl con salmón o atún, base de arroz, y toda la verdura que entre.',
      'Sushi: nigiri, sashimi, makis normales.',
      'Edamame de entrante.'
    ],
    evita: [
      'Rolls en tempura o con "crunch" por encima: es sushi frito.',
      'Salsa spicy mayo y salsa de anguila a chorros — pídelas aparte y mójalo tú.'
    ],
    bebida: 'Agua o té.',
    truco: 'El poke es prácticamente el método del plato en un bol: verdura, proteína, un carbohidrato. Si dudas entre sitios, este gana.',
    veredicto: 'Pedir poke un día que no puedes con nada es una buena decisión, no una recaída.'
  },
  {
    id: 'super',
    sitio: 'Súper (Mercadona, Bon Preu, Lidl)',
    icono: 'carrito',
    nivel: 'bien',
    resumen: 'La salida más rápida y casi nadie la usa.',
    pide: [
      'Pollo asado del mostrador: media pechuga con hojas de bolsa y un tomate es una cena completa por unos 5 €.',
      'Ensalada preparada + una lata de atún o un huevo duro.',
      'Sushi de la nevera, gazpacho, hummus, tortilla de patata fresca.',
      'Salmón ahumado y pan.'
    ],
    evita: ['Bajar con hambre y sin saber qué buscas: ahí es donde acaba cayendo la bollería de la entrada.'],
    bebida: 'Agua.',
    truco: 'Si vas a salir de casa igualmente, el súper de abajo está tan cerca como el bocata y sales con la cena de hoy y la de mañana.',
    veredicto: 'Salir a comprar la cena hecha cuenta como cocinar. No hay ninguna medalla por encender los fuegos.'
  },
  {
    id: 'chino',
    sitio: 'Chino o wok',
    icono: 'ave',
    nivel: 'ok',
    resumen: 'Muy variable: la clave es salteado sí, rebozado no.',
    pide: [
      'Pollo o ternera salteados con verduras.',
      'Arroz o tallarines con verdura.',
      'Rollitos de primavera solo si van al horno, no fritos.'
    ],
    evita: ['Cerdo agridulce, pollo al limón y todo lo rebozado: es fritura con almíbar.'],
    bebida: 'Té o agua.',
    truco: 'Pide un plato de verdura salteada para compartir contigo mismo. Suena raro y funciona: llenas con eso.',
    veredicto: 'Un salteado de pollo con verduras y arroz es casi un plato de tu menú.'
  },
  {
    id: 'panaderia',
    sitio: 'Panadería o horno (Granier, 365...)',
    icono: 'capricho',
    nivel: 'cuidado',
    resumen: 'Aquí es fácil que la comida acabe siendo solo azúcar y harina.',
    pide: [
      'Bocadillo de jamón, pavo o tortilla.',
      'Si es media mañana y quieres el dulce, que sea el dulce y ya — no dulce más bocata.'
    ],
    evita: ['Croissant + napolitana + café con azúcar como comida: te deja con hambre en una hora y de peor humor.'],
    bebida: 'Café con leche normal.',
    truco: 'Tu plan ya cuenta con bollería algún día. Si hoy es uno, disfrútalo tranquilo. Si se ha vuelto cosa de cada día, esa es la señal, no el pastel en sí.',
    veredicto: 'La bollería no está prohibida en tu plan. Solo tiene una frecuencia, y esa frecuencia ya la conoces.'
  }
];

/* ---------------------------------------------------------------------------
   3. ANTOJOS — "me apetece X" traducido a algo que puedes hacer ahora
   No es sustituir el antojo por lechuga. Es dárselo, en casa, en 10 minutos.
   --------------------------------------------------------------------------- */
const ANTOJOS = [
  {
    antojo: 'Un bocata',
    icono: 'desayuno',
    min: 5,
    solucion: 'Pan del congelador al tostador, lomo o pollo a la plancha 3 minutos, tomate restregado y aceite.',
    nota: 'Si no hay carne: atún con tomate, o tortilla francesa dentro del pan. Los tres son bocatas de verdad.'
  },
  {
    antojo: 'Una hamburguesa',
    icono: 'carne',
    min: 10,
    solucion: 'Hamburguesa de ternera o pavo de la bandeja del súper, sartén 3-4 minutos por lado, pan tostado, tomate, lechuga, cebolla, mostaza.',
    nota: 'Congela las hamburguesas el día que las compras y saca una la noche antes. Es la que te salva el jueves.'
  },
  {
    antojo: 'Pizza',
    icono: 'equipo',
    min: 8,
    solucion: 'Pan de molde o base fina, tomate frito, orégano, queso rallado y lo que tengas (jamón, atún, pimiento). Airfryer 190° 6-8 min u horno 200° 10 min.',
    nota: 'No sabe igual que una Papa John\'s y no pasa nada: quita el antojo, que es de lo que se trata.'
  },
  {
    antojo: 'Patatas fritas',
    icono: 'capricho',
    min: 20,
    solucion: 'Patata en bastones, un chorrito de aceite, sal y pimentón. Airfryer 200° 18-20 min agitando a mitad.',
    nota: 'Con el airfryer llevan cinco veces menos aceite. Es tu electrodoméstico más útil para esto exactamente.'
  },
  {
    antojo: 'Algo dulce',
    icono: 'capricho',
    min: 2,
    solucion: 'Yogur griego + plátano + una onza de chocolate negro derretida por encima. O plátano con crema de cacahuete.',
    nota: 'Está en tu menú como merienda tres días a la semana. No es un premio de consolación: es lo que tocaba.'
  },
  {
    antojo: 'Picar algo salado',
    icono: 'media',
    min: 1,
    solucion: 'Un puñado de frutos secos ya contado en un bol (no de la bolsa), aceitunas, encurtidos, o palomitas hechas en el microondas con maíz suelto.',
    nota: 'La clave es sacar la ración y guardar la bolsa antes de sentarte. Comer de la bolsa no tiene freno para nadie.'
  },
  {
    antojo: 'Helado',
    icono: 'capricho',
    min: 3,
    solucion: 'Plátano congelado triturado con un chorrito de leche: sale una crema tipo helado. O yogur griego con fruta congelada.',
    nota: 'Si lo que quieres es un helado de verdad, cómpralo de unidad, no la tarrina. La tarrina en el congelador te llama todas las noches.'
  },
  {
    antojo: 'Un refresco',
    icono: 'media',
    min: 1,
    solucion: 'Zero con hielo y limón, o agua con gas con limón, que engaña bastante.',
    nota: 'Los zero aquí no son un problema. Bebe el que te apetezca.'
  }
];

/* ---------------------------------------------------------------------------
   4. DESPENSA DE RESCATE — que en casa siempre haya una cena resuelta
   Diez cosas que no caducan y que convierten "no tengo nada" en mentira.
   --------------------------------------------------------------------------- */
const DESPENSA_RESCATE = [
  { item: 'Atún en lata al natural', por: 'Cena entera en 3 minutos y dura años. Ten cuatro latas.', precio: '~4 €' },
  { item: 'Legumbres de bote (garbanzos, lentejas, alubias)', por: 'Ya cocidas. Frías o calientes, siempre valen. Ten cuatro botes.', precio: '~4 €' },
  { item: 'Pan de molde integral', por: 'Al congelador nada más llegar. Del congelador al tostador directo.', precio: '~1,80 €' },
  { item: 'Huevos', por: 'Tortilla en cinco minutos, o huevos duros para toda la semana.', precio: '~3 €' },
  { item: 'Ensalada de bolsa y tomate', por: 'Lo único fresco de la lista. Convierte cualquier cosa en un plato.', precio: '~2,50 €' },
  { item: 'Verdura congelada', por: 'Microondas cinco minutos. Nunca se te caduca.', precio: '~1,50 €' },
  { item: 'Pechuga de pollo congelada en raciones', por: 'Sacas solo la de hoy. Cero desperdicio.', precio: '~6 €' },
  { item: 'Salmón ahumado en sobre', por: 'Una cena completa sin cocinar nada. Cerrado, aguanta hasta su fecha.', precio: '~5,79 €' },
  { item: 'Yogur griego o skyr', por: 'Cena ligera, merienda y antojo dulce, todo en uno.', precio: '~2 €' },
  { item: 'Frutos secos', por: 'Para picar con freno, y aguantan meses.', precio: '~4 €' }
];

/* ---------------------------------------------------------------------------
   5. Frases del modo agobio. Sin moralina, sin "tú puedes".
   --------------------------------------------------------------------------- */
const FRASES_AGOBIO = [
  'Comer algo rápido hoy no borra nada de lo anterior.',
  'La comida de dentro de una hora no depende de esta.',
  'Cenar mal un martes no es un patrón. Es un martes.',
  'No hace falta que sea el plato del menú para que cuente como cena.',
  'Lo que rompe el plan no es la comida: es el "ya da igual" de después.',
  'Elegir algo en dos minutos y seguir con tu noche también es cuidarte.'
];


/* ==========================================================================
   5. LOS SÚPERS QUE TIENES AL LADO
   Sacado de los datos reales de OpenStreetMap alrededor de Còrsega 52
   (la Nova Esquerra de l'Eixample). Dentro de 700 m hay 28 supermercados;
   aquí están todos los que sirven para algo, con lo que de verdad cambia:
   a cuántos minutos andando están, hasta qué hora abren, y para qué es
   bueno cada uno. Los minutos son a 5 km/h, redondeando hacia arriba.

   La idea no es que los uses todos. Es que cuando pienses "no tengo nada
   en casa" sepas que a un minuto y medio hay comida, y que la excusa de
   "es que ir a comprar es un viaje" deje de existir.
   ========================================================================== */
const SUPERS = [
  {
    nombre:'BonÀrea', dir:'Còrsega 49', min:1, m:47, horario:'L-S 9:00-21:00',
    tipo:'diario', destacado:true,
    para:'Carne. Es lo que mejor hace: pollo, pavo, cerdo y hamburguesas en bandejas pequeñas, para una persona, sin que sobre media bandeja.',
    nota:'Lo tienes literalmente cruzando la calle. Es el súper de "no he pensado nada para hoy": bajas, coges una bandeja y vuelves en cinco minutos. De verdura va justo.'
  },
  {
    nombre:'Bonpreu', dir:'Av. de Josep Tarradellas', min:2, m:93, horario:'L-S 9:00-21:00',
    tipo:'completa', destacado:true,
    para:'Tu compra normal. Es de donde salen la mayoría de cosas de tu plan: el pan 100% integral de la caja azul, el pavo cocido del 93-95%, el queso fresco Burgo de Arias, la quinoa en vasito.',
    nota:'A dos minutos. Si solo vas a pisar un súper esta semana, que sea este: tiene todo lo del plan y está más cerca que ningún otro grande.'
  },
  {
    nombre:'Caprabo', dir:'Rocafort 235', min:3, m:218, horario:'L-S 9:00-21:00',
    tipo:'diario',
    para:'Rellenar cuatro cosas. Pequeño, se entra y se sale rápido.',
    nota:'Útil si vuelves por Rocafort y te falta algo puntual. Para la compra grande no compensa.'
  },
  {
    nombre:'Lidl', dir:'Carrer de Numància', min:4, m:257, horario:'L-S 9:00-21:00',
    tipo:'completa', destacado:true,
    para:'Lo barato de tu lista: hummus (0,69 €), gazpacho fresco, espinacas baby lavadas, frutos secos, salmón ahumado Ocean Sea.',
    nota:'Media docena de cosas de tu plan son bastante más baratas aquí que en cualquier otro. Merece la pena bajar cada dos semanas y cargar con eso.'
  },
  {
    nombre:'Condis', dir:'Av. de Josep Tarradellas 11', min:4, m:272, horario:'todos los días 9:00-23:00',
    tipo:'urgencia', destacado:true,
    para:'La hora mala. Abre hasta las once de la noche los siete días.',
    nota:'Este es el que evita el bocata. Si son las diez y media y no hay nada en casa, aquí hay huevos, ensalada de bolsa y pavo. Guárdate el dato, es el que más veces te va a servir.'
  },
  {
    nombre:'Entença Supermercat 24 h', dir:'Entença 208-210', min:2, m:141, horario:'24 horas',
    tipo:'urgencia',
    para:'Cualquier hora, literalmente. Es de barrio y pequeño, pero está abierto siempre.',
    nota:'Para la noche que llegas tardísimo. No es barato ni tiene gran cosa fresca, pero a las 2 de la mañana es la diferencia entre cenar algo y no cenar.'
  },
  {
    nombre:'Mercadona', dir:'Carrer de Berlín', min:5, m:301, horario:'L-S 9:00-21:00',
    tipo:'completa',
    para:'La compra completa de una vez: pechuga de pollo, pulpo cocido en bolsa, congelados (salmón, merluza, calamar, verdura), atún, arroz, pasta.',
    nota:'El más equilibrado de todos para llenar el carro entero de golpe. Cinco minutos andando.'
  },
  {
    nombre:'Ametller Origen', dir:'Carrer de Berlín 39-41', min:6, m:423, horario:'L-S 10:00-21:00',
    tipo:'especial', destacado:true,
    para:'Tus bowls. Y la verdura y la fruta mejores del barrio, aunque cueste más.',
    nota:'Es el de los días de bowl. Si te pilla de camino, la fruta de aquí dura bastante más que la de súper normal.'
  },
  {
    nombre:'Consum', dir:'Av. de Roma 32-34', min:5, m:402, horario:'L-S 9:00-21:00 · domingo cerrado',
    tipo:'completa',
    para:'Alternativa a Mercadona si vas por Roma. Marca propia decente y precios parecidos.',
    nota:'Cierra los domingos, como casi todos. El domingo tira de Condis, del 24 horas o del Aldi de Numància 88.'
  },
  {
    nombre:'Aldi', dir:'Carrer de Nicaragua 105-109', min:6, m:487, horario:'L-S 9:00-21:30',
    tipo:'completa',
    para:'Básicos baratos: huevos, leche, congelados, latas.',
    nota:'Hay otro en Numància 88 que además abre domingos de 12:00 a 20:00.'
  },
  {
    nombre:'Dia', dir:'Marquès de Sentmenat 44', min:7, m:497, horario:'L-S 9:00-21:00',
    tipo:'diario',
    para:'Lo básico y poco más.',
    nota:'Solo si te queda de paso. Teniendo Bonpreu a dos minutos, no hay motivo para venir aquí a propósito.'
  },
  {
    nombre:'Mercadona', dir:'Viladomat 275-285', min:6, m:477, horario:'L-S 9:00-21:00',
    tipo:'completa',
    para:'Lo mismo que el de Berlín.',
    nota:'Está a la misma distancia. Ve al que te pille mejor según por dónde vuelvas.'
  },
  {
    nombre:'Mercat del Ninot', dir:'Mallorca 133 · Casanova', min:12, m:1011, horario:'L-S mañanas · L-V también tardes',
    tipo:'mercado', destacado:true,
    para:'Pescadería y frutería de verdad. Puedes pedir 200 g de merluza o dos filetes de salmón, sin bandejas de familia.',
    nota:'Este resuelve tu problema real de que se te caduca la comida: aquí compras la cantidad exacta de una persona, que es justo lo que un súper no te deja hacer. Para el finde va perfecto.'
  },
  {
    nombre:'Mercat de Sants', dir:'Sant Jordi 6', min:16, m:1314, horario:'L y S mañanas · M-V hasta las 20:00',
    tipo:'mercado',
    para:'Lo mismo que el Ninot, un poco más lejos y algo más barato.',
    nota:'Si un sábado te apetece pasear, es un buen destino. Entre semana abre hasta las ocho, que casi ningún mercado lo hace.'
  }
];

/* Los demás que hay dentro de 700 m, para que conste que están y no volver a
   preguntarse "¿habrá algo por aquí?": Anha (Tarradellas, 2 min), Plusfresc
   (París, 3 min), Toko (Rocafort 217, 4 min), Coaliment (París 53-61, 4 min),
   Primaprix (Calàbria 259, 5 min), Sorli Discau (Provença 49, 5 min), BonÀrea
   (Numància 59 y Berlín 20), Condis (Londres 12), Bonpreu (Taquígraf Serra 7),
   Aldi (Numància 88), Mercadona (Tarragona 177) y Hiper Galicia (pl. Països
   Catalans). Ninguno aporta nada que no tengas más cerca. */
const SUPERS_TOTAL = 28;
