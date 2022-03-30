Create database practica4;
USE practica4;

Create Table Usuario(
idUsuario int NOT NULL auto_increment,
dpi   varchar(15) NOT NULL,
carnet varchar(20) ,
nombre varchar(30) NOT NULL,
apellido varchar(30) NOT NULL,
contrasenia varchar(20) NOT NULL,
correo varchar(30) NOT NULL,
estudiante varchar(1) NOT NULL,
tipo_usuario varchar(1) NOT NULL,
fecha_creación timestamp NOT NULL default current_timestamp,
primary key(idUsuario)
);

Create Table Curso(
idCurso int NOT NULL auto_increment,
nombre varchar(70) NOT NULL,
codigo varchar(10) NOT NULL,
fecha_creación timestamp NOT NULL default current_timestamp,
primary key (idCurso)
);

create table Catedratico(
idCatedratico int NOT NULL auto_increment,
nombre varchar(60) NOT NULL,
apellido varchar(60) NOT NULL,
fecha_creación timestamp NOT NULL default current_timestamp,
primary key (idCatedratico)
);

create table Auxiliar(
idAuxiliar int NOT NULL auto_increment,
nombre varchar(60) NOT NULL,
apellido varchar(60) NOT NULL,
fecha_creación timestamp NOT NULL default current_timestamp,
primary key (idAuxiliar)
);

create table Curso_Aprobado(
idCursoAprobado int NOT NULL auto_increment,
idUsuario int NOT NULL,
idCurso int NOT NULL,
nota int not null,
fecha_aprobado date NOT NULL,
fecha_creación timestamp NOT NULL default current_timestamp,
primary key (idCursoAprobado),
foreign key (idUsuario) references Usuario(idUsuario),
foreign key (idCurso) references Curso(idCurso)
);

create table Seccion(
idSeccion int NOT NULL auto_increment,
descripcion varchar(255) NOT NULL,
fecha_creacion timestamp NOT NULL default current_timestamp,
primary key (idSeccion)
);

create table Semestre(
idSemestre int NOT NULL auto_increment,
descripcion varchar(255) NOT NULL,
anio int NOT NULL,
fecha_creacion timestamp NOT NULL default current_timestamp,
primary key (idSemestre)
);

create table Horario(
idHorario int NOT NULL auto_increment,
idCurso int NOT NULL,
idCatedratico int NOT NULL,
idAuxiliar int NOT NULL,
idSeccion int NOT NULL,
idSemestre int NOT NULL,
Detalle varchar(255) NOT NULL,
fecha_creacion timestamp NOT NULL default current_timestamp,
primary key (idHorario),
foreign key (idCurso) references Curso(idCurso),
foreign key (idCatedratico) references Catedratico(idCatedratico),
foreign key (idAuxiliar) references Auxiliar(idAuxiliar),
foreign key (idSeccion) references Seccion(idSeccion),
foreign key (idSemestre) references Semestre(idSemestre)
);


Create Table Publicacion(
idPublicacion int NOT NULL auto_increment,
idUsuario int NOT NULL,
idCurso int NOT NULL,
idCatedratico int NOT NULL,
idAuxiliar int NOT NULL,
texto varchar(255),
fecha_creacion timestamp NOT NULL default current_timestamp,
primary key (idPublicacion),
foreign key (idUsuario) references Usuario(idUsuario),
foreign key (idCurso) references Curso(idCurso),
foreign Key (idCatedratico) references Catedratico(idCatedratico),
foreign Key (idAuxiliar) references Auxiliar(idAuxiliar)
);

Create Table Comentario(
idComentario int NOT NULL auto_increment,
idPublicacion int NOT NULL,
IdUsuario int NOT NULL,
comentario varchar(255),
fecha_creacion timestamp NOT NULL default current_timestamp,
primary key (idComentario),
foreign key (idPublicacion) references Publicacion(idPublicacion),
foreign key (idUsuario) references Usuario(idUsuario)
);


