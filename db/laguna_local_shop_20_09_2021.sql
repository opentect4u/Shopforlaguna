-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 20, 2021 at 04:14 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
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

-- --------------------------------------------------------

--
-- Table structure for table `td_contacts`
--

CREATE TABLE `td_contacts` (
  `id` bigint(22) NOT NULL,
  `contact_date` datetime NOT NULL,
  `restaurant_name` varchar(100) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `phone_no` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `addr_line1` varchar(100) NOT NULL,
  `addr_line2` varchar(100) DEFAULT NULL,
  `city` varchar(50) NOT NULL,
  `zip` int(11) NOT NULL,
  `country` varchar(50) NOT NULL,
  `website` varchar(50) DEFAULT NULL,
  `active_user` enum('Y','N') DEFAULT 'N',
  `created_by` varchar(50) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `td_date_time`
--

CREATE TABLE `td_date_time` (
  `id` int(11) NOT NULL,
  `restaurant_id` bigint(22) NOT NULL,
  `menu_id` int(11) NOT NULL,
  `month_day` int(11) NOT NULL,
  `start_time` time NOT NULL,
  `end_time` time NOT NULL,
  `created_by` varchar(50) DEFAULT NULL,
  `created_dt` datetime DEFAULT NULL,
  `modified_by` varchar(50) DEFAULT NULL,
  `modified_dt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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

--
-- Indexes for dumped tables
--

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `md_items`
--
ALTER TABLE `md_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `md_item_description`
--
ALTER TABLE `md_item_description`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

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
-- AUTO_INCREMENT for table `md_section`
--
ALTER TABLE `md_section`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_about`
--
ALTER TABLE `td_about`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_contacts`
--
ALTER TABLE `td_contacts`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_date_time`
--
ALTER TABLE `td_date_time`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_logo`
--
ALTER TABLE `td_logo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_menu_image`
--
ALTER TABLE `td_menu_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_menu_notice`
--
ALTER TABLE `td_menu_notice`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_menu_request`
--
ALTER TABLE `td_menu_request`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_order_items`
--
ALTER TABLE `td_order_items`
  MODIFY `id` bigint(22) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_other_image`
--
ALTER TABLE `td_other_image`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `td_section_image_request`
--
ALTER TABLE `td_section_image_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
