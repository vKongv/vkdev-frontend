<template>
    <div class="header bg-white ph5 pv3">
        <div class="f5 fl w-40 menu">
            <logo></logo>
        </div>
        <div class="f5 fl w-60 menu">
            <a class="menu-item pt2 pb2" v-for="header in headers" > {{ header }} </a>
        </div>
    </div>
</template>

<script>
import logo from './logo.vue';

export default {
    data() {
        return {
            headers: ['HOME', 'FEATURED NEWS', 'PORTFOLIOS', 'VK TEAM'],
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

    @media(--for-desktop) {
        flex-direction: row;
    }
}

.menu-item {
    display: inline-block;

    &:hover {
        cursor: pointer;
        opacity: .5;
        transition: opacity .15s ease-in;
        border-bottom: 3px solid #000000;
    }

}

.logo {
    width: auto;
    height: 140px;
}
</style>
