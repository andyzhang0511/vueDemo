<template>
    <div>
        <input type="text" v-model="results[0].mark"> 英语得分：{{results[0].mark}}
        <br>
        <br>
        <input type="text" v-model="results[1].mark"> 数学得分：{{results[1].mark}}
        <br>
        <br>
        <input type="text" v-model="results[2].mark"> 历史得分：{{results[2].mark}}
        <br>
        <br>
        <!-- 学科总分:{{results[0].mark+results[1].mark+results[2].mark}} -->
        <!-- 学科总分:{{sum}} -->
        学科总分:{{sum()}}

    </div>
</template>

<script>
export default {
    data () {
        return {
            results: [
                {
                    name: 'English',
                    mark: 70
                },
                {
                    name: 'Math',
                    mark: 80
                },
                {
                    name: 'History',
                    mark: 90
                },
            ]
        }
    },
    // computed: {
    //     sum () {
    //         let total = 0;
    //         for (let i = 0; i < this.results.length; i++) {
    //             total += parseInt(this.results[i].mark)
    //         }
    //         return total
    //     }
    // },
    methods: {
        sum () {
            let total = 0;
            for (let i = 0; i < this.results.length; i++) {
                total += parseInt(this.results[i].mark)
            }
            return total
        }
    }
}
</script>

<style lang="" scoped>
</style>