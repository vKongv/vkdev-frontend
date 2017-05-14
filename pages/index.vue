<template>
<div>
    <web-header />
    <section class="content">
        <div class="our-principles ph6-l ph3 pv4 white">
            <div class="principle pa3 measure" v-for="(principle, index) in principles">
                <img class="image" :src="principle.img">
                </img>
                <h3 class="f4 db"> Principle #{{index + 1}}: {{principle.title}}</h3>
                <p class="description lh-copy f7-l f5">{{principle.desc}}</p>
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
        desc: 'We strike for the best quality',
        img: p1Picture,
    },
    {
        title: 'Quality',
        desc: 'We strike for the best quality',
        img: p2Picture,
    },
    {
        title: 'Quality',
        desc: 'We strike for the best quality',
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
            text-align: justify;
            text-justify: inter-word;
        }
    }
}
</style>
