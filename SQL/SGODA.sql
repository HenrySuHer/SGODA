drop database if exists SGODA;
create database SGODA;
use SGODA;

create table tipo_objeto(
	id_tipo int not null primary key,
    nombre_tipo varchar(10) not null
);

create table licenciatura(
	id_licenciatura int not null primary key auto_increment,
    nombre_licenciatura varchar (100)
);

create table unidad_aprendizaje(
	id_unidad int not null primary key auto_increment,
    nombre_unidad varchar(100),
    id_licenciatura int,
    constraint fk_id_licenciatura2 foreign key (id_licenciatura) references licenciatura (id_licenciatura)
);

create table subcategoria (
	id_subcategoria int not null primary key auto_increment,
    nombre_subcategoria varchar (100) not null
);

create table autor(
	id_autor int not null primary key auto_increment,
    nombre varchar (50) not null,
    apellido_paterno varchar (50),
    apellido_materno varchar (50),
    tipo_autor varchar (10)
);

create table subcompetencia (
	id_subcompetencia int not null primary key auto_increment,
    nombre_subcompetencia varchar (500)
);

create table objeto_aprendizaje(
	id_objeto int not null primary key auto_increment,
    nombre_objeto varchar(100) not null,
    duracion time not null,
    objetivo varchar (500),
    descripcion varchar (500),
    enlace varchar (150),
    
    id_tipo int not null,
    id_unidad int not null,
    id_subcategoria int not null,
    id_autor int not null,
    id_subcompetencia int not null,
    
	constraint fk_id_tipo foreign key (id_tipo) references tipo_objeto (id_tipo),
    constraint fk_id_unidad foreign key (id_unidad) references unidad_aprendizaje (id_unidad),
    constraint fk_id_subcategoria foreign key (id_subcategoria) references subcategoria (id_subcategoria),
    constraint fk_id_autor foreign key (id_autor) references autor (id_autor),
    constraint fk_id_subcompetencia foreign key (id_subcompetencia) references subcompetencia(id_subcompetencia)
);