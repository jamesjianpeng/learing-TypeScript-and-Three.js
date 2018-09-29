<template>
    <div>
            <router-link to="/home">Go to home</router-link>
            <router-link to="/sketchpad">Go to sketchpad</router-link>
            <router-view></router-view>
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend ({
    name: 'LayoutDefault'
})
</script>

<style lang="scss">

</style>
