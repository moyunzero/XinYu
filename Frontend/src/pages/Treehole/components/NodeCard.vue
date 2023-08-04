<script setup>
import { label,cardColor } from '@/utils/data'
import { computed  } from 'vue';
import { dateTransform } from '@/utils/methods'
import { insertFeedBackApi } from '@/apis/shudong'
import { useStore } from 'vuex';
const store = useStore()
const emits = defineEmits(['toDetail'])
var props = defineProps({
    width : {
        default : '100%',
    },
    note : {
        default : {}
    }

})
var card = computed(()=>{
    return props.note
})
const toDetail = ()=> {
    emits('toDetail')
}
//点击喜欢
const clickLike = ()=>{
    if(card.value.islike[0].count == 0){
        let data = {
            wallId : card.value.id,
            userId : store.state.user.id,
            type : 0,
            moment : new Date()
        }
        insertFeedBackApi(data).then(res=>{
            //反馈
            card.value.like[0].count++
            card.value.islike[0].count++
        })
    }
}
</script>
<template>
    <div class="i-node-card" :style="{ width : width , background:cardColor[card.color]}">
        <div class="top">
            <p class="time">{{ dateTransform(card.moment) }}</p>
            <p class="label">{{ label[card.type][card.label]}}</p>
        </div>
        <p class="message" @click="toDetail">
            {{ card.message }}
        </p>
        <div class="foot"> 
            <div class="foot-left">
                <div class="icon" @click="clickLike">
                    <span class="iconfont icon-hug" :class="{ 'islike' : card.islike[0].count >= 1}"></span>
                    <span class="value">{{ card.like[0].count }}</span>
                </div>
                <div class="icon" >
                    <span class="iconfont icon-liuyan"></span>
                    <span class="value">{{ card.comcount[0].count }}</span>
                </div>
                
            </div>
            <div class="name">{{ card.name}}</div>
            
        </div>
    </div>
</template>

<style lang="scss" scoped>

.i-node-card{
    height: 240px;
    padding: 10px 20px 16px;
    box-sizing: border-box;
    position: relative;

    .top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;
        p{
            font-size: 12px;
            color: #949494;
        }
    }
    .message{
        height: 140px;
        font-size: 14px;
        color : #202020;
        cursor: pointer;
        overflow: auto;
    }
    .foot{
        display: flex;
        justify-content: space-between;
        position: absolute;
        left: 0;
        bottom: 16px;
        box-sizing: border-box;
        width: 100%;
        padding: 0 20px;
        .foot-left{
            display: flex;
            .value{
                font-size: 12px;
                color : #949494;
                line-height: 16px;
                padding-left:4px
            }
            .iconfont{
                font-size: 16px;
                color: #949494;
            }
            .icon{
                padding-right: 8px;
                display: flex;
                align-items: center;
                .icon-hug{
                    cursor: pointer;
                    transition: all 0.3s;
                    &:hover{
                        color: #F67770;
                    }
                    
                }
                .islike{
                    color: #F67770;
                }
                .icon-liuyan{
                    cursor: pointer;
                    
                }
            }
        }
        .name{
            font-size: 16px;
            color: #202020;
        }
    }
}
</style>