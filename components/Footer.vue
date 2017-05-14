<template>
    <div class="footer bg-white pl5 pr5 pt3 pb3">
        <p>@2017, COPYRIGHTED BY VK DEV</p>
        <div class="media-item">
            <span>FOLLOW US AT </span> &nbsp;
            <a :href="fbLink" target="_blank"><img class="logo" :src="fblogo"></img></a>
            <a><img class="logo" :src="instalogo"></img></a>
        </div>
    </div>
</template>

<script>
import fblogo from '../images/fb-31x33@2x.png';
import instalogo from '../images/insta-30x31@2x.png';

export default {
    data() {
        return {
            fblogo,
            instalogo,
            fbLink: 'https://www.facebook.com/vkdevmy/',

        };
    },
};
</script>

<style scoped>
.footer {
    width: 100%;
    height: 70px;
    font-family: Montserrat;
    font-size: 12px;
    letter-spacing: 4px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    height: 30px;
}

.media-item {
    display: flex; align-items: center;
}

</style>
