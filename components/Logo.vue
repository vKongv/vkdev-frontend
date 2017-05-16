<template>
<div class="VKLogo">
    <img class="logo-image" :src="image"/>
</div>
</template>

<script>
import image from '../images/vklogo.png';
// import image from '../images/logo-188x188@2x.png';

export default {
    data() {
        return {
            image,
        };
    },
};
</script>

<style scoped>
.VKLogo {
    display: flex;
    align-items: center;
    /*border: 2px solid #000000;*/
    padding: 15px;
    /*border-radius: 50%;*/
    height: 150px;
    width: 150px;
}

.logo-image {
    display: inline-block;
}
</style>
