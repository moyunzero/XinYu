<script setup>
const props = defineProps({
    title: {
        default: '留言墙'
    },
    isModal: {
        default: false
    }
})
const emits = defineEmits(['close'])
const closeModal = () => {
    emits('close')
}

</script>
<template>
    <transition name="modal">
        <div class="i-modal" v-if="isModal">
            <div class="i-modal-head">
                <p class="modal-name">{{ title }}</p>
                <span class="iconfont icon-guanbi" @click="closeModal"></span>
            </div>
            <div class="i-modal-main">
                <slot ></slot>
            </div>
        </div>
    </transition>
</template>


<style lang="scss" scoped>
.modal{
    &-enter{
        &-from{
            transform: translateX(360px);
        }
        &-active{
            transition: all 0.2s easy-out;
        }
        &-to{
            transform: translateX(0px);
        }
    }
    &-leave{
        &-from{
            transform: translateX(0px);
        }
        &-active{
            transition: all 0.2s easy-in;
        }
        &-to{
            transform: translateX(360px);
        }
    }
}
.i-modal {
    width: 360px;
    height: 100%;
    position: fixed;
    right: 0;
    top: 52px;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.80);
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(20px);
    box-sizing: border-box;
    transition: all 0.3s;
    .i-modal-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
        .modal-name {
            font-size: 16px;
            color: #202020;
            font-weight: 600;
        }
        .icon-guanbi {
            color: #5B5B5B;
            cursor: pointer;
            padding-left: 8px;
        }
    }
    .i-modal-main{
        height: 100%;
        overflow-y: auto;
        padding-bottom: 116px;
        box-sizing: border-box;
        overflow-x: auto;
        margin: 2px;
    }
    .i-modal-main::-webkit-scrollbar{
        width: 4px;
        height: 4px;
    }

    .i-modal-main::-webkit-scrollbar-thumb{
        border-radius: 4px;
        background: rgba(0,0,0,0.2);
    }
    .i-modal-main::-webkit-scrollbar-track{
        border-radius: 4px;
        background: rgba(0,0,0,0);
    }
}
</style>