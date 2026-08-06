export type SermonSection = {
  heading: string;
  points: {
    heading: string;
    scripture: string;
    summary: string;
  }[];
  application: string[];
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
};

export const sermons: Sermon[] = [
  {
    id: "BRL-S000001",
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