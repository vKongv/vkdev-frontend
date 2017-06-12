<template>
    <div class="container pa2">
        <article class="fl w-100 w-50-l bg-white br3 pa3 pa4-ns b--black-10" v-for="(member, index) in members">
            <div class="tc">
                <img :src="member.img" class="br-100 h5 w5 dib" :title="'photo of ' + member.name" :alt="'photo of ' + member.name">
                <h1 class="f5 ttu tracked">{{ member.name }}</h1>
                <hr class="mw3 bb bw1 b--black-10">
            </div>
            <div class="lh-copy measure center f6 black-70 tc">
                <i v-html="member.desc">
                </i>
            </div>
        </article>
    </div>
</template>

<script>
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
        };
    },
};
</script>

<style scoped>
@import '../../assets/main.css';

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media(--for-desktop) {
        flex-direction: row;
        justify-content: space-between;
    }
}
</style>
