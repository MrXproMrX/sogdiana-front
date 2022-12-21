<template>
    <section>

        <!-- about start -->

        <div class="about">
            <section class="container">
                <div class="about__cart">
                    <h2 class="services__title__h2">{{ServicesContint.title}}</h2>
                    <ul class="about__menu">
                        <li><nuxt-link class="about__menu__link" :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
                        <li><nuxt-link class="about__menu__link" :to="localePath('/services')">{{ $t('ourService') }}</nuxt-link></li>
                        <li><nuxt-link class="about__menu__link" :to="localePath('/services/' + ServicesContint.id)">{{ServicesContint.title}}</nuxt-link></li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- about end -->

        <!-- Our services in start -->

        <div class="our_services_in">
            <section class="container">
                <div class="our_services_in__cart">

                    <div class="our_services_in__cart__img">
                        <img :src="baseURL + ServicesContint.image" :alt="ServicesContint.title">
                    </div>

                    <div class="our_services_in__list clearfix">
                        <div class="our_services_in__item">
                            <h2 class="our_services_in__title">{{ServicesContint.title}}</h2>
                            <div class="our_services_in__img">
                                <img :src="baseURL + ServicesContint.image" :alt="ServicesContint.title">
                            </div>
                        </div>

                        <div class="about_contint__text" v-html="ServicesContint.content"></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Our services in end -->

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
  name: 'services in',

  head(){
        return{
            title: this.ServicesContint.title,
            meta:[
                {
                  hid: this.ServicesContint.meta_description,
                  name:this.ServicesContint.meta_description,
                  content:this.ServicesContint.content,
                }
            ]
        }
    },


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
        await store.dispatch('services/fetchServices')
    },

  computed:{

    ServicesContint(){
      return this.services.data.find(services => services.id === + this.$route.params.id);
    },

    services(){
      return this.$store.getters['services/services']
    },
  }

}
</script>
