<template>
<div class="header bg-light-yellow pa3">
    <div v-for="header in headers">
        <span v-if="header === 'vk'" class="f-headline b lh-solid oh measure ma0 nowrap ws-normal-ns overflow-hidden word-wrap tc ttu">{{ header }} </span>
        <span v-else class="b f2 ttc">{{ header }}</span>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            headers: ['Hi', 'our core', 'vk', 'anything', 'about us'],
        };
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
