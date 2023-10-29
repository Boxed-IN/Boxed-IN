/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("movies").del();
  await knex("movies").insert([
    {
      title: "The Godfather",
      genre: "Drama",
      language: "English",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      year: 1972,
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      language: "English",
      overview:
        "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      year: 1994,
    },
    {
      title: "The Godfather Part II",
      genre: "Drama",
      language: "English",
      overview:
        "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      year: 1974,
    },
    {
      title: "Schindler's List",
      genre: "Drama",
      language: "English",
      overview:
        "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      year: 1993,
    },
    {
      title: "Dilwale Dulhania Le Jayenge",
      genre: "Comedy",
      language: "Hindi",
      overview:
        "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
      year: 1995,
    },
    {
      title: "12 Angry Men",
      genre: "Drama",
      language: "English",
      overview:
        "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
      year: 1957,
    },
    {
      title: "Spirited Away",
      genre: "Animation",
      language: "Japanese",
      overview:
        "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      year: 2001,
    },
    {
      title: "Parasite",
      genre: "Comedy",
      language: "Korean",
      overview:
        "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      year: 2019,
    },
    {
      title: "Your Name.",
      genre: "Romance",
      language: "Japanese",
      overview:
        "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//q719jXXEzOoYaps6babgKnONONX.jpg",
      year: 2016,
    },
    {
      title: "The Dark Knight",
      genre: "Drama",
      language: "English",
      overview:
        "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      year: 2008,
    },
    {
      title: "The Green Mile",
      genre: "Fantasy",
      language: "English",
      overview:
        "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
      year: 1999,
    },
    {
      title: "Pulp Fiction",
      genre: "Thriller",
      language: "English",
      overview:
        "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      year: 1994,
    },
    {
      title: "Forrest Gump",
      genre: "Comedy",
      language: "English",
      overview:
        "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
      year: 1994,
    },
    {
      title: "The Lord of the Rings: The Return of the King",
      genre: "Adventure",
      language: "English",
      overview:
        "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      year: 2003,
    },
    {
      title: "The Good, the Bad and the Ugly",
      genre: "Western",
      language: "Italian",
      overview:
        "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      year: 1966,
    },
    {
      title: "GoodFellas",
      genre: "Drama",
      language: "English",
      overview:
        "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
      year: 1990,
    },
    {
      title: "Grave of the Fireflies",
      genre: "Animation",
      language: "Japanese",
      overview:
        "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
      year: 1988,
    },
    {
      title: "Life Is Beautiful",
      genre: "Comedy",
      language: "Italian",
      overview:
        "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mfnkSeeVOBVheuyn2lo4tfmOPQb.jpg",
      year: 1997,
    },
    {
      title: "Seven Samurai",
      genre: "Action",
      language: "Japanese",
      overview:
        "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iAq0sq42vKTLneVGqHn1D4GzgrM.jpg",
      year: 1954,
    },
    {
      title: "Cinema Paradiso",
      genre: "Drama",
      language: "Italian",
      overview:
        "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
      year: 1988,
    },
    {
      title: "Gabriel's Inferno",
      genre: "Romance",
      language: "English",
      overview:
        "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
      year: 2020,
    },
    {
      title: "Fight Club",
      genre: "Drama",
      language: "English",
      overview:
        'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      year: 1999,
    },
    {
      title: "Psycho",
      genre: "Horror",
      language: "English",
      overview:
        "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
      year: 1960,
    },
    {
      title: "City of God",
      genre: "Drama",
      language: "Portuguese",
      overview:
        "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
      year: 2002,
    },
    {
      title: "Spider-Man: Across the Spider-Verse",
      genre: "Animation",
      language: "English",
      overview:
        "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
      year: 2023,
    },
    {
      title: "Once Upon a Time in America",
      genre: "Drama",
      language: "English",
      overview:
        "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//i0enkzsL5dPeneWnjl1fCWm6L7k.jpg",
      year: 1984,
    },
    {
      title: "Gabriel's Inferno: Part II",
      genre: "Romance",
      language: "English",
      overview:
        "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
      year: 2020,
    },
    {
      title: "Impossible Things",
      genre: "Family",
      language: "Spanish",
      overview:
        "Matilde is a woman who, after the death of her husband - a man who constantly abused her - finds her new best friend in Miguel, her young, insecure, disoriented and even dealer neighbor",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//t2Ew8NZ8Ci2kqmoecZUNQUFDJnQ.jpg",
      year: 2021,
    },
    {
      title: "One Flew Over the Cuckoo's Nest",
      genre: "Drama",
      language: "English",
      overview:
        "A petty criminal fakes insanity to serve his sentence in a mental ward rather than prison. He soon finds himself as a leader to the other patients—and an enemy to the cruel, domineering nurse who runs the ward.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
      year: 1975,
    },
    {
      title: "Interstellar",
      genre: "Adventure",
      language: "English",
      overview:
        "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      year: 2014,
    },
    {
      title: "Dou kyu sei – Classmates",
      genre: "Romance",
      language: "Japanese",
      overview:
        "Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
      year: 2016,
    },
    {
      title: "Taylor Swift: Reputation Stadium Tour",
      genre: "Music",
      language: "English",
      overview:
        "Taylor Swift takes the stage in Dallas for the Reputation Stadium Tour and celebrates a monumental night of music, memories and visual magic.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//u6oXUTtOuJRPdUgUuPAVVJPSKCo.jpg",
      year: 2018,
    },
    {
      title: "The Legend of Hei",
      genre: "Animation",
      language: "Chinese",
      overview:
        "When cat spirit Luo Xiaohei's home is deforested by humans, he must find a new one. He runs into a group of other spirit creatures who take him under their wing with dreams of reconquering the land they say is rightfully theirs. However, they run into a human known as Wuxian who separates Luo Xiaohei from the other spirits and the two go on a journey, with the cat spirit learning to control his abilities as well as forming his own thoughts on whether or not he should ally with the spirits or the humans.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//4jfbKKLpqts3i2h2obkrONcjTg1.jpg",
      year: 2019,
    },
    {
      title: "Gabriel's Inferno: Part III",
      genre: "Romance",
      language: "English",
      overview:
        "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
      year: 2020,
    },
    {
      title: "Howl's Moving Castle",
      genre: "Fantasy",
      language: "Japanese",
      overview:
        "Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6pZgH10jhpToPcf0uvyTCPFhWpI.jpg",
      year: 2004,
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      genre: "Action",
      language: "English",
      overview:
        'Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson "Kingpin" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
      year: 2018,
    },
    {
      title: "Harakiri",
      genre: "Action",
      language: "Japanese",
      overview:
        "Down-on-his-luck veteran Tsugumo Hanshirō enters the courtyard of the prosperous House of Iyi. Unemployed, and with no family, he hopes to find a place to commit seppuku—and a worthy second to deliver the coup de grâce in his suicide ritual. The senior counselor for the Iyi clan questions the ronin’s resolve and integrity, suspecting Hanshirō of seeking charity rather than an honorable end. What follows is a pair of interlocking stories which lay bare the difference between honor and respect, and promises to examine the legendary foundations of the Samurai code.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//w7pWcLaYQkbtRUn99K6ome0DblL.jpg",
      year: 1962,
    },
    {
      title: "The Lord of the Rings: The Fellowship of the Ring",
      genre: "Adventure",
      language: "English",
      overview:
        "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
      year: 2001,
    },
    {
      title: "A Silent Voice: The Movie",
      genre: "Animation",
      language: "Japanese",
      overview:
        "Shouya Ishida starts bullying the new girl in class, Shouko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on Shouya for his lack of compassion. When they leave elementary school, Shouko and Shouya do not speak to each other again... until an older, wiser Shouya, tormented by his past behaviour, decides he must see Shouko once more. He wants to atone for his sins, but is it already too late...?",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg",
      year: 2016,
    },
    {
      title: "A Dog's Will",
      genre: "Comedy",
      language: "Portuguese",
      overview:
        "The lively João Grilo and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small in Northeastern Brazil. When they die, they have to be judged by Christ, the Devil and the Virgin Mary before they are admitted to paradise.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//imcOp1kJsCsAFCoOtY5OnPrFbAf.jpg",
      year: 2000,
    },
    {
      title: "The Boy, the Mole, the Fox and the Horse",
      genre: "Animation",
      language: "English",
      overview:
        "The unlikely friendship of a boy, a mole, a fox and a horse traveling together in the boy’s search for home.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg",
      year: 2022,
    },
    {
      title: "The Empire Strikes Back",
      genre: "Adventure",
      language: "English",
      overview:
        "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
      year: 1980,
    },
    {
      title: "The Lord of the Rings: The Two Towers",
      genre: "Adventure",
      language: "English",
      overview:
        "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
      year: 2002,
    },
    {
      title: "The Pianist",
      genre: "Drama",
      language: "English",
      overview:
        "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
      year: 2002,
    },
    {
      title: "Whiplash",
      genre: "Drama",
      language: "English",
      overview:
        "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7fn624j5lj3xTme2SgiLCeuedmO.jpg",
      year: 2014,
    },
    {
      title: "Hope",
      genre: "Drama",
      language: "Korean",
      overview:
        "After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//x9yjkm9gIz5qI5fJMUTfBnWiB2o.jpg",
      year: 2013,
    },
    {
      title: "Hotarubi no Mori e",
      genre: "Romance",
      language: "Japanese",
      overview:
        "One hot summer day a little girl gets lost in an enchanted forest of the mountain god where spirits reside. A young boy appears before her, but she cannot touch him for fear of making him disappear. And so a wondrous adventure awaits...",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mDqzHV8UXWWNpZkoAbKmKX1ZxEE.jpg",
      year: 2011,
    },
    {
      title: "Se7en",
      genre: "Crime",
      language: "English",
      overview:
        'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6yoghtyTpznpBik8EngEmJskVUO.jpg",
      year: 1995,
    },
    {
      title: "Inception",
      genre: "Action",
      language: "English",
      overview:
        "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
      year: 2010,
    },
    {
      title: "The Quintessential Quintuplets Movie",
      genre: "Animation",
      language: "Japanese",
      overview:
        "When five lovely young girls who hate studying hire part-time tutor Futaro, he guides not only their education but also their hearts. Time spent has brought them all closer, with feelings growing within the girls and Futaro. As they finish their third year of high school and their last school festival approaches, they set their sights on what’s next. Is there a future with one of them and Futaro?",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//sg7klpt1xwK1IJirBI9EHaqQwJ5.jpg",
      year: 2022,
    },
    {
      title: "Rear Window",
      genre: "Thriller",
      language: "English",
      overview:
        "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
      year: 1954,
    },
    {
      title: "Josee, the Tiger and the Fish",
      genre: "Animation",
      language: "Japanese",
      overview:
        "With dreams of diving abroad, Tsuneo gets a job assisting Josee, an artist whose imagination takes her far beyond her wheelchair. But when the tide turns against them, they push each other to places they never thought possible, and inspire a love fit for a storybook.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//xAbSLi61npWyVs5M0yxin3dKcGO.jpg",
      year: 2020,
    },
    {
      title: "American History X",
      genre: "Drama",
      language: "English",
      overview:
        "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//euypWkaYFOLW3e5rLIcTAjWnhhT.jpg",
      year: 1998,
    },
    {
      title: "The Silence of the Lambs",
      genre: "Crime",
      language: "English",
      overview:
        "Clarice Starling is a top student at the FBI's training academy.  Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism.  Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
      year: 1991,
    },
    {
      title: "Princess Mononoke",
      genre: "Adventure",
      language: "Japanese",
      overview:
        "Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//cMYCDADoLKLbB83g4WnJegaZimC.jpg",
      year: 1997,
    },
    {
      title: "Neon Genesis Evangelion: The End of Evangelion",
      genre: "Animation",
      language: "Japanese",
      overview:
        "The second of two theatrically released follow-ups to the Neon Genesis Evangelion series. Comprising of two alternate episodes which were first intended to take the place of episodes 25 and 26, this finale answers many of the questions surrounding the series, while also opening up some new possibilities.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//j6G24dqI4WgUtChhWjfnI4lnmiK.jpg",
      year: 1997,
    },
    {
      title: "Sunset Boulevard",
      genre: "Drama",
      language: "English",
      overview:
        "A hack screenwriter writes a screenplay for a former silent film star who has faded into Hollywood obscurity.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//sC4Dpmn87oz9AuxZ15Lmip0Ftgr.jpg",
      year: 1950,
    },
    {
      title: "Violet Evergarden: The Movie",
      genre: "Animation",
      language: "Japanese",
      overview:
        "As the world moves on from the war and technological advances bring changes to her life, Violet still hopes to see her lost commanding officer again.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fwSonK8WrAEqWY7sqjvGRCgzIij.jpg",
      year: 2020,
    },
    {
      title: "The Great Dictator",
      genre: "Comedy",
      language: "English",
      overview:
        "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//1QpO9wo7JWecZ4NiBuu625FiY1j.jpg",
      year: 1940,
    },
    {
      title: "Ikiru",
      genre: "Drama",
      language: "Japanese",
      overview:
        "Kanji Watanabe is a middle-aged man who has worked in the same monotonous bureaucratic position for decades. Learning he has cancer, he starts to look for the meaning of his life.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dgNTS4EQDDVfkzJI5msKuHu2Ei3.jpg",
      year: 1952,
    },
    {
      title: "High and Low",
      genre: "Crime",
      language: "Japanese",
      overview:
        "A shoe company executive who has mortgaged everything he has becomes a victim of extortion when his chauffeur's son is kidnapped and is conflicted over whether he should pay the ransom.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//tgNjemQPG96uIezpiUiXFcer5ga.jpg",
      year: 1963,
    },
    {
      title: "Dedicated to my ex",
      genre: "Drama",
      language: "Spanish",
      overview:
        "The film tells the story of Ariel, a 21-year-old who decides to form a rock band to compete for a prize of ten thousand dollars in a musical band contest, this as a last option when trying to get money to save their relationship and reunite with his ex-girlfriend, which breaks due to the trip she must make to Finland for an internship. Ariel with her friend Ortega, decides to make a casting to find the other members of the band, although they do not know nothing about music, thus forming a band with members that have diverse and opposite personalities.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//xc4bTXVwYNXi10jG9dwcaYt5IpU.jpg",
      year: 2019,
    },
    {
      title: "Léon: The Professional",
      genre: "Crime",
      language: "English",
      overview:
        "Léon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//yI6X2cCM5YPJtxMhUd3dPGqDAhw.jpg",
      year: 1994,
    },
    {
      title: "Dead Poets Society",
      genre: "Drama",
      language: "English",
      overview:
        "At an elite, old-fashioned boarding school in New England, a passionate English teacher inspires his students to rebel against convention and seize the potential of every day, courting the disdain of the stern headmaster.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//azrIJJfdEL3UQhBmWhFe2b7bSCX.jpg",
      year: 1989,
    },
    {
      title: "Back to the Future",
      genre: "Adventure",
      language: "English",
      overview:
        "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
      year: 1985,
    },
    {
      title: "Le Trou",
      genre: "Drama",
      language: "French",
      overview:
        "Four prison inmates have been hatching a plan to literally dig out of jail when another prisoner, Claude Gaspard, is moved into their cell. They take a risk and share their plan with the newcomer. Over the course of three days, the prisoners and friends break through the concrete floor using a bed post and begin to make their way through the sewer system -- yet their escape is anything but assured.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//nsVjgNxWTkaFCMuBLhiLHkcoTnt.jpg",
      year: 1960,
    },
    {
      title: "Come and See",
      genre: "Drama",
      language: "Russian",
      overview:
        "The invasion of a village in Byelorussia by German forces sends young Florya into the forest to join the weary Resistance fighters, against his family's wishes. There he meets a girl, Glasha, who accompanies him back to his village. On returning home, Florya finds his family and fellow peasants massacred. His continued survival amidst the brutal debris of war becomes increasingly nightmarish, a battle between despair and hope.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//qNbMsKVzigERgJUbwf8pKyZogpb.jpg",
      year: 1985,
    },
    {
      title: "City Lights",
      genre: "Comedy",
      language: "English",
      overview:
        "In this sound-era silent film, a tramp falls in love with a beautiful blind flower seller.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bXNvzjULc9jrOVhGfjcc64uKZmZ.jpg",
      year: 1931,
    },
    {
      title: "Clouds",
      genre: "Music",
      language: "English",
      overview:
        "Young musician Zach Sobiech discovers his cancer has spread, leaving him just a few months to live. With limited time, he follows his dream and makes an album, unaware that it will soon be a viral music phenomenon.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//d0OdD1I8qAfETvE9Rp9Voq7R8LR.jpg",
      year: 2020,
    },
    {
      title: "Perfect Blue",
      genre: "Animation",
      language: "Japanese",
      overview:
        "Pop singer Mima Kirigow looks forward to a bright new career when she quits her chart-topping trio to become an actress. When she lands a role in a sexually charged murder mystery, Mima’s life begins to fall apart.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bee6ZQVaSAUhlBinsP9In8x8vO1.jpg",
      year: 1998,
    },
    {
      title: "Modern Times",
      genre: "Comedy",
      language: "English",
      overview:
        "The Tramp struggles to live in modern industrial society with the help of a young homeless woman.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7uoiKOEjxBBW0AgDGQWrlfGQ90w.jpg",
      year: 1936,
    },
    {
      title: "Life in a Year",
      genre: "Drama",
      language: "English",
      overview:
        "A 17 year old finds out that his girlfriend is dying, so he sets out to give her an entire life, in the last year she has left.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bP7u19opmHXYeTCUwGjlLldmUMc.jpg",
      year: 2020,
    },
    {
      title: "Once Upon a Time in the West",
      genre: "Drama",
      language: "Italian",
      overview:
        "As the railroad builders advance unstoppably through the Arizona desert on their way to the sea, Jill arrives in the small town of Flagstone with the intention of starting a new life.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//qbYgqOczabWNn2XKwgMtVrntD6P.jpg",
      year: 1968,
    },
    {
      title: "Evangelion: 3.0+1.0 Thrice Upon a Time",
      genre: "Animation",
      language: "Japanese",
      overview:
        "In the aftermath of the Fourth Impact, stranded without their Evangelions, Shinji, Asuka and Rei find refuge in one of the rare pockets of humanity that still exist on the ruined planet Earth. There, each lives a life far different from their days as an Evangelion pilot. However, the danger to the world is far from over. A new impact is looming on the horizon—one that will prove to be the true end of Evangelion.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//md5wZRRj8biHrGtyitgBZo7674t.jpg",
      year: 2021,
    },
    {
      title: "Apocalypse Now",
      genre: "Drama",
      language: "English",
      overview:
        'At the height of the Vietnam war, Captain Benjamin Willard is sent on a dangerous mission that, officially, "does not exist, nor will it ever exist." His goal is to locate - and eliminate - a mysterious Green Beret Colonel named Walter Kurtz, who has been leading his personal army on illegal guerrilla missions into enemy territory.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gQB8Y5RCMkv2zwzFHbUJX3kAhvA.jpg",
      year: 1979,
    },
    {
      title: "Five Feet Apart",
      genre: "Romance",
      language: "English",
      overview:
        "Seventeen-year-old Stella spends most of her time in the hospital as a cystic fibrosis patient. Her life is full of routines, boundaries and self-control — all of which get put to the test when she meets Will, an impossibly charming teen who has the same illness. There's an instant flirtation, though restrictions dictate that they must maintain a safe distance between them. As their connection intensifies, so does the temptation to throw the rules out the window and embrace that attraction.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//kreTuJBkUjVWePRfhHZuYfhNE1T.jpg",
      year: 2019,
    },
    {
      title: "Paths of Glory",
      genre: "Drama",
      language: "English",
      overview:
        "A commanding officer defends three scapegoats on trial for a failed offensive that occurred within the French Army in 1916.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//l2IY0gOHHmCWM90LjteFssxIV1G.jpg",
      year: 1957,
    },
    {
      title: "Miracle in Cell No. 7",
      genre: "Drama",
      language: "Turkish",
      overview:
        "Separated from his daughter, a father with an intellectual disability must prove his innocence when he is jailed for the death of a commander's child.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bOth4QmNyEkalwahfPCfiXjNh1r.jpg",
      year: 2019,
    },
    {
      title: "Given",
      genre: "Animation",
      language: "Japanese",
      overview:
        "The relationship between a band's bassist, their drummer, and the drummer’s roommate and ex-boyfriend, who is a professional violinist.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//3trPz7muDOv4AHjDZiD3MLGls2Q.jpg",
      year: 2020,
    },
    {
      title: "The Intouchables",
      genre: "Drama",
      language: "French",
      overview:
        "A true story of two men who should never have met – a quadriplegic aristocrat who was injured in a paragliding accident and a young man from the projects.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//323BP0itpxTsO0skTwdnVmf7YC9.jpg",
      year: 2011,
    },
    {
      title: "Woman in the Dunes",
      genre: "Drama",
      language: "Japanese",
      overview:
        "An entomologist suffers extreme psychological and sexual torture after being taken captive by the residents of a poor seaside village.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//f0JpsMQ9oEjKBD66Ky3qK3z7LGT.jpg",
      year: 1964,
    },
    {
      title: "Oldboy",
      genre: "Drama",
      language: "Korean",
      overview:
        "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate businessman seeks revenge on his captors.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//pWDtjs568ZfOTMbURQBYuT4Qxka.jpg",
      year: 2003,
    },
    {
      title: "The Shop Around the Corner",
      genre: "Comedy",
      language: "English",
      overview:
        "Two employees at a gift shop can barely stand one another, without realising that they are falling in love through the post as each other's anonymous pen pal.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dZ1aEzGYRiqJwPfjS6VL7wUkHmF.jpg",
      year: 1940,
    },
    {
      title: "I Want to Eat Your Pancreas",
      genre: "Animation",
      language: "Japanese",
      overview:
        "After his classmate and crush is diagnosed with a pancreatic disease, an average high schooler sets out to make the most of her final days.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//qpV8kvRfAntV7D4aOOsLIz7OdPc.jpg",
      year: 2018,
    },
    {
      title: "The Legend of 1900",
      genre: "Drama",
      language: "Italian",
      overview:
        "The story of a virtuoso piano player who lives his entire life aboard an ocean liner. Born and raised on the ship, 1900 (Tim Roth) learned about the outside world through interactions with passengers, never setting foot on land, even for the love of his life. Years later, the ship may be destroyed, and a former band member fears that 1900 may still be aboard, willing to go down with the ship.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iOcbJ5pxokOPDRgieVDbsFMrCc6.jpg",
      year: 1998,
    },
    {
      title: "Avengers: Endgame",
      genre: "Adventure",
      language: "English",
      overview:
        "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//or06FN3Dka5tukK1e9sl16pB3iy.jpg",
      year: 2019,
    },
    {
      title: "Puss in Boots: The Last Wish",
      genre: "Adventure",
      language: "English",
      overview:
        "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
      year: 2022,
    },
    {
      title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
      genre: "Action",
      language: "Japanese",
      overview:
        "Tanjiro Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyojuro Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//h8Rb9gBr48ODIwYUttZNYeMWeUU.jpg",
      year: 2020,
    },
    {
      title: "Justice League Dark: Apokolips War",
      genre: "Animation",
      language: "English",
      overview:
        "Earth is decimated after intergalactic tyrant Darkseid has devastated the Justice League in a poorly executed war by the DC Super Heroes. Now the remaining bastions of good – the Justice League, Teen Titans, Suicide Squad and assorted others – must regroup, strategize and take the war to Darkseid in order to save the planet and its surviving inhabitants.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//c01Y4suApJ1Wic2xLmaq1QYcfoZ.jpg",
      year: 2020,
    },
    {
      title: "We All Loved Each Other So Much",
      genre: "Drama",
      language: "Italian",
      overview:
        "Three partisans bound by a strong friendship return home after the war, but the clash with everyday reality puts a strain on their bond.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zGGWYpiKNwjpKxelPxOMqJnUgDs.jpg",
      year: 1974,
    },
    {
      title: "It's a Wonderful Life",
      genre: "Drama",
      language: "English",
      overview:
        "A holiday favourite for generations...  George Bailey has spent his entire life giving to the people of Bedford Falls.  All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company.  But on Christmas Eve the business's $8,000 is lost and George's troubles begin.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mV3VcmMJN6Zwahj42dy9WwPUyRI.jpg",
      year: 1946,
    },
    {
      title: "20th Century Girl",
      genre: "Romance",
      language: "Korean",
      overview:
        "Yeon-du asks her best friend Bora to collect all the information she can about Baek Hyun-jin while she is away in the U.S. for heart surgery. Bora decides to get close to Baek's best friend, Pung Woon-ho first. However, Bora's clumsy plan unfolds in an unexpected direction. In 1999, a year before the new century, Bora, who turns seventeen, falls into the fever of first love.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//od22ftNnyag0TTxcnJhlsu3aLoU.jpg",
      year: 2022,
    },
    {
      title: "The Lion King",
      genre: "Family",
      language: "English",
      overview:
        "A young lion prince is cast out of his pride by his cruel uncle, who claims he killed his father. While the uncle rules with an iron paw, the prince grows up beyond the Savannah, living by a philosophy: No worries for the rest of your days. But when his past comes to haunt him, the young prince must decide his fate: Will he remain an outcast or face his demons and become what he needs to be?",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
      year: 1994,
    },
    {
      title: "Top Gun: Maverick",
      genre: "Action",
      language: "English",
      overview:
        "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
      year: 2022,
    },
    {
      title: "Avengers: Infinity War",
      genre: "Adventure",
      language: "English",
      overview:
        "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
      year: 2018,
    },
    {
      title: "Mommy",
      genre: "Drama",
      language: "French",
      overview:
        "A peculiar neighbor offers hope to a recent widow who is struggling to raise a teenager who is unpredictable and, sometimes, violent.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//u5jbTMqze9U2nEhfFJmtDXxc89m.jpg",
      year: 2014,
    },
    {
      title: "Steven Universe: The Movie",
      genre: "TV Movie",
      language: "English",
      overview:
        "Two years after bringing peace to the galaxy, Steven Universe sees his past come back to haunt him in the form of a deranged Gem who wants to destroy the Earth.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8mRgpubxHqnqvENK4Bei30xMDvy.jpg",
      year: 2019,
    },
    {
      title: "Oppenheimer",
      genre: "Drama",
      language: "English",
      overview:
        "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      year: 2023,
    },
    {
      title: "Klaus",
      genre: "Animation",
      language: "English",
      overview:
        "When Jesper distinguishes himself as the Postal Academy's worst student, he is sent to Smeerensburg, a small village located on an icy island above the Arctic Circle, where grumpy inhabitants barely exchange words, let alone letters. Jesper is about to give up and abandon his duty as a postman when he meets local teacher Alva and Klaus, a mysterious carpenter who lives alone in a cabin full of handmade toys.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//q125RHUDgR4gjwh1QkfYuJLYkL.jpg",
      year: 2019,
    },
    {
      title: "The Handmaiden",
      genre: "Thriller",
      language: "Korean",
      overview:
        "In 1930s Korea, a swindler and a young woman pose as a Japanese count and a handmaiden to seduce a Japanese heiress and steal her fortune.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8MnMGO3oALkaiavehLmsKwvBU8S.jpg",
      year: 2016,
    },
    {
      title: "Green Book",
      genre: "Drama",
      language: "English",
      overview:
        "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
      year: 2018,
    },
    {
      title: "Wolfwalkers",
      genre: "Animation",
      language: "English",
      overview:
        "In a time of superstition and magic, when wolves are seen as demonic and nature an evil to be tamed, a young apprentice hunter comes to Ireland with her father to wipe out the last pack. But when she saves a wild native girl, their friendship leads her to discover the world of the Wolfwalkers and transform her into the very thing her father is tasked to destroy.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ehAKuE48okTuonq6TpsNQj8vFTC.jpg",
      year: 2020,
    },
    {
      title: "Rascal Does Not Dream of a Dreaming Girl",
      genre: "Animation",
      language: "Japanese",
      overview:
        "In Fujisawa, Sakuta Azusagawa is in his second year of high school. Blissful days with his girlfriend and upperclassman, Mai Sakurajima, are interrupted by the appearance of his first crush, Shoko Makinohara.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//us6n29UQVgPENtIbghAcle21jTI.jpg",
      year: 2019,
    },
    {
      title: "Wolf Children",
      genre: "Animation",
      language: "Japanese",
      overview:
        "After her werewolf lover unexpectedly dies in an accident, a woman must find a way to raise the son and daughter that she had with him. However, their inheritance of their father's traits prove to be a challenge for her.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//nqqovhsvsWbsb7LcGaIGDRZrwgB.jpg",
      year: 2012,
    },
    {
      title: "Il Sorpasso",
      genre: "Drama",
      language: "Italian",
      overview:
        "Roberto, a shy law student in Rome, meets Bruno, a forty-year-old exuberant, capricious man, who takes him for a drive through the Roman and Tuscany countries in the summer. When their journey starts to blend into their daily lives though, the pair’s newfound friendship is tested.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//4h1ckrJQVcQYjeOkqS8i9BqZ9MI.jpg",
      year: 1962,
    },
    {
      title: "Persona",
      genre: "Drama",
      language: "Swedish",
      overview:
        "A young nurse, Alma, is put in charge of Elisabeth Vogler: an actress who is seemingly healthy in all respects, but will not talk. As they spend time together, Alma speaks to Elisabeth constantly, never receiving any answer. The time they spend together only strengthens the crushing realization that one does not exist.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bdXbfUir63TQHA5NTNcXPICZCW8.jpg",
      year: 1966,
    },
    {
      title: "The Apartment",
      genre: "Comedy",
      language: "English",
      overview:
        "Bud Baxter is a minor clerk in a huge New York insurance company, until he discovers a quick way to climb the corporate ladder. He lends out his apartment to the executives as a place to take their mistresses. Although he often has to deal with the aftermath of their visits, one night he's left with a major problem to solve.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//hhSRt1KKfRT0yEhEtRW3qp31JFU.jpg",
      year: 1960,
    },
    {
      title: "Maquia: When the Promised Flower Blooms",
      genre: "Animation",
      language: "Japanese",
      overview:
        "Maquia is a member of a special race called the Iorph who can live for hundreds of years. However, Maquia has always felt lonely despite being surrounded by her people, as she was orphaned from a young age. She daydreams about the outside world, but dares not travel from her home due to the warnings of the clan's chief.  One day the kingdom of Mezarte invades her homeland. They already have what is left of the giant dragons, the Renato, under their control, and now their king wishes to add the immortality to his bloodline.  They ravage the Iorph homeland and kill most of its inhabitants. Caught in the midst of the attack, Maquia is carried off by one of the Renato. It soon dies, and she is left deserted in a forest, now truly alone save for the cries of a single baby off in the distance. Maquia finds the baby in a destroyed village and decides to raise him as her own, naming him Ariel. Although she knows nothing of the human world, how to raise a child that ages much faster than her.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//hL3NqRE2ccR4Y2sYSJTrmalRjrz.jpg",
      year: 2018,
    },
    {
      title: "Coco",
      genre: "Family",
      language: "English",
      overview:
        "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      year: 2017,
    },
    {
      title: "The Shining",
      genre: "Horror",
      language: "English",
      overview:
        "Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter. But they aren't prepared for the madness that lurks within.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//xazWoLealQwEgqZ89MLZklLZD3k.jpg",
      year: 1980,
    },
    {
      title: "BTS World Tour: Love Yourself in Seoul",
      genre: "Music",
      language: "Korean",
      overview:
        "Shot at the Olympic Stadium in Seoul during the BTS World Tour ‘Love Yourself’ to celebrate the seven members of the global boyband and their unprecedented international phenomenon.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//1u0rtWPgYfAWmqveXOsQDvMRODD.jpg",
      year: 2019,
    },
    {
      title: "Witness for the Prosecution",
      genre: "Drama",
      language: "English",
      overview:
        "When Leonard Vole is arrested for the sensational murder of a rich, middle-aged widow, the famous Sir Wilfrid Robarts agrees to appear on his behalf. Sir Wilfrid, recovering from a near-fatal heart attack, is supposed to be on a diet of bland, civil suits—but the lure of the criminal courts is too much for him, especially when the case is so difficult.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mM5Cad2ESBprh6ucPnMzMfI34Cu.jpg",
      year: 1957,
    },
    {
      title: "Inglourious Basterds",
      genre: "Drama",
      language: "English",
      overview:
        'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
      year: 2009,
    },
    {
      title: "Hamilton",
      genre: "History",
      language: "English",
      overview:
        "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//h1B7tW0t399VDjAcWJh8m87469b.jpg",
      year: 2020,
    },
    {
      title: "Bicycle Thieves",
      genre: "Drama",
      language: "Italian",
      overview:
        "Unemployed Antonio is elated when he finally finds work hanging posters around war-torn Rome. However on his first day, his bicycle—essential to his work—gets stolen. His job is doomed unless he can find the thief. With the help of his son, Antonio combs the city, becoming desperate for justice.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iPdVqIpmR3bRvOQJPrn4pr2KR3q.jpg",
      year: 1948,
    },
    {
      title: "Violet Evergarden: Eternity and the Auto Memory Doll",
      genre: "Drama",
      language: "Japanese",
      overview:
        "Isabella, the daughter of the noble York family, is enrolled in an all-girls academy to be groomed into a dame worthy of nobility. However, she has given up on her future, seeing the prestigious school as nothing more than a prison from the outside world. Her family notices her struggling in her lessons and decides to hire Violet Evergarden to personally tutor her under the guise of a handmaiden.  At first, Isabella treats Violet coldly. Violet seems to be able to do everything perfectly, leading Isabella to assume that she was born with a silver spoon. After some time, Isabella begins to realize that Violet has had her own struggles and starts to open up to her. Isabella soon reveals that she has lost contact with her beloved younger sister, whom she yearns to see again.  Having experienced the power of words through her past clientele, Violet asks if Isabella wishes to write a letter to Taylor. Will Violet be able to help Isabella convey her feelings to her long-lost sister?",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zjaSw6Ok0MhXjrruPrA27VHyUYC.jpg",
      year: 2019,
    },
    {
      title: "A Clockwork Orange",
      genre: "Science Fiction",
      language: "English",
      overview:
        "In a near-future Britain, young Alexander DeLarge and his pals get their kicks beating and raping anyone they please. When not destroying the lives of others, Alex swoons to the music of Beethoven. The state, eager to crack down on juvenile crime, gives an incarcerated Alex the option to undergo an invasive procedure that'll rob him of all personal agency. In a time when conscience is a commodity, can Alex change his tune?",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//4sHeTAp65WrSSuc05nRBKddhBxO.jpg",
      year: 1971,
    },
    {
      title: "Saving Private Ryan",
      genre: "Drama",
      language: "English",
      overview:
        "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
      year: 1998,
    },
    {
      title: "Gladiator",
      genre: "Action",
      language: "English",
      overview:
        "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos.  Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor.  As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed.  He escapes, but is captured by slave traders.  Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      year: 2000,
    },
    {
      title: "The Matrix",
      genre: "Action",
      language: "English",
      overview:
        "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      year: 1999,
    },
    {
      title: "The Prestige",
      genre: "Drama",
      language: "English",
      overview:
        "A mysterious story of two magicians whose intense rivalry leads them on a life-long battle for supremacy -- full of obsession, deceit and jealousy with dangerous and deadly consequences.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
      year: 2006,
    },
    {
      title: "Star Wars",
      genre: "Adventure",
      language: "English",
      overview:
        "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
      year: 1977,
    },
    {
      title: "The Art of Racing in the Rain",
      genre: "Drama",
      language: "English",
      overview:
        "A family dog – with a near-human soul and a philosopher's mind – evaluates his life through the lessons learned by his human owner, a race-car driver.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mi5VN4ww0JZgRFJIaPxxTGKjUg7.jpg",
      year: 2019,
    },
    {
      title: "The Help",
      genre: "Drama",
      language: "English",
      overview:
        'Aibileen Clark is a middle-aged African-American maid who has spent her life raising white children and has recently lost her only son; Minny Jackson is an African-American maid who has often offended her employers despite her family\'s struggles with money and her desperate need for jobs; and Eugenia "Skeeter" Phelan is a young white woman who has recently moved back home after graduating college to find out her childhood maid has mysteriously disappeared. These three stories intertwine to explain how life in Jackson, Mississippi revolves around "the help"; yet they are always kept at a certain distance because of racial lines.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//3kmfoWWEc9Vtyuaf9v5VipRgdjx.jpg",
      year: 2011,
    },
    {
      title: "Shutter Island",
      genre: "Drama",
      language: "English",
      overview:
        "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by troubling visions and a mysterious doctor.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
      year: 2010,
    },
    {
      title: "The Seventh Seal",
      genre: "Fantasy",
      language: "Swedish",
      overview:
        "When disillusioned Swedish knight Antonius Block returns home from the Crusades to find his country in the grips of the Black Death, he challenges Death to a chess match for his life. Tormented by the belief that God does not exist, Block sets off on a journey, meeting up with traveling players Jof and his wife, Mia, and becoming determined to evade Death long enough to commit one redemptive act while he still lives.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//wcZ21zrOsy0b52AfAF50XpTiv75.jpg",
      year: 1957,
    },
    {
      title: "Out of the Clear Blue Sky",
      genre: "Comedy",
      language: "Spanish",
      overview:
        "Returning to Earth as an imitator, the legendary Mexican artist Pedro Infante must prove that he is no longer a womanizer to enter paradise.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//xg6QZdlHrq2dtSK8cfnQQMnmpeY.jpg",
      year: 2019,
    },
    {
      title: "The Usual Suspects",
      genre: "Drama",
      language: "English",
      overview:
        "Held in an L.A. interrogation room, Verbal Kint attempts to convince the feds that a mythic crime lord, Keyser Soze, not only exists, but was also responsible for drawing him and his four partners into a multi-million dollar heist that ended with an explosion in San Pedro harbor – leaving few survivors. Verbal lures his interrogators with an incredible story of the crime lord's almost supernatural prowess.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bUPmtQzrRhzqYySeiMpv7GurAfm.jpg",
      year: 1995,
    },
    {
      title: "Hacksaw Ridge",
      genre: "Drama",
      language: "English",
      overview:
        "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//jcStBvbQt78tPeId5hC7a9jcDOK.jpg",
      year: 2016,
    },
    {
      title: "Tokyo Story",
      genre: "Drama",
      language: "Japanese",
      overview:
        "The elderly Shukishi and his wife, Tomi, take the long journey from their small seaside village to visit their adult children in Tokyo. Their elder son, Koichi, a doctor, and their daughter, Shige, a hairdresser, don't have much time to spend with their aged parents, and so it falls to Noriko, the widow of their younger son who was killed in the war, to keep her in-laws company.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//g2YbTYKpY7N2yDSk7BfXZ18I5QV.jpg",
      year: 1953,
    },
    {
      title: "The Kid",
      genre: "Comedy",
      language: "English",
      overview:
        "A tramp cares for a boy after he's abandoned as a newborn by his mother. Later the mother has a change of heart and aches to be reunited with her son.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//drgMcyTsySQBnUPGaBThCHGdlWT.jpg",
      year: 1921,
    },
    {
      title: "Memento",
      genre: "Mystery",
      language: "English",
      overview:
        "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//yuNs09hvpHVU1cBTCAk9zxsL2oW.jpg",
      year: 2000,
    },
    {
      title: "Flamin' Hot",
      genre: "Comedy",
      language: "English",
      overview:
        "The inspiring true story of Richard Montañez, the Frito Lay janitor who channeled his Mexican American heritage and upbringing to turn the iconic Flamin’ Hot Cheetos into a snack that disrupted the food industry and became a global pop culture phenomenon.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//a7KyFMPXj0iY4EoLq1PIGU1WJPw.jpg",
      year: 2023,
    },
    {
      title: "Investigation of a Citizen Above Suspicion",
      genre: "Drama",
      language: "Italian",
      overview:
        "Rome, Italy. After committing a heinous crime, a senior police officer exposes evidence incriminating him because his moral commitment prevents him from circumventing the law and the social order it protects.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//vPTZwlq1IC4o1DCsEZEl2uGljzm.jpg",
      year: 1970,
    },
    {
      title: "Zack Snyder's Justice League",
      genre: "Action",
      language: "English",
      overview:
        "Determined to ensure Superman's ultimate sacrifice was not in vain, Bruce Wayne aligns forces with Diana Prince with plans to recruit a team of metahumans to protect the world from an approaching threat of catastrophic proportions.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
      year: 2021,
    },
    {
      title: "Better Days",
      genre: "Drama",
      language: "Chinese",
      overview:
        "A bullied teenage girl forms an unlikely friendship with a mysterious young man who protects her from her assailants, while she copes with the pressures of her final examinations.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//csVZ2ZQCj98XdZoCuW1aixMYJ0W.jpg",
      year: 2019,
    },
    {
      title: "Stalker",
      genre: "Science Fiction",
      language: "Russian",
      overview:
        "Near a gray and unnamed city is the Zone, a place guarded by barbed wire and soldiers, and where the normal laws of physics are victim to frequent anomalies. A stalker guides two men into the Zone, specifically to an area in which deep-seated desires are granted.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//rem87AyEochEuhn9VvAGoMQpigz.jpg",
      year: 1979,
    },
    {
      title: "Scenes from a Marriage",
      genre: "Drama",
      language: "Swedish",
      overview:
        "Johan and Marianne are married and seem to have it all. Their happiness, however, is a façade for a troubled relationship, which becomes even rockier when Johan admits that he's having an affair. Before long, the spouses separate and move towards finalizing their divorce, but they make attempts at reconciling. Even as they pursue other relationships, Johan and Marianne realize that they have a significant bond, but also many issues that hinder that connection.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ArKEdvJesIktFX8OAhcdKAOLl6I.jpg",
      year: 1974,
    },
    {
      title: "Red, White & Royal Blue",
      genre: "Comedy",
      language: "English",
      overview:
        "After an altercation between Alex, the president's son, and Britain's Prince Henry at a royal event becomes tabloid fodder, their long-running feud now threatens to drive a wedge in U.S./British relations. When the rivals are forced into a staged truce, their icy relationship begins to thaw and the friction between them sparks something deeper than they ever expected.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//uffOY4W354o9RTRmercFyVvl56Z.jpg",
      year: 2023,
    },
    {
      title: "My Hero Academia: Heroes Rising",
      genre: "Animation",
      language: "Japanese",
      overview:
        "Class 1-A visits Nabu Island where they finally get to do some real hero work. The place is so peaceful that it's more like a vacation … until they're attacked by a villain with an unfathomable Quirk! His power is eerily familiar, and it looks like Shigaraki had a hand in the plan. But with All Might retired and citizens' lives on the line, there's no time for questions. Deku and his friends are the next generation of heroes, and they're the island's only hope.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zGVbrulkupqpbwgiNedkJPyQum4.jpg",
      year: 2019,
    },
    {
      title: "Jujutsu Kaisen 0",
      genre: "Animation",
      language: "Japanese",
      overview:
        "Yuta Okkotsu is a nervous high school student who is suffering from a serious problem—his childhood friend Rika has turned into a curse and won't leave him alone. Since Rika is no ordinary curse, his plight is noticed by Satoru Gojo, a teacher at Jujutsu High, a school where fledgling exorcists learn how to combat curses. Gojo convinces Yuta to enroll, but can he learn enough in time to confront the curse that haunts him?",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//23oJaeBh0FDk2mQ2P240PU9Xxfh.jpg",
      year: 2021,
    },
    {
      title: "Guillermo del Toro's Pinocchio",
      genre: "Animation",
      language: "English",
      overview:
        "During the rise of fascism in Mussolini's Italy, a wooden boy brought magically to life struggles to live up to his father's expectations.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//vx1u0uwxdlhV2MUzj4VlcMB0N6m.jpg",
      year: 2022,
    },
    {
      title: "Togo",
      genre: "Adventure",
      language: "English",
      overview:
        "The untold true story set in the winter of 1925 that takes you across the treacherous terrain of the Alaskan tundra for an exhilarating and uplifting adventure that will test the strength, courage and determination of one man, Leonhard Seppala, and his lead sled dog, Togo.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//921q4gPNN4J6UxvKaw6SCNBe3F8.jpg",
      year: 2019,
    },
    {
      title: "Capernaum",
      genre: "Drama",
      language: "Arabic",
      overview:
        "Zain, a 12-year-old boy scrambling to survive on the streets of Beirut, sues his parents for having brought him into such an unjust world, where being a refugee with no documents means that your rights can easily be denied.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mFnfTVADj8yOxwzprYOmTPselk8.jpg",
      year: 2018,
    },
    {
      title: "Vertigo",
      genre: "Mystery",
      language: "English",
      overview:
        "A retired San Francisco detective suffering from acrophobia investigates the strange activities of an old friend's wife, all the while becoming dangerously obsessed with her.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//15uOEfqBNTVtDUT7hGBVCka0rZz.jpg",
      year: 1958,
    },
    {
      title: "Doctor Who: The Day of the Doctor",
      genre: "Science Fiction",
      language: "English",
      overview:
        "In 2013, something terrible is awakening in London's National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion. All of reality is at stake as the Doctor's own dangerous past comes back to haunt him.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//yxLra5R61s5J4M5L3mqOY42K5md.jpg",
      year: 2013,
    },
    {
      title: "Django Unchained",
      genre: "Drama",
      language: "English",
      overview:
        "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
      year: 2012,
    },
    {
      title: "Portrait of a Lady on Fire",
      genre: "Drama",
      language: "French",
      overview:
        "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//2LquGwEhbg3soxSCs9VNyh5VJd9.jpg",
      year: 2019,
    },
    {
      title: "Miraculous World: New York, United HeroeZ",
      genre: "Animation",
      language: "French",
      overview:
        "Teen Parisian superheroes Ladybug and Chat Noir visit New York on a field trip and discover that superheroes exist in the United States too.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//9YbyvcrHmY2SVbdfXpb8mC4Fy0g.jpg",
      year: 2020,
    },
    {
      title: "The Departed",
      genre: "Drama",
      language: "English",
      overview:
        "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//nT97ifVT2J1yMQmeq20Qblg61T.jpg",
      year: 2006,
    },
    {
      title: "Casablanca",
      genre: "Drama",
      language: "English",
      overview:
        "In Casablanca, Morocco in December 1941, a cynical American expatriate meets a former lover, with unforeseen complications.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5K7cOHoay2mZusSLezBOY0Qxh8a.jpg",
      year: 1943,
    },
    {
      title: "My Mom Is a Character 3",
      genre: "Comedy",
      language: "Portuguese",
      overview:
        "Dona Hermínia will have to rediscover and reinvent herself because her children are forming new families. This supermom will have to deal with a new life scenario: Marcelina is pregnant and Juliano is getting married.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zw77BFPGJ73Lig8GwRzYj1XHq53.jpg",
      year: 2019,
    },
    {
      title: "Singin' in the Rain",
      genre: "Comedy",
      language: "English",
      overview:
        "In 1927 Hollywood, a silent film production company and cast make a difficult transition to sound.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//w03EiJVHP8Un77boQeE7hg9DVdU.jpg",
      year: 1952,
    },
    {
      title: "8½",
      genre: "Fantasy",
      language: "Italian",
      overview:
        "Guido Anselmi, a film director, finds himself creatively barren at the peak of his career. Urged by his doctors to rest, Anselmi heads for a luxurious resort, but a sorry group gathers—his producer, staff, actors, wife, mistress, and relatives—each one begging him to get on with the show. In retreat from their dependency, he fantasizes about past women and dreams of his childhood.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//s2Axq5p0e3JEUFtTSd65vUh6CN5.jpg",
      year: 1963,
    },
    {
      title: "Call Me by Your Name",
      genre: "Romance",
      language: "English",
      overview:
        "In 1980s Italy, a relationship begins between seventeen-year-old teenage Elio and the older adult man hired as his father's research assistant.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mZ4gBdfkhP9tvLH1DO4m4HYtiyi.jpg",
      year: 2017,
    },
    {
      title: "Scarface",
      genre: "Action",
      language: "English",
      overview:
        "After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iQ5ztdjvteGeboxtmRdXEChJOHh.jpg",
      year: 1983,
    },
    {
      title: "Joker",
      genre: "Crime",
      language: "English",
      overview:
        "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      year: 2019,
    },
    {
      title: "Piper",
      genre: "Family",
      language: "English",
      overview:
        "A mother bird tries to teach her little one how to find food by herself. In the process, she encounters a traumatic experience that she must overcome in order to survive.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//rfEkkVzmrMYqGezNLl02mVyJCP2.jpg",
      year: 2016,
    },
    {
      title: "Believe Me: The Abduction of Lisa McVey",
      genre: "Drama",
      language: "English",
      overview:
        "On the night she plans on taking her own life, 17-year-old 'Lisa McVey' is kidnapped and finds herself fighting to stay alive and manages to be a victim of rape. She manages to talk her attacker into releasing her, but when she returns home, no one believes her story except for one detective, who suspects she was abducted by a serial killer. Based on horrifying true events.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//qbJEzCzEKDHPZDiRvSSBiYEKaAH.jpg",
      year: 2021,
    },
    {
      title: "Along with the Gods: The Last 49 Days",
      genre: "Fantasy",
      language: "Korean",
      overview:
        "As the deceased soul Ja-hong and his three afterlife guardians prepare for their remaining trials for reincarnation, the guardians soon come face to face with the truth of their tragic time on Earth 1,000 years earlier.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//9BnqBHFGDv3WlCPB2qQwzAWdy7y.jpg",
      year: 2018,
    },
    {
      title: "The Hate U Give",
      genre: "Crime",
      language: "English",
      overview:
        "Raised in a poverty-stricken slum, a 16-year-old girl named Starr now attends a suburban prep school. After she witnesses a police officer shoot her unarmed best friend, she's torn between her two very different worlds as she tries to speak her truth.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//2icwBom0t5nmOuZI9FVXF3gkMK0.jpg",
      year: 2018,
    },
    {
      title: "Palmer",
      genre: "Drama",
      language: "English",
      overview:
        "After 12 years in prison, former high school football star Eddie Palmer returns home to put his life back together—and forms an unlikely bond with Sam, an outcast boy from a troubled home. But Eddie's past threatens to ruin his new life and family.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//xSDdRAjxKAGi8fUBLOqSrBhJmF0.jpg",
      year: 2021,
    },
    {
      title: "Michael Jackson's Thriller",
      genre: "Horror",
      language: "English",
      overview:
        "A night at the movies turns into a nightmare when Michael and his date are attacked by a horde of bloody-thirsty zombies.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dYHGoPMkZMVuBA4EydmDQMo1EEv.jpg",
      year: 1983,
    },
    {
      title: "Silenced",
      genre: "Drama",
      language: "Korean",
      overview:
        "Based on actual events that took place at Gwangju Inhwa School for the hearing-impaired, where young deaf students were the victims of repeated sexual assaults by faculty members over a period of five years in the early 2000s.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mbMp0oIFmYnw0i5gzRoKt8cH5ve.jpg",
      year: 2011,
    },
    {
      title: "Taxi Driver",
      genre: "Crime",
      language: "English",
      overview:
        "A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feed his urge for violent action.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ekstpH614fwDX8DUln1a2Opz0N8.jpg",
      year: 1976,
    },
    {
      title: "Wonder",
      genre: "Drama",
      language: "English",
      overview:
        "The story of August Pullman – a boy with facial differences – who enters fifth grade, attending a mainstream elementary school for the first time.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ouYgAatYH4JzIThj6FI3UYf31RI.jpg",
      year: 2017,
    },
    {
      title: "Metropolis",
      genre: "Drama",
      language: "German",
      overview:
        "In a futuristic city sharply divided between the rich and the poor, the son of the city's mastermind meets a prophet who predicts the coming of a savior to mediate their differences.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//pxbGZewX327IbTvrCVRJgcLJTSQ.jpg",
      year: 1927,
    },
    {
      title: "Purple Hearts",
      genre: "Romance",
      language: "English",
      overview:
        "An aspiring musician agrees to a marriage of convenience with a soon-to-deploy Marine, but a tragedy soon turns their fake relationship all too real.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//4JyNWkryifWbWXJyxcWh3pVya6N.jpg",
      year: 2022,
    },
    {
      title: "My Friends",
      genre: "Comedy",
      language: "Italian",
      overview:
        'Four middle-aged friends in Florence organize together idle pranks (called zingarate, "gypsy shenanigans") in a continuous attempt to prolong childhood during their adult life.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8Pm8SLjq2UHCwisd56ipHtzvZI1.jpg",
      year: 1975,
    },
    {
      title: "The Father",
      genre: "Drama",
      language: "English",
      overview:
        "A man refuses all assistance from his daughter as he ages and, as he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//pr3bEQ517uMb5loLvjFQi8uLAsp.jpg",
      year: 2020,
    },
    {
      title: "Alien",
      genre: "Horror",
      language: "English",
      overview:
        "During its return to the earth, commercial spaceship Nostromo intercepts a distress signal from a distant planet. When a three-member team of the crew discovers a chamber containing thousands of eggs on the planet, a creature inside one of the eggs attacks an explorer. The entire crew is unaware of the impending nightmare set to descend upon them when the alien parasite planted inside its unfortunate host is birthed.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//vfrQk5IPloGg1v9Rzbh2Eg3VGyM.jpg",
      year: 1979,
    },
    {
      title: "Soul",
      genre: "Animation",
      language: "English",
      overview:
        "Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
      year: 2020,
    },
    {
      title: "Good Will Hunting",
      genre: "Drama",
      language: "English",
      overview:
        "Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he solves a difficult graduate-level math problem, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he will get treatment from therapist Sean Maguire.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bABCBKYBK7A5G1x0FzoeoNfuj2.jpg",
      year: 1997,
    },
    {
      title: "The Great War",
      genre: "Drama",
      language: "Italian",
      overview:
        "Italy, 1916. Oreste Jacovacci and Giovanni Busacca are called, as all the Italian youths, to serve the army in the WWI. They both try in every way to avoid serving the army.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//aDvKsUb5y7GMNMz2HHNtuGww5t8.jpg",
      year: 1959,
    },
    {
      title: "Sansho the Bailiff",
      genre: "Drama",
      language: "Japanese",
      overview:
        "In medieval Japan, a woman and his children journey to find the family's patriarch, who was exiled years before.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//rSlZ8iM4vRM0sZrrJNmjln4kZir.jpg",
      year: 1954,
    },
    {
      title: "Mortal Kombat Legends: Scorpion's Revenge",
      genre: "Animation",
      language: "English",
      overview:
        "After the vicious slaughter of his family by stone-cold mercenary Sub-Zero, Hanzo Hasashi is exiled to the torturous Netherrealm. There, in exchange for his servitude to the sinister Quan Chi, he’s given a chance to avenge his family – and is resurrected as Scorpion, a lost soul bent on revenge. Back on Earthrealm, Lord Raiden gathers a team of elite warriors – Shaolin monk Liu Kang, Special Forces officer Sonya Blade and action star Johnny Cage – an unlikely band of heroes with one chance to save humanity. To do this, they must defeat Shang Tsung’s horde of Outworld gladiators and reign over the Mortal Kombat tournament.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//4VlXER3FImHeFuUjBShFamhIp9M.jpg",
      year: 2020,
    },
    {
      title: "Central Station",
      genre: "Drama",
      language: "Portuguese",
      overview:
        "An emotive journey of a former school teacher, who writes letters for illiterate people, and a young boy, whose mother has just died, as they search for the father he never knew.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zJvp7XjQ2LhPbDVYhFXyucs40vR.jpg",
      year: 1998,
    },
    {
      title: "Full Metal Jacket",
      genre: "Drama",
      language: "English",
      overview:
        "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//kMKyx1k8hWWscYFnPbnxxN4Eqo4.jpg",
      year: 1987,
    },
    {
      title: "Innocent Voices",
      genre: "Drama",
      language: "Spanish",
      overview:
        "A young boy, in an effort to have a normal childhood in 1980s El Salvador, is caught up in a dramatic fight for his life as he desperately tries to avoid the war which is raging all around him",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//hvwB4LdMCLzqXsk5ZjR77vzPkGk.jpg",
      year: 2005,
    },
    {
      title:
        "KONOSUBA – God's blessing on this wonderful world! Legend of Crimson",
      genre: "Animation",
      language: "Japanese",
      overview:
        "It is not strange that the Demon Lord's forces fear the Crimson Demons, the clan from which Megumin and Yunyun originate. Even if the Demon Lord's generals attack their village, the Crimson Demons can just easily brush them off with their supreme mastery of advanced and overpowered magic.  When Yunyun receives a seemingly serious letter regarding a potential disaster coming to her hometown, she immediately informs Kazuma Satou and the rest of his party. After a series of wacky misunderstandings, it turns out to be a mere prank by her fellow demon who wants to be an author. Even so, Megumin becomes worried about her family and sets out toward the Crimson Demons' village with the gang.  There, Kazuma and the others decide to sightsee the wonders of Megumin's birthplace. However, they soon come to realize that the nonsense threat they received might have been more than just a joke.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fv5BgcfkpWh3V6Pb1qVlXESBOdl.jpg",
      year: 2019,
    },
    {
      title: "The Truman Show",
      genre: "Comedy",
      language: "English",
      overview:
        "Truman Burbank is the star of The Truman Show, a 24-hour-a-day reality TV show that broadcasts every aspect of his life without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows, including his wife and his best friend, is really an actor, paid to be part of his life.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//vuza0WqY239yBXOadKlGwJsZJFE.jpg",
      year: 1998,
    },
    {
      title: "La Dolce Vita",
      genre: "Comedy",
      language: "Italian",
      overview:
        "Episodic journey of journalist Marcello who struggles to find his place in the world, torn between the allure of Rome's elite social scene and the stifling domesticity offered by his girlfriend, all the while searching for a way to become a serious writer.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//11hMHhThUb53fHoDDyn5LUsw0Z.jpg",
      year: 1960,
    },
    {
      title: "Wild Strawberries",
      genre: "Drama",
      language: "Swedish",
      overview:
        "Crotchety retired doctor Isak Borg travels from Stockholm to Lund, Sweden, with his pregnant and unhappy daughter-in-law, Marianne, in order to receive an honorary degree from his alma mater. Along the way, they encounter a series of hitchhikers, each of whom causes the elderly doctor to muse upon the pleasures and failures of his own life. These include the vivacious young Sara, a dead ringer for the doctor's own first love.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iyTD2QnySNMPUPE3IedZQipSWfz.jpg",
      year: 1957,
    },
    {
      title: "Reservoir Dogs",
      genre: "Crime",
      language: "English",
      overview:
        "A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors -- veteran Mr. White, newcomer Mr. Orange, psychopathic parolee Mr. Blonde, bickering weasel Mr. Pink and Nice Guy Eddie -- unravel.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//xi8Iu6qyTfyZVDVy60raIOYJJmk.jpg",
      year: 1992,
    },
    {
      title:
        "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
      genre: "Drama",
      language: "English",
      overview:
        "After the insane General Jack D. Ripper initiates a nuclear strike on the Soviet Union, a war room full of politicians, generals and a Russian diplomat all frantically try to stop the nuclear strike.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7SixLzxcqezkZEYU8pcHZgbkmjp.jpg",
      year: 1964,
    },
    {
      title: "Lock, Stock and Two Smoking Barrels",
      genre: "Comedy",
      language: "English",
      overview:
        "A card shark and his unwillingly-enlisted friends need to make a lot of cash quick after losing a sketchy poker match. To do this they decide to pull a heist on a small-time gang who happen to be operating out of the flat next door.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8kSerJrhrJWKLk1LViesGcnrUPE.jpg",
      year: 1998,
    },
    {
      title: "Double Indemnity",
      genre: "Crime",
      language: "English",
      overview:
        "A rich woman and a calculating insurance agent plot to kill her unsuspecting husband after he signs a double indemnity policy. Against a backdrop of distinctly Californian settings, the partners in crime plan the perfect murder to collect the insurance, which pays double if the death is accidental.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//kkfKLeOTo7RjS9TxHKpknlL7huS.jpg",
      year: 1944,
    },
    {
      title: "All About Eve",
      genre: "Drama",
      language: "English",
      overview:
        "From the moment she glimpses her idol at the stage door, Eve Harrington is determined to take the reins of power away from the great actress Margo Channing. Eve maneuvers her way into Margo's Broadway role, becomes a sensation and even causes turmoil in the lives of Margo's director boyfriend, her playwright and his wife. Only the cynical drama critic sees through Eve, admiring her audacity and perfect pattern of deceit.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6numIZH6uR3NlJgY9m7nGH0jhs.jpg",
      year: 1950,
    },
    {
      title: "Children of Paradise",
      genre: "Drama",
      language: "French",
      overview:
        "Nathalie falls for Baptiste Debureau, a mime. But his heart is set on Garance, who is also coveted by Frederick Lemaitre and the Count of Montray.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//yiy9stl1jjVhW44ypkWMFDT8Ix3.jpg",
      year: 1945,
    },
    {
      title: "Rashomon",
      genre: "Crime",
      language: "Japanese",
      overview:
        'Brimming with action while incisively examining the nature of truth, "Rashomon" is perhaps the finest film ever to investigate the philosophy of justice. Through an ingenious use of camera and flashbacks, Kurosawa reveals the complexities of human nature as four people recount different versions of the story of a man\'s murder and the rape of his wife.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//vL7Xw04nFMHwnvXRFCmYYAzMUvY.jpg",
      year: 1950,
    },
    {
      title: "The Invisible Guest",
      genre: "Drama",
      language: "Spanish",
      overview:
        "Barcelona, Spain. Adrián Doria, a young and successful businessman accused of murder, meets one night with Virginia Goodman, an expert interrogation lawyer, in order to devise a defense strategy.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fptnZJbLzKUHeNlYrAynbyoL5YJ.jpg",
      year: 2017,
    },
    {
      title: "Bo Burnham: Inside",
      genre: "Comedy",
      language: "English",
      overview:
        "Stuck in COVID-19 lockdown, US comedian and musician Bo Burnham attempts to stay sane and happy by writing, shooting and performing a one-man comedy special.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ku1UvTWYvhFQbSesOD6zteY7bXT.jpg",
      year: 2021,
    },
    {
      title: "Yojimbo",
      genre: "Drama",
      language: "Japanese",
      overview:
        "A nameless ronin, or samurai with no master, enters a small village in feudal Japan where two rival businessmen are struggling for control of the local gambling trade. Taking the name Sanjuro Kuwabatake, the ronin convinces both silk merchant Tazaemon and sake merchant Tokuemon to hire him as a personal bodyguard, then artfully sets in motion a full-scale gang war between the two ambitious and unscrupulous men.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//tN7kYPjRhDolpui9sc9Eq9n5b2O.jpg",
      year: 1961,
    },
    {
      title: "Me Against You: Mr. S's Vendetta",
      genre: "Family",
      language: "Italian",
      overview:
        "A young couple who makes popular YouTube videos for children sets out to win an award, but an evil mastermind stands in the way of their success.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//sfeQTIRkJjWt8IPDSBcPqkrcaas.jpg",
      year: 2020,
    },
    {
      title: "Sound of Freedom",
      genre: "Action",
      language: "English",
      overview:
        "The story of Tim Ballard, a former US government agent, who quits his job in order to devote his life to rescuing children from global sex traffickers.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//qA5kPYZA7FkVvqcEfJRoOy4kpHg.jpg",
      year: 2023,
    },
    {
      title: "Bound by Honor",
      genre: "Crime",
      language: "English",
      overview:
        'Based on the true life experiences of poet Jimmy Santiago Baca, the film focuses on half-brothers Paco and Cruz, and their bi-racial cousin Miklo. It opens in 1972, as the three are members of an East L.A. gang known as the "Vatos Locos", and the story focuses on how a violent crime and the influence of narcotics alter their lives. Miklo is incarcerated and sent to San Quentin, where he makes a "home" for himself. Cruz becomes an exceptional artist, but a heroin addiction overcomes him with tragic results. Paco becomes a cop and an enemy to his "carnal", Miklo.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gvP6R6juhe2IpCG7QGDgjyUvm0g.jpg",
      year: 1993,
    },
    {
      title: "I corti",
      genre: "Comedy",
      language: "Italian",
      overview:
        'I corti ("shorts") by Aldo, Giovanni & Giacomo was the first stage show of the comedy trio, with the participation of Marina Massironi. It was recorded live at the Teatro Nuovo in Ferrara on 28 and 29 March 1996. Produced by Agidi, with the theatre direction of Arturo Brachetti.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//9uZhgmOAH7eW4uWGL49HgIA0JtE.jpg",
      year: 1996,
    },
    {
      title: "Some Like It Hot",
      genre: "Comedy",
      language: "English",
      overview:
        "Two musicians witness a mob hit and struggle to find a way out of the city before they are found by the gangsters. Their only opportunity is to join an all-girl band as they leave on a tour. To make their getaway they must first disguise themselves as women, then keep their identities secret and deal with the problems this brings - such as an attractive bandmate and a very determined suitor.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//hVIKyTK13AvOGv7ICmJjK44DTzp.jpg",
      year: 1959,
    },
    {
      title: "Big Deal on Madonna Street",
      genre: "Comedy",
      language: "Italian",
      overview:
        "Best friends Peppe and Mario are thieves, but they're not very good at it. Still, Peppe thinks that he's finally devised a master heist that will make them rich. With the help of some fellow criminals, he plans to dig a tunnel from a rented apartment to the pawnshop next door, where they can rob the safe. But his plan is far from foolproof, and the fact that no one in the group has any experience digging tunnels proves to be the least of their problems.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//f5OxD8Nl0pR3DcYHtYhHRfpsmjl.jpg",
      year: 1958,
    },
    {
      title: "The Tale of The Princess Kaguya",
      genre: "Animation",
      language: "Japanese",
      overview:
        "Found inside a shining stalk of bamboo by an old bamboo cutter and his wife, a tiny girl grows rapidly into an exquisite young lady. The mysterious young princess enthrals all who encounter her. But, ultimately, she must confront her fate.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//cQidJuA546OSSXKWXoiCeINDxuj.jpg",
      year: 2013,
    },
    {
      title: "Terminator 2: Judgment Day",
      genre: "Action",
      language: "English",
      overview:
        "Set ten years after the events of the original, James Cameron’s classic sci-fi action flick tells the story of a second attempt to get the rid of rebellion leader John Connor, this time targeting the boy himself. However, the rebellion has sent a reprogrammed terminator to protect Connor.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5M0j0B18abtBI5gi2RhfjjurTqb.jpg",
      year: 1991,
    },
    {
      title: "Harry Potter and the Deathly Hallows: Part 2",
      genre: "Fantasy",
      language: "English",
      overview:
        "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
      year: 2011,
    },
    {
      title: "The Hunt",
      genre: "Drama",
      language: "Danish",
      overview:
        "A teacher lives a lonely life, all the while struggling over his son’s custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//jkixsXzRh28q3PCqFoWcf7unghT.jpg",
      year: 2012,
    },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      genre: "Science Fiction",
      language: "English",
      overview:
        "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
      year: 2004,
    },
    {
      title: "Incendies",
      genre: "Drama",
      language: "French",
      overview:
        "A mother's last wishes send twins Jeanne and Simon on a journey to Middle East in search of their tangled roots. Adapted from Wajdi Mouawad's acclaimed play, Incendies tells the powerful and moving tale of two young adults' voyage to the core of deep-rooted hatred, never-ending wars and enduring love.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dGrSn4SsuC2EMfF7qqq491ukcU.jpg",
      year: 2010,
    },
    {
      title: "Along with the Gods: The Two Worlds",
      genre: "Action",
      language: "Korean",
      overview:
        "Having died unexpectedly, firefighter Ja-hong is taken to the afterlife by 3 afterlife guardians. Only when he passes 7 trials over 49 days and proves he was innocent in human life, he’s able to reincarnate, and his 3 afterlife guardians are by his side to defend him in trial.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gJSvIsI6oQfFim0PGyuuiCYfqKs.jpg",
      year: 2017,
    },
    {
      title: "M",
      genre: "Drama",
      language: "German",
      overview:
        "In this classic German thriller, Hans Beckert, a serial killer who preys on children, becomes the focus of a massive Berlin police manhunt. Beckert's heinous crimes are so repellant and disruptive to city life that he is even targeted by others in the seedy underworld network. With both cops and criminals in pursuit, the murderer soon realizes that people are on his trail, sending him into a tense, panicked attempt to escape justice.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//slsS6jT6SXjcTPOrsFcLIrHboXA.jpg",
      year: 1931,
    },
    {
      title: "Paris, Texas",
      genre: "Drama",
      language: "English",
      overview:
        "A man wanders out of the desert not knowing who he is. His brother finds him, and helps to pull his memory back of the life he led before he walked out on his family and disappeared four years earlier.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7G6ea5djDvCxfqfoMAX8479T4UB.jpg",
      year: 1984,
    },
    {
      title: "How to Train Your Dragon: Homecoming",
      genre: "Animation",
      language: "English",
      overview:
        "It's been ten years since the dragons moved to the Hidden World, and even though Toothless doesn't live in New Berk anymore, Hiccup continues the holiday traditions he once shared with his best friend. But the Vikings of New Berk were beginning to forget about their friendship with dragons. Hiccup, Astrid, and Gobber know just what to do to keep the dragons in the villagers' hearts. And across the sea, the dragons have a plan of their own...",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//kXj2Qrfm994yLeuADqbOieU1mUH.jpg",
      year: 2019,
    },
    {
      title: "Prisoners",
      genre: "Drama",
      language: "English",
      overview:
        "Keller Dover faces a parent's worst nightmare when his 6-year-old daughter, Anna, and her friend go missing. The only lead is an old motorhome that had been parked on their street. The head of the investigation, Detective Loki, arrests the driver, but a lack of evidence forces Loki to release his only suspect. Dover, knowing that his daughter's life is at stake, decides that he has no choice but to take matters into his own hands.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//uhviyknTT5cEQXbn6vWIqfM4vGm.jpg",
      year: 2013,
    },
    {
      title: "Ayla: The Daughter of War",
      genre: "Drama",
      language: "Turkish",
      overview:
        "In 1950, amidst the ravages of the Korean War, Sergeant Süleyman stumbles upon a a half-frozen little girl, with no parents and no help in sight and he risks his own life to save her, smuggling her into his army base and out of harm’s way.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dETDsjBNtWyzdrqi0DFSielMWk5.jpg",
      year: 2017,
    },
    {
      title: "Sherlock Jr.",
      genre: "Action",
      language: "English",
      overview:
        "A film projectionist longs to be a detective, and puts his meagre skills to work when he is framed by a rival for stealing his girlfriend's father's pocketwatch.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//1G9r3rqtbFAQuyWKOZm4Y5J5s7Q.jpg",
      year: 1924,
    },
    {
      title: "La Haine",
      genre: "Drama",
      language: "French",
      overview:
        "After a chaotic night of rioting in a marginal suburb of Paris, three young friends, Vinz, Hubert and Saïd, wander around unoccupied waiting for news about the state of health of a mutual friend who has been seriously injured when confronting the police.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8rgPyWjYZhsphSSxbXguMnhN7H0.jpg",
      year: 1995,
    },
    {
      title: "There Will Be Blood",
      genre: "Drama",
      language: "English",
      overview:
        "Ruthless silver miner, turned oil prospector, Daniel Plainview, moves to oil-rich California. Using his son to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainview's motives and intentions, starting a slow-burning feud that threatens both their lives.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
      year: 2007,
    },
    {
      title: "Pride & Prejudice",
      genre: "Drama",
      language: "English",
      overview:
        "A story of love and life among the landed English gentry during the Georgian era. Mr. Bennet is a gentleman living in Hertfordshire with his overbearing wife and five daughters, but if he dies their house will be inherited by a distant cousin whom they have never met, so the family's future happiness and security is dependent on the daughters making good marriages.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg",
      year: 2005,
    },
    {
      title: "Andrei Rublev",
      genre: "Drama",
      language: "Russian",
      overview:
        "An expansive Russian drama, this film focuses on the life of revered religious icon painter Andrei Rublev. Drifting from place to place in a tumultuous era, the peace-seeking monk eventually gains a reputation for his art. But after Rublev witnesses a brutal battle and unintentionally becomes involved, he takes a vow of silence and spends time away from his work. As he begins to ease his troubled soul, he takes steps towards becoming a painter once again.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//910xRIUmNJrWH2hkQifBJtoPp5R.jpg",
      year: 1966,
    },
    {
      title: "Lion",
      genre: "Drama",
      language: "English",
      overview:
        "A five-year-old Indian boy gets lost on the streets of Calcutta, thousands of kilometers from home. He survives many challenges before being adopted by a couple in Australia; 25 years later, he sets out to find his lost family.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iBGRbLvg6kVc7wbS8wDdVHq6otm.jpg",
      year: 2016,
    },
    {
      title: "Bo Burnham: Make Happy",
      genre: "Comedy",
      language: "English",
      overview:
        "Combining his trademark wit and self-deprecating humor with original music, Bo Burnham offers up his unique twist on life in this stand-up special about  life, death, sexuality, hypocrisy, mental illness and Pringles cans.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//1RqDE7X2rGjxKOklweUFd2U7Vn0.jpg",
      year: 2016,
    },
    {
      title: "Three Billboards Outside Ebbing, Missouri",
      genre: "Crime",
      language: "English",
      overview:
        "After seven months have passed without a culprit in her daughter's murder case, Mildred Hayes makes a bold move, painting three signs leading into her town with a controversial message directed at Bill Willoughby, the town's revered chief of police. When his second-in-command Officer Jason Dixon, an immature mother's boy with a penchant for violence, gets involved, the battle between Mildred and Ebbing's law enforcement is only exacerbated.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//pZRhqJj0DBy4ghB7g6pU7MGHsWJ.jpg",
      year: 2017,
    },
    {
      title: "Das Boot",
      genre: "Drama",
      language: "German",
      overview:
        "A German submarine hunts allied ships during the Second World War, but it soon becomes the hunted. The crew tries to survive below the surface, while stretching both the boat and themselves to their limits.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//9nV5YlX05MHC7zZzffY9kgc8r5d.jpg",
      year: 1981,
    },
    {
      title: "WALL·E",
      genre: "Animation",
      language: "English",
      overview:
        "What if mankind had to leave Earth and somebody forgot to turn the last robot off? After hundreds of years doing what he was built for, WALL•E discovers a new purpose in life when he meets a sleek search robot named EVE. EVE comes to realize that WALL•E has inadvertently stumbled upon the key to the planet's future, and races back to space to report to the humans. Meanwhile, WALL•E chases EVE across the galaxy and sets into motion one of the most imaginative adventures ever brought to the big screen.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
      year: 2008,
    },
    {
      title: "My Fault",
      genre: "Drama",
      language: "Spanish",
      overview:
        "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
      year: 2023,
    },
    {
      title: "2001: A Space Odyssey",
      genre: "Science Fiction",
      language: "English",
      overview:
        "Humanity finds a mysterious object buried beneath the lunar surface and sets off to find its origins with the help of HAL 9000, the world's most advanced super computer.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
      year: 1968,
    },
    {
      title: "Red Beard",
      genre: "Drama",
      language: "Japanese",
      overview:
        "Aspiring to an easy job as personal physician to a wealthy family, Noboru Yasumoto is disappointed when his first post after medical school takes him to a small country clinic under the gruff doctor Red Beard. Yasumoto rebels in numerous ways, but Red Beard proves a wise and patient teacher. He gradually introduces his student to the unglamorous side of the profession, ultimately assigning him to care for a prostitute rescued from a local brothel.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fo800fRcWtl3Zhs6tPHfXP4KBak.jpg",
      year: 1965,
    },
    {
      title: "New Gods: Nezha Reborn",
      genre: "Animation",
      language: "Chinese",
      overview:
        "While living as an ordinary deliveryman and motor racing fan, Nezha encounters old nemeses and must rediscover his powers to protect his loved ones.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//sezNkk9HifNJW3pC5SU2XqMKgSJ.jpg",
      year: 2021,
    },
    {
      title: "Rocco and His Brothers",
      genre: "Drama",
      language: "Italian",
      overview:
        "When a impoverished widow’s family moves to the big city, two of her five sons become romantic rivals with deadly results.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//pngL8AraChIDOiWnKF2o3S9kJzJ.jpg",
      year: 1960,
    },
    {
      title: "Far from the Tree",
      genre: "Animation",
      language: "English",
      overview:
        "On an idyllic beach in the Pacific Northwest, curiosity gets the better of a young raccoon whose frustrated parent attempts to keep them both safe.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//39oaQUS0KxyXL6KYJ2o2u03PpHz.jpg",
      year: 2021,
    },
    {
      title: "My Neighbor Totoro",
      genre: "Fantasy",
      language: "Japanese",
      overview:
        "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
      year: 1988,
    },
    {
      title: "Prayers for Bobby",
      genre: "Drama",
      language: "English",
      overview:
        "Bobby Griffith was his mother's favorite son, the perfect all-American boy growing up under deeply religious influences in Walnut Creek, California. Bobby was also gay. Struggling with a conflict no one knew of, much less understood, Bobby finally came out to his family.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//1viFwXluAettogGDsTrSUUg29lZ.jpg",
      year: 2009,
    },
    {
      title: "Ran",
      genre: "Action",
      language: "Japanese",
      overview:
        "With Ran, legendary director Akira Kurosawa reimagines Shakespeare's King Lear as a singular historical epic set in sixteenth-century Japan. Majestic in scope, the film is Kurosawa's late-life masterpiece, a profound examination of the folly of war and the crumbling of one family under the weight of betrayal, greed, and the insatiable thirst for power.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//jQnUtWaHYfqnXPOIf77K7Ycqk4M.jpg",
      year: 1985,
    },
    {
      title: "A Taxi Driver",
      genre: "Action",
      language: "Korean",
      overview:
        "May, 1980. Man-seob is a taxi driver in Seoul who lives from hand to mouth, raising his young daughter alone. One day, he hears that there is a foreigner who will pay big money for a drive down to Gwangju city. Not knowing that he’s a German journalist with a hidden agenda, Man-seob takes the job.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iXVaWbxmyPk4KZGZk5GGDGFieMX.jpg",
      year: 2017,
    },
    {
      title: "A Special Day",
      genre: "Drama",
      language: "Italian",
      overview:
        "In Rome, fascist supporter Emanuele attends a parade commemorating Adolf Hitler's historic meeting with Italian leader Benito Mussolini, leaving his apolitical wife, Antonietta, to tend to household duties. Antonietta encounters a man, Gabriele, who appears surprisingly nonplussed by the political event. Over the course of the day, the two forge a close friendship that will forever change their perceptions of life, love and politics.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//jzRn7N1mFowkQ5IkUkfWoxXJtYU.jpg",
      year: 1977,
    },
    {
      title: "Memories of Murder",
      genre: "Crime",
      language: "Korean",
      overview:
        "During the late 1980s, two detectives in a South Korean province attempt to solve the nation's first series of rape-and-murder cases.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//lp3Qzzq1zzy6ToJul9DGBBd8ua1.jpg",
      year: 2003,
    },
    {
      title: "The Young and the Damned",
      genre: "Crime",
      language: "Spanish",
      overview:
        "A group of juvenile delinquents live a violent, criminal life in the festering slums of Mexico City, among them the young Pedro, whose morality is gradually corrupted and destroyed by the others.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//3bdfN2gosYSxpHBAXPkAhxkUJFr.jpg",
      year: 1950,
    },
    {
      title: "Gran Turismo",
      genre: "Adventure",
      language: "English",
      overview:
        "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
      year: 2023,
    },
    {
      title: "Paper Lives",
      genre: "Drama",
      language: "Turkish",
      overview:
        "In the streets of Istanbul, ailing waste warehouse worker Mehmet takes a small boy under his wing and must soon confront his own traumatic childhood.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//cmru6N6Hnw2pJwuo1ctH1CxKqKZ.jpg",
      year: 2021,
    },
    {
      title: "Hidden Figures",
      genre: "Drama",
      language: "English",
      overview:
        "The untold story of Katherine G. Johnson, Dorothy Vaughan and Mary Jackson – brilliant African-American women working at NASA and serving as the brains behind one of the greatest operations in history – the launch of astronaut John Glenn into orbit. The visionary trio crossed all gender and race lines to inspire generations to dream big.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//9lfz2W2uGjyow3am00rsPJ8iOyq.jpg",
      year: 2016,
    },
    {
      title: "Elite Squad",
      genre: "Drama",
      language: "Portuguese",
      overview:
        "In 1997, before the visit of the pope to Rio de Janeiro, Captain Nascimento from BOPE (Special Police Operations Battalion) is assigned to eliminate the risks of the drug dealers in a dangerous slum nearby where the pope intends to be lodged.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//lwIXz785N2fXi8hsBr1IXciFlkM.jpg",
      year: 2007,
    },
    {
      title: "The 400 Blows",
      genre: "Drama",
      language: "French",
      overview:
        "For young Parisian boy Antoine Doinel, life is one difficult situation after another. Surrounded by inconsiderate adults, including his neglectful parents, Antoine spends his days with his best friend, Rene, trying to plan for a better life. When one of their schemes goes awry, Antoine ends up in trouble with the law, leading to even more conflicts with unsympathetic authority figures.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//12PuU23kkDLvTd0nb8hMlE3oShB.jpg",
      year: 1959,
    },
    {
      title: "Veinteañera, Divorciada y Fantástica",
      genre: "Comedy",
      language: "Spanish",
      overview:
        "Regina, our young protagonist, always dreamed of getting married. And she did it - but the dream lasted much less than she thought and now she has to face life in a very funny way as a divorcee.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//oSbCdDI0SAAOdywGe0YVO2iDdV9.jpg",
      year: 2020,
    },
    {
      title: "The Grand Budapest Hotel",
      genre: "Comedy",
      language: "English",
      overview:
        "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
      year: 2014,
    },
    {
      title: "Cruella",
      genre: "Comedy",
      language: "English",
      overview:
        "In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg",
      year: 2021,
    },
    {
      title: "On My Skin",
      genre: "Drama",
      language: "Italian",
      overview:
        "The incredible true story behind the most controversial Italian court cases in recent years. Stefano Cucchi was arrested for a minor crime and mysteriously found dead during his detention. In one week's time, a family is changed forever.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//rwPgE6fLxuJmPWi8fFjgENJMAjr.jpg",
      year: 2018,
    },
    {
      title: "The Elephant Man",
      genre: "Drama",
      language: "English",
      overview:
        'A Victorian surgeon rescues a heavily disfigured man being mistreated by his "owner" as a side-show freak. Behind his monstrous façade, there is revealed a person of great intelligence and sensitivity. Based on the true story of Joseph Merrick (called John Merrick in the film), a severely deformed man in 19th century London.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//u0wpPYjuSt8DIe1Y3Vapnh8jcKE.jpg",
      year: 1980,
    },
    {
      title: "The Thing",
      genre: "Horror",
      language: "English",
      overview:
        "A team of American scientists investigate the empty, destroyed base of their Norwegian counterparts in Antarctica, only to discover a terrifying life force that can take the form of its prey.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//tzGY49kseSE9QAKk47uuDGwnSCu.jpg",
      year: 1982,
    },
    {
      title: "My Name Is Khan",
      genre: "Drama",
      language: "Hindi",
      overview:
        "Rizwan Khan, a Muslim from the Borivali section of Mumbai, has Asperger's syndrome. He marries a Hindu single mother, Mandira, in San Francisco. After 9/11, Rizwan is detained by authorities at LAX who treat him as a terrorist because of his condition and his race.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5Y36lCiNyyV71mjq6LavgiggbhT.jpg",
      year: 2010,
    },
    {
      title: "El mesero",
      genre: "Comedy",
      language: "Spanish",
      overview:
        "A waiter pretends to be an important businessman in order to reach the upper class through his entrepreneurial dreams.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zvGC5jX5wQmU1GgPc0VGZz7Mtcs.jpg",
      year: 2021,
    },
    {
      title: "Black Beauty",
      genre: "Drama",
      language: "English",
      overview:
        "Born free in the American West, Black Beauty is a horse rounded up and brought to Birtwick Stables, where she meets spirited teenager Jo Green. The two forge a bond that carries Beauty through the different chapters, challenges and adventures.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5ZjMNJJabwBEnGVQoR2yoMEL9um.jpg",
      year: 2020,
    },
    {
      title: "Judgment at Nuremberg",
      genre: "Drama",
      language: "English",
      overview:
        "In 1947, four German judges who served on the bench during the Nazi regime face a military tribunal to answer charges of crimes against humanity. Chief Justice Haywood hears evidence and testimony not only from lead defendant Ernst Janning and his defense attorney Hans Rolfe, but also from the widow of a Nazi general, an idealistic U.S. Army captain and reluctant witness Irene Wallner.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//cqumfgd74ftVzOKJpFGOG64WlXL.jpg",
      year: 1961,
    },
    {
      title: "A Dog's Journey",
      genre: "Family",
      language: "English",
      overview:
        "A dog finds the meaning of his own existence through the lives of the humans he meets.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//wquJChp0NpoqthYdE3YjXNNxvVC.jpg",
      year: 2019,
    },
    {
      title: "Gifted",
      genre: "Drama",
      language: "English",
      overview:
        "Frank, a single man raising his child prodigy niece Mary, is drawn into a custody battle with his mother.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7YB2YrMwIm1g8FyZtlvmVDfRnAT.jpg",
      year: 2017,
    },
    {
      title: "Jojo Rabbit",
      genre: "Comedy",
      language: "English",
      overview:
        "A World War II satire that follows a lonely German boy whose world view is turned upside down when he discovers his single mother is hiding a young Jewish girl in their attic. Aided only by his idiotic imaginary friend, Adolf Hitler, Jojo must confront his blind nationalism.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7GsM4mtM0worCtIVeiQt28HieeN.jpg",
      year: 2019,
    },
    {
      title: "The Second Mother",
      genre: "Drama",
      language: "Portuguese",
      overview:
        "After leaving her daughter Jessica in a small town in Pernambuco to be raised by relatives, Val spends the next 13 years working as a nanny to Fabinho in São Paulo. She has financial stability but has to live with the guilt of having not raised Jessica herself. As Fabinho’s university entrance exams approach, Jessica reappears in her life and seems to want to give her mother a second chance. However, Jessica has not been raised to be a servant and her very existence will turn Val’s routine on its head. With precision and humour, the subtle and powerful forces that keep rigid class structures in place and how the youth may just be the ones to shake it all up.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//u1tDQun2iJAzersd94S8P47WEOL.jpg",
      year: 2015,
    },
    {
      title: "Toto, Peppino, and the Hussy",
      genre: "Comedy",
      language: "Italian",
      overview:
        'Antonio, Peppino and Lucia are three brothers who live in the country near Naples. Lucia\'s son, Gianni, goes to Naples to study medicine, but there he knows a ballet dancer. They fall in love and, when she goes to Milan, Gianni follows her. Informed of this and afraid that their nephew will stop studying, the three Caponi brothers leave for Milan to persuade Gianni to come back and continue studying and abandon the "Malafemmina" (bad girl).',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//rHsc35TLPliJAvbnmu8dvddiu96.jpg",
      year: 1956,
    },
    {
      title: "The Best of Youth",
      genre: "Drama",
      language: "Italian",
      overview:
        "After a fateful encounter during the summer of 1966, the lives of two Italian brothers from a middle-class family take different directions, crossing some of the most significant events of postwar Italian history in the following decades.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ltmcFRvTeAgBgMLUGa15KzDSQqs.jpg",
      year: 2003,
    },
    {
      title: "Love, Simon",
      genre: "Comedy",
      language: "English",
      overview:
        "Everyone deserves a great love story. But for seventeen-year old Simon Spier it's a little more complicated: he's yet to tell his family or friends he's gay and he doesn't know the identity of the anonymous classmate he's fallen for online.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5YUYg5q7QfC4IoNwNUtiwdiYKPr.jpg",
      year: 2018,
    },
    {
      title: "The Wolf of Wall Street",
      genre: "Crime",
      language: "English",
      overview:
        "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//34m2tygAYBGqA9MXKhRDtzYd4MR.jpg",
      year: 2013,
    },
    {
      title: "The Passion of Joan of Arc",
      genre: "Drama",
      language: "French",
      overview:
        "A classic of the silent age, this film tells the story of the doomed but ultimately canonized 15th-century teenage warrior. On trial for claiming she'd spoken to God, Jeanne d'Arc is subjected to inhumane treatment and scare tactics at the hands of church court officials. Initially bullied into changing her story, Jeanne eventually opts for what she sees as the truth. Her punishment, a famously brutal execution, earns her perpetual martyrdom.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//8OYGtQlO8k9PcOm49apV62eVJQo.jpg",
      year: 1928,
    },
    {
      title: "The Lives of Others",
      genre: "Drama",
      language: "German",
      overview:
        "In 1984 East Berlin, an agent of the secret police, conducting surveillance on a writer and his lover, finds himself becoming increasingly absorbed by their lives.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//cVUDMnskSc01rdbyH0tLATTJUdP.jpg",
      year: 2006,
    },
    {
      title: "Amadeus",
      genre: "History",
      language: "English",
      overview:
        "Wolfgang Amadeus Mozart is a remarkably talented young Viennese composer who unwittingly finds a fierce rival in the disciplined and determined Antonio Salieri. Resenting Mozart for both his hedonistic lifestyle and his undeniable talent, the highly religious Salieri is gradually consumed by his jealousy and becomes obsessed with Mozart's downfall, leading to a devious scheme that has dire consequences for both men.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//1n5VUlCqgmVax1adxGZm8oCFaKc.jpg",
      year: 1984,
    },
    {
      title: "Room",
      genre: "Drama",
      language: "English",
      overview:
        "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dIxoYFcj6EqD5KScuU8lWCftnvH.jpg",
      year: 2015,
    },
    {
      title: "Loving Vincent",
      genre: "Animation",
      language: "English",
      overview:
        "A young man arrives at the last hometown of painter Vincent van Gogh to deliver the troubled artist's final letter and ends up investigating his final days there.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//56sq57kDm7XgyXBYrgJLumo0Jac.jpg",
      year: 2017,
    },
    {
      title: "Requiem for a Dream",
      genre: "Crime",
      language: "English",
      overview:
        "The hopes and dreams of four ambitious people are shattered when their drug addictions begin spiraling out of control. A look into addiction and how it overcomes the mind and body.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//nOd6vjEmzCT0k4VYqsA2hwyi87C.jpg",
      year: 2000,
    },
    {
      title: "Kitbull",
      genre: "Animation",
      language: "English",
      overview:
        "An unlikely connection sparks between two creatures: a fiercely independent stray kitten and a pit bull. Together, they experience friendship for the first time.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//mwKO3cZbxipgd9QAPboJVTDLPiN.jpg",
      year: 2019,
    },
    {
      title: "Harry Potter and the Prisoner of Azkaban",
      genre: "Adventure",
      language: "English",
      overview:
        "Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
      year: 2004,
    },
    {
      title: "American Beauty",
      genre: "Drama",
      language: "English",
      overview:
        "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//wby9315QzVKdW9BonAefg8jGTTb.jpg",
      year: 1999,
    },
    {
      title: "The Sting",
      genre: "Comedy",
      language: "English",
      overview:
        "A novice con man teams up with an acknowledged master to avenge the murder of a mutual friend by pulling off the ultimate big con and swindling a fortune from a big-time mobster.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ckmYng37zey8INYf6d10cVgIG93.jpg",
      year: 1973,
    },
    {
      title: "Dersu Uzala",
      genre: "Action",
      language: "Russian",
      overview:
        "A military explorer meets and befriends a Goldi man in Russia’s unmapped forests. A deep and abiding bond evolves between the two men, one civilized in the usual sense, the other at home in the glacial Siberian woods.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bIOrDQ3Gg68k3qJAnRU7nIZr0BW.jpg",
      year: 1975,
    },
    {
      title: "The Gold Rush",
      genre: "Adventure",
      language: "English",
      overview:
        "A gold prospector in Alaska struggles to survive the elements and win the heart of a dance hall girl.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//eQRFo1qwRREYwj47Yoe1PisgOle.jpg",
      year: 1925,
    },
    {
      title: "The Wages of Fear",
      genre: "Drama",
      language: "French",
      overview:
        "In a run-down South American town, four men are paid to drive trucks loaded with nitroglycerin into the jungle through to the oil field. Friendships are tested and rivalries develop as they embark upon the perilous journey.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//d1VEnsFO7YcEc5gRqKXu2Bq2MMJ.jpg",
      year: 1953,
    },
    {
      title: "For a Few Dollars More",
      genre: "Western",
      language: "Italian",
      overview:
        'Two bounty hunters are in pursuit of "El Indio," one of the most wanted fugitives in the western territories, and his gang.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ooqASvA7qxlTVKL3KwOzBwy57Dh.jpg",
      year: 1965,
    },
    {
      title: "Song of the Sea",
      genre: "Family",
      language: "English",
      overview:
        "The story of the last Seal Child’s journey home. After their mother’s disappearance, Ben and Saoirse are sent to live with Granny in the city. When they resolve to return to their home by the sea, their journey becomes a race against time as they are drawn into a world Ben knows only from his mother’s folktales. But this is no bedtime story; these fairy folk have been in our world far too long. It soon becomes clear to Ben that Saoirse is the key to their survival.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//3DBX7QOEzWPNcDhqXInk6GBEvhK.jpg",
      year: 2014,
    },
    {
      title: "Dial M for Murder",
      genre: "Thriller",
      language: "English",
      overview:
        "An ex-tennis pro carries out a plot to have his wife murdered after discovering she is having an affair, and assumes she will soon leave him for the other man anyway. When things go wrong, he improvises a new plan—to frame her for murder instead.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//2gDCAgl2iBQNuJuk6p2xtuS1ewg.jpg",
      year: 1954,
    },
    {
      title: "Rome, Open City",
      genre: "Drama",
      language: "Italian",
      overview:
        "During the Nazi occupation of Rome in 1944, the leader of the Resistance is chased by the Nazis as he seeks refuge and a way to escape.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ijGV4v8JxgbNzgEhqKdzHdaZn8a.jpg",
      year: 1945,
    },
    {
      title: "Bingo: The King of the Mornings",
      genre: "Comedy",
      language: "Portuguese",
      overview:
        '1980s. Brazilian television exploding in color and auditorium programs not so politically correct. In the middle of this fervor, Augusto Mendes, a young rising actor, seeks his place in the sun. From porn studios to soap operas, he finally finds success and fame when he becomes "Bingo", a TV host clown from one of the audience leader TV shows for children. It turns out that behind the rice powder and red nose, nobody knows who he is.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//1ddIxZW72MjnPA2cls8gCGMPp5d.jpg",
      year: 2017,
    },
    {
      title: "Guardians of the Galaxy Vol. 3",
      genre: "Science Fiction",
      language: "English",
      overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      year: 2023,
    },
    {
      title: "Citizen Kane",
      genre: "Mystery",
      language: "English",
      overview:
        "Newspaper magnate, Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg",
      year: 1941,
    },
    {
      title: "Weathering with You",
      genre: "Animation",
      language: "Japanese",
      overview:
        "The summer of his high school freshman year, Hodaka runs away from his remote island home to Tokyo, and quickly finds himself pushed to his financial and personal limits. The weather is unusually gloomy and rainy every day, as if taking its cue from his life. After many days of solitude, he finally finds work as a freelance writer for a mysterious occult magazine. Then, one day, Hodaka meets Hina on a busy street corner. This bright and strong-willed girl possesses a strange and wonderful ability: the power to stop the rain and clear the sky.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//qgrk7r1fV4IjuoeiGS5HOhXNdLJ.jpg",
      year: 2019,
    },
    {
      title: "Mirror",
      genre: "Drama",
      language: "Russian",
      overview:
        "A dying man in his forties recalls his childhood, his mother, the war and personal moments that tell of and juxtapose pivotal moments in Soviet history with daily life.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//phfHdNaa4AVN3dzKHo2FVwUXo4f.jpg",
      year: 1975,
    },
    {
      title: "Nobody",
      genre: "Action",
      language: "English",
      overview:
        'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//oBgWY00bEFeZ9N25wWVyuQddbAo.jpg",
      year: 2021,
    },
    {
      title: "Ford v Ferrari",
      genre: "Drama",
      language: "English",
      overview:
        "American car designer Carroll Shelby and the British-born driver Ken Miles work together to battle corporate interference, the laws of physics, and their own personal demons to build a revolutionary race car for Ford Motor Company and take on the dominating race cars of Enzo Ferrari at the 24 Hours of Le Mans in France in 1966.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dR1Ju50iudrOh3YgfwkAU1g2HZe.jpg",
      year: 2019,
    },
    {
      title: "In a Heartbeat",
      genre: "Family",
      language: "English",
      overview:
        "A closeted boy runs the risk of being outed by his own heart after it pops out of his chest to chase down the boy of his dreams.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//wJUJROdLOtOzMixkjkx1aaZGSLl.jpg",
      year: 2017,
    },
    {
      title: "Nights of Cabiria",
      genre: "Drama",
      language: "Italian",
      overview:
        "Rome, 1957. A woman, Cabiria, is robbed and left to drown by her boyfriend, Giorgio. Rescued, she resumes her life and tries her best to find happiness in a cynical world. Even when she thinks her struggles are over and she has found happiness and contentment, things may not be what they seem.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//xF4oCG3PLNbcrtPZbqB3BtkIbKg.jpg",
      year: 1957,
    },
    {
      title: "Casino",
      genre: "Crime",
      language: "English",
      overview:
        'In early-1970s Las Vegas, Sam "Ace" Rothstein gets tapped by his bosses to head the Tangiers Casino. At first, he\'s a great success in the job, but over the years, problems with his loose-cannon enforcer Nicky Santoro, his ex-hustler wife Ginger, her con-artist ex Lester Diamond and a handful of corrupt politicians put Sam in ever-increasing danger.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6zEZY1htzRos2w0W3T7o7W1WJhp.jpg",
      year: 1995,
    },
    {
      title: "The Imitation Game",
      genre: "History",
      language: "English",
      overview:
        "Based on the real life story of legendary cryptanalyst Alan Turing, the film portrays the nail-biting race against time by Turing and his brilliant team of code-breakers at Britain's top-secret Government Code and Cypher School at Bletchley Park, during the darkest days of World War II.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zSqJ1qFq8NXFfi7JeIYMlzyR0dx.jpg",
      year: 2014,
    },
    {
      title: "Hachi: A Dog's Tale",
      genre: "Drama",
      language: "English",
      overview:
        "A drama based on the true story of a college professor's bond with the abandoned dog he takes into his home.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//lsy3aEsEfYIHdLRk4dontZ4s85h.jpg",
      year: 2009,
    },
    {
      title: "Autumn Sonata",
      genre: "Drama",
      language: "Swedish",
      overview:
        "After a seven-year absence, Charlotte Andergast travels to Sweden to reunite with her daughter Eva. The pair have a troubled relationship: Charlotte sacrificed the responsibilities of motherhood for a career as a classical pianist. Over an emotional night, the pair reopen the wounds of the past. Charlotte gets another shock when she finds out that her mentally impaired daughter, Helena, is out of the asylum and living with Eva.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6beNbtCXv3GkzHkxkGYf38ib7v8.jpg",
      year: 1978,
    },
    {
      title: "Barry Lyndon",
      genre: "Drama",
      language: "English",
      overview:
        "An Irish rogue uses his cunning and wit to work his way up the social classes of 18th century England, transforming himself from the humble Redmond Barry into the noble Barry Lyndon.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dOJtBSyI30wWc08UmyEKLsu4Rfk.jpg",
      year: 1975,
    },
    {
      title: "The Circus",
      genre: "Comedy",
      language: "English",
      overview:
        "Charlie, a wandering tramp, becomes a circus handyman - soon the star of the show - and falls in love with the circus owner's stepdaughter.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//3FywbVq2qGqbYHPCy2NJcOf0gmp.jpg",
      year: 1928,
    },
    {
      title: "Love Exposure",
      genre: "Action",
      language: "Japanese",
      overview:
        'The story of a teenage boy named Yu, who falls for Yoko, a girl he runs into while working as an "up-skirt" photographer in an offshoot of the porn industry. His attempts to woo her are complicated by a spot of cross-dressing – which convinces Yoko that she is lesbian – dalliances with kung-fu and crime, and a constant struggle with the guilt that\'s a legacy of his Catholic upbringing.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//plOE700tNSs3PjDrmoyVmzFb0oZ.jpg",
      year: 2009,
    },
    {
      title: "To Kill a Mockingbird",
      genre: "Drama",
      language: "English",
      overview:
        "Scout Finch, 6, and her older brother Jem live in sleepy Maycomb, Alabama, spending much of their time with their friend Dill and spying on their reclusive and mysterious neighbor, Boo Radley. When Atticus, their widowed father and a respected lawyer, defends a black man named Tom Robinson against fabricated rape charges, the trial and tangent events expose the children to evils of racism and stereotyping.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gZycFUMLx2110dzK3nBNai7gfpM.jpg",
      year: 1962,
    },
    {
      title: "Late Spring",
      genre: "Drama",
      language: "Japanese",
      overview:
        "Noriko is perfectly happy living at home with her widowed father, Shukichi, and has no plans to marry -- that is, until her aunt Masa convinces Shukichi that unless he marries off his 27-year-old daughter soon, she will likely remain alone for the rest of her life. When Noriko resists Masa's matchmaking, Shukichi is forced to deceive his daughter and sacrifice his own happiness to do what he believes is right.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iNtRSY2AGjW1VDXDR79bKsNUdus.jpg",
      year: 1949,
    },
    {
      title: "The Boy and the Beast",
      genre: "Action",
      language: "Japanese",
      overview:
        "Kyuta, a boy living in Shibuya, and Kumatetsu, a lonesome beast from Jutengai, an imaginary world. One day, Kyuta forays into the imaginary world and, as he's looking for his way back, meets Kumatetsu who becomes his spirit guide. That encounter leads them to many adventures.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//kzKJxfIdZ70nsPfKyq7hlYlJwSx.jpg",
      year: 2015,
    },
    {
      title: "The Deer Hunter",
      genre: "Drama",
      language: "English",
      overview:
        "A group of working-class friends decide to enlist in the Army during the Vietnam War and finds it to be hellish chaos -- not the noble venture they imagined. Before they left, Steven married his pregnant girlfriend -- and Michael and Nick were in love with the same woman. But all three are different men upon their return.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bbGtogDZOg09bm42KIpCXUXICkh.jpg",
      year: 1978,
    },
    {
      title: "Paperman",
      genre: "Animation",
      language: "English",
      overview:
        "An urban office worker finds that paper airplanes are instrumental in meeting a girl in ways he never expected.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6MXYNvGmI63W8fI3HKlcZzEy1U5.jpg",
      year: 2012,
    },
    {
      title: "Bohemian Rhapsody",
      genre: "Music",
      language: "English",
      overview:
        "Singer Freddie Mercury, guitarist Brian May, drummer Roger Taylor and bass guitarist John Deacon take the music world by storm when they form the rock 'n' roll band Queen in 1970. Hit songs become instant classics. When Mercury's increasingly wild lifestyle starts to spiral out of control, Queen soon faces its greatest challenge yet – finding a way to keep the band together amid the success and excess.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//lHu1wtNaczFPGFDTrjCSzeLPTKN.jpg",
      year: 2018,
    },
    {
      title: "In This Corner of the World",
      genre: "Drama",
      language: "Japanese",
      overview:
        "Japan, 1943, during World War II. Young Suzu leaves her village near Hiroshima to marry and live with her in-laws in Kure, a military harbor. Her creativity to overcome deprivation quickly makes her indispensable at home. Inhabited by an ancestral wisdom, Suzu impregnates the simple gestures of everyday life with poetry and beauty. The many hardships, the loss of loved ones, the frequent air raids of the enemy, nothing alters her enthusiasm…",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//9Z4H4M2F8OQTB04YC1Opds8MFBb.jpg",
      year: 2016,
    },
    {
      title: "Gran Torino",
      genre: "Drama",
      language: "English",
      overview:
        "Disgruntled Korean War veteran Walt Kowalski sets out to reform his neighbor, Thao Lor, a Hmong teenager who tried to steal Kowalski's prized possession: a 1972 Gran Torino.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//zUybYvxWdAJy5hhYovsXtHSWI1l.jpg",
      year: 2008,
    },
    {
      title: "1917",
      genre: "War",
      language: "English",
      overview:
        "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
      year: 2019,
    },
    {
      title: "Castaway on the Moon",
      genre: "Drama",
      language: "Korean",
      overview:
        "Mr. Kim is jobless, lost in debt and has been dumped by his girlfriend. He decides to end it all by jumping into the Han River - only to find himself washed up on a small, mid-river island. He soon abandons thoughts of suicide or rescue and begins a new life as a castaway. His antics catch the attention of a young woman whose apartment overlooks the river. Her discovery changes both their lives.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gGzovvmOEyNVUu4WEHtw9wfDsqI.jpg",
      year: 2009,
    },
    {
      title: "Nobody Knows",
      genre: "Drama",
      language: "Japanese",
      overview:
        "In a small Tokyo apartment, twelve-year-old Akira must care for his younger siblings after their mother leaves them and shows no sign of returning.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//kDUUdWrbBBVqzSmm27pHFJcTvCU.jpg",
      year: 2004,
    },
    {
      title: "Spider-Man: No Way Home",
      genre: "Action",
      language: "English",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5weKu49pzJCt06OPpjvT80efnQj.jpg",
      year: 2021,
    },
    {
      title: "The Secret in Their Eyes",
      genre: "Crime",
      language: "Spanish",
      overview:
        "A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dkeAwfZzwL3WvToydE3CXiY80E0.jpg",
      year: 2009,
    },
    {
      title: "3 Idiots",
      genre: "Drama",
      language: "Hindi",
      overview:
        'Rascal. Joker. Dreamer. Genius... You\'ve never met a college student quite like "Rancho." From the moment he arrives at India\'s most prestigious university, Rancho\'s outlandish schemes turn the campus upside down—along with the lives of his two newfound best friends. Together, they make life miserable for "Virus," the school’s uptight and heartless dean. But when Rancho catches the eye of the dean\'s daughter, Virus sets his sights on flunking out the "3 idiots" once and for all.',
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//66A9MqXOyVFCssoloscw79z8Tew.jpg",
      year: 2009,
    },
    {
      title: "No Manches Frida 2",
      genre: "Comedy",
      language: "Spanish",
      overview: "Ex-con Zequi and company come back for a new adventure.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//rG7rDoTe1ZEa936eonDCkV76nkx.jpg",
      year: 2019,
    },
    {
      title: "North by Northwest",
      genre: "Mystery",
      language: "English",
      overview:
        "Advertising man Roger Thornhill is mistaken for a spy, triggering a deadly cross-country chase.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ay0dOKJgyK4VEh3xakV15UgvJMF.jpg",
      year: 1959,
    },
    {
      title: "Pink Floyd: The Wall",
      genre: "Music",
      language: "English",
      overview:
        "A troubled rock star descends into madness in the midst of his physical and social isolation from everyone.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//aElHyIdF5jmctFGhlhhaPFsbBJC.jpg",
      year: 1982,
    },
    {
      title: "Suzume",
      genre: "Animation",
      language: "Japanese",
      overview:
        "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//vIeu8WysZrTSFb2uhPViKjX9EcC.jpg",
      year: 2022,
    },
    {
      title: "Forgotten",
      genre: "Thriller",
      language: "Korean",
      overview:
        "Seoul, South Korea, 1997. When the young but extremely anxious student Jin-seok, his parents and his successful older brother Yoo-seok move to a new home, mysterious and frightening events begin to happen around them, unexplained events that threaten to ruin their seemingly happy lives. Unable to understand what is happening, Jin-seok wonders if he is losing his mind.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//cBgj41y1RvmW1zJCEX0uNWL0UjW.jpg",
      year: 2017,
    },
    {
      title: "Lawrence of Arabia",
      genre: "Adventure",
      language: "English",
      overview:
        "The story of British officer T.E. Lawrence's mission to aid the Arab tribes in their revolt against the Ottoman Empire during the First World War. Lawrence becomes a flamboyant, messianic figure in the cause of Arab unity but his psychological instability threatens to undermine his achievements.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//AiAm0EtDvyGqNpVoieRw4u65vD1.jpg",
      year: 1962,
    },
    {
      title: "Flipped",
      genre: "Romance",
      language: "English",
      overview:
        "When Juli meets Bryce in the second grade, she knows it's true love. After spending six years trying to convince Bryce the same, she's ready to give up - until he starts to reconsider.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6zDYFigohwncqFL00MKbFV01dWb.jpg",
      year: 2010,
    },
    {
      title: "Like Stars on Earth",
      genre: "Drama",
      language: "Hindi",
      overview:
        "Ishaan Awasthi is an eight-year-old whose world is filled with wonders that no one else seems to appreciate. Colours, fish, dogs, and kites don't seem important to the adults, who are much more interested in things like homework, marks, and neatness. Ishaan cannot seem to get anything right in class; he is then sent to boarding school, where his life changes forever.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fwXhw9bERqKrJfJK6WGakPIh3FS.jpg",
      year: 2007,
    },
    {
      title: "The Red Shoes",
      genre: "Drama",
      language: "English",
      overview:
        "In this classic drama, Vicky Page is an aspiring ballerina torn between her dedication to dance and her desire to love. While her imperious instructor, Boris Lermontov, urges to her to forget anything but ballet, Vicky begins to fall for the charming young composer Julian Craster. Eventually Vicky, under great emotional stress, must choose to pursue either her art or her romance, a decision that carries serious consequences.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//5NuMQd17KZx0lCxedJoIuFnt7li.jpg",
      year: 1948,
    },
    {
      title: "Nimona",
      genre: "Animation",
      language: "English",
      overview:
        "A knight framed for a tragic crime teams with a scrappy, shape-shifting teen to prove his innocence.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//2NQljeavtfl22207D1kxLpa4LS3.jpg",
      year: 2023,
    },
    {
      title: "Ugetsu",
      genre: "Fantasy",
      language: "Japanese",
      overview:
        "In 16th century Japan, peasants Genjuro and Tobei sell their earthenware pots to a group of soldiers in a nearby village, in defiance of a local sage's warning against seeking to profit from warfare. Genjuro's pursuit of both riches and the mysterious Lady Wakasa, as well as Tobei's desire to become a samurai, run the risk of destroying both themselves and their wives, Miyagi and Ohama.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//7Kk1ZsrAul2Lg7Pe45XOcUf2ARQ.jpg",
      year: 1953,
    },
    {
      title: "In the Arms of an Assassin",
      genre: "Romance",
      language: "Spanish",
      overview:
        "Victor (William Levy) is one of the world’s most handsome  men, but he has a deep secret – he is a cold blooded assassin. Smooth talking and seductive, Victor was raised to do one thing only, which is to kill for money. When he is sent to the home of a brutal drug lord to collect payment for his most recent hit, he encounters the beautiful Sarai (Alicia Sanz), who has been forced to spend the last 9 years of her life with the drug lord.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//iqRUOtbDunNq7gTux3zXz25Krwp.jpg",
      year: 2019,
    },
    {
      title: "The General",
      genre: "Comedy",
      language: "English",
      overview:
        "During America’s Civil War, Union spies steal engineer Johnny Gray's beloved locomotive, 'The General'—with Johnnie's lady love aboard an attached boxcar—and he single-handedly must do all in his power to both get The General back and to rescue Annabelle.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//4NmV1Wei4LxT2lpjViCAScgCZLq.jpg",
      year: 1926,
    },
    {
      title: "Kill Bill: The Whole Bloody Affair",
      genre: "Action",
      language: "English",
      overview:
        "An assassin is shot and almost killed by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.  Kill Bill: The Whole Bloody Affair is a complete edit of the two-part martial arts action films Kill Bill: Vol. 1 and Kill Bill: Vol. 2. The film was originally scheduled to be released as one part. However, due to the film's over 4 hour running time, it was split into two parts.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dY9UpmPuIlof7yewacccw3NVJhT.jpg",
      year: 2011,
    },
    {
      title: "Army of Shadows",
      genre: "War",
      language: "French",
      overview:
        "Betrayed by an informant, Philippe Gerbier finds himself trapped in a torturous Nazi prison camp. Though Gerbier escapes to rejoin the Resistance in occupied Marseilles, France, and exacts his revenge on the informant, he must continue a quiet, seemingly endless battle against the Nazis in an atmosphere of tension, paranoia and distrust.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//aqNZWM9bspt8zaDvVRIRiWxRVJ7.jpg",
      year: 1969,
    },
    {
      title: "Tae Guk Gi: The Brotherhood of War",
      genre: "Action",
      language: "Korean",
      overview:
        "When two brothers are forced to fight in the Korean War, the elder decides to take the riskiest missions if it will help shield the younger from battle.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//vyG8qpimh3XSlxc6OmPq8LJRJl.jpg",
      year: 2004,
    },
    {
      title: "Catch Me If You Can",
      genre: "Drama",
      language: "English",
      overview:
        "A true story about Frank Abagnale Jr. who, before his 19th birthday, successfully conned millions of dollars worth of checks as a Pan Am pilot, doctor, and legal prosecutor. An FBI agent makes it his mission to put him behind bars. But Frank not only eludes capture, he revels in the pursuit.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//ctjEj2xM32OvBXCq8zAdK3ZrsAj.jpg",
      year: 2002,
    },
    {
      title: "Toy Story",
      genre: "Animation",
      language: "English",
      overview:
        "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
      year: 1995,
    },
    {
      title: "Before Sunrise",
      genre: "Drama",
      language: "English",
      overview:
        "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//kf1Jb1c2JAOqjuzA3H4oDM263uB.jpg",
      year: 1995,
    },
    {
      title: "Trainspotting",
      genre: "Drama",
      language: "English",
      overview:
        "Heroin addict Mark Renton stumbles through bad ideas and sobriety attempts with his unreliable friends -- Sick Boy, Begbie, Spud and Tommy. He also has an underage girlfriend, Diane, along for the ride. After cleaning up and moving from Edinburgh to London, Mark finds he can't escape the life he left behind when Begbie shows up at his front door on the lam, and a scheming Sick Boy follows.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bhY62Dw8iW54DIhxPQerbuB9DOP.jpg",
      year: 1996,
    },
    {
      title: "Kill Bill: Vol. 1",
      genre: "Action",
      language: "English",
      overview:
        "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle – but she lives to plot her vengeance.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//v7TaX8kXMXs5yFFGR41guUDNcnB.jpg",
      year: 2003,
    },
    {
      title: "Argentina, 1985",
      genre: "Drama",
      language: "Spanish",
      overview:
        "In the 1980s, a team of lawyers takes on the heads of Argentina's bloody military dictatorship in a battle against odds and a race against time.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//u0TFD4YFMfYtNSLxfbWq5cg0KIh.jpg",
      year: 2022,
    },
    {
      title: "Ron's Gone Wrong",
      genre: "Animation",
      language: "English",
      overview:
        "In a world where walking, talking, digitally connected bots have become children's best friends, an 11-year-old finds that his robot buddy doesn't quite work the same as the others do.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//2gq9sEE2iDRqKx8OiZP6mYSTq4.jpg",
      year: 2021,
    },
    {
      title: "CODA",
      genre: "Drama",
      language: "English",
      overview:
        "As a CODA (Child of Deaf Adults), Ruby is the only hearing person in her deaf family. When the family's fishing business is threatened, Ruby finds herself torn between pursuing her love of music and her fear of abandoning her parents.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//BzVjmm8l23rPsijLiNLUzuQtyd.jpg",
      year: 2021,
    },
    {
      title: "Castle in the Sky",
      genre: "Adventure",
      language: "Japanese",
      overview:
        "A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//41XxSsJc5OrulP0m7TrrUeO2hoz.jpg",
      year: 1986,
    },
    {
      title: "The Treasure of the Sierra Madre",
      genre: "Adventure",
      language: "English",
      overview:
        "Fred C. Dobbs and Bob Curtin, both down on their luck in Tampico, Mexico in 1925, meet up with a grizzled prospector named Howard and decide to join with him in search of gold in the wilds of central Mexico. Through enormous difficulties, they eventually succeed in finding gold, but bandits, the elements, and most especially greed threaten to turn their success into disaster.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//pWcst7zVbi8Z8W6GFrdNE7HHRxL.jpg",
      year: 1948,
    },
    {
      title: "Rope",
      genre: "Thriller",
      language: "English",
      overview:
        "Two men murder a man in cold blood for the thrills and invite his parents over for a celebration to prove they have committed the perfect crime, yet they also have to deal with their former schoolmaster, whom is becoming suspicious.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gr2HoDd05E5F0b8KDXf0hGbYvUr.jpg",
      year: 1948,
    },
    {
      title: "Gone with the Wind",
      genre: "Drama",
      language: "English",
      overview:
        "The spoiled daughter of a Georgia plantation owner conducts a tumultuous romance with a cynical profiteer during the American Civil War and Reconstruction Era.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//lNz2Ow0wGCAvzckW7EOjE03KcYv.jpg",
      year: 1939,
    },
    {
      title: "Three Men and a Leg",
      genre: "Comedy",
      language: "Italian",
      overview:
        "Friends Aldo, Giovanni, and Giacomo travel from north to south for Giacomo's wedding, carrying a precious item: the father of the bride, a tyrannical rich man who is both their boss and father-in-law (also Aldo and Giovanni married his daughters), has entrusted them with a wooden leg, the work of a famous artist.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//2iVqgn6vnxDYqbRh7u15Q4XgG2M.jpg",
      year: 1997,
    },
    {
      title: "The Hidden Fortress",
      genre: "Drama",
      language: "Japanese",
      overview:
        "In feudal Japan, during a bloody war between clans, two cowardly and greedy peasants, soldiers of a defeated army, stumble upon a mysterious man who guides them to a fortress hidden in the mountains.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//1RTp3EZrKg7xj1HJK2x4Rqknnnu.jpg",
      year: 1958,
    },
    {
      title: "The Cabinet of Dr. Caligari",
      genre: "Drama",
      language: "German",
      overview:
        "Francis, a young man, recalls in his memory the horrible experiences he and his fiancée Jane recently went through. Francis and his friend Alan visit The Cabinet of Dr. Caligari, an exhibit where the mysterious doctor shows the somnambulist Cesare, and awakens him for some moments from his death-like sleep.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//myK9DeIsXWGKgUTZyGXg2IfFk0W.jpg",
      year: 1920,
    },
    {
      title: "Where Hands Touch",
      genre: "War",
      language: "English",
      overview:
        "Germany, 1944. Leyna, the 15-year old daughter of a white German mother and a black African father, meets Lutz, a compassionate member of the Hitler Youth whose father is a prominent Nazi soldier, and they form an unlikely connection in this quickly changing world.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//omKzydOrom9kpdfQUE0G9Y9sPl0.jpg",
      year: 2018,
    },
    {
      title: "La Notte",
      genre: "Drama",
      language: "Italian",
      overview:
        "A day in the life of an unfaithful married couple and their steadily deteriorating relationship in Milan.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//32Z0Vsrt9LGAiBBwTKR8L9B3ICa.jpg",
      year: 1961,
    },
    {
      title: "When Marnie Was There",
      genre: "Animation",
      language: "Japanese",
      overview:
        "Upon being sent to live with relatives in the countryside due to an illness, an emotionally distant adolescent girl becomes obsessed with an abandoned mansion and infatuated with a girl who lives there - a girl who may or may not be real.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//at7lShVfMdohEzC1VZYTZXY0hzP.jpg",
      year: 2014,
    },
    {
      title: "Million Dollar Baby",
      genre: "Drama",
      language: "English",
      overview:
        "Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//2ti3l1OeB8G94yyqfAI7nmMZUbA.jpg",
      year: 2004,
    },
    {
      title: "Tel chi el telùn",
      genre: "Comedy",
      language: "Italian",
      overview: "A comedy show.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//cr4zdQlqAaybwKTNnmVUWcs1cCU.jpg",
      year: 1999,
    },
    {
      title: "My Father's Violin",
      genre: "Drama",
      language: "Turkish",
      overview:
        "Through their shared grief and connection to music, an orphaned girl bonds with her emotionally aloof, successful violinist uncle.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//bwvoSRyXRRqtpvoHYhySQk2U4EM.jpg",
      year: 2022,
    },
    {
      title: "The Cranes Are Flying",
      genre: "Drama",
      language: "Russian",
      overview:
        "Veronika and Boris come together in Moscow shortly before World War II. Walking along the river, they watch cranes fly overhead, and promise to rendezvous before Boris leaves to fight. Boris misses the meeting and is off to the front lines, while Veronika waits patiently, sending letters faithfully. After her house is bombed, Veronika moves in with Boris' family, into the company of a cousin with his own intentions.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//foXYOdXEJ0rvtTDo4LLnsUnvPLB.jpg",
      year: 1957,
    },
    {
      title: "The Exterminating Angel",
      genre: "Comedy",
      language: "Spanish",
      overview:
        "After a lavish dinner party, the guests find themselves mysteriously unable to leave the room.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//dqaeUgLOWFbpEkEKzwAZgAcZMMO.jpg",
      year: 1962,
    },
    {
      title: "Raging Bull",
      genre: "Drama",
      language: "English",
      overview:
        "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//3Ph6BrMvgniIzFfsloKbSdXWcd8.jpg",
      year: 1980,
    },
    {
      title: "Wish Dragon",
      genre: "Animation",
      language: "English",
      overview:
        "Determined teen Din is longing to reconnect with his childhood best friend when he meets a wish-granting dragon who shows him the magic of possibilities.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//lnPf6hzANL6pVQTxUlsNYSuhT5l.jpg",
      year: 2021,
    },
    {
      title: "Up",
      genre: "Animation",
      language: "English",
      overview:
        "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//vpbaStTMt8qqXaEgnOR2EE4DNJk.jpg",
      year: 2009,
    },
    {
      title: "Ivan Vasilyevich Changes His Profession",
      genre: "Comedy",
      language: "Russian",
      overview:
        "A scientist builds a time machine and accidentally sends his apartment complex manager and a petty burglar to 16th century Moscow, while Tsar Ivan the Terrible travels to 1973.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//6f7vhvnma8sbO6821ShE5ViA3r8.jpg",
      year: 1973,
    },
    {
      title: "Cries and Whispers",
      genre: "Drama",
      language: "Swedish",
      overview:
        "As Agnes slowly dies of cancer, her sisters are so deeply immersed in their own psychic pains that they can't offer her the support she needs. Maria is wracked with guilt at her husband's attempted suicide, caused by his discovery of her extramarital affair. The self-loathing, suicidal Karin seems to regard her sister with revulsion. Only Anna, the deeply religious maid who lost her young child, seems able to offer Agnes solace and empathy.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//a1bMgB09YDvvRN9SitCclUYragr.jpg",
      year: 1972,
    },
    {
      title: "Akira",
      genre: "Animation",
      language: "Japanese",
      overview:
        "A secret military project endangers Neo-Tokyo when it turns a biker gang member into a rampaging psychic psychopath that only two teenagers and a group of psychics can stop.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//neZ0ykEsPqxamsX6o5QNUFILQrz.jpg",
      year: 1988,
    },
    {
      title: "The Third Man",
      genre: "Thriller",
      language: "English",
      overview:
        "In postwar Vienna, Austria, Holly Martins, a writer of pulp Westerns, arrives penniless as a guest of his childhood chum Harry Lime, only to learn he has died. Martins develops a conspiracy theory after learning of a \"third man\" present at the time of Harry's death, running into interference from British officer Major Calloway, and falling head-over-heels for Harry's grief-stricken lover, Anna.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//oIF3l7Dxp7Eyye10BNyM611wtKa.jpg",
      year: 1949,
    },
    {
      title: "The Whale",
      genre: "Drama",
      language: "English",
      overview:
        "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
      year: 2022,
    },
    {
      title: "12 Years a Slave",
      genre: "Drama",
      language: "English",
      overview:
        "In the pre-Civil War United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery. Facing cruelty as well as unexpected kindnesses Solomon struggles not only to stay alive, but to retain his dignity. In the twelfth year of his unforgettable odyssey, Solomon’s chance meeting with a Canadian abolitionist will forever alter his life.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//xdANQijuNrJaw1HA61rDccME4Tm.jpg",
      year: 2013,
    },
    {
      title: "A Trip to the Moon",
      genre: "Adventure",
      language: "French",
      overview:
        "Professor Barbenfouillis and five of his colleagues from the Academy of Astronomy travel to the Moon aboard a rocket propelled by a giant cannon. Once on the lunar surface, the bold explorers face the many perils hidden in the caves of the mysterious planet.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//9o0v5LLFk51nyTBHZSre6OB37n2.jpg",
      year: 1902,
    },
    {
      title: "A Man Escaped",
      genre: "Drama",
      language: "French",
      overview:
        "A captured French Resistance fighter during World War II engineers a daunting escape from prison.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//fIhfoHk9yZgRwkmSi1BwXYxqXzw.jpg",
      year: 1956,
    },
    {
      title: "The Great Escape",
      genre: "Adventure",
      language: "English",
      overview:
        "The Nazis, exasperated at the number of escapes from their prison camps by a relatively small number of Allied prisoners, relocate them to a high-security 'escape-proof' camp to sit out the remainder of the war. Undaunted, the prisoners plan one of the most ambitious escape attempts of World War II. Based on a true story.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//gBH4H8UMFxl139HaLz6lRuvsel8.jpg",
      year: 1963,
    },
    {
      title: "The Sixth Sense",
      genre: "Mystery",
      language: "English",
      overview:
        "Following an unexpected tragedy, child psychologist Malcolm Crowe meets a nine year old boy named Cole Sear, who is hiding a dark secret.",
      poster_link:
        "https://image.tmdb.org/t/p/w600_and_h900_bestv2//4AfSDjjCy6T5LA1TMz0Lh2HlpRh.jpg",
      year: 1999,
    },
  ]);
};
