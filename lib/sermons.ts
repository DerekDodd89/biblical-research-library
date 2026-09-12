export type SermonSection = {
  heading: string;
  points: {
    heading: string;
    scripture: string;
    summary: string;
  }[];
  application: string[];
};

export type SermonResources = {
  downloadFolder: string;

  l2: {
    20?: string;
    30?: string;
    40?: string;
  };

  l3Archive?: string;
  powerpoint?: string;
  handout?: string;
  package?: string;
};

export type Sermon = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  series: string;
  speaker: string;
  status: "draft" | "review" | "published";
  primaryText: string;
  proposition: string;
  topics: string[];
  audience: string;
  estimatedMinutes: number;
  introduction: string[];
  sections: SermonSection[];
  conclusion: string[];
  relatedBrls: string[];
  resources: SermonResources;
};

export const sermons: Sermon[] = [
  {
    id: "BRL-SER-410.003",
    slug: "do-you-know-god-sermon-1",
    title: "Do You Know God?",
    subtitle: "Sermon 1 — Getting to Know God",
    series: "Do You Know God?",
    speaker: "Derek Dodd",
    status: "published",
    primaryText: "Jeremiah 9:23–24",
    proposition:
      "Just as we know the personal preferences of those we love, God has revealed details about Himself that invite us into a deeper relationship with Him.",
    topics: [
      "Knowing God",
      "Character of God",
      "Worship",
      "Fellowship",
      "Christian Living",
    ],
    audience: "General",
    estimatedMinutes: 30,

    introduction: [
      "How well do you know your spouse?",
      "Favorite flower?",
      "Favorite color?",
      "Favorite meal?",
      "Favorite vacation?",
      "Those answers do not create the relationship. They reveal the relationship.",
      "Now imagine someone saying, “I have been married twenty years, but I do not know what my wife likes.”",
      "We would all think that was strange.",
      "Yet many Christians have worshiped God for years and have never asked, “What does God like?”",
    ],

    sections: [
      {
        heading: "I. Do You Know God’s Favorite Flower?",
        points: [
          {
            heading: "A. The Flower God Chose",
            scripture: "Exodus 25:31–40",
            summary:
              "The lampstand in the tabernacle was fashioned after almond blossoms.",
          },
          {
            heading: "B. The Flower God Confirmed",
            scripture: "Numbers 17:8",
            summary:
              "Aaron’s rod budded, blossomed, and produced almonds as God confirmed His chosen priesthood.",
          },
          {
            heading: "C. The Flower God Revealed",
            scripture: "Jeremiah 1:11–12",
            summary:
              "The almond branch illustrated God’s watchfulness over His word.",
          },
          {
            heading: "D. The Flower God Remembered",
            scripture: "Ecclesiastes 12:5",
            summary:
              "The almond blossom became part of God’s imagery for aging and the passing of life.",
          },
        ],
        application: [
          "God could have chosen any flower.",
          "He repeatedly chose the almond blossom.",
          "God teaches through beauty, imagery, and symbolism.",
        ],
      },

      {
        heading: "II. Do You Know God’s Favorite Color?",
        points: [
          {
            heading: "A. Blue",
            scripture: "Exodus 26",
            summary:
              "Blue communicated heaven, holiness, and remembrance of God’s commandments.",
          },
          {
            heading: "B. Purple",
            scripture: "Exodus 26",
            summary:
              "Purple communicated royalty, majesty, and the rule of the King.",
          },
          {
            heading: "C. Scarlet",
            scripture: "Exodus 26",
            summary:
              "Scarlet communicated sacrifice, blood, and redemption.",
          },
          {
            heading: "D. Gold",
            scripture: "Exodus 25",
            summary:
              "Gold communicated glory, purity, value, and the presence of God.",
          },
        ],
        application: [
          "God did not decorate the tabernacle by accident.",
          "Every color was chosen with purpose.",
          "God uses beauty to communicate truth.",
        ],
      },

      {
        heading: "III. Do You Know God’s Favorite Meal?",
        points: [
          {
            heading: "A. The Passover Lamb",
            scripture: "Exodus 12",
            summary:
              "Israel’s redemption began with a lamb and a meal shared under the protection of its blood.",
          },
          {
            heading: "B. The Daily Sacrifice",
            scripture: "Exodus 29:38–42",
            summary:
              "Daily sacrifice represented continual fellowship between God and His people.",
          },
          {
            heading: "C. The Lord’s Supper",
            scripture: "Matthew 26:26–29",
            summary:
              "Bread and fruit of the vine call Christians to remember the Lamb and His covenant.",
          },
          {
            heading: "D. The Marriage Supper",
            scripture: "Revelation 19:6–9",
            summary:
              "God’s redemptive story reaches its fulfillment in the marriage supper of the Lamb.",
          },
        ],
        application: [
          "From Exodus to Revelation, God continually invites His people to the table.",
          "Meals represent communion, remembrance, covenant, and fellowship.",
        ],
      },
    ],

    conclusion: [
      "What have we learned?",
      "We did not merely discover God’s favorite flower. We discovered His attention to detail.",
      "We did not merely discover God’s favorite colors. We discovered His love of beauty, symbolism, and holiness.",
      "We did not merely discover God’s favorite meal. We discovered His desire for fellowship with His people.",
      "These are not random facts. They are windows into the heart of God.",
      "When you know someone, you begin to recognize what matters to them.",
      "Jeremiah tells us, “Let him who boasts boast in this, that he understands and knows Me.”",
      "The greatest privilege is not simply knowing about God.",
      "The greatest privilege is knowing God Himself.",
    ],

    relatedBrls: [],

    resources: {
      downloadFolder: "BRL-SER-410.003",

      l2: {
        20: "BRL-SER-410.003-20min-L2-Outline.pdf",
        30: "BRL-SER-410.003-30min-L2-Outline.pdf",
        40: "BRL-SER-410.003-40min-L2-Outline.pdf",
      },

      l3Archive: "BRL-SER-410.003-L3-Sermon-Archive.pdf",
      powerpoint: "BRL-SER-410.003-Presentation.pptx",
      handout: "BRL-SER-410.003-Listener-Handout.pdf",
      package: "BRL-SER-410.003-Complete-Sermon-Package.zip",
    },
  },

  // =========================================================
  // BRL-SER-410.002 — THE PLAN OF SALVATION
  // =========================================================

  {
    id: "BRL-SER-410.002",
    slug: "the-plan-of-salvation",
    title: "The Plan of Salvation",
    subtitle: "What Will You Do with Jesus?",
    series: "",
    speaker: "Derek Dodd",
    status: "published",
    primaryText: "Acts 2:36–42",

    proposition:
      "God has revealed through the gospel how sinners come to Christ: they hear His Word, believe His Son, repent of sin, confess Christ, are baptized into Christ, and thereafter live in faithful obedience to Him.",

    topics: [
      "Salvation",
      "Gospel",
      "Faith",
      "Repentance",
      "Confession",
      "Baptism",
      "Obedience",
      "Conversion",
    ],

    audience: "General",
    estimatedMinutes: 30,

    introduction: [
      "Salvation begins with God, not with man's achievement.",
      "God loved the world and gave His Son.",
      "Christ died for sinners, was buried, and arose again.",
      "The Great Commission establishes the gospel response.",
      "Matthew 28 commands disciples to be made, baptized, and taught continued obedience.",
      "Mark 16 joins preaching the gospel with belief and baptism.",
      "Luke 24 connects Christ's death and resurrection with repentance and remission of sins beginning at Jerusalem.",
      "Acts 2 records that commission being put into practice.",
    ],

    sections: [
      {
        heading: "I. Hear His Word",
        points: [
          {
            heading: "A. Faith Requires Revelation",
            scripture: "Romans 10:17",
            summary:
              "Faith comes by hearing, and hearing by the Word of God.",
          },
          {
            heading: "B. The Gospel Must Be Preached",
            scripture: "Romans 10:14",
            summary:
              "Biblical faith cannot exist apart from hearing the revealed message.",
          },
          {
            heading: "C. The Message Is Jesus Christ",
            scripture: "1 Corinthians 15:3–4",
            summary:
              "The gospel proclaims Christ's death for sins, burial, and resurrection.",
          },
        ],
        application: [
          "The Plan of Salvation must never replace the Man of salvation.",
          "Hear His Word.",
        ],
      },

      {
        heading: "II. Believe His Son",
        points: [
          {
            heading: "A. Believe Who Jesus Is",
            scripture: "John 8:24",
            summary:
              "Jesus requires belief in Him; unbelief leaves the sinner in sin.",
          },
          {
            heading: "B. Faith Is More Than Mental Acknowledgment",
            scripture: "James 2:19",
            summary:
              "Even demons believe facts about God; biblical faith goes beyond intellectual acknowledgment.",
          },
          {
            heading: "C. Biblical Faith Acts",
            scripture: "Hebrews 11",
            summary:
              "Abel offered, Noah prepared, and Abraham obeyed by faith.",
          },
        ],
        application: [
          "Biblical faith trusts God enough to act upon His Word.",
          "Believe His Son.",
        ],
      },

      {
        heading: "III. Repent of Sin",
        points: [
          {
            heading: "A. God Commands Repentance",
            scripture: "Acts 17:30",
            summary:
              "God commands all men everywhere to repent.",
          },
          {
            heading: "B. Repentance Is More Than Sorrow",
            scripture: "2 Corinthians 7:10",
            summary:
              "Godly sorrow produces repentance; sorrow itself is not repentance.",
          },
          {
            heading: "C. Repentance Turns the Sinner Toward God",
            scripture: "Acts 3:19",
            summary:
              "Repentance involves a changed mind that produces a changed direction.",
          },
        ],
        application: [
          "A person cannot continue walking away from God while claiming to have turned to God.",
          "Repent of sin.",
        ],
      },

      {
        heading: "IV. Confess His Name",
        points: [
          {
            heading: "A. Confess Christ Before Men",
            scripture: "Matthew 10:32",
            summary:
              "Jesus expects His disciples openly to acknowledge Him before men.",
          },
          {
            heading: "B. Confess the Lord Jesus",
            scripture: "Romans 10:9–10",
            summary:
              "Belief in the risen Christ is joined with confession of the Lord Jesus.",
          },
          {
            heading: "C. Confession Expresses Allegiance",
            scripture: "Romans 10:10",
            summary:
              "Faith in the heart becomes openly acknowledged allegiance to Christ.",
          },
        ],
        application: [
          "Jesus is the Christ, the Son of God, and Lord.",
          "Confess His name.",
        ],
      },

      {
        heading: "V. Be Baptized into Christ",
        points: [
          {
            heading: "A. Baptized into Christ",
            scripture: "Galatians 3:27",
            summary:
              "Those baptized into Christ have put on Christ.",
          },
          {
            heading: "B. United with Christ's Death, Burial, and Resurrection",
            scripture: "Romans 6:3–4",
            summary:
              "Baptism follows the gospel pattern of death, burial, and resurrection into newness of life.",
          },
          {
            heading: "C. Baptism and Remission of Sins",
            scripture: "Acts 2:38",
            summary:
              "Peter commands convicted gospel hearers to repent and be baptized for the remission of sins.",
          },
          {
            heading: "D. Conversion Accounts Confirm the Pattern",
            scripture: "Acts 8; Acts 16; Acts 18; Acts 22",
            summary:
              "The conversion accounts repeatedly record gospel preaching followed by baptism.",
          },
        ],
        application: [
          "Baptism is not meritorious water salvation; it is obedient faith in the saving work of Christ.",
          "Be baptized into Christ.",
        ],
      },

      {
        heading: "VI. Obey Him Faithfully",
        points: [
          {
            heading: "A. Baptism Is the Beginning",
            scripture: "Acts 2:41–42",
            summary:
              "Those baptized continued steadfastly in apostolic doctrine, fellowship, breaking of bread, and prayers.",
          },
          {
            heading: "B. Disciples Continue Learning and Obeying",
            scripture: "Matthew 28:20",
            summary:
              "Jesus commands baptized disciples to be taught to observe all that He commanded.",
          },
          {
            heading: "C. Remain Faithful",
            scripture: "Revelation 2:10",
            summary:
              "The Christian is called to remain faithful unto death.",
          },
        ],
        application: [
          "Saved, transformed, serving, growing, enduring, faithful.",
          "Obey Him faithfully.",
        ],
      },
    ],

    conclusion: [
      "The question is not merely, 'Do you know the six steps?'",
      "A person can memorize six steps and never surrender his life to Christ.",
      "The gospel confronts each hearer with Jesus.",
      "Will you hear His Word?",
      "Will you believe His Son?",
      "Will you repent of sin?",
      "Will you confess His name?",
      "Will you be baptized into Christ?",
      "Will you obey Him faithfully?",
      "God provided the grace. Christ provided the blood. The Spirit revealed the Word. The gospel provides the message.",
      "What will you do with Jesus?",
    ],

    relatedBrls: [],

    resources: {
      downloadFolder: "BRL-SER-410.002",

      l2: {
        20: "BRL_Plan_of_Salvation_L2_20-Minute_Pulpit_Outline_V1.0.pdf",
        30: "BRL_Plan_of_Salvation_L2_30-Minute_Pulpit_Outline_V1.0.pdf",
        40: "BRL_Plan_of_Salvation_L2_40-Minute_Advanced_Pulpit_Outline_V1.0.pdf",
      },

      l3Archive:
        "BRL-SER-410.002_The-Plan-of-Salvation_L3-Archive_V1.0.pdf",

      handout:
        "BRL-SER-410.002_The-Plan-of-Salvation_Handout_V1.0.pdf",
    },
  },
];

export function getPublishedSermons(): Sermon[] {
  return sermons.filter((sermon) => sermon.status === "published");
}

export function getSermonBySlug(slug: string): Sermon | undefined {
  return sermons.find((sermon) => sermon.slug === slug);
}

export function getSermonById(id: string): Sermon | undefined {
  return sermons.find((sermon) => sermon.id === id);
}