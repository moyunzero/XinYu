<script setup>
import { ref,onMounted,onUnmounted,computed,watch,nextTick  } from 'vue'
import { useStore } from 'vuex'
import { label,none } from '@/utils/data'
import NodeCard from './NodeCard.vue'
import IModal from './IModal.vue'
import NewCard from './NewCard.vue'
import CardDetail from './CardDetail.vue'
import lottie from 'lottie-web'
import loadings from '@/assets/loading.json'
import { findWallPageApi } from '@/apis/shudong'
const store = useStore()

onMounted(()=>{
    //监听屏幕宽度变化
    window.addEventListener('resize',noteWidth)
    //监听滚动
    window.addEventListener('scroll',scrollBottom)
    noteWidth()
    //将图片地址加入到图片数组
    loading()
    getUser()
}

)
onUnmounted(()=>{
    window.removeEventListener('resize',noteWidth)
    window.removeEventListener('scroll',scrollBottom)
}
)

const pagesize = ref(20)
const page = ref(1)
//是否加载中 -1,为加载中，0为没有拿到数据
const isOk = ref(-1)
//卡片数据
const cards = ref([])
// 选中标签
const nowlabel = ref(-1)

//弹出层标题
const title = ref('写留言')
//弹出层是否关闭
const isModal = ref(false)
//add按钮距离底部高度
const addBottom = ref(30) 
//当前选择卡片
const cardSelected = ref(-1)
// 切换方法
const selectNode = (e) => {
    // 切换标签
    nowlabel.value = e
    cards.value = []
    page.value = 1

    getWallCard(0)
}
//note的宽度
const nowWidth = ref(0) //卡片模块宽度
const noteWidth = () => {
    let wWidth = document.body.clientWidth //获取页面宽度
    nowWidth.value = Math.floor((wWidth-120)/300) * 300
}
let isAct = false
//监听页面滚动
const scrollBottom = async () => {
    //距离顶部高度
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    //屏幕高度
    let clientHeight = document.documentElement.clientHeight
    //内容高度
    let scrollHeight = document.documentElement.scrollHeight
    if( scrollTop + clientHeight + 220 >= scrollHeight){
        addBottom.value = scrollTop + clientHeight + 230 - scrollHeight
    }else{
        addBottom.value = 30
    }
    //加载更多
    if (Math.ceil(scrollTop) + clientHeight >= scrollHeight - 20 && !isAct){
        getWallCard(0)
    }
}
//改变弹出层状态
const closeModal = () => {
    cardSelected.value = -1
    isModal.value = false
    if(ids.value == 1){
            view.value = false
        }
}
//新建Card
const addCard = () => {
    title.value = '写留言'
    isModal.value = true
}
const selectCard = (e) => {
    title.value = ''
    if (e != cardSelected.value){
        cardSelected.value = e
        isModal.value = true
        if(ids.value == 1){
            view.value = true
        }
        return
    }
    cardSelected.value = -1
    isModal.value = false
    if(ids.value == 1){
        view.value = false
    }
}
//照片墙与留言墙的切换ID
var ids = ref(0)
//监视ID的变化
watch(ids,(newValue,oldValue)=>{
    page.value = 1
    isModal.value = false
    view.value = false
    nowlabel.value = -1
    cardSelected.value = -1
    cards.value = []
    getWallCard(newValue)
})
//用户IP
var user = computed(()=>{
    return store.state.user})
//切换图片
const viewSwitch = (e) => {
    if( e == 0){
        cardSelected.value -= 1
        return
    }
    cardSelected.value += 1
}
const newCard = (data) =>{
    cards.value.unshift(data)
    if(data.type == 1){
        photoArr.value.unshift(data.imgurl)
    }
    
    isOk.value =1
    closeModal()
}
//加载动画
var loading = () => {
    if(isOk.value = -1){
        nextTick(async () =>{
            var params1 = {
                container : document.getElementById('lottile'),
                renderer : 'svg',
                loop : true,
                autoplay : true,
                animationData : loadings,

            }
            lottie.loadAnimation(params1)
        })
    }
}
const getWallCard = (id) => {
    //只有page>0才执行
    isAct = true
    if (page.value > 0){
        isOk.value = -1
        let data = {
            type : id,
            page : page.value,
            pagesize: pagesize.value,
            // userId : user.value.id,
            label : nowlabel.value
        }
        findWallPageApi(data).then(res => {
            cards.value = cards.value.concat(res.message)
            // 设置下一次的page
            if(res.message.length){
                page.value++
            }else{
                page.value = 0
            }
            if( cards.value.length > 0){
                    isOk.value = 1
                    if(page.value ==0){
                        isOk.value = 2 
                    }
                }else{
                    isOk.value = 0

                }
            isAct = false
        })
    }
}
const getUser = () => {
    let timer = setInterval(()=>{
        if(store.state.user){
            clearInterval(timer)
            getWallCard(0)
        }
    },10)
}
const toDetail = () =>{
    selectCard()
}
</script>

<template>
    <div class="wall-message">
        <div class="label">
            <p class="label-list " :class="{lbselected : nowlabel == -1}" @click="selectNode(-1)">全部</p>
            <p class="label-list" :class="{lbselected : nowlabel == index}" v-for="(e,index) in label[0]" :key="index"
            @click="selectNode(index)"
            >
            {{ e }}
            </p>
        </div>
        <div class="card"  v-show="true">
            <NodeCard :width='"19vw"' class="card-inner" :class="{ cardselected : index == cardSelected}"  @toDetail="selectCard(index)" :note="e" v-for="(e,index) in cards" :key="index"></NodeCard>
        </div>
        <div class="add" :style="{bottom : addBottom + 'px'}" @click="addCard" v-show="!isModal">
            <span class="iconfont icon-jia" ></span>
        </div>
        <!-- 卡片状态 -->
        <div class="none-msg" v-if="isOk == 0">
            <img :src="none[0].url" >
            <p>{{ none[0].msg }}</p>

        </div>
        <div class="loading" v-show="isOk == -1">
            <div id="lottile">
            </div>
            <p>加载中....</p>
        
        </div>
        <p class="bottom-tip" v-show="isOk == 2">
            没有更多....
        </p>
        <IModal :title="title" @close="closeModal" :isModal="isModal">
            <NewCard @clickbt="newCard" :id="0"   @closeModal="closeModal" v-if="cardSelected == -1"></NewCard>
            <CardDetail :card="cards[cardSelected]" v-else></CardDetail>
        </IModal>
    </div>
    
</template>

<style lang="scss" scoped>
.wall-message{
    min-height: 700px;
    width: 80vw;
    margin: 0 auto;
    .label{
        margin-top: 40px;
        display: flex;
        justify-content: center;
        .label-list{
            padding: 0 14px;
            height: 28px;
            display: flex;
            align-items: center;
            margin:4px;
            color: #5B5B5B;
            box-sizing: border-box;
            border: 1px solid transparent;
            cursor: pointer;
        }
        .lbselected{
            color: #202020;
            font-weight: 600;
            border: 1px solid #202020;
            border-radius: 14px;
        }
    }
    .card{
        display: flex;
        flex-wrap: wrap;
        padding-top: 28px;
        justify-content:stretch;
        .card-inner{
            margin: 6px;
            border: 1px solid transparent;
            transition: all 0.3s;
            &:hover{
                scale: 1.05;
            }
        }
        .cardselected{
            border: 1px solid #3B73F0;
        }
    }
    .add{
        width: 56px;
        height: 56px;
        // background: #202020;
        box-shadow: 0px 4px 8px 0px rgba(0,0,0,0.08);
        border-radius: 28px;
        position: fixed;
        right: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s;
        z-index: 10000;
        .icon-jia{
            // color: #202020;
            font-size: 56px;
        }
    }
    .none-msg{
        width: 100%;
        text-align: center;
        padding-top: 80px;
        position: absolute;
        top: 280px;
        img{
            display: inline;
        }
        p{
            font-weight: 700;
            font-size: 24px;
            color: #949494;
        }
    }
    .loading{
        text-align: center;
        width: 100%;
        p{
            margin-top: 72px;
            font-size: 24px;
            color: #949494;
        }
    }
    #lottile{
        margin-top: 20px;
        height: 150px;
        background-color: transparent;
    }
    .bottom-tip{
        text-align: center;
        color: #949494;
        padding: 20px;
        
    }
}

</style>