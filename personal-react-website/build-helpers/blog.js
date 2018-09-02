const fs = require('fs');

const blogDir = 'src/Blog/posts/';

let postObj = {
  posts: []
}

const addToObj = (postName, year) => {

  let date = postName.slice(0, 10)

  let post = {
    date: date,
    postName: postName
  }

  postObj.posts.push(post)

}

fs.readdir(blogDir, (err, posts) => {

  posts.forEach((postName) => {

    addToObj(postName)

  })

  fs.writeFileSync('src/Blog/manifest.json', JSON.stringify(postObj), 'utf-8')

})