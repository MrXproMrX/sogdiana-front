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
                    <template v-if="rooms.data.length">
                        <div class="rooms_in__list">
                        <div class="rooms_in__item" v-for="room in rooms.data" :key="room.id">
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
                                    <nuxt-link :to="'/rooms/' + room.id" class="rooms__button">{{ $t('more') }}</nuxt-link>
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
    }
}
</script>
