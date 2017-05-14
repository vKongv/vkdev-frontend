<template>
<div>
    <section class="content pa4">
        <div class="our-principles ph6-l ph3 pv4 white">
            <div class="principle pa3" v-for="principle in principles">
                <div class="image bg-white">
                </div>
                <h3 class="f4 db"> Principle #{{principle}}</h3>
                <p class="description lh-copy f7-l f5 measure">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
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

const principles = [1, 2, 3];

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
    margin: 0 -2rem;
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
