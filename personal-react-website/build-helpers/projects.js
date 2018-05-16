const fs = require('fs');
const sharp = require('sharp');

let {sizes} = require('../src/helpers/imgSizes');

let projectsDir = 'src/Projects';
let imagesDir = 'build-helpers/projectImages';

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
const createImage = (imgDir, projectDir, imgName) => {
  let imgSrc = `${imgDir}/${imgName}`;
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

  if (images.includes('.DS_Store')) {
    obj.images = images.slice(1, images.length-1)
  } else {
    obj.images = images.slice(0, images.length-1)
  }
  
  let filePath = `${projectsDir}/${project}/data.json`
  fs.writeFileSync(filePath, JSON.stringify(obj), 'utf-8')
}

// Read the specified project directory
const readProjectDir = (project) => {
  let projectDir = `${projectsDir}/${project}`;
  let imgDir = `${imagesDir}/${project}`;

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
        // createImage(imgDir, projectDir, imgName)
      })
    })
  })

}

// Run the script
fs.readdir(imagesDir, (err, folder) => {
  folder.map((project) => {
    if (project.includes('.')) {
      return
    }
    readProjectDir(project)
  })
})