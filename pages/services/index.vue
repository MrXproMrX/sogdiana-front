<template>
    <section>

        <!-- about start -->

        <div class="about">
            <section class="container">
                <div class="about__cart">
                    <h2 class="services__title__h2">{{ $t('ourService') }}</h2>
                    <ul class="about__menu">
                      <li><nuxt-link class="about__menu__link" :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
                      <li><nuxt-link class="about__menu__link" :to="localePath('/services')">{{ $t('ourService') }}</nuxt-link></li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- about end -->


        <!-- Our services start -->

        <div class="our_services" v-if="serviceslocales">
            <section class="container">
                <div class="our_services__cart">
                    <h2 class="services__title__h2">{{ $t('ourService') }}</h2>
                    <div class="our_services__list">
                        <div class="our_services__item" v-for="service in serviceslocales" :key="service.id">
                            <img :src="baseURL + service.image" :alt="service.title">
                            <h3 class="our_services__title__h3">{{service.title}}</h3>
                            <nuxt-link :to="localePath('/services/' + service.id)" class="our_services__link">{{ $t('more') }}</nuxt-link>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        <!-- Our services end -->

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
  head(){
    return{
      title: 'Our services',
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
    services(){
      return this.$store.getters['services/services']
    },

    serviceslocales(){
      const listServices = this.services.data
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
    }
  }
}
</script>
