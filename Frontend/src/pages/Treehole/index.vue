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
  <div class="treehole">
    <TreeholeHead />
    <TreeholeContent />
  </div> 
</template>

<style scoped lang="scss">
.treehole {
    .bg-video{
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        height: 880px;
    }
}
</style>