const fs = require('fs');
const yamlFront = require('yaml-front-matter');

const blogDir = 'src/Blog/posts/';

let postObj = {
  posts: []
}

const addPostInfo = (error, content) => {

  if (error) { return }

  let frontMatter = yamlFront.loadFront(content)

  if (frontMatter.draft && frontMatter.draft == "true") { return }

  let post ={}

  post.date = frontMatter.date ? frontMatter.date : null
  post.postName = frontMatter.fileName ? frontMatter.fileName : null
  post.title = frontMatter.title ? frontMatter.title : null
  post.description = frontMatter.description ? frontMatter.description : null
  post.date = frontMatter.date ? frontMatter.date : null
  post.author = frontMatter.author ? frontMatter.author : null
  post.keywords = frontMatter.keywords ? frontMatter.keywords : null

  writeFile(post)

}

const writeFile = (post) => {

  postObj.posts.push(post)

  postObj.posts.sort((a, b) => {
    if (a.date < b.date) {
      return -1
    }
    if (a.date > b.date) {
      return 1
    }
    return 0
  })

  fs.writeFileSync('src/Blog/manifest.json', JSON.stringify(postObj), 'utf-8')

}

fs.readdir(blogDir, (err, posts) => {

  posts.forEach((postName) => {

    fs.readFile(`${blogDir}${postName}`, 'utf8', addPostInfo)

  })

})

