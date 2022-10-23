<template>
  <n-space vertical>
    <n-layout-header>
      <n-switch v-model:value="collapsed" />
      Yiheyuan Road
    </n-layout-header>
    <n-layout has-sider class="height-fill">
      <n-layout-sider
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="180"
        :collapsed="collapsed"
      >
        <n-menu
          :collapsed="collapsed"
          :collapsed-width="64"
          :collapsed-icon-size="22"
          :options="menuOptions"
        />
      </n-layout-sider>
      <n-layout>
        <router-view></router-view>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Home",
          },
        },
        { default: () => "Main page" }
      ),
    key: "go-to-main",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Sudoku",
          },
        },
        { default: () => "Steamdoku" }
      ),
    key: "go-to-sudoku",
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Tourus",
          },
        },
        { default: () => "Tourus Puzzle" }
      ),
    key: "go-to-tourus",
    icon: renderIcon(WorkIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "Forum",
          },
        },
        { default: () => "Forum" }
      ),
    key: "go-to-forum",
    icon: renderIcon(WorkIcon),
  },
];

export default defineComponent({
  setup() {
    return {
      menuOptions,
      collapsed: ref(true),
    };
  },
});
</script>

<style>
#app{
  height: 100vh;
  width: 100vw;
}
.fill-flex-container {
  flex-grow: 1;
}
.height-fill{
  height: 100vh;
}
</style>
