<template>
  <h1>Hello World</h1>
</template>

<script scoped>

  export default {
    components: {
    },

    data () {
      return {
        online: true
      }
    },

    created() {
      feather.replace();
    },

    mounted () {
      if (!window.navigator) {
        this.online = false
        return
      }
      this.online = Boolean(window.navigator.onLine)
      window.addEventListener('offline', this._toggleNetworkStatus)
      window.addEventListener('online', this._toggleNetworkStatus)
    },

    methods: {
      _toggleNetworkStatus ({ type }) {
        this.online = type === 'online'
      }
    },

    destroyed () {
      window.removeEventListener('offline', this._toggleNetworkStatus)
      window.removeEventListener('online', this._toggleNetworkStatus)
    }
  }
</script>
