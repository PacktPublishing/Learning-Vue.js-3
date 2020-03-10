<template>
    <div>
        <div v-for="(number, index) in numbers" :key="index">
          {{index}}.{{title}}: {{number}}


        <!-- <div v-for="name in names" :key="name">
            <div>{{name}}</div>
            <input class="number-input" placeholder="Change name"> -->
        </div>
        <!-- <button @click="shuffle(names)">Shuffle</button> -->
    </div>
</template>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    data() {
        return {
            numbers: [1, 2, 3, 4, 5],
            names: ["John", "Minnie", "Mick", "Tom", "Mary"],
            title: "Number"
        }
    },
    methods: {
        shuffle(names: Array<string>) {
            for (let i = names.length - 1; i > 0; i--) {
                const randomIndex = Math.random() * (i + 1);
                const j = Math.floor(randomIndex);
                const saved = names[i];
                names[i] = names[j];
                names[j] = saved;
            }
            console.log(this.names)
            this.names = names;
        }
    }

})
</script>