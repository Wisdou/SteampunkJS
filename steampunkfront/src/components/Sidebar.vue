<template>
  <n-layout has-sider>
    <n-layout-sider
      bordered
      collapse-mode="width"
      :collapsed-width="64"
      :width="180"
      :collapsed="collapsed"
      show-trigger
      @collapse="collapsed = true"
      @expand="collapsed = false"
    >
      <n-menu
        :collapsed="collapsed"
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
      />
    </n-layout-sider>
    <router-view></router-view>
  </n-layout>
</template>

<script>
import { defineComponent, h } from "vue";
import { NIcon } from "naive-ui";
import { RouterLink } from "vue-router";
import {
  LaptopOutline as WorkIcon,
  LogOutOutline as HomeIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

const menuOptions = [
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "Home"
        }
      },
      { default: () => "Main page" }
    ),
    key: "go-to-main",
    icon: renderIcon(HomeIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "Sudoku"
        }
      },
      { default: () => "Steamdoku" }
    ),
    key: "go-to-sudoku",
    icon: renderIcon(WorkIcon)
  },
  {
    label: () => h(
      RouterLink,
      {
        to: {
          name: "Tourus"
        }
      },
      { default: () => "Tourus Puzzle" }
    ),
    key: "go-to-tourus",
    icon: renderIcon(WorkIcon)
  }
];

export default defineComponent({
  setup() {
    return {
      menuOptions
    };
  }
});
</script>