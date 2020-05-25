CREATE TABLE `awa`.`prueba` (
  `idprueba` INT NOT NULL AUTO_INCREMENT,
  `editorial` VARCHAR(45) NOT NULL,
  `historia` VARCHAR(75) NOT NULL,
  `sexo` VARCHAR(10) NOT NULL,
  `primera_aparicion` VARCHAR(60) NOT NULL,
  `nombre` VARCHAR(100) NOT NULL,
  `apariciones` VARCHAR(75) NOT NULL,
  PRIMARY KEY (`idprueba`));

CREATE TABLE `c18001211`.`prueba2` (
  `idprueba2` INT NOT NULL,
  `poder` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idprueba2`));
  

CREATE TABLE `c18001211`.`prueba3` (
  `idprueba` INT NOT NULL,
  `poderes` SET('Volar', 'Control mental', 'Alteración de la realidad', 'Metamorfosis', 'Poder cósmico', 'Teletransportación', 'Super Inteligencia', 'Clarividencia', 'Autocuración', 'Inmortalidad', 'Super Velocidad', 'Hechiceria', 'Manipular el tiempo', 'Invisibilidad', 'Campo de Fuerza', 'Agilidad Superhumana', 'Súper fuerza', 'Telequinesis', 'Atravesar paredes', 'Aracnido', 'Super Reflejos') NOT NULL,
  PRIMARY KEY (`idprueba`),
  CONSTRAINT `idprueba`
    FOREIGN KEY (`idprueba`)
    REFERENCES `c18001211`.`prueba` (`idprueba`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `c18001211`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(40) NULL,
  `email` VARCHAR(70) NULL,
  `password` VARCHAR(100) NULL,
  PRIMARY KEY (`id`));

