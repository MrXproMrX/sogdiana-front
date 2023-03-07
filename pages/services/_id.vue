<template>
    <section>

      <!-- about start -->

      <div class="about">
        <section class="container">
          <div class="about__cart">
            <h2 class="services__title__h2">{{servicesItem[0].title}}</h2>
            <ul class="about__menu">
              <li><nuxt-link class="about__menu__link" :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
              <li><nuxt-link class="about__menu__link" :to="localePath('/services')">{{ $t('ourService') }}</nuxt-link></li>
              <li><nuxt-link class="about__menu__link" :to="localePath('/services/' + ServicesContint.id)">{{servicesItem[0].title}}</nuxt-link></li>
            </ul>
          </div>
        </section>
      </div>

      <!-- about end -->


      <!-- Our services in start -->

        <div class="our_services_in" v-if="servicesItem">
            <section class="container">
                <div class="our_services_in__cart" v-for="items in servicesItem" :key="items.id">

                    <div class="our_services_in__cart__img">
                        <img :src="baseURL + items.image" :alt="items.title">
                    </div>

                    <div class="our_services_in__list clearfix">
                        <div class="our_services_in__item">

                          <h2 class="our_services_in__title">{{items.title}}</h2>

                          <section v-if="items.images">
                            <div class="our_services_in__img" v-for="img in JSON.parse(items.images)" :key="img">
                              <img :src="baseURL + img" :alt="ServicesContint.title">
                            </div>
                          </section>
                        </div>

                        <div class="about_contint__text" v-html="items.content"></div>
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

  head(){
    return{
      title: this.servicesItem[0].title,
      meta:[
        {
          hid: this.servicesItem[0].metaTitle,
          name:this.servicesItem[0].description,
          content:this.servicesItem[0].content,
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

    servicesItem(){
      if(this.$i18n.locale == 'en' && this.ServicesContint.translations.length){
        for(var i = 0; i < this.ServicesContint.translations.length; i++){
          if(this.ServicesContint.translations[i].column_name == 'content'){
            this.servicesContent = this.ServicesContint.translations[i].value
          }

          if(this.ServicesContint.translations[i].column_name == 'title'){
            this.servicesTitle = this.ServicesContint.translations[i].value
          }

          if(this.ServicesContint.translations[i].column_name == 'meta_description'){
            this.servicesMetaDescription = this.ServicesContint.translations[i].value
          }

          if(this.ServicesContint.translations[i].column_name == 'meta_title'){
            this.servicesMetaTitle = this.ServicesContint.translations[i].value
          }
        }
      }else if(this.$i18n.locale == 'ru'){
        this.servicesContent = this.ServicesContint.content
        this.servicesTitle = this.ServicesContint.title
        this.servicesMetaDescription = this.ServicesContint.meta_description
        this.servicesMetaTitle = this.ServicesContint.meta_title
      }

      return [
        {
          content:this.servicesContent,
          title:this.servicesTitle,
          image:this.ServicesContint.image,
          images:this.ServicesContint.images,
          id:this.ServicesContint.id,
          description:this.servicesMetaDescription,
          metaTitle:this.servicesMetaTitle
        }
      ]
    },
  }
}
</script>
