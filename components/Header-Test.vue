<template>
    <div>
<div class="header bg-light-yellow pa3">
    <div v-for="header in headers">
        <span v-if="header === 'vk'" class="f-headline b lh-solid oh measure ma0 nowrap ws-normal-ns overflow-hidden word-wrap tc ttu"><logo></logo> </span>
        <span v-else class="b f2 ttc">{{ header }}</span>
    </div>
</div>
<div class="header">
    <div v-for="header in headers" class="fl w-20">
        <span v-if="header === 'vk'" style="text-align: center;"><logo></logo> </span>
        <span v-else style="text-align: center;">{{ header }} </span>
    </div>
</div>
</div>
</template>

<script>
import logo from './logo.vue';

export default {
    data() {
        return {
            headers: ['Hi', 'our core', 'vk', 'anything', 'about us'],
        };
    },

    components: {
        logo,
    },
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
