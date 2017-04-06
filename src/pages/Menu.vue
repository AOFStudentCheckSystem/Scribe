<template>
    <div class="">
        <Row :gutter="10">

        </Row>
    </div>
</template>
<style scoped>
    .menu {
        margin: 1em;
    }

</style>
<script>
    import MenuCard from '@/components/Menu/MenuCard.vue'
    export default {
        name: 'Menu',
        components: {
            MenuCard
        }
    }
</script>
