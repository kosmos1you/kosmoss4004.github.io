-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Окт 07 2020 г., 09:41
-- Версия сервера: 5.5.50
-- Версия PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `SportComplex`
--

-- --------------------------------------------------------

--
-- Структура таблицы `inventar`
--

CREATE TABLE IF NOT EXISTS `inventar` (
  `id_inv` int(11) NOT NULL,
  `predmet` text NOT NULL,
  `colvo` int(11) NOT NULL,
  `proizvod` text NOT NULL,
  `id_zal` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `inventar`
--

INSERT INTO `inventar` (`id_inv`, `predmet`, `colvo`, `proizvod`, `id_zal`) VALUES
(1, 'Футбольный мяч', 12, 'ADIDAS', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `sekciya`
--

CREATE TABLE IF NOT EXISTS `sekciya` (
  `id_sekc` int(11) NOT NULL,
  `nazvan` text NOT NULL,
  `gruppa` text NOT NULL,
  `time_begin` time NOT NULL,
  `time_end` time NOT NULL,
  `id_tren` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sekciya`
--

INSERT INTO `sekciya` (`id_sekc`, `nazvan`, `gruppa`, `time_begin`, `time_end`, `id_tren`) VALUES
(1, 'Футбол', 'ст', '12:30:00', '14:00:00', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `sportsmen`
--

CREATE TABLE IF NOT EXISTS `sportsmen` (
  `id_sp` int(11) NOT NULL,
  `fam` text NOT NULL,
  `ima` text NOT NULL,
  `otch` text NOT NULL,
  `date_birth` date NOT NULL,
  `pol` text NOT NULL,
  `id_sekc` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `sportsmen`
--

INSERT INTO `sportsmen` (`id_sp`, `fam`, `ima`, `otch`, `date_birth`, `pol`, `id_sekc`) VALUES
(1, 'Бойков', 'Мир', 'Евстафиевич', '2004-07-16', 'м', 1);

-- --------------------------------------------------------

--
-- Структура таблицы `trener`
--

CREATE TABLE IF NOT EXISTS `trener` (
  `id_tren` int(11) NOT NULL,
  `fam` text NOT NULL,
  `ima` text NOT NULL,
  `otch` text NOT NULL,
  `address` text NOT NULL,
  `zp` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `trener`
--

INSERT INTO `trener` (`id_tren`, `fam`, `ima`, `otch`, `address`, `zp`) VALUES
(1, 'Карпов', 'Андрей', 'Филиппович', 'ул. Пушкина 144', 25500);

-- --------------------------------------------------------

--
-- Структура таблицы `zal`
--

CREATE TABLE IF NOT EXISTS `zal` (
  `id_zal` int(11) NOT NULL,
  `vmestim` int(11) NOT NULL,
  `playgr_w` int(11) NOT NULL,
  `playgr_l` int(11) NOT NULL,
  `id_tren` int(11) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `zal`
--

INSERT INTO `zal` (`id_zal`, `vmestim`, `playgr_w`, `playgr_l`, `id_tren`) VALUES
(1, 100, 80, 50, 1),
(2, 100, 100, 200, 2);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `inventar`
--
ALTER TABLE `inventar`
  ADD PRIMARY KEY (`id_inv`);

--
-- Индексы таблицы `sekciya`
--
ALTER TABLE `sekciya`
  ADD PRIMARY KEY (`id_sekc`);

--
-- Индексы таблицы `sportsmen`
--
ALTER TABLE `sportsmen`
  ADD PRIMARY KEY (`id_sp`);

--
-- Индексы таблицы `trener`
--
ALTER TABLE `trener`
  ADD PRIMARY KEY (`id_tren`);

--
-- Индексы таблицы `zal`
--
ALTER TABLE `zal`
  ADD PRIMARY KEY (`id_zal`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `inventar`
--
ALTER TABLE `inventar`
  MODIFY `id_inv` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `sekciya`
--
ALTER TABLE `sekciya`
  MODIFY `id_sekc` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `sportsmen`
--
ALTER TABLE `sportsmen`
  MODIFY `id_sp` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `trener`
--
ALTER TABLE `trener`
  MODIFY `id_tren` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT для таблицы `zal`
--
ALTER TABLE `zal`
  MODIFY `id_zal` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
