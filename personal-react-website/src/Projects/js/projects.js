const list = [
	"BreakPoint",
	"PalringoWebUI",
	"XGames",
	"Website2016",
	"BumpAndGrind",
	"LandseerSnowboards",
	"China"
]

let projects = {
	list: list,
	pages: {}
}

for (let i = 0; i < list.length; i++) {

	let page = require(`../${list[i]}/index.js`).default
	projects.pages[list[i]] = page

}

export default projects;