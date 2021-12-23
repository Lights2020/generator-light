<template>
    <div>
        <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" @change="select"/>
        </van-dropdown-menu>
        <Test></Test>

    </div>
</template>

<script>
import { Toast } from "vant";
import { getMethodGetData } from "@/api/api.js"; //api引入方法

import Test from "@/components/test";

export default {
    name: "activity",
    data() {
        return {
            value1: 'theme1',

            option1: [
                {
                    value: "theme1",
                    text: "1",
                },
                {
                    value: "theme2",
                    text: "2",
                },
                {
                    value: "theme3",
                    text: "3",
                },
            ],
        };
    },
    components: {Test},
    created() {},
    mounted() {},
    methods: {
        select(data){
            console.log(data);
              window.document.documentElement.setAttribute(
                "data-theme",
                data
            );
        }
    },
};
</script>

<style scoped>
</style>
