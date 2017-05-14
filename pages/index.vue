<template>
<div>
    <web-header />
    <section class="content">
        <div class="our-principles ph6-l ph3 pv4 white">
            <div class="principle pa3 measure tc" v-for="(principle, index) in principles">
                <img class="image" :src="principle.img">
                </img>
                <h3 class="f5 db tracked ttu fw4 tc">{{principle.title}}</h3>
                <p class="description lh-copy f6-l f5 fw3 tc tracked">{{principle.desc}}</p>
            </div>
        </div>
    </section>
    <web-footer />
</div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import Practice from '~components/Practice.vue';
import WebFooter from '~components/Footer.vue';

import p1Picture from '../images/principles/p1.png';
import p2Picture from '../images/principles/p2.png';
import p3Picture from '../images/principles/p3.png';

const principles = [
    {
        title: 'Quality',
        desc: 'We strike for the best quality in every project',
        img: p1Picture,
    },
    {
        title: 'Growth',
        desc: 'We care about your business growth',
        img: p2Picture,
    },
    {
        title: 'Collaboration',
        desc: 'We collaborate with every stakeholder to ensure we align with your business requirements',
        img: p3Picture,
    },
];

export default {
    data() {
        return {
            principles,
        };
    },
    components: {
        WebHeader,
        Practice,
        WebFooter,
    },
};
</script>

<style scoped>
@import '../assets/main.css';

.our-principles {
    display: flex;
    background-color: rgba(0, 0, 0, 0.85);
    min-height: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media(--for-desktop) {
        justify-content: space-between;
        flex-direction: row;
        align-items: stretch;
    }

    & .principle {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media(--for-desktop) {
            width: 256px;
        }

        & .image {
            border-radius: 50%;
            width: 150px;
            height: 150px;
        }

        & .description {
        }
    }
}
</style>
