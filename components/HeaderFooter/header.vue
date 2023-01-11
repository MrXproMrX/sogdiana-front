<template>
    <header>
        <div class="header">
            <section class="container">
                <div class="header__list">
                    <div class="header__img">
                        <nuxt-link :to="localePath('/')">
                            <img src="~/assets/foto/logo.png" alt="logo">
                        </nuxt-link>
                    </div>

                    <section v-bind:class="{ header__burger__menu: burger }">
                        <ul class="header__menu">
                            <li>
                              <nuxt-link active-class="active"  class="header__link" :to="localePath('/about')">{{ $t('aboutUs') }}</nuxt-link>
                            </li>

                            <li>
                              <nuxt-link active-class="active"  class="header__link" :to="localePath('/services')">{{ $t('service') }}</nuxt-link>
                            </li>

                            <li>
                              <nuxt-link active-class="active" class="header__link" :to="localePath('/rooms')">{{ $t('rooms') }}</nuxt-link>
                            </li>

                            <li>
                              <nuxt-link  active-class="active" class="header__link" :to="localePath('/articles')">{{ $t('news') }}</nuxt-link>
                            </li>
                          </ul>
                        <div @click="burger = !burger" v-bind:class="{ header__burger__overflow: burger }"></div>
                    </section>

                    <section class="header__burger__cart">

                        <ul class="header__locales__cart">
                          <li @click="headerLocales = !headerLocales">
                            {{ localeTitle.toUpperCase() }} <span><i class="fas fa-chevron-down"></i></span>

                            <ul :class="{header__locales__menu : headerLocales}">
                              <li v-for="(locale,index) in availableLocales" :key="index + locale.code">
                                <button :class="{header__locales__active : locale.code === localeTitle}" @click.prevent="handleLangChange(locale.code)">{{ locale.code.toUpperCase()}}</button>
                              </li>
                            </ul>
                          </li>
                        </ul>

                        <button class="header__button__burger" @click="burger = !burger">
                            <i class="fas fa-bars"></i>
                        </button>
                    </section>
                </div>
            </section>
        </div>
    </header>
</template>

<script>
export default {

  data(){
    return{
      burger:false,
      localeTitle:'',
      headerLocales:false
    }
  },

  computed:{
    availableLocales(){
      this.localeTitle = this.$i18n.loadedLanguages[0]
      return this.$i18n.locales
    }
  },

  methods:{
    handleLangChange(langCode) {
      this.$i18n.setLocale(langCode)
      this.localeTitle = langCode
    }
  }
}
</script>
