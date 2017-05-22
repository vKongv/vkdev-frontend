<template>
<div>
    <web-header />
    <section>
        <div class="columns ph5-l ph3 pv3">
            <div class="posts" v-for="(postsToDisplay, index) in posts">
                <div class="post pa3 measure tc" v-for="(post, index) in postsToDisplay" :style="{ backgroundColor:post.bgColor }">
                    <img v-if="post.img" :src="post.img"/>

                    <span v-if="post.title">
                        <h3 class="f5 db tracked ttu b tc" :style="{ color:post.fontColor }">{{post.title}}</h3>
                        <hr class="mw5 bb bw1 b--black-10">
                    </span>

                    <div v-if="post.desc" class="lh-copy f6-l f5 fw3 txt-justify tracked" v-html="post.desc" :style="{ color:post.fontColor }"></div>
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

import googleAssistant from '../../images/featured-news/googleAssistantGIF.gif';
import androidActiveDevices from '../../images/featured-news/android-active-devices.png';

const posts = [
    {
        title: 'GOOGLE I/O: Google Assistant',
        desc: '<blockquote><code><b>GOOGLE ASSISTANT CAN SEE AND UNDERSTAND THE WORLD AROUND YOU</b></code></blockquote>In the recent Google I/O 2017, Google Assistant (GA) is being enhanced to serve more than just a usual AI assistant. It is known by assisting people by natural conversation and follow-ups that continue an ongoing conversation but now, it is more. <br><br/> Google Assistant is not limited in answering questions and finding informations, with <i><b>Google Lens</b></i> it can ‘see’ things around you, and even take action based on your surroundings. If you see a poster of your favourite’s band, you can hold up your Assistant, tap the Lens icon and get information on the band, tickets and more. <br></br> Visit <a href="https://blog.google/products/assistant/your-assistant-getting-better-on-google-home-and-your-phone/" target="_blank" style="text-decoration:none;color:#000fff;border-bottom:1px solid;padding:2px;"><b>here</b></a> for more information',
        img: googleAssistant,
        bgColor: '#F1E290',
        // bgColor: '#FFF3A1',
        fontColor: '#000000',
    },
    {
        title: 'Virtual Reality (VR)',
        desc: 'Go Anywhere in Virtual Reality (VR).',
        bgColor: '#F090A3',
    },
    {
        title: 'Augmented Reality (AR)',
        desc: 'See Anything in Augmented Reality (AR).',
        bgColor: '#F28D8E',
    },
    {
        bgColor: '#ffffff',
    },
    {
        title: 'Android Surpasses 2 BILLION Monthly Active Devices',
        img: androidActiveDevices,
        // bgColor: '#2d3f45', dark green more to black
        bgColor: '#4B3C3A',
    },
    {
        // title: 'Quality',
        desc: ' <blockquote><cite>“On Risk: Failure is an option here. If things are not failing, you are not innovating enough.”</cite></blockquote>by Elon Musk, CEO of SpaceX',
        bgColor: '#27aaa2',
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
