import cowsay from "cowsay";
require("dotenv").config();

console.log(
  cowsay.say({
    text: `Hello I'm ${process.env.NAME} from ${process.env.CAMPUS}!`,
    eyes: "oo",
  })
);
