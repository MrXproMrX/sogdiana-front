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
                    </ul>
                </div>
            </section>
        </div>

        <!-- about end -->

        <!-- rooms start -->

        <div class="rooms_in">
            <section class="container">
                <div class="rooms_in__cart">
                    <template v-if="roomsAll.length">
                        <div class="rooms_in__list">
                        <div class="rooms_in__item" v-for="room in roomsAll" :key="room.id">
                            <div class="rooms_in__img">
                                <img :src="baseURL + room.image" :alt="room.title">
                            </div>

                            <div>
                                <h2 class="rooms__title__h2">{{room.title}}</h2>
                                <div class="rooms__text" v-html="room.content"></div>
                                <h4 class="rooms__title__h4">
                                  {{ $t('price') }}:<span>{{room.price}}</span>
                                </h4>
                                <div class="rooms_in__item__cart">
                                    <nuxt-link :to="localePath('/rooms/' + room.id)" class="rooms__button">{{ $t('more') }}</nuxt-link>
                                    <button class="rooms__button">{{ $t('booking') }}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </template>
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
    }
  },

  methods:{
    formatDate,
  },

  async fetch({ store }) {
    await store.dispatch('options/fetchOptions')
    await store.dispatch('rooms/fetchRooms')
  },

    computed:{
      rooms() {
        return this.$store.getters['rooms/rooms']
      },

      roomsAll(){
        const listRooms = this.rooms.data
        const arry = []
        for(var i = 0; i < listRooms.length;i++){
          const itemRooms = listRooms[i]
          const title = itemRooms.title
          const content = itemRooms.content
          const image = itemRooms.image
          const id = itemRooms.id
          const price = itemRooms.price
          if(this.$i18n.locale == 'ru'){
            arry.push({title,content,image,id,price})
          }

          if(this.$i18n.locale == 'en' && itemRooms.translations.length){
            for(var m = 0; m < itemRooms.translations.length;m++){
              if(itemRooms.translations[m].column_name == 'content'){
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
            const content = this.contentEn
            const price = this.priceEn
            arry.push({title,content,image,id,price})
          }
        }
        return arry
      }
    }
}
</script>
