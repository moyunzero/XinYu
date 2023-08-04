<script setup>
import NodeCard from './NodeCard.vue';
import Ibutton from './Ibutton.vue';
import { portrait } from '@/utils/data'
import { dateTransform } from '@/utils/methods'
import { computed,ref,onMounted,watch,getCurrentInstance } from 'vue';
import { useStore } from 'vuex';
import { insertCommentApi,findCommentPage } from '@/apis/shudong'
const store = useStore()
const props = defineProps({
    card: {
        default: {}
    }
})
onMounted(()=>{
    getComment()
})
//当前页
const page = ref(1)
//一页多少
const pagesize = ref(3)
//按钮是否可点击
var isDis = true
//评论内容
const discuss = ref('')
//签名
const name = ref('')
var cards = computed(()=>{
    return props.card
})
watch(()=>props.card,()=>{
    page.value =1
    comment.value = []
    getComment()
})
const comment = ref([])
isDis = computed(()=>{
    if(discuss.value && name.value){
        return true
    }else{
        return false
    }
})
const submit = () =>{
    if(isDis.value){
        //有用户就用头像，没有就随机头像
        let img = Math.floor(Math.random() * 14)
        let data = {
            wallId : cards.value.id,
            userId : store.state.user.id,
            imgurl : img,
            moment : new Date(),
            comment : discuss.value,
            name : name.value,
            
        }
        insertCommentApi(data).then(res=>{
            comment.value.unshift(data)
            cards.value.comcount[0].count++
            discuss.value = ''
        })
    }
}

//获取评论
const getComment = () => {
    if(page.value > 0){
        let data = {
            id : cards.value.id,
            page : page.value,
            pagesize : pagesize.value
        }
        findCommentPage(data).then(res => {
            comment.value = comment.value.concat(res.message)
            if(res.message.length == pagesize.value){
                page.value++
            }else{ page.value = 0 }
        })
    }
}
</script>

<template>
    <div class="card-detail">
        <NodeCard :note="cards"></NodeCard>
        <div class="form">
            <textarea class="message" placeholder="请输入留言" v-model="discuss"></textarea>
            <div class="bt">
                <input type="text" class="name" placeholder="签名" v-model="name" >
                <Ibutton :class="{notallowed : !isDis}" @click="submit">确定</Ibutton>
            </div>
        </div>
        <p class="title">评论{{ cards.comcount[0].count }}</p>
        <div class="comment">
            <div class="comment-item" v-for="(e,index) in comment" :key="index">
                <div class="user-head" :style="{ backgroundImage :portrait[e.imgurl] }"></div>
                <div class="comment-content">
                    <div class="comment-top">
                        <p class="name">{{ e.name }}</p>
                        <p class="time">{{ dateTransform(e.moment)}}</p>
                    </div>
                    <div class="comment-message">{{e.comment}}</div>
                </div>
            </div>
            <p class="more" @click="getComment" v-show="page > 0">加载更多</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-detail {
    position: relative;
    padding: 0 20px ;
    .form {
        .message {
            background: none;
            height: 56px;
            border: 1px solid rgba(148, 148, 148, 1);
            resize: none;
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            margin-top: 12px;
            overflow: auto;
        }

        .bt {
            display: flex;
            padding-top: 6px;
            justify-content: space-between;

            .name {
                width: 200px;
                line-height: 20px;
                box-sizing: border-box;
                padding: 8px;
                background: none;
                border: 1px solid rgba(148, 148, 148, 1);
            }
        }
    }
    .more{
        color: #5B5B5B;
        text-align: center;
        cursor: pointer;
        padding: 20px;
    }
    .title {
        font-weight: 600;
        padding-top: 30px;
        padding-bottom: 20px;
    }
    .comment-item{
        display: flex;
        padding-bottom: 30px;
        .user-head{
            flex : none;
            width: 28px;
            height: 28px;
            border-radius: 20px;
            background-image: linear-gradient(180deg,#FFA9D9 0%,#E83D3D 100%);
            overflow: hidden;
        }
        .comment-content{
            padding-left: 8px;

        }
        .comment-top{
            display: flex;
            align-items: center;
            .name{
                font-weight: 600;

            }
            .time{
                font-size: 12px;
                padding-left:4px;
                color: #949494;
            }
            .comment-message{
                padding-top:4px;

            }
        }
    }
}
.notallowed{
    opacity: 0.6;
    cursor: not-allowed;
}
</style>