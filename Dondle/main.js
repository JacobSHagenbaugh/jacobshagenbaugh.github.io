const songList = [
  {
    Song: "Say You Will",
    Album: "808s & Heartbreak",
    Position: 1,
    Features: ["None"],
    Time: 377,
  },
  {
    Song: "Welcome To Heartbreak",
    Album: "808s & Heartbreak",
    Position: 2,
    Features: ["Kid Cudi"],
    Time: 262,
  },
  {
    Song: "Heartless",
    Album: "808s & Heartbreak",
    Position: 3,
    Features: ["None"],
    Time: 211,
  },
  {
    Song: "Amazing",
    Album: "808s & Heartbreak",
    Position: 4,
    Features: ["Jeezy"],
    Time: 238,
  },
  {
    Song: "Love Lockdown",
    Album: "808s & Heartbreak",
    Position: 5,
    Features: ["None"],
    Time: 270,
  },
  {
    Song: "Paranoid",
    Album: "808s & Heartbreak",
    Position: 6,
    Features: ["Mr Hudson", "Kid Cudi"],
    Time: 277,
  },
  {
    Song: "RoboCop",
    Album: "808s & Heartbreak",
    Position: 7,
    Features: ["None"],
    Time: 274,
  },
  {
    Song: "Street Lights",
    Album: "808s & Heartbreak",
    Position: 8,
    Features: ["None"],
    Time: 189,
  },
  {
    Song: "Bad News",
    Album: "808s & Heartbreak",
    Position: 9,
    Features: ["None"],
    Time: 238,
  },
  {
    Song: "See You In My Nightmares",
    Album: "808s & Heartbreak",
    Position: 10,
    Features: ["Lil Wayne"],
    Time: 258,
  },
  {
    Song: "Coldest Winter",
    Album: "808s & Heartbreak",
    Position: 11,
    Features: ["None"],
    Time: 164,
  },
  {
    Song: "Pinocchio Story",
    Album: "808s & Heartbreak",
    Position: 12,
    Features: ["None"],
    Time: 361,
  },
  {
    Song: "Donda Chant",
    Album: "Donda (Deluxe)",
    Position: 1,
    Features: ["Syleena Johnson"],
    Time: 52,
  },
  {
    Song: "Hurricane",
    Album: "Donda (Deluxe)",
    Position: 2,
    Features: ["The Weeknd", "Lil Baby", "KayCyy"],
    Time: 243,
  },
  {
    Song: "Moon",
    Album: "Donda (Deluxe)",
    Position: 3,
    Features: ["Don Toliver", "Kid Cudi"],
    Time: 156,
  },
  {
    Song: "Life Of The Party",
    Album: "Donda (Deluxe)",
    Position: 4,
    Features: ["Andre 3000", "DMX"],
    Time: 391,
  },
  {
    Song: "Off The Grid",
    Album: "Donda (Deluxe)",
    Position: 5,
    Features: ["Fivio Foreign", "Playboi Carti"],
    Time: 339,
  },
  {
    Song: "Jail",
    Album: "Donda (Deluxe)",
    Position: 6,
    Features: ["JAY-Z", "Dem Jointz"],
    Time: 297,
  },
  {
    Song: "Praise God",
    Album: "Donda (Deluxe)",
    Position: 7,
    Features: ["Travis Scott", "Baby Keem"],
    Time: 226,
  },
  {
    Song: "Come To Life",
    Album: "Donda (Deluxe)",
    Position: 8,
    Features: ["Tyler, The Creator"],
    Time: 310,
  },
  {
    Song: "Believe What I Say",
    Album: "Donda (Deluxe)",
    Position: 9,
    Features: ["Buju Banton"],
    Time: 242,
  },
  {
    Song: "No Child Left Behind",
    Album: "Donda (Deluxe)",
    Position: 10,
    Features: ["Bory"],
    Time: 178,
  },
  {
    Song: "Up From The Ashes",
    Album: "Donda (Deluxe)",
    Position: 11,
    Features: ["Sunday Service Choir"],
    Time: 162,
  },
  {
    Song: "Remote Control Pt 2",
    Album: "Donda (Deluxe)",
    Position: 12,
    Features: ["Young Thug", "Kid Cudi"],
    Time: 323,
  },
  {
    Song: "God Breathed",
    Album: "Donda (Deluxe)",
    Position: 13,
    Features: ["Bory"],
    Time: 333,
  },
  {
    Song: "Lord I Need You",
    Album: "Donda (Deluxe)",
    Position: 14,
    Features: ["None"],
    Time: 162,
  },
  {
    Song: "24",
    Album: "Donda (Deluxe)",
    Position: 15,
    Features: ["Sunday Service Choir"],
    Time: 197,
  },
  {
    Song: "Junya",
    Album: "Donda (Deluxe)",
    Position: 16,
    Features: ["Playboi Carti"],
    Time: 147,
  },
  {
    Song: "Never Abandon Your Family",
    Album: "Donda (Deluxe)",
    Position: 17,
    Features: ["None"],
    Time: 207,
  },
  {
    Song: "Donda",
    Album: "Donda (Deluxe)",
    Position: 18,
    Features: ["Stalone", "Sunday Service Choir"],
    Time: 128,
  },
  {
    Song: "Keep My Spirit Alive",
    Album: "Donda (Deluxe)",
    Position: 19,
    Features: ["KayCyy", "Westside Gunn", "Conway the Machine", "Royce da 5'9"],
    Time: 221,
  },
  {
    Song: "Jesus Lord Pt 2",
    Album: "Donda (Deluxe)",
    Position: 20,
    Features: [
      "Jay Electronica",
      "Sheek Louch",
      "Jadakiss",
      "Styles P",
      "Larry Hoover Jr.",
    ],
    Time: 725,
  },
  {
    Song: "Heaven And Hell",
    Album: "Donda (Deluxe)",
    Position: 21,
    Features: ["None"],
    Time: 145,
  },
  {
    Song: "Remote Control",
    Album: "Donda (Deluxe)",
    Position: 22,
    Features: ["Young Thug"],
    Time: 198,
  },
  {
    Song: "Tell The Vision",
    Album: "Donda (Deluxe)",
    Position: 23,
    Features: ["Pop Smoke"],
    Time: 104,
  },
  {
    Song: "Jonah",
    Album: "Donda (Deluxe)",
    Position: 24,
    Features: ["Lil Durk", "Bory"],
    Time: 195,
  },
  {
    Song: "Pure Souls",
    Album: "Donda (Deluxe)",
    Position: 25,
    Features: ["Roddy Rich", "Shenseea"],
    Time: 358,
  },
  {
    Song: "Ok Ok",
    Album: "Donda (Deluxe)",
    Position: 26,
    Features: ["Fivio Foreign", "Lil Yachty", "Rooga"],
    Time: 204,
  },
  {
    Song: "New Again",
    Album: "Donda (Deluxe)",
    Position: 27,
    Features: ["Sunday Service Choir"],
    Time: 183,
  },
  {
    Song: "Jesus Lord",
    Album: "Donda (Deluxe)",
    Position: 28,
    Features: ["Jay Electronica", "Larry Hoover Jr."],
    Time: 573,
  },
  {
    Song: "Ok Ok Pt 2",
    Album: "Donda (Deluxe)",
    Position: 29,
    Features: ["Fivio Foreign", "Shenseea"],
    Time: 154,
  },
  {
    Song: "Junya Pt 2",
    Album: "Donda (Deluxe)",
    Position: 30,
    Features: ["Playboi Carti", "Ty Dolla $ign"],
    Time: 182,
  },
  {
    Song: "Jail Pt 2",
    Album: "Donda (Deluxe)",
    Position: 31,
    Features: ["DaBaby", "Marilyn Manson", "Dem Jointz"],
    Time: 296,
  },
  {
    Song: "Keep My Spirit Alive Pt 2",
    Album: "Donda (Deluxe)",
    Position: 32,
    Features: ["KayCyy", "Westside Gunn", "Conway the Machine", "Royce da 5'9"],
    Time: 221,
  },
  {
    Song: "Good Morning",
    Album: "Graduation",
    Position: 1,
    Features: ["None"],
    Time: 195,
  },
  {
    Song: "Champion",
    Album: "Graduation",
    Position: 2,
    Features: ["None"],
    Time: 167,
  },
  {
    Song: "Stronger",
    Album: "Graduation",
    Position: 3,
    Features: ["None"],
    Time: 311,
  },
  {
    Song: "I Wonder",
    Album: "Graduation",
    Position: 4,
    Features: ["None"],
    Time: 243,
  },
  {
    Song: "Good Life",
    Album: "Graduation",
    Position: 5,
    Features: ["T-Pain"],
    Time: 207,
  },
  {
    Song: "Can't Tell Me Nothing",
    Album: "Graduation",
    Position: 6,
    Features: ["Jeezy"],
    Time: 271,
  },
  {
    Song: "Barry Bonds",
    Album: "Graduation",
    Position: 7,
    Features: ["Lil Wayne"],
    Time: 204,
  },
  {
    Song: "Drunk And Hot Girls",
    Album: "Graduation",
    Position: 8,
    Features: ["Mos Def"],
    Time: 313,
  },
  {
    Song: "Flashing Lights",
    Album: "Graduation",
    Position: 9,
    Features: ["Dwele"],
    Time: 237,
  },
  {
    Song: "Everything I Am",
    Album: "Graduation",
    Position: 10,
    Features: ["DJ Premier"],
    Time: 227,
  },
  {
    Song: "The Glory",
    Album: "Graduation",
    Position: 11,
    Features: ["None"],
    Time: 212,
  },
  {
    Song: "Homecoming",
    Album: "Graduation",
    Position: 12,
    Features: ["Chris Martin"],
    Time: 203,
  },
  {
    Song: "Big Brother",
    Album: "Graduation",
    Position: 13,
    Features: ["None"],
    Time: 287,
  },
  {
    Song: "Good Night",
    Album: "Graduation",
    Position: 14,
    Features: ["Mos Def", "Albe Back"],
    Time: 185,
  },
  {
    Song: "Every Hour",
    Album: "JESUS IS KING",
    Position: 1,
    Features: ["Sunday Service Choir"],
    Time: 112,
  },
  {
    Song: "Selah",
    Album: "JESUS IS KING",
    Position: 2,
    Features: ["Sunday Service Choir"],
    Time: 164,
  },
  {
    Song: "Follow God",
    Album: "JESUS IS KING",
    Position: 3,
    Features: ["None"],
    Time: 104,
  },
  {
    Song: "Closed On Sunday",
    Album: "JESUS IS KING",
    Position: 4,
    Features: ["A$AP Bari"],
    Time: 151,
  },
  {
    Song: "On God",
    Album: "JESUS IS KING",
    Position: 5,
    Features: ["None"],
    Time: 136,
  },
  {
    Song: "Everything We Need",
    Album: "JESUS IS KING",
    Position: 6,
    Features: ["Ty Dolla $ign", "Ant Clemons"],
    Time: 168,
  },
  {
    Song: "Water",
    Album: "JESUS IS KING",
    Position: 7,
    Features: ["Ant Clemons"],
    Time: 168,
  },
  {
    Song: "God Is",
    Album: "JESUS IS KING",
    Position: 8,
    Features: ["None"],
    Time: 203,
  },
  {
    Song: "Hands On",
    Album: "JESUS IS KING",
    Position: 9,
    Features: ["Fred Hammond"],
    Time: 203,
  },
  {
    Song: "Use This Gospel",
    Album: "JESUS IS KING",
    Position: 10,
    Features: ["Pusha T", "Kenny G", "No Malice"],
    Time: 213,
  },
  {
    Song: "Jesus Is Lord",
    Album: "JESUS IS KING",
    Position: 11,
    Features: ["None"],
    Time: 49,
  },
  {
    Song: "Feel The Love",
    Album: "KIDS SEE GHOSTS",
    Position: 1,
    Features: ["Kid Cudi", "Pusha T"],
    Time: 165,
  },
  {
    Song: "Fire",
    Album: "KIDS SEE GHOSTS",
    Position: 2,
    Features: ["Kid Cudi"],
    Time: 140,
  },
  {
    Song: "4th Dimension",
    Album: "KIDS SEE GHOSTS",
    Position: 3,
    Features: ["Kid Cudi"],
    Time: 153,
  },
  {
    Song: "Freeee (Ghost Town Pt. 2)",
    Album: "KIDS SEE GHOSTS",
    Position: 4,
    Features: ["Kid Cudi", "Ty Dolla $ign", "Anthony Hamilton"],
    Time: 206,
  },
  {
    Song: "Reborn",
    Album: "KIDS SEE GHOSTS",
    Position: 5,
    Features: ["Kid Cudi"],
    Time: 324,
  },
  {
    Song: "Kids See Ghosts",
    Album: "KIDS SEE GHOSTS",
    Position: 6,
    Features: ["Kid Cudi", "Yasiin Bey"],
    Time: 245,
  },
  {
    Song: "Cudi Montage",
    Album: "KIDS SEE GHOSTS",
    Position: 7,
    Features: ["Kid Cudi", "Mr Hudson"],
    Time: 197,
  },
  {
    Song: "Wake Up Mr. West",
    Album: "Late Registration",
    Position: 1,
    Features: ["None"],
    Time: 41,
  },
  {
    Song: "Heard 'Em Say",
    Album: "Late Registration",
    Position: 2,
    Features: ["Adam Levine"],
    Time: 203,
  },
  {
    Song: "Touch The Sky",
    Album: "Late Registration",
    Position: 3,
    Features: ["Lupe Fiasco"],
    Time: 236,
  },
  {
    Song: "Gold Digger",
    Album: "Late Registration",
    Position: 4,
    Features: ["Jamie Foxx"],
    Time: 207,
  },
  {
    Song: "Skit #1",
    Album: "Late Registration",
    Position: 5,
    Features: ["None"],
    Time: 33,
  },
  {
    Song: "Drive Slow",
    Album: "Late Registration",
    Position: 6,
    Features: ["Paul Wall", "GLC"],
    Time: 272,
  },
  {
    Song: "My Way Home",
    Album: "Late Registration",
    Position: 7,
    Features: ["Common"],
    Time: 103,
  },
  {
    Song: "Crack Music",
    Album: "Late Registration",
    Position: 8,
    Features: ["The Game"],
    Time: 270,
  },
  {
    Song: "Roses",
    Album: "Late Registration",
    Position: 9,
    Features: ["None"],
    Time: 245,
  },
  {
    Song: "Bring Me Down",
    Album: "Late Registration",
    Position: 10,
    Features: ["Brandy"],
    Time: 198,
  },
  {
    Song: "Addiction",
    Album: "Late Registration",
    Position: 11,
    Features: ["None"],
    Time: 267,
  },
  {
    Song: "Skit #2",
    Album: "Late Registration",
    Position: 12,
    Features: ["None"],
    Time: 31,
  },
  {
    Song: "Diamonds From Sierra Leone - Remix",
    Album: "Late Registration",
    Position: 13,
    Features: ["JAY-Z"],
    Time: 233,
  },
  {
    Song: "We Major",
    Album: "Late Registration",
    Position: 14,
    Features: ["Nas", "Really Doe"],
    Time: 448,
  },
  {
    Song: "Skit #3",
    Album: "Late Registration",
    Position: 15,
    Features: ["None"],
    Time: 24,
  },
  {
    Song: "Hey Mama",
    Album: "Late Registration",
    Position: 16,
    Features: ["None"],
    Time: 305,
  },
  {
    Song: "Celebration",
    Album: "Late Registration",
    Position: 17,
    Features: ["None"],
    Time: 198,
  },
  {
    Song: "Skit #4",
    Album: "Late Registration",
    Position: 18,
    Features: ["None"],
    Time: 78,
  },
  {
    Song: "Gone",
    Album: "Late Registration",
    Position: 19,
    Features: ["Consequence", "Cam'ron"],
    Time: 333,
  },
  {
    Song: "Diamonds From Sierra Leone - Bonus Track",
    Album: "Late Registration",
    Position: 20,
    Features: ["None"],
    Time: 238,
  },
  {
    Song: "Late",
    Album: "Late Registration",
    Position: 21,
    Features: ["None"],
    Time: 230,
  },
  {
    Song: "Dark Fantasy",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 1,
    Features: ["Nicki Minaj", "Justin Vernon", "Teyana Taylor"],
    Time: 280,
  },
  {
    Song: "Gorgeous",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 2,
    Features: ["Kid Cudi", "Raekwon"],
    Time: 357,
  },
  {
    Song: "POWER",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 3,
    Features: ["None"],
    Time: 292,
  },
  {
    Song: "All Of The Lights (Interlude)",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 4,
    Features: ["Elton John"],
    Time: 62,
  },
  {
    Song: "All Of The Lights",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 5,
    Features: [
      "Rihanna",
      "Elly Jackson",
      "Kid Cudi",
      "Fergie",
      "Drake",
      "Alicia Keys",
      "Elton John",
    ],
    Time: 299,
  },
  {
    Song: "Monster",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 6,
    Features: [
      "JAY-Z",
      "Rick Ross",
      "Nicki Minaj",
      "Bon Iver",
      "Justin Vernon",
      "Charlie Wilson",
    ],
    Time: 378,
  },
  {
    Song: "So Appalled",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 7,
    Features: ["JAY-Z", "Pusha T", "CyHi The Prince", "Swizz Beats", "RZA"],
    Time: 397,
  },
  {
    Song: "Devil In A New Dress",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 8,
    Features: ["Rick Ross", "Mike Dean"],
    Time: 351,
  },
  {
    Song: "Runaway",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 9,
    Features: ["Pusha T", "Rick James"],
    Time: 547,
  },
  {
    Song: "Hell Of A Life",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 10,
    Features: ["None"],
    Time: 327,
  },
  {
    Song: "Blame Game",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 11,
    Features: ["John Legend", "Chris Rock"],
    Time: 469,
  },
  {
    Song: "Lost In The World",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 12,
    Features: ["Bon Iver", "Justin Vernon", "Elly Jackson", "Gil Scott-Heron"],
    Time: 256,
  },
  {
    Song: "Who Will Survive In America",
    Album: "My Beautiful Dark Twisted Fantasy",
    Position: 13,
    Features: ["Gil Scott-Heron"],
    Time: 98,
  },
  {
    Song: "Intro",
    Album: "The College Dropout",
    Position: 1,
    Features: ["None"],
    Time: 19,
  },
  {
    Song: "We Don't Care",
    Album: "The College Dropout",
    Position: 2,
    Features: ["None"],
    Time: 239,
  },
  {
    Song: "Graduation Day",
    Album: "The College Dropout",
    Position: 3,
    Features: ["John Legend"],
    Time: 81,
  },
  {
    Song: "All Falls Down",
    Album: "The College Dropout",
    Position: 4,
    Features: ["Syleena Johnson"],
    Time: 223,
  },
  {
    Song: "I'll Fly Away",
    Album: "The College Dropout",
    Position: 5,
    Features: ["None"],
    Time: 69,
  },
  {
    Song: "Spaceship",
    Album: "The College Dropout",
    Position: 6,
    Features: ["GLC", "Consequence"],
    Time: 325,
  },
  {
    Song: "Jesus Walks",
    Album: "The College Dropout",
    Position: 7,
    Features: ["None"],
    Time: 193,
  },
  {
    Song: "Never Let Me Down",
    Album: "The College Dropout",
    Position: 8,
    Features: ["JAY-Z", "J. Ivy"],
    Time: 324,
  },
  {
    Song: "Get Em High",
    Album: "The College Dropout",
    Position: 9,
    Features: ["Talib Kweli", "Common"],
    Time: 289,
  },
  {
    Song: "Workout Plan",
    Album: "The College Dropout",
    Position: 10,
    Features: ["None"],
    Time: 46,
  },
  {
    Song: "The New Workout Plan",
    Album: "The College Dropout",
    Position: 11,
    Features: ["None"],
    Time: 322,
  },
  {
    Song: "Slow Jamz",
    Album: "The College Dropout",
    Position: 12,
    Features: ["Twista", "Jamie Foxx"],
    Time: 316,
  },
  {
    Song: "Breathe In Breathe Out",
    Album: "The College Dropout",
    Position: 13,
    Features: ["Ludacris"],
    Time: 246,
  },
  {
    Song: "School Spirit Skit 1",
    Album: "The College Dropout",
    Position: 14,
    Features: ["None"],
    Time: 78,
  },
  {
    Song: "School Spirit",
    Album: "The College Dropout",
    Position: 15,
    Features: ["None"],
    Time: 182,
  },
  {
    Song: "School Spirit Skit 2",
    Album: "The College Dropout",
    Position: 16,
    Features: ["None"],
    Time: 43,
  },
  {
    Song: "Lil Jimmy Skit",
    Album: "The College Dropout",
    Position: 17,
    Features: ["None"],
    Time: 53,
  },
  {
    Song: "Two Words",
    Album: "The College Dropout",
    Position: 18,
    Features: ["Mos Def", "Freeway", "The Boys Choir of Harlem"],
    Time: 266,
  },
  {
    Song: "Through The Wire",
    Album: "The College Dropout",
    Position: 19,
    Features: ["None"],
    Time: 221,
  },
  {
    Song: "Family Business",
    Album: "The College Dropout",
    Position: 20,
    Features: ["None"],
    Time: 278,
  },
  {
    Song: "Last Call",
    Album: "The College Dropout",
    Position: 21,
    Features: ["JAY-Z", "Dame Dash"],
    Time: 760,
  },
  {
    Song: "Ultralight Beam",
    Album: "The Life Of Pablo",
    Position: 1,
    Features: [
      "Samoria Green",
      "Natalie Green",
      "The-Dream",
      "Kelly Price",
      "Chance The Rapper",
      "Kirk Franklin",
    ],
    Time: 320,
  },
  {
    Song: "Father Stretch My Hands Pt. 1",
    Album: "The Life Of Pablo",
    Position: 2,
    Features: ["Pastor T.L.Barrett", "Future", "Kid Cudi", "Kelly Price"],
    Time: 135,
  },
  {
    Song: "Pt. 2",
    Album: "The Life Of Pablo",
    Position: 3,
    Features: ["None"],
    Time: 130,
  },
  {
    Song: "Famous",
    Album: "The Life Of Pablo",
    Position: 4,
    Features: ["Rihanna", "Swizz Beats"],
    Time: 196,
  },
  {
    Song: "Feedback",
    Album: "The Life Of Pablo",
    Position: 5,
    Features: ["None"],
    Time: 147,
  },
  {
    Song: "Low Lights",
    Album: "The Life Of Pablo",
    Position: 6,
    Features: ["Kelly Price"],
    Time: 131,
  },
  {
    Song: "Highlights",
    Album: "The Life Of Pablo",
    Position: 7,
    Features: ["Kelly Price", "Young Thug", "El Debarge", "The-Dream"],
    Time: 199,
  },
  {
    Song: "Freestyle 4",
    Album: "The Life Of Pablo",
    Position: 8,
    Features: ["Desiigner"],
    Time: 123,
  },
  {
    Song: "I Love Kanye",
    Album: "The Life Of Pablo",
    Position: 9,
    Features: ["None"],
    Time: 44,
  },
  {
    Song: "Waves",
    Album: "The Life Of Pablo",
    Position: 10,
    Features: ["Akon", "Chris Brown", "Kid Cudi"],
    Time: 181,
  },
  {
    Song: "FML",
    Album: "The Life Of Pablo",
    Position: 11,
    Features: ["The Weeknd", "Section 25"],
    Time: 236,
  },
  {
    Song: "Real Friends",
    Album: "The Life Of Pablo",
    Position: 12,
    Features: ["Ty Dolla $ign"],
    Time: 251,
  },
  {
    Song: "Wolves",
    Album: "The Life Of Pablo",
    Position: 13,
    Features: ["Vic Mensa", "Sia"],
    Time: 301,
  },
  {
    Song: "Frank's Track",
    Album: "The Life Of Pablo",
    Position: 14,
    Features: ["Frank Ocean"],
    Time: 38,
  },
  {
    Song: "Siiiiiiiiilver Surffffeeeeer Intermission",
    Album: "The Life Of Pablo",
    Position: 15,
    Features: ["Max B", "French Montana"],
    Time: 56,
  },
  {
    Song: "30 Hours",
    Album: "The Life Of Pablo",
    Position: 16,
    Features: ["Andre 3000"],
    Time: 323,
  },
  {
    Song: "No More Parties In LA",
    Album: "The Life Of Pablo",
    Position: 17,
    Features: ["Kendrick Lamar"],
    Time: 374,
  },
  {
    Song: "Facts (Charlie Heat Version)",
    Album: "The Life Of Pablo",
    Position: 18,
    Features: ["None"],
    Time: 200,
  },
  {
    Song: "Fade",
    Album: "The Life Of Pablo",
    Position: 19,
    Features: ["Ty Dolla $ign", "Post Malone"],
    Time: 193,
  },
  {
    Song: "Saint Pablo",
    Album: "The Life Of Pablo",
    Position: 20,
    Features: ["Sampha"],
    Time: 372,
  },
  {
    Song: "No Church In The Wild",
    Album: "Watch The Throne (Deluxe)",
    Position: 1,
    Features: ["JAY-Z", "Frank Ocean", "The-Dream"],
    Time: 272,
  },
  {
    Song: "Lift Off",
    Album: "Watch The Throne (Deluxe)",
    Position: 2,
    Features: ["JAY-Z", "Beyonce"],
    Time: 266,
  },
  {
    Song: "Ni**as In Paris",
    Album: "Watch The Throne (Deluxe)",
    Position: 3,
    Features: ["JAY-Z"],
    Time: 219,
  },
  {
    Song: "Otis",
    Album: "Watch The Throne (Deluxe)",
    Position: 4,
    Features: ["JAY-Z"],
    Time: 178,
  },
  {
    Song: "Gotta Have It",
    Album: "Watch The Throne (Deluxe)",
    Position: 5,
    Features: ["JAY-Z"],
    Time: 140,
  },
  {
    Song: "New Day",
    Album: "Watch The Throne (Deluxe)",
    Position: 6,
    Features: ["JAY-Z"],
    Time: 272,
  },
  {
    Song: "That's My Bitch",
    Album: "Watch The Throne (Deluxe)",
    Position: 7,
    Features: ["JAY-Z", "Elly Jackson", "Justin Vernon"],
    Time: 202,
  },
  {
    Song: "Welcome To The Jungle",
    Album: "Watch The Throne (Deluxe)",
    Position: 8,
    Features: ["JAY-Z", "Swizz Beats"],
    Time: 174,
  },
  {
    Song: "Who Gon Stop Me",
    Album: "Watch The Throne (Deluxe)",
    Position: 9,
    Features: ["JAY-Z"],
    Time: 256,
  },
  {
    Song: "Murder To Excellence",
    Album: "Watch The Throne (Deluxe)",
    Position: 10,
    Features: ["JAY-Z"],
    Time: 300,
  },
  {
    Song: "Made In America",
    Album: "Watch The Throne (Deluxe)",
    Position: 11,
    Features: ["JAY-Z", "Frank Ocean"],
    Time: 292,
  },
  {
    Song: "Why I Love You",
    Album: "Watch The Throne (Deluxe)",
    Position: 12,
    Features: ["JAY-Z", "Mr Hudson"],
    Time: 201,
  },
  {
    Song: "Illest Motherf**ker Alive",
    Album: "Watch The Throne (Deluxe)",
    Position: 13,
    Features: ["JAY-Z", "Kid Cudi"],
    Time: 503,
  },
  {
    Song: "H.A.M",
    Album: "Watch The Throne (Deluxe)",
    Position: 14,
    Features: ["JAY-Z"],
    Time: 275,
  },
  {
    Song: "Primetime",
    Album: "Watch The Throne (Deluxe)",
    Position: 15,
    Features: ["JAY-Z"],
    Time: 199,
  },
  {
    Song: "The Joy",
    Album: "Watch The Throne (Deluxe)",
    Position: 16,
    Features: [
      "JAY-Z",
      "Curtis Mayfield",
      "Charlie Wilson",
      "Pete Rock",
      "Kid Cudi",
    ],
    Time: 317,
  },
  {
    Song: "I Thought About Killing You",
    Album: "ye",
    Position: 1,
    Features: ["None"],
    Time: 274,
  },
  {
    Song: "Yikes",
    Album: "ye",
    Position: 2,
    Features: ["None"],
    Time: 188,
  },
  {
    Song: "All Mine",
    Album: "ye",
    Position: 3,
    Features: ["Ant Clemons", "Ty Dolla $ign"],
    Time: 145,
  },
  {
    Song: "Wouldn't Leave",
    Album: "ye",
    Position: 4,
    Features: ["PARTYNEXTDOOR", "Jeremih", "Ty Dolla $ign"],
    Time: 205,
  },
  {
    Song: "No Mistakes",
    Album: "ye",
    Position: 5,
    Features: ["Kid Cudi", "Charlie Wilson"],
    Time: 123,
  },
  {
    Song: "Ghost Town",
    Album: "ye",
    Position: 6,
    Features: ["PARTYNEXTDOOR", "Kid Cudi", "070 Shake"],
    Time: 271,
  },
  {
    Song: "Violent Crimes",
    Album: "ye",
    Position: 7,
    Features: ["070 Shake", "Ty Dolla $ign", "Nicki Minaj"],
    Time: 215,
  },
  {
    Song: "On Sight",
    Album: "Yeezus",
    Position: 1,
    Features: ["None"],
    Time: 156,
  },
  {
    Song: "Black Skinhead",
    Album: "Yeezus",
    Position: 2,
    Features: ["None"],
    Time: 188,
  },
  {
    Song: "I Am A God (Feat. God)",
    Album: "Yeezus",
    Position: 3,
    Features: ["Capelton", "Justin Vernon", "God"],
    Time: 231,
  },
  {
    Song: "New Slaves",
    Album: "Yeezus",
    Position: 4,
    Features: ["Swizz Beats", "Frank Ocean"],
    Time: 256,
  },
  {
    Song: "Hold My Liquor",
    Album: "Yeezus",
    Position: 5,
    Features: ["Justin Vernon", "Chief Keef"],
    Time: 326,
  },
  {
    Song: "I'm In It",
    Album: "Yeezus",
    Position: 6,
    Features: ["Assassin", "Justin Vernon"],
    Time: 234,
  },
  {
    Song: "Blood On The Leaves",
    Album: "Yeezus",
    Position: 7,
    Features: ["None"],
    Time: 359,
  },
  {
    Song: "Guilt Trip",
    Album: "Yeezus",
    Position: 8,
    Features: ["Popcaan", "Kid Cudi"],
    Time: 243,
  },
  {
    Song: "Send It Up",
    Album: "Yeezus",
    Position: 9,
    Features: ["King Louie"],
    Time: 178,
  },
  {
    Song: "Bound 2",
    Album: "Yeezus",
    Position: 10,
    Features: ["Charlie Wilson"],
    Time: 229,
  },
];

const correctAnswer = Math.floor(Math.random() * songList.length);

console.log("Correct Answer is " + songList[correctAnswer].Song);

let amountOfGuesses = 0;
let popup = document.getElementById("popup");
const searchBar = document.getElementById("edu");
let bigShare = [];

// Song Name Array for the autocomplete function.
var songNamesArray = songList.map(song => song.Song);

// Global Image Declarations for respective albums.
var img = "";
function getAlbumArt(x) { 
  switch(songList[x].Album) {
    case "The College Dropout":
      img = "img/1.jpg";
      break;
    case "Late Registration":
      img = "img/2.png";
      break;
    case "Graduation":
      img = "img/3.png";
      break;
    case "808s & Heartbreak":
      img = "img/4.jpg";
      break;
    case "My Beautiful Dark Twisted Fantasy":
      img = "img/5.jpg";
      break;
    case "Yeezus":
      img = "img/6.png";
      break;
    case "The Life Of Pablo":
      img = "img/7.png";
      break;
    case "ye":
      img = "img/8.png";
      break;
    case "JESUS IS KING":
      img = "img/9.png";
      break;
    case "Donda (Deluxe)":
      img = "img/10.png";
      break;
    case "KIDS SEE GHOSTS":
      img = "img/11.jpg";
      break;
    case "Watch The Throne (Deluxe)":
      img = "img/12.png";
      break;
  }
  return img;
}

//Search Prediction
function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
      closeAllLists(e.target);
  });
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("edu"), songNamesArray);




function compareGuess(userGuess) {
  let j = 0;

  for (let i = 0; i < songList.length; i++) {
    if (
      userGuess.toLowerCase() === songList[correctAnswer].Song.toLowerCase()
    ) {
      j = 2;
      readOutGuess(correctAnswer);
      break;
    } else if (userGuess.toLowerCase() === songList[i].Song.toLowerCase()) {
      j++;
      readOutGuess(i);
    }
  }
  //Give the result of the guess

  if (j === 1) {
    amountOfGuesses++;
    document.getElementById("guessNumber").innerHTML =
      "Guess " + (amountOfGuesses + 1) + " of 6";
    if (amountOfGuesses >= 6) {
      document.getElementById("guessNumber").innerHTML = "Didn't get it today.";
      popup.classList.add("open-popup");
      document.getElementById("right-or-wrong").innerHTML =
        "Today's correct song was";
      document.getElementById("correct-song").innerHTML =
        songList[correctAnswer].Song;
      document.getElementById("albumArt").src = getAlbumArt(correctAnswer);
    }
  } else if (j > 1) {
    amountOfGuesses++;
    document.getElementById(
      "guessNumber"
    ).innerHTML = `Nice Job! You got it in ${amountOfGuesses} guesses!`;
    popup.classList.add("open-popup");
    document.getElementById("right-or-wrong").innerHTML =
      "Today's correct song was";
    document.getElementById("correct-song").innerHTML =
      songList[correctAnswer].Song;
    
      // INSERT CORRECT IMG
    document.getElementById("albumArt").src = getAlbumArt(correctAnswer);

  } else {
    console.log("Invalid guess");
  }
}

function readOutGuess(num) {
  if (amountOfGuesses >= 0 && amountOfGuesses < 6) {
    //Sharing results
    var share = [];

    var table = document.getElementById("show");
    var row = table.insertRow(amountOfGuesses + 1);

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = songList[num].Song;
    
    var art = document.createElement("img");
    img = getAlbumArt(num);
    art.src = img;
    cell2.innerHTML = " " + songList[num].Album;
    cell2.prepend(art);

    cell3.innerHTML = songList[num].Position;

    //Add spaces between multiple features

    var stringFeat = "";

    if (songList[num].Features.length > 1) {
      for (i = 0; i < songList[num].Features.length - 1; i++) {
        var featObj = songList[num].Features.slice(i, i + 1);
        var featObjToString = String(featObj);
        stringFeat += featObjToString + ", ";
      }
      var lastFeat = songList[num].Features.slice(
        songList[num].Features.length - 1,
        songList[num].Features.length
      );
      var lastFeatString = String(lastFeat);
      stringFeat += lastFeatString;
      cell4.innerHTML = stringFeat;
    } else {
      cell4.innerHTML = songList[num].Features;
    }

    //Coverting time to minutes:seconds
    if (songList[num].Time < 60) {
      cell5.innerHTML = "0:" + songList[num].Time;
    } else if (songList[num].Time % 60 >= 10) {
      cell5.innerHTML =
        Math.floor(songList[num].Time / 60) + ":" + (songList[num].Time % 60);
    } else {
      cell5.innerHTML =
        Math.floor(songList[num].Time / 60) + ":0" + (songList[num].Time % 60);
    }

    // ################################################# //
    //	COLOR CHECKS
    // ################################################# //

    // Cell1                                                                            //Green
    if (songList[num].Song === songList[correctAnswer].Song) {
      cell1.style.background = "#3db946";
      share[0] = "Green";
    } else {
      share[0] = "White";
    }

    // Cell2
    // Yellow = within 2
    if (songList[num].Album === songList[correctAnswer].Album) {
      //Green
      cell2.style.background = "#3db946";
      share[1] = "Green";
    } else {
      var userAlbum;
      var correctAlbum;

      if (songList[num].Album === "The College Dropout") {
        userAlbum = 0;
      } else if (songList[num].Album === "Late Registration") {
        userAlbum = 1;
      } else if (songList[num].Album === "Graduation") {
        userAlbum = 2;
      } else if (songList[num].Album === "808s & Heartbreak") {
        userAlbum = 3;
      } else if (songList[num].Album === "My Beautiful Dark Twisted Fantasy") {
        userAlbum = 4;
      } else if (songList[num].Album === "Watch The Throne (Deluxe)") {
        userAlbum = 5;
      } else if (songList[num].Album === "Yeezus") {
        userAlbum = 6;
      } else if (songList[num].Album === "The Life Of Pablo") {
        userAlbum = 7;
      } else if (songList[num].Album === "ye") {
        userAlbum = 8;
      } else if (songList[num].Album === "KIDS SEE GHOSTS") {
        userAlbum = 9;
      } else if (songList[num].Album === "JESUS IS KING") {
        userAlbum = 10;
      } else if (songList[num].Album === "Donda (Deluxe)") {
        userAlbum = 11;
      }

      if (songList[correctAnswer].Album === "The College Dropout") {
        correctAlbum = 0;
      } else if (songList[correctAnswer].Album === "Late Registration") {
        correctAlbum = 1;
      } else if (songList[correctAnswer].Album === "Graduation") {
        correctAlbum = 2;
      } else if (songList[correctAnswer].Album === "808s & Heartbreak") {
        correctAlbum = 3;
      } else if (
        songList[correctAnswer].Album === "My Beautiful Dark Twisted Fantasy"
      ) {
        correctAlbum = 4;
      } else if (
        songList[correctAnswer].Album === "Watch The Throne (Deluxe)"
      ) {
        correctAlbum = 5;
      } else if (songList[correctAnswer].Album === "Yeezus") {
        correctAlbum = 6;
      } else if (songList[correctAnswer].Album === "The Life Of Pablo") {
        correctAlbum = 7;
      } else if (songList[correctAnswer].Album === "ye") {
        correctAlbum = 8;
      } else if (songList[correctAnswer].Album === "KIDS SEE GHOSTS") {
        correctAlbum = 9;
      } else if (songList[correctAnswer].Album === "JESUS IS KING") {
        correctAlbum = 10;
      } else if (songList[correctAnswer].Album === "Donda (Deluxe)") {
        correctAlbum = 11;
      }

      if (userAlbum + 2 >= correctAlbum && userAlbum - 2 <= correctAlbum) {
        cell2.style.background = "#fbff83";
        share[1] = "Yellow";
      } else {
        share[1] = "White";
      }
    }

    // Cell3
    // yellow = within 2
    if (songList[num].Position === songList[correctAnswer].Position) {
      //Green
      cell3.style.background = "#3db946";
      share[2] = "Green";
    } else if (
      songList[num].Position + 2 >= songList[correctAnswer].Position &&
      songList[num].Position - 2 <= songList[correctAnswer].Position
    ) {
      cell3.style.background = "#fbff83";
      share[2] = "Yellow";
    } else {
      share[2] = "White";
    }

    // Cell4
    // yellow = contains a feature but not all

    var k = 0;

    for (i = 0; i < songList[num].Features.length; i++) {
      for (j = 0; j < songList[correctAnswer].Features.length; j++) {
        var guessObj = songList[num].Features.slice(i, i + 1);
        var answerObj = songList[correctAnswer].Features.slice(j, j + 1);

        var guessCheck = String(guessObj);
        var answerCheck = String(answerObj);

        if (guessCheck === answerCheck) {
          k++;
        }
      }
    }

    if (
      songList[num].Features.length === songList[correctAnswer].Features.length
    ) {
      if (k === songList[num].Features.length) {
        //Green
        cell4.style.background = "#3db946";
        share[3] = "Green";
      } else if (k > 0) {
        cell4.style.background = "#fbff83";
        share[3] = "Yellow";
      } else {
        share[3] = "White";
      }
    } else if (k > 0) {
      cell4.style.background = "#fbff83";
      share[3] = "Yellow";
    } else {
      share[3] = "White";
    }

    // Cell5
    // yellow = within 30 seconds
    if (songList[num].Time === songList[correctAnswer].Time) {
      //Green
      cell5.style.background = "#3db946";
      share[4] = "Green";
    } else if (
      songList[num].Time + 30 >= songList[correctAnswer].Time &&
      songList[num].Time - 30 <= songList[correctAnswer].Time
    ) {
      cell5.style.background = "#fbff83";
      share[4] = "Yellow";
    } else {
      share[4] = "White";
    }

	//Share button
    console.log(share);
	for (i = 0; i < 5; i++) {
		bigShare.push(share[i]);
	}
	console.log(bigShare);

	const greenSquare = "🟩";
	const yellowSquare = "🟨";
	const whiteSquare = "⬜";

	var FINAL_SHARE = "Dondle\n";
	for (j = 0; j < bigShare.length; j++) {
		if (bigShare[j] === "Green") {
			FINAL_SHARE = FINAL_SHARE.concat(greenSquare);
		} else if (bigShare[j] === "Yellow") {
			FINAL_SHARE = FINAL_SHARE.concat(yellowSquare);
		} else if (bigShare[j] === "White") {
			FINAL_SHARE = FINAL_SHARE.concat(whiteSquare);
		}

		console.log(String(bigShare[j]));

		if ((j + 1) % 5 == 0) {
			FINAL_SHARE = FINAL_SHARE.concat("\n");
		}
	}

	console.log(FINAL_SHARE);
	shareData(FINAL_SHARE);
  }
  function shareData(shareString) {
    navigator.clipboard.writeText(FINAL_SHARE);
  }
}
