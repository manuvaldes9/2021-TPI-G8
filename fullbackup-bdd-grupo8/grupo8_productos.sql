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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `EAN` varchar(13) NOT NULL,
  `nombre` varchar(40) NOT NULL,
  `precioKG` float NOT NULL,
  `stock` float unsigned DEFAULT '0',
  PRIMARY KEY (`EAN`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES ('012165438-9','Steel',76.21,59.44),('173337420-5','Wood',73.12,25.95),('270294525-2','Vinyl',125.96,12.77),('297643576-6','Aluminum',96.44,52.16),('299587844-9','Wood',137.01,95.23),('395921729-3','Plexiglass',250.59,11.56),('442540578-1','Glass',101.34,75.2),('450790765-9','Granite',263.55,18.17),('457157395-2','Plexiglass',216.46,80.58),('654555879-X','Plexiglass',238.05,81.94),('735480324-3','Stone',214.29,28.58),('743249088-0','Wood',51.8,42.46),('797773983-6','Vinyl',135.38,15.51),('824443657-3','Glass',259.47,93),('927720396-X','Rubber',63.84,93.31),('944101721-3','Vinyl',140.22,11.35);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-19 14:30:55
