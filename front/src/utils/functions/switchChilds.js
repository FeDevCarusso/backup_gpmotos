export default function switchChilds(children) {
  for (let i = 0; i < children.length; i++) {
    if (children[i].tagName === "DIV") {
      const dChildren = children[i].children;
      for (let j = 0; j < dChildren.length; j++) {
        dChildren[j].disabled = dChildren[j].disabled === true ? false : true;
      }
    } else {
      children[i].disabled = children[i].disabled === true ? false : true;
    }
  }
}
