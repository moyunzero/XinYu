<script setup>

</script>

<template>
  <div class="card">
    <div class="top">
        <!-- <p class="time">{{ dateTransform(card.moment) }}</p> -->
        <p class="time">2022</p>
        <p class="label">树洞</p>
    </div>
    <p class="message" @click="toDetail">
        <!-- {{ card.message }} -->
        aaaa
    </p>
    <div class="foot"> 
        <div class="foot-left">
            <div class="icon" @click="clickLike">
                <!-- <span class="iconfont icon-hug" :class="{ 'islike' : card.islike[0].count >= 1}"></span> -->
                <span class="iconfont icon-hug"></span>
                <!-- <span class="value">{{ card.like[0].count }}</span> -->
                <span class="value">11</span>
            </div>
            <div class="icon" >
                <span class="iconfont icon-liuyan"></span>
                <!-- <span class="value">{{ card.comcount[0].count }}</span> -->
                <span class="value">3</span>
            </div>  
        </div>
        <!-- <div class="name">{{ card.name}}</div> -->
        <div class="name">寡人</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card{
  width: 10vw;
    height: 240px;
    padding: 10px 20px 16px;
    box-sizing: border-box;
    position: relative;
    .top{
        display: flex;
        justify-content: space-between;
        padding-bottom: 16px;
        p{
            font-size:12px;
            color: #949494;
        }
    }
    .message{
        height: 140px;
        font-size: 14px;
        color : #202020;
        cursor: pointer;
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
                font-size:12px;
                color : #949494;
                line-height: 16px;
                padding-left: 4px;
            }
            .iconfont{
                font-size: 16px;
                // color: #949494;
            }
            .icon{
                padding-right: 8px;
                display: flex;
                align-items: center;
                .icon-hug{
                    cursor: pointer;
                    transition: all 0.3s;;
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