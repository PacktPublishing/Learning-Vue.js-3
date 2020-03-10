<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <list/> -->
    <example3/>
  </div>
</template>

<script>
// @ is an alias to /src
import List from '@/components/List.vue'
import Example3 from '@/components/Example3.vue';

export default {
  name: 'home',
  components: {
    List,
    Example3
  }
}
</script>
