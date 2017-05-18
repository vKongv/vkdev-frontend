<template>
<div>
    <web-header />
    <section class="ph5">
        <div class="fl w-third ph3" v-for="(prtf, index) in portfolios">
            <article class="br2 ba dark-gray b--black-10 mv3 w-100 center card-container">
                    <div :style="{ backgroundImage: 'url(' + prtf.img + ')'}" class="db w-100 br2 br--top card-img" :alt="prtf.title"></div>
                    <div class="pa2 ph3-ns pb3-ns card-desc">
                        <div class="dt w-100 mt1">
                            <div class="dtc">
                                <h1 class="f5 f4-ns mv0 ttu tracked"> {{ prtf.title }} </h1>
                            </div>
                        </div>
                        <p class="f6 lh-copy measure mt2 mid-gray"> {{ prtf.desc }} </p>
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

import testPicture from '../../images/featured-news/test-2.png';

const portfolios = [
    {
        title: 'Quality',
        desc: 'We strike for the best quality in every project',
        img: testPicture,
    },
    {
        title: 'Growth',
        desc: 'We care about your business growth',
        img: testPicture,
    },
    {
        title: 'Collaboration',
        desc: 'We collaborate with every stakeholder to ensure we align with your business requirements. We collaborate with every stakeholder to ensure we align with your business requirements.',
        img: testPicture,
    },
    {
        title: 'Quality',
        desc: 'We strike for the best quality in every project',
        img: testPicture,
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

.card-container {
    width: 100%;
    height: 22rem;
    text-align: center;
    justify-content: space-between;

    &:hover {
        box-shadow: 0 0 20px 3px rgba(0,0,0,0.2);
        transform: translateY(-1px);
        transition: transform .2s ease-in;
        background-color:  rgba(0,0,0,0.2)
    }
}

.card-img {
    height: 60%;
    width: 100%;
    position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.card-desc {
    height: 35%;
    width: 100%;
}

</style>
