-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: tpi-g8-dacs2021.mysql.database.azure.com    Database: grupo8
-- ------------------------------------------------------
-- Server version	5.6.47.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `lineas_detalle`
--

DROP TABLE IF EXISTS `lineas_detalle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lineas_detalle` (
  `idLineaDetalle` int(11) NOT NULL AUTO_INCREMENT,
  `idDetalle` int(11) NOT NULL,
  `idProducto` varchar(13) DEFAULT NULL,
  `cantidad` float unsigned NOT NULL,
  `precioLinea` float DEFAULT NULL,
  PRIMARY KEY (`idLineaDetalle`,`idDetalle`),
  KEY `idDetalle` (`idDetalle`),
  KEY `idProducto` (`idProducto`),
  CONSTRAINT `lineas_detalle_ibfk_1` FOREIGN KEY (`idDetalle`) REFERENCES `detalles` (`idDetalle`),
  CONSTRAINT `lineas_detalle_ibfk_2` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`EAN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lineas_detalle`
--

LOCK TABLES `lineas_detalle` WRITE;
/*!40000 ALTER TABLE `lineas_detalle` DISABLE KEYS */;
/*!40000 ALTER TABLE `lineas_detalle` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-19 14:30:39
