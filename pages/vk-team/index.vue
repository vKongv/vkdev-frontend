<template>
    <div class="team-container" :style="{ 'background-image': 'url(' + pn1 + ')' }">
        <article class="profile" v-for="(member, index) in members">
            <div class="member">
                <img :src="member.img" class="member-img" :title="'photo of ' + member.name" :alt="'photo of ' + member.name">
                <h1 class="member-name">{{ member.name }}</h1>
                <hr class="profile-breakline">
            </div>
            <div class="member-desc">
                <i v-html="member.desc">
                </i>
            </div>
        </article>
    </div>
</template>

<script>
import pn1 from '../../images/background4.png';
import kong from '../../images/vk-team/kong.png';
import vivien from '../../images/vk-team/vivien.png';

const members = [
    {
        img: kong,
        name: 'Kong',
        desc: '<blockquote class="ttu tracked">" What you see is what i code "</blockquote> Quite passionate and thoughtful. He loves to take challenges and think out of the box.',
    },
    {
        img: vivien,
        name: 'Vivien',
        desc: '<blockquote class="tc ttu tracked">" Your imagination, My creation "</blockquote> She loves to travel around and get inspirations. Open-minded and independent thinker.',
    },
];

export default {
    data() {
        return {
            members,
            pn1,
        };
    },
};
</script>

<style scoped>
@import '../../assets/main.css';

.team-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    background-size: cover;

    @media(--for-desktop) {
        flex-direction: row;
        justify-content: space-between;
    }
}

    .profile {
        float: left;
        width: 100%;
        /*background-color: #FFFFFF;*/
        border-radius: 0.5rem;
        border-color: rgba(0, 0, 0, .1);
        padding: 1rem;
        text-align: center;

        @media(--for-desktop) {
            width: 50%;
            padding: 2rem;
        }
    }
        .member {

        }

            .member-img {
                border-radius: 100%;
                height: 16rem;
                width: 16rem;
                display: inline-block;
            }

            .member-name {
                font-size: 1rem;
                text-transform: uppercase;
                letter-spacing: 0.1em;
            }

            .profile-breakline {
                max-width: 4rem;
                border-width: 0.125rem;
                border-color: rgba(0, 0, 0, .1);
                border-bottom-style: solid;
            }

        .member-desc {
            line-height: 1.5;
            max-width: 30em;
            margin-right: auto;
            margin-left: auto;
            font-size: 0.875rem;
            color: rgba(0, 0, 0, .7);
        }

</style>
