export function init() { 
  createQuasarApp(createApp)

    .then(app => {
      return Promise.all([
                        
        import(/* webpackMode: "eager" */ '../../.quasar/app'), //
        
        import(/* webpackMode: "eager" */ '../boot/micro-lifeCycle.js')
        
      ]).then(bootFiles => {
        const boot = bootFiles
          .map(entry => entry.default)
          .filter(entry => typeof entry === 'function')

        start(app, boot)
      })
    })
}