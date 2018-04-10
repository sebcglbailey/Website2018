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
		images = list
		writeProjectObj(project, list)
	})

}

let dir = fs.readdir(projectDir, (err, projects) => {

	for (let i = 0; i < projects.length; i++) {
		if (projects[i] === "js" || projects[i].includes(".")) {
			continue
		} else {
			readProjectDir(projects[i])
		}
	}

});