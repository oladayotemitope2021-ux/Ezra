export type Teaching = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
  keyTexts: string[];
};

export const teachings: Teaching[] = [
  {
    slug: "the-gospel-entered-history",
    title: "The Gospel Entered History",
    category: "Teaching Series",
    summary:
      "Redemption revealed in time as the unfolding of God’s eternal purpose through Christ.",
    keyTexts: ["Galatians 4:4–5", "Luke 24:25–27", "Ephesians 1:9–10"],
    body: [
      "The gospel did not begin in Bethlehem, though it was revealed there in power. It did not begin at Calvary, though it was accomplished there in history. The gospel entered history because it had already been purposed in eternity.",
      "Scripture is one unfolding story of redemption. Creation prepares the stage, the fall reveals the need, covenant carries the promise, sacrifice foreshadows the Lamb, and Christ stands as the fulfillment of the whole testimony.",
      "To understand the gospel rightly is to see that what God purposed before the ages, He unveiled in history through the Son.",
    ],
  },
  {
    slug: "christ-was-not-plan-b",
    title: "Christ Was Not Plan B",
    category: "Teaching Series",
    summary:
      "Seeing the cross as the revelation of God’s foreordained purpose, not a divine reaction.",
    keyTexts: ["1 Peter 1:18–20", "Revelation 13:8", "Acts 2:23"],
    body: [
      "Christ did not emerge as an emergency response to human failure. The cross was not divine improvisation.",
      "Before the foundation of the world, God had already purposed redemption in Christ. The incarnation, death, and resurrection of Christ stand as the revelation of an eternal counsel, not a secondary plan.",
      "This gives believers deep confidence: redemption rests not on human stability, but on divine purpose.",
    ],
  },
  {
    slug: "christ-in-all-scripture",
    title: "Christ in All Scripture",
    category: "Teaching Series",
    summary:
      "Tracing the unified testimony of Scripture as it progressively reveals the Son.",
    keyTexts: ["Luke 24:27", "John 5:39", "Hebrews 10:7"],
    body: [
      "Scripture is not a collection of disconnected moral lessons. It is one unified testimony that moves toward Christ.",
      "The law, the prophets, the writings, the promises, the types, and the covenants all find their fulfillment in Him.",
      "To read the Bible rightly is not merely to gather information, but to behold Christ in the whole counsel of God.",
    ],
  },
];