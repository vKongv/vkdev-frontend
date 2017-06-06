<template>
    <div class="cards ph5-l ph3">
        <article class="cards-item br2 ba dark-gray b--black-10 mv4 mt0-l w-30-l w-60 center mh0-l" v-for="( portfolio, index) in portfolios">
            <section>
                <img :src="portfolio.img" class="card-img db w-100 br2 br--top" :alt="portfolio.title">
                <div v-if="portfolio.tags" class="ph1 ph3-ns pv3-ns bg-washed-yellow">
                    <span class="dib mr3" v-for="( t, index) in portfolio.tags">
                        <a href="#" class="link blue lh-title">
                            <span class="fw6 underline-hover tracked-wide f6 measure-wide ttl"><b>#</b>{{ t }}</span>
                        </a>
                    </span>
                </div>
                <div class="pa2 ph3-ns pb3-ns">
                    <div class="dt w-100 mt1">
                        <div class="dtc">
                            <h1 class="f5 f4-ns tracked mv2 tc ttu"> {{ portfolio.title }} </h1>
                        </div>
                    </div>
                    <p class="f6 lh-copy measure-l mt2 mid-gray"> {{ portfolio.desc }} </p>
                </div>
            </section>
        </article>
    </div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import WebFooter from '~components/Footer.vue';

import p1 from '../../images/portfolios/cr.png';
import image1 from '../../images/portfolios/poliklinikpilah.png';
import image2 from '../../images/portfolios/gstmgmtsys-1.png';

const portfolios = [
    {
        title: 'Poliklinik Pilah File Reference System',
        desc: 'A system that helps a private clinic (Poliklinik Pilah) to improve patients\' record management and simplify their workflow.',
        img: image1,
        tags: ['VB', 'desktop', 'clinic', 'health'],
    },
    {
        title: 'GST Management System',
        desc: 'A POS (Point-of-Sales) system with the addition of GST calculation and management. Suitable for small and medium shops which apply non-complex GST policy.',
        img: image2,
        tags: ['vb', 'desktop', 'gst', 'pos', 'finance'],
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
.cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & .cards-item:hover {
        box-shadow: 5px 8px 10px -5px rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }

}

.card-img {
    width: 100%;
    max-height: 20rem;
    align-self: center;

    @media(--for-desktop) {
        max-height: 12rem;
    }
}

.card-desc {
    width: 100%;
    height: 35%;
}

.card-desc-p {
  display: inline-block;
}

</style>
