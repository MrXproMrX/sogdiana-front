<template>
  <section>

    <!-- slider start-->

    <div class="slider">
      <template v-if="sliders.length">
        <div class="slider__cart">
          <VueSlickCarousel v-bind="slic" class="slider__list">
            <div class="slider__item" v-for="slider in sliders" :key="slider.id">
              <img :src="baseURL + slider.image" :alt="slider.title">

              <section class="container">
                <div class="slider__item__text">
                  <h1 class="slider__title__h1">{{slider.title}}</h1>
                  <div class="slider__text">
                    <p>{{slider.description}}</p>
                  </div>
                </div>
              </section>
            </div>
          </VueSlickCarousel>
        </div>
      </template>
    </div>

    <!-- slider end-->

    <!-- rooms start -->

    <section class="container">
      <div class="rooms">
        <template v-if="rooms.length">
          <div class="rooms__cart">
            <div class="rooms__list">

              <div class="rooms__item" v-for="room in rooms" :key="room.id">
                <div class="rooms__img">
                  <img :src="baseURL + room.image" :alt="room.title">
                </div>

                <div>
                  <h2 class="rooms__title__h2">{{room.title}}</h2>
                  <div class="rooms__text" v-html="room.description"></div>
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
                        {{room.square}}
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
                </div>

                <div>
                  <h4 class="rooms__title__h4">
                    {{ $t('price') }}:<span>{{room.price}}</span>
                  </h4>
                  <button class="rooms__button">{{ $t('booking') }}</button>
                </div>
              </div>

            </div>
          </div>
        </template>
      </div>
    </section>

    <!-- rooms end -->

    <!-- Services start -->

    <div class="services">
      <section class="container">
        <div class="services__cart">
          <h2 class="services__title__h2">{{ $t('ourService') }}</h2>
          <div class="services__list">

            <div class="services__item" v-for="service in services" :key="service.id">
              <div class="services__img">
                <img :src="baseURL + service.image" :alt="service.title">
                <h4 class="services__title__h4">{{service.title}}</h4>
              </div>

              <div class="services__text" v-html="service.content.slice(0,255)"></div>
            </div>

          </div>
        </div>
      </section>
    </div>

    <!-- Services end -->


    <!-- News start -->

    <div class="news">
      <section class="container">
        <div class="news__cart">
          <h2 class="services__title__h2">{{ $t('news') }}</h2>

          <div class="news__list">
            <div class="news__item" v-for="article in articles" :key="article.id">
              <div class="news__img">
                <img :src="baseURL + article.image" alt="news">
              </div>
              <h4 class="news__title__h4">{{formatDate(article.updated_at)}}</h4>
              <nuxt-link :to="localePath('/articles/' + article.id)" class="news__link">{{article.title.slice(0,45)}}</nuxt-link>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- News ent -->


    <!-- map start -->

    <div class="map">
      <div class="map__cart" v-if="options.data[4].id">
        <h2 class="services__title__h2">{{ $t('contact') }}</h2>
        <div class="map__list" v-html="options.data[4].value"></div>
      </div>
    </div>

    <!-- map end -->

  </section>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import loading from '@/components/loading.vue';
import {baseURL} from '@/constants/config';
import { formatDate } from '@/utils';
import BathIcon from '@/components/icons/BathIcon';
import ACIcon from '@/components/icons/ACIcon';
import TVIcon from '@/components/icons/TVIcon';
import WifiIcon from '@/components/icons/WifiIcon';
import ParkingIcon from '@/components/icons/ParkingIcon';
import SwimmingIcon from '@/components/icons/SwimmingIcon';
import FamilyIcon from '@/components/icons/FamilyIcon';
export default {
  name: 'IndexPage',
  components:{
    VueSlickCarousel,
    BathIcon,
    ACIcon,
    TVIcon,
    WifiIcon,
    ParkingIcon,
    SwimmingIcon,
    FamilyIcon,
    loading
  },

  head(){
    return{
      title: 'Гостиница Самарканда: Grand Hotel Sogdiana',
    }
  },

  data(){
    return{
      baseURL,
      slic:{
        arrows:true,
        speed:1500,
        fade:true,
        dose:false,
        infinite:true,
        autoplay:true,
      },
    }
  },

  methods:{
    formatDate,
  },

  async fetch({ store }) {
    await store.dispatch('homepage/fetchHomepage')
    await store.dispatch('options/fetchOptions')
  },

  computed:{
    sliders() {
      return this.$store.getters['homepage/sliders']
    },

    rooms() {
      return this.$store.getters['homepage/rooms']
    },

    services() {
      return this.$store.getters['homepage/services']
    },

    articles() {
      return this.$store.getters['homepage/articles']
    },

    options(){
      return this.$store.getters['options/options']
    },
  }
}
</script>
