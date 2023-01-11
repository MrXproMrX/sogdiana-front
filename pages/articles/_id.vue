<template>
    <section>

        <!-- about start -->

        <div class="about">
            <section class="container">
                <div class="about__cart">
                    <h2 class="services__title__h2">{{ArticlesContint.title}}</h2>
                    <ul class="about__menu">
                        <li><nuxt-link class="about__menu__link" :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
                        <li><nuxt-link class="about__menu__link" :to="localePath('/articles')">{{ $t('news') }}</nuxt-link></li>
                        <li><nuxt-link class="about__menu__link" :to="localePath('/articles/'+ArticlesContint.id)">{{ArticlesContint.title}}</nuxt-link></li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- about end -->

        <!-- articles start -->

        <div class="our_services_in">
            <section class="container">
                <div class="our_services_in__cart">

                    <div class="our_services_in__cart__img">
                        <img :src="baseURL + ArticlesContint.image" :alt="ArticlesContint.title">
                    </div>

                    <div class="our_services_in__list clearfix">
                        <h2 class="our_services_in__title">{{ArticlesContint.title}}</h2><br>
                        <div class="about_contint__text"  v-html="ArticlesContint.content"></div>
                    </div>
                </div>
            </section>
        </div>

        <!-- articles end -->

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
      title:this.ArticlesContint.title,
      meta:[
        {
          hid: 'max_mrx',
          name:'max_mrx',
          content: this.ArticlesContint.content,
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
        }
    },

    methods:{
        formatDate,
    },

    async fetch({ store }) {
        await store.dispatch('options/fetchOptions')
        await store.dispatch('articles/fetchArticles')
    },

  computed:{

    ArticlesContint(){
      return this.articles.data.data.find(articles => articles.id === + this.$route.params.id);
    },

    articles(){
      return this.$store.getters['articles/articles']
    },
  }

}
</script>
