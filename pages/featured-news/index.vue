<template>
<div :style="{ 'background-image': 'url(' + pn1 + ')' }">
    <section>
        <div class="columns">
            <div class="posts" v-for="(postsToDisplay, index) in posts">
                <div class="post" v-for="(post, index) in postsToDisplay" v-if="post.title || post.desc" :style="{ backgroundColor:post.bgColor }">
                    <img v-if="post.img" :src="post.img"/>
                    <span v-if="post.title" class="title-container">
                        <h3 class="title" :style="{ color:post.fontColor }">{{post.title}}</h3>
                        <hr class="title-breakline">
                    </span>
                    <div v-if="post.desc" class="description" v-html="post.desc" :style="{ color: post.fontColor }"></div>
                </div>
            </div>
        </div>
    </section>
</div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import WebFooter from '~components/Footer.vue';

import pn1 from '../../images/portfolios/pattern1.png';
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
        bgColor: '#FFFFFF',
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
        bgColor: '#27AAA2',
    },
];

const generatePostToDisplay = () => {
    const postToDisplay = [
        [], [], [],
    ];

    for (let i = 0; i < posts.length; i += 1) {
        postToDisplay[i % 3].push(posts[i]);
    }
    return postToDisplay;
};

export default {
    data() {
        return {
            posts: generatePostToDisplay(),
            pn1,
        };
    },
    components: {
        WebHeader,
        WebFooter,
    },
};

</script>

<style scoped>
@import '../../assets/main.css';

.columns {
    display: flex;
    flex-direction: column;
    color: #FFFFFF;
    height: auto;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;

    @media(--for-desktop) {
        flex-direction: row;
        justify-content: space-between;
        padding-left: 4rem;
        padding-right: 4rem;
    }
}

.posts {
    width: 90%;
    margin-right: auto;
    margin-left: auto;

    @media(--for-desktop) {
        width: 30%;
    }
}

    .post {
        margin-bottom: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    .title-container {
        max-width: 30em;
    }

        .title {
            font-size: 1rem;
            text-transform: uppercase;
            text-align: center;
            letter-spacing: .1em;
            font-weight: bold;
            display: block;
        }

        .title-breakline {
            max-width: 16rem;
            border-width: .125rem;
            border-color: #000000;
            opacity: 0.1;
            border-bottom-style: solid;
        }

    .description {
        font-size: 1rem;
        max-width: 30em;
        text-align: center;
        line-height: 1.5;
        font-weight: 300;
        letter-spacing: .1em;

        @media(--for-desktop) {
            font-size: .875rem;
        }
    }
</style>
