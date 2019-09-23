<template>
  <div>
    <Avatar />
    <Slogan />
    <Icon />
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue";
import Slogan from "./components/Slogan.vue";
import Icon from "./components/Icon.vue";

export default {
  components: {
    Avatar,
    Slogan,
    Icon
  }
};
</script>
