<template>
  <div class="AdminIndexComponent">
    AdminIndexComponent
    <div class="dd">
      <ol class="dd-list">
        <li class="dd-item" data-id="1">
          <div class="dd-handle">Item 1</div>
        </li>
        <li class="dd-item" data-id="2">
          <div class="dd-handle">Item 2</div>
        </li>
        <li class="dd-item" data-id="3">
          <div class="dd-handle">Item 3</div>
          <ol class="dd-list">
            <li class="dd-item" data-id="4">
              <div class="dd-handle">Item 4</div>
            </li>
            <li class="dd-item" data-id="5" data-foo="bar">
              <div class="dd-nodrag">Item 5</div>
            </li>
            <li class="dd-item" data-id="6">
              <div class="dd-handle">Item 6</div>
            </li>
            <li class="dd-item" data-id="7">
              <div class="dd-handle">Item 7</div>
            </li>
          </ol>
        </li>
      </ol>
    </div>
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
    $('.dd').nestable()
    console.log(this.$Service)
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
