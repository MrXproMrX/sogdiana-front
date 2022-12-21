<template>
    <section>
        <!-- about start -->

        <div class="about">
            <section class="container">
                <div class="about__cart">
                    <h2 class="services__title__h2">{{page.data.title}}</h2>
                    <ul class="about__menu">
                      <li><nuxt-link class="about__menu__link" :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
                        <li><nuxt-link class="about__menu__link" :to="localePath('/about')">{{page.data.title}}</nuxt-link></li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- about end -->

        <!-- about contint start -->

        <div class="about_contint">
            <section class="container">
                <div class="about_contint__cart">
                    <div class="about_contint__text" v-html="page.data.content"></div>
                </div>
            </section>
        </div>

        <!-- about contint end -->
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
  name: 'about',
  head(){
        return{
            title: this.page.data.title,
            meta:[
              {
                  hid: this.page.data.meta_description,
                  name:this.page.data.meta_title,
                  content:this.page.data.content,
                },

                {
                    hid: this.page.data.meta_description,
                    name:this.page.data.meta_title,
                    content:this.page.data.content,
                },
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
    await store.dispatch('page/fetchPage')
  },

  computed:{
    page(){
      return this.$store.getters['page/page']
    },
  }
}
</script>
