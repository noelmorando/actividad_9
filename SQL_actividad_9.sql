-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema blog
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `blog` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ;
USE `blog` ;

-- -----------------------------------------------------
-- Table `blog`.`autores`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`autores` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(50) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `imagen` TEXT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


-- -----------------------------------------------------
-- Table `blog`.`posts`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blog`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(50) NOT NULL,
  `descripcion` TEXT NOT NULL,
  `fecha` VARCHAR(20) NOT NULL,
  `categoria` VARCHAR(20) NOT NULL,
  `autor_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_posts_autor_idx` (`autor_id` ASC),
  CONSTRAINT `fk_posts_autores`
    FOREIGN KEY (`autor_id`)
    REFERENCES `blog`.`autores` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
