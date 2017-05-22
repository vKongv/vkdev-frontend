<template>
<div>
    <web-header />
    <section class="ph5">
        <div class="fl w-third-l w-100 ph3" v-for="( portfolio, index) in portfolios">
            <article class="br2 ba dark-gray b--black-10 mv3 w-100 center card-container">
                    <div :style="{ backgroundImage: 'url(' +  portfolio.img + ')'}" class="db w-100 br2 br--top card-img" :alt=" portfolio.title"></div>
                    <div class="pa2 ph3-ns pb3-ns card-desc">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0 ttu tracked"> {{  portfolio.title }} </h1>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 mid-gray"> {{  portfolio.desc }} </p>
                    </div>
                    <!-- <a class="f7 link dim br2 ba ph3 pv3 mb2 dib black ttu tracked" href="#0">View Details »</a> -->
            </article>
        </div>
    </section>
    <web-footer />
</div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import WebFooter from '~components/Footer.vue';

import p1 from '../../images/portfolios/cr.png';

const portfolios = [
    {
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        img: p1,
    },
    {
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: p1,
    },
    {
        title: 'Lorem Ipsum',
        desc: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        img: p1,
    },
    {
        title: 'Lorem Ipsum',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        img: p1,
    },
];

export default {
    data() {
        return {
            portfolios,
        };
    },
    components: {
        WebHeader,
        WebFooter,
    },
};
</script>

<style scoped>
@import '../../assets/main.css';

.card-container {
    width: 100%;
    height: auto;
    text-align: center;
    justify-content: space-between;

    @media(--for-desktop) {
        height: 22rem;
    }

    &:hover {
        box-shadow: 0 0 20px 3px rgba(0,0,0,0.2);
        transform: translateY(-1px);
        transition: transform .2s ease-in;
        background-color:  rgba(0,0,0,0.2)
    }

}

.card-img {
    width: 100%;
    height: 12rem;
    position: center;
    background-size: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.9);

    @media(--for-desktop) {
        height: 55%;
    }
}

.card-desc {
    width: 100%;
    height: 35%;
}

</style>
