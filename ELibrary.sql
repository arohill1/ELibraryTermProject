use anjali;

CREATE TABLE `addresses` (
  `id` int(11) NOT NULL,
  `line1` varchar(255) DEFAULT NULL,
  `line2` varchar(255) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `state` varchar(45) DEFAULT NULL,
  `country` varchar(45) DEFAULT NULL,
  `phone` varchar(10) DEFAULT NULL,
  `pincode` int(6) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `addresses`
--

INSERT INTO `addresses` (`id`, `line1`, `line2`, `city`, `state`, `country`, `phone`, `pincode`, `user_id`) VALUES
(1, '40 Cedar Street', 'Apt 4', 'Binghamton', 'New York', 'United States Of America', '5506692343', 13905, 1),
(2, '343 Lavaca Street', 'Suite 34', 'Washington DC', 'Maryland', 'United States Of America', '7708238560', 20001, 1);

-- --------------------------------------------------------

--
-- Table structure for table `books`
--

CREATE TABLE `books` (
  `id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `images` text DEFAULT NULL,
  `description` text NOT NULL,
  `price` float NOT NULL,
  `quantity` int(10) NOT NULL,
  `short_desc` varchar(255) NOT NULL,
  `cat_id` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `books`
--

INSERT INTO `books` (`id`, `title`, `image`, `images`, `description`, `price`, `quantity`, `short_desc`, `cat_id`) VALUES
(1, 'Tuesdays with Morrie', 'https://image.ebooks.com/previews/000/000755/000755006/000755006.jpg', '', 'Beautiful and deep conversations to bestow a piece of lasting wisdom that you will carry with you for rest of your life ', 12, 20, 'Get the best life advice', 1),
(2, 'The Alchemist', 'https://content.thriveglobal.com/wp-content/uploads/2018/03/image1_28429.JPG?w=1550', NULL, 'tells the magical story of Santiago, an Andalusian shepherd boy who yearns to travel in search of a worldly treasure as extravagant as any ever found.', 8, 30, 'The story of the treasures Santiago finds along the way teaches us, as only a few stories can, about the essential wisdom of listening to our hearts', 1),
(3, 'The Dark Road', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1355084285l/15811572.jpg', '', 'Far away from the Chinese economic miracle, from the bright lights of Beijing and Shanghai, is a vast rural hinterland, where life goes on much as it has for generations, with one extraordinary difference: “normal” parents are permitted by the state to have only a single child. The Dark Road is the story of one such “normal” family—Meili, a young peasant woman; her husband, Kongzi, a village schoolteacher; and their daughter, Nannan.', 15, 25, 'a novel about the human cost of China’s one-child policy through the lens of one rural family on the run from its reach', 3),
(4, 'A Better Life', 'https://www.concordmonitor.com/getattachment/6a728505-f08f-4ba9-86f7-2212929a4607/attachment.aspx', '', 'One summer morning, Jenny takes a little girl from the back seat of a car, telling herself and her boyfriend Gene she was saving her. After learning the girl is a foster child, Jenny decides to raise the girl, whom she names Margaret, as her own. Their life as a family is complicated by Jenny\'s erratic behavior as well as Gene\'s frequent absences and unfulfilled promises. Despite this, Margaret forms a strong bond with both of them, a bond that is tested when Margaret learns about her abduction. At fifteen, Margaret leaves home to seek answers about who she is and where she truly belongs. Told from both Jenny and Margaret\'s perspectives, this is a story of commitment, survival, and redemption.', 10, 10, 'Fiction', 2),
(5, 'The Kitchen House', 'https://belmontpubliclibrary.net/wp-content/uploads/2018/08/KitchenHouse2.png', '', 'When a white servant girl violates the order of plantation society, she unleashes a tragedy that exposes the worst and best in the people she has come to call her family.', 5.5, 18, 'Historical - Thriller', 3),
(6, 'The Best Of Me', 'https://nicholassparks.com/wp-content/uploads/2013/07/201908-the-best-of-me-9781538717066.jpg', NULL, 'They were teenage sweethearts from opposite sides of the tracks - with a passion that would change their lives for ever. But life would force them apart.\r\nYears later, the lines they had drawn between past and present are about to slip . . . Called back to their hometown for the funeral of the mentor who once gave them shelter when they needed it most, they are faced with each other once again, and forced to confront the paths they chose. Can true love ever rewrite the past?', 6, 70, 'Fiction-Romance', 4),
(7, 'DragonFly', 'https://www.grandcentralpublishing.com/wp-content/uploads/2019/01/97815387322121.jpg?fit=316%2C480', NULL, 'At the height of WWII, five idealistic young Americans receive a mysterious letter from the OSS, asking them if they are willing to fight for their country. The men and women from very different backgrounds--a Texan athlete with German roots, an upper-crust son of a French mother and a wealthy businessman, a dirt-poor Midwestern fly fisherman, an orphaned fashion designer, and a ravishingly beautiful female fencer -- all answer the call of duty, but each for a secret reason of his or her own. They bond immediately, in a group code-named Dragonfly. \r\nSoon after their training, they are dropped behind enemy lines and take up their false identities, isolated from one another except for a secret drop-box, but in close contact with the powerful Nazi elite who have Paris under siege. \r\nThus begins a dramatic and riveting cat-and-mouse game, as the young Americans seek to stay under the radar until a fatal misstep leads to the capture and the firing-squad execution of one of their team. But...is everything as it seems, or is this one more elaborate act of spycraft?', 8, 30, 'Fiction', 2),
(8, 'When All Is Said', 'https://images-na.ssl-images-amazon.com/images/I/41ccu2CHdgL._SX322_BO1,204,203,200_.jpg', NULL, 'When All is Said is the beautiful debut novel from Irish writer Anne Griffin. Described as ‘heart-breaking and heart-warming’, this is the story of one man, Maurice Hannigan, as he recounts his life and loves through five toasts to five very special people. ', 7.5, 60, 'Fiction ', 4),
(9, 'The Perfect Date', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1539803080l/41150285.jpg', NULL, 'When a single mom ends up playing an unwilling fake girlfriend to a charming playboy baseball player, love suddenly turns everything upside down in this fun, heartwarming multicultural romance', 8.8, 50, 'Fiction-Romance', 4),
(10, 'The Age Of Light', 'https://d279m997dpfwgl.cloudfront.net/wp/2019/02/0213_ageoflight-01-1000x666.jpg', NULL, 'Author Whitney Scharer\'s debut novel, \"The Age of Light,\" is based on the life of Miller, who went from fashion model and muse of photographer Man Ray, to her own career as a studio photographer and one of the few accredited female war correspondents to cover World War II.', 18.4, 70, 'Fiction', 4),
(11, 'Sweet Sorrow', 'https://images-na.ssl-images-amazon.com/images/I/71BgeU5MG0L.jpg', NULL, 'In 1997, Charlie Lewis is the kind of boy you don\'t remember in the school photograph. His exams have not gone well. At home he is looking after his father, when surely it should be the other way round, and if he thinks about the future at all, it is with a kind of dread.\r\n\r\nThen Fran Fisher bursts into his life and despite himself, Charlie begins to hope.\r\n\r\n', 4.5, 70, 'Fiction-Romance', 4),
(12, 'Barn', 'https://images.booksense.com/images/154/450/9781644450154.jpg', NULL, 'Two auditors for the U.S. egg industry go rogue and conceive a plot to steal a million chickens in the middle of the night—an entire egg farm’s worth of animals. Janey and Cleveland—a spirited former runaway and the officious head of audits—assemble a precarious, quarrelsome team and descend on the farm on a dark spring evening. A series of catastrophes ensues.', 24.3, 100, 'Fiction-Thriller', 3),
(13, 'Joy At Work', 'https://m.media-amazon.com/images/I/51J4Eap+ajL.jpg', NULL, 'Declutter your desk and brighten up your business with this transformative guide from an organizational psychologist and the #1 New York Times bestselling author of The Life-Changing Magic of Tidying Up . The workplace is a magnet for clutter and mess. Who hasn\'t felt drained by wasteful meetings, disorganized papers, endless emails, and unnecessary tasks? These are the modern-day hazards of working, and they can slowly drain the joy from work, limit our chances of career progress, and undermine our well-being', 20.5, 200, 'Self-Help', 1),
(14, 'A Single Thread', 'https://kbimages1-a.akamaihd.net/Images/696744a2-f3d0-4158-999c-659ce67dbb8f/300/300/False/image.jpg', NULL, 'It is 1932, and the losses of the First World War are still keenly felt. Violet Speedwell, mourning for both her fiancé and her brother and regarded by society as a ‘surplus woman’ unlikely to marry, resolves to escape her suffocating mother and strike out alone.\r\n\r\nA new life awaits her in Winchester. Yes, it is one of draughty boarding-houses and sidelong glances at her naked ring finger from younger colleagues; but it is also a life gleaming with independence and opportunity. Violet falls in with the broderers, a disparate group of women charged with embroidering kneelers for the Cathedral, and is soon entwined in their lives and their secrets. As the almost unthinkable threat of a second Great War appears on the horizon Violet collects a few secrets of her own that could just change everything…\r\n \r\nWarm, vivid and beautifully orchestrated, A Single Thread reveals one of our finest modern writers at the peak of her powers.', 15.65, 100, 'Fiction', 2),
(15, 'Sugar Run', 'https://2.bp.blogspot.com/-WXtU6I_jdlE/W_LRVrbxYkI/AAAAAAABmFM/zr3V_H_yFsA8wKzKtuoMbB0BHpi7F1oywCLcBGAs/s640/IMG_4281.JPG', NULL, 'Set within the charged insularity of rural West Virginia, Mesha Maren’s Sugar Run is a searing and gritty debut about making a break for another life, the use and treachery of makeshift families, and how, no matter the distance we think we’ve traveled from the mistakes we’ve made, too often we find ourselves standing in precisely the place we began.', 18.3, 200, 'Fiction ', 2),
(16, 'The Turn Of The Key', 'https://ruthware.com/wp-content/uploads/2019/03/Turn-of-Key-Mock-US-smOPT.png', NULL, 'Full of spellbinding menace, The Turn of the Key is a gripping modern-day haunted house thriller from the Agatha Christie of our time.', 10.45, 100, 'Fiction-Thriller', 3),
(17, 'Tell Me Your Dreams', 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1412172145l/9909176.jpg', NULL, 'She had read about stalkers, but they belonged in a different, faraway world. She had no idea who it could be, who would want to harm her. She was trying desperately not to panic, but lately her sleep had been filled with nightmares, and she had awakened each morning with a feeling of impending doom.\r\n\r\nThus begins Sidney Sheldon\'s chilling new novel, Tell Me Your Dreams. Three beautiful young women are suspected of committing a series of brutal murders. The police make an arrest that leads to one of the most bizarre murder trials of the century. Based on actual events, Sheldon\'s novel races from London to Rome to the city of Quebec to San Francisco, with a climax that will leave the reader stunned.', 12.66, 200, 'Fiction-Thriller', 3),
(18, 'Early Indians', 'https://akm-img-a-in.tosshub.com/sites/rd/resources/embed/201901/early-indians_012119072558.jpg', NULL, 'As Joseph unravels our history using the results of genetic and other research, he takes head-on some of the most controversial and uncomfortable questions of Indian history: Who were the Harappans? Did the \'Aryans\' really migrate to India? Are North Indians genetically different from South Indians? And are the various castes genetically distinct groups? This book relies heavily on path-breaking DNA research of recent years. But it also presents earlier archaeological and linguistic evidence - all in an entertaining and highly readable manner. A hugely significant book, Early Indians authoritatively and bravely puts to rest several ugly debates on the ancestry of modern Indians. It not only shows us how the modern Indian population came to be composed as it is, but also reveals an undeniable and important truth about who we are: we are all migrants. And we are all mixed.', 22.7, 50, 'History', 2),
(19, 'Three Women', 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781451642308/three-women-9781451642308_lg.jpg', NULL, 'Lina, a young mother in suburban Indiana whose marriage has lost its passion, reconnects with an old flame through social media and embarks on an affair that quickly becomes all-consuming. Maggie, a seventeen-year-old high school student in North Dakota, allegedly engages in a relationship with her married English teacher; the ensuing criminal trial turns their quiet community upside down. Sloane, a successful restaurant owner in an exclusive enclave of the Northeast, is happily married to a man who likes to watch her have sex with other men and women.\r\n\r\nHailed as “a dazzling achievement” (Los Angeles Times) and “a riveting page-turner that explores desire, heartbreak, and infatuation in all its messy, complicated nuance” (The Washington Post), Lisa Taddeo’s Three Women has captivated readers, booksellers, and critics—and topped bestseller lists—worldwide. Based on eight years of immersive research, it is “an astonishing work of literary reportage” (The Atlantic) that introduces us to three unforgettable women—and one remarkable writer—whose experiences remind us that we are not alone.', 31.55, 60, 'Fiction', 4),
(20, 'Chasing The Phoenix', 'https://images-na.ssl-images-amazon.com/images/I/51Vg+i8Z9wL._SY344_BO1,204,203,200_.jpg', NULL, 'In the distant future, Surplus arrives in China dressed as a Mongolian shaman, leading a yak which carries the corpse of his friend, Darger. The old high-tech world has long since collapsed, and the artificial intelligences that ran it are outlawed and destroyed. Or so it seems.\r\n\r\nDarger and Surplus, a human and a genetically engineered dog with human intelligence who walks upright, are a pair of con men and the heroes of a series of prior Swanwick stories. They travel to what was once China and invent a scam to become rich and powerful. Pretending to have limited super-powers, they aid an ambitious local warlord who dreams of conquest and once again reuniting China under one ruler. And, against all odds, it begins to work, but it seems as if there are other forces at work behind the scenes. Chasing the Phoenix is a sharp, slick, witty science fiction adventure that is hugely entertaining from Michael Swanwick, one of the best SF writers alive.', 17.99, 100, 'Science Fiction', 2);

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `title`) VALUES
(1, 'SelfHelp'),
(2, 'ScienceFiction'),
(3, 'Thriller'),
(4, 'Romance');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(10) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `orders_details`
--

CREATE TABLE `orders_details` (
  `id` int(10) NOT NULL,
  `order_id` int(11) NOT NULL,
  `book_id` int(10) NOT NULL,
  `quantity` int(11) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `fname` varchar(255) DEFAULT 'not set',
  `lname` varchar(255) DEFAULT 'not set',
  `age` int(10) DEFAULT 18,
  `role` int(10) DEFAULT 555,
  `photoUrl` text DEFAULT NULL,
  `type` varchar(255) NOT NULL DEFAULT 'local'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`, `fname`, `lname`, `age`, `role`, `photoUrl`, `type`) VALUES
(1, 'root', 'arohill', 'anjali@gmail.com', 'Anjali', 'Rohilla', 27, 777, '', 'local'),
(2, 'user2', 'root', 'joybot@gmail.com', 'Joy', 'Bot', 20, 555, '', 'local');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addresses`
--
ALTER TABLE `addresses`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_addresses_users1_idx` (`user_id`);

--
-- Indexes for table `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`),
  ADD KEY `books_ibfk_1` (`cat_id`);
ALTER TABLE `books` ADD FULLTEXT KEY `description` (`description`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_users1_idx` (`user_id`);

--
-- Indexes for table `orders_details`
--
ALTER TABLE `orders_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_orders_has_books_books1_idx` (`book_id`),
  ADD KEY `fk_orders_has_books_orders1_idx` (`order_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addresses`
--
ALTER TABLE `addresses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `books`
--
ALTER TABLE `books`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=54;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- AUTO_INCREMENT for table `orders_details`
--
ALTER TABLE `orders_details`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=197;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `addresses`
--
ALTER TABLE `addresses`
  ADD CONSTRAINT `fk_addresses_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `books`
--
ALTER TABLE `books`
  ADD CONSTRAINT `books_ibfk_1` FOREIGN KEY (`cat_id`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `orders_details`
--
ALTER TABLE `orders_details`
  ADD CONSTRAINT `fk_orders_has_books_books1` FOREIGN KEY (`book_id`) REFERENCES `books` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_orders_has_books_orders1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
