<template>
    <section>

      <!-- about start -->

      <div class="about">
        <section class="container">
          <div class="about__cart">
            <h2 class="services__title__h2">{{articlesItem.title}}</h2>
            <ul class="about__menu">
              <li><nuxt-link class="about__menu__link" :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
              <li><nuxt-link class="about__menu__link" :to="localePath('/articles')">{{ $t('news') }}</nuxt-link></li>
              <li><nuxt-link class="about__menu__link" :to="localePath('/articles/'+articlesItem.id)">{{articlesItem.title}}</nuxt-link></li>
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
            <img :src="baseURL + articlesItem.image" :alt="articlesItem.title">
          </div>

          <div class="our_services_in__list clearfix">
            <h2 class="our_services_in__title">{{articlesItem.title}}</h2><br>
            <div class="about_contint__text"  v-html="articlesItem.content"></div>
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
    await store.dispatch('articles/fetchArticles')
    await store.dispatch('options/fetchOptions')
  },

  computed:{

    ArticlesContint(){
      return this.articles.data.data.find(articles => articles.id === + this.$route.params.id);
    },

    articles(){
      return this.$store.getters['articles/articles']
    },

    articlesItem(){
      if(this.$i18n.locale == 'en' && this.ArticlesContint.translations.length){
        for(var i = 0; i < this.ArticlesContint.translations.length; i++){
          if(this.ArticlesContint.translations[i].column_name == 'content'){
            this.servicesContent = this.ArticlesContint.translations[i].value
          }

          if(this.ArticlesContint.translations[i].column_name == 'title'){
            this.articlesTitle = this.ArticlesContint.translations[i].value
          }

          if(this.ArticlesContint.translations[i].column_name == 'meta_description'){
            this.articlesMetaDescription = this.ArticlesContint.translations[i].value
          }

          if(this.ArticlesContint.translations[i].column_name == 'meta_title'){
            this.articlesMetaTitle = this.ArticlesContint.translations[i].value
          }
        }
      }else if(this.$i18n.locale == 'ru'){
        this.servicesContent = this.ArticlesContint.content
        this.articlesTitle = this.ArticlesContint.title
        this.articlesMetaDescription = this.ArticlesContint.meta_description
        this.articlesMetaTitle = this.ArticlesContint.meta_title
      }

      const arry = {
        content:this.servicesContent,
        title:this.articlesTitle,
        image:this.ArticlesContint.image,
        id:this.ArticlesContint.id,
        description:this.articlesMetaDescription,
        metaTitle:this.articlesMetaTitle
      }
      return arry
    },
  }
}
</script>
