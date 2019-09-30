use SGODA;

insert into tipo_objeto value
(1, "VIDEO"),
(2, "PODCAST");

select * from tipo_objeto;

insert into licenciatura (nombre_licenciatura) values
("INGENIERÍA EN SISTEMAS COMPUTACIONALES"),
("INGENIERÍA EN ENERGÍA"),
("INGENIERÍA EN MECATRÓNICA"),
("INGENIERÍA CIVIL Y ADMINISTRACIÓN"),
("INGENIERÍA EN TECNOLOGÍAS DE SOFTWARE");

select * from licenciatura;

insert into unidad_aprendizaje (nombre_unidad,id_licenciatura)values
("ADMINISTRACIÓN DE ARCHIVOS",1),
("ESTRUCTURA DE DATOS I",1),
("LENGUAJE DE PROGRAMACIÓN I",1),
("LENGUAJE DE PROGRAMACIÓN II",1),
("ELABORACIÓN Y PRESENTACIÓN DE TEXTOS",1),
("SIMULACIÓN",1),
("LÓGICA DE LA PROGRAMACIÓN",1),
("TALLER DE EMPRENDEDORES",1),
("ELECTRÓNICA",1),
("METODOLOGÍA DE LA INVESTIGACIÓN",1),
("BASES DE DATOS",1),
("ESTRUCTURA DE DATOS II",1),
("INVESTIGACIÓN DE OPERACIONES",1),
("TALLER DE BASES DE DATOS",1),
("TERMODINÁMICA",1);

select * from unidad_aprendizaje;

insert into subcategoria (nombre_subcategoria) value
("QUÍMICA E INGENIERÍA DEL PETRÓLEO"),
("INGENIERÍA CIVIL"),
("CIENCIAS DE LA COMPUTACIÓN (CIENCIAS COMPUTACIONALES)"),
("ELECTRÓNICA"),
("INGENIERÍA AMBIENTAL"),
("INGENIERÍA MECÁNICA");

select * from subcategoria;

insert into autor (nombre,apellido_paterno,apellido_materno,tipo_autor) values
("Luz María","Hernández","Cruz","Profesor"),
("Diana Concepción","Mex","Álvarez","Profesor"),
("Julio Antonio","Gutiérrez","González","Profesor"),
("José Ramón","Cab","Chan","Profeso"),
("Hortensia","Muñoz","Álvarez","Profesor"),
("Margarita","Castillo","Téllez","Profesor"),
("Jorge","Chan","González","Profesor");

select * from autor;

insert into subcompetencia (nombre_subcompetencia) values
	('Conoce los fundamentos de los sistemas manejadores de bases de datos para tomar 
		decisiones acerca del empleo de bases de datos en sistemas de cómputo de acuerdo 
        con la evolución tecnológica.'),
	('Comprender y utilizar los diversos enfoques de investigación para obtener información 
		que auxilie en la toma de decisiones en las organizaciones basadas en el método científico.');
        
insert into objeto_aprendizaje (nombre_objeto,duracion, objetivo, descripcion, enlace, id_tipo,
                                id_unidad, id_subcategoria, id_autor, id_subcompetencia) values
("Bases de Datos",
"00:01:55",
"Explicar un ejemplo de base de datos",
"Explica que es una base de datos",
"Https://itunes.apple.com/mx/podcast/base-de-datos/id1180668436?i=1000378351409&mt=2",
1,11,3,1,1),

("Método de mapeo y por índices.",
"00:04:18",
"Explicar los alcances de la investigación cuantitativa dentro del marco teórico.",
"Se explica y ejemplifica el tema de fundamentos y alcances de la investigación cuantitativa.",
"Https://itunes.apple.com/mx/podcast/m%c3%a9todo-de-mapeo-y-por-indices/id882794482?i=1000418732817&mt=2",
1,13,3,3,2);

select * from objeto_aprendizaje; 