<script setup>
import TreeholeHead from './components/TreeholeHead.vue';
import TreeholeContent from './components/TreeholeContent.vue';
import { signIpApi } from '@/apis/shudong';
import { useStore } from 'vuex';
import { onMounted } from 'vue'

const store = useStore()
const getUser = () => {
    signIpApi().then(res=>{
        let user = {
            id : res.ip
        }
        store.commit('getUser',user)
    })
}

onMounted(()=>{
    getUser()
})
</script>

<template>
    <TreeholeHead />
    <TreeholeContent />
</template>

<style scoped lang="scss">

</style>