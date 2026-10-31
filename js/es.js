/* ======================================================================
   ESPAÑOL
   ====================================================================== */
const ES = {
ui:{
  brand:'Escuela de Manejo Fastlane', homeAria:'Inicio de la Escuela de Manejo Fastlane', exitsCleared:'Salidas completadas', route:'Ruta', routeMap:'Mapa de ruta', courseRoute:'Ruta del curso', langAria:'Idioma',
  railNote:'Aprueba el quiz de cada parada para completar una salida. Tu progreso se guarda en este navegador.',
  foot:'Un material de estudio no oficial sobre <i>The Millionaire Fastlane</i> (2011), de MJ DeMarco. Resume las ideas del libro con palabras propias; lee el libro para conocer el argumento completo. Contenido educativo, no es asesoría financiera.',
  reset:'Borrar mi progreso', resetConfirm:'Haz clic otra vez para borrar', resetDone:'Progreso borrado',
  exit:'Salida', min:'min', cleared:'Completada', notCleared:'Sin completar',
  signs:[['ACERA','Pobreza'],['CARRIL LENTO','Riqueza a los 65'],['CARRIL RÁPIDO','Riqueza en años']],
  gantryAria:'Señal de autopista: Acera, salida a la pobreza; Carril Lento, salida a la riqueza a los 65; Carril Rápido, de frente hacia la riqueza en años',
  lede:'Un curso interactivo de nueve salidas sobre las ideas de <i>The Millionaire Fastlane</i>, de MJ DeMarco: los tres caminos hacia la riqueza, las ecuaciones detrás de ellos, la prueba CENTS para un negocio real y los cinco sistemas que pueden generar ingresos sin ti.',
  start:'Empezar en la Salida 1', cont:n => `Continuar en la Salida ${n}`, viewLicense:'Ver tu licencia', meta:'Unos 80 minutos · 9 paradas · 12 herramientas',
  routeH:'La ruta', routeSub:'Cada salida tiene una lección corta, una herramienta práctica y un quiz. Recórrelas en orden.',
  howH:'Cómo funciona el curso', how:[['Lee la lección','Cada salida condensa una parte del libro en pocos minutos de lectura, en lenguaje sencillo.'],['Usa la herramienta','Calculadoras y ejercicios aplican tus propios números a las ecuaciones de la riqueza y a la prueba CENTS.'],['Aprueba la parada','Acierta 2 de 3 preguntas para completar una salida. Aprueba el examen final para obtener tu licencia.']],
  exitOf:(n, t, m) => `Salida ${n} de ${t} · ${m} min`,
  checkpoint:'Parada de control', finalExam:'Examen final', cpNote:'Acierta 2 de 3 para completar esta salida.', finalNote:'Acierta 8 de 10 para obtener tu licencia.',
  yourLicense:'Tu licencia', licNote:'Tu nombre y tu plan se quedan en este navegador.', startLbl:'Inicio', overview:'Resumen del curso', navAria:'Navegación entre lecciones',
  correct:'Correcto.', notQuite:'No exactamente.', score:(r, n) => `${r} de ${n} correctas`, exitCleared:'Salida completada.', licEarned:'Licencia obtenida.', need:p => `Necesitas ${p} aciertos para completar esta salida.`, continueTo:n => `Seguir a la Salida ${n}`, retake:'Repetir',
  lic:{ locked:'<b>Licencia bloqueada.</b> Acierta 8 o más en el examen final para emitir aquí tu licencia Fastlane.', nameLbl:'Nombre en la licencia', namePh:'Tu nombre', top:['Escuela de Manejo Fastlane','Licencia de conducir'], aria:'Licencia de conducir Fastlane',
    name:'Nombre', cls:'Clase', clsVal:'F · Fastlane', no:'N.º licencia', issued:'Expedición', score:'Puntaje del examen', exits:'Salidas completadas', endorse:'Endosos', tree:'Árbol de dinero', treeNone:'Aún sin elegir', act:'Primera acción', actNone:'Agrega una en la hoja de la Salida 8' }
},
mod:{
'road-trip':{ title:'El Viaje', sub:'La riqueza es un viaje, y hay tres caminos',
body:`
<p class="lede">A la mayoría de las personas les entregan un solo mapa hacia la riqueza: trabajar, ahorrar, invertir, esperar. <i>The Millionaire Fastlane</i> sostiene que ese mapa tiene una falla de fábrica y que en realidad circulan tres mapas, cada uno con un resultado predecible.</p>
<h3>Un Lamborghini y una pregunta</h3>
<p>De adolescente, DeMarco vio un Lamborghini Countach y le preguntó a su dueño a qué se dedicaba. El dueño era joven, y la respuesta fue que era inventor. Esa breve conversación rompió el guion que le habían dado. Nadie se hace rico joven subiendo peldaño a peldaño en una carrera ni ahorrando el 10% del sueldo. Los jóvenes ricos que empezó a estudiar habían construido algo que ganaba dinero por ellos. El libro es su mapa de cómo lo lograron.</p>
<h3>Riqueza en silla de ruedas</h3>
<p>El plan convencional funciona, algún día. Ahorra con disciplina durante cuarenta años y quizá te jubiles con un buen colchón. El problema es el momento. El plan entrega libertad al final de la vida, cuando buena parte de la salud, la energía y los mejores años ya se fueron. DeMarco lo llama <b>riqueza en silla de ruedas</b>. La pregunta detrás de este curso es cómo conseguir libertad mientras todavía eres lo bastante joven para disfrutarla.</p>
${key('Idea clave', 'La riqueza es un proceso, no un evento. Los premios de lotería, los éxitos virales y las grandes ventas de empresas son los eventos visibles. Detrás de cada fortuna real hay un proceso largo y poco glamoroso de construir algo que el mercado termina recompensando.')}
<h3>Qué es realmente la riqueza</h3>
<p>DeMarco define la riqueza con tres pilares, que llama la <b>Trinidad de la Riqueza</b> (en el original, las "tres F"):</p>
<ul><li><b>Familia:</b> relaciones fuertes y tiempo para cuidarlas.</li><li><b>Forma física:</b> salud, energía y vitalidad.</li><li><b>Libertad:</b> poder elegir cómo pasar tus días.</li></ul>
<p>El dinero importa porque compra libertad. Un ingreso alto que viene con pagos altos y nada de tiempo libre no cuenta como riqueza según esta definición.</p>
<h3>Los tres mapas</h3>
<p>Todos siguen uno de tres mapas financieros, lo hayan elegido o no: la <b>Acera</b> (Sidewalk), el <b>Carril Lento</b> (Slowlane) y el <b>Carril Rápido</b> (Fastlane). Cada uno trae su propia mentalidad y sus propias matemáticas. Elige un camino para compararlos.</p>
${W('roads')}
<p>El resto del curso recorre cada camino y luego te da las herramientas para construir tu propio Carril Rápido.</p>`,
quiz:[
 ['¿Qué quiere decir DeMarco con "riqueza en silla de ruedas"?', ['Riqueza que llega tarde, después de décadas ahorrando','Dinero perdido en gastos médicos','Riqueza heredada de familiares mayores','Ingresos de un seguro por invalidez'], 'El plan convencional rinde cerca de la jubilación, cuando buena parte de la salud y del tiempo ya se gastó.'],
 ['"La riqueza es un proceso, no un evento." ¿Cuál de estas opciones es el proceso?', ['Ganar la lotería','Que una acción duplique su valor en una semana','Años construyendo y mejorando un producto por el que la gente paga','Recibir un bono grande a fin de año'], 'Los eventos son los momentos visibles. El proceso es la construcción constante que los hace posibles.'],
 ['¿Cuál de estos no forma parte de la Trinidad de la Riqueza?', ['Familia','Fama','Forma física','Libertad'], 'La trinidad es Familia, Forma física y Libertad. La fama y el estatus están más cerca de la mentalidad de la Acera.']
]},
'sidewalk':{ title:'La Acera', sub:'El camino por defecto, y por qué el ingreso por sí solo no te salva',
body:`
<p class="lede">La Acera es el camino en el que la gente termina por defecto. No hay plan ni dirección, y cada aumento de sueldo se lo traga un estilo de vida más grande. Lleva a la pobreza, o a un ingreso alto que nunca se convierte en libertad.</p>
<h3>Ingreso no es riqueza</h3>
<p>Hay gente en la Acera en todos los niveles de ingreso. El cajero que compra un teléfono nuevo con tarjeta de crédito y la cirujana que arrienda un auto deportivo y vive en una casa que apenas puede pagar están en el mismo camino. Ambos convierten ingreso en consumo y deuda, así que nada se acumula.</p>
${eq('stop', 'Ecuación de la riqueza en la Acera', 'Riqueza = Ingresos + Deuda', 'Aquí, "riqueza" es lo que el sueldo puede comprar más lo que se puede pedir prestado')}
<p>Desde afuera parece riqueza: el auto, la ropa, los viajes. Desaparece en cuanto se detiene el sueldo, porque nada de eso produce ingresos. DeMarco separa con claridad parecer rico de ser rico.</p>
<h3>Señales de que estás en la Acera</h3>
<ul>
<li><b>La gratificación inmediata</b> gana la mayoría de las decisiones.</li>
<li><b>La deuda compra apariencias</b> en lugar de construir algo.</li>
<li><b>Los problemas de dinero se resuelven con más dinero</b>, como un aumento, un préstamo o un golpe de suerte, y no cambiando el comportamiento.</li>
<li><b>La esperanza depende de la suerte:</b> la lotería, una demanda, una gran oportunidad.</li>
<li><b>El futuro es problema de otros:</b> del jefe, del gobierno, de la economía.</li>
</ul>
${warn('Precaución', 'Parecer rico es el pasatiempo más caro que existe. Cada peso gastado en aparentar riqueza es un peso que ya no puede comprar libertad.')}
<h3>Salir de la Acera</h3>
<p>La salida empieza por la responsabilidad. Tu posición actual es la suma de tus decisiones pasadas, y tu futuro será la suma de las próximas. Los primeros pasos prácticos: dejar de financiar el estilo de vida con deuda, postergar la gratificación y empezar a verte como <b>productor</b> de lo que otros compran, no como <b>consumidor</b> de lo que otros venden.</p>
<p>Pon a prueba tu ojo. Cada frase de abajo viene de uno de los tres caminos.</p>
${W('sorter')}`,
quiz:[
 ['¿Qué ecuación describe la Acera?', ['Riqueza = Ingreso Principal + Inversiones en el Mercado','Riqueza = Ingresos + Deuda','Riqueza = Beneficio Neto + Valor del Activo','Riqueza = Ahorro × Tiempo'], 'En la Acera, el poder de compra viene del sueldo más el dinero prestado.'],
 ['Una médica gana $400,000 al año, arrienda un Porsche, tiene las tarjetas al límite y ningún ahorro. ¿En qué camino está?', ['Carril Rápido, porque el ingreso es alto','Carril Lento, porque tiene una profesión','Acera, porque el ingreso va directo a consumo y deuda','En ninguno'], 'El ingreso no decide el camino. Lo que pasa con el ingreso, sí.'],
 ['¿Cuál es el primer paso para salir de la Acera?', ['Conseguir un aumento','Asumir la responsabilidad de tus decisiones','Encontrar un mejor jefe','Comprar menos boletos de lotería'], 'La responsabilidad te devuelve el volante. Todo lo demás viene después.']
]},
'slowlane':{ title:'El Carril Lento', sub:'El plan respetable, y las dos variables que limita',
body:`
<p class="lede">El Carril Lento es el plan que escuchaste de tus padres, maestros y asesores financieros: estudiar, conseguir un buen empleo, ahorrar el 10%, invertir en fondos indexados y en tu plan de retiro, vivir con austeridad y jubilarte rico a los 65. Es un camino respetable. La crítica de DeMarco es que es lento por diseño y que lo controlan todos menos tú.</p>
${eq('warn', 'Ecuación de la riqueza en el Carril Lento', 'Riqueza = Ingreso Principal + Inversiones en el Mercado', 'Ingreso Principal = tu valor por hora × horas trabajadas · Las inversiones crecen con interés compuesto')}
<h3>Dos variables con techo</h3>
<p>Mira lo que la ecuación te deja cambiar. Las <b>horas trabajadas</b> tienen un techo rígido: la semana tiene 168 horas, y nadie vende más de 60 a 80 de ellas por mucho tiempo. El <b>valor por hora</b> lo limitan tu empleador, tu industria y el mercado para tus habilidades. Un gran aumento es del 10% o 20%. Ninguna de las dos variables puede crecer cien veces.</p>
<h3>Quién controla el Carril Lento</h3>
<p>Incluso las variables que puedes empujar están en manos de otros. Tu empleador decide si tienes trabajo. El mercado decide cuánto rinden tus inversiones. La inflación, los impuestos y las recesiones deciden cuánto vale el dinero. Un plan que depende de cuarenta años ininterrumpidos de empleo y de mercados cooperativos es esperanza disfrazada de estrategia.</p>
${warn('El canje 5 por 2', 'Cinco días de trabajo por dos días de libertad, repetidos durante cuatro décadas, a cambio de la promesa de libertad cuando seas viejo.')}
${W('week')}
<h3>El interés compuesto es lento</h3>
<p>El interés compuesto es poderoso con sumas grandes y plazos largos. Ese es justamente el problema: quien ahorra poco necesita ambas cosas, así que la recompensa llega al final de la línea de tiempo. El interés compuesto acelera mucho a quien ya tiene dinero y acelera despacio a quien no. Pruébalo con tus propios números.</p>
${W('slowcalc')}
<p>Nada de esto hace malo ahorrar e invertir. El Carril Rápido también los usa, al final, cuando ya hay una suma grande para invertir. El error es tratarlos como el motor de la riqueza en lugar del lugar donde la riqueza se estaciona.</p>`,
quiz:[
 ['El ingreso principal del Carril Lento es el producto de ¿qué dos variables?', ['Unidades vendidas × beneficio por unidad','Valor por hora × horas trabajadas','Beneficio neto × múltiplo del sector','Tasa de ahorro × tasa de interés'], 'Ambas tienen techo: las horas por el reloj, el valor por hora por los empleadores y el mercado.'],
 ['¿Por qué DeMarco dice que el Carril Lento es incontrolable?', ['Porque invertir es demasiado complicado','Porque los empleadores, los mercados y la economía deciden el resultado','Porque los planes de retiro son ilegales en algunos países','Porque no puedes elegir tu empleo'], 'Tu empleo, tus rendimientos y el valor de tu dinero dependen de fuerzas que no controlas.'],
 ['¿Cuándo es el interés compuesto una herramienta fuerte de riqueza?', ['Cuando empiezas con $100 al mes','Cuando ya tienes una suma grande para invertir','Cuando las tasas están cerca de cero','Cuando revisas tu saldo todos los días'], 'El interés compuesto amplía lo que ya tienes. Un capital grande más tiempo es lo que lo vuelve rápido.']
]},
'fastlane':{ title:'El Carril Rápido', sub:'Nuevas variables, la Ley del Impacto y el sistema de dinero',
body:`
<p class="lede">El Carril Rápido es una estrategia de negocio y de vida basada en ser dueño de un sistema que genera ingresos sin tu tiempo directo. Su meta es la riqueza en años en lugar de décadas, y lo logra cambiando las variables de la ecuación de la riqueza.</p>
${eq('', 'Ecuación de la riqueza en el Carril Rápido', 'Riqueza = Beneficio Neto + Valor del Activo', 'Beneficio Neto = Unidades Vendidas × Beneficio por Unidad · Valor del Activo = Beneficio Neto × Múltiplo del Sector')}
<h3>Variables sin techo</h3>
<p>Compáralo con el Carril Lento. Las <b>unidades vendidas</b> no tienen techo: un producto puede vender diez copias o diez millones. El <b>beneficio por unidad</b> es algo que tú defines y mejoras. Y el propio negocio se convierte en un <b>activo</b> que los compradores valoran como un múltiplo de su beneficio, así que una empresa que gana $1 millón al año podría venderse por varias veces esa cifra. Estas variables las controlas tú, y se pueden multiplicar en lugar de solo empujarlas un poco.</p>
${W('fastcalc')}
<h3>Conviértete en productor</h3>
<p>El Carril Rápido invierte tu relación con el mercado. Los consumidores compran los productos, los créditos y las suscripciones; los productores los crean. Para entrar al Carril Rápido, empieza a mirar cada producto, servicio y queja preguntándote cómo se hace, quién gana y qué podría ser mejor.</p>
<h3>La Ley del Impacto</h3>
<p>El principio central de DeMarco (en el original, <i>Law of Effection</i>): <b>cuantas más vidas toques, en escala o en magnitud, más dinero ganarás.</b> Escala significa muchas personas, cada una atendida un poco, como una app con un millón de usuarios. Magnitud significa pocas personas, cada una atendida en gran medida, como una desarrolladora inmobiliaria que vende un edificio de oficinas. Un empleo impacta a un empleador. Un sistema puede impactar a millones.</p>
${W('effection')}
<h3>El sistema de dinero</h3>
<p>El Carril Rápido termina en un lugar sorprendentemente conservador. Cuando el sistema de negocio produce una suma grande, por ganancias o por una venta, ese dinero va a inversiones seguras que generan ingresos, y los intereses reemplazan al sueldo. Este segundo sistema es lo que hace que la riqueza sea permanente y no una racha de suerte.</p>
${key('Idea clave', 'El Carril Rápido son dos sistemas. El sistema de negocio crea la suma grande rápidamente. El sistema de dinero la convierte en ingresos para toda la vida.')}
${W('moneysys')}`,
quiz:[
 ['¿Cuál es la ecuación de la riqueza en el Carril Rápido?', ['Riqueza = Ingresos + Deuda','Riqueza = Beneficio Neto + Valor del Activo','Riqueza = Ingreso Principal + Inversiones en el Mercado','Riqueza = Horas × Tarifa'], 'El beneficio neto es unidades × beneficio por unidad, y el valor del activo es beneficio neto × el múltiplo del sector.'],
 ['¿Qué frase es la Ley del Impacto?', ['Gasta menos de lo que ganas','Cuantas más vidas toques, en escala o magnitud, más dinero ganarás','Peso ahorrado, peso ganado','Trabaja de forma inteligente, no más duro'], 'El dinero sigue al tamaño del efecto que tienes sobre otras personas.'],
 ['¿Qué hace el sistema de dinero?', ['Paga el marketing','Convierte una suma grande en ingresos mediante inversiones seguras','Reemplaza la necesidad de un negocio','Financia compras de estilo de vida'], 'Cuando el negocio produce una suma grande, el sistema de dinero hace que esa riqueza dure.']
]},
'driver':{ title:'El Conductor', sub:'Tú eres el vehículo, y el tiempo es el combustible',
body:`
<p class="lede">En la metáfora de DeMarco, tú eres el vehículo. Ningún negocio, producto o sistema rinde más que la persona que lo conduce, así que el Carril Rápido empieza por cómo piensas y cómo usas tu tiempo.</p>
<h3>El volante es tuyo</h3>
<p>Tu situación actual es el resultado de decisiones, y tu futuro es el resultado de decisiones que todavía no tomas. Culpar a la economía, a un jefe o a la mala suerte le entrega el volante a otra persona. Asumirlo no significa que todo sea tu culpa. Significa que cambiarlo es tu responsabilidad.</p>
<h3>El tiempo es el combustible</h3>
<p>El tiempo es el único recurso que no puedes recuperar. DeMarco separa el tiempo que es realmente tuyo del tiempo que pasas ganando dinero, yendo al trabajo y recuperándote de él. Los traslados, los pendientes y las noches dedicadas a desconectarte pertenecen al empleo. El verdadero propósito del Carril Rápido es mover horas de la segunda columna a la primera.</p>
${W('timeaudit')}
<h3>Dale mantenimiento al vehículo</h3>
<ul>
<li><b>Creencias.</b> Guiones viejos como "el dinero es malo", "los ricos tuvieron suerte" o "no soy de negocios" funcionan como limitadores de velocidad. Ponles nombre y contrástalos con la evidencia.</li>
<li><b>Compañías.</b> Las personas con quienes pasas tiempo definen lo que te parece normal. Busca constructores, mentores y ejemplos de la vida que quieres.</li>
<li><b>Educación.</b> La graduación no es el fin del aprendizaje. Quienes van por el Carril Rápido aprenden todo el tiempo con libros, cursos, experimentos y fracasos, porque el negocio lo exige.</li>
</ul>
${warn('El peaje', 'Construir un Carril Rápido suele costar algunos años duros de noches, fines de semana y moderación en el estilo de vida. El Carril Lento pide un sacrificio parecido durante cuarenta años.')}`,
quiz:[
 ['En la metáfora del viaje, ¿cuál es el vehículo?', ['Tu negocio','Tu auto','Tú','Tu cuenta bancaria'], 'Tú eres el vehículo y el conductor. Tus creencias, hábitos y decisiones fijan el límite de velocidad.'],
 ['¿Por qué DeMarco trata el tiempo como el activo más importante?', ['Es fácil comprar más','No se puede reponer una vez gastado','Los empleadores lo valoran mucho','Rinde como el interés compuesto'], 'El dinero se recupera. El tiempo no, y por eso venderlo barato cuesta tanto.'],
 ['¿Cuál es un ejemplo de mantenimiento del vehículo?', ['Cambiar a un auto de lujo a crédito','Reemplazar una creencia limitante después de contrastarla con la evidencia','Evitar toda información nueva','Esperar el momento adecuado'], 'Las creencias, las compañías y el aprendizaje constante son el trabajo de mantenimiento.']
]},
'cents':{ title:'La Prueba CENTS', sub:'Cinco mandamientos que separan un negocio Fastlane de un empleo',
body:`
<p class="lede">No todo negocio es Carril Rápido. Muchos negocios son empleos disfrazados: eres su dueño, pero ellos son dueños de tu tiempo. El filtro de DeMarco para un verdadero negocio Fastlane son cinco mandamientos, cuya sigla en inglés es <b>CENTS</b>: <i>Control, Entry, Need, Time, Scale</i>.</p>
<div class="commandments">
${cmd('C', 'Control', '¿Controlas la operación? Si un franquiciante, una sola plataforma o un proveedor puede cambiar las reglas de un día para otro, eres pasajero, no conductor.', 'Señales de alerta', 'contratos de franquicia estrictos, dependencia de un marketplace o de un algoritmo de búsqueda, distribuidores de multinivel')}
${cmd('E', 'Entrada', '¿Qué tan fácil es que cualquiera empiece? Cuando bajan las barreras de entrada, baja la oportunidad. Si cualquiera puede empezar mañana con $99, miles ya lo hicieron.', 'Señales de alerta', 'oportunidades "llave en mano", kits de inicio, cualquier cosa vendida como dinero fácil')}
${cmd('N', 'Necesidad', '¿Resuelve una necesidad por la que la gente paga? Los negocios Fastlane se construyen alrededor del cliente, no de la pasión del dueño.', 'Señales de alerta', '"me encanta, así que a otros también les encantará", nadie lo pide, una solución buscando un problema')}
${cmd('T', 'Tiempo', '¿Funciona sin tus horas? Si el ingreso se detiene cuando tú te detienes, es un empleo del que eres dueño.', 'Señales de alerta', 'ingresos atados a horas facturadas, el dueño es el producto, ningún plan para sistematizar')}
${cmd('S', 'Escala', '¿Puede llegar a muchas personas, o entregar un valor muy grande a pocas? Los negocios de un solo local, solo locales o de atención uno a uno chocan con un techo.', 'Señales de alerta', 'geografía limitada, imposible de replicar, capacidad limitada por tus propias manos')}
</div>
<p>Un negocio no necesita una nota perfecta el primer día. Los mandamientos muestran dónde está el techo y qué corregir. La Necesidad es la base: sin ella, nada más importa. Pasa algunos ejemplos por el inspector y luego prueba una idea tuya.</p>
${W('cents')}`,
quiz:[
 ['¿Qué significa la E de CENTS?', ['Esfuerzo','Patrimonio','Entrada','Ejecución'], 'Entrada: cuanto más fácil sea para cualquiera empezar, más débil es la oportunidad.'],
 ['Un diseñador freelance que cobra por hora viola con más claridad ¿qué mandamiento?', ['Necesidad','Tiempo','Control','Entrada'], 'Cuando el ingreso se detiene en el momento en que dejas de trabajar, el negocio no se ha separado de tu tiempo.'],
 ['¿Por qué el libro trata el multinivel como un Carril Rápido débil?', ['Los productos siempre son malos','Cualquiera puede entrar, y la empresa matriz controla las reglas','Es demasiado difícil empezar','Exige un título universitario'], 'Barreras de entrada bajas y poco control reprueban dos mandamientos a la vez.']
]},
'money-trees':{ title:'Árboles de Dinero', sub:'Los cinco sistemas de negocio que pueden crecer sin ti',
body:`
<p class="lede">Un árbol de dinero es un sistema de negocio que sigue produciendo ingresos después de que lo plantas y lo cuidas. DeMarco nombra cinco tipos de sistema, o semillas, que pueden convertirse en árboles de dinero. La mayoría de las fortunas Fastlane vienen de uno de ellos o de una combinación.</p>
<div class="seeds">
${seed('Sistemas de alquiler', 'Sé dueño de algo que otros pagan por usar.', 'Bienes raíces, equipos, licencias de propiedad intelectual y regalías. El activo gana mientras duermes, y los bienes raíces aportan magnitud.')}
${seed('Sistemas informáticos', 'Software, apps, sitios web y plataformas en línea.', 'Se construyen una vez y los usan muchos, con un costo casi nulo por cada cliente adicional. La mayor escala de todas las semillas.')}
${seed('Sistemas de contenido', 'Información y entretenimiento.', 'Libros, boletines, cursos, video y pódcasts. Se crean una vez, se consumen repetidamente y se pagan con ventas, suscripciones o publicidad.')}
${seed('Sistemas de distribución', 'Llevar productos a mucha gente.', 'Inventar y fabricar un producto, vender a través de minoristas y redes, o distribuir productos de otras empresas.')}
${seed('Sistemas de recursos humanos', 'Un negocio operado por personas que empleas.', 'Equipos, gerentes y procesos hacen el trabajo. El más difícil de construir, y la forma en que un negocio de servicios escapa de las horas del dueño.')}
</div>
<p>Las combinaciones son comunes y fuertes: una empresa de software que publica contenido para atraer clientes, o una empresa de productos que licencia sus diseños. Elige tu semilla primero por la Necesidad y después por qué tan bien cumple el sistema con CENTS.</p>
${W('seeds')}`,
quiz:[
 ['Tener una cartera de edificios de departamentos es ¿qué tipo de sistema?', ['Contenido','Alquiler','Distribución','Informático'], 'Los inquilinos pagan por usar algo que es tuyo.'],
 ['¿Por qué son tan poderosos los sistemas informáticos?', ['No necesitan clientes','Cada cliente adicional cuesta casi nada atenderlo','Son inmunes a la competencia','Nunca necesitan actualizaciones'], 'Un costo marginal casi nulo permite que el software alcance una escala enorme.'],
 ['¿Qué sistema permite que un negocio de servicios se separe del tiempo del dueño?', ['Sistemas de recursos humanos','Sistemas de contenido','Sistemas de alquiler','Ninguno'], 'Contratar y capacitar personas para prestar el servicio, con procesos y gerentes, libera las horas del dueño.']
]},
'accelerate':{ title:'Acelera', sub:'Ejecución, necesidad y el camino hacia un evento de liquidez',
body:`
<p class="lede">Conocer el mapa no es lo mismo que conducir. El último tramo del libro trata de la velocidad: cómo quienes van por el Carril Rápido convierten una idea en un sistema que funciona, y el sistema en libertad.</p>
<h3>La ejecución vence a las ideas</h3>
<p>Las ideas son baratas y abundantes. El valor está en la ejecución: construir, lanzar, vender y mejorar. Una idea modesta ejecutada sin descanso le gana a una brillante que se queda en un cuaderno. Deja de esperar la idea perfecta.</p>
<h3>La necesidad vence a la pasión</h3>
<p>"Haz lo que amas y el dinero llegará" deja fuera al cliente. Los negocios Fastlane empiezan por lo que la gente necesita y está dispuesta a pagar. La pasión suele llegar después del éxito, cuando amas ser bueno en algo y ser libre.</p>
<h3>Escucha las quejas</h3>
<p>Cada queja es una necesidad que nadie ha resuelto bien. Las frustraciones en el trabajo, el mal servicio, los procesos lentos y los productos que casi funcionan son oportunidades. Practica convertir una de ellas en una oportunidad de negocio.</p>
${W('opportunity')}
<h3>Sé diferente, luego sé mejor</h3>
<p>Los clientes eligen entre opciones, así que dales una razón: mejor servicio, mejor diseño, una marca clara, más valor del que sugiere el precio. Trata la experiencia del cliente como el producto y sigue mejorándola con lo que te digan.</p>
<h3>Sal con un evento de liquidez</h3>
<p>La ecuación del Carril Rápido cuenta el valor del activo por una razón. Vender todo o parte de un negocio convierte años de ganancias en una sola suma. Esa suma alimenta el sistema de dinero, y el viaje llega a su destino: ingresos de inversiones y un tiempo que te pertenece.</p>
<h3>Planea tu primer tramo</h3>
<p>Escribe tu ruta. Tu plan se guarda en este navegador y aparece en tu licencia al final del curso.</p>
${W('plan')}`,
quiz:[
 ['Según el libro, ¿qué importa más?', ['Una idea brillante','La ejecución','Un plan de negocios perfecto','Acertar el momento del mercado'], 'Las ideas valen poco hasta que alguien las ejecuta.'],
 ['¿Cuál es la postura del libro sobre la pasión?', ['Sigue tu pasión y el dinero llegará','Empieza por la necesidad; la pasión suele llegar después del éxito','La pasión no tiene nada que ver con la felicidad','Solo las personas apasionadas triunfan'], 'La necesidad es la base. La pasión es bienvenida, pero los clientes pagan por soluciones.'],
 ['¿Qué es un evento de liquidez?', ['Una caída repentina del mercado','Vender todo o parte de un negocio, convirtiendo el valor del activo en efectivo','Pagar la tarjeta de crédito','Pasar los ahorros a la cuenta corriente'], 'Convierte la mitad "valor del activo" de la ecuación del Carril Rápido en una sola suma.']
]},
'final-exam':{ title:'Examen Final', sub:'Diez preguntas sobre toda la ruta, y tu licencia',
body:`<p class="lede">Diez preguntas que cubren todas las salidas. Acierta 8 o más para obtener tu licencia Fastlane.</p>`,
quiz:[
 ['¿Qué camino usa la deuda para aparentar riqueza?', ['Acera','Carril Lento','Carril Rápido'], 'En la Acera, la riqueza es ingreso más deuda, gastada en apariencias.'],
 ['El ingreso principal del Carril Lento es igual a:', ['Unidades vendidas × beneficio por unidad','Valor por hora × horas trabajadas','Beneficio neto × múltiplo','Ahorro × tasa de interés'], 'Ambas variables tienen techo, por eso el Carril Lento es lento.'],
 ['En la ecuación del Carril Rápido, el valor del activo es igual a:', ['Ingresos menos costos','Beneficio neto × múltiplo del sector','Unidades vendidas × precio','Tu sueldo × 40 años'], 'Los compradores pagan un múltiplo del beneficio por un negocio que lo sigue produciendo.'],
 ['Un negocio gana $400,000 netos al año en un sector donde las empresas se venden a 4× el beneficio. ¿Cuál es, aproximadamente, el valor del activo?', ['$400,000','$1.6 millones','$4 millones','$100,000'], '$400,000 × 4 = $1.6 millones, además del beneficio neto del año.'],
 ['Un negocio que deja de ganar en cuanto dejas de trabajar reprueba ¿qué mandamiento?', ['Control','Entrada','Tiempo','Necesidad'], 'Tiempo: un negocio Fastlane debe separarse de tus horas.'],
 ['Un boletín con 20,000 suscriptores de pago es ¿qué tipo de árbol de dinero?', ['Sistema de alquiler','Sistema de contenido','Sistema de distribución','Sistema de recursos humanos'], 'La información creada una vez y consumida repetidamente es un sistema de contenido.'],
 ['Una desarrolladora que vende pocos edificios de $10 millones usa ¿qué lado de la Ley del Impacto?', ['Escala','Magnitud','Ninguno'], 'Pocas personas, valor muy grande para cada una: magnitud.'],
 ['"La riqueza es un proceso, no un evento" significa:', ['La riqueza viene de construir con constancia, no de un solo momento de suerte','Debes esperar el evento adecuado','Los eventos no tienen relación con la riqueza','Solo la riqueza lenta es real'], 'El evento visible es el resultado de un largo proceso.'],
 ['El Carril Rápido combina ¿qué dos sistemas?', ['Un empleo y un trabajo extra','Un sistema de negocio y un sistema de dinero','Un plan de retiro y una cuenta de ahorro','Bienes raíces y acciones'], 'El sistema de negocio construye la suma grande; el sistema de dinero la convierte en ingresos duraderos.'],
 ['La Trinidad de la Riqueza es:', ['Familia, Forma física, Libertad','Fe, Fama, Fortuna','Foco, Finanzas, Libertad','Familia, Fortuna, Fama'], 'Relaciones, salud y capacidad de elegir.']
]}
},
w:{
  roads:{ label:'Compara', title:'Tres mapas', roads:[
    { name:'Acera', dest:'Destino: pobreza', eq:'Riqueza = Ingresos + Deuda', rows:[['El dinero sirve para','Gastar y aparentar riqueza'],['La deuda es','Una forma de tenerlo ya'],['El tiempo es','Abundante, así que se vende barato'],['Educación','Termina con la graduación'],['El ingreso viene de','Un empleo, gastado en cuanto llega'],['Quién lo controla','Nadie. A un imprevisto de la crisis']] },
    { name:'Carril Lento', dest:'Destino: mediocridad, riqueza cerca de los 65', eq:'Riqueza = Ingreso Principal + Inversiones en el Mercado', rows:[['El dinero sirve para','Ahorrar e invertir de forma pasiva'],['La deuda es','La enemiga'],['El tiempo es','Se cambia libremente hoy por libertad después'],['Educación','Títulos para ganar más'],['El ingreso viene de','Un empleo, más interés compuesto'],['Quién lo controla','Empleadores, mercados y el calendario']] },
    { name:'Carril Rápido', dest:'Destino: riqueza, posiblemente en años', eq:'Riqueza = Beneficio Neto + Valor del Activo', rows:[['El dinero sirve para','Construir sistemas y recuperar tiempo'],['La deuda es','Evitada para consumir, usada con cuidado para construir activos'],['El tiempo es','El activo más valioso, nunca se vende barato'],['Educación','De por vida y autodirigida'],['El ingreso viene de','Un sistema de negocio, luego un sistema de dinero'],['Quién lo controla','Tú']] } ] },
  sorter:{ label:'Practica', title:'Identifica el camino', names:['Acera','Carril Lento','Carril Rápido'],
    items:['"Voy a financiar la camioneta nueva. La cuota es de solo $650 al mes."','"Si aporto el máximo a mi plan de retiro y mantengo bajos mis gastos, me jubilo a los 62."','"Todos en mi industria se quejan de esto. Podría ser un producto."','"Alguien tiene que ganar la lotería. ¿Por qué no yo?"','"Voy a hacer una maestría para que mi empleador me pague más por hora."','"Prefiero no ganar nada durante un año construyendo algo que se venda sin mí."','"Me merezco estas vacaciones. Las pago con la tarjeta."','"Un rendimiento promedio del 8% me hará rico algún día."','"En lugar de comprar otra app, ¿qué haría falta para crear una?"'],
    why:['Deuda y gratificación inmediata: Acera clásica.','Empleo, ahorro e interés compuesto durante décadas: Carril Lento.','Pensar como un productor que construye sistemas: Carril Rápido.'],
    left:n => `faltan ${n}`, todo:n => `${n} frases por clasificar`, again:'Empezar de nuevo' },
  week:{ label:'Visualiza', title:'Una vida laboral en semanas 5 por 2', days:['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'], sold:'VENDIDO', yours:'TUYO', years:'Años de trabajo de tiempo completo', yearsOut:y => `${y} años`,
    stats:['Días laborales vendidos','Horas vendidas (40/sem)','Días de fin de semana','Días de vacaciones (2 sem/año)'] },
  slow:{ label:'Calculadora', title:'La máquina del tiempo del Carril Lento', fields:['Tu edad','Ingreso anual ($)','Ahorro anual (%)','Rendimiento anual (%)','Gasto anual cuando seas libre ($)','Rendimiento seguro del ahorro (%)'],
    stats:['Número de libertad','Edad de libertad','Años de 5 por 2','Crecimiento vs. aportes'], never:'No antes de los 85', target:'Número de libertad', freeAt:a => `Libre a los ${a}`, aria:'Gráfico de crecimiento del patrimonio',
    note:'Números de ejemplo. Supone un ingreso fijo en valores de hoy, sin aumentos, impuestos ni caídas del mercado. Tu número de libertad es el patrimonio cuyo rendimiento cubre tu gasto anual.' },
  fast:{ label:'Calculadora', title:'Arma una ecuación Fastlane', units:'Unidades vendidas por año', profit:'Beneficio por unidad', mult:'Múltiplo del sector', salary:'Comparar con un sueldo de ($/año)',
    stats:['Beneficio neto / año','Valor del activo','Riqueza','Años de sueldo para igualar'], barF:'Carril Rápido: beneficio de un año + valor del activo', barS:'Carril Lento: 40 años de sueldo bruto',
    note:'Las unidades y el beneficio por unidad no tienen techo; las horas y la tarifa por hora sí. Los múltiplos varían según el sector, el tamaño y el crecimiento.' },
  eff:{ label:'Explora', title:'La Ley del Impacto', presets:['Un empleo','Freelance','Restaurante local','Libro superventas','App móvil','Desarrolladora inmobiliaria'], lives:'Personas impactadas por año', value:'Valor para cada persona',
    stats:['Impacto total','Se apoya en'], lean:['Una persona','Escala','Magnitud','Ambas'], axis:'Escala: personas impactadas →', iso:['$1 mil','$1 M','$1.000 M','$1 billón'], aria:'Gráfico de escala versus magnitud',
    note:'Impacto = personas × valor para cada una. La escala te mueve a la derecha, la magnitud hacia arriba. Las líneas punteadas marcan igual impacto total.' },
  money:{ label:'Calculadora', title:'El sistema de dinero', sum:'Suma obtenida del negocio', yield:'Rendimiento de inversiones seguras', stats:['Ingreso por año','Por mes','Horas de trabajo necesarias'],
    note:'Solo ilustrativo. Los rendimientos reales cambian con las tasas de interés, y los impuestos y la inflación reducen lo que conservas.' },
  time:{ label:'Auditoría', title:'Adónde van tus 168 horas', cats:['Sueño','Empleo','Traslados','Pendientes y recuperarte del trabajo','TV, redes sociales y juegos','Familia, amigos y ejercicio','Aprendizaje','Construir tu sistema'],
    legend:['Vendido al empleo','Consumiendo','Construyendo','Vida y descanso','Sin asignar'], note:'Semana de ejemplo. Cambia los números por los tuyos.',
    over:t => `<b>Eso suma ${t} horas.</b> La semana solo tiene 168. Reduce alguna categoría para ver tu auditoría.`,
    out:(s, c, b, m, w) => `Vendes <b>${s}</b> horas a la semana a tu empleo y pasas <b>${c}</b> consumiendo, frente a <b>${b}</b> construyendo algo tuyo. Pasar la mitad de tu tiempo de pantalla a construir te da <b>${m} horas al año</b>, unas ${w} semanas laborales de tiempo completo dirigidas a tu Carril Rápido.` },
  cents:{ label:'Inspector', title:'Aplica la prueba CENTS', names:['Control','Entrada','Necesidad','Tiempo','Escala'], seg:['Aprueba','Débil','Reprueba'], restore:'Restaurar las calificaciones sugeridas',
    presets:{
      saas:['Software de citas para clínicas dentales',['Eres dueño del código, los precios y la hoja de ruta.','Construir buen software exige habilidad y tiempo, lo que aleja a la competencia.','Las citas perdidas les cuestan dinero real a las clínicas.','El software funciona día y noche; el soporte puede tener personal.','Miles de clínicas, cada una atendida casi sin costo extra.']],
      coffee:['Cafetería de barrio',['Tú la manejas, aunque el arrendador tiene mucho poder.','Un local y una máquina de espresso. Mucha gente abre una cada año.','La gente quiere buen café cerca.','Los dueños suelen atender el mostrador. El ingreso necesita personal para separarse.','Un local atiende a un barrio.']],
      mlm:['Distribuidor de suplementos multinivel',['La empresa matriz fija productos, precios y reglas.','Cualquiera entra pagando un kit de inicio.','Hay algo de necesidad del producto, pero las ventas dependen del reclutamiento.','El ingreso depende de que vendas y reclutes sin parar.','Limitado por tu red de contactos.']],
      freelance:['Diseño gráfico freelance',['Tú eliges clientes y precios.','Una laptop y un portafolio. La competencia es global.','Las empresas necesitan diseño.','Tú eres el producto. El ingreso se detiene cuando tú te detienes.','Limitado por tus horas.']],
      rental:['Pequeña cartera de propiedades en alquiler',['Eres dueño del activo y fijas las condiciones dentro de la ley.','El capital y el crédito son barreras reales, aunque muchos inversionistas compiten.','Todos necesitan vivienda.','Un administrador de propiedades puede operarla sin ti.','Crece por magnitud, una propiedad a la vez.']],
      mine:['Tu propia idea',['¿Quién podría cambiar tus reglas de un día para otro?','¿Cualquiera podría empezar esto mañana con $99?','¿Quién lo está pidiendo, y va a pagar?','¿El ingreso se detiene cuando tú te detienes?','¿Puede atender a muchos, o dar gran valor a pocos?']] },
    v:{ rate:['Califica los cinco','Elige Aprueba, Débil o Reprueba para cada mandamiento.'], noneed:['Sin necesidad no hay negocio','Sin una necesidad real, nada más importa. Encuentra un problema que la gente pagaría por resolver.'], fast:['Carril Rápido','Este sistema puede separarse de tu tiempo y crecer sin techo.'], pot:['Carril Rápido con baches','Aquí hay un negocio real. Corrige los mandamientos débiles antes de acelerar a fondo.'], job:['Un empleo del que eres dueño','Quizá seas el jefe, pero el negocio es dueño de tu tiempo u otra persona es dueña de las reglas.'], trap:['Trampa de la Acera','Reprueba la mayoría de los mandamientos. Es poco probable que produzca libertad.'] } },
  seeds:{ label:'Practica', title:'Identifica el árbol de dinero', names:['Alquiler','Informático','Contenido','Distribución','Recursos humanos'],
    items:['Una app de entrenamiento por suscripción','Un edificio de 12 departamentos','Un pódcast y un boletín pagados por patrocinadores','Diseñar un utensilio de cocina, fabricarlo y venderlo en grandes cadenas','Una empresa de limpieza comercial con 40 empleados y dos gerentes','Licenciar un diseño patentado a un fabricante a cambio de regalías','Un marketplace en línea que conecta tutores y estudiantes','Una serie de e-books sobre carpintería de nicho','Alquilar maquinaria de construcción a contratistas'],
    fb:(ok, s) => `${ok ? 'Correcto' : 'No exactamente'}: sistema de ${s.toLowerCase()}.`, left:n => `faltan ${n}`, todo:n => `${n} negocios por clasificar`, again:'Empezar de nuevo' },
  opp:{ label:'Ejercicio', title:'Convierte una queja en una oportunidad', fields:['¿Quién está frustrado?','¿Qué los frustra?','¿Cómo lo resuelven hoy?'],
    defaults:['Las clínicas dentales pequeñas','los pacientes faltan a sus citas y el personal pasa horas reprogramando','llamadas telefónicas y tarjetas de recordatorio en papel'], fallback:['Algún grupo de personas','algo sigue saliendo mal','soluciones improvisadas'],
    out:(who, pain, now) => `<b>Oportunidad:</b> ${who} pierden tiempo o dinero porque ${pain}. Hoy dependen de ${now}. Un sistema que resuelva esto para miles de ellos, sin necesitar tus horas, es un candidato al Carril Rápido.`,
    list:['<b>Necesidad:</b> ¿pagarían para que este problema desaparezca?','<b>Entrada:</b> ¿qué impediría que un competidor te copie el próximo mes?','<b>Escala:</b> ¿cuántos otros tienen este problema?','<b>Siguiente paso:</b> <a href="#cents">pásalo por el inspector CENTS</a>.'],
    note:'Ejemplo completado. Cámbialo por una queja que escuchaste esta semana.' },
  plan:{ label:'Hoja de trabajo', title:'Mi plan Fastlane', need:'La necesidad que voy a atender', needPh:'¿Quién tiene el problema y cuál es?', seed:'Mi árbol de dinero', weak:'Mandamiento más débil', hours:'Horas a la semana que voy a recuperar',
    fix:'Cómo voy a corregir el mandamiento débil', fixPh:'p. ej., crear una versión que funcione sin mí', act:'Mi primera acción esta semana', actPh:'p. ej., entrevistar a cinco gerentes de clínicas sobre citas perdidas', saved:'Guardado en este dispositivo',
    seeds:['Elige un sistema','Sistema de alquiler','Sistema informático','Sistema de contenido','Sistema de distribución','Sistema de recursos humanos'], cmds:['Elige uno','Control','Entrada','Necesidad','Tiempo','Escala'] }
}
};

