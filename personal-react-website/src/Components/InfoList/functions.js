const listTypes = [
  ["ux", "User Experience"],
  ["ui", "User Interface"],
  ["ph", "Photography"],
  ["pr", "Prototyping"],
  ["wd", "Web Development"],
  ["gd", "Graphic Design"],
  ["ar", "Architecture"],
  ["sk", "Sketch"],
  ["fr", "Framer"],
  ["ps", "Photoshop"],
  ["ai", "Illustrator"],
  ["id", "InDesign"],
  ["ae", "After Effects"],
  ["xd", "Adobe XD"]
]

const toggleType = (type) => {

  let arr = listTypes.filter((types) => {
    return (types[1] == type) || (types[0] == type)
  })

  if (arr[0]) {
    let index = arr[0].indexOf(type)
    let newIndex = (index+1)%2
    return arr[0][newIndex]
  } else {
    return type
  }

}

const getTypeClass = (type, styles) => {
  let def = `${styles.type}`;
  switch(type) {
    case "ux":
    case "User Experience":
      return def + ` ${styles.ux}`
      break;
    case "ui":
    case "User Interface":
      return def + ` ${styles.ui}`
      break;
    case "ph":
    case "Photography":
      return def + ` ${styles.ph}`
      break;
    case "pr":
    case "Prototyping":
      return def + ` ${styles.pr}`
      break;
    case "wd":
    case "Web Development":
      return def + ` ${styles.wd}`
      break;
    case "gd":
    case "Graphic Design":
      return def + ` ${styles.gd}`
      break;
    case "ar":
    case "Architecture":
      return def + ` ${styles.ar}`
      break;
    case "ps":
    case "Photoshop":
      return def + ` ${styles.ps}`
      break;
    case "ai":
    case "Illustrator":
      return def + ` ${styles.ai}`
      break;
    case "id":
    case "InDesign":
      return def + ` ${styles.id}`
      break;
    case "ae":
    case "After Effects":
      return def + ` ${styles.ae}`
      break;
    case "xd":
    case "Adobe XD":
      return def + ` ${styles.xd}`
      break;
    case "sk":
    case "Sketch":
      return def + ` ${styles.sk}`
      break;
    case "fr":
    case "Framer":
      return def + ` ${styles.fr}`
    default:
      return styles.type
  }
}

module.exports = {
  toggleType: toggleType,
  getTypeClass: getTypeClass
}