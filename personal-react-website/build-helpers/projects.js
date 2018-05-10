const fs = require('fs');
const sharp = require('sharp');

let {sizes} = require('../src/Projects/js/imgSizes');

let projectsDir = 'src/Projects';

// Create a src folder for images
const makeSrcDir = (projectDir, src) => {
  fs.mkdir(`${projectDir}/${src}/`, (cb) => {
    console.log(`Created '${src}' folder at ${projectDir}`)
  })
}

const createImgFolder = (project, imgName) => {
  let projectDir = `${projectsDir}/${project}`;
  let projectSrcDir = `${projectDir}/src`

  fs.readdir(projectSrcDir, (err, list) => {
    if (!list.includes(imgName)) {
      makeSrcDir(projectSrcDir, imgName)
    }
  })
}

// Creating the sized images
const createImage = (projectDir, imgName) => {
  let imgSrc = `${projectDir}/img/${imgName}`;
  let newImgPath = `${projectDir}/src/${imgName}`;

  const sizeObj = [
    {
      path: `${newImgPath}/xl.${imgName.split(".")[1]}`,
      size: sizes.xl
    },
    {
      path: `${newImgPath}/lg.${imgName.split(".")[1]}`,
      size: sizes.lg
    },
    {
      path: `${newImgPath}/md.${imgName.split(".")[1]}`,
      size: sizes.md
    },
    {
      path: `${newImgPath}/sm.${imgName.split(".")[1]}`,
      size: sizes.sm
    },
    {
      path: `${newImgPath}/xs.${imgName.split(".")[1]}`,
      size: sizes.xs
    },
  ]

  sizeObj.map((obj) => {
    sharp(imgSrc)
      .resize(obj.size)
      .toFile(obj.path)
      .then((data) => {
        console.log(`Created file ${obj.path} at a size of ${obj.size}`)
      })
  })

}

// Write the data json for the project
const writeProjectObj = (project, images) => {
  let obj = require(`../src/Projects/${project}/manifest.js`);
  obj.project = project
  obj.images = images
  let filePath = `${projectsDir}/${project}/data.json`
  fs.writeFileSync(filePath, JSON.stringify(obj), 'utf-8')
}

// Read the specified project directory
const readProjectDir = (project) => {
  let projectDir = `${projectsDir}/${project}`;
  let imgDir = `${projectsDir}/${project}/img/`;

  fs.readdir(projectDir, (err, list) => {
    // Create a src folder if one does not exist
    if (!list.includes('src')) {
      makeSrcDir(projectDir, 'src')
    }

    // Read the images in the img folder
    fs.readdir(imgDir, (err, list) => {
      writeProjectObj(project, list)
      
      list.map((imgName) => {
        createImgFolder(project, imgName)
        createImage(projectDir, imgName)
      })
    })
  })

}

// Run the script
fs.readdir(projectsDir, (err, folder) => {
  folder.map((project) => {
    if (project === "js" || project.includes('.')) {
      return
    }
    readProjectDir(project)
  })
})