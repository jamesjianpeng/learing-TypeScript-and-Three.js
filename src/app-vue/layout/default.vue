<template>
    <div>
            <router-link to="/home">Go to home</router-link>
            <router-link to="/sketchpad">Go to sketchpad</router-link>
            <router-link to="/list-nesting">Go to sketchpad</router-link>
            <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'LayoutDefault'
}
</script>

<style lang="scss">

</style>


