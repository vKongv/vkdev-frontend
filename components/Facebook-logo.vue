<template>
<div>
    <img class="logo-image" :src="image"/>
</div>
</template>

<script>
import image from '../images/fb-31x33@2x.png';

export default {
    data() {
        return {
            image,
        };
    },
};
</script>

<style scoped>

.logo-image {
    display: inline-block;
}
</style>
