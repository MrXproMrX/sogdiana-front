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
            <li><nuxt-link class="about__menu__link" :to="localePath('/rooms/' + roomsAll.id)">{{roomsAll.title}}</nuxt-link></li>
          </ul>
        </div>
      </section>
    </div>

    <!-- about end -->


    <!-- rooms start -->

    <div class="rooms_in_contint">
      <section class="container">
        <div class="rooms_in_contint__cart">
          <h2 class="services__title__h2">{{roomsAll.title}}</h2>

          <div class="rooms_in_contint__list">

            <section class="SwitchTpLink__slaeder">
              <VueSlickCarousel class="SwitchTpLink__mrx1" :fade="true"  ref="c1" :asNavFor="c2" :focusOnSelect="true">
                <div class="SwitchTpLink__item" v-for="(SwitchTpLink,index) in galleryFoto" :key="index">
                  <img :src="baseURL + SwitchTpLink" :alt="SwitchTpLink">
                </div>
              </VueSlickCarousel>

              <VueSlickCarousel class="SwitchTpLink__mrx2"  ref="c2" :asNavFor="c1" :focusOnSelect="true" v-bind="settings">
                <div class="SwitchTpLink__item2" v-for="(SwitchTpLink,index) in galleryFoto" :key="index">
                  <img :src="baseURL + SwitchTpLink" :alt="SwitchTpLink">
                </div>
              </VueSlickCarousel>
            </section>

            <section>

              <ul class="rooms__menu__icons">

                <li>
                  <h3 class="rooms__title__h3">
                    <span>
                      <svg
                      id="Layer_1"
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 121.7 422.4 352"
                      xml:space="preserve"
                      >
                      <path d="M0,227.2h35.2v-70.4h70.4v-35.2H0V227.2z M35.2,368H0v105.6h105.6v-35.2H35.2V368z M316.8,121.7v35.2h70.4	v70.4h35.2V121.7H316.8z M387.2,438.4h-70.4v35.2h105.6V368h-35.2V438.4z"
                      />
                    </svg>
                  </span>
                  {{roomsAll.square}}
                </h3>
              </li>

              <li>
                <h3 class="rooms__title__h3">
                  <span>
                    <BathIcon/>
                  </span>
                  {{ $t('bath') }}
                </h3>
              </li>

              <li>
                <h3 class="rooms__title__h3">
                  <span>
                    <ACIcon />
                  </span>
                  {{ $t('conditioner') }}
                </h3>
              </li>

              <li>
                <h3 class="rooms__title__h3">
                  <span>
                    <TVIcon/>
                  </span>
                  {{ $t('tv') }}
                </h3>
              </li>

              <li>
                <h3 class="rooms__title__h3">
                  <span>
                    <WifiIcon/>
                  </span>
                  {{ $t('wifi') }}
                </h3>
              </li>

              <li>
                <h3 class="rooms__title__h3">
                  <span>
                    <ParkingIcon/>
                  </span>
                  {{ $t('parking') }}
                </h3>
              </li>

              <li>
                <h3 class="rooms__title__h3">
                  <span>
                    <SwimmingIcon/>
                  </span>
                  {{ $t('swimming') }}
                </h3>
              </li>

              <li>
                <h3 class="rooms__title__h3">
                  <span>
                    <FamilyIcon/>
                  </span>
                  {{ $t('family') }}
                </h3>
              </li>
              </ul>

            <h3 class="rooms_in__title__h3">
              {{ $t('manHolds') }}
              <span>
                <i class="fa-solid fa-user"></i>
              </span>
            </h3>

            <div class="rooms_in__text" v-html="roomsAll.content"></div>
          </section>

        </div>

        <div class="rooms_in__price__list">
          <h3 class="rooms__title__h4">{{ $t('price') }}:<span>{{roomsAll.price}}</span></h3>
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

import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";

import BathIcon from '@/components/icons/BathIcon';
import ACIcon from '@/components/icons/ACIcon';
import TVIcon from '@/components/icons/TVIcon';
import WifiIcon from '@/components/icons/WifiIcon';
import ParkingIcon from '@/components/icons/ParkingIcon';
import SwimmingIcon from '@/components/icons/SwimmingIcon';
import FamilyIcon from '@/components/icons/FamilyIcon';
export default {

  components:{
    BathIcon,
    ACIcon,
    TVIcon,
    WifiIcon,
    ParkingIcon,
    SwimmingIcon,
    FamilyIcon,
    VueSlickCarousel
  },

  head(){
    return{
      title:this.RoomsContint.title,
      meta:[
        {
          hid: 'max_mrx',
          name:'max_mrx',
          content: this.RoomsContint.meta_description,
        },
        {
          hid: 'maris',
          name:'maris',
          content:'movies, strem, stremaing',
        },
      ]
    }
  },

    data(){
        return{
            baseURL,
            c1: undefined,
            c2: undefined,
            settings: {
                    arrows: true,
                    dots: false,
                    infinite: false,
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

    galleryFoto(){
      return JSON.parse(this.RoomsContint.gallery)
    },

    rooms() {
      return this.$store.getters['rooms/rooms']
    },

    roomsAll(){
      if(this.$i18n.locale == 'en' && this.RoomsContint.translations.length){
        for(var i = 0; i < this.RoomsContint.translations.length; i++){
          if(this.RoomsContint.translations[i].column_name == 'content'){
            this.servicesContent = this.RoomsContint.translations[i].value
          }

          if(this.RoomsContint.translations[i].column_name == 'title'){
            this.servicesTitle = this.RoomsContint.translations[i].value
          }

          if(this.RoomsContint.translations[i].column_name == 'description'){
            this.servicesMetaDescription = this.RoomsContint.translations[i].value
          }

          if(this.RoomsContint.translations[i].column_name == 'title'){
            this.servicesMetaTitle = this.RoomsContint.translations[i].value
          }

          if(this.RoomsContint.translations[i].column_name == 'price'){
            this.servicesPrice = this.RoomsContint.translations[i].value
          }

          if(this.RoomsContint.translations[i].column_name == 'square'){
            this.servicesSquare = this.RoomsContint.translations[i].value
          }
        }
      }else if(this.$i18n.locale == 'ru'){
        this.servicesContent = this.RoomsContint.content
        this.servicesTitle = this.RoomsContint.title
        this.servicesMetaDescription = this.RoomsContint.description
        this.servicesMetaTitle = this.RoomsContint.title
        this.servicesPrice = this.RoomsContint.price
        this.servicesSquare = this.RoomsContint.square
      }

      const arry = {
        content:this.servicesContent,
        title:this.servicesTitle,
        image:this.RoomsContint.image,
        id:this.RoomsContint.id,
        description:this.servicesMetaDescription,
        metaTitle:this.servicesMetaTitle,
        price:this.servicesPrice,
        square:this.servicesSquare
      }

      return arry
    },
  }
}
</script>
