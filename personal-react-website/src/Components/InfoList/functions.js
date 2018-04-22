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