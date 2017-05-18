<template>
<div>
    <web-header />
    <section>
        <div class="columns ph5-l ph3 pv3">
            <div class="posts" v-for="(postsToDisplay, index) in posts">
                <div class="post pa3 measure tc" v-for="(post, index) in postsToDisplay" :style="{ backgroundColor:post.bgColor }">
                    <img v-if="post.img!==null" :src="post.img"/>

                    <h3 v-if="post.title!==null" class="f5 db tracked ttu fw4 tc">{{post.title}}</h3>

                    <p v-if="post.desc!==null" class="lh-copy f6-l f5 fw3 tc tracked">{{post.desc}}</p>
                </div>
            </div>

        </div>
    </section>
    <web-footer />
</div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import WebFooter from '~components/Footer.vue';

import p1Picture from '../../images/principles/p1.png';
import p2Picture from '../../images/principles/p2.png';
import p3Picture from '../../images/principles/p3.png';
import testPicture from '../../images/featured-news/test-2.png';

const posts = [
    {
        title: 'Quality',
        desc: 'We strike for the best quality in every project',
        img: p1Picture,
        bgColor: '#EDDD10',
    },
    {
        title: 'Growth',
        desc: 'We care about your business growth',
        bgColor: '#E69325',
    },
    {
        title: 'Collaboration',
        desc: 'We collaborate with every stakeholder to ensure we align with your business requirements. We collaborate with every stakeholder to ensure we align with your business requirements.',
        bgColor: '#2d3f45',
    },
    {
        img: testPicture,
        bgColor: '#999966',
    },
    {
        title: 'Quality',
        desc: 'We strike for the best quality in every project',
        bgColor: '#27aaa2',
    },
    {
        title: 'Growth',
        desc: 'We care about your business growth',
        img: p2Picture,
        bgColor: '#3d3b3b',
    },
    {
        title: 'Collaboration',
        desc: 'We collaborate with every stakeholder to ensure we align with your business requirements. We collaborate with every stakeholder to ensure we align with your business requirements. We collaborate with every stakeholder to ensure we align with your business requirements. We collaborate with every stakeholder to ensure we align with your business requirements.',
        bgColor: '#ec375d',
    },
    {
        desc: '" We are LIVE now! " --- by director of ED',
        bgColor: '#993366',
    },
    {
        title: 'Quality',
        desc: 'We strike for the best quality in every project',
        bgColor: '#000fff',
    },
    {
        title: 'Growth',
        desc: 'We care about your business growth',
        bgColor: '#ff8533',
    },
    {
        title: 'Collaboration',
        desc: 'We collaborate with every stakeholder to ensure we align with your business requirements. We collaborate with every stakeholder to ensure we align with your business requirements. We collaborate with every stakeholder to ensure we align with your business requirements. We collaborate with every stakeholder to ensure we align with your business requirements.',
        img: p3Picture,
        bgColor: '#99cc00',
    },
    {
        desc: '" Using AWS now! " --- by VK TEAM',
        bgColor: '#804000',
    },
];
const postToDisplay = [
    [], [], [],
];

for (let i = 0; i < posts.length; i += 1) {
    postToDisplay[i % 3].push(posts[i]);
}

console.log(postToDisplay);

export default {
    data() {
        return {
            posts: postToDisplay,
        };
    },
    components: {
        WebHeader,
        WebFooter,
    },
};

</script>

<style scoped>
.columns {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #ffffff;
    height: auto;
    width: 100%;
}

.posts {
    width: 32%;
}

.post {
    margin-bottom: 1em;
}
</style>
