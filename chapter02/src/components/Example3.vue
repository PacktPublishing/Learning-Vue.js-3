<template>
	<div>
	<div v-for="(value, name) in collection" :key="name">
          {{name}}: {{value}}
      </div>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
	return {
		collection: {1: 'One', 2: 'Two', 3: 'Three'}
	}
}
})
</script>
