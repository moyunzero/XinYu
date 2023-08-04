<script setup>
import { useStore } from 'vuex';
import { ref, getCurrentInstance } from 'vue';
import {
    cardColor,// 输入卡片背景色
    cardColorBlock, //颜色块
    label //标签
} from '@/utils/data'
import { insertWallApi} from '@/apis/shudong'
import Ibutton from './Ibutton.vue';
// 获取当前组件实例
const { appContext } = getCurrentInstance();
const globalProxy = appContext.config.globalProperties;
const store = useStore()
//图片链接
var url = ref('')
//留言内容
const message = ref('')
//签名
const name = ref('')
//当前选择颜色
const colorSelected = ref(0)
//当前选中标签
const labelSelected = ref(0)
// 切换颜色
const changeColor = (e) => {
    colorSelected.value = e
}
// 切换标签
const changeLabel = (e) => {
    labelSelected.value = e
}
//关闭窗口
const emits = defineEmits(['closeModal', 'clickbt'])
const closeModal = (data) => {
    emits('closeModal', data)
}
const props = defineProps({
    id: {
        default: 0
    }
})
const submit = () => {
    let names = '匿名'
    if (name.value) {
        names = name.value
    }
    let data = {
            type: 0,
            message: message.value,
            name: names,
            moment: new Date(),
            label: labelSelected.value,
            color: 5,
            imgurl: ''
        }
    if (message.value && props.id == 0) {
        data.color = colorSelected.value
        insertWallApi(data).then(res => {
            let cardD = {
                type: 0,
                message: message.value,
                name: names,
                moment: new Date(),
                label: labelSelected.value,
                imgurl: '',
                id : res.message.insertId,
                islike: [{ count: 0 }],
                like: [{ count: 0 }],
                comcount: [{ count: 0 }],
                report: [{ count: 0 }],
                revoke: [{ count: 0 }],
                color: colorSelected.value

            }
            message.value = ''
            emits('clickbt', cardD)
            globalProxy.Modal({ type: 'success', message: '愿你开心' })
        })
    }
}
</script>

<template>
    <div class="new-card">
        <div class="colors">
            <p class="color-item" v-for="(e, index) in cardColorBlock" :key="index" :style="{ background: e }"
                @click="changeColor(index)" :class="{ colorselected: index == colorSelected }"></p>
        </div>
        <!-- 卡片 -->
        <div class="card-main" :style="{ background: id == 0 ? cardColor[colorSelected] : cardColor[5] }">
            <textarea placeholder="留言..." class="message" maxlength="1000" v-model="message"></textarea>
            <input type="text" placeholder="签名" class="name" v-model="name" />
        </div>
        <div class="labels">
            <p class="title">选择标签</p>
            <div class="label" @click="">
                <p v-for="(e, index) in label[0]" :key="index" class="label-item"
                    :class="{ labelselected: index == labelSelected }" @click="changeLabel(index)">{{ e }}</p>
            </div>
        </div>
        <div>
            <p class="title">免责声明</p>
            <p class="mzsm">
                该树洞仅供小伙伴分享、吐露自己的心声，让自己减少压力~
                请不要在这里发布传播一些不友好的话~
                希望大家都能尊重每一个人的生活~
                谢谢各位！！！！
            </p>
        </div>
        <div class="btn1">
            <Ibutton size="max" active="secondary" @click="closeModal">丢弃</Ibutton>
            <Ibutton size="max" class="sbumit" @click="submit">确定</Ibutton>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.new-card {
    padding: 0 20px 120px;
    position: relative;
    .colors {
        display: flex;
        align-items: center;
        padding-bottom: 12px;
        .color-item {
            width: 24px;
            height: 24px;
            margin-right: 8px;
            border: 1px solid transparent;
            cursor: pointer;
        }

        .colorselected {
            border: 1px solid #3B73F0;
        }
    }

    .card-main {
        position: relative;
        height: 240px;
        width: 100%;
        background: rgba(252, 175, 162, 0.31);
        padding: 12px;
        box-sizing: border-box;
        transition: all 0.3s;
        .message {
            background: none;
            border: none;
            // resize: none;
            height: 172px;
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            font-size: 15px;
            overflow: auto;
        }

        .name {
            width: 100%;
            line-height: 20px;
            box-sizing: border-box;
            padding: 8px;
            background: none;
            border: 1px solid #fff;
            font-size: 15px;
        }
    }

    .title {
        color: #202020;
        font-weight: 600;
        padding-top: 30px;
    }

    .label {
        display: flex;
        flex-wrap: wrap;
        width: 320px;
        cursor: pointer;

        .label-item {
            padding: 2px 10px;
            border-radius: 20px;
            margin: 16px4px 0 0;
            color: #5B5B5B ;
            transition: all 0.3s;
        }

        .labelselected {
            background: #EBEBEB;
            font-weight: 600;
            color: #202020 ;
        }
    }

    .mzsm {
        padding-top: 10px;
        font-size: 12px;
        color: #949494;

    }

    .btn1 {
        position: fixed;
        display: flex;
        padding: 20px ;
        box-sizing: border-box;
        bottom: 52px;
        left: 0;
        background: rgba(255, 255, 255, 0.4);
        width: 100%;
        backdrop-filter: blur(10px);

        .sbumit {
            margin-left: 20px;
            width: 200px;

        }
    }

}
</style>