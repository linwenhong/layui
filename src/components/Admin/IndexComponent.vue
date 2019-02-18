<template>
  <div>
    AdminIndexComponent
  </div>
</template>

<script type="text/ecmascript-6">
import Config from '@/assets/config'
export default {
  name: 'AdminIndexComponent',
  data () {
    return {

    }
  },
  created () {
    console.log(Config)
  },
  mounted () {
    console.log(this.$Service)
    this.$Service.User.get().then(responese => {
      console.log(responese)
    })
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
