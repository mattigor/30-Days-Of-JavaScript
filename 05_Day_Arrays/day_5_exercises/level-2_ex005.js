// 5. In the webTechs array check if Sass exists in the array and if it exists, print "Sass is a CSS preprocess". If it does not exist, add Sass to the array and print the array

import { webTechs } from "./web_techs.js";

if (webTechs.includes("Sass")) {
    console.log("Sass is a CSS preprocess");
} else {
    webTechs.push("Sass");
    console.log(webTechs);
}