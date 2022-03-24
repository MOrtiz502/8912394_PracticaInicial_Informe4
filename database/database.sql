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
fecha_creación timestamp NOT NULL default current_timestamp,
primary key(idUsuario)
);

