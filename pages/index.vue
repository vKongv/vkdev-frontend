<template>
<div>
    <section class="header bg-light-yellow pa4">
        <h1 class="f-headline b lh-solid oh measure mt0 mb5 nowrap ws-normal-ns overflow-hidden word-wrap tc">VK</h1>
    </section>
    <section class="content pa4">
        <web-header />
    </section>
    <section class="footer bg-light-yellow pa4">
        <h3 class="f3 center tc ma0">Yellow is cool right?</h3>
    </section>
</div>
</template>

<script>
import Logo from '~components/Logo.vue';
import WebHeader from '~components/Header.vue';


export default {
    components: {
        Logo,
        WebHeader,
    },
};
</script>

<style scoped>
.container {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
.title {
	font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	/* 1 */
	display: block;
	font-weight: 300;
	font-size: 100px;
	color: #35495e;
	letter-spacing: 1px;
}
.subtitle {
	font-weight: 300;
	font-size: 42px;
	color: #526488;
	word-spacing: 5px;
	padding-bottom: 15px;
}
.links {
	padding-top: 15px;
}
</style>
