CREATE TABLE `awa`.`prueba` (
`idprueba` INT NOT NULL AUTO_INCREMENT,
`editorial` VARCHAR(45) NOT NULL,
`historia` VARCHAR(75) NOT NULL,
`sexo` varchar(10) NOT NULL,
`primera_aparicion` VARCHAR(60) NOT NULL,
`nombre` VARCHAR(100) NOT NULL,
PRIMARY KEY (`idprueba`));


CREATE TABLE `awa`.`prueba2` (
  `idprueba2` INT NOT NULL,
  `poder` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idprueba2`));

  

CREATE TABLE `awa`.`prueba3` (
  `idprueba` INT NOT NULL,
  `poderes` SET('Cronoquinesis', 'Telekinesis') NOT NULL,
  PRIMARY KEY (`idprueba`),
  CONSTRAINT `idprueba`
    FOREIGN KEY (`idprueba`)
    REFERENCES `awa`.`prueba` (`idprueba`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);


CREATE TABLE `awa`.`Usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NULL,
   `email` VARCHAR(70) NULL,
   `password` VARCHAR(100) NULL
  PRIMARY KEY (`id`));

