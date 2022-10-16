//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getApod)

function getApod(){
  let myUrl = `https://api.nasa.gov/planetary/apod?api_key=vZsgwFcH8FQr3NlAqYYqu7BObKERegTgWOwrztSf`
  const myChoice = document.querySelector('input').value
  console.log(myChoice)
  fetch(myUrl)
  .then(res => res.json())
  .then(data => {
    console.log(data)
    if(data.media_type === 'image'){
      document.querySelector('img').src = data.hdurl
    }else if(data.media_type === 'video'){
      document.querySelector('iframes').src = data.url
    }else if(data.media_type === 'null'){
      document.querySelector('img').style.display = 'none'
    }
    document.querySelector('h3').innerText = data.explanation
    document.querySelector('h2').innerText =data.title
  })
  .catch(err => {
    console.log(`error ${err}`)
  })
  
}


