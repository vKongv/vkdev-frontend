<template>
    <div class="cards ph5-l ph3" :style="{ 'background-image': 'url(' + pn1 + ')' }">
    <!-- <div class="cards ph5-l ph3"> -->
        <article class="cards-item br2 ba dark-gray b--black-10 mv4 mt0-l w-30-l w-90 center mh0-l" v-for="( portfolio, index) in portfolios">
            <section>
                <img :src="portfolio.img" class="card-img db w-100 br2 br--top" :alt="portfolio.title">
                <div v-if="portfolio.tags" class="pa3 bg-washed-yellow">
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
                    <div class="f6 lh-copy measure-l mt2 mid-gray txt-justify tracked measure tc center"> {{ portfolio.desc }} </div>
                </div>
            </section>
        </article>
    </div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import WebFooter from '~components/Footer.vue';

import pn1 from '../../images/portfolios/pattern1.png';
import imageClinic from '../../images/portfolios/clinic1.png';
import imageGst from '../../images/portfolios/gstmgmtsys1.png';
import imageFileTransfer from '../../images/portfolios/filtransfersys.png';
import imageBridal from '../../images/portfolios/bridalsystem.png';

const portfolios = [
    {
        title: 'GST Management System',
        desc: 'A POS (Point-of-Sales) system with the addition of GST calculation and management. Suitable for small and medium shops which apply non-complex GST policy.',
        img: imageGst,
        tags: ['vb', 'desktop', 'gst', 'pos', 'finance'],
    },
    {
        title: 'File Transferring C-Application',
        desc: 'This low-level application serves simple file transferring service yet require only minimal run-time support.',
        img: imageFileTransfer,
        tags: ['c', 'desktop', 'minimal'],
    },
    {
        title: 'Poliklinik Pilah File Reference System',
        desc: 'A system that helps a private clinic (Poliklinik Pilah) to improve patients\' record management and simplify their workflow.',
        img: imageClinic,
        tags: ['VB', 'desktop', 'clinic', 'health'],
    },
    {
        title: 'Bridal Shop Booking System',
        desc: 'An admin-system that allows shop helpers to manage booking for photography packages,gowns, as well as the schedule of the photographers.',
        img: imageBridal,
        tags: ['C++', 'desktop', 'bridal-shop', 'wedding'],
    },
];

export default {
    data() {
        return {
            portfolios,
            pn1,
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
    flex-direction: column;

    @media(--for-desktop) {
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}

    .cards-item {
        background-color: white;

        &:hover {
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
