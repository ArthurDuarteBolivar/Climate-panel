import "./style/style.css"
;(async function () {
  try {
    const response = await fetch("http://localhost:3000/")
    const json = await response.json()
    console.log(json.title)
  } catch (error) {
    console.log(error)
  }
})()
