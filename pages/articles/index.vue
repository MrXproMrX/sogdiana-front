<template>
    <section>

        <!-- about start -->

        <div class="about">
            <section class="container">
                <div class="about__cart">
                    <h2 class="services__title__h2">{{ $t('news') }}</h2>
                    <ul class="about__menu">
                        <li><nuxt-link class="about__menu__link" :to="localePath('/')">{{ $t('home') }}</nuxt-link></li>
                        <li><nuxt-link class="about__menu__link" :to="localePath('/articles')">{{ $t('news') }}</nuxt-link></li>
                    </ul>
                </div>
            </section>
        </div>

        <!-- about end -->

        <!-- articles start -->

        <div class="articles">
            <section class="container">
                <div class="articles__cart">
                    <template v-if="articles.data.data.length">
                        <div class="articles__list">
                            <div class="articles__item" v-for="article in articles.data.data" :key="article.id">
                                <div class="articles__img">
                                    <img :src="baseURL + article.image" :alt="article.title">
                                </div>

                                <section>
                                    <h4 class="news__title__h4">{{formatDate(article.updated_at)}}</h4>
                                    <h2 class="articles__title__h2">{{article.title}}</h2>
                                    <div class="articles__text" v-html="article.content.slice(0,200)"></div>
                                    <nuxt-link :to="localePath('/articles/' + article.id)" class="rooms__button">{{ $t('more') }}</nuxt-link>
                                </section>
                            </div>
                        </div>
                    </template>
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
    articles(){
      return this.$store.getters['articles/articles']
    },
  }
}
</script>
