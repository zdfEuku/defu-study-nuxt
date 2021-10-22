import ngrok from 'ngrok'

export default function(){
  let {nuxt} = this
  // console.log(nuxt.options)
  if (nuxt.options.dev === false) {
    return
  }

  let url

  nuxt.hook('listen', async function (server, { port }) {

    url = await ngrok.connect(port)

    console.log('defu--->>>  url: ' + url)
  })

  nuxt.hook('close', function () {
    url && ngrok.disconnect()
  })

}
