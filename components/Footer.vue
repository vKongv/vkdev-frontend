<template>
    <div class="footer">
        <span>@2017 VK DEV</span>
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
@import '../assets/main.css';

.footer {
    width: 100%;
    height: 70px;
    letter-spacing: 4px;
    color: #000000;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 0.75rem;

    @media(--for-desktop) {
        flex-direction: row;
        padding-top: 1rem;
        padding-bottom: 1rem;
        padding-left: 4rem;
        padding-right: 4rem;
    }
}
    .media-item {
        display: flex;
        align-items: center;
    }

        .logo {
            height: 30px;
        }


</style>
