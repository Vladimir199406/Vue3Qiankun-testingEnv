<template>
  <div class="PointsStore">
    <h3>HERE IS PROTOGRAM APP</h3>
    <div id="pointStore"></div>
  </div>
</template>

<script>
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { registerMicroApps, start, initGlobalState } from "qiankun";
export default {
  watch: {
    data() {
      return {};
    },
  },
  mounted() {
    const initState = {};
    this.actions = initGlobalState(initState);
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      registerMicroApps([
        {
          name: "pointStore",
          entry: "http://localhost:8081/",
          container: "#pointStore",
          activeRule: "/point-store/",
          props: {
            token: "xx",
          },
        },
      ]);

      start();
    }
  },
  beforeUnmount() {
    if (this.actions && this.actions.offGlobalStateChange) {
      this.actions.offGlobalStateChange();
    }
  },
};
</script>
