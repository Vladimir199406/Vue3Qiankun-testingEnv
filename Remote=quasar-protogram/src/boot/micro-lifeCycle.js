import { boot } from 'quasar/wrappers';

import { init } from 'src/quasar-init/client-entry'; 

if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
  render();
}
class Actions {
  actions = {
    onGlobalStateChange: () => { },
    setGlobalState: () => { }
  };

  setActions(actions) {
    this.actions = actions;
  }

  onGlobalStateChange(...args) {
    return this.actions.onGlobalStateChange(...args);
  }

  setGlobalState(...args) {
    return this.actions.setGlobalState(...args);
  }
}

const actions = new Actions();

function render(props = {}) {
  const { container } = props; 

  if (container) {
    init();
    actions.setActions(props);
    actions.onGlobalStateChange(state => {
      const { xxx } = state;
    }, true);
  }
}


async function bootstrap() {
  console.log('vue app bootstraped');
}


async function mount(props) {
  console.log('vue app mount');
  render(props); 
}

async function unmount() {
  console.log('vue app unmount');
  if (window._POINT_STORE_APP_INSTANCE) {
    window._POINT_STORE_APP_INSTANCE.unmount(); 
  }
}


async function update() {
  console.log('update props');
}

export default boot(({ app, store }) => {
  if (window._POINT_STORE_APP_INSTANCE) {
    window._POINT_STORE_APP_INSTANCE.unmount();
  }
  window._POINT_STORE_APP_INSTANCE = app;
  window._POINT_STORE_STORE = store; 
})

export { bootstrap, mount, unmount, update }