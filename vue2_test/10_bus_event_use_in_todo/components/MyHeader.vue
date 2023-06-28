<template>
	<div class="todo-header">
		<input type="text" placeholder="please input words" v-model="name" @keyup.enter="add">
	</div>
</template>

<script>
import { nanoid } from "nanoid"
export default {
	name: 'MyHeader',

	data() {
		return {
			name: ''
		}
	},
	methods: {
		add(e) {
			if (!this.name.trim()) return alert('input cannot be empty!')
			const todoObj = { id: nanoid(), name: e.target.value, done: false }
			this.$emit('addTodo', todoObj)
			this.name = ''
		}
	}
}
</script>

<style scoped>
/*header*/
.todo-header input {
	width: 560px;
	height: 28px;
	font-size: 14px;
	border: 1px solid #ccc;
	border-radius: 4px;
	padding: 4px 7px;
}

.todo-header input:focus {
	outline: none;
	border-color: rgba(82, 168, 236, 0.8);
	box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}</style>