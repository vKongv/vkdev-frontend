<template>
    <div>
        <web-header />
        <nuxt/>
        <web-footer />
    </div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import WebFooter from '~components/Footer.vue';

export default {
    components: {
        WebHeader,
        WebFooter,
    },
};
</script>

<style>
body {
    font-family: Muli;
}
</style>
