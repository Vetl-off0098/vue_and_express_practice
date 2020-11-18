<template>
    <div class="products goods-list">
        <item v-for="i of filtered" :key="i.id_product" :item="i" />
    </div>
</template>

<script>
import item from './CatalogItem.vue'
export default {
    data() {
        return {
            items: [],
            filtered: [],
            urlGetData: '/api/catalog'
            // urlGetData: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json'
        }
    },
    mounted() {
        this.$parent.getData(this.urlGetData)
            .then(d => {
                this.items = d
                this.filtered = d
            })
    },
    methods: {
        filter(string) {
            let reg = new RegExp(string, 'i')
            this.filtered = this.items.filter(el => reg.test(el.product_name))
        }
    },
    components: {item}
}
</script>