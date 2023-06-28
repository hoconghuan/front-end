<template>
  <div>
    <h2>hello,{{ MSG }}</h2>
    <!-- <School @getSchoolName='getSchoolName'></School> -->
    <School ref='school'></School>
    <!--
       除了用@自定义外还可以用  ref 
       <School ref='getSchoolName'></School>

       在JS中 mount:
       this.$ref.student.$on('getSchoolName',this.getSchoolName)
    -->
    <br><br><br><br>
    <Student :getStudentName='getStudentName'></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
  name: 'App',
  components: {
    Student,
    School
  },
  data() {
    return {
      MSG: 'WORLD'
    }
  },
  methods: {
    getStudentName(name) { //如果想要得到参数，一定要传参。如果想要得到参数，一定要传参。如果想要得到参数，一定要传参。
      console.log('studentName:', name);
    },
    getSchoolName(name) {
      console.log('getSchoolName', name);
      this.SchoolName = name;
    },
    mounted() {
      this.$refs.school.$on('schoolName', this.getSchoolName)
    },
  }
}
</script>

<style></style>