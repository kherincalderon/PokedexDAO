import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x6D218209958F10aEe19979fAEe84007123391701",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Pokéd3x",
        description: "This NFT will give you access to PokédexDAO!",
        image: readFileSync("scripts/assets/pokédex.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()