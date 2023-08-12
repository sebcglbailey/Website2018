let listTypes = [
  ["ux", "User Experience"],
  ["ui", "User Interface"],
  ["ds", "Design Systems"],
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
  ["xd", "Adobe XD"],
  ["ab", "Abstract"],
  ["ze", "Zeplin"],
  ["pi", "Principle"],
  ["fi", "Figma"],
]

const toggleType = (type) => {

  let arr = listTypes.filter((types) => {
    return (types[1] == type) || (types[0] == type)
  })

  if (arr[0]) {
    let index = arr[0].indexOf(type)
    let newIndex = (index + 1) % 2
    return arr[0][newIndex]
  } else {
    let shortArray = type.split(" ")
    let short = shortArray.length > 1 ? shortArray.map((word) => {
      return word[0]
    }).join("") : shortArray[0]
    listTypes.push([short, type])
    return short
  }

}

const getTypeClass = (type) => {
  let def = `type`;
  switch (type) {
    case "ux":
    case "User Experience":
      return def + ` ux`
      break;
    case "ui":
    case "User Interface":
      return def + ` ui`
      break;
    case "ds":
    case "Design Systems":
      return def + ` ds`
      break;
    case "ph":
    case "Photography":
      return def + ` ph`
      break;
    case "pr":
    case "Prototyping":
      return def + ` pr`
      break;
    case "wd":
    case "Web Development":
      return def + ` wd`
      break;
    case "gd":
    case "Graphic Design":
      return def + ` gd`
      break;
    case "ar":
    case "Architecture":
      return def + ` ar`
      break;
    case "fi":
    case "Figma":
      return def + ` fi`
      break;
    case "ps":
    case "Photoshop":
      return def + ` ps`
      break;
    case "ai":
    case "Illustrator":
      return def + ` ai`
      break;
    case "id":
    case "InDesign":
      return def + ` id`
      break;
    case "ae":
    case "After Effects":
      return def + ` ae`
      break;
    case "xd":
    case "Adobe XD":
      return def + ` xd`
      break;
    case "sk":
    case "Sketch":
      return def + ` sk`
      break;
    case "fr":
    case "Framer":
      return def + ` fr`
    case "ab":
    case "Abstract":
      return def + ` ab`
    case "ze":
    case "Zeplin":
      return def + ` ze`
    case "pi":
    case "Principle":
      return def + ` pi`
    default:
      return 'type'
  }
}

module.exports = {
  toggleType: toggleType,
  getTypeClass: getTypeClass
}