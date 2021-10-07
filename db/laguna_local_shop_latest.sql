-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 07, 2021 at 03:23 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.2.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laguna_local_shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `md_country`
--

CREATE TABLE `md_country` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `md_country`
--

INSERT INTO `md_country` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'China', NULL, NULL),
(2, 'India', NULL, NULL),
(3, 'United States', NULL, NULL),
(4, 'Indonesia', NULL, NULL),
(5, 'Brazil', NULL, NULL),
(6, 'Pakistan', NULL, NULL),
(7, 'Nigeria', NULL, NULL),
(8, 'Bangladesh', NULL, NULL),
(9, 'Russia', NULL, NULL),
(10, 'Japan', NULL, NULL),
(11, 'Mexico', NULL, NULL),
(12, 'Philippines', NULL, NULL),
(13, 'Vietnam', NULL, NULL),
(14, 'Ethiopia', NULL, NULL),
(15, 'Egypt', NULL, NULL),
(16, 'Germany', NULL, NULL),
(17, 'Iran', NULL, NULL),
(18, 'Turkey', NULL, NULL),
(19, 'Democratic Republic of the Congo', NULL, NULL),
(20, 'Thailand', NULL, NULL),
(21, 'France', NULL, NULL),
(22, 'United Kingdom', NULL, NULL),
(23, 'Italy', NULL, NULL),
(24, 'Burma', NULL, NULL),
(25, 'South Africa', NULL, NULL),
(26, 'South Korea', NULL, NULL),
(27, 'Colombia', NULL, NULL),
(28, 'Spain', NULL, NULL),
(29, 'Ukraine', NULL, NULL),
(30, 'Tanzania', NULL, NULL),
(31, 'Kenya', NULL, NULL),
(32, 'Argentina', NULL, NULL),
(33, 'Algeria', NULL, NULL),
(34, 'Poland', NULL, NULL),
(35, 'Sudan', NULL, NULL),
(36, 'Uganda', NULL, NULL),
(37, 'Canada', NULL, NULL),
(38, 'Iraq', NULL, NULL),
(39, 'Morocco', NULL, NULL),
(40, 'Peru', NULL, NULL),
(41, 'Uzbekistan', NULL, NULL),
(42, 'Saudi Arabia', NULL, NULL),
(43, 'Malaysia', NULL, NULL),
(44, 'Venezuela', NULL, NULL),
(45, 'Nepal', NULL, NULL),
(46, 'Afghanistan', NULL, NULL),
(47, 'Yemen', NULL, NULL),
(48, 'North Korea', NULL, NULL),
(49, 'Ghana', NULL, NULL),
(50, 'Mozambique', NULL, NULL),
(51, 'Taiwan', NULL, NULL),
(52, 'Australia', NULL, NULL),
(53, 'Ivory Coast', NULL, NULL),
(54, 'Syria', NULL, NULL),
(55, 'Madagascar', NULL, NULL),
(56, 'Angola', NULL, NULL),
(57, 'Cameroon', NULL, NULL),
(58, 'Sri Lanka', NULL, NULL),
(59, 'Romania', NULL, NULL),
(60, 'Burkina Faso', NULL, NULL),
(61, 'Niger', NULL, NULL),
(62, 'Kazakhstan', NULL, NULL),
(63, 'Netherlands', NULL, NULL),
(64, 'Chile', NULL, NULL),
(65, 'Malawi', NULL, NULL),
(66, 'Ecuador', NULL, NULL),
(67, 'Guatemala', NULL, NULL),
(68, 'Mali', NULL, NULL),
(69, 'Cambodia', NULL, NULL),
(70, 'Senegal', NULL, NULL),
(71, 'Zambia', NULL, NULL),
(72, 'Zimbabwe', NULL, NULL),
(73, 'Chad', NULL, NULL),
(74, 'South Sudan', NULL, NULL),
(75, 'Belgium', NULL, NULL),
(76, 'Cuba', NULL, NULL),
(77, 'Tunisia', NULL, NULL),
(78, 'Guinea', NULL, NULL),
(79, 'Greece', NULL, NULL),
(80, 'Portugal', NULL, NULL),
(81, 'Rwanda', NULL, NULL),
(82, 'Czech Republic', NULL, NULL),
(83, 'Somalia', NULL, NULL),
(84, 'Haiti', NULL, NULL),
(85, 'Benin', NULL, NULL),
(86, 'Burundi', NULL, NULL),
(87, 'Bolivia', NULL, NULL),
(88, 'Hungary', NULL, NULL),
(89, 'Sweden', NULL, NULL),
(90, 'Belarus', NULL, NULL),
(91, 'Dominican Republic', NULL, NULL),
(92, 'Azerbaijan', NULL, NULL),
(93, 'Honduras', NULL, NULL),
(94, 'Austria', NULL, NULL),
(95, 'United Arab Emirates', NULL, NULL),
(96, 'Israel', NULL, NULL),
(97, 'Switzerland', NULL, NULL),
(98, 'Tajikistan', NULL, NULL),
(99, 'Bulgaria', NULL, NULL),
(100, 'Hong Kong (China)', NULL, NULL),
(101, 'Serbia', NULL, NULL),
(102, 'Papua New Guinea', NULL, NULL),
(103, 'Paraguay', NULL, NULL),
(104, 'Laos', NULL, NULL),
(105, 'Jordan', NULL, NULL),
(106, 'El Salvador', NULL, NULL),
(107, 'Eritrea', NULL, NULL),
(108, 'Libya', NULL, NULL),
(109, 'Togo', NULL, NULL),
(110, 'Sierra Leone', NULL, NULL),
(111, 'Nicaragua', NULL, NULL),
(112, 'Kyrgyzstan', NULL, NULL),
(113, 'Denmark', NULL, NULL),
(114, 'Finland', NULL, NULL),
(115, 'Slovakia', NULL, NULL),
(116, 'Singapore', NULL, NULL),
(117, 'Turkmenistan', NULL, NULL),
(118, 'Norway', NULL, NULL),
(119, 'Lebanon', NULL, NULL),
(120, 'Costa Rica', NULL, NULL),
(121, 'Central African Republic', NULL, NULL),
(122, 'Ireland', NULL, NULL),
(123, 'Georgia', NULL, NULL),
(124, 'New Zealand', NULL, NULL),
(125, 'Republic of the Congo', NULL, NULL),
(126, 'Palestine', NULL, NULL),
(127, 'Liberia', NULL, NULL),
(128, 'Croatia', NULL, NULL),
(129, 'Oman', NULL, NULL),
(130, 'Bosnia and Herzegovina', NULL, NULL),
(131, 'Puerto Rico', NULL, NULL),
(132, 'Kuwait', NULL, NULL),
(133, 'Moldov', NULL, NULL),
(134, 'Mauritania', NULL, NULL),
(135, 'Panama', NULL, NULL),
(136, 'Uruguay', NULL, NULL),
(137, 'Armenia', NULL, NULL),
(138, 'Lithuania', NULL, NULL),
(139, 'Albania', NULL, NULL),
(140, 'Mongolia', NULL, NULL),
(141, 'Jamaica', NULL, NULL),
(142, 'Namibia', NULL, NULL),
(143, 'Lesotho', NULL, NULL),
(144, 'Qatar', NULL, NULL),
(145, 'Macedonia', NULL, NULL),
(146, 'Slovenia', NULL, NULL),
(147, 'Botswana', NULL, NULL),
(148, 'Latvia', NULL, NULL),
(149, 'Gambia', NULL, NULL),
(150, 'Kosovo', NULL, NULL),
(151, 'Guinea-Bissau', NULL, NULL),
(152, 'Gabon', NULL, NULL),
(153, 'Equatorial Guinea', NULL, NULL),
(154, 'Trinidad and Tobago', NULL, NULL),
(155, 'Estonia', NULL, NULL),
(156, 'Mauritius', NULL, NULL),
(157, 'Swaziland', NULL, NULL),
(158, 'Bahrain', NULL, NULL),
(159, 'Timor-Leste', NULL, NULL),
(160, 'Djibouti', NULL, NULL),
(161, 'Cyprus', NULL, NULL),
(162, 'Fiji', NULL, NULL),
(163, 'Reunion (France)', NULL, NULL),
(164, 'Guyana', NULL, NULL),
(165, 'Comoros', NULL, NULL),
(166, 'Bhutan', NULL, NULL),
(167, 'Montenegro', NULL, NULL),
(168, 'Macau (China)', NULL, NULL),
(169, 'Solomon Islands', NULL, NULL),
(170, 'Western Sahara', NULL, NULL),
(171, 'Luxembourg', NULL, NULL),
(172, 'Suriname', NULL, NULL),
(173, 'Cape Verde', NULL, NULL),
(174, 'Malta', NULL, NULL),
(175, 'Guadeloupe (France)', NULL, NULL),
(176, 'Martinique (France)', NULL, NULL),
(177, 'Brunei', NULL, NULL),
(178, 'Bahamas', NULL, NULL),
(179, 'Iceland', NULL, NULL),
(180, 'Maldives', NULL, NULL),
(181, 'Belize', NULL, NULL),
(182, 'Barbados', NULL, NULL),
(183, 'French Polynesia (France)', NULL, NULL),
(184, 'Vanuatu', NULL, NULL),
(185, 'New Caledonia (France)', NULL, NULL),
(186, 'French Guiana (France)', NULL, NULL),
(187, 'Mayotte (France)', NULL, NULL),
(188, 'Samoa', NULL, NULL),
(189, 'Sao Tom and Principe', NULL, NULL),
(190, 'Saint Lucia', NULL, NULL),
(191, 'Guam (USA)', NULL, NULL),
(192, 'Curacao (Netherlands)', NULL, NULL),
(193, 'Saint Vincent and the Grenadines', NULL, NULL),
(194, 'Kiribati', NULL, NULL),
(195, 'United States Virgin Islands (USA)', NULL, NULL),
(196, 'Grenada', NULL, NULL),
(197, 'Tonga', NULL, NULL),
(198, 'Aruba (Netherlands)', NULL, NULL),
(199, 'Federated States of Micronesia', NULL, NULL),
(200, 'Jersey (UK)', NULL, NULL),
(201, 'Seychelles', NULL, NULL),
(202, 'Antigua and Barbuda', NULL, NULL),
(203, 'Isle of Man (UK)', NULL, NULL),
(204, 'Andorra', NULL, NULL),
(205, 'Dominica', NULL, NULL),
(206, 'Bermuda (UK)', NULL, NULL),
(207, 'Guernsey (UK)', NULL, NULL),
(208, 'Greenland (Denmark)', NULL, NULL),
(209, 'Marshall Islands', NULL, NULL),
(210, 'American Samoa (USA)', NULL, NULL),
(211, 'Cayman Islands (UK)', NULL, NULL),
(212, 'Saint Kitts and Nevis', NULL, NULL),
(213, 'Northern Mariana Islands (USA)', NULL, NULL),
(214, 'Faroe Islands (Denmark)', NULL, NULL),
(215, 'Sint Maarten (Netherlands)', NULL, NULL),
(216, 'Saint Martin (France)', NULL, NULL),
(217, 'Liechtenstein', NULL, NULL),
(218, 'Monaco', NULL, NULL),
(219, 'San Marino', NULL, NULL),
(220, 'Turks and Caicos Islands (UK)', NULL, NULL),
(221, 'Gibraltar (UK)', NULL, NULL),
(222, 'British Virgin Islands (UK)', NULL, NULL),
(223, 'Aland Islands (Finland)', NULL, NULL),
(224, 'Caribbean Netherlands (Netherlands)', NULL, NULL),
(225, 'Palau', NULL, NULL),
(226, 'Cook Islands (NZ)', NULL, NULL),
(227, 'Anguilla (UK)', NULL, NULL),
(228, 'Wallis and Futuna (France)', NULL, NULL),
(229, 'Tuvalu', NULL, NULL),
(230, 'Nauru', NULL, NULL),
(231, 'Saint Barthelemy (France)', NULL, NULL),
(232, 'Saint Pierre and Miquelon (France)', NULL, NULL),
(233, 'Montserrat (UK)', NULL, NULL),
(234, '\"Saint Helena', NULL, NULL),
(235, 'Svalbard and Jan Mayen (Norway)', NULL, NULL),
(236, 'Falkland Islands (UK)', NULL, NULL),
(237, 'Norfolk Island (Australia)', NULL, NULL),
(238, 'Christmas Island (Australia)', NULL, NULL),
(239, 'Niue (NZ)', NULL, NULL),
(240, 'Tokelau (NZ)', NULL, NULL),
(241, 'Vatican City', NULL, NULL),
(242, 'Cocos (Keeling) Islands (Australia)', NULL, NULL),
(243, 'Pitcairn Islands (UK)', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `md_holder_cling`
--

CREATE TABLE `md_holder_cling` (
  `id` int(11) NOT NULL,
  `free_flag` enum('Y','N') NOT NULL DEFAULT 'Y',
  `price` float(10,2) NOT NULL DEFAULT 0.00,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_holder_cling`
--

INSERT INTO `md_holder_cling` (`id`, `free_flag`, `price`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(6, 'Y', 12.00, 'Subham', '2021-09-15 00:00:00', NULL, NULL),
(7, 'Y', 123.00, 'Subham', '2021-09-15 00:00:00', NULL, NULL),
(8, 'Y', 131.00, 'Subham', '2021-09-15 00:00:00', NULL, NULL),
(9, 'Y', 10.00, 'Subham', '2021-09-15 00:00:00', 'Subham', '2021-09-15 00:00:00');

-- --------------------------------------------------------

--
-- Table structure for table `md_items`
--

CREATE TABLE `md_items` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `item_name` varchar(100) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_items`
--

INSERT INTO `md_items` (`id`, `restaurant_id`, `menu_id`, `section_id`, `item_name`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 5, 1, 1, 'BREAKFAST BURRITO', '5', '2021-09-20 17:34:39', '5', '2021-09-22 17:50:19'),
(2, 5, 1, 1, 'LOX BAGEL', '5', '2021-09-20 17:36:05', '5', '2021-09-22 17:50:30'),
(3, 5, 2, 2, 'CALAMARI STEAK', '5', '2021-09-20 17:38:01', '5', '2021-09-22 17:50:48'),
(4, 5, 2, 2, 'AHI POKE', '5', '2021-09-20 17:38:12', '5', '2021-09-22 17:51:07'),
(5, 5, 1, 1, 'CHICKEN & WAFFLES', '5', '2021-09-22 17:51:40', NULL, NULL),
(6, 5, 1, 3, 'AÇAÍ BOWL', '5', '2021-09-22 17:52:02', NULL, NULL),
(7, 5, 1, 9, 'Bagel & Cream Cheese', '5', '2021-09-22 17:52:33', NULL, NULL),
(8, 5, 1, 9, 'Breakfast Potatoes', '5', '2021-09-22 17:52:44', NULL, NULL),
(9, 5, 1, 9, 'Toast or English Muffin', '5', '2021-09-22 17:52:55', NULL, NULL),
(10, 5, 1, 4, 'CLIFF', '5', '2021-09-22 17:53:42', NULL, NULL),
(11, 5, 1, 4, 'CALIFORNIA', '5', '2021-09-22 17:53:50', NULL, NULL),
(12, 5, 1, 4, 'SPANISH', '5', '2021-09-22 17:54:02', NULL, NULL),
(13, 5, 1, 10, 'TRADITIONAL', '5', '2021-09-22 17:54:15', NULL, NULL),
(14, 5, 1, 10, 'GARDEN', '5', '2021-09-22 17:54:24', NULL, NULL),
(15, 5, 2, 10, 'SHRIMP CEVICHE', '5', '2021-09-22 17:54:52', NULL, NULL),
(16, 5, 2, 5, 'CHEESE & FRUIT PLATE', '5', '2021-09-22 17:55:22', NULL, NULL),
(17, 5, 2, 5, 'SEAFOOD TOWER', '5', '2021-09-22 17:55:29', NULL, NULL),
(18, 5, 2, 6, 'CHICKEN CAESAR', '5', '2021-09-22 17:55:58', NULL, NULL),
(19, 5, 2, 6, 'PEAR GORGONZOLA', '5', '2021-09-22 17:56:06', NULL, NULL),
(20, 5, 2, 6, 'SALMON SPINACH', '5', '2021-09-22 17:56:14', NULL, NULL),
(21, 5, 2, 7, 'MONDAY', '5', '2021-09-22 17:56:31', NULL, NULL),
(22, 5, 2, 7, 'TUESDAY', '5', '2021-09-22 17:56:45', NULL, NULL),
(23, 5, 2, 7, 'WEDNESDAY', '5', '2021-09-22 17:56:57', NULL, NULL),
(24, 5, 2, 8, 'THE CLIFF BURGER', '5', '2021-09-22 17:57:12', NULL, NULL),
(25, 5, 2, 8, 'CALAMARI BURGER', '5', '2021-09-22 17:57:19', NULL, NULL),
(26, 5, 2, 8, 'CHILI RELLENO BURGER', '5', '2021-09-22 17:57:27', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `md_item_description`
--

CREATE TABLE `md_item_description` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `section_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `item_price` float(10,2) NOT NULL DEFAULT 0.00,
  `item_desc` text NOT NULL,
  `item_note` text NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_item_description`
--

INSERT INTO `md_item_description` (`id`, `restaurant_id`, `menu_id`, `section_id`, `item_id`, `item_price`, `item_desc`, `item_note`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 5, 1, 1, 2, 10.00, 'item', 'note', '5', '2021-09-20 18:10:12', NULL, NULL),
(2, 5, 1, 1, 1, 12.00, 'Choice of bacon or chorizo with scrambled eggs, potatoes & cheese, wrapped in a flour tortilla Served with breakfast potatoes or fresh fruit', '', '5', '2021-09-22 17:58:30', NULL, NULL),
(3, 5, 1, 1, 2, 12.00, 'Cold smoked salmon, tomato, cucumber, avocado, capers, red onion & cream cheese', '', '5', '2021-09-22 17:59:33', NULL, NULL),
(4, 5, 1, 1, 5, 12.00, 'Belgian waffle with three pieces of fried chicken, house gravy, sriracha honey butter and orange agave maple syrup add a fried egg for $1', '', '5', '2021-09-22 18:00:07', NULL, NULL),
(5, 5, 1, 3, 6, 10.00, 'Sambazon açaí, granola, pineapple, strawberries, blueberries, blackberries, chia, coconut & honey', '', '5', '2021-09-22 18:00:41', NULL, NULL),
(6, 5, 1, 4, 10, 12.50, 'Diced ham, brie cheese, sauteed mushrooms, spinach, sweet onion, garlic & sour cream', '', '5', '2021-09-22 18:01:14', NULL, NULL),
(7, 5, 1, 4, 11, 17.00, 'Crab, havarti, avocado & hollandaise', '', '5', '2021-09-22 18:01:33', NULL, NULL),
(8, 5, 1, 4, 12, 12.00, 'Chorizo, red, yellow & green bell peppers, sauteed onion, tomatoes, pepper jack cheese & pico de gallo', '', '5', '2021-09-22 18:01:54', NULL, NULL),
(9, 5, 1, 9, 7, 5.00, '', '', '5', '2021-09-22 18:02:34', NULL, NULL),
(10, 5, 1, 9, 8, 3.00, '', '', '5', '2021-09-22 18:02:49', NULL, NULL),
(11, 5, 1, 9, 9, 2.00, '', '', '5', '2021-09-22 18:02:56', NULL, NULL),
(12, 5, 1, 10, 13, 11.50, 'English muffin, canadian bacon, poached eggs and hollandaise', '', '5', '2021-09-22 18:03:21', NULL, NULL),
(13, 5, 1, 10, 14, 11.50, 'English muffin, sliced tomatoes, avocado, poached eggs & hollandaise', '', '5', '2021-09-22 18:03:36', NULL, NULL),
(14, 5, 2, 2, 3, 16.00, 'panko breaded calamari, tartar & cocktail sauce', '', '5', '2021-09-22 18:04:10', NULL, NULL),
(15, 5, 2, 2, 4, 17.00, 'diced ahi tuna, soy, jalapeno, onion, sesame, wonton bowl & taro chips', '', '5', '2021-09-22 18:04:25', NULL, NULL),
(16, 5, 2, 5, 16, 35.00, 'five premium cheeses, fruit, candied pec ans, marinated vegetables, jam & crackers serves 3-4', '', '5', '2021-09-22 18:04:49', NULL, NULL),
(17, 5, 2, 5, 17, 75.00, 'two tiered red arrangement of: 12 scallops wasabi, 12 chilled prawns, 6 snow crab claws, cocktail sauce & lemon', '', '5', '2021-09-22 18:05:07', NULL, NULL),
(18, 5, 2, 6, 18, 18.50, 'romaine, parmesan, creamy caesar dressing, croutons', '', '5', '2021-09-22 18:05:33', NULL, NULL),
(19, 5, 2, 6, 19, 16.50, 'butter lettuce, pear, gorgonzola, dried cranberries, candied pecans & balsamic vinaigrette', '', '5', '2021-09-22 18:05:47', NULL, NULL),
(20, 5, 2, 6, 20, 22.50, 'baby spinach, feta, candied pecans, strawberries, raspberry vinaigrette', '', '5', '2021-09-22 18:06:01', NULL, NULL),
(21, 5, 2, 7, 21, 6.00, 'Italian Wedding', 'CUP', '5', '2021-09-22 18:06:55', NULL, NULL),
(22, 5, 2, 7, 21, 8.00, 'Italian Wedding', 'BOWL', '5', '2021-09-22 18:07:08', NULL, NULL),
(23, 5, 2, 7, 22, 8.00, 'Baja Chicken', 'BOWL', '5', '2021-09-22 18:07:28', NULL, NULL),
(24, 5, 2, 7, 22, 6.00, 'Baja Chicken', 'CUP', '5', '2021-09-22 18:07:35', NULL, NULL),
(25, 5, 2, 7, 23, 6.00, 'Cheddar & Potato', 'CUP', '5', '2021-09-22 18:07:50', NULL, NULL),
(26, 5, 2, 7, 23, 8.00, 'Cheddar & Potato', 'BOWL', '5', '2021-09-22 18:08:07', NULL, NULL),
(27, 5, 2, 8, 24, 20.00, '1/2 lb burger, lettuce, red onion, tomato, pickles, honey chipotle aioli, brioche bun & fries Includes soup or salad', 'add cheese $1\nadd bacon or avocado $2', '5', '2021-09-22 18:08:41', NULL, NULL),
(28, 5, 2, 8, 25, 18.00, 'panko breaded calamari steak, lettuce, red onion, tomato, remoulade, brioche bun, fries', '', '5', '2021-09-22 18:08:57', NULL, NULL),
(29, 5, 2, 8, 26, 23.00, '1/2 lb burger, chili relleno, jalapeno bacon, red onion, brioche bun, jalapeno aioli & sweet potato fries add a fried egg $1', '', '5', '2021-09-22 18:09:15', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `md_menu`
--

CREATE TABLE `md_menu` (
  `id` int(11) NOT NULL,
  `menu_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_menu`
--

INSERT INTO `md_menu` (`id`, `menu_description`) VALUES
(1, 'Breakfast'),
(2, 'Lunch'),
(3, 'Dinner'),
(4, 'Brunch'),
(5, 'Specials');

-- --------------------------------------------------------

--
-- Table structure for table `md_package`
--

CREATE TABLE `md_package` (
  `id` int(11) NOT NULL,
  `pakage_name` varchar(50) NOT NULL,
  `no_of_menu` enum('O','T','U') NOT NULL,
  `special_menu` enum('Y','N') NOT NULL DEFAULT 'Y',
  `setup_fee` float(10,2) NOT NULL DEFAULT 0.00,
  `monthly_fee` float(10,2) NOT NULL DEFAULT 0.00,
  `pack_description` text NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` int(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_package`
--

INSERT INTO `md_package` (`id`, `pakage_name`, `no_of_menu`, `special_menu`, `setup_fee`, `monthly_fee`, `pack_description`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, '1', 'O', 'Y', 12.00, 123.00, 'Lorem Ipsum', 'Subham', '2021-09-15 00:00:00', NULL, NULL),
(2, '2', 'T', 'N', 12.00, 123.00, 'Lorem Ipsum', 'Subham', '2021-09-15 00:00:00', NULL, NULL),
(3, '3', 'U', 'Y', 11.00, 111.00, 'Lorem Ipsum', 'Subham', '2021-09-15 00:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `md_parm_value`
--

CREATE TABLE `md_parm_value` (
  `id` int(11) NOT NULL,
  `param_desc` varchar(100) NOT NULL,
  `param_value` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_parm_value`
--

INSERT INTO `md_parm_value` (`id`, `param_desc`, `param_value`) VALUES
(1, 'Project Name', 'Shop Local Laguna'),
(2, 'Email Name', 'Cindy Ferguson');

-- --------------------------------------------------------

--
-- Table structure for table `md_promo_calander`
--

CREATE TABLE `md_promo_calander` (
  `id` int(11) NOT NULL,
  `free_flag` enum('Y','N') NOT NULL,
  `price` float(10,2) NOT NULL DEFAULT 0.00,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_promo_calander`
--

INSERT INTO `md_promo_calander` (`id`, `free_flag`, `price`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(4, 'N', 12.00, 'Subham', '2021-09-15 00:00:00', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `md_section`
--

CREATE TABLE `md_section` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `section_name` varchar(100) NOT NULL,
  `section_img` varchar(50) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_section`
--

INSERT INTO `md_section` (`id`, `restaurant_id`, `menu_id`, `section_name`, `section_img`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 5, 1, 'House Specialities', '', '5', '2021-09-20 16:59:34', '5', '2021-09-22 17:44:51'),
(2, 5, 2, 'STARTERS', '', '5', '2021-09-20 17:02:58', '5', '2021-09-22 17:46:11'),
(3, 5, 1, 'AÇAÍ', '', '5', '2021-09-21 15:32:46', '5', '2021-09-22 17:48:34'),
(4, 5, 1, 'OMELETS', '', '5', '2021-09-21 15:34:41', '5', '2021-09-22 17:49:07'),
(5, 5, 2, 'STARTERS TO SHARE', '', '5', '2021-09-22 17:47:11', NULL, NULL),
(6, 5, 2, 'SALADS', '', '5', '2021-09-22 17:47:32', NULL, NULL),
(7, 5, 2, 'SOUPS', '', '5', '2021-09-22 17:47:45', NULL, NULL),
(8, 5, 2, 'BURGERS & DOGS', '', '5', '2021-09-22 17:47:58', NULL, NULL),
(9, 5, 1, 'SIDES', '', '5', '2021-09-22 17:48:45', NULL, NULL),
(10, 5, 1, 'EGGS BENEDICT', '', '5', '2021-09-22 17:49:29', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `md_special_category`
--

CREATE TABLE `md_special_category` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_special_category`
--

INSERT INTO `md_special_category` (`id`, `name`) VALUES
(1, 'New year\'s Day'),
(2, 'Martin Luther King Day'),
(3, 'Valentine\'s Day'),
(4, 'President\'s Day'),
(5, 'St.Patrick\'s Day'),
(6, 'April Fool\'s Day'),
(7, 'Good Friday'),
(8, 'Easter'),
(9, 'Mother\'s Day'),
(10, 'Father\'s Day'),
(11, 'Memorial Day'),
(12, 'Independence Day'),
(13, 'Labor Day'),
(14, 'Columbus Day'),
(15, 'Daughter\'s Day'),
(16, 'Friendship Day'),
(17, 'Halloween'),
(18, 'Veterans Day'),
(19, 'Thanksgiving Day'),
(20, 'Christmas'),
(21, 'Friday Specials'),
(22, 'Taco Tuesday Specials'),
(23, 'Grand Feast');

-- --------------------------------------------------------

--
-- Table structure for table `md_time_zone`
--

CREATE TABLE `md_time_zone` (
  `id` int(11) NOT NULL,
  `time_zone` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_time_zone`
--

INSERT INTO `md_time_zone` (`id`, `time_zone`, `name`) VALUES
(1, '(GMT-12:00) International Date Line West', 'Etc/GMT+12'),
(2, '(GMT-11:00) Midway Island, Samoa', 'Pacific/Midway'),
(3, '(GMT-07:00) Arizona', 'US/Arizona'),
(4, '(GMT-06:00) Central America', 'America/Managua'),
(5, '(GMT-10:00) Hawaii', 'Pacific/Honolulu'),
(6, '(GMT-08:00) Tijuana, Baja California', 'America/Tijuana'),
(7, '(GMT-08:00) Pacific Time (US & Canada)', 'America/Los_Angeles'),
(8, '(GMT-07:00) Mountain Time (US & Canada)', 'US/Mountain'),
(9, '(GMT-09:00) Alaska', 'US/Alaska'),
(10, '(GMT-07:00) Chihuahua, La Paz, Mazatlan', 'America/Chihuahua'),
(11, '(GMT-06:00) Central Time (US & Canada)', 'US/Central'),
(12, '(GMT-06:00) Guadalajara, Mexico City, Monterrey', 'America/Mexico_City'),
(13, '(GMT-05:00) Indiana (East)', 'US/East-Indiana'),
(14, '(GMT-06:00) Saskatchewan', 'Canada/Saskatchewan'),
(15, '(GMT-05:00) Bogota, Lima, Quito, Rio Branco', 'America/Bogota'),
(16, '(GMT-05:00) Eastern Time (US & Canada)', 'US/Eastern'),
(17, '(GMT-04:00) Manaus', 'America/Manaus'),
(18, '(GMT-04:00) Santiago', 'America/Santiago'),
(19, '(GMT-03:30) Newfoundland', 'Canada/Newfoundland'),
(20, '(GMT-04:00) Atlantic Time (Canada)', 'Canada/Atlantic'),
(21, '(GMT-04:00) Caracas, La Paz', 'America/Caracas'),
(22, '(GMT-03:00) Greenland', 'America/Godthab'),
(23, '(GMT-03:00) Montevideo', 'America/Montevideo'),
(24, '(GMT-03:00) Brasilia', 'America/Sao_Paulo'),
(25, '(GMT-03:00) Buenos Aires, Georgetown', 'America/Argentina/Buenos_Aires'),
(26, '(GMT-02:00) Mid-Atlantic', 'America/Noronha'),
(27, '(GMT-01:00) Cape Verde Is.', 'Atlantic/Cape_Verde'),
(28, '(GMT+00:00) Casablanca, Monrovia, Reykjavik', 'Africa/Casablanca'),
(29, '(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London', 'Etc/Greenwich'),
(30, '(GMT-01:00) Azores', 'Atlantic/Azores'),
(31, '(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna', 'Europe/Amsterdam'),
(32, '(GMT+01:00) Brussels, Copenhagen, Madrid, Paris', 'Europe/Brussels'),
(33, '(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb', 'Europe/Sarajevo'),
(34, '(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague', 'Europe/Belgrade'),
(35, '(GMT+01:00) West Central Africa', 'Africa/Lagos'),
(36, '(GMT+02:00) Amman', 'Asia/Amman'),
(37, '(GMT+02:00) Athens, Bucharest, Istanbul', 'Europe/Athens'),
(38, '(GMT+02:00) Cairo', 'Africa/Cairo'),
(39, '(GMT+02:00) Harare, Pretoria', 'Africa/Harare'),
(40, '(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius', 'Europe/Helsinki'),
(41, '(GMT+02:00) Beirut', 'Asia/Beirut'),
(42, '(GMT+02:00) Jerusalem', 'Asia/Jerusalem'),
(43, '(GMT+02:00) Minsk', 'Europe/Minsk'),
(44, '(GMT+02:00) Windhoek', 'Africa/Windhoek'),
(45, '(GMT+03:00) Kuwait, Riyadh, Baghdad', 'Asia/Kuwait'),
(46, '(GMT+03:00) Moscow, St. Petersburg, Volgograd', 'Europe/Moscow'),
(47, '(GMT+03:00) Tbilisi', 'Asia/Tbilisi'),
(48, '(GMT+04:00) Abu Dhabi, Muscat', 'Asia/Muscat'),
(49, '(GMT+04:00) Baku', 'Asia/Baku'),
(50, '(GMT+03:00) Nairobi', 'Africa/Nairobi'),
(51, '(GMT+03:30) Tehran', 'Asia/Tehran'),
(52, '(GMT+04:30) Kabul', 'Asia/Kabul'),
(53, '(GMT+05:00) Yekaterinburg', 'Asia/Yekaterinburg'),
(54, '(GMT+05:00) Islamabad, Karachi, Tashkent', 'Asia/Karachi'),
(55, '(GMT+04:00) Yerevan', 'Asia/Yerevan'),
(56, '(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi', 'Asia/Calcutta'),
(57, '(GMT+05:30) Sri Jayawardenapura', 'Asia/Calcutta'),
(58, '(GMT+06:00) Almaty, Novosibirsk', 'Asia/Almaty'),
(59, '(GMT+06:00) Astana, Dhaka', 'Asia/Dhaka'),
(60, '(GMT+06:30) Yangon (Rangoon)', 'Asia/Rangoon'),
(61, '(GMT+05:45) Kathmandu', 'Asia/Katmandu'),
(62, '(GMT+07:00) Krasnoyarsk', 'Asia/Krasnoyarsk'),
(63, '(GMT+08:00) Kuala Lumpur, Singapore', 'Asia/Kuala_Lumpur'),
(64, '(GMT+07:00) Bangkok, Hanoi, Jakarta', 'Asia/Bangkok'),
(65, '(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi', 'Asia/Hong_Kong'),
(66, '(GMT+08:00) Irkutsk, Ulaan Bataar', 'Asia/Irkutsk'),
(67, '(GMT+08:00) Perth', 'Australia/Perth'),
(68, '(GMT+09:00) Osaka, Sapporo, Tokyo', 'Asia/Tokyo'),
(69, '(GMT+09:00) Seoul', 'Asia/Seoul'),
(70, '(GMT+09:00) Yakutsk', 'Asia/Yakutsk'),
(71, '(GMT+08:00) Taipei', 'Asia/Taipei'),
(72, '(GMT+10:00) Brisbane', 'Australia/Brisbane'),
(73, '(GMT+09:30) Darwin', 'Australia/Darwin'),
(74, '(GMT+09:30) Adelaide', 'Australia/Adelaide'),
(75, '(GMT+10:00) Hobart', 'Australia/Hobart'),
(76, '(GMT+10:00) Canberra, Melbourne, Sydney', 'Australia/Canberra'),
(77, '(GMT+10:00) Guam, Port Moresby', 'Pacific/Guam'),
(78, '(GMT+12:00) Fiji, Kamchatka, Marshall Is.', 'Pacific/Fiji'),
(79, '(GMT+10:00) Vladivostok', 'Asia/Vladivostok'),
(80, '(GMT+11:00) Magadan, Solomon Is., New Caledonia', 'Asia/Magadan'),
(81, '(GMT+12:00) Auckland, Wellington', 'Pacific/Auckland'),
(82, '(GMT+13:00) Nuku\'alofa', 'Pacific/Tongatapu');

-- --------------------------------------------------------

--
-- Table structure for table `md_url`
--

CREATE TABLE `md_url` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `url` varchar(100) DEFAULT NULL,
  `image` varchar(50) DEFAULT NULL,
  `approval_flag` enum('U','A','S') NOT NULL DEFAULT 'U',
  `approved_by` varchar(50) DEFAULT NULL,
  `approved_date` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `md_url`
--

INSERT INTO `md_url` (`id`, `restaurant_id`, `url`, `image`, `approval_flag`, `approved_by`, `approved_date`) VALUES
(1, 5, 'http://localhost:4200/menu/Abar_Khabo/NQ==', 'qr.png', 'S', NULL, NULL),
(2, 7, 'https://shoplocal-lagunabeach.com/#/menu/Panjabee_Rasui/Nw==', '7_qr.png', 'S', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_about`
--

CREATE TABLE `td_about` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `about_us` text NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_about`
--

INSERT INTO `td_about` (`id`, `restaurant_id`, `about_us`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 10, '          sdasdasdassssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss', '10', '2021-09-18 21:42:38', NULL, NULL),
(2, 10, '          sgrsfkhkpougyhvbnmluytrdfioprdfghjkxcvbnm,mvckl;uytrtyuiolkjnbn;uflkjvvbnm,iuhgbnm,', '10', '2021-09-18 21:51:25', NULL, NULL),
(3, 10, '          sdfgyuiopoiuytredfgl;lkvcxcvbnm,.iuytrdcvbnjuytfvbnm', '10', '2021-09-18 21:52:05', NULL, NULL),
(4, 5, 'ABCD', '10', '2021-09-18 21:56:42', '5', '2021-09-20 15:46:26'),
(5, 10, '          grsfsgt', '10', '2021-09-18 22:01:08', NULL, NULL),
(6, 10, '          qwertyuiopoijuhgfdsdfghjkl;lkjhgfcxzxcvbnm,mnbvcxcv', '10', '2021-09-18 22:06:01', NULL, NULL),
(7, 7, 'sdasd', '7', '2021-09-28 15:34:11', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_contacts`
--

CREATE TABLE `td_contacts` (
  `id` bigint(22) NOT NULL,
  `contact_date` datetime NOT NULL,
  `restaurant_name` varchar(100) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `phone_no` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `addr_line1` varchar(100) NOT NULL,
  `addr_line2` varchar(100) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `zip` int(11) NOT NULL,
  `country` varchar(50) NOT NULL,
  `time_zone` varchar(100) NOT NULL,
  `website` varchar(50) DEFAULT NULL,
  `active_user` enum('Y','N') DEFAULT 'N',
  `created_by` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_contacts`
--

INSERT INTO `td_contacts` (`id`, `contact_date`, `restaurant_name`, `contact_name`, `phone_no`, `email`, `addr_line1`, `addr_line2`, `city`, `zip`, `country`, `time_zone`, `website`, `active_user`, `created_by`, `created_at`, `modified_by`, `modified_dt`) VALUES
(1, '2021-09-17 14:24:19', 'asdad', 'asdasdasd', '2345464567', 'goku@gail.com', 'asdasdads', 'asdasd', 'asdasd', 2147483647, 'Australia', '', '', 'N', 'goku@gail.com', '2021-09-17 14:24:19', NULL, NULL),
(2, '2021-09-17 14:34:15', 'Panjabee Rasui', 'Nilkntha Das', '9831887194', 'nilkantha@panjabee.com', 'Rajdanga', NULL, 'Kolkata', 700101, 'India', '', 'www.panjabee.com', 'N', 'nilkantha@panjabee.com', '2021-09-17 14:34:15', NULL, NULL),
(3, '2021-09-17 15:57:14', 'Panjabee Rasui', 'Nilkntha Das', '434444', 'nilkadddntha@panjabee.com', 'asdasdads', NULL, 'Kolkata', 2147483647, 'Australia', '', '', 'N', 'nilkadddntha@panjabee.com', '2021-09-17 15:57:14', NULL, NULL),
(4, '2021-09-20 10:17:15', 'Hill Restaurant', '1234567890', '1234567890', 'ses@gmail.com', 'afdfghj', 'asdfghj', 'asdfg', 123456, 'Albania', '', '', 'N', 'ses@gmail.com', '2021-09-20 10:17:15', NULL, NULL),
(5, '2021-09-20 11:00:49', 'Abar Khabo', 'Subham Samanta', '123456789', 'samantasubham@gmail.com', 'afdfghj', 'asdfghj', 'asdfg', 123456, 'India', '', '', 'N', 'samantasubham@gmail.com', '2021-09-20 11:00:49', NULL, NULL),
(6, '2021-09-20 11:21:26', 'Hill Restaurant', 'Subham Samanta', '1234567890', 'sumanmitra0096@gmail.com', 'afdfghj', 'asdfghj', 'asdfg', 123456, 'Indonesia', '', '', 'N', 'sumanmitra0096@gmail.com', '2021-09-20 11:21:26', NULL, NULL),
(7, '2021-09-28 15:24:50', 'Panjabee Rasui', 'Subham Samanta', '9051203188', 'subham@synergicsoftek.in', '29/12 Shambhunath das lane', 'asdasd', 'Kolkata', 700050, '2', '', 'www.panjabee.com', 'N', 'subham@synergicsoftek.in', '2021-09-28 15:24:50', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_date_time`
--

CREATE TABLE `td_date_time` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `active_flag` enum('Y','N') NOT NULL DEFAULT 'N',
  `month_day` int(11) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_date_time`
--

INSERT INTO `td_date_time` (`id`, `restaurant_id`, `menu_id`, `active_flag`, `month_day`, `start_time`, `end_time`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 10, 1, 'Y', 2, '08:00:00', '10:00:00', '10', '2021-09-18 20:05:57', NULL, NULL),
(2, 10, 1, 'Y', 7, '08:00:00', '10:00:00', '10', '2021-09-18 20:05:57', NULL, NULL),
(3, 10, 1, 'Y', 5, '08:00:00', '10:00:00', '10', '2021-09-18 20:05:57', NULL, NULL),
(4, 10, 1, 'Y', 3, '08:00:00', '10:00:00', '10', '2021-09-18 20:05:57', NULL, NULL),
(5, 10, 1, 'Y', 8, '08:00:00', '10:00:00', '10', '2021-09-18 20:05:57', NULL, NULL),
(6, 10, 1, 'Y', 2, '08:00:00', '10:00:00', '10', '2021-09-18 22:16:07', NULL, NULL),
(7, 10, 1, 'Y', 3, '08:00:00', '10:00:00', '10', '2021-09-18 22:16:07', NULL, NULL),
(8, 10, 1, 'Y', 4, '08:00:00', '10:00:00', '10', '2021-09-18 22:16:07', NULL, NULL),
(9, 10, 1, 'Y', 7, '08:00:00', '10:00:00', '10', '2021-09-18 22:16:07', NULL, NULL),
(10, 10, 1, 'Y', 6, '08:00:00', '10:00:00', '10', '2021-09-18 22:16:07', NULL, NULL),
(11, 10, 1, 'Y', 5, '08:00:00', '10:00:00', '10', '2021-09-18 22:16:07', NULL, NULL),
(12, 10, 1, 'Y', 8, '08:00:00', '10:00:00', '10', '2021-09-18 22:16:07', NULL, NULL),
(13, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-18 22:26:43', NULL, NULL),
(14, 10, 1, 'Y', 7, '08:00:00', '11:00:00', '10', '2021-09-18 22:26:43', NULL, NULL),
(15, 10, 1, 'Y', 5, '08:00:00', '11:00:00', '10', '2021-09-18 22:26:43', NULL, NULL),
(16, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-18 22:26:43', NULL, NULL),
(17, 10, 1, 'Y', 2, '08:00:00', '11:00:00', '10', '2021-09-18 22:26:43', NULL, NULL),
(18, 10, 1, 'Y', 2, '08:00:00', '11:00:00', '10', '2021-09-18 22:31:00', NULL, NULL),
(19, 10, 1, 'Y', 8, '08:00:00', '11:00:00', '10', '2021-09-18 22:31:00', NULL, NULL),
(20, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-18 22:31:00', NULL, NULL),
(21, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-18 22:31:00', NULL, NULL),
(22, 10, 1, 'Y', 8, '08:00:00', '11:00:00', '10', '2021-09-18 22:34:14', NULL, NULL),
(23, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-18 22:34:14', NULL, NULL),
(24, 10, 1, 'Y', 5, '08:00:00', '11:00:00', '10', '2021-09-18 22:34:14', NULL, NULL),
(25, 10, 1, 'Y', 3, '08:00:00', '11:00:00', '10', '2021-09-18 22:34:14', NULL, NULL),
(26, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-18 22:35:48', NULL, NULL),
(27, 10, 1, 'Y', 5, '08:00:00', '11:00:00', '10', '2021-09-18 22:35:48', NULL, NULL),
(28, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-18 22:35:48', NULL, NULL),
(29, 10, 1, 'Y', 2, '08:00:00', '11:00:00', '10', '2021-09-18 22:35:48', NULL, NULL),
(30, 10, 1, 'Y', 8, '08:00:00', '11:00:00', '10', '2021-09-18 22:39:36', NULL, NULL),
(31, 10, 1, 'Y', 7, '08:00:00', '11:00:00', '10', '2021-09-18 22:39:36', NULL, NULL),
(32, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-18 22:39:36', NULL, NULL),
(33, 10, 1, 'Y', 5, '08:00:00', '11:00:00', '10', '2021-09-18 22:39:36', NULL, NULL),
(34, 10, 1, 'Y', 2, '08:00:00', '11:00:00', '10', '2021-09-18 22:39:36', NULL, NULL),
(35, 10, 1, 'Y', 8, '08:00:00', '11:00:00', '10', '2021-09-19 00:01:03', NULL, NULL),
(36, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-19 00:01:03', NULL, NULL),
(37, 10, 1, 'Y', 2, '08:00:00', '11:00:00', '10', '2021-09-19 00:01:03', NULL, NULL),
(38, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-19 00:01:03', NULL, NULL),
(39, 10, 2, 'Y', 2, '00:00:00', '00:00:00', '10', '2021-09-19 00:04:44', NULL, NULL),
(40, 10, 2, 'Y', 8, '00:00:00', '00:00:00', '10', '2021-09-19 00:04:44', NULL, NULL),
(41, 10, 2, 'Y', 3, '00:00:00', '00:00:00', '10', '2021-09-19 00:04:44', NULL, NULL),
(42, 10, 2, 'Y', 5, '00:00:00', '00:00:00', '10', '2021-09-19 00:04:44', NULL, NULL),
(43, 10, 2, 'Y', 8, '00:00:00', '00:00:00', '10', '2021-09-19 00:07:08', NULL, NULL),
(44, 10, 2, 'Y', 3, '00:00:00', '00:00:00', '10', '2021-09-19 00:07:08', NULL, NULL),
(45, 10, 2, 'Y', 5, '00:00:00', '00:00:00', '10', '2021-09-19 00:07:08', NULL, NULL),
(46, 10, 2, 'Y', 2, '00:00:00', '00:00:00', '10', '2021-09-19 00:07:08', NULL, NULL),
(47, 10, 3, 'N', 6, '00:00:00', '00:01:23', '10', '2021-09-19 00:08:28', NULL, NULL),
(48, 10, 3, 'N', 4, '00:00:00', '00:01:23', '10', '2021-09-19 00:08:28', NULL, NULL),
(49, 10, 3, 'N', 2, '00:00:00', '00:01:23', '10', '2021-09-19 00:08:28', NULL, NULL),
(50, 10, 3, 'N', 8, '00:00:00', '00:01:23', '10', '2021-09-19 00:08:28', NULL, NULL),
(51, 10, 3, 'N', 7, '00:00:00', '00:01:23', '10', '2021-09-19 00:08:28', NULL, NULL),
(52, 10, 1, 'Y', 2, '08:00:00', '11:00:00', '10', '2021-09-19 09:27:06', NULL, NULL),
(53, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-19 09:27:06', NULL, NULL),
(54, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-19 09:27:06', NULL, NULL),
(55, 10, 1, 'Y', 2, '08:00:00', '12:00:00', '10', '2021-09-19 09:31:15', NULL, NULL),
(56, 10, 1, 'Y', 4, '08:00:00', '12:00:00', '10', '2021-09-19 09:31:15', NULL, NULL),
(57, 10, 1, 'Y', 6, '08:00:00', '12:00:00', '10', '2021-09-19 09:31:15', NULL, NULL),
(58, 10, 1, 'Y', 2, '08:00:00', '10:00:00', '10', '2021-09-19 09:32:11', NULL, NULL),
(59, 10, 1, 'Y', 4, '08:00:00', '10:00:00', '10', '2021-09-19 09:32:11', NULL, NULL),
(60, 10, 1, 'Y', 6, '08:00:00', '10:00:00', '10', '2021-09-19 09:32:11', NULL, NULL),
(61, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-19 09:33:23', NULL, NULL),
(62, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-19 09:33:23', NULL, NULL),
(63, 10, 1, 'Y', 3, '08:00:00', '11:00:00', '10', '2021-09-19 09:33:23', NULL, NULL),
(64, 10, 1, 'Y', 3, '08:00:00', '11:00:00', '10', '2021-09-19 09:36:21', NULL, NULL),
(65, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-19 09:36:21', NULL, NULL),
(66, 10, 1, 'Y', 5, '08:00:00', '11:00:00', '10', '2021-09-19 09:36:21', NULL, NULL),
(67, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-19 09:36:21', NULL, NULL),
(68, 10, 1, 'Y', 5, '08:00:00', '11:00:00', '10', '2021-09-19 09:41:23', NULL, NULL),
(69, 10, 1, 'Y', 6, '08:00:00', '11:00:00', '10', '2021-09-19 09:41:23', NULL, NULL),
(70, 10, 1, 'Y', 4, '08:00:00', '11:00:00', '10', '2021-09-19 09:41:23', NULL, NULL),
(71, 10, 1, 'Y', 6, '08:00:00', '10:00:00', '10', '2021-09-19 09:44:33', NULL, NULL),
(72, 10, 1, 'Y', 2, '08:00:00', '10:00:00', '10', '2021-09-19 09:44:33', NULL, NULL),
(73, 10, 1, 'Y', 4, '08:00:00', '10:00:00', '10', '2021-09-19 09:44:33', NULL, NULL),
(74, 10, 1, 'Y', 3, '08:00:00', '10:00:00', '10', '2021-09-19 09:44:33', NULL, NULL),
(75, 10, 1, 'N', 2, '08:00:00', '12:00:00', '10', '2021-09-19 14:29:43', NULL, NULL),
(76, 10, 1, 'N', 5, '08:00:00', '12:00:00', '10', '2021-09-19 14:29:43', NULL, NULL),
(77, 10, 1, 'N', 3, '08:00:00', '12:00:00', '10', '2021-09-19 14:29:43', NULL, NULL),
(78, 10, 1, 'Y', 3, '08:00:00', '12:00:00', '10', '2021-09-19 14:30:30', NULL, NULL),
(79, 10, 1, 'Y', 4, '08:00:00', '12:00:00', '10', '2021-09-19 14:30:30', NULL, NULL),
(80, 10, 1, 'Y', 5, '08:00:00', '12:00:00', '10', '2021-09-19 14:30:30', NULL, NULL),
(81, 10, 2, 'Y', 7, '00:00:00', '00:00:00', '10', '2021-09-19 14:33:39', NULL, NULL),
(82, 10, 2, 'Y', 3, '00:00:00', '00:00:00', '10', '2021-09-19 14:33:39', NULL, NULL),
(83, 10, 2, 'Y', 5, '00:00:00', '00:00:00', '10', '2021-09-19 14:33:39', NULL, NULL),
(84, 10, 1, 'Y', 2, '08:00:00', '11:00:00', '10', '2021-09-19 14:36:59', NULL, NULL),
(85, 5, 4, 'Y', 3, '08:00:00', '11:00:00', '10', '2021-09-19 14:36:59', NULL, NULL),
(86, 5, 4, 'Y', 1, '08:00:00', '11:00:00', '10', '2021-09-19 14:36:59', NULL, NULL),
(87, 5, 4, 'Y', 7, '08:00:00', '11:00:00', '10', '2021-09-19 14:36:59', NULL, NULL),
(88, 5, 2, 'Y', 7, '00:01:23', '00:00:00', '10', '2021-09-19 14:38:32', NULL, NULL),
(89, 5, 2, 'Y', 5, '00:01:23', '00:00:00', '10', '2021-09-19 14:38:32', NULL, NULL),
(91, 5, 2, 'Y', 2, '00:01:23', '00:00:00', '10', '2021-09-19 14:38:32', NULL, NULL),
(92, 5, 3, 'Y', 6, '00:00:00', '00:00:00', '10', '2021-09-19 14:39:22', NULL, NULL),
(93, 5, 3, 'Y', 2, '00:00:00', '00:00:00', '10', '2021-09-19 14:39:22', NULL, NULL),
(94, 5, 3, 'Y', 4, '00:00:00', '00:00:00', '10', '2021-09-19 14:39:22', NULL, NULL),
(95, 5, 1, 'Y', 2, '12:00:00', '08:00:00', '5', '2021-09-20 11:47:12', NULL, NULL),
(96, 5, 1, 'Y', 4, '12:00:00', '08:00:00', '5', '2021-09-20 11:47:12', NULL, NULL),
(97, 5, 1, 'Y', 6, '12:00:00', '08:00:00', '5', '2021-09-20 11:47:12', NULL, NULL),
(98, 7, 1, 'Y', 6, '16:26:00', '17:27:00', '7', '2021-09-28 15:27:22', NULL, NULL),
(99, 7, 1, 'Y', 5, '16:26:00', '17:27:00', '7', '2021-09-28 15:27:22', NULL, NULL),
(100, 7, 1, 'Y', 3, '16:26:00', '17:27:00', '7', '2021-09-28 15:27:22', NULL, NULL),
(101, 7, 1, 'Y', 4, '16:26:00', '17:27:00', '7', '2021-09-28 15:27:22', NULL, NULL),
(102, 7, 1, 'Y', 7, '16:26:00', '17:27:00', '7', '2021-09-28 15:27:22', NULL, NULL),
(103, 7, 1, 'Y', 2, '16:26:00', '17:27:00', '7', '2021-09-28 15:27:22', NULL, NULL),
(104, 7, 1, 'Y', 8, '16:26:00', '17:27:00', '7', '2021-09-28 15:27:22', NULL, NULL),
(105, 7, 2, 'Y', 4, '15:31:00', '16:31:00', '7', '2021-09-28 15:31:55', NULL, NULL),
(106, 7, 2, 'Y', 6, '15:31:00', '16:31:00', '7', '2021-09-28 15:31:55', NULL, NULL),
(107, 7, 2, 'Y', 2, '15:31:00', '16:31:00', '7', '2021-09-28 15:31:55', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_logo`
--

CREATE TABLE `td_logo` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `logo_url` varchar(50) NOT NULL,
  `logo_path` varchar(100) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_logo`
--

INSERT INTO `td_logo` (`id`, `restaurant_id`, `logo_url`, `logo_path`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(4, 10, 'figma.com', '', '10', '2021-09-18 20:38:50', NULL, NULL),
(5, 10, 'figma.com', '', '10', '2021-09-18 20:44:32', NULL, NULL),
(6, 10, '123.com', '', '10', '2021-09-18 20:44:48', NULL, NULL),
(7, 10, '123.com', '', '10', '2021-09-18 20:46:27', NULL, NULL),
(8, 10, 'figma.com', '', '10', '2021-09-18 22:13:34', NULL, NULL),
(9, 5, '123.com', '', '10', '2021-09-18 22:14:20', NULL, NULL),
(10, 7, 'logo', '7_logo_innitial.PNG', '7', '2021-09-28 15:34:06', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_menu_image`
--

CREATE TABLE `td_menu_image` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `active_flag` enum('Y','N') NOT NULL DEFAULT 'N',
  `menu_url` varchar(50) NOT NULL,
  `menu_img` varchar(50) NOT NULL,
  `created_by` varchar(50) NOT NULL,
  `created_dt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_menu_image`
--

INSERT INTO `td_menu_image` (`id`, `restaurant_id`, `menu_id`, `active_flag`, `menu_url`, `menu_img`, `created_by`, `created_dt`) VALUES
(1, 10, 1, 'Y', 'sadasas.com', '', '10', '2021-09-18 18:10:58'),
(2, 10, 1, 'Y', 'sadasas.com', '', '10', '2021-09-18 18:12:08'),
(3, 10, 2, 'Y', '456.com', '', '10', '2021-09-18 18:30:53'),
(4, 10, 3, 'Y', 'menudinner.com', '', '10', '2021-09-18 18:40:36'),
(5, 10, 4, 'Y', 'sadasas.com', '', '10', '2021-09-18 18:41:59'),
(6, 10, 4, 'Y', '123.com', '', '10', '2021-09-18 18:44:34'),
(7, 10, 1, 'N', 'main.com', '', '10', '2021-09-18 19:51:15'),
(8, 10, 1, 'Y', 'figma.com', '', '10', '2021-09-18 19:58:15'),
(9, 10, 1, 'Y', 'figma.com', '', '10', '2021-09-18 20:05:57'),
(10, 10, 1, 'Y', '123.com', '', '10', '2021-09-18 22:16:07'),
(11, 10, 2, 'Y', 'sadasas.com', '', '10', '2021-09-18 22:17:07'),
(12, 10, 1, 'Y', 'sadasas.com', '', '10', '2021-09-18 22:26:43'),
(13, 10, 1, 'Y', 'Angular.com', '', '10', '2021-09-18 22:31:00'),
(14, 10, 1, 'Y', 'sadasas.com', '', '10', '2021-09-18 22:34:14'),
(15, 10, 1, 'Y', 'asd', '', '10', '2021-09-18 22:35:48'),
(16, 10, 1, 'Y', 'trykj', '', '10', '2021-09-18 22:39:36'),
(17, 10, 1, 'Y', 'sadasas.com', '', '10', '2021-09-19 00:01:03'),
(18, 10, 2, 'Y', 'Asana.com', '', '10', '2021-09-19 00:04:44'),
(19, 10, 2, 'Y', 'Asana.com', '', '10', '2021-09-19 00:07:08'),
(20, 10, 3, 'N', '123.com', '', '10', '2021-09-19 00:08:28'),
(21, 10, 1, 'Y', 'asdsadasd.com', '', '10', '2021-09-19 09:27:06'),
(22, 10, 1, 'Y', 'asdsadas', '', '10', '2021-09-19 09:31:15'),
(23, 10, 1, 'Y', 'figma.com', '', '10', '2021-09-19 09:32:11'),
(24, 10, 1, 'Y', '123.com', '', '10', '2021-09-19 09:33:23'),
(25, 10, 1, 'Y', 'figma.com', '', '10', '2021-09-19 09:36:21'),
(26, 10, 1, 'Y', 'biriyani.com', '', '10', '2021-09-19 09:41:23'),
(27, 10, 1, 'Y', 'sadasdas.com', '', '10', '2021-09-19 09:44:33'),
(28, 10, 1, 'N', 'sadasas.com', '', '10', '2021-09-19 14:29:43'),
(29, 10, 1, 'Y', 'sadasas.com', '', '10', '2021-09-19 14:30:30'),
(30, 10, 2, 'Y', '123.com', '', '10', '2021-09-19 14:33:39'),
(31, 10, 1, 'Y', 'menu.com', '', '10', '2021-09-19 14:36:59'),
(32, 10, 2, 'Y', 'asdsadasd', '', '10', '2021-09-19 14:38:32'),
(33, 10, 3, 'Y', 'figma.com', '', '10', '2021-09-19 14:39:22'),
(34, 5, 1, 'Y', 'sadasas.com', '', '5', '2021-09-20 11:47:12'),
(35, 7, 1, 'Y', 'break_menu', '7_1_menu_2_step_4.PNG', '7', '2021-09-28 15:27:22'),
(36, 7, 1, 'Y', 'break_menu', '7_1_menu_1_step_3.PNG', '7', '2021-09-28 15:27:22'),
(37, 7, 1, 'Y', 'break_menu', '7_1_menu_3_step_5.PNG', '7', '2021-09-28 15:27:22'),
(38, 7, 2, 'Y', 'lun_menu_img', '7_2_menu_3_step_5.PNG', '7', '2021-09-28 15:31:55'),
(39, 7, 2, 'Y', 'lun_menu_img', '7_2_menu_1_step_3.PNG', '7', '2021-09-28 15:31:55'),
(40, 7, 2, 'Y', 'lun_menu_img', '7_2_menu_2_step_4.PNG', '7', '2021-09-28 15:31:55');

-- --------------------------------------------------------

--
-- Table structure for table `td_menu_notice`
--

CREATE TABLE `td_menu_notice` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `notice_flag` enum('Y','N') NOT NULL DEFAULT 'N',
  `position_id` int(11) NOT NULL,
  `header_title` varchar(50) NOT NULL,
  `font_color` varchar(50) NOT NULL,
  `back_color` varchar(50) NOT NULL,
  `notice_content` text NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_menu_notice`
--

INSERT INTO `td_menu_notice` (`id`, `restaurant_id`, `menu_id`, `notice_flag`, `position_id`, `header_title`, `font_color`, `back_color`, `notice_content`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 5, 1, 'Y', 3, 'Capchino', '#754848', '#5a362a', 'Notice content', '10', '2021-09-18 21:52:44', '5', '2021-09-20 19:12:54'),
(2, 10, 2, 'N', 2, 'Khasta Biscut', '#c84141', '#ff7b00', 'kochuri', '10', '2021-09-18 21:57:25', NULL, NULL),
(3, 10, 3, 'Y', 3, 'gfdrf', '#e90707', '#1e0f80', 'qwertyuioplkjhgfdszxcvbnm', '10', '2021-09-18 22:06:31', NULL, NULL),
(4, 7, 1, 'Y', 1, 'asdasd', '#dc1e1e', '#a79595', 'dasdasdasdasdasdasdas', '7', '2021-09-28 15:34:39', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_menu_request`
--

CREATE TABLE `td_menu_request` (
  `id` bigint(22) NOT NULL,
  `entry_date` date NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` bigint(22) NOT NULL,
  `cover_page_img` varchar(100) NOT NULL,
  `cover_page_url` varchar(100) NOT NULL,
  `top_image_img` varchar(100) NOT NULL,
  `top_img_url` varchar(100) NOT NULL,
  `section_img` varchar(100) NOT NULL,
  `section_img_url` varchar(100) NOT NULL,
  `menu_img` varchar(100) NOT NULL,
  `menu_url` varchar(100) NOT NULL,
  `logo_img` varchar(100) NOT NULL,
  `logo_url` varchar(100) NOT NULL,
  `menu_days` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `td_order_items`
--

CREATE TABLE `td_order_items` (
  `id` bigint(22) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `package_id` int(11) NOT NULL,
  `birth_calendar_flag` enum('Y','N') NOT NULL DEFAULT 'Y',
  `event_calendar` enum('Y','N') NOT NULL DEFAULT 'Y',
  `table_top_6` int(11) NOT NULL,
  `table_top_7` int(11) NOT NULL,
  `table_top_8` int(11) NOT NULL,
  `window_cling_9` int(11) NOT NULL,
  `payment_flag` enum('Y','N') NOT NULL DEFAULT 'N',
  `created_by` varchar(50) DEFAULT NULL COMMENT 'restaurant email id',
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_order_items`
--

INSERT INTO `td_order_items` (`id`, `restaurant_id`, `package_id`, `birth_calendar_flag`, `event_calendar`, `table_top_6`, `table_top_7`, `table_top_8`, `window_cling_9`, `payment_flag`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 5, 1, 'Y', 'Y', 1, 2, 3, 4, 'Y', 'samantasubham@gmail.com', '2021-09-20 11:04:09', NULL, NULL),
(2, 16, 1, 'Y', 'N', 0, 0, 0, 0, 'N', 'abcd555@gmail.com7', '2021-09-16 13:00:51', NULL, NULL),
(3, 1, 1, 'Y', 'Y', 0, 0, 0, 0, 'Y', 'goku@gail.com', '2021-09-17 14:25:02', NULL, NULL),
(4, 2, 2, 'Y', 'Y', 0, 0, 0, 0, 'Y', 'nilkantha@panjabee.com', '2021-09-17 14:35:00', NULL, NULL),
(5, 3, 1, 'Y', 'Y', 1, 2, 3, 4, 'N', 'nilkadddntha@panjabee.com', '2021-09-17 16:03:15', NULL, NULL),
(6, 4, 1, 'Y', 'Y', 1, 2, 3, 4, 'Y', 'ses@gmail.com', '2021-09-20 10:17:55', NULL, NULL),
(7, 7, 2, 'Y', 'Y', 0, 5, 0, 0, 'Y', 'subham@synergicsoftek.in', '2021-09-28 15:25:04', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_other_image`
--

CREATE TABLE `td_other_image` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` bigint(22) NOT NULL,
  `active_flag` enum('Y','N') NOT NULL DEFAULT 'N',
  `cover_page_img` varchar(50) NOT NULL,
  `cover_page_url` varchar(100) NOT NULL,
  `top_image_img` varchar(50) NOT NULL,
  `top_img_url` varchar(100) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_other_image`
--

INSERT INTO `td_other_image` (`id`, `restaurant_id`, `menu_id`, `active_flag`, `cover_page_img`, `cover_page_url`, `top_image_img`, `top_img_url`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 10, 1, 'Y', '', 'figma.com', '', 'Angular.com', '10', '2021-09-18 18:12:08', NULL, NULL),
(2, 10, 2, 'Y', '', 'figma.com', '', '123.com', '10', '2021-09-18 18:30:53', NULL, NULL),
(3, 10, 3, 'Y', '', 'dinner.com', '', 'topdinner.com', '10', '2021-09-18 18:40:36', NULL, NULL),
(4, 10, 4, 'Y', '', 'sdfsadas,.com', '', 'figma.com', '10', '2021-09-18 18:41:59', NULL, NULL),
(5, 10, 4, 'Y', '', 'Angular.com', '', 'sadasas.com', '10', '2021-09-18 18:44:34', NULL, NULL),
(6, 10, 1, 'N', '', 'google.com', '', 'asana.com', '10', '2021-09-18 19:51:15', NULL, NULL),
(7, 10, 1, 'Y', '', '123.com', '', 'asdsadasd.com', '10', '2021-09-18 19:58:15', NULL, NULL),
(8, 10, 1, 'Y', '', '123.com', '', 'asdsadasd.com', '10', '2021-09-18 20:05:57', NULL, NULL),
(9, 10, 1, 'Y', '', 'figma.com', '', 'Angular.com', '10', '2021-09-18 22:16:07', NULL, NULL),
(10, 10, 2, 'Y', '', '123.com', '', 'asdsadasd.com', '10', '2021-09-18 22:17:07', NULL, NULL),
(11, 10, 1, 'Y', '', 'Angular.com', '', 'asdsadasd.com', '10', '2021-09-18 22:26:43', NULL, NULL),
(12, 10, 1, 'Y', '', 'sadasd.com', '', 'sadasas.com', '10', '2021-09-18 22:31:00', NULL, NULL),
(13, 10, 1, 'Y', '', 'Angular.com', '', 'asdsadasd.com', '10', '2021-09-18 22:34:14', NULL, NULL),
(14, 10, 1, 'Y', '', 'das', '', 'asda', '10', '2021-09-18 22:35:48', NULL, NULL),
(15, 10, 1, 'Y', '', 'qwe', '', 'wete', '10', '2021-09-18 22:39:36', NULL, NULL),
(16, 10, 1, 'Y', '', 'Angular.com', '', 'asdsadasd.com', '10', '2021-09-19 00:01:03', NULL, NULL),
(17, 10, 2, 'Y', '', 'figma.com', '', 'Angular.com', '10', '2021-09-19 00:04:44', NULL, NULL),
(18, 10, 2, 'Y', '', 'figma.com', '', 'Angular.com', '10', '2021-09-19 00:07:08', NULL, NULL),
(19, 10, 3, 'N', '', 'sadasas.com', '', 'asdsadasd.com', '10', '2021-09-19 00:08:28', NULL, NULL),
(20, 10, 1, 'Y', '', '123.com', '', 'Angular.com', '10', '2021-09-19 09:27:06', NULL, NULL),
(21, 10, 1, 'Y', '', 'sadsadasd', '', 'sadasdasd', '10', '2021-09-19 09:31:15', NULL, NULL),
(22, 10, 1, 'Y', '', 'asdsadasd.com', '', '123.com', '10', '2021-09-19 09:32:11', NULL, NULL),
(23, 10, 1, 'Y', '', 'Angular.com', '', 'asdsadasd.com', '10', '2021-09-19 09:33:23', NULL, NULL),
(24, 10, 1, 'Y', '', 'Angular.com', '', '123.com', '10', '2021-09-19 09:36:21', NULL, NULL),
(25, 10, 1, 'Y', '', 'chicken.com', '', 'mutton.com', '10', '2021-09-19 09:41:23', NULL, NULL),
(26, 10, 1, 'Y', '', 'figma.com', '', '123.com', '10', '2021-09-19 09:44:33', NULL, NULL),
(27, 10, 1, 'N', '', 'figma.com', '', '123.com', '10', '2021-09-19 14:29:43', NULL, NULL),
(28, 10, 1, 'Y', '', 'figma.com', '', '123.com', '10', '2021-09-19 14:30:30', NULL, NULL),
(29, 10, 2, 'Y', '', 'Angular.com', '', 'sadasas.com', '10', '2021-09-19 14:33:39', NULL, NULL),
(30, 10, 1, 'Y', '', 'CHICKEN.COM', '', 'TOPBREAKFAST.COM', '10', '2021-09-19 14:36:59', NULL, NULL),
(31, 10, 2, 'Y', '', '123.com', '', 'sadasas.com', '10', '2021-09-19 14:38:32', NULL, NULL),
(32, 10, 3, 'Y', '', '123.com', '', 'asdsadasd.com', '10', '2021-09-19 14:39:22', NULL, NULL),
(33, 5, 1, 'Y', '5_undefined_cover_8d5c585f8c6354e595851cfdcc03b29a', 'figma.com', '', 'Angular.com', '5', '2021-09-20 11:47:12', NULL, NULL),
(34, 5, 2, 'Y', '', 'lun.com', '', 'Angular_lun.com', '5', '2021-09-20 11:47:12', NULL, NULL),
(35, 5, 3, 'Y', '', 'dinn.com', '', 'Angular_dinn.com', '5', '2021-09-20 11:47:12', NULL, NULL),
(36, 5, 4, 'Y', '', 'brunch.com', '', 'Angular_brunch.com', '5', '2021-09-20 11:47:12', NULL, NULL),
(37, 7, 1, 'Y', '7_1_cover_innitial.PNG', 'break_cov', '7_1_top_login.PNG', 'break_top', '7', '2021-09-28 15:27:22', NULL, NULL),
(38, 7, 2, 'Y', '7_2_cover_sr_tnx_step_1.PNG', 'lun_cov_img', '7_2_top_login.PNG', 'lun_top_img', '7', '2021-09-28 15:31:55', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_payment`
--

CREATE TABLE `td_payment` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `payment_through` varchar(20) NOT NULL,
  `payment_type` varchar(20) NOT NULL,
  `amount` float(10,2) NOT NULL DEFAULT 0.00,
  `payment_flag` enum('Y','N') NOT NULL DEFAULT 'N',
  `payment_dt` datetime NOT NULL,
  `payment_by` varchar(50) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `td_section_image_request`
--

CREATE TABLE `td_section_image_request` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `active_flag` enum('Y','N') NOT NULL DEFAULT 'N',
  `sec_img` varchar(50) DEFAULT NULL,
  `sec_url` varchar(100) DEFAULT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_section_image_request`
--

INSERT INTO `td_section_image_request` (`id`, `restaurant_id`, `menu_id`, `active_flag`, `sec_img`, `sec_url`, `created_by`, `created_dt`, `modified_by`, `modified_dt`) VALUES
(1, 10, 1, 'Y', NULL, 'sadasdasdads.com', '10', '2021-09-18 18:10:58', NULL, NULL),
(2, 10, 1, 'Y', NULL, 'sadasdasdads.com', '10', '2021-09-18 18:12:08', NULL, NULL),
(3, 10, 2, 'Y', NULL, '789.com', '10', '2021-09-18 18:30:53', NULL, NULL),
(4, 10, 3, 'Y', NULL, 'sectiondinner.com', '10', '2021-09-18 18:40:36', NULL, NULL),
(5, 10, 4, 'Y', NULL, '123.com', '10', '2021-09-18 18:41:59', NULL, NULL),
(6, 10, 4, 'Y', NULL, 'launchsection.com', '10', '2021-09-18 18:44:34', NULL, NULL),
(7, 10, 1, 'N', NULL, 'you.com', '10', '2021-09-18 19:51:15', NULL, NULL),
(8, 10, 1, 'Y', NULL, 'google.com', '10', '2021-09-18 19:58:15', NULL, NULL),
(9, 10, 1, 'Y', NULL, 'google.com', '10', '2021-09-18 20:05:57', NULL, NULL),
(10, 10, 1, 'Y', NULL, 'google.com', '10', '2021-09-18 22:16:07', NULL, NULL),
(11, 10, 2, 'Y', NULL, 'google.com', '10', '2021-09-18 22:17:07', NULL, NULL),
(12, 10, 1, 'Y', NULL, 'launchsection.com', '10', '2021-09-18 22:26:43', NULL, NULL),
(13, 10, 1, 'Y', NULL, 'google.com', '10', '2021-09-18 22:31:00', NULL, NULL),
(14, 10, 1, 'Y', NULL, 'launchsection.com', '10', '2021-09-18 22:34:14', NULL, NULL),
(15, 10, 1, 'Y', NULL, 'wqteyui', '10', '2021-09-18 22:35:48', NULL, NULL),
(16, 10, 1, 'Y', NULL, 'yuiop', '10', '2021-09-18 22:39:36', NULL, NULL),
(17, 10, 1, 'Y', NULL, 'google.com', '10', '2021-09-19 00:01:03', NULL, NULL),
(18, 5, 3, 'Y', NULL, 'launchsection.com', '10', '2021-09-19 00:04:44', NULL, NULL),
(19, 5, 2, 'Y', NULL, 'launchsection.com', '10', '2021-09-19 00:07:08', NULL, NULL),
(20, 5, 3, 'Y', NULL, 'sadasdasdads', '10', '2021-09-19 00:08:28', NULL, NULL),
(21, 10, 1, 'Y', NULL, 'sadasdasdads.com', '10', '2021-09-19 09:27:06', NULL, NULL),
(22, 10, 1, 'Y', NULL, 'sadsad', '10', '2021-09-19 09:31:15', NULL, NULL),
(23, 5, 3, 'Y', NULL, 'google.com', '10', '2021-09-19 09:32:11', NULL, NULL),
(24, 5, 2, 'Y', NULL, 'google.com', '10', '2021-09-19 09:33:23', NULL, NULL),
(25, 5, 1, 'Y', NULL, 'google.com', '10', '2021-09-19 09:36:21', NULL, NULL),
(26, 10, 1, 'Y', NULL, 'friedrice.com', '10', '2021-09-19 09:41:23', NULL, NULL),
(27, 5, 1, 'Y', NULL, 'facebook.com', '10', '2021-09-19 09:44:33', NULL, NULL),
(28, 10, 1, 'N', NULL, 'sdfsadas,.com', '10', '2021-09-19 14:29:43', NULL, NULL),
(29, 10, 1, 'Y', NULL, 'sdfsadas,.com', '10', '2021-09-19 14:30:30', NULL, NULL),
(30, 10, 2, 'Y', NULL, 'launchsection.com', '10', '2021-09-19 14:33:39', NULL, NULL),
(31, 10, 1, 'Y', NULL, 'section.com', '10', '2021-09-19 14:36:59', NULL, NULL),
(32, 10, 2, 'Y', NULL, '123.xom', '10', '2021-09-19 14:38:32', NULL, NULL),
(33, 10, 3, 'Y', NULL, 'google.com', '10', '2021-09-19 14:39:22', NULL, NULL),
(34, 5, 1, 'Y', NULL, 'sdfsadas,.com', '5', '2021-09-20 11:47:12', NULL, NULL),
(35, 7, 1, 'Y', '7_1_section_1_sr_tnx_step_2.PNG', 'break_sec', '7', '2021-09-28 15:27:22', NULL, NULL),
(36, 7, 1, 'Y', '7_1_section_2_step_1.PNG', 'break_sec', '7', '2021-09-28 15:27:22', NULL, NULL),
(37, 7, 1, 'Y', '7_1_section_3_step_2.PNG', 'break_sec', '7', '2021-09-28 15:27:22', NULL, NULL),
(38, 7, 2, 'Y', '', '', '7', '2021-09-28 15:31:55', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `td_special_data`
--

CREATE TABLE `td_special_data` (
  `id` bigint(22) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `menu_desc` text NOT NULL,
  `img_catg` int(11) NOT NULL,
  `img_path` varchar(100) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `td_special_date_time`
--

CREATE TABLE `td_special_date_time` (
  `id` bigint(22) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `active_flag` enum('Y','N') NOT NULL,
  `regular_menu_flag` enum('E','A') NOT NULL COMMENT 'E: Exclusively; A: In Addition',
  `day_flag` enum('E','S') NOT NULL COMMENT 'E: Every Week; S: Specific Date',
  `month_day` int(11) DEFAULT NULL,
  `menu_date` date DEFAULT NULL,
  `regular_menu_id` int(11) NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `td_stock_image`
--

CREATE TABLE `td_stock_image` (
  `id` bigint(22) NOT NULL,
  `img_catg` int(11) NOT NULL COMMENT 'md_special_category -> id',
  `img_path` text NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `td_subscription`
--

CREATE TABLE `td_subscription` (
  `id` bigint(22) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `subscription_date` datetime NOT NULL,
  `package_id` bigint(22) NOT NULL,
  `dedcution_date` datetime NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `td_users`
--

CREATE TABLE `td_users` (
  `id` bigint(22) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `email_id` varchar(50) NOT NULL,
  `pwd` varchar(100) NOT NULL,
  `active_flag` enum('Y','N') NOT NULL DEFAULT 'N',
  `last_login_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `td_users`
--

INSERT INTO `td_users` (`id`, `restaurant_id`, `email_id`, `pwd`, `active_flag`, `last_login_dt`, `modified_by`, `modified_dt`) VALUES
(1, 0, 'admin@gmail.com', '$2b$10$mvFwPgBGvSgMCuUWSP.uNedd22Er6UeZxNMN.ahqq9lVn62utY5b2', 'Y', '2021-09-28 15:35:03', NULL, NULL),
(8, 7, 'subham@synergicsoftek.in', '$2b$10$BUKTAPfjT538pxSTY.Q20eSSMnvzPXyUgMwqwSlxe6JToDVT2n6mS', 'Y', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `id` int(11) NOT NULL,
  `res_id` varchar(50) DEFAULT NULL,
  `url` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `zone`
--

CREATE TABLE `zone` (
  `zone_id` int(10) NOT NULL,
  `country_code` char(2) COLLATE utf8_bin NOT NULL,
  `zone_name` varchar(35) COLLATE utf8_bin NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `zone`
--

INSERT INTO `zone` (`zone_id`, `country_code`, `zone_name`) VALUES
(1, 'AD', 'Europe/Andorra'),
(2, 'AE', 'Asia/Dubai'),
(3, 'AF', 'Asia/Kabul'),
(4, 'AG', 'America/Antigua'),
(5, 'AI', 'America/Anguilla'),
(6, 'AL', 'Europe/Tirane'),
(7, 'AM', 'Asia/Yerevan'),
(8, 'AO', 'Africa/Luanda'),
(9, 'AQ', 'Antarctica/McMurdo'),
(10, 'AQ', 'Antarctica/Casey'),
(11, 'AQ', 'Antarctica/Davis'),
(12, 'AQ', 'Antarctica/DumontDUrville'),
(13, 'AQ', 'Antarctica/Mawson'),
(14, 'AQ', 'Antarctica/Palmer'),
(15, 'AQ', 'Antarctica/Rothera'),
(16, 'AQ', 'Antarctica/Syowa'),
(17, 'AQ', 'Antarctica/Troll'),
(18, 'AQ', 'Antarctica/Vostok'),
(19, 'AR', 'America/Argentina/Buenos_Aires'),
(20, 'AR', 'America/Argentina/Cordoba'),
(21, 'AR', 'America/Argentina/Salta'),
(22, 'AR', 'America/Argentina/Jujuy'),
(23, 'AR', 'America/Argentina/Tucuman'),
(24, 'AR', 'America/Argentina/Catamarca'),
(25, 'AR', 'America/Argentina/La_Rioja'),
(26, 'AR', 'America/Argentina/San_Juan'),
(27, 'AR', 'America/Argentina/Mendoza'),
(28, 'AR', 'America/Argentina/San_Luis'),
(29, 'AR', 'America/Argentina/Rio_Gallegos'),
(30, 'AR', 'America/Argentina/Ushuaia'),
(31, 'AS', 'Pacific/Pago_Pago'),
(32, 'AT', 'Europe/Vienna'),
(33, 'AU', 'Australia/Lord_Howe'),
(34, 'AU', 'Antarctica/Macquarie'),
(35, 'AU', 'Australia/Hobart'),
(36, 'AU', 'Australia/Melbourne'),
(37, 'AU', 'Australia/Sydney'),
(38, 'AU', 'Australia/Broken_Hill'),
(39, 'AU', 'Australia/Brisbane'),
(40, 'AU', 'Australia/Lindeman'),
(41, 'AU', 'Australia/Adelaide'),
(42, 'AU', 'Australia/Darwin'),
(43, 'AU', 'Australia/Perth'),
(44, 'AU', 'Australia/Eucla'),
(45, 'AW', 'America/Aruba'),
(46, 'AX', 'Europe/Mariehamn'),
(47, 'AZ', 'Asia/Baku'),
(48, 'BA', 'Europe/Sarajevo'),
(49, 'BB', 'America/Barbados'),
(50, 'BD', 'Asia/Dhaka'),
(51, 'BE', 'Europe/Brussels'),
(52, 'BF', 'Africa/Ouagadougou'),
(53, 'BG', 'Europe/Sofia'),
(54, 'BH', 'Asia/Bahrain'),
(55, 'BI', 'Africa/Bujumbura'),
(56, 'BJ', 'Africa/Porto-Novo'),
(57, 'BL', 'America/St_Barthelemy'),
(58, 'BM', 'Atlantic/Bermuda'),
(59, 'BN', 'Asia/Brunei'),
(60, 'BO', 'America/La_Paz'),
(61, 'BQ', 'America/Kralendijk'),
(62, 'BR', 'America/Noronha'),
(63, 'BR', 'America/Belem'),
(64, 'BR', 'America/Fortaleza'),
(65, 'BR', 'America/Recife'),
(66, 'BR', 'America/Araguaina'),
(67, 'BR', 'America/Maceio'),
(68, 'BR', 'America/Bahia'),
(69, 'BR', 'America/Sao_Paulo'),
(70, 'BR', 'America/Campo_Grande'),
(71, 'BR', 'America/Cuiaba'),
(72, 'BR', 'America/Santarem'),
(73, 'BR', 'America/Porto_Velho'),
(74, 'BR', 'America/Boa_Vista'),
(75, 'BR', 'America/Manaus'),
(76, 'BR', 'America/Eirunepe'),
(77, 'BR', 'America/Rio_Branco'),
(78, 'BS', 'America/Nassau'),
(79, 'BT', 'Asia/Thimphu'),
(80, 'BW', 'Africa/Gaborone'),
(81, 'BY', 'Europe/Minsk'),
(82, 'BZ', 'America/Belize'),
(83, 'CA', 'America/St_Johns'),
(84, 'CA', 'America/Halifax'),
(85, 'CA', 'America/Glace_Bay'),
(86, 'CA', 'America/Moncton'),
(87, 'CA', 'America/Goose_Bay'),
(88, 'CA', 'America/Blanc-Sablon'),
(89, 'CA', 'America/Toronto'),
(90, 'CA', 'America/Nipigon'),
(91, 'CA', 'America/Thunder_Bay'),
(92, 'CA', 'America/Iqaluit'),
(93, 'CA', 'America/Pangnirtung'),
(94, 'CA', 'America/Atikokan'),
(95, 'CA', 'America/Winnipeg'),
(96, 'CA', 'America/Rainy_River'),
(97, 'CA', 'America/Resolute'),
(98, 'CA', 'America/Rankin_Inlet'),
(99, 'CA', 'America/Regina'),
(100, 'CA', 'America/Swift_Current'),
(101, 'CA', 'America/Edmonton'),
(102, 'CA', 'America/Cambridge_Bay'),
(103, 'CA', 'America/Yellowknife'),
(104, 'CA', 'America/Inuvik'),
(105, 'CA', 'America/Creston'),
(106, 'CA', 'America/Dawson_Creek'),
(107, 'CA', 'America/Fort_Nelson'),
(108, 'CA', 'America/Whitehorse'),
(109, 'CA', 'America/Dawson'),
(110, 'CA', 'America/Vancouver'),
(111, 'CC', 'Indian/Cocos'),
(112, 'CD', 'Africa/Kinshasa'),
(113, 'CD', 'Africa/Lubumbashi'),
(114, 'CF', 'Africa/Bangui'),
(115, 'CG', 'Africa/Brazzaville'),
(116, 'CH', 'Europe/Zurich'),
(117, 'CI', 'Africa/Abidjan'),
(118, 'CK', 'Pacific/Rarotonga'),
(119, 'CL', 'America/Santiago'),
(120, 'CL', 'America/Punta_Arenas'),
(121, 'CL', 'Pacific/Easter'),
(122, 'CM', 'Africa/Douala'),
(123, 'CN', 'Asia/Shanghai'),
(124, 'CN', 'Asia/Urumqi'),
(125, 'CO', 'America/Bogota'),
(126, 'CR', 'America/Costa_Rica'),
(127, 'CU', 'America/Havana'),
(128, 'CV', 'Atlantic/Cape_Verde'),
(129, 'CW', 'America/Curacao'),
(130, 'CX', 'Indian/Christmas'),
(131, 'CY', 'Asia/Nicosia'),
(132, 'CY', 'Asia/Famagusta'),
(133, 'CZ', 'Europe/Prague'),
(134, 'DE', 'Europe/Berlin'),
(135, 'DE', 'Europe/Busingen'),
(136, 'DJ', 'Africa/Djibouti'),
(137, 'DK', 'Europe/Copenhagen'),
(138, 'DM', 'America/Dominica'),
(139, 'DO', 'America/Santo_Domingo'),
(140, 'DZ', 'Africa/Algiers'),
(141, 'EC', 'America/Guayaquil'),
(142, 'EC', 'Pacific/Galapagos'),
(143, 'EE', 'Europe/Tallinn'),
(144, 'EG', 'Africa/Cairo'),
(145, 'EH', 'Africa/El_Aaiun'),
(146, 'ER', 'Africa/Asmara'),
(147, 'ES', 'Europe/Madrid'),
(148, 'ES', 'Africa/Ceuta'),
(149, 'ES', 'Atlantic/Canary'),
(150, 'ET', 'Africa/Addis_Ababa'),
(151, 'FI', 'Europe/Helsinki'),
(152, 'FJ', 'Pacific/Fiji'),
(153, 'FK', 'Atlantic/Stanley'),
(154, 'FM', 'Pacific/Chuuk'),
(155, 'FM', 'Pacific/Pohnpei'),
(156, 'FM', 'Pacific/Kosrae'),
(157, 'FO', 'Atlantic/Faroe'),
(158, 'FR', 'Europe/Paris'),
(159, 'GA', 'Africa/Libreville'),
(160, 'GB', 'Europe/London'),
(161, 'GD', 'America/Grenada'),
(162, 'GE', 'Asia/Tbilisi'),
(163, 'GF', 'America/Cayenne'),
(164, 'GG', 'Europe/Guernsey'),
(165, 'GH', 'Africa/Accra'),
(166, 'GI', 'Europe/Gibraltar'),
(167, 'GL', 'America/Nuuk'),
(168, 'GL', 'America/Danmarkshavn'),
(169, 'GL', 'America/Scoresbysund'),
(170, 'GL', 'America/Thule'),
(171, 'GM', 'Africa/Banjul'),
(172, 'GN', 'Africa/Conakry'),
(173, 'GP', 'America/Guadeloupe'),
(174, 'GQ', 'Africa/Malabo'),
(175, 'GR', 'Europe/Athens'),
(176, 'GS', 'Atlantic/South_Georgia'),
(177, 'GT', 'America/Guatemala'),
(178, 'GU', 'Pacific/Guam'),
(179, 'GW', 'Africa/Bissau'),
(180, 'GY', 'America/Guyana'),
(181, 'HK', 'Asia/Hong_Kong'),
(182, 'HN', 'America/Tegucigalpa'),
(183, 'HR', 'Europe/Zagreb'),
(184, 'HT', 'America/Port-au-Prince'),
(185, 'HU', 'Europe/Budapest'),
(186, 'ID', 'Asia/Jakarta'),
(187, 'ID', 'Asia/Pontianak'),
(188, 'ID', 'Asia/Makassar'),
(189, 'ID', 'Asia/Jayapura'),
(190, 'IE', 'Europe/Dublin'),
(191, 'IL', 'Asia/Jerusalem'),
(192, 'IM', 'Europe/Isle_of_Man'),
(193, 'IN', 'Asia/Kolkata'),
(194, 'IO', 'Indian/Chagos'),
(195, 'IQ', 'Asia/Baghdad'),
(196, 'IR', 'Asia/Tehran'),
(197, 'IS', 'Atlantic/Reykjavik'),
(198, 'IT', 'Europe/Rome'),
(199, 'JE', 'Europe/Jersey'),
(200, 'JM', 'America/Jamaica'),
(201, 'JO', 'Asia/Amman'),
(202, 'JP', 'Asia/Tokyo'),
(203, 'KE', 'Africa/Nairobi'),
(204, 'KG', 'Asia/Bishkek'),
(205, 'KH', 'Asia/Phnom_Penh'),
(206, 'KI', 'Pacific/Tarawa'),
(207, 'KI', 'Pacific/Kanton'),
(208, 'KI', 'Pacific/Kiritimati'),
(209, 'KM', 'Indian/Comoro'),
(210, 'KN', 'America/St_Kitts'),
(211, 'KP', 'Asia/Pyongyang'),
(212, 'KR', 'Asia/Seoul'),
(213, 'KW', 'Asia/Kuwait'),
(214, 'KY', 'America/Cayman'),
(215, 'KZ', 'Asia/Almaty'),
(216, 'KZ', 'Asia/Qyzylorda'),
(217, 'KZ', 'Asia/Qostanay'),
(218, 'KZ', 'Asia/Aqtobe'),
(219, 'KZ', 'Asia/Aqtau'),
(220, 'KZ', 'Asia/Atyrau'),
(221, 'KZ', 'Asia/Oral'),
(222, 'LA', 'Asia/Vientiane'),
(223, 'LB', 'Asia/Beirut'),
(224, 'LC', 'America/St_Lucia'),
(225, 'LI', 'Europe/Vaduz'),
(226, 'LK', 'Asia/Colombo'),
(227, 'LR', 'Africa/Monrovia'),
(228, 'LS', 'Africa/Maseru'),
(229, 'LT', 'Europe/Vilnius'),
(230, 'LU', 'Europe/Luxembourg'),
(231, 'LV', 'Europe/Riga'),
(232, 'LY', 'Africa/Tripoli'),
(233, 'MA', 'Africa/Casablanca'),
(234, 'MC', 'Europe/Monaco'),
(235, 'MD', 'Europe/Chisinau'),
(236, 'ME', 'Europe/Podgorica'),
(237, 'MF', 'America/Marigot'),
(238, 'MG', 'Indian/Antananarivo'),
(239, 'MH', 'Pacific/Majuro'),
(240, 'MH', 'Pacific/Kwajalein'),
(241, 'MK', 'Europe/Skopje'),
(242, 'ML', 'Africa/Bamako'),
(243, 'MM', 'Asia/Yangon'),
(244, 'MN', 'Asia/Ulaanbaatar'),
(245, 'MN', 'Asia/Hovd'),
(246, 'MN', 'Asia/Choibalsan'),
(247, 'MO', 'Asia/Macau'),
(248, 'MP', 'Pacific/Saipan'),
(249, 'MQ', 'America/Martinique'),
(250, 'MR', 'Africa/Nouakchott'),
(251, 'MS', 'America/Montserrat'),
(252, 'MT', 'Europe/Malta'),
(253, 'MU', 'Indian/Mauritius'),
(254, 'MV', 'Indian/Maldives'),
(255, 'MW', 'Africa/Blantyre'),
(256, 'MX', 'America/Mexico_City'),
(257, 'MX', 'America/Cancun'),
(258, 'MX', 'America/Merida'),
(259, 'MX', 'America/Monterrey'),
(260, 'MX', 'America/Matamoros'),
(261, 'MX', 'America/Mazatlan'),
(262, 'MX', 'America/Chihuahua'),
(263, 'MX', 'America/Ojinaga'),
(264, 'MX', 'America/Hermosillo'),
(265, 'MX', 'America/Tijuana'),
(266, 'MX', 'America/Bahia_Banderas'),
(267, 'MY', 'Asia/Kuala_Lumpur'),
(268, 'MY', 'Asia/Kuching'),
(269, 'MZ', 'Africa/Maputo'),
(270, 'NA', 'Africa/Windhoek'),
(271, 'NC', 'Pacific/Noumea'),
(272, 'NE', 'Africa/Niamey'),
(273, 'NF', 'Pacific/Norfolk'),
(274, 'NG', 'Africa/Lagos'),
(275, 'NI', 'America/Managua'),
(276, 'NL', 'Europe/Amsterdam'),
(277, 'NO', 'Europe/Oslo'),
(278, 'NP', 'Asia/Kathmandu'),
(279, 'NR', 'Pacific/Nauru'),
(280, 'NU', 'Pacific/Niue'),
(281, 'NZ', 'Pacific/Auckland'),
(282, 'NZ', 'Pacific/Chatham'),
(283, 'OM', 'Asia/Muscat'),
(284, 'PA', 'America/Panama'),
(285, 'PE', 'America/Lima'),
(286, 'PF', 'Pacific/Tahiti'),
(287, 'PF', 'Pacific/Marquesas'),
(288, 'PF', 'Pacific/Gambier'),
(289, 'PG', 'Pacific/Port_Moresby'),
(290, 'PG', 'Pacific/Bougainville'),
(291, 'PH', 'Asia/Manila'),
(292, 'PK', 'Asia/Karachi'),
(293, 'PL', 'Europe/Warsaw'),
(294, 'PM', 'America/Miquelon'),
(295, 'PN', 'Pacific/Pitcairn'),
(296, 'PR', 'America/Puerto_Rico'),
(297, 'PS', 'Asia/Gaza'),
(298, 'PS', 'Asia/Hebron'),
(299, 'PT', 'Europe/Lisbon'),
(300, 'PT', 'Atlantic/Madeira'),
(301, 'PT', 'Atlantic/Azores'),
(302, 'PW', 'Pacific/Palau'),
(303, 'PY', 'America/Asuncion'),
(304, 'QA', 'Asia/Qatar'),
(305, 'RE', 'Indian/Reunion'),
(306, 'RO', 'Europe/Bucharest'),
(307, 'RS', 'Europe/Belgrade'),
(308, 'RU', 'Europe/Kaliningrad'),
(309, 'RU', 'Europe/Moscow'),
(310, 'UA', 'Europe/Simferopol'),
(311, 'RU', 'Europe/Kirov'),
(312, 'RU', 'Europe/Volgograd'),
(313, 'RU', 'Europe/Astrakhan'),
(314, 'RU', 'Europe/Saratov'),
(315, 'RU', 'Europe/Ulyanovsk'),
(316, 'RU', 'Europe/Samara'),
(317, 'RU', 'Asia/Yekaterinburg'),
(318, 'RU', 'Asia/Omsk'),
(319, 'RU', 'Asia/Novosibirsk'),
(320, 'RU', 'Asia/Barnaul'),
(321, 'RU', 'Asia/Tomsk'),
(322, 'RU', 'Asia/Novokuznetsk'),
(323, 'RU', 'Asia/Krasnoyarsk'),
(324, 'RU', 'Asia/Irkutsk'),
(325, 'RU', 'Asia/Chita'),
(326, 'RU', 'Asia/Yakutsk'),
(327, 'RU', 'Asia/Khandyga'),
(328, 'RU', 'Asia/Vladivostok'),
(329, 'RU', 'Asia/Ust-Nera'),
(330, 'RU', 'Asia/Magadan'),
(331, 'RU', 'Asia/Sakhalin'),
(332, 'RU', 'Asia/Srednekolymsk'),
(333, 'RU', 'Asia/Kamchatka'),
(334, 'RU', 'Asia/Anadyr'),
(335, 'RW', 'Africa/Kigali'),
(336, 'SA', 'Asia/Riyadh'),
(337, 'SB', 'Pacific/Guadalcanal'),
(338, 'SC', 'Indian/Mahe'),
(339, 'SD', 'Africa/Khartoum'),
(340, 'SE', 'Europe/Stockholm'),
(341, 'SG', 'Asia/Singapore'),
(342, 'SH', 'Atlantic/St_Helena'),
(343, 'SI', 'Europe/Ljubljana'),
(344, 'SJ', 'Arctic/Longyearbyen'),
(345, 'SK', 'Europe/Bratislava'),
(346, 'SL', 'Africa/Freetown'),
(347, 'SM', 'Europe/San_Marino'),
(348, 'SN', 'Africa/Dakar'),
(349, 'SO', 'Africa/Mogadishu'),
(350, 'SR', 'America/Paramaribo'),
(351, 'SS', 'Africa/Juba'),
(352, 'ST', 'Africa/Sao_Tome'),
(353, 'SV', 'America/El_Salvador'),
(354, 'SX', 'America/Lower_Princes'),
(355, 'SY', 'Asia/Damascus'),
(356, 'SZ', 'Africa/Mbabane'),
(357, 'TC', 'America/Grand_Turk'),
(358, 'TD', 'Africa/Ndjamena'),
(359, 'TF', 'Indian/Kerguelen'),
(360, 'TG', 'Africa/Lome'),
(361, 'TH', 'Asia/Bangkok'),
(362, 'TJ', 'Asia/Dushanbe'),
(363, 'TK', 'Pacific/Fakaofo'),
(364, 'TL', 'Asia/Dili'),
(365, 'TM', 'Asia/Ashgabat'),
(366, 'TN', 'Africa/Tunis'),
(367, 'TO', 'Pacific/Tongatapu'),
(368, 'TR', 'Europe/Istanbul'),
(369, 'TT', 'America/Port_of_Spain'),
(370, 'TV', 'Pacific/Funafuti'),
(371, 'TW', 'Asia/Taipei'),
(372, 'TZ', 'Africa/Dar_es_Salaam'),
(373, 'UA', 'Europe/Kiev'),
(374, 'UA', 'Europe/Uzhgorod'),
(375, 'UA', 'Europe/Zaporozhye'),
(376, 'UG', 'Africa/Kampala'),
(377, 'UM', 'Pacific/Midway'),
(378, 'UM', 'Pacific/Wake'),
(379, 'US', 'America/New_York'),
(380, 'US', 'America/Detroit'),
(381, 'US', 'America/Kentucky/Louisville'),
(382, 'US', 'America/Kentucky/Monticello'),
(383, 'US', 'America/Indiana/Indianapolis'),
(384, 'US', 'America/Indiana/Vincennes'),
(385, 'US', 'America/Indiana/Winamac'),
(386, 'US', 'America/Indiana/Marengo'),
(387, 'US', 'America/Indiana/Petersburg'),
(388, 'US', 'America/Indiana/Vevay'),
(389, 'US', 'America/Chicago'),
(390, 'US', 'America/Indiana/Tell_City'),
(391, 'US', 'America/Indiana/Knox'),
(392, 'US', 'America/Menominee'),
(393, 'US', 'America/North_Dakota/Center'),
(394, 'US', 'America/North_Dakota/New_Salem'),
(395, 'US', 'America/North_Dakota/Beulah'),
(396, 'US', 'America/Denver'),
(397, 'US', 'America/Boise'),
(398, 'US', 'America/Phoenix'),
(399, 'US', 'America/Los_Angeles'),
(400, 'US', 'America/Anchorage'),
(401, 'US', 'America/Juneau'),
(402, 'US', 'America/Sitka'),
(403, 'US', 'America/Metlakatla'),
(404, 'US', 'America/Yakutat'),
(405, 'US', 'America/Nome'),
(406, 'US', 'America/Adak'),
(407, 'US', 'Pacific/Honolulu'),
(408, 'UY', 'America/Montevideo'),
(409, 'UZ', 'Asia/Samarkand'),
(410, 'UZ', 'Asia/Tashkent'),
(411, 'VA', 'Europe/Vatican'),
(412, 'VC', 'America/St_Vincent'),
(413, 'VE', 'America/Caracas'),
(414, 'VG', 'America/Tortola'),
(415, 'VI', 'America/St_Thomas'),
(416, 'VN', 'Asia/Ho_Chi_Minh'),
(417, 'VU', 'Pacific/Efate'),
(418, 'WF', 'Pacific/Wallis'),
(419, 'WS', 'Pacific/Apia'),
(420, 'YE', 'Asia/Aden'),
(421, 'YT', 'Indian/Mayotte'),
(422, 'ZA', 'Africa/Johannesburg'),
(423, 'ZM', 'Africa/Lusaka'),
(424, 'ZW', 'Africa/Harare');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `md_country`
--
ALTER TABLE `md_country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_holder_cling`
--
ALTER TABLE `md_holder_cling`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_items`
--
ALTER TABLE `md_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_item_description`
--
ALTER TABLE `md_item_description`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_menu`
--
ALTER TABLE `md_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_package`
--
ALTER TABLE `md_package`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_parm_value`
--
ALTER TABLE `md_parm_value`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_promo_calander`
--
ALTER TABLE `md_promo_calander`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_section`
--
ALTER TABLE `md_section`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_special_category`
--
ALTER TABLE `md_special_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_time_zone`
--
ALTER TABLE `md_time_zone`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `md_url`
--
ALTER TABLE `md_url`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_about`
--
ALTER TABLE `td_about`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_contacts`
--
ALTER TABLE `td_contacts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `phone_no` (`phone_no`);

--
-- Indexes for table `td_date_time`
--
ALTER TABLE `td_date_time`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_logo`
--
ALTER TABLE `td_logo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_menu_image`
--
ALTER TABLE `td_menu_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_menu_notice`
--
ALTER TABLE `td_menu_notice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_menu_request`
--
ALTER TABLE `td_menu_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_order_items`
--
ALTER TABLE `td_order_items`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_other_image`
--
ALTER TABLE `td_other_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_payment`
--
ALTER TABLE `td_payment`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_section_image_request`
--
ALTER TABLE `td_section_image_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_special_data`
--
ALTER TABLE `td_special_data`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_special_date_time`
--
ALTER TABLE `td_special_date_time`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_stock_image`
--
ALTER TABLE `td_stock_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_subscription`
--
ALTER TABLE `td_subscription`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `td_users`
--
ALTER TABLE `td_users`
  ADD PRIMARY KEY (`id`) USING BTREE,
  ADD UNIQUE KEY `email_id` (`email_id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `zone`
--
ALTER TABLE `zone`
  ADD PRIMARY KEY (`zone_id`),
  ADD KEY `idx_country_code` (`country_code`),
  ADD KEY `idx_zone_name` (`zone_name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `md_items`
--
ALTER TABLE `md_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `md_item_description`
--
ALTER TABLE `md_item_description`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `md_menu`
--
ALTER TABLE `md_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `md_package`
--
ALTER TABLE `md_package`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `md_parm_value`
--
ALTER TABLE `md_parm_value`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `md_section`
--
ALTER TABLE `md_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `md_special_category`
--
ALTER TABLE `md_special_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `md_time_zone`
--
ALTER TABLE `md_time_zone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT for table `md_url`
--
ALTER TABLE `md_url`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `td_about`
--
ALTER TABLE `td_about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `td_contacts`
--
ALTER TABLE `td_contacts`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `td_date_time`
--
ALTER TABLE `td_date_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- AUTO_INCREMENT for table `td_logo`
--
ALTER TABLE `td_logo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `td_menu_image`
--
ALTER TABLE `td_menu_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `td_menu_notice`
--
ALTER TABLE `td_menu_notice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `td_menu_request`
--
ALTER TABLE `td_menu_request`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_order_items`
--
ALTER TABLE `td_order_items`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `td_other_image`
--
ALTER TABLE `td_other_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `td_section_image_request`
--
ALTER TABLE `td_section_image_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `td_special_data`
--
ALTER TABLE `td_special_data`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_special_date_time`
--
ALTER TABLE `td_special_date_time`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_stock_image`
--
ALTER TABLE `td_stock_image`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_users`
--
ALTER TABLE `td_users`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `zone`
--
ALTER TABLE `zone`
  MODIFY `zone_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=425;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
