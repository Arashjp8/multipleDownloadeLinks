function anchorFinder(element) {
  const anchors = document.querySelectorAll(element);

  const arrayOfElements = [];
  for (let i = 0; i < anchors.length; i++) {
    const nameText = anchors[i].textContent;
    const cleanText = nameText.replace(/\s + /g, " ").trim();
    const cleanLink = anchors[i].href;
    arrayOfElements.push([cleanText, cleanLink]);
  }

  // const makeTable = () => {
  //   const table = "<table><thead><th>Name</th><th>Links</th></thead><tbody>";
  //   for (let i = 0; i < arrayOfElements.length; i++) {
  //     table +=
  //       "<tr><td>" +
  //       arrayOfElements[i][0] +
  //       "</td><td>" +
  //       arrayOfElements[i][1] +
  //       "</td></tr>";
  //   }

  //   const w = window.open("");
  //   w.document.write(table);
  // };
  // makeTable();

  return arrayOfElements;
}

export default anchorFinder;
