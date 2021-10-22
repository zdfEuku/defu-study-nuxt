export default function ExampleModule(moduleOptions){
  console.log('moduleOptions.token: ' + moduleOptions.token)
  console.log('this.options.target:  ' + this.options.target)
  this.nuxt.hook('ready', nuxt => {
    console.log('nuxt ready in ExampleModule hook')
  })
}
