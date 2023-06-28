<template>
    <h1>一个人的信息</h1>
    姓：<input type="text" v-model="person.firstname"><br>
    名：<input type="text" v-model="person.lastname"><br>
    全名:{{ person.fullName }} <br>
    全名：<input type="text" v-model="person.fullName"> <br>
</template>

<script>
import { reactive, computed } from "vue";
export default {
    name: 'DemoTest',

    setup() {
        let person = reactive({
            firstname: '张',
            lastname: '三'
        });

        // 计算属性简写
        // let fullName = computed(() => {
        //     return person.firstname + ' ' + person.lastname
        // })

        // 计算属性完整写法
        person.fullName = computed({
            get() {
                return person.firstname + '-' + person.lastname
            },
            set(value) {
                let nameArr = value.split('-')
                person.firstname = nameArr[0]
                person.lastname = nameArr[1]
            }
        })



        return {
            person
        }

    }
}
</script>

<style></style>