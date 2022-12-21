<template>
    <footer>
      <div class="footer">
        <section class="container">
          <div class="footer__cart">
            <div class="footer__img">
              <nuxt-link to="/">
                <img src="~/assets/foto/footer__logo.png" alt="footer">
              </nuxt-link>
            </div>

            <div>
              <ul class="footer__icons">
                <li v-if="options.data[5].id">
                  <a :href="options.data[5].value" class="footer__icons__link"><i class="fab fa-facebook-f"></i></a>
                </li>

                <li v-if="options.data[6].id">
                  <a :href="options.data[6].value" class="footer__icons__link"><i class="fab fa-instagram"></i></a>
                </li>

                <li v-if="options.data[7].id">
                  <a :href="options.data[7].value" class="footer__icons__link"><i class="fab fa-telegram-plane"></i></a>
                </li>
              </ul>

              <a :href="`tel:` + options.data[8].value" v-if="options.data[8].id" class="footer__link">{{ $t('phone') }}: <span>{{options.data[8].value}}</span></a>
              <a :href="`tel:` + options.data[9].value" v-if="options.data[9].id" class="footer__link">{{ $t('phone') }}: <span>{{options.data[9].value}}</span></a>
              <a class="footer__link" v-if="options.data[10].id">{{ $t('adress') }}: <span>{{options.data[10].value}}</span></a>
              <a :href="`mailto:` + options.data[12].value" v-if="options.data[12].id" class="footer__link"> {{ $t('mail') }}: <span> {{options.data[12].value}}</span></a>
            </div>
          </div>

          <div class="footer__list">
            <div class="footer__text">
              "Sogdiana Hotel" Все права защищены<br>
              © Copyright 2022 - Web developed by <a href="sos.uz">SOS Group</a>
            </div>
          </div>
        </section>
      </div>
    </footer>
</template>

<script>
export default {
    async fetch({ store }) {
        await store.dispatch('options/fetchOptions')
    },

    computed:{
        options(){
            return this.$store.getters['options/options']
        },
    }
}
</script>
