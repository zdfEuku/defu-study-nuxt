export default ({app}, inject) => {
  async function myFetch(path){
    return await fetch(path).then(res => res.json())
  }
  inject('myFetch', myFetch)
}
