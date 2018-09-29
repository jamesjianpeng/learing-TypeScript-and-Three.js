<template>
    <div>
        <table>
            <tr v-for="(item, index) in list" :key="index">
                <td>{{item.name}}</td>
                <td>{{item.info}}</td>
                <td>{{item.value}}</td>
                <td v-if="item.isEdit">
                    <input v-model="list[index].value" />
                    <!-- <span v-if="item.isEdit">{{ item.value }}</span>
                    <input v-else v-model="list[index].value" /> -->
                </td>
                <td>
                    <span @click="save(index, item)"> 部署 </span>
                    <span @click="list[index].isEdit = !list[index].isEdit">{{ list[index].isEdit ? '保存' : '编辑' }}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    name: 'ListNesting',
    data() {
        return {
            list: [],
            value: '',
        }
    },
    watch: {
        list() {
            console.log(this.list);
        }
    },
    created() {
        this.list = [
            {
                name: 'james',
                info: '吃饭',
                value: 10,
                isEdit: false
            },
            {
                name: 'james',
                info: '睡觉',
                value: 10,
                isEdit: false
            },
            {
                name: 'james',
                info: '阅读',
                value: 10,
                isEdit: false
            },
            {
                name: 'james',
                info: 'coding',
                value: 10,
                isEdit: false
            }
        ];
    },
    methods: {
        save(index, item) {
            console.log(index, item)
        }
    }
}
</script>

<style lang="scss">

</style>
