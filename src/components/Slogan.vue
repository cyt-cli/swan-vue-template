<template>
  <div class="slogan">
      <span v-for="(s, index) in slogans" :key="index">{{s}}</span>
  </div>
</template>

<script lang='ts'>
import {Component, Vue} from 'vue-property-decorator';

@Component({

})

export default class Slogan extends Vue {
    public slogans:string[] = ['快乐编程，', '快乐生活！'];
};
</script>