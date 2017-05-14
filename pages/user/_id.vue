<template>
    <index />
</template>

<script>
import index from '../index.vue';

export default {
    components: {
        index,
    },
    validate(obj) {
        console.log(obj.query);
        return /^\d+$/.test(obj.params.id);
    },
};
</script>
