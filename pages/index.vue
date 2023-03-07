<template>
  <section>

    <!-- slider start-->

    <div class="slider" v-if="slidersAll.length">
      <template>
        <div class="slider__cart">
          <VueSlickCarousel v-bind="slic" class="slider__list">
            <div class="slider__item" v-for="slider in slidersAll" :key="slider.id">
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

    <section class="container" v-if="roomsAll.length">
      <div class="rooms">
        <template>
          <div class="rooms__cart">
            <div class="rooms__list">

              <div class="rooms__item" v-for="room in roomsAll" :key="room.id">
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

    <div class="services" v-if="servicesAll.length">
      <section class="container">
        <div class="services__cart">
          <h2 class="services__title__h2">{{ $t('ourService') }}</h2>
          <div class="services__list">

            <div class="services__item" v-for="service in servicesAll" :key="service.id">
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

    <div class="news" v-if="articlesAll.length">
      <section class="container">
        <div class="news__cart">
          <h2 class="services__title__h2">{{ $t('news') }}</h2>

          <div class="news__list">
            <div class="news__item" v-for="article in articlesAll" :key="article.id">
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

    <div class="map" v-if="optionsMap.id">
      <div class="map__cart" v-if="optionsMap.id">
        <h2 class="services__title__h2">{{ $t('contact') }}</h2>
        <div class="map__list" v-html="optionsMap.value"></div>
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

    slidersAll(){
      const listRooms = this.sliders
      const arry = []
      for(var i = 0; i < listRooms.length;i++){
        const itemRooms = listRooms[i]
        const title = itemRooms.title
        const description = itemRooms.description
        const image = itemRooms.image
        const id = itemRooms.id
        if(this.$i18n.locale == 'ru'){
          arry.push({title,description,image,id})
        }

        if(this.$i18n.locale == 'en' && itemRooms.translations.length){
          for(var m = 0; m < itemRooms.translations.length;m++){
            if(itemRooms.translations[m].column_name == 'description'){
              this.contentEn = itemRooms.translations[m].value
            }

            if(itemRooms.translations[m].column_name == 'title'){
              this.titleEn = itemRooms.translations[m].value
            }
            }
            const title = this.titleEn
            const description = this.contentEn
            arry.push({title,description,image,id})
          }
        }
        return arry
    },

    rooms() {
      return this.$store.getters['homepage/rooms']
    },

    roomsAll(){
      const listRooms = this.rooms
      const arry = []
      for(var i = 0; i < listRooms.length;i++){
        const itemRooms = listRooms[i]
        const title = itemRooms.title
        const description = itemRooms.description
        const image = itemRooms.image
        const id = itemRooms.id
        const price = itemRooms.price
        if(this.$i18n.locale == 'ru'){
          arry.push({title,description,image,id,price})
        }

        if(this.$i18n.locale == 'en' && itemRooms.translations.length){
          for(var m = 0; m < itemRooms.translations.length;m++){
            if(itemRooms.translations[m].column_name == 'description'){
              this.contentEn = itemRooms.translations[m].value
            }

            if(itemRooms.translations[m].column_name == 'title'){
              this.titleEn = itemRooms.translations[m].value
            }

            if(itemRooms.translations[m].column_name == 'price'){
              if(this.priceEn = itemRooms.translations[m].value.length >= 1){
                this.priceEn = itemRooms.translations[m].value
              }
            }

          }
          const title = this.titleEn
          const description = this.contentEn
          const price = this.priceEn
          arry.push({title,description,image,id,price})
        }
      }
      return arry
    },

    services() {
      return this.$store.getters['homepage/services']
    },

    servicesAll(){
      const listServices = this.services
      const arry = []
      for(var i = 0; i < listServices.length;i++){
        const itemServices = listServices[i]
        const title = itemServices.title
        const content = itemServices.content
        const image = itemServices.image
        const id = itemServices.id
        if(this.$i18n.locale == 'ru'){
          arry.push({title,content,image,id})
        }

        if(this.$i18n.locale == 'en' && itemServices.translations.length){
          for(var m = 0; m < itemServices.translations.length;m++){
            if(itemServices.translations[m].column_name == 'content'){
              this.contentEn = itemServices.translations[m].value
            }

            if(itemServices.translations[m].column_name == 'title'){
              this.titleEn = itemServices.translations[m].value
            }

          }
          const title = this.titleEn
          const content = this.contentEn
          arry.push({title,content,image,id})
        }
      }
      return arry
    },

    articles() {
      return this.$store.getters['homepage/articles']
    },

    articlesAll(){
      const listArticles = this.articles
      const arry = []
      for(var i = 0; i < listArticles.length;i++){
        const itemArticles = listArticles[i]
        const title = itemArticles.title
        const content = itemArticles.content
        const image = itemArticles.image
        const id = itemArticles.id
        const updated_at = itemArticles.updated_at
        if(this.$i18n.locale == 'ru'){
          arry.push({title,content,image,id,updated_at})
        }

        if(this.$i18n.locale == 'en' && itemArticles.translations.length){
          for(var m = 0; m < itemArticles.translations.length;m++){
            if(itemArticles.translations[m].column_name == 'content'){
              this.contentEn = itemArticles.translations[m].value
            }

            if(itemArticles.translations[m].column_name == 'title'){
              this.titleEn = itemArticles.translations[m].value
            }

          }
          const title = this.titleEn
          const content = this.contentEn
          arry.push({title,content,image,id,updated_at})
        }
      }
      console.log(this.options)
      return arry
    },

    options(){
      return this.$store.getters['options/options']
    },

    optionsMap(){
      const map = this.options.data
      for(var i = 0; i < map.length;i++){
        if(map[i].display_name == 'MAP'){
          const arry = {
            value:map[i].value,
            id:map[i].id
          }
          return arry
        }
      }
    }
  }
}
</script>
