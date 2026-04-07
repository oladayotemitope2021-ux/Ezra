export type Resource = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  body: string[];
};

export const resources: Resource[] = [
  {
    slug: "gospel-clarity-and-scripture",
    title: "Gospel Clarity and Scripture",
    category: "Article",
    summary:
      "Why gospel clarity is essential for reading Scripture rightly and growing in truth.",
    body: [
      "Gospel clarity is not a luxury for believers. It is foundational to understanding Scripture, doctrine, and the person of Christ.",
      "Where the gospel is unclear, confusion grows in interpretation, discipleship, and spiritual stability.",
      "The ministry of the Word must therefore aim not merely at inspiration, but at clarity grounded in truth.",
    ],
  },
  {
    slug: "how-to-read-scripture-christologically",
    title: "How to Read Scripture Christologically",
    category: "Study Note",
    summary:
      "A simple framework for seeing Christ in the unified testimony of Scripture.",
    body: [
      "Reading Scripture Christologically means reading with attention to the way all Scripture ultimately bears witness to Christ.",
      "This does not mean forcing Christ into every verse artificially, but understanding each passage within the whole redemptive story.",
      "The goal is faithful interpretation that sees fulfillment, promise, type, and revelation converge in Christ.",
    ],
  },
  {
    slug: "doctrine-devotion-and-growth",
    title: "Doctrine, Devotion, and Growth",
    category: "Resource Guide",
    summary:
      "Why sound doctrine is essential for spiritual maturity and lasting devotion.",
    body: [
      "Doctrine is not opposed to devotion. Rightly understood, doctrine fuels worship, steadies faith, and forms Christian maturity.",
      "Believers grow most deeply when truth is not merely heard, but understood, believed, and applied.",
      "A healthy ministry must therefore care about both theological depth and spiritual fruitfulness.",
    ],
  },
];