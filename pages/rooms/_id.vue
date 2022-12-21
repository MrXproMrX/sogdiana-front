<template>
    <section>

        <!-- about start -->

        <div class="about">
            <section class="container">
                <div class="about__cart">
                    <h2 class="services__title__h2">{{ $t('rooms') }}</h2>
                    <ul class="about__menu">
                        <li><nuxt-link class="about__menu__link" :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
                        <li><nuxt-link class="about__menu__link" :to="localePath('/rooms')">{{ $t('rooms') }}</nuxt-link></li>
                        <li><nuxt-link class="about__menu__link" :to="localePath('/rooms/' + RoomsContint.id)">{{RoomsContint.title}}</nuxt-link></li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- about end -->


        <!-- rooms start -->

        <div class="rooms_in_contint">
            <section class="container">
                <div class="rooms_in_contint__cart">
                    <h2 class="services__title__h2">{{RoomsContint.title}}</h2>

                    <div class="rooms_in_contint__list">

                        <!-- <section class="rooms_in_contint__slaeder">
                            <VueSlickCarousel class="rooms_in_contint__mrx1" :fade="true"  ref="c1" :asNavFor="c2" :focusOnSelect="true">
                                <div class="SwitchTpLink__item" v-for="(SwitchTpLink,index) in SwitchTpLinks.image" :key="index">
                                    <img :src="SwitchTpLink.img" :alt="index">
                                </div>
                            </VueSlickCarousel>

                            <VueSlickCarousel class="rooms_in_contint__mrx2"  ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="settings">
                                <div class="SwitchTpLink__item2" v-for="(SwitchTpLink,index) in SwitchTpLinks.image" :key="index">
                                    <img :src="SwitchTpLink.img" :alt="SwitchTpLink.img">
                                </div>
                            </VueSlickCarousel>
                        </section> -->

                    </div>
                </div>
            </section>
        </div>

        <!-- rooms end -->

    </section>
</template>

<style scoped>
.about{
    background-image: url(@/assets/foto/fon.jpeg);
}
</style>

<script>
import {baseURL} from '@/constants/config';
import { formatDate } from '@/utils';
export default {

    data(){
        return{
            baseURL,
            c1: undefined,
            c2: undefined,
            settings: {
                    arrows: true,
                    dots: false,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                     responsive: [
                   {
                  breakpoint: 1600,
                  settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
                  }
                },
                 {
                  breakpoint: 940,
                  settings: {
                  slidesToShow: 3,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 500,
                  settings: {
                  slidesToShow: 2,
                 slidesToScroll: 1
                  }
                 },

                 {
                  breakpoint: 280,
                  settings: {
                  slidesToShow: 1,
                 slidesToScroll: 1
                  }
                 },
               ]
            },
        }
    },

    mounted() {
      this.c1 = this.$refs.c1;
      this.c2 = this.$refs.c2;
    },

    methods:{
       formatDate,
    },

    async fetch({ store }) {
        await store.dispatch('options/fetchOptions')
        await store.dispatch('rooms/fetchRooms')
    },


    computed:{

        async created() {
            await this.fetchArticle();
            this.currentFoto = this.RoomsContint.gallery[0];
        },

        RoomsContint(){
            return this.rooms.data.find(rooms => rooms.id === + this.$route.params.id);
        },

        rooms() {
            return this.$store.getters['rooms/rooms']
        },
    }
}
</script>
