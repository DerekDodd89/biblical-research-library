export type CurriculumLesson = {
  number: number;
  title: string;
};

export type CurriculumSection = {
  number: number;
  title: string;
  description: string;
  lessons: CurriculumLesson[];
};

export type CurriculumCourse = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  background: string;
  totalLessons: number;
  ageRange: string;
  sections: CurriculumSection[];
};

export const foundationsCourse: CurriculumCourse = {
  slug: "foundations",

  title: "Foundations",

  shortTitle: "Foundations",

  description:
    "A foundational study of Scripture, God, creation, Christ, salvation, the church, Christian living, and the Christian hope.",

  icon: "🏛️",

  background: "/images/curriculum/foundations-background.png",

  totalLessons: 100,

  ageRange: "Preschool through Adult",

  sections: [
    {
      number: 1,
      title: "The Bible: God's Revelation to Man",
      description:
        "Establishing the Bible as God's revealed Word and the foundation for knowing truth.",
      lessons: [
        { number: 1, title: "Why Study the Bible?" },
        { number: 2, title: "What Is the Bible?" },
        { number: 3, title: "Inspiration of Scripture" },
        { number: 4, title: "The Authority of Scripture" },
        { number: 5, title: "The Reliability of Scripture" },
        { number: 6, title: "The Preservation of Scripture" },
        { number: 7, title: "Understanding the Bible" },
        { number: 8, title: "The Bible's Central Message" },
        { number: 9, title: "The Bible and Truth" },
        { number: 10, title: "Building on God's Word" },
      ],
    },

    {
      number: 2,
      title: "Knowing God",
      description:
        "Introducing the nature, character, attributes, and work of God as revealed in Scripture.",
      lessons: [
        { number: 1, title: "Can We Know God?" },
        { number: 2, title: "The Existence of God" },
        { number: 3, title: "The Nature of God" },
        { number: 4, title: "The Holiness of God" },
        { number: 5, title: "The Love of God" },
        { number: 6, title: "The Justice of God" },
        { number: 7, title: "The Wisdom of God" },
        { number: 8, title: "The Power of God" },
        { number: 9, title: "The Faithfulness of God" },
        { number: 10, title: "Living in the Knowledge of God" },
      ],
    },

    {
      number: 3,
      title: "Creation & the Beginning",
      description:
        "Studying God's creation, humanity, sin, and the earliest events recorded in Scripture.",
      lessons: [
        { number: 1, title: "In the Beginning God" },
        { number: 2, title: "God Created the Heavens and the Earth" },
        { number: 3, title: "The Creation of Man" },
        { number: 4, title: "Made in the Image of God" },
        { number: 5, title: "Marriage and the Family" },
        { number: 6, title: "The Entrance of Sin" },
        { number: 7, title: "The Consequences of Sin" },
        { number: 8, title: "Cain and Abel" },
        { number: 9, title: "Noah and the Flood" },
        { number: 10, title: "The Nations and Babel" },
      ],
    },

    {
      number: 4,
      title: "God's Plan Through Israel",
      description:
        "Following God's unfolding plan through the patriarchs, Israel, the Law, and the promised nation.",
      lessons: [
        { number: 1, title: "The Call of Abraham" },
        { number: 2, title: "God's Covenant with Abraham" },
        { number: 3, title: "Isaac and Jacob" },
        { number: 4, title: "Joseph and God's Providence" },
        { number: 5, title: "Israel in Egypt" },
        { number: 6, title: "Moses and the Exodus" },
        { number: 7, title: "God's Covenant at Sinai" },
        { number: 8, title: "The Law of Moses" },
        { number: 9, title: "Israel in the Wilderness" },
        { number: 10, title: "Entering the Promised Land" },
      ],
    },

    {
      number: 5,
      title: "God's Kingdom & the Prophets",
      description:
        "Tracing Israel's kingdom, its kings and prophets, and God's continuing promise of the coming Messiah.",
      lessons: [
        { number: 1, title: "The Period of the Judges" },
        { number: 2, title: "Israel Demands a King" },
        { number: 3, title: "King Saul" },
        { number: 4, title: "King David" },
        { number: 5, title: "King Solomon" },
        { number: 6, title: "The Divided Kingdom" },
        { number: 7, title: "God Sends the Prophets" },
        { number: 8, title: "Judgment and Captivity" },
        { number: 9, title: "Return and Restoration" },
        { number: 10, title: "The Promise of the Coming King" },
      ],
    },

    {
      number: 6,
      title: "Jesus Christ",
      description:
        "Studying the identity, life, teaching, death, resurrection, and lordship of Jesus Christ.",
      lessons: [
        { number: 1, title: "The Coming of Jesus" },
        { number: 2, title: "Jesus the Son of God" },
        { number: 3, title: "The Ministry of Jesus" },
        { number: 4, title: "The Miracles of Jesus" },
        { number: 5, title: "The Teaching of Jesus" },
        { number: 6, title: "The Kingdom of God" },
        { number: 7, title: "The Death of Jesus" },
        { number: 8, title: "The Resurrection of Jesus" },
        { number: 9, title: "The Ascension of Jesus" },
        { number: 10, title: "Jesus Christ Is Lord" },
      ],
    },

    {
      number: 7,
      title: "Salvation",
      description:
        "Examining humanity's problem with sin and God's plan of redemption through Jesus Christ.",
      lessons: [
        { number: 1, title: "The Problem of Sin" },
        { number: 2, title: "God's Grace" },
        { number: 3, title: "Faith in Jesus Christ" },
        { number: 4, title: "Repentance" },
        { number: 5, title: "Confessing Christ" },
        { number: 6, title: "Baptism into Christ" },
        { number: 7, title: "Forgiveness of Sins" },
        { number: 8, title: "A New Life in Christ" },
        { number: 9, title: "Faithfulness to God" },
        { number: 10, title: "The Assurance of Salvation" },
      ],
    },

    {
      number: 8,
      title: "The Church",
      description:
        "Studying Christ's church, its identity, worship, organization, mission, and fellowship.",
      lessons: [
        { number: 1, title: "Jesus Built His Church" },
        { number: 2, title: "The Beginning of the Church" },
        { number: 3, title: "The Church as the Body of Christ" },
        { number: 4, title: "The Church as the Family of God" },
        { number: 5, title: "Worship in the Church" },
        { number: 6, title: "Leadership in the Church" },
        { number: 7, title: "The Mission of the Church" },
        { number: 8, title: "Fellowship in the Church" },
        { number: 9, title: "Serving One Another" },
        { number: 10, title: "Faithfulness in the Church" },
      ],
    },

    {
      number: 9,
      title: "Christian Living",
      description:
        "Applying the teaching of Scripture to character, worship, relationships, service, and daily discipleship.",
      lessons: [
        { number: 1, title: "Following Jesus" },
        { number: 2, title: "Growing in Faith" },
        { number: 3, title: "Prayer" },
        { number: 4, title: "Studying God's Word" },
        { number: 5, title: "Christian Character" },
        { number: 6, title: "Love for Others" },
        { number: 7, title: "Serving Others" },
        { number: 8, title: "Resisting Temptation" },
        { number: 9, title: "Sharing the Gospel" },
        { number: 10, title: "Living Faithfully" },
      ],
    },

    {
      number: 10,
      title: "Our Eternal Hope",
      description:
        "Looking toward Christ's return, the resurrection, judgment, eternity, and the Christian's hope.",
      lessons: [
        { number: 1, title: "The Promise of Christ's Return" },
        { number: 2, title: "The Resurrection of the Dead" },
        { number: 3, title: "The Final Judgment" },
        { number: 4, title: "Heaven" },
        { number: 5, title: "Hell" },
        { number: 6, title: "Eternal Life" },
        { number: 7, title: "The Christian's Hope" },
        { number: 8, title: "Living with Eternity in View" },
        { number: 9, title: "Faithful Until Death" },
        { number: 10, title: "God Makes All Things New" },
      ],
    },
  ],
};

export default foundationsCourse;