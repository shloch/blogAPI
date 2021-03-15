/**
 * Function thats reads the JSON file content (as a text file)
 * this function returns the file's content as TEXT (string)
 * It returns NULL if file doesn't exist
 */
function readTextFile(file) {
  let answer = null
  let rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        let allText = rawFile.responseText;
        answer = allText
      }
    }
  }
  rawFile.send(null);
  return answer
}

let fileContent = readTextFile('blog.json')
if (fileContent != null) {
  let blogs = JSON.parse(fileContent)

  //loop through the JSON structure
  let data = ``

  for (let blog of blogs) {
    data += `<div class="blogs"> <div class="thumbnail"><img src="thumbnail.png"/></div>
              <div class="blog">
                <h3> "${blog.titre}" </h3> 
                (<span class="author"> Par <strong> ${blog.auteur} </strong>, le ${blog.date}</span> )
                <p> ${blog.description} </p>
              </div>
             </div>`
  }

  document.getElementById('main').innerHTML = data;
}
