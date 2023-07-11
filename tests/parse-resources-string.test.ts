import { expect, test } from "vitest";
import { parseResourcesString } from "@/utils/parse-resources-string";

test("parseResources", () => {
  const input = `- [Curation Markets (The Graph Academy)](https://thegraph.academy/curators/curation-markets/)\\n- [Curved Token Bonding in Curation Markets](https://medium.com/@simondlr/tokens-2-0-curved-token-bonding-in-curation-markets-1764a2e0bee5)\\n- [Desire Paths and Markets for Recommendation](https://medium.com/@simondlr/desire-paths-markets-for-recommendation-e701aa835013)\\n- [Introducing the Equilibrium Bonding Market](https://blog.oceanprotocol.com/introducing-the-equilibrium-bonding-market-e7db528e0eff)\\n`;
  const linkObjects = parseResourcesString(input);
  expect(linkObjects).toEqual([
    {
      name: "Curation Markets (The Graph Academy)",
      link: "https://thegraph.academy/curators/curation-markets/",
    },
    {
      name: "Curved Token Bonding in Curation Markets",
      link: "https://medium.com/@simondlr/tokens-2-0-curved-token-bonding-in-curation-markets-1764a2e0bee5",
    },
    {
      name: "Desire Paths and Markets for Recommendation",
      link: "https://medium.com/@simondlr/desire-paths-markets-for-recommendation-e701aa835013",
    },
    {
      name: "Introducing the Equilibrium Bonding Market",
      link: "https://blog.oceanprotocol.com/introducing-the-equilibrium-bonding-market-e7db528e0eff",
    },
  ]);
});
