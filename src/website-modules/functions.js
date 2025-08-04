export function makeElements(elementList, parent) {
  const createdElements = {};

  elementList.forEach(([tag, className, key, text]) => {
    const el = document.createElement(tag);
    el.classList.add(className);
    parent.appendChild(el);
    if (key) createdElements[key] = el;
    if (text) el.innerText = text;
  });


  return createdElements;
}

export function createMissions(parent, arr) {
  arr.forEach(({title, description, imgSrc}) => {
    const missionsHolder = document.createElement("div");
    parent.appendChild(missionsHolder);

    const div = document.createElement("div");
    div.classList.add("mission-div");
    missionsHolder.appendChild(div);

    const img = document.createElement("img");
    img.classList.add("mission-img");
    img.src = imgSrc;
    missionsHolder.appendChild(img);

    const h2 = document.createElement("h2");
    h2.classList.add("mission-header");
    div.appendChild(h2);
    h2.innerText = title;

    const para = document.createElement("p");
    para.classList.add("mission-para");
    para.innerText = description;
    div.appendChild(para);

  });
}



// function makeNestedElements(elementList, outerParent) {
//   const createdElements = {};

//   elementList.forEach(([tag, className, key, ...nestedElements]) => {
//     const parentElement = document.createElement(tag);
//     parentElement.classList.add(className);
//     outerParent.appendChild(parentElement);

//     if (key) createdElements[key] = parentElement;

//     nestedElements.forEach(([childTag, childClass, childKey]) => {
//       const child = document.createElement(childTag);
//       child.classList.add(childClass + `${i}`);
//       parentElement.appendChild(child);
//       if (childKey) createdElements[childKey + `${i}`] = child;
//     });
//   });

//   return createdElements;
// }