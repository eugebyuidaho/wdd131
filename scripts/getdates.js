//Current year
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

//Last Modified Date
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;