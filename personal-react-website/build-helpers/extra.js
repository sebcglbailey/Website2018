const fs = require('fs');
const sharp = require('sharp');

let {sizes} = require('../src/helpers/imgSizes');

let extraDir = 'src/Pages/Extras/src';
let imagesDir = 'build-helpers/extraImages';


const createDir = (src, newDir, cb) => {
  fs.readdir(src, (err, list) => {
    if (!list.includes(newDir)) {
      fs.mkdir(`${src}/${newDir}`, () => {
        console.log(`Created folder ${newDir} at ${src}`);
        if (cb) {
          cb()
          return
        }
      })
    } else if (cb) {
      cb()
    }
  })
}

const createImage = (src, name, output) => {

  let obj = [
    {
      path: `${output}/xl.${name.split(".")[1]}`,
      size: sizes.xl
    },
    {
      path: `${output}/lg.${name.split(".")[1]}`,
      size: sizes.lg
    },
    {
      path: `${output}/md.${name.split(".")[1]}`,
      size: sizes.md
    },
    {
      path: `${output}/sm.${name.split(".")[1]}`,
      size: sizes.sm
    },
    {
      path: `${output}/xs.${name.split(".")[1]}`,
      size: sizes.xs
    },
  ]

  obj.map((obj) => {
    sharp(src)
      .resize(obj.size)
      .toFile(obj.path)
      .then((data) => {
        console.log(`Created file ${obj.path} at a size of ${obj.size}`)
      })
  })
}

const readTypeDir = (type, srcDir, outputDir) => {
  fs.readdir(srcDir, (err, images) => {
    
    images.map((imgName) => {
      let src = `${srcDir}/${imgName}`
      createDir(outputDir, imgName, () => {
        let output = `${outputDir}/${imgName}`
        createImage(src, imgName, output)
      })
    })

  })
}

// Run the script
fs.readdir(imagesDir, (err, folder) => {
  folder.map((type) => {
    if (type.includes('.')) {
      return
    } else {
      let srcDir = `${imagesDir}/${type}`;
      createDir(extraDir, type)
      let outputDir = `${extraDir}/${type}`;
      readTypeDir(type, srcDir, outputDir);
    }
  })
})