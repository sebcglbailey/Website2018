const toggleType = (type) => {
  switch(type) {
    case "ux":
      return "User Experience"
      break
    case "ui":
      return "User Interface"
      break;
    case "ph":
      return "Photography"
      break;
    case "pr":
      return "Prototyping"
      break;
    case "wd":
      return "Web Development"
      break;
    case "gd":
      return "Graphic Design"
      break;
    case "ar":
      return "Architecture"
      break
    case "User Experience":
      return "ux"
      break
    case "User Interface":
      return "ui"
      break
    case "Photography":
      return "ph"
      break
    case "Prototyping":
      return "pr"
      break
    case "Web Development":
      return "wd"
      break
    case "Graphic Design":
      return "gd"
      break
    case "Architecture":
      return "ar"
      break
    default:
      return type
  }
}

const getTypeClass = (type, styles) => {
  switch(type) {
    case "ux":
      return styles.typeUX
      break
    case "ui":
      return styles.typeUI
      break;
    case "ph":
      return styles.typePH
      break;
    case "pr":
      return styles.typePR
      break;
    case "wd":
      return styles.typeWD
      break;
    case "gd":
      return styles.typeGD
      break;
    case "ar":
      return styles.typeAR
      break
    default:
      return styles.type
  }
}

module.exports = {toggleType: toggleType, getTypeClass: getTypeClass}