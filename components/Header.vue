<template>
    <div class="header">
        <div class="menu-logo menu">
            <a href="/"><logo></logo></a>
        </div>
        <div class="menu-navigation menu">
            <nuxt-link
                class="menu-item"
                v-for="header in headers"
                :to="header.link"
                exact
            >
                {{ header.title }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import logo from './logo.vue';

export default {
    data() {
        return {
            headers: [
                {
                    title: 'HOME',
                    link: '/',
                },
                {
                    title: 'FEATURED NEWS',
                    link: '/featured-news',
                },
                {
                    title: 'PORTFOLIOS',
                    link: '/portfolios',
                },
                {
                    title: 'VK TEAM',
                    link: '/vk-team',
                },
            ],
        };
    },

    components: {
        logo,
    },
};
</script>

<style scoped>
@import '../assets/main.css';

.header {
    width: 100%;
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: Montserrat;
    letter-spacing: 4px;
    color: #000000;
    flex-direction: column;
    background-color: #FFFFFF;
    padding-left: 4rem;
    padding-right: 4rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media(--for-desktop) {
        flex-direction: row;
        height: 140px;
    }
}

    .menu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: column;
        font-size: 1rem;
        float: left;

        @media(--for-desktop) {
            flex-direction: row;
        }
    }

    .menu-logo {
        width: 40%;
    }
    .menu-navigation {
        width: 60%;
    }

        .menu-item {
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            text-transform: uppercase;
            display: inline-block;
            text-decoration: none;
            text-align: center;
            color: #000000;

            &:hover {
                cursor: pointer;
                opacity: .5;
                transition: opacity .15s ease-in;
                border-bottom: 3px solid #000000;
            }

            &:visited {
                color: #000000;
            }
        }

</style>
