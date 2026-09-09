/* ==========================================================================
   Ficha de cada plato del menú — Plan de Alimentación de Alejandro

   Para cada comida del menú: todo lo que hace falta para poder hacerla sin
   saber cocinar. Qué comprar, dónde, cómo se hace paso a paso, qué hacer si
   no te apetece, y la versión de cinco minutos para los días malos.

   Decisión deliberada: los números (kcal, macros) van AL FINAL y en pequeño.
   Su pauta es método del plato, sin contar calorías, y tiene historial de
   restricción — abrir una ficha y encontrarse una cifra en grande es justo
   lo que le hace abandonar. Aquí lo primero es siempre "cómo se hace".

   Las cantidades son PARA UNA PERSONA. Para el tupper del día siguiente se
   dobla todo; cada ficha dice si el plato aguanta bien o no.
   ========================================================================== */

const PLATOS = {

/* ============================ LEGUMBRES ============================ */

'garbanzos-espinacas-pavo': {
  nombre:'Garbanzos salteados con espinacas y taquitos de pavo',
  icono:'legumbre', tiempo:12, donde:'Sartén', tupper:'Perfecto — está mejor al día siguiente',
  porQue:'Es probablemente el mejor plato de todo tu menú para el colesterol. La fibra soluble del garbanzo arrastra parte del colesterol en el intestino, y como sacia muchísimo, es de los que mejor te protegen de llegar con hambre acumulada a la noche.',
  ingredientes:[
    {q:'1 bote', item:'garbanzos cocidos', nota:'400 g. De bote, ya cocidos. No compres secos: son 12 h de remojo.'},
    {q:'2 puñados', item:'espinacas frescas', nota:'O una bolsa de congeladas, van igual de bien'},
    {q:'80 g', item:'taquitos de pavo', nota:'Vienen ya cortados en tarrina'},
    {q:'1 diente', item:'ajo'},
    {q:'1 chorro', item:'aceite de oliva'},
    {q:'Al gusto', item:'sal y pimentón dulce'}
  ],
  compra:'Todo en cualquier súper. Los garbanzos, en la sección de conservas — los de bote de cristal suelen estar mejor que los de lata, pero cualquiera vale. Los taquitos de pavo están en la nevera de charcutería, en tarrinas pequeñas, al lado de los de jamón.',
  pasos:[
    'Escurre los garbanzos en un colador y pásalos por agua del grifo hasta que deje de salir espuma. Esto quita el sabor a bote.',
    'Pon la sartén a fuego medio con un chorro de aceite. Pela el ajo, córtalo en láminas y échalo.',
    'Cuando el ajo empiece a dorarse por los bordes (30-40 segundos, no más o amarga), echa los taquitos de pavo y remueve 2 minutos.',
    'Echa las espinacas. Parecerá muchísimo: no lo es, se reducen a nada en 1 minuto. Remueve hasta que se queden lacias.',
    'Echa los garbanzos, sal y una pizca de pimentón. Remueve 3-4 minutos para que se calienten y cojan el sabor.',
    'Listo. Si lo ves seco, un chorrito de agua o de aceite al final.'
  ],
  trucos:[
    'El pimentón se echa siempre con el fuego bajo o fuera del fuego: si se quema, amarga el plato entero.',
    'Si le pones un tomate rallado cuando echas los garbanzos y lo dejas 5 minutos más, tienes otro plato distinto sin comprar nada nuevo.'
  ],
  diaMalo:'Garbanzos del bote escurridos + espinacas de bolsa, 2 minutos al microondas, un chorro de aceite crudo y sal. Cuenta exactamente igual.',
  conservar:'3-4 días en la nevera. Aguanta perfectamente el tupper y se puede comer frío o templado.',
  ojo:'No lo dejes mucho rato en el fuego después de echar los garbanzos: se deshacen y quedan puré.',
  kcal:540, p:34, c:56, f:17
},

'lentejas-estofadas': {
  nombre:'Lentejas estofadas con pimiento y champiñón',
  icono:'legumbre', tiempo:20, donde:'Cazuela', tupper:'Perfecto — mejor al día siguiente',
  porQue:'La legumbre que más hierro te aporta y la que más llena por poco dinero. Para tu colesterol es de lo mejor que puedes comer, y es el plato más barato del menú con diferencia.',
  ingredientes:[
    {q:'1 bote', item:'lentejas cocidas', nota:'400 g, de bote'},
    {q:'1/2', item:'pimiento rojo o verde'},
    {q:'4-5', item:'champiñones', nota:'O una bandeja de laminados, te ahorra cortar'},
    {q:'1/2', item:'cebolla'},
    {q:'1 diente', item:'ajo'},
    {q:'1 cucharadita', item:'pimentón dulce'},
    {q:'1 chorro', item:'aceite de oliva y sal'}
  ],
  compra:'Las lentejas de bote, en conservas. Los champiñones laminados vienen en bandeja en la sección de verdura y te ahorran el corte — merece la pena pagar los 20 céntimos de más.',
  pasos:[
    'Corta la cebolla y el pimiento en trozos pequeños. No tienen que ser perfectos, nadie lo va a ver.',
    'Sartén honda o cazuela a fuego medio con aceite. Echa cebolla y pimiento con una pizca de sal.',
    'Deja 8 minutos removiendo de vez en cuando, hasta que la cebolla esté blandita y transparente. Esto es lo que da todo el sabor, no te lo saltes.',
    'Añade el ajo picado y los champiñones. 5 minutos más.',
    'Baja el fuego, echa el pimentón y remueve 10 segundos.',
    'Echa las lentejas escurridas y enjuagadas, más medio vaso de agua. Sal. Deja 5 minutos a fuego suave.'
  ],
  trucos:[
    'Si te sobra tiempo, dobla las cantidades y congela la mitad en un tupper. Es de las pocas cosas del menú que congela perfecto.',
    'Una hoja de laurel al principio cambia bastante el resultado y cuesta céntimos.'
  ],
  diaMalo:'Lentejas de bote enjuagadas + un tomate rallado + aceite y sal, al microondas. Tres minutos.',
  conservar:'4 días en nevera. Congela bien hasta 3 meses.',
  ojo:'Enjuaga siempre las lentejas de bote: el líquido de conserva lleva mucha sal y sabor metálico.',
  kcal:520, p:28, c:68, f:13
},

'ensalada-lentejas-atun': {
  nombre:'Ensalada de lentejas con pimiento, tomate y atún',
  icono:'legumbre', tiempo:8, donde:'En frío', tupper:'Ideal — hecha para llevar',
  porQue:'Legumbre y pescado azul en el mismo plato, sin encender el fuego. Es el plato con mejor relación entre lo poco que cuesta hacerlo y lo bien que te viene para el colesterol.',
  ingredientes:[
    {q:'1 bote', item:'lentejas cocidas'},
    {q:'1 lata', item:'atún al natural', nota:'Al natural, no en aceite de girasol'},
    {q:'1/2', item:'pimiento rojo'},
    {q:'1', item:'tomate'},
    {q:'Opcional', item:'cebolla o cebolleta'},
    {q:'Al gusto', item:'aceite de oliva, vinagre y sal'}
  ],
  compra:'El atún al natural viene en latas con la etiqueta "al natural" — es el que menos grasa añadida lleva. Si lo prefieres en aceite, que sea de oliva, no de girasol.',
  pasos:[
    'Escurre y enjuaga las lentejas. Escúrrelas bien, que no quede agua.',
    'Corta el pimiento y el tomate en dados pequeños.',
    'Mézclalo todo en un bol con el atún escurrido.',
    'Aliña con aceite, un poco de vinagre y sal. Remueve.',
    'Ya está. Mejora si la dejas 20 minutos en la nevera antes de comerla.'
  ],
  trucos:['Hazla la noche antes: al día siguiente está mejor porque todo ha cogido el aliño.'],
  diaMalo:'Es que esta ya es la versión de día malo. Ocho minutos y sin fuego.',
  conservar:'2-3 días en nevera. Si le pones el tomate al final aguanta mejor.',
  ojo:'No la aliñes con mucha antelación si le has puesto lechuga: se queda mustia.',
  kcal:480, p:34, c:52, f:14
},

'alubias-pimiento-champinon-jamon': {
  nombre:'Alubias con pimiento, champiñón y jamón',
  icono:'legumbre', tiempo:15, donde:'Sartén', tupper:'Muy bueno',
  porQue:'Misma jugada que los garbanzos: fibra que ayuda con el colesterol y saciedad de la buena. El jamón está para dar sabor, no como fuente de proteína — con poca cantidad ya cambia el plato entero.',
  ingredientes:[
    {q:'1 bote', item:'alubias blancas cocidas'},
    {q:'1/2', item:'pimiento rojo'},
    {q:'4-5', item:'champiñones laminados'},
    {q:'60 g', item:'taquitos de jamón serrano'},
    {q:'1 diente', item:'ajo'},
    {q:'1 chorro', item:'aceite de oliva'}
  ],
  compra:'Los taquitos de jamón vienen en tarrina en la nevera. Con una tarrina pequeña tienes para dos o tres platos.',
  pasos:[
    'Aceite en la sartén a fuego medio. Echa el ajo picado y el pimiento en dados.',
    'A los 5 minutos, echa los champiñones. Otros 4-5 minutos.',
    'Echa los taquitos de jamón y remueve 1 minuto. No más: se ponen duros.',
    'Echa las alubias escurridas y enjuagadas. Remueve con cuidado 3-4 minutos.',
    'Prueba antes de echar sal — el jamón ya sala bastante.'
  ],
  trucos:['Las alubias se rompen con mucha facilidad. Remueve poco y con movimientos suaves, o mueve la sartén en vez de remover.'],
  diaMalo:'Alubias enjuagadas + jamón + aceite crudo. Microondas.',
  conservar:'3 días. Aguanta el tupper bien si no la has removido mucho.',
  ojo:'Prueba siempre antes de salar: entre el jamón y el líquido de la conserva es fácil pasarse.',
  kcal:530, p:32, c:58, f:18
},

'garbanzos-espinacas': {
  nombre:'Garbanzos con espinacas',
  icono:'legumbre', tiempo:15, donde:'Sartén', tupper:'Perfecto',
  porQue:'La versión clásica, sin el pavo. Es un plato de toda la vida y funciona igual de bien: la fibra del garbanzo es lo que te interesa para el colesterol.',
  ingredientes:[
    {q:'1 bote', item:'garbanzos cocidos'},
    {q:'2 puñados', item:'espinacas'},
    {q:'2 dientes', item:'ajo'},
    {q:'1 cucharadita', item:'pimentón dulce'},
    {q:'Opcional', item:'1 tomate rallado'},
    {q:'1 chorro', item:'aceite de oliva y sal'}
  ],
  compra:'Nada especial. Si vas justo de tiempo, espinacas congeladas en porciones: se echan directas a la sartén sin descongelar.',
  pasos:[
    'Ajo laminado en la sartén con aceite, fuego medio, hasta que se dore un poco.',
    'Si le pones tomate rallado, échalo ahora y deja que se haga 5 minutos.',
    'Echa las espinacas y remueve hasta que se reduzcan.',
    'Fuego bajo, pimentón, remueve rápido.',
    'Garbanzos escurridos y enjuagados, sal, 4 minutos.'
  ],
  trucos:['Si es comida familiar, dobla o triplica las cantidades: escala perfecto y no se complica.'],
  diaMalo:'Garbanzos + espinacas congeladas al microondas, aceite crudo por encima.',
  conservar:'3-4 días.',
  ojo:'El pimentón, siempre con el fuego bajo.',
  kcal:500, p:24, c:60, f:17
},

/* ============================ PESCADO ============================ */

'salmon-airfryer-esparragos': {
  nombre:'Salmón al airfryer con espárragos',
  icono:'pescado', tiempo:12, donde:'Airfryer', tupper:'Bueno — cómelo en 2 días',
  porQue:'El salmón es pescado azul: sus grasas omega-3 son de las pocas cosas que la evidencia respalda de verdad para mejorar el perfil de colesterol. Deberías comer pescado azul dos o tres veces por semana, y este es el más fácil de todos.',
  ingredientes:[
    {q:'1 lomo', item:'salmón fresco', nota:'150-180 g, con piel o sin ella, da igual'},
    {q:'1 manojo', item:'espárragos verdes', nota:'Trigueros'},
    {q:'1/2', item:'limón'},
    {q:'1 chorro', item:'aceite de oliva, sal y pimienta'}
  ],
  compra:'El salmón en la pescadería o en bandeja ya cortado, que es más cómodo. Si te da apuro pedir en la pescadería, la bandeja del lineal vale exactamente igual. Los espárragos trigueros vienen en manojo con una goma.',
  pasos:[
    'Precalienta el airfryer a 180°C, 3 minutos. Si el tuyo no tiene precalentado, no pasa nada.',
    'Corta el extremo duro de los espárragos: cógelos por los dos extremos y dóblalos, se parten solos por donde toca.',
    'Salpimienta el salmón y ponle un chorrito de aceite y unas gotas de limón.',
    'Espárragos con aceite y sal en la cesta. 5 minutos a 180°C.',
    'Abre, pon el salmón encima, 8 minutos más a 180°C.',
    'Está hecho cuando al apretarlo con un tenedor se abre en láminas. Si se resiste, 2 minutos más.'
  ],
  trucos:[
    'No lo pases: el salmón seco es la razón número uno por la que la gente cree que no le gusta el pescado. Mejor quedarse corto que pasarse — por dentro puede quedar ligeramente más oscuro y está perfecto.',
    'Papel de horno en la cesta y no friegas nada.'
  ],
  diaMalo:'Salmón a la sartén, 3 minutos por cada lado, y una bolsa de ensalada al lado.',
  conservar:'2 días en nevera. El pescado no aguanta tanto como la legumbre.',
  ojo:'Si tu airfryer es pequeño, haz primero los espárragos y luego el salmón por separado. Amontonado no se hace bien.',
  kcal:560, p:40, c:18, f:36
},

'salmon-horno-esparragos-patata': {
  nombre:'Salmón al horno con espárragos y patata',
  icono:'pescado', tiempo:30, donde:'Horno', tupper:'Bueno',
  porQue:'Mismo salmón, pero con patata: es la versión completa del método del plato — proteína, verdura e hidrato en la misma bandeja. Y como va todo al horno, el tiempo es de espera, no de trabajo.',
  ingredientes:[
    {q:'1 lomo', item:'salmón fresco', nota:'150-180 g'},
    {q:'1 manojo', item:'espárragos verdes'},
    {q:'1-2', item:'patatas medianas'},
    {q:'1/2', item:'limón'},
    {q:'1 chorro', item:'aceite de oliva, sal y pimienta'}
  ],
  compra:'Nada raro. Las patatas, las normales para cocer o para horno; las "especial freír" quedan más secas.',
  pasos:[
    'Horno a 200°C.',
    'Corta las patatas en rodajas finas, de medio centímetro. Cuanto más finas, antes se hacen.',
    'Extiéndelas en la bandeja con aceite y sal. Al horno 20 minutos ellas solas.',
    'Saca la bandeja. Pon los espárragos y el salmón encima de las patatas, con aceite, sal, pimienta y limón.',
    '10-12 minutos más.',
    'El salmón está cuando se abre en láminas al apretarlo con un tenedor.'
  ],
  trucos:['La patata tiene que ir sola los primeros 20 minutos: necesita mucho más tiempo que el pescado. Si lo metes todo a la vez, o el salmón sale seco o la patata sale cruda.'],
  diaMalo:'Sáltate la patata y hazlo al airfryer: 8 minutos y listo.',
  conservar:'2 días.',
  ojo:'No amontones las patatas: si están unas encima de otras se cuecen en vez de asarse y quedan blandurrias.',
  kcal:620, p:40, c:48, f:30
},

'salmon-airfryer-limon-patata': {
  nombre:'Salmón al airfryer con limón y ensalada de patata',
  icono:'pescado', tiempo:20, donde:'Airfryer', tupper:'Bueno — la ensalada de patata aguanta bien',
  porQue:'La ensalada de patata fría tiene una ventaja que casi nadie conoce: al enfriarse, parte de su almidón se convierte en almidón resistente, que se comporta como fibra. Sube menos el azúcar y alimenta a tu flora intestinal.',
  ingredientes:[
    {q:'1 lomo', item:'salmón fresco'},
    {q:'2', item:'patatas medianas'},
    {q:'1', item:'huevo', nota:'Opcional, para la ensalada'},
    {q:'1/2', item:'cebolleta'},
    {q:'1', item:'limón'},
    {q:'Al gusto', item:'aceite de oliva, vinagre y sal'}
  ],
  compra:'Nada especial.',
  pasos:[
    'Cuece las patatas enteras con piel en agua con sal, 20-25 minutos. Están listas cuando entra un cuchillo sin resistencia.',
    'Mientras, salpimienta el salmón, riégalo con limón y ponlo en el airfryer: 9-10 minutos a 180°C.',
    'Escurre las patatas, deja que templen, pélalas (la piel sale sola) y córtalas en dados.',
    'Mezcla la patata con la cebolleta picada, aceite, vinagre y sal.',
    'Sirve el salmón al lado.'
  ],
  trucos:['Cuece el doble de patata y guarda la mitad: te sirve para otra ensalada en dos días sin volver a cocer nada.'],
  diaMalo:'Salmón al airfryer y una bolsa de ensalada. La patata te la saltas y no pasa nada.',
  conservar:'2 días el salmón, 3 la ensalada de patata.',
  ojo:'Las patatas se cuecen enteras y con piel. Si las cortas antes, se llenan de agua.',
  kcal:640, p:40, c:52, f:30
},

'salmon-plancha-arroz-brocoli': {
  nombre:'Salmón a la plancha con arroz integral y brócoli',
  icono:'pescado', tiempo:25, donde:'Sartén', tupper:'Muy bueno',
  porQue:'El método del plato de manual: medio plato de verdura, un cuarto de proteína, un cuarto de hidrato. El arroz integral tiene más fibra que el blanco, que otra vez es lo que le interesa a tu colesterol.',
  ingredientes:[
    {q:'70 g en crudo', item:'arroz integral', nota:'Un vaso pequeño'},
    {q:'1 lomo', item:'salmón'},
    {q:'1/2', item:'brócoli', nota:'O una bolsa de congelado'},
    {q:'1 chorro', item:'aceite de oliva, sal y pimienta'}
  ],
  compra:'El arroz integral tarda más que el blanco, unos 25 minutos. Si te agobia, hay vasitos de arroz integral ya cocido que se hacen en 90 segundos al microondas — no es hacer trampa.',
  pasos:[
    'Pon el arroz a cocer según diga el paquete, normalmente 25 minutos en agua con sal.',
    'A los 15 minutos, echa el brócoli en trozos en la misma olla. Se cuecen juntos y friegas una cosa menos.',
    'Sartén bien caliente con un poco de aceite. Salmón salpimentado, 3-4 minutos por el lado de la piel sin tocarlo.',
    'Dale la vuelta, 2-3 minutos más.',
    'Escurre arroz y brócoli, y monta el plato.'
  ],
  trucos:['Sartén bien caliente antes de poner el pescado, y no lo muevas durante el primer par de minutos: así se despega solo y no se rompe.'],
  diaMalo:'Vasito de arroz integral al microondas, brócoli congelado al microondas, salmón al airfryer. Diez minutos.',
  conservar:'2 días.',
  ojo:'El brócoli pasado de cocción huele fuerte y se queda blando. En cuanto esté verde intenso y entre el tenedor, fuera.',
  kcal:620, p:42, c:56, f:26
},

'salmon-horno-brocoli': {
  nombre:'Salmón al horno con brócoli',
  icono:'pescado', tiempo:20, donde:'Horno', tupper:'Bueno',
  porQue:'Cena de pescado azul, ligera y con verdura. Buena opción de noche porque no te deja pesado y el omega-3 sigue trabajando para tu colesterol.',
  ingredientes:[
    {q:'1 lomo', item:'salmón'},
    {q:'1/2', item:'brócoli'},
    {q:'1 diente', item:'ajo'},
    {q:'1 chorro', item:'aceite de oliva, sal y limón'}
  ],
  compra:'El brócoli congelado va perfectamente para esto y te ahorra lavarlo y cortarlo.',
  pasos:[
    'Horno a 200°C.',
    'Corta el brócoli en ramitos. Extiéndelo en la bandeja con aceite, sal y el ajo picado.',
    '10 minutos al horno.',
    'Saca, pon el salmón encima con sal, pimienta y limón.',
    '10-12 minutos más.'
  ],
  trucos:['El brócoli al horno queda con los bordes tostados y crujientes, muy distinto del hervido. Si crees que no te gusta el brócoli, pruébalo así antes de descartarlo.'],
  diaMalo:'Los dos al airfryer: brócoli 8 minutos, salmón 9 minutos.',
  conservar:'2 días.',
  ojo:'Nada especial.',
  kcal:520, p:40, c:16, f:34
},

'merluza-horno-ajo': {
  nombre:'Merluza al horno con ajo',
  icono:'pescado', tiempo:20, donde:'Horno', tupper:'Regular — mejor comerla el día',
  porQue:'Pescado blanco: mucha proteína, muy poca grasa y muy fácil de digerir. Es la cena perfecta para los días que entrenas de noche o te acuestas pronto, porque no te deja pesado.',
  ingredientes:[
    {q:'1-2 lomos', item:'merluza', nota:'Fresca o congelada, da igual'},
    {q:'2 dientes', item:'ajo'},
    {q:'1 puñado', item:'perejil fresco', nota:'O limón, según el día'},
    {q:'1', item:'limón'},
    {q:'1 chorro', item:'aceite de oliva y sal'}
  ],
  compra:'La merluza congelada en lomos es de las mejores compras que puedes hacer: es barata, no se estropea y sale igual de bien. Ten siempre una bolsa en el congelador.',
  pasos:[
    'Si es congelada, descongélala la noche antes en la nevera. Si se te ha olvidado, bajo el grifo de agua fría dentro de una bolsa cerrada, 20 minutos.',
    'Horno a 200°C.',
    'Pon los lomos en una fuente con sal, aceite y el zumo de medio limón.',
    'Lamina los ajos y repártelos por encima. Si usas perejil, pícalo y échalo también.',
    '12-15 minutos, según el grosor.',
    'Está lista cuando la carne pasa de transparente a blanca opaca y se separa en láminas.'
  ],
  trucos:['Para que quede doradita, sube a gratinar los últimos 2 minutos, vigilándola.'],
  diaMalo:'Merluza al microondas con limón, tapada, 4 minutos. No es gran cosa, pero es cena hecha.',
  conservar:'1-2 días. El pescado blanco pierde mucho de un día para otro.',
  ojo:'La merluza se seca muy rápido. En cuanto esté blanca, fuera del horno.',
  kcal:380, p:38, c:8, f:20
},

'merluza-plancha-limon': {
  nombre:'Merluza a la plancha con limón',
  icono:'pescado', tiempo:10, donde:'Sartén', tupper:'Mejor el mismo día',
  porQue:'Diez minutos, una sartén y ya tienes cena. Es de las opciones más rápidas del menú y de las más ligeras.',
  ingredientes:[
    {q:'1-2 lomos', item:'merluza'},
    {q:'1', item:'limón'},
    {q:'1 chorro', item:'aceite de oliva y sal'}
  ],
  compra:'Lomos congelados, ya te sirven.',
  pasos:[
    'Seca bien el pescado con papel de cocina. Es lo que separa una plancha buena de una mala.',
    'Sartén bien caliente con poco aceite.',
    'Merluza con sal, 3-4 minutos sin tocarla.',
    'Vuelta con cuidado, 2-3 minutos.',
    'Limón por encima al servir.'
  ],
  trucos:['Secar el pescado antes de la plancha es el truco de cocina más útil de toda esta app: si está húmedo, se cuece en vez de dorarse.'],
  diaMalo:'Es que ya es rapidísima.',
  conservar:'Mejor comerla hecha.',
  ojo:'Si la sartén no está bien caliente, se pega y se rompe.',
  kcal:340, p:38, c:4, f:18
},

'bacalao-horno-ajo': {
  nombre:'Bacalao crujiente al horno con ajo',
  icono:'pescado', tiempo:20, donde:'Horno', tupper:'Regular',
  porQue:'Pescado blanco con mucha proteína y poca grasa. El bacalao aguanta la cocción mejor que la merluza, así que es más difícil que te salga seco: buena opción mientras coges confianza.',
  ingredientes:[
    {q:'1-2 lomos', item:'bacalao fresco o desalado'},
    {q:'3 dientes', item:'ajo'},
    {q:'1 chorro', item:'aceite de oliva'},
    {q:'Opcional', item:'pan rallado o guindilla'}
  ],
  compra:'Búscalo como "bacalao desalado" o "al punto de sal" — ese va directo. El bacalao en salazón entero necesita dos días de desalado; ni lo mires.',
  pasos:[
    'Horno a 200°C.',
    'Bacalao en la fuente con un chorro de aceite.',
    'Lamina los ajos y dóralos en una sartén aparte con aceite, a fuego suave. Cuando estén dorados, échalos por encima del bacalao con su aceite.',
    'Si quieres que quede crujiente, una cucharada de pan rallado por encima.',
    '12-15 minutos. Gratina los últimos 3 si le has puesto pan rallado.'
  ],
  trucos:['El aceite de dorar los ajos vale oro: échalo todo por encima, es donde está el sabor.'],
  diaMalo:'Airfryer, 10 minutos a 180°C con ajo en polvo.',
  conservar:'2 días.',
  ojo:'Si compras bacalao en salazón por error, no lo cocines sin desalar: es incomible.',
  kcal:400, p:40, c:10, f:22
},

'caballa-papillote': {
  nombre:'Caballa al papillote con pimiento y champiñón',
  icono:'pescado', tiempo:25, donde:'Horno', tupper:'Bueno',
  porQue:'La caballa es de los pescados azules con más omega-3 que existen, y de los más baratos del mostrador. Para tu colesterol es tan buena como el salmón y cuesta la mitad. Deberías comerla más.',
  ingredientes:[
    {q:'2', item:'filetes de caballa'},
    {q:'1/2', item:'pimiento rojo'},
    {q:'4-5', item:'champiñones'},
    {q:'1/2', item:'limón'},
    {q:'1 chorro', item:'aceite de oliva y sal'},
    {q:'Necesario', item:'papel de horno'}
  ],
  compra:'La caballa está en la pescadería y es de lo más barato. Pide que te la limpien y te saquen los filetes: es gratis y te ahorra el único paso complicado.',
  pasos:[
    'Horno a 190°C.',
    'Corta un trozo grande de papel de horno, del tamaño de un folio y medio.',
    'Pon en el centro el pimiento y los champiñones en láminas, con aceite y sal.',
    'Encima, los filetes de caballa con sal, limón y un chorrito de aceite.',
    'Cierra el papel como un paquete: junta los dos lados largos y dóblalos varias veces, luego dobla los extremos hacia abajo. Tiene que quedar cerrado para que el vapor no escape.',
    '15-18 minutos. Abre con cuidado, sale vapor muy caliente.'
  ],
  trucos:['El papillote es la técnica más agradecida que hay para alguien que empieza: no puedes quemarlo, no puedes secarlo y no ensucias nada.'],
  diaMalo:'Caballa en lata al natural sobre una tostada, con tomate. Suena a poco y es una cena perfectamente digna.',
  conservar:'2 días.',
  ojo:'No lo abras antes de tiempo para mirar: pierdes el vapor, que es lo que lo cocina.',
  kcal:520, p:38, c:14, f:36
},

'sardinas-horno-ensalada': {
  nombre:'Sardinas al horno con ensalada',
  icono:'pescado', tiempo:20, donde:'Horno', tupper:'Malo — cómelas hechas',
  porQue:'Junto con la caballa, el pescado azul más barato y con más omega-3 del mercado. Además llevan calcio si te comes la espina pequeña. Es probablemente la mejor relación calidad-precio-salud de todo tu menú.',
  ingredientes:[
    {q:'6-8', item:'sardinas frescas'},
    {q:'1 bolsa', item:'ensalada variada'},
    {q:'1', item:'limón'},
    {q:'Al gusto', item:'aceite de oliva, sal gorda y vinagre'}
  ],
  compra:'En la pescadería, y pide que te las limpien. Son de temporada: en primavera y verano están mejor y más baratas.',
  pasos:[
    'Horno a 200°C.',
    'Coloca las sardinas en la bandeja, sin amontonarlas. Sal gorda por encima y un chorro de aceite.',
    '10-12 minutos. No más.',
    'Mientras, aliña la ensalada con aceite, vinagre y sal.',
    'Limón sobre las sardinas al servir.'
  ],
  trucos:['Papel de horno debajo, o pasarás media hora fregando la bandeja.'],
  diaMalo:'Sardinillas de lata sobre tostada con tomate. En serio, cuenta.',
  conservar:'Cómelas el día. Al día siguiente huelen mucho y pierden.',
  ojo:'El olor se queda en la cocina. Enciende el extractor antes de empezar y abre una ventana.',
  kcal:480, p:36, c:12, f:32
},

'salmon-ahumado-ensalada': {
  nombre:'Salmón ahumado con ensalada verde',
  icono:'pescado', tiempo:5, donde:'En frío', tupper:'Bueno',
  porQue:'Cena de cinco minutos sin encender nada, con la proteína y el omega-3 resueltos. Es la cena que salva los domingos por la noche cuando no quieres ni ver la cocina.',
  ingredientes:[
    {q:'100 g', item:'salmón ahumado', nota:'Un paquete pequeño'},
    {q:'1 bolsa', item:'ensalada verde'},
    {q:'Opcional', item:'tomate cherry, aguacate o cebolleta'},
    {q:'Al gusto', item:'aceite de oliva, limón y sal'}
  ],
  compra:'El salmón ahumado en lonchas está en la nevera. Ojo: lleva bastante sal, así que no le eches casi nada más de sal al plato.',
  pasos:[
    'Ensalada en el plato.',
    'Salmón ahumado por encima.',
    'Aceite, limón, y muy poca sal.',
    'Ya está.'
  ],
  trucos:['Es la cena que deberías tener siempre de reserva en la nevera para cuando no tengas fuerzas para cocinar. Sin abrir aguanta bastantes días.'],
  diaMalo:'Esta ya es la de día malo.',
  conservar:'Una vez abierto, 2 días.',
  ojo:'Lleva bastante sal de por sí: no la añadas por costumbre.',
  kcal:420, p:32, c:10, f:28
}

};

/* ============================ CEFALÓPODOS ============================ */
Object.assign(PLATOS, {

'calamar-plancha-ensalada': {
  nombre:'Calamar a la plancha con ensalada',
  icono:'marisco', tiempo:12, donde:'Sartén', tupper:'Regular — se pone duro',
  porQue:'Muchísima proteína y prácticamente nada de grasa. Como cena es de las más ligeras que puedes hacerte, y se hace en cinco minutos de fuego.',
  ingredientes:[
    {q:'250 g', item:'calamar limpio', nota:'En anillas o entero'},
    {q:'1 bolsa', item:'ensalada verde'},
    {q:'1 diente', item:'ajo'},
    {q:'1', item:'limón'},
    {q:'1 chorro', item:'aceite de oliva y sal'}
  ],
  compra:'Pide en la pescadería "calamar limpio" y te lo dan listo. También lo hay congelado en anillas, que va perfecto y es más barato.',
  pasos:[
    'Seca muy bien el calamar con papel de cocina. Suelta mucha agua y es lo que impide que se dore.',
    'Sartén a fuego fuerte con poco aceite. Tiene que estar muy caliente.',
    'Echa el calamar en una sola capa. No lo amontones.',
    '2 minutos por un lado, 1-2 por el otro. Y fuera.',
    'Ajo picado y perejil al final, fuera del fuego. Limón al servir.'
  ],
  trucos:['El calamar tiene dos puntos buenos: menos de 3 minutos, o más de 30. Entre medias se pone como una goma. Aquí vamos a la plancha, así que cronometra y sé estricto.'],
  diaMalo:'Anillas de calamar congeladas al airfryer, 8 minutos, y ensalada de bolsa.',
  conservar:'Mejor el día. Recalentado se endurece.',
  ojo:'Fuego fuerte y poco tiempo. Es el error más típico y no tiene arreglo una vez hecho.',
  kcal:360, p:36, c:12, f:16
},

'calamar-encebollado-patata': {
  nombre:'Calamar encebollado con patata',
  icono:'marisco', tiempo:40, donde:'Cazuela', tupper:'Muy bueno — mejor al día siguiente',
  porQue:'Este es el otro extremo del calamar: cocción larga y suave hasta que queda tierno. Es un plato de domingo, para hacer con calma, y de los que mejor saben recalentados.',
  ingredientes:[
    {q:'400 g', item:'calamar limpio'},
    {q:'2', item:'cebollas grandes'},
    {q:'2', item:'patatas'},
    {q:'2 dientes', item:'ajo'},
    {q:'1 vaso', item:'vino blanco', nota:'Opcional, pero cambia mucho'},
    {q:'1 chorro', item:'aceite de oliva y sal'}
  ],
  compra:'Nada raro.',
  pasos:[
    'Corta las cebollas en tiras finas. Es lo más pesado del plato, pero es lo que le da todo.',
    'Cazuela con aceite a fuego medio-bajo. Cebolla con una pizca de sal.',
    'Déjala 15-20 minutos removiendo de vez en cuando, hasta que esté muy blanda y dorada. Con prisa no sale.',
    'Añade el ajo picado y el calamar en anillas. Sube el fuego 2 minutos.',
    'Echa el vino y deja que hierva 2 minutos para que se evapore el alcohol.',
    'Añade las patatas en trozos y agua hasta casi cubrir. Tapa y 20 minutos a fuego suave, hasta que la patata esté tierna.'
  ],
  trucos:['La patata no se corta: se "casca". Clava el cuchillo un poco y haz palanca hasta que se rompa sola. Así suelta almidón y la salsa espesa.'],
  diaMalo:'No es plato de día malo. Déjalo para un domingo y ese día cambia por calamar a la plancha.',
  conservar:'3 días, y está mejor al día siguiente. Congela bien.',
  ojo:'No tengas prisa con la cebolla. Es literalmente el 80% del sabor del plato.',
  kcal:560, p:38, c:52, f:20
},

'pulpo-gallega-patata': {
  nombre:'Pulpo a la gallega con patata y pimentón',
  icono:'marisco', tiempo:15, donde:'Cazuela', tupper:'Bueno',
  porQue:'Proteína altísima, grasa casi cero. Y es un plato que impresiona muchísimo para lo poco que cuesta hacerlo, si compras el pulpo ya cocido.',
  ingredientes:[
    {q:'300 g', item:'pulpo cocido', nota:'Ya cocido, en bandeja o al vacío'},
    {q:'2', item:'patatas'},
    {q:'1 cucharadita', item:'pimentón', nota:'Dulce, o picante si te gusta'},
    {q:'Al gusto', item:'aceite de oliva virgen extra y sal gorda'}
  ],
  compra:'Busca "pulpo cocido" en la nevera o al vacío: te ahorra dos horas de cocción y el riesgo de que quede duro. Cuesta más, pero es la diferencia entre hacerlo y no hacerlo.',
  pasos:[
    'Cuece las patatas enteras con piel, 20-25 minutos, hasta que entre el cuchillo sin resistencia.',
    'Pélalas y córtalas en rodajas gruesas. Ponlas de base en el plato.',
    'Corta el pulpo en rodajas con tijeras, que va mucho mejor que con cuchillo.',
    'Pulpo encima de la patata.',
    'Sal gorda, pimentón por encima y un buen chorro de aceite de oliva virgen extra en crudo.'
  ],
  trucos:['Se sirve templado, ni ardiendo ni frío de nevera. Si el pulpo viene de la nevera, un golpe corto de microondas o un minuto en el agua caliente de las patatas.'],
  diaMalo:'Pulpo cocido en rodajas + patata del microondas + pimentón y aceite. Diez minutos.',
  conservar:'2 días.',
  ojo:'El aceite se echa en crudo al final, nunca se calienta. Es la mitad del plato.',
  kcal:520, p:40, c:48, f:18
},

'calamares-pulpo-gallega': {
  nombre:'Calamares y pulpo a la gallega con patata',
  icono:'marisco', tiempo:20, donde:'Sartén y cazuela', tupper:'Regular',
  porQue:'La versión de fin de semana del anterior: dos proteínas del mar en el mismo plato, muchísima proteína y poquísima grasa.',
  ingredientes:[
    {q:'200 g', item:'pulpo cocido'},
    {q:'200 g', item:'calamar limpio'},
    {q:'2', item:'patatas'},
    {q:'1 cucharadita', item:'pimentón'},
    {q:'Al gusto', item:'aceite de oliva virgen extra y sal gorda'}
  ],
  compra:'Igual que el anterior. El pulpo, siempre ya cocido.',
  pasos:[
    'Cuece las patatas enteras con piel, 20-25 minutos.',
    'Mientras, seca bien el calamar y hazlo a la plancha con fuego fuerte, 2 minutos por lado. Reserva.',
    'Corta el pulpo en rodajas con tijeras.',
    'Monta: patata en rodajas de base, calamar y pulpo encima.',
    'Sal gorda, pimentón y aceite en crudo.'
  ],
  trucos:['Aprovecha la olla de las patatas para templar el pulpo justo antes de servir.'],
  diaMalo:'Solo el pulpo, sin calamar. Igual de bueno y la mitad de trabajo.',
  conservar:'2 días, pero el calamar se endurece.',
  ojo:'El calamar, fuego fuerte y poco tiempo. El pulpo ya viene cocido, solo se templa.',
  kcal:540, p:46, c:48, f:18
},

/* ============================ AVES ============================ */

'pollo-plancha-arroz-pimientos': {
  nombre:'Pollo a la plancha con arroz y pimientos',
  icono:'ave', tiempo:25, donde:'Sartén', tupper:'Perfecto',
  porQue:'El plato más versátil del menú y el que mejor aguanta el tupper. La pechuga de pollo es proteína casi pura con muy poca grasa: es lo que te permite cuadrar el resto del día sin pensarlo.',
  ingredientes:[
    {q:'1', item:'pechuga de pollo', nota:'150-180 g, en filetes'},
    {q:'70 g en crudo', item:'arroz', nota:'Integral mejor que blanco'},
    {q:'1', item:'pimiento rojo o verde'},
    {q:'1/2', item:'cebolla', nota:'Opcional'},
    {q:'1 chorro', item:'aceite de oliva, sal y pimienta'}
  ],
  compra:'La pechuga ya fileteada te ahorra el paso más incómodo. En bandeja, en la nevera.',
  pasos:[
    'Pon el arroz a cocer según el paquete.',
    'Corta el pimiento en tiras. Sartén con aceite a fuego medio, pimiento con sal, 8-10 minutos hasta que esté blando.',
    'Saca el pimiento y reserva.',
    'Sube el fuego. Salpimienta el pollo y hazlo 3-4 minutos por cada lado, sin moverlo, hasta que esté dorado.',
    'Comprueba que está hecho: córtalo por el centro, tiene que estar blanco entero, sin nada rosa.',
    'Monta el plato con el arroz, el pimiento y el pollo.'
  ],
  trucos:[
    'Si haces el doble de pollo y el doble de arroz, tienes el tupper de mañana hecho sin trabajo extra. Es el plato ideal para eso.',
    'Salpimienta el pollo 10 minutos antes de hacerlo si tienes tiempo: queda bastante más jugoso.'
  ],
  diaMalo:'Vasito de arroz al microondas + pollo al airfryer 12 minutos + pimiento congelado. Ocho minutos de trabajo.',
  conservar:'3 días. Es de lo mejor del menú para tupper.',
  ojo:'El pollo poco hecho no se puede comer. Ante la duda, córtalo y mira: blanco entero.',
  kcal:600, p:48, c:62, f:16
},

'pechuga-quinoa-brocoli': {
  nombre:'Pechuga a la plancha con quinoa y brócoli',
  icono:'ave', tiempo:25, donde:'Sartén', tupper:'Perfecto',
  porQue:'La quinoa tiene más proteína y más fibra que el arroz, y se hace en 15 minutos. Como cereal es de los que mejor te vienen: sube el azúcar más despacio y llena más.',
  ingredientes:[
    {q:'60 g en crudo', item:'quinoa'},
    {q:'1', item:'pechuga de pollo'},
    {q:'1/2', item:'brócoli'},
    {q:'1 chorro', item:'aceite de oliva, sal y pimienta'}
  ],
  compra:'La quinoa está con los arroces y pastas. Compra la que viene ya lavada — si no, hay que enjuagarla o amarga.',
  pasos:[
    'Enjuaga la quinoa en un colador fino bajo el grifo, 30 segundos.',
    'Ponla a cocer con el doble de agua que de quinoa, 15 minutos. Está lista cuando ves que a cada grano le sale una especie de rabito blanco.',
    'A los 8 minutos, echa el brócoli en trozos en la misma olla.',
    'Sartén caliente, pechuga salpimentada, 3-4 minutos por cada lado.',
    'Comprueba que está blanca por dentro y monta el plato.'
  ],
  trucos:['El rabito blanco del grano es la señal infalible de que la quinoa está en su punto. Si no lo ves, le faltan minutos.'],
  diaMalo:'Quinoa en vasito al microondas, brócoli congelado, pollo al airfryer.',
  conservar:'3 días.',
  ojo:'Si la quinoa amarga es que no la enjuagaste. No tiene arreglo, pero la próxima vez ya lo sabes.',
  kcal:580, p:50, c:52, f:18
},

'pavo-champinones-arroz': {
  nombre:'Pavo con champiñones salteados y arroz',
  icono:'ave', tiempo:22, donde:'Sartén', tupper:'Perfecto',
  porQue:'El pavo es aún más magro que el pollo: es de las carnes con menos grasa que existen, lo cual con tu colesterol viene muy bien. Y los champiñones aportan sabor sin sumar prácticamente nada.',
  ingredientes:[
    {q:'150 g', item:'filetes de pavo'},
    {q:'70 g en crudo', item:'arroz'},
    {q:'1 bandeja', item:'champiñones laminados'},
    {q:'1 diente', item:'ajo'},
    {q:'1 chorro', item:'aceite de oliva, sal y perejil'}
  ],
  compra:'Los filetes de pavo están al lado de los de pollo. Los champiñones laminados en bandeja te ahorran cortar.',
  pasos:[
    'Arroz a cocer.',
    'Sartén con aceite a fuego fuerte. Champiñones con sal.',
    'Muy importante: no los toques los primeros 3 minutos. Sueltan agua; hay que esperar a que se evapore y empiecen a dorarse.',
    'Cuando estén dorados, ajo picado, 30 segundos, y saca a un plato.',
    'En la misma sartén, el pavo salpimentado, 2-3 minutos por lado. Es fino y se hace enseguida.',
    'Junta todo y perejil por encima.'
  ],
  trucos:['El error universal con los champiñones es removerlos todo el rato: sueltan agua y se cuecen en vez de dorarse. Déjalos quietos.'],
  diaMalo:'Vasito de arroz + pavo al airfryer + champiñones al microondas.',
  conservar:'3 días.',
  ojo:'El pavo se seca antes que el pollo porque tiene menos grasa. Cuidado con pasarlo.',
  kcal:560, p:48, c:60, f:14
},

'pavo-plancha-ensalada': {
  nombre:'Pavo a la plancha con ensalada',
  icono:'ave', tiempo:10, donde:'Sartén', tupper:'Bueno',
  porQue:'Cena rápida, ligerísima y con mucha proteína. Diez minutos de principio a fin.',
  ingredientes:[
    {q:'150 g', item:'filetes de pavo'},
    {q:'1 bolsa', item:'ensalada'},
    {q:'Al gusto', item:'aceite de oliva, vinagre y sal'}
  ],
  compra:'Nada especial.',
  pasos:[
    'Sartén caliente con poco aceite.',
    'Pavo salpimentado, 2-3 minutos por lado.',
    'Ensalada aliñada al lado.'
  ],
  trucos:['Un poco de ajo en polvo y pimentón sobre el pavo antes de la plancha cambia bastante y no cuesta nada.'],
  diaMalo:'Ya lo es.',
  conservar:'2 días.',
  ojo:'Nada.',
  kcal:400, p:44, c:12, f:18
},

'pavo-airfryer-pimiento-champinon': {
  nombre:'Pavo al airfryer con pimiento y champiñón asados',
  icono:'ave', tiempo:18, donde:'Airfryer', tupper:'Bueno',
  porQue:'Todo en el airfryer: enciendes, esperas y ya está. Es la cena de los días que no quieres estar de pie en la cocina.',
  ingredientes:[
    {q:'150 g', item:'filetes de pavo'},
    {q:'1', item:'pimiento rojo'},
    {q:'1 bandeja', item:'champiñones'},
    {q:'1 chorro', item:'aceite de oliva, sal, ajo en polvo y pimentón'}
  ],
  compra:'Nada especial.',
  pasos:[
    'Corta el pimiento en tiras y los champiñones por la mitad.',
    'Mézclalos en un bol con aceite, sal y ajo en polvo.',
    'A la cesta del airfryer, 10 minutos a 190°C.',
    'Sacude la cesta y pon el pavo salpimentado encima.',
    '7-8 minutos más a 190°C.'
  ],
  trucos:['Sacudir la cesta a mitad es lo que hace que se dore todo por igual. Si no, la parte de abajo se hace y la de arriba no.'],
  diaMalo:'Solo el pavo al airfryer y una bolsa de ensalada.',
  conservar:'2 días.',
  ojo:'No llenes la cesta hasta arriba: si va muy apretado, se cuece en vez de asarse.',
  kcal:440, p:46, c:18, f:20
},

'brochetas-pavo-pimiento': {
  nombre:'Brochetas de pavo con pimiento',
  icono:'ave', tiempo:20, donde:'Airfryer o sartén', tupper:'Bueno',
  porQue:'Lo mismo de siempre pero en formato distinto. Suena tonto, pero cambiar la forma de un plato ayuda a no aburrirse, y aburrirse es una de las razones por las que se abandonan los planes.',
  ingredientes:[
    {q:'150 g', item:'pavo en tacos'},
    {q:'1', item:'pimiento rojo'},
    {q:'1/2', item:'cebolla'},
    {q:'Necesario', item:'palos de brocheta'},
    {q:'1 chorro', item:'aceite, sal, pimentón y ajo en polvo'}
  ],
  compra:'Los palos de brocheta están en la sección de menaje o al lado del papel de aluminio. Si son de madera, mójalos 10 minutos antes.',
  pasos:[
    'Corta el pavo, el pimiento y la cebolla en trozos parecidos, del tamaño de un bocado.',
    'Mézclalo en un bol con aceite, sal, pimentón y ajo en polvo. Déjalo 10 minutos si puedes.',
    'Monta las brochetas alternando: pavo, pimiento, cebolla, pavo...',
    'Airfryer 12 minutos a 190°C, dándoles la vuelta a mitad. O sartén 10 minutos girándolas.'
  ],
  trucos:['Trozos del mismo tamaño = todo se hace a la vez. Es la única regla que importa en una brocheta.'],
  diaMalo:'Lo mismo pero sin montar brochetas: todo salteado en la sartén.',
  conservar:'2 días.',
  ojo:'Los palos de madera sin mojar se queman en el airfryer.',
  kcal:420, p:44, c:18, f:18
},

'pollo-curry-pimiento': {
  nombre:'Pollo al curry ligero con pimiento',
  icono:'ave', tiempo:20, donde:'Sartén', tupper:'Muy bueno',
  porQue:'Un plato con sabor de verdad, que es más importante de lo que parece: un plan del que disfrutas es un plan que sigues. Esta versión va con leche de coco ligera o yogur, no con nata.',
  ingredientes:[
    {q:'1', item:'pechuga de pollo en tacos'},
    {q:'1', item:'pimiento rojo'},
    {q:'1/2', item:'cebolla'},
    {q:'1 cucharada', item:'curry en polvo'},
    {q:'100 ml', item:'leche de coco ligera', nota:'O 2 cucharadas de yogur natural'},
    {q:'1 chorro', item:'aceite de oliva y sal'}
  ],
  compra:'El curry en polvo está en especias. La leche de coco ligera, en la sección internacional: busca la que pone "light" o "ligera", porque la normal lleva mucha grasa saturada y con tu colesterol no interesa.',
  pasos:[
    'Cebolla y pimiento en tiras, a la sartén con aceite, 8 minutos.',
    'Añade el pollo en tacos, 5 minutos, hasta que esté blanco por fuera.',
    'Baja el fuego, echa el curry y remueve 30 segundos para que se tueste.',
    'Echa la leche de coco y sal, y deja 5 minutos a fuego suave.',
    'Comprueba que el pollo está hecho por dentro.'
  ],
  trucos:['Si usas yogur en vez de leche de coco, échalo con el fuego apagado o se corta.'],
  diaMalo:'Pollo al airfryer con curry en polvo espolvoreado. Sin salsa, pero con el mismo sabor.',
  conservar:'3 días, y al día siguiente está mejor.',
  ojo:'El curry hay que tostarlo un momento en el aceite: si lo echas directamente al líquido, sabe a polvo.',
  kcal:540, p:46, c:28, f:26
},

'arroz-pollo-familia': {
  nombre:'Arroz con pollo, pimiento y cebolla',
  icono:'ave', tiempo:40, donde:'Cazuela', tupper:'Bueno',
  porQue:'El plato de domingo en familia. Es un arroz de toda la vida, escala fácil para varios y no requiere ninguna técnica complicada.',
  ingredientes:[
    {q:'80 g por persona', item:'arroz redondo'},
    {q:'1 por persona', item:'contramuslo o pechuga de pollo'},
    {q:'1', item:'pimiento rojo'},
    {q:'1', item:'cebolla'},
    {q:'2 dientes', item:'ajo'},
    {q:'1 vaso', item:'tomate triturado'},
    {q:'Doble que de arroz', item:'caldo de pollo o agua'},
    {q:'Al gusto', item:'aceite, sal, pimentón y azafrán o colorante'}
  ],
  compra:'Arroz redondo tipo bomba, o el normal de paella. Para esto no uses arroz largo: queda suelto y no es lo que buscas.',
  pasos:[
    'Cazuela ancha con aceite. Dora el pollo troceado y salado, 6-8 minutos. Sácalo.',
    'En el mismo aceite, cebolla, pimiento y ajo, 10 minutos a fuego medio.',
    'Echa el tomate triturado, 5 minutos más.',
    'Fuego bajo, pimentón, remueve rápido. Vuelve a meter el pollo.',
    'Echa el arroz y remueve 1 minuto para que se impregne.',
    'Echa el caldo caliente (el doble de volumen que de arroz), el azafrán y sal. Sube el fuego hasta que hierva.',
    'Baja a fuego medio-bajo, 18 minutos SIN REMOVER. Apaga y deja reposar 5 minutos tapado.'
  ],
  trucos:[
    'El arroz no se remueve nunca una vez echado el caldo. Si lo remueves suelta almidón y sale pastoso.',
    'El caldo tiene que estar caliente cuando lo echas. Si está frío, corta la cocción y el grano queda desigual.'
  ],
  diaMalo:'No es plato de día malo. Cambia por pollo a la plancha con arroz de vasito.',
  conservar:'2 días. El arroz pierde textura pero se come bien.',
  ojo:'Los 18 minutos son 18. Ni abrir, ni remover, ni probar.',
  kcal:680, p:44, c:82, f:20
},

'muslitos-horno-patata': {
  nombre:'Muslitos de pollo al horno con patata',
  icono:'ave', tiempo:50, donde:'Horno', tupper:'Muy bueno',
  porQue:'Plato de domingo que se hace solo: lo metes al horno y te olvidas 45 minutos. El muslo tiene algo más de grasa que la pechuga, pero también mucho más sabor, y es bastante más barato.',
  ingredientes:[
    {q:'4-6', item:'muslitos o jamoncitos de pollo'},
    {q:'3-4', item:'patatas'},
    {q:'1', item:'cebolla'},
    {q:'4 dientes', item:'ajo', nota:'Sin pelar, enteros'},
    {q:'Al gusto', item:'aceite, sal, pimentón, orégano y limón'}
  ],
  compra:'Los jamoncitos son la parte de abajo del muslo y son de lo más barato del pollo. En bandeja, en la nevera.',
  pasos:[
    'Horno a 200°C.',
    'Corta las patatas en rodajas de un centímetro y la cebolla en tiras. Extiéndelas en la bandeja con aceite y sal.',
    'Salpimienta los muslitos y frótalos con pimentón, orégano y un poco de aceite. Ponlos encima de las patatas.',
    'Reparte los ajos enteros sin pelar y riega todo con un chorro de limón.',
    '45-50 minutos. A los 25, dale la vuelta a los muslitos.',
    'Están listos cuando la piel está dorada y crujiente y al pinchar cerca del hueso sale jugo transparente, no rosado.'
  ],
  trucos:[
    'Los ajos sin pelar se asan enteros y luego se aprietan: sale una crema dulce que está buenísima con la patata.',
    'Los muslitos van encima de las patatas a propósito: la grasa que sueltan cae sobre ellas y las mejora mucho.'
  ],
  diaMalo:'Muslitos al airfryer, 25 minutos a 190°C dándoles la vuelta a mitad. Sin patata.',
  conservar:'3 días. Se recalienta muy bien al airfryer y queda crujiente otra vez.',
  ojo:'Jugo rosado cerca del hueso = le faltan minutos. Vuelve a meterlo sin miedo.',
  kcal:700, p:46, c:60, f:32
}

});

/* ============================ CARNE, HUEVO Y FRÍOS ============================ */
Object.assign(PLATOS, {

'solomillo-patata-pimientos': {
  nombre:'Solomillo de cerdo con patata al horno y pimientos',
  icono:'carne', tiempo:35, donde:'Horno y sartén', tupper:'Bueno',
  porQue:'El solomillo de cerdo es, con diferencia, la parte más magra del cerdo: tiene menos grasa que muchos cortes de ternera. Con tu colesterol es la carne roja que mejor te encaja.',
  ingredientes:[
    {q:'200 g', item:'solomillo de cerdo'},
    {q:'2', item:'patatas'},
    {q:'1', item:'pimiento rojo'},
    {q:'2 dientes', item:'ajo'},
    {q:'Al gusto', item:'aceite, sal, pimienta y romero'}
  ],
  compra:'Pide "solomillo de cerdo": es una pieza alargada y estrecha. No lo confundas con la cinta de lomo, que es más ancha y queda más seca.',
  pasos:[
    'Horno a 200°C. Patatas en rodajas y pimiento en tiras, a la bandeja con aceite y sal. 25 minutos.',
    'Mientras, saca el solomillo de la nevera para que se atempere.',
    'Sartén muy caliente con poco aceite. Sella el solomillo entero: 2 minutos por cada cara, hasta que esté dorado por fuera.',
    'Pásalo a la bandeja del horno con las patatas, 10-12 minutos más.',
    'MUY IMPORTANTE: sácalo y déjalo reposar 5 minutos antes de cortar.',
    'Córtalo en medallones de dos dedos.'
  ],
  trucos:[
    'El reposo de 5 minutos no es opcional: si lo cortas nada más sacarlo, todo el jugo se queda en la tabla y la carne sale seca.',
    'El solomillo puede quedar ligeramente rosado por dentro y está perfecto. No hay que hacerlo hasta que esté gris.'
  ],
  diaMalo:'Solomillo en medallones a la sartén, 3 minutos por lado, y ensalada de bolsa.',
  conservar:'2-3 días. Frío en ensalada está muy bueno.',
  ojo:'Pasado de horno queda como una suela. Es carne muy magra y perdona poco.',
  kcal:620, p:48, c:52, f:24
},

'bistec-ternera-ensalada-patata': {
  nombre:'Bistec de ternera con ensalada de patata',
  icono:'carne', tiempo:30, donde:'Sartén', tupper:'Regular',
  porQue:'La ternera aporta hierro que se absorbe muy bien, mejor que el de las legumbres. Una vez por semana está bien; más, con tu colesterol, no compensa.',
  ingredientes:[
    {q:'180 g', item:'bistec de ternera'},
    {q:'2', item:'patatas'},
    {q:'1/2', item:'cebolleta'},
    {q:'1', item:'huevo', nota:'Opcional'},
    {q:'Al gusto', item:'aceite, vinagre, sal y pimienta'}
  ],
  compra:'Para plancha pide "filete de ternera" o "babilla". No hace falta que sea la pieza más cara, al contrario.',
  pasos:[
    'Cuece las patatas enteras con piel, 20-25 minutos.',
    'Saca la carne de la nevera 20 minutos antes. Es lo que más influye en cómo queda.',
    'Pela y corta las patatas en dados. Mezcla con cebolleta picada, aceite, vinagre y sal.',
    'Sartén muy caliente, casi sin aceite. Sala la carne justo antes.',
    '2-3 minutos por lado para que quede al punto. Un minuto más por lado si lo quieres hecho.',
    'Deja reposar 3 minutos antes de comerlo.'
  ],
  trucos:['Carne fría de nevera directa a la sartén = por fuera quemada y por dentro fría. Sácala antes, siempre.'],
  diaMalo:'Bistec a la plancha y ensalada de bolsa. Sin patata.',
  conservar:'2 días, pero recalentada pierde mucho.',
  ojo:'No la sales con mucha antelación: saca el jugo y se queda seca.',
  kcal:640, p:46, c:50, f:28
},

'ternera-plancha-champinones-patata': {
  nombre:'Ternera a la plancha con champiñones y patata',
  icono:'carne', tiempo:30, donde:'Sartén', tupper:'Regular',
  porQue:'Los champiñones salteados con la ternera aportan mucho sabor sin sumar casi nada, y hacen que un plato de carne parezca mucho más completo.',
  ingredientes:[
    {q:'180 g', item:'filete de ternera'},
    {q:'1 bandeja', item:'champiñones laminados'},
    {q:'2', item:'patatas'},
    {q:'2 dientes', item:'ajo'},
    {q:'Al gusto', item:'aceite, sal, pimienta y perejil'}
  ],
  compra:'Nada especial.',
  pasos:[
    'Patatas en rodajas al horno con aceite y sal, 30 minutos a 200°C. O al microondas 8 minutos si vas justo.',
    'Saca la carne de la nevera con antelación.',
    'Sartén fuerte, champiñones con sal, sin tocarlos 3 minutos, luego remueve hasta dorar. Ajo picado al final. Reserva.',
    'Misma sartén, más caliente aún. Ternera 2-3 minutos por lado.',
    'Reposo de 3 minutos y monta con los champiñones por encima.'
  ],
  trucos:['Haz los champiñones primero y la carne después en la misma sartén: la carne aprovecha el sabor que han dejado.'],
  diaMalo:'Ternera a la plancha y champiñones de bote escurridos, salteados 2 minutos.',
  conservar:'2 días.',
  ojo:'Champiñones sin remover los primeros minutos, o sueltan agua y se cuecen.',
  kcal:620, p:46, c:46, f:28
},

'tortilla-francesa-tomate': {
  nombre:'Tortilla francesa con tomate aliñado',
  icono:'huevo', tiempo:8, donde:'Sartén', tupper:'Malo — cómela hecha',
  porQue:'La cena de emergencia por excelencia. El huevo es la proteína más completa que existe y la más barata. Y a diferencia de lo que se creía hace años, el huevo diario no es un problema para el colesterol.',
  ingredientes:[
    {q:'2-3', item:'huevos'},
    {q:'1-2', item:'tomates'},
    {q:'Opcional', item:'espinacas'},
    {q:'Al gusto', item:'aceite de oliva, sal y orégano'}
  ],
  compra:'Nada. Ten siempre huevos en casa: es lo que separa cenar de pedir a domicilio un martes malo.',
  pasos:[
    'Corta el tomate en rodajas y aliña con aceite, sal y orégano. Reserva.',
    'Bate los huevos con una pizca de sal. Bátelos bien, 20 segundos.',
    'Sartén pequeña a fuego medio con un poco de aceite.',
    'Echa el huevo. Espera 20 segundos y luego, con una espátula, ve llevando los bordes hacia el centro e inclina la sartén para que el huevo líquido ocupe el hueco.',
    'Cuando esté casi cuajada pero aún tierna por encima, dobla por la mitad.',
    'Fuera. Se hace en menos de 2 minutos.'
  ],
  trucos:[
    'Fuego medio, no fuerte. La tortilla francesa se hace despacio; a fuego fuerte se dora por fuera y queda cruda dentro.',
    'Si le echas espinacas, saltéalas antes 1 minuto y luego echa el huevo encima.'
  ],
  diaMalo:'Esta ya es la de día malo. Si ni esto, dos huevos duros y un tomate.',
  conservar:'Cómela hecha.',
  ojo:'Sartén pequeña. En una grande el huevo se extiende demasiado y sale una oblea.',
  kcal:380, p:24, c:14, f:26
},

'tortilla-espinacas-ensalada': {
  nombre:'Tortilla de espinacas con ensalada',
  icono:'huevo', tiempo:12, donde:'Sartén', tupper:'Regular',
  porQue:'Huevo y verdura en el mismo plato, y de las cenas que más llenan por lo poco que pesan. Las espinacas aportan hierro y fibra sin apenas calorías.',
  ingredientes:[
    {q:'3', item:'huevos'},
    {q:'2 puñados', item:'espinacas'},
    {q:'1 diente', item:'ajo'},
    {q:'1 bolsa', item:'ensalada'},
    {q:'Al gusto', item:'aceite de oliva y sal'}
  ],
  compra:'Espinacas frescas en bolsa o congeladas, las dos van bien.',
  pasos:[
    'Ajo picado en la sartén con aceite, 30 segundos.',
    'Espinacas, remueve hasta que se reduzcan, 2 minutos. Escurre el agua que hayan soltado.',
    'Bate los huevos con sal y échalos sobre las espinacas.',
    'Fuego medio-bajo. Cuando los bordes cuajen, dale la vuelta con la ayuda de un plato.',
    '2 minutos más y fuera.',
    'Ensalada aliñada al lado.'
  ],
  trucos:['Escurre bien las espinacas antes de echar el huevo: si sueltan agua dentro, la tortilla no cuaja bien.'],
  diaMalo:'Revuelto en vez de tortilla: mismo sabor, sin darle la vuelta, imposible que salga mal.',
  conservar:'2 días, fría está buena.',
  ojo:'Darle la vuelta con un plato es más fácil de lo que parece: plato encima, giras la sartén, y la deslizas de vuelta.',
  kcal:420, p:28, c:12, f:30
},

'revuelto-huevo-champinones': {
  nombre:'Revuelto de huevo con champiñones',
  icono:'huevo', tiempo:10, donde:'Sartén', tupper:'Malo',
  porQue:'Como la tortilla pero sin el paso de darle la vuelta, que es donde la gente se pone nerviosa. Cena de diez minutos con la proteína resuelta.',
  ingredientes:[
    {q:'3', item:'huevos'},
    {q:'1 bandeja', item:'champiñones laminados'},
    {q:'1 diente', item:'ajo'},
    {q:'Al gusto', item:'aceite de oliva, sal y perejil'}
  ],
  compra:'Nada especial.',
  pasos:[
    'Champiñones a la sartén con aceite y sal, fuego fuerte, sin tocarlos 3 minutos.',
    'Remueve hasta que estén dorados. Ajo picado, 30 segundos.',
    'Baja el fuego a medio-bajo.',
    'Bate los huevos con sal y échalos por encima.',
    'Remueve constantemente con una espátula. Retira del fuego cuando aún estén algo líquidos: se terminan de hacer con el calor de la sartén.'
  ],
  trucos:['El revuelto se saca del fuego antes de que esté hecho del todo. Si esperas a que parezca listo en la sartén, en el plato estará seco.'],
  diaMalo:'Ya lo es.',
  conservar:'Cómelo hecho.',
  ojo:'Fuego bajo cuando entra el huevo. Con fuego fuerte sale gomoso.',
  kcal:400, p:26, c:8, f:30
},

'huevo-escalfado-tomate-espinacas': {
  nombre:'Huevo escalfado con tomate y espinacas',
  icono:'huevo', tiempo:12, donde:'Cazo', tupper:'Malo',
  porQue:'El huevo escalfado no lleva nada de grasa añadida, a diferencia del frito. Parece de restaurante y es de las cenas más ligeras que hay.',
  ingredientes:[
    {q:'2', item:'huevos', nota:'Lo más frescos posible'},
    {q:'2', item:'tomates'},
    {q:'2 puñados', item:'espinacas'},
    {q:'1 chorro', item:'vinagre', nota:'Para el agua'},
    {q:'Al gusto', item:'aceite de oliva y sal'}
  ],
  compra:'Los huevos, cuanto más frescos mejor escalfan. Mira la fecha.',
  pasos:[
    'Pon un cazo con agua a hervir. Cuando hierva, baja a fuego suave y echa un chorro de vinagre.',
    'Saltea las espinacas con un poco de aceite y ajo. Reserva. Corta el tomate y aliña.',
    'Casca un huevo en una taza. Con una cuchara, haz un remolino en el agua y deja caer el huevo en el centro.',
    '3 minutos exactos. La clara tiene que estar cuajada y la yema líquida.',
    'Sácalo con una espumadera y ponlo sobre las espinacas.'
  ],
  trucos:[
    'El remolino es lo que hace que la clara se envuelva sobre sí misma en vez de dispersarse.',
    'Si se te desmonta, no pasa nada: sabe exactamente igual. Se llama huevo escalfado feo y está buenísimo.'
  ],
  diaMalo:'Huevo a la plancha en vez de escalfado. Cero técnica.',
  conservar:'Cómelo hecho.',
  ojo:'El agua no debe hervir a borbotones cuando echas el huevo, o lo deshace. Tiene que estar temblando.',
  kcal:340, p:22, c:14, f:22
},

'ensalada-arroz-atun': {
  nombre:'Ensalada de arroz con atún y maíz',
  icono:'ensalada', tiempo:20, donde:'Olla y frío', tupper:'Perfecto — es su formato natural',
  porQue:'El tupper perfecto: se come frío, no huele en la oficina, no hay que calentar nada y no se estropea. Además el arroz enfriado genera almidón resistente, que se comporta como fibra.',
  ingredientes:[
    {q:'70 g en crudo', item:'arroz'},
    {q:'1 lata', item:'atún al natural'},
    {q:'1 lata pequeña', item:'maíz dulce'},
    {q:'1/2', item:'pimiento rojo', nota:'O aceitunas, según la versión'},
    {q:'1', item:'tomate', nota:'Opcional'},
    {q:'Al gusto', item:'aceite de oliva, vinagre y sal'}
  ],
  compra:'Todo de conserva menos el arroz y el pimiento. Es de las compras más baratas del menú.',
  pasos:[
    'Cuece el arroz según el paquete. Escúrrelo y pásalo por agua fría para cortar la cocción.',
    'Déjalo enfriar del todo. Si tienes prisa, extiéndelo en un plato llano.',
    'Corta el pimiento y el tomate en dados pequeños.',
    'Mézclalo todo con el atún escurrido y el maíz escurrido.',
    'Aliña con aceite, vinagre y sal.'
  ],
  trucos:['Hazla la noche antes. Está mejor, y por la mañana solo tienes que cogerla de la nevera.'],
  diaMalo:'Vasito de arroz frío + lata de atún + lata de maíz. Tres minutos y sin cocinar nada.',
  conservar:'3 días. De lo mejor del menú para tupper.',
  ojo:'Enfría bien el arroz antes de mezclar, o el calor estropea el resto.',
  kcal:560, p:34, c:72, f:14
},

'ensalada-pasta-atun': {
  nombre:'Ensalada de pasta integral con atún, tomate y aceitunas',
  icono:'ensalada', tiempo:20, donde:'Olla y frío', tupper:'Perfecto',
  porQue:'La pasta integral tiene bastante más fibra que la normal, lo cual te interesa tanto por el colesterol como porque llena más. En frío se come sin calentar nada.',
  ingredientes:[
    {q:'70 g en crudo', item:'pasta integral corta', nota:'Macarrones, espirales o lazos'},
    {q:'1 lata', item:'atún al natural'},
    {q:'1-2', item:'tomates'},
    {q:'1 puñado', item:'aceitunas'},
    {q:'Opcional', item:'huevo duro o cebolleta'},
    {q:'Al gusto', item:'aceite de oliva, vinagre y sal'}
  ],
  compra:'La pasta integral está al lado de la normal. Al principio sabe distinta; en dos semanas ya no lo notas.',
  pasos:[
    'Cuece la pasta 1 minuto MENOS de lo que diga el paquete: en frío se endurece un poco y así queda perfecta.',
    'Escurre y pasa por agua fría.',
    'Corta el tomate en dados y deshuesa las aceitunas si hace falta.',
    'Mezcla todo con el atún escurrido.',
    'Aliña con aceite, vinagre y sal.'
  ],
  trucos:['Un chorrito de aceite sobre la pasta recién escurrida evita que se pegue en la nevera.'],
  diaMalo:'Pasta de ayer + lata de atún + tomate. Cinco minutos.',
  conservar:'3 días.',
  ojo:'Si la cueces el tiempo completo, en frío queda blanda.',
  kcal:580, p:32, c:74, f:18
},

/* ============================ DESAYUNOS Y MEDIAS ============================ */

'tostada-jamon-fruta': {
  nombre:'Tostada integral con jamón y fruta',
  icono:'desayuno', tiempo:5, donde:'Tostadora', tupper:'—',
  porQue:'Desayuno completo de verdad: hidrato con fibra, proteína y fruta. El jamón serrano tiene mucha menos grasa de la que la gente cree, y el pan integral te mantiene sin hambre hasta media mañana.',
  ingredientes:[
    {q:'1-2 rebanadas', item:'pan integral'},
    {q:'2-3 lonchas', item:'jamón serrano o york'},
    {q:'1', item:'pieza de fruta'},
    {q:'Opcional', item:'tomate rallado y aceite de oliva'}
  ],
  compra:'Pan integral de verdad: mira que en los ingredientes la harina integral sea el primer ingrediente. Muchos panes "integrales" son harina blanca con salvado añadido.',
  pasos:[
    'Tuesta el pan.',
    'Si quieres, tomate rallado y un hilo de aceite.',
    'Jamón encima.',
    'La fruta, entera y aparte.'
  ],
  trucos:['Con tomate y aceite de oliva no solo sabe mejor: el aceite en crudo por la mañana es de las mejores grasas que puedes tomar.'],
  diaMalo:'Pan y jamón sin tostar. Cuenta igual.',
  conservar:'—',
  ojo:'La fruta entera, no en zumo. Entera llena; el zumo no.',
  kcal:380, p:20, c:48, f:12
},

'huevos-revueltos-tostada': {
  nombre:'Huevos revueltos con tostada y fruta',
  icono:'desayuno', tiempo:8, donde:'Sartén', tupper:'—',
  porQue:'El desayuno con más proteína del menú, y el que mejor aguanta sin que te dé hambre. Va en los días que no tienes prisa, típicamente fin de semana.',
  ingredientes:[
    {q:'2', item:'huevos'},
    {q:'1-2 rebanadas', item:'pan integral'},
    {q:'1', item:'pieza de fruta'},
    {q:'Al gusto', item:'aceite de oliva y sal'}
  ],
  compra:'Nada especial.',
  pasos:[
    'Pon el pan a tostar.',
    'Bate los huevos con sal.',
    'Sartén a fuego MEDIO-BAJO con un poco de aceite.',
    'Echa el huevo y remueve constantemente con una espátula.',
    'Retira del fuego cuando aún estén algo líquidos.'
  ],
  trucos:['Fuego bajo y remover sin parar. Es todo el secreto de un revuelto cremoso frente a uno gomoso.'],
  diaMalo:'Tostada con jamón y ya.',
  conservar:'—',
  ojo:'Fuego fuerte = huevo gomoso. Sin excepción.',
  kcal:420, p:26, c:40, f:18
},

'kefir-fruta-nueces': {
  nombre:'Kéfir con fruta y nueces',
  icono:'desayuno', tiempo:2, donde:'Sin cocinar', tupper:'—',
  porQue:'Dos minutos y tienes probióticos, proteína, fruta y las grasas buenas de las nueces. Las nueces en concreto tienen evidencia sólida a favor para el colesterol: un puñado al día es de las cosas más rentables que puedes hacer.',
  ingredientes:[
    {q:'1 vaso', item:'kéfir natural', nota:'Sin azucarar'},
    {q:'1', item:'pieza de fruta', nota:'Manzana, pera o plátano'},
    {q:'1 puñado pequeño', item:'nueces', nota:'Unas 4-5'}
  ],
  compra:'El kéfir está al lado de los yogures. Cógelo natural, sin azúcar ni sabores. Al principio sabe ácido; en una semana te acostumbras.',
  pasos:[
    'Kéfir en un bol.',
    'Fruta troceada por encima.',
    'Nueces.',
    'Ya está.'
  ],
  trucos:['Un puñado de nueces son 4-5, no un cuenco. Son muy buenas, pero también muy calóricas.'],
  diaMalo:'Ya lo es. Dos minutos.',
  conservar:'—',
  ojo:'Kéfir sin azucarar. Los de sabores llevan tanto azúcar como un postre.',
  kcal:340, p:16, c:38, f:16
},

'bolleria-capricho': {
  nombre:'Bollería o empanadilla',
  icono:'capricho', tiempo:0, donde:'Comprado', tupper:'—',
  porQue:'Esto está en el plan a propósito, y es importante que entiendas por qué. Un plan sin ningún capricho es un plan que abandonas en tres semanas. Está puesto en un día concreto, contado dentro del total, y no hay nada que compensar después.',
  ingredientes:[
    {q:'1', item:'lo que te apetezca', nota:'Croissant, napolitana, empanadilla...'}
  ],
  compra:'Donde quieras. Es el desayuno del día que te lo puedes permitir sin pensarlo.',
  pasos:[
    'Cómpralo.',
    'Cómetelo.',
    'Sigue con tu día.'
  ],
  trucos:['Cómpralo el mismo día, de uno en uno. Tener el paquete en casa es lo que convierte un capricho en un problema.'],
  diaMalo:'—',
  conservar:'—',
  ojo:'Si te lo saltas un día no hay premio, y si lo repites otro día no hay castigo. Está aquí para que el plan sea sostenible, no para ponerte a prueba.',
  kcal:380, p:8, c:48, f:18
},

'cafe-yogur-fruta': {
  nombre:'Café con leche y yogur o fruta',
  icono:'media', tiempo:3, donde:'Sin cocinar', tupper:'—',
  porQue:'La media mañana existe para que no llegues a la comida con hambre acumulada. Es el mismo mecanismo que la merienda: en tu caso, saltarte estas dos es lo que dispara el picoteo de la noche.',
  ingredientes:[
    {q:'1', item:'café con leche'},
    {q:'1', item:'yogur natural o pieza de fruta'}
  ],
  compra:'Yogur natural, no de sabores. Si te sabe soso, un poco de canela o de fruta troceada.',
  pasos:['Poco más que servirlo.'],
  trucos:['Ponlo en la mochila la noche antes. La media mañana que no llevas encima es la media mañana que no te tomas.'],
  diaMalo:'Solo el café. Pero intenta que sea con algo.',
  conservar:'—',
  ojo:'No te la saltes los días de entreno. Es la que evita el atracón de después.',
  kcal:180, p:9, c:22, f:6
},

'yogur-fruta': {
  nombre:'Yogur con fruta',
  icono:'media', tiempo:2, donde:'Sin cocinar', tupper:'—',
  porQue:'Merienda estándar. Su función no es nutrirte especialmente: es llegar a la cena sin hambre acumulada, que en tu caso marca la diferencia entre cenar bien y picotear hasta la una.',
  ingredientes:[
    {q:'1', item:'yogur natural'},
    {q:'1', item:'pieza de fruta'}
  ],
  compra:'Yogur natural. El griego tiene más proteína si quieres que llene más.',
  pasos:['Servir.'],
  trucos:['Si a media tarde tienes mucha hambre, cambia el yogur normal por griego: llena bastante más.'],
  diaMalo:'Una fruta. Lo que sea, pero algo.',
  conservar:'—',
  ojo:'La merienda es la comida que más te protege del picoteo nocturno. Es la que menos deberías saltarte.',
  kcal:160, p:8, c:24, f:3
},

'yogur-chocolate': {
  nombre:'Yogur con fruta y una onza de chocolate',
  icono:'media', tiempo:2, donde:'Sin cocinar', tupper:'—',
  porQue:'La onza de chocolate está en el plan a propósito, igual que la bollería. Un poco de dulce previsto y contado quita mucha más ansiedad que prohibirlo entero.',
  ingredientes:[
    {q:'1', item:'yogur natural'},
    {q:'1', item:'pieza de fruta'},
    {q:'1 onza', item:'chocolate negro', nota:'70% o más'}
  ],
  compra:'Chocolate negro del 70% o más. Cuanto más porcentaje, menos azúcar y más fácil parar en una onza.',
  pasos:['Servir.'],
  trucos:['Una onza es una onza. Saca una, guarda la tableta, y luego siéntate a comértela.'],
  diaMalo:'—',
  conservar:'—',
  ojo:'Con la tableta delante es muy difícil parar. Sepárala antes de empezar, no después.',
  kcal:220, p:9, c:26, f:9
},

/* ============================ ESPECIALES ============================ */

'comida-equipo': {
  nombre:'Comida de equipo en la oficina',
  icono:'equipo', tiempo:0, donde:'Fuera', tupper:'—',
  porQue:'Está en el plan, no es una excepción. Es el último viernes laboral de cada mes y ya está contada dentro de la semana: no rompes nada y no hay que compensar nada al día siguiente.',
  ingredientes:[
    {q:'—', item:'Pizza, hamburguesa o milanesas, según toque ese mes'}
  ],
  compra:'—',
  pasos:[
    'Ve y disfruta la comida con tu equipo.',
    'Si te apetece, bebe agua en vez de refresco. Es lo único que de verdad cambia algo aquí.',
    'Al día siguiente sigues con el plan normal. No hay nada que recuperar.'
  ],
  trucos:['Si puedes elegir, una porción menos y una ensalada de acompañamiento. Pero si no, tampoco pasa nada: es una comida al mes.'],
  diaMalo:'—',
  conservar:'—',
  ojo:'Lo único que puede hacerte daño de esta comida es lo que hagas después con la cabeza. Es una comida al mes dentro de un plan de treinta días.',
  kcal:900, p:35, c:95, f:42
},

'cena-libre': {
  nombre:'Cena libre',
  icono:'libre', tiempo:0, donde:'Donde quieras', tupper:'—',
  porQue:'Los viernes y sábados noche son libres todas las semanas, por diseño. No es un premio que te tengas que ganar ni algo que se pueda perder por haber tenido un mal día: está en el plan desde el principio y es parte de por qué el plan funciona.',
  ingredientes:[
    {q:'—', item:'Lo que te apetezca'}
  ],
  compra:'—',
  pasos:[
    'Cena lo que quieras.',
    'No lo cuentes, no lo apuntes y no lo compenses.',
    'El domingo se sigue como siempre.'
  ],
  trucos:['Si cenas fuera y quieres una regla sencilla que no te amargue: pide agua para beber. Con eso solo ya has hecho la mitad del trabajo, y puedes comer lo que te dé la gana.'],
  diaMalo:'—',
  conservar:'—',
  ojo:'Que sea libre significa libre. Si acabas midiendo también estas cenas, el plan deja de ser sostenible y vuelves al punto de partida.',
  kcal:0, p:0, c:0, f:0
}

});

/* ==========================================================================
   Cada texto del menú apunta a su ficha. Se hace con un mapa explícito y no
   adivinando por palabras sueltas: es más largo de escribir, pero no falla.
   ========================================================================== */
const MENU_A_PLATO = {
  'Garbanzos salteados con espinacas y taquitos de pavo':'garbanzos-espinacas-pavo',
  'Lentejas estofadas con pimiento y champiñón':'lentejas-estofadas',
  'Ensalada de lentejas con pimiento, tomate y atún':'ensalada-lentejas-atun',
  'Alubias con pimiento, champiñón y jamón':'alubias-pimiento-champinon-jamon',
  'Garbanzos con espinacas (comida familiar)':'garbanzos-espinacas',
  'Salmón al airfryer con espárragos':'salmon-airfryer-esparragos',
  'Salmón al horno con espárragos y patata':'salmon-horno-esparragos-patata',
  'Salmón al airfryer con limón y ensalada de patata':'salmon-airfryer-limon-patata',
  'Salmón a la plancha con arroz integral y brócoli':'salmon-plancha-arroz-brocoli',
  'Ensalada de arroz con atún, maíz y aceitunas':'ensalada-arroz-atun',
  'Ensalada de arroz con atún, maíz y pimiento':'ensalada-arroz-atun',
  'Ensalada de pasta integral con atún, tomate y aceitunas':'ensalada-pasta-atun',
  'Pulpo a la gallega con patata y pimentón':'pulpo-gallega-patata',
  'Pulpo con patata y pimentón':'pulpo-gallega-patata',
  'Calamares y pulpo a la gallega con patata':'calamares-pulpo-gallega',
  'Calamar encebollado con patata':'calamar-encebollado-patata',
  'Pollo a la plancha con arroz integral y pimientos':'pollo-plancha-arroz-pimientos',
  'Pollo a la plancha con pimiento y champiñón salteados, y arroz':'pollo-plancha-arroz-pimientos',
  'Pechuga a la plancha con quinoa y brócoli':'pechuga-quinoa-brocoli',
  'Pavo con champiñones salteados y arroz':'pavo-champinones-arroz',
  'Arroz con pollo, pimiento y cebolla (comida en familia)':'arroz-pollo-familia',
  'Muslitos de pollo al horno con patata (comida familiar)':'muslitos-horno-patata',
  'Muslitos al horno con patata (comida familiar)':'muslitos-horno-patata',
  'Solomillo de cerdo con patata al horno y ensalada':'solomillo-patata-pimientos',
  'Solomillo con patata y pimientos':'solomillo-patata-pimientos',
  'Bistec de ternera con ensalada de patata':'bistec-ternera-ensalada-patata',
  'Ternera a la plancha con champiñones y patata':'ternera-plancha-champinones-patata',
  "Comida de equipo: pizza Papa John's, hamburguesa o milanesas del Chalito":'comida-equipo',
  'Merluza al horno con ajo y limón':'merluza-horno-ajo',
  'Merluza al horno con ajo y perejil':'merluza-horno-ajo',
  'Merluza a la plancha con limón':'merluza-plancha-limon',
  'Bacalao crujiente al horno con ajo':'bacalao-horno-ajo',
  'Caballa al papillote con pimiento y champiñón al horno':'caballa-papillote',
  'Sardinas al horno con ensalada':'sardinas-horno-ensalada',
  'Salmón al horno con brócoli':'salmon-horno-brocoli',
  'Salmón ahumado con ensalada verde ligera':'salmon-ahumado-ensalada',
  'Salmón ahumado con ensalada':'salmon-ahumado-ensalada',
  'Calamar a la plancha con ensalada verde':'calamar-plancha-ensalada',
  'Calamar a la plancha con pimientos':'calamar-plancha-ensalada',
  'Pavo al airfryer con pimiento y champiñón asados':'pavo-airfryer-pimiento-champinon',
  'Pavo a la plancha con ensalada':'pavo-plancha-ensalada',
  'Brochetas de pavo con pimiento':'brochetas-pavo-pimiento',
  'Pollo al curry ligero con pimiento':'pollo-curry-pimiento',
  'Tortilla francesa con espinacas y tomate aliñado':'tortilla-francesa-tomate',
  'Tortilla francesa con tomate':'tortilla-francesa-tomate',
  'Tortilla de espinacas con ensalada':'tortilla-espinacas-ensalada',
  'Revuelto de huevo con champiñones':'revuelto-huevo-champinones',
  'Huevo escalfado con tomate y espinacas':'huevo-escalfado-tomate-espinacas',
  'Cena libre — disfruta sin culpa':'cena-libre',
  'Cena libre de finde — disfruta':'cena-libre',
  'Tostada integral con jamón + fruta':'tostada-jamon-fruta',
  'Tostada integral con jamón + manzana':'tostada-jamon-fruta',
  'Huevos revueltos + tostada + fruta':'huevos-revueltos-tostada',
  'Huevos revueltos + tostada + plátano':'huevos-revueltos-tostada',
  'Kéfir + manzana + nueces':'kefir-fruta-nueces',
  'Kéfir + pera + nueces':'kefir-fruta-nueces',
  'Kéfir + plátano + nueces':'kefir-fruta-nueces',
  'Bollería o empanadilla (capricho controlado)':'bolleria-capricho',
  'Café con leche + yogur o fruta':'cafe-yogur-fruta',
  'Yogur + fruta':'yogur-fruta',
  'Yogur + manzana':'yogur-fruta',
  'Yogur + fruta + chocolate':'yogur-chocolate',
  'Yogur + plátano + onza de chocolate':'yogur-chocolate'
};

/* Los textos del menú llevan un emoji delante; se quita antes de buscar. */
function slugDePlato(textoMenu){
  if(!textoMenu) return null;
  const limpio = String(textoMenu).replace(/^[^\p{L}\p{N}]+/u, '').trim();
  return MENU_A_PLATO[limpio] || null;
}
function platoDe(textoMenu){
  const slug = slugDePlato(textoMenu);
  return slug ? PLATOS[slug] : null;
}
