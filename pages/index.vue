<template>
<div>
    <section class="content">
        <div class="headline" :style="{ backgroundImage: 'url(' + bg + ')'}">
            <h1 class="headline-text">
                <span >
                    <blockquote>
                        Grow your ideas / business <br/><br/> with websites, mobile apps, <br/><br/> &amp; customise-softwares.
                    </blockquote>
                </span>
            </h1>
        </div>
        <div class="our-principles">
            <div class="principle" v-for="(principle, index) in principles">
                <img class="image" :src="principle.img">
                </img>
                <h3 class="title">{{principle.title}}</h3>
                <p class="description">{{principle.desc}}</p>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import Practice from '~components/Practice.vue';
import WebFooter from '~components/Footer.vue';

import p1Picture from '../images/principles/p1.png';
import p2Picture from '../images/principles/p2.png';
import p3Picture from '../images/principles/p3.png';
import bg from '../images/background12.png';

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
            bg,
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

.headline {
    margin: auto auto 0;
    width: 100%;
    height: 540px;
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0.85;
}

    .headline-text {
        font-size: 1.5rem;
        background-color: rgba(255, 255, 255, 0.85);
        font-family:  'Special Elite', cursive;
        opacity: 1;
        text-transform: uppercase;
        line-height: 1.25;
        letter-spacing: .1em;

        @media(--for-desktop) {
            font-size: 1.5rem;
            font-weight: 700;
        }

    }

.our-principles {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    display: flex;
    background-color: rgba(0, 0, 0, 0.85);
    min-height: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #ffffff;

    @media(--for-desktop) {
        padding-left: 8rem;
        padding-right: 8rem;
        justify-content: space-between;
        flex-direction: row;
        align-items: stretch;
    }
}

    .principle {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        text-align: center;
        max-width: 30em;

        @media(--for-desktop) {
            width: 256px;
        }
    }

        .image {
            border-radius: 50%;
            width: 150px;
            height: 150px;
        }

        .title {
            font-size: 1rem;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: .1em;
            font-weight: 400;
            display: block;
        }

        .description {
            font-size: 1rem;
            line-height: 1.5;
            text-align: center;
            letter-spacing: .1em;
            font-weight: 300;

            @media(--for-desktop) {
                font-size: .875rem;

            }
        }
</style>
