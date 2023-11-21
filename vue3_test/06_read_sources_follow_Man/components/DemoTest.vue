<template>
    <p>{{ timer }}</p>
    <p>{{ address }}</p>
    <button @click="timer++"> change timer</button>
    <button @click="address += '!'"> change address</button><br>
    <h2>
        person's information
    </h2>
    <p>{{ person.name }}</p>
    <p>{{ person.age }}</p>
    <p>{{ person.jobs.first.salary }}K</p>
    <button @click="person.name += '!'"> change person>increase name</button>
    <button @click="person.age++">increase age</button>
    <button @click="person.jobs.first.salary++">increase person's salary</button>
</template>

<script>
import { ref, reactive, watch } from "vue";
export default {
    name: 'DemoTest',

    setup() {
        let timer = ref(12)
        let address = ref('wenjiang')
        let person = reactive({
            name: 'andy',
            age: 18,
            jobs: {
                first: {
                    salary: 20
                }
            }
        });

        // 只监听ref中基本类型的一种
        // watch(timer, (newValue, oldValue) => {
        //     console.log(`'I got ${timer.value} changed'`, newValue, oldValue);
        // })

        // 监听ref中基本类型的多种数据
        // watch([timer, address], (newValue, oldValue) => {
        //     console.log(`'I got changed'`, newValue, oldValue);
        // })

        //1、 监听reactive复杂类型中的全部
        watch(person, (newValue, oldValue) => {
            console.log(`'I got changed'`, newValue, oldValue);
        })

        //2、 监听reactive复杂类型中的某个属性, 不是直接person.props， 而是函数的返回值
        // watch(() => person.age, (newValue, oldValue) => {
        //     console.log(`'I got changed'`, newValue, oldValue);
        // })

        // 3、 监听reactive复杂类型中的某些属性, 这些属性是放在数组中的
        // watch([() => person.age, () => person.name], (newValue, oldValue) => {
        //     console.log(`'I got changed'`, newValue, oldValue);
        // })

        // 4、特殊 监听reactive复杂类型中的深度属性，只有属性是对象才能开启深度监视
        // watch(() => person.jobs, (newValue, oldValue) => {
        //     console.log(`'I got changed'`, newValue, oldValue);
        // }, { deep: true })





        return {
            timer,
            address,
            person
        }

    }
}
</script>

<style></style>