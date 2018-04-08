<template>
    <div class="cards" :style="{ 'background-image': 'url(' + pn1 + ')' }">
    <!-- <div class="cards ph5-l ph3"> -->
        <article class="cards-item" v-for="( portfolio, index) in portfolios">
            <section>
                <img :src="portfolio.img" class="card-img" :alt="portfolio.title">
                <div v-if="portfolio.tags" class="card-tags-container">
                    <span class="card-tags" v-for="( tag, index) in portfolio.tags">
                        <a href="#" class="tags-link">
                            <span class="tags"><b>#</b>{{ tag }}</span>
                        </a>
                    </span>
                </div>
                <div class="card-desc-container">
                    <div class="card-desc-title">
                        <!-- <div class="dtc"> -->
                            <h1 class="desc-title"> {{ portfolio.title }} </h1>
                        <!-- </div> -->
                    </div>
                    <div class="card-desc"> {{ portfolio.desc }} </div>
                </div>
            </section>
        </article>
    </div>
</template>

<script>
import WebHeader from '~components/Header.vue';
import WebFooter from '~components/Footer.vue';

import pn1 from '../../images/portfolios/pattern1.png';
import imageClinic from '../../images/portfolios/clinic1.png';
import imageGst from '../../images/portfolios/gstmgmtsys1.png';
import imageFileTransfer from '../../images/portfolios/filtransfersys.png';
import imageBridal from '../../images/portfolios/bridalsystem.png';

const portfolios = [
    {
        title: 'GST Management System',
        desc: 'A POS (Point-of-Sales) system with the addition of GST calculation and management. Suitable for small and medium shops which apply non-complex GST policy.',
        img: imageGst,
        tags: ['vb', 'desktop', 'gst', 'pos', 'finance'],
    },
    {
        title: 'File Transferring C-Application',
        desc: 'This low-level application serves simple file transferring service yet require only minimal run-time support.',
        img: imageFileTransfer,
        tags: ['c', 'desktop', 'minimal'],
    },
    {
        title: 'Poliklinik Pilah File Reference System',
        desc: 'A system that helps a private clinic (Poliklinik Pilah) to improve patients\' record management and simplify their workflow.',
        img: imageClinic,
        tags: ['VB', 'desktop', 'clinic', 'health'],
    },
    {
        title: 'Bridal Shop Booking System',
        desc: 'An admin-system that allows shop helpers to manage booking for photography packages,gowns, as well as the schedule of the photographers.',
        img: imageBridal,
        tags: ['C++', 'desktop', 'bridal-shop', 'wedding'],
    },
];

export default {
    data() {
        return {
            portfolios,
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
.cards {
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;

    @media(--for-desktop) {
        padding-left: 4rem;
        padding-right: 4rem;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }
}

    .cards-item {
        background-color: white;
        border-radius: .25rem;
        border: 1px solid;
        color: #333333;
        border-color: rgba(0, 0, 0, 0.1);
        margin-top: 2rem;
        margin-bottom: 2rem;
        margin-right: auto;
        margin-left: auto;
        width: 90%;

        @media(--for-desktop) {
            margin-left:0;
            margin-right:0;
            margin-top:0;
            width: 30%;
        }

        &:hover {
            box-shadow: 5px 8px 10px -5px rgba(0, 0, 0, 0.3);
            cursor: pointer;
        }

    }

        .card-img {
            width: 100%;
            max-height: 20rem;
            align-self: center;
            display: block;
            border-radius: 0.25rem;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;

            @media(--for-desktop) {
                max-height: 12rem;
            }
        }

        .card-tags-container {
            padding-top: 1rem;
            padding-bottom: 1rem;
            padding-right: 1.5rem;
            padding-left: 1.5rem;
            background-color: #FFFCEB;
        }

            .card-tags {
                display: inline-block;
                margin-right: 1rem;
            }

                .tags-link {
                    color: #357EDD;
                    text-decoration: none;
                    line-height: 1.25;
                }

                .tags {
                    max-width: 34em;
                    font-size: 0.875rem;
                    text-transform: lowercase;
                    font-weight: 600;

                    &:hover {
                        text-decoration: underline;
                    }
                }

            .card-desc-container {
                padding: 1.5rem;

                @media(--for-desktop) {
                    padding: 1rem;
                }
            }

                .card-desc-title {
                    margin-top: 0.25rem;
                    width: 100%;
                    /*display: table;*/
                }

                    .desc-title {
                        font-size: 1rem;
                        text-transform: uppercase;
                        text-align: center;
                        margin-top: 0.5rem;
                        margin-bottom: 0.875rem;
                        letter-spacing: 0.1em;

                        @media(--for-desktop) {
                            font-size: 1.25rem;
                        }
                    }

                .card-desc {
                    font-size: 0.875rem;
                    line-height: 1.5;
                    margin-top: 0.5rem;
                    color: #555555;
                    max-width: 30em;
                    text-align: center;
                    margin: auto;
                    letter-spacing: 0.1em;
                }



</style>
