<template>
<div>
<button @click="isVisible = !isVisible">Toggle text</button>
<div v-show="isVisible">I’m the text in toggle</div>
<div>Visbility: {{isVisible}}</div>
</div>
</template>
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
	data() {
		return {
			isVisible: false
		};
}	
});
</script>
