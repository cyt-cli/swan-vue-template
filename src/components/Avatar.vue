<template>
  <div>
    <img class="avatar" src="../images/avatar.jpeg" @click="count" />
    <div class="tip">{{num}}</div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      num: 0
    };
  },
  methods: {
    count: function() {
      this.num++;
    }
  }
};
</script>