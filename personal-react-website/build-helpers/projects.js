const fs = require('fs')

let projectDir = 'src/Projects/';

const writeProjectObj = (project, images) => {
	let obj = require(`../src/Projects/${project}/manifest.js`);
	obj.project = project
	obj.images = images

	let filePath = `${projectDir}${project}/data.json`
	fs.writeFileSync(filePath, JSON.stringify(obj), 'utf-8')
}

const readProjectDir = (project) => {

	let imgDir = `${projectDir}${project}/img/`;

	fs.readdir(imgDir, (err, list) => {
		writeProjectObj(project, list)
	})

}

fs.readdir(projectDir, (err, folder) => {
	for (let i = 0; i < folder.length; i++) {
		if (folder[i] === "js" || folder[i].includes(".")) {
			continue
		} else {
			readProjectDir(folder[i])
		}
	}
});