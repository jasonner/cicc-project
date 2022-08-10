<template>
    <div class="index-page">
        <div class="header-box">
            <div class="header-content">
                <img src="@/assets/img/index/contet-text.png" alt="">
            </div>
        </div>

        <div class="content-box">
            <!-- 宣传短片 -->
            <div class="video-box">
                <div class="title">
                    <img src="@/assets/img/index/vedioTitle.png" alt="">
                </div>
                <div>
                    <img v-if="!CountdownShow" src="@/assets/img/index/vedioPost.png" controls="controls" alt="">
                    <video v-if="CountdownShow" src="https://forhoo.oss-cn-beijing.aliyuncs.com/2021/cicc/vedio.mp4" poster="@/assets/img/index/postNew.jpg" controls="controls"  controlsList="nodownload  noplaybackrate" :disablePictureInPicture ="true" >your browser does not support the video tag</video>
                </div>
            </div>

            <!-- 活动议程 -->
            <div class="program-outline-box">
                <div class="title">
                    <img src="@/assets/img/index/activeTime-title.png" alt="" srcset="">
                </div>
                <div class="program-outline-content">
                    <div class="start-time">2021&nbsp;·&nbsp;12&nbsp;·&nbsp;08</div>
                    <div class="accordion-box PCshow" >
                        <div class="time-content-list">
                            <div class="content-text">
                                <div class="list-pc-left"><span>13:30 - 13:35</span></div>
                                <div class="list-pc-right"><span>领导致辞</span>隋静&nbsp;&nbsp;工业和信息化部网络安全管理局局长</div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>13:35 - 13:40</span></div>
                                <div class="list-pc-right"><span>领导致辞</span>蒋艳&nbsp;&nbsp;国家工业信息安全发展研究中心党委书记、副主任</div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>13:40 - 14:00</span></div>
                                <div class="list-pc-right"> <span>发布《中国工业信息安全产业发展白皮书（2020-2021年）》</span>
                                <div class="text-p">郝志强&nbsp;&nbsp;工业信息安全产业发展联盟秘书长、国家工业信息安全发展研究中心副主任</div></div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>14:00 - 14:10</span></div>
                                <div class="list-pc-right"><span>工业信息安全领域系列签约</span>国家工业信息安全发展研究中心代表及各签约单位代表</div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>14:10 - 14:25</span></div>
                                <div class="list-pc-right"><span>发布《2020年工业自动化系统威胁分析报告》</span>张涛&nbsp;&nbsp;卡巴斯基高级技术经理</div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>14:25 - 14:40</span></div>
                                <div class="list-pc-right">
                                    <span>国家能源集团工业互联网及关键信息基础设施安全防护经验分享</span>
                                    <div class="text-p">韩鹏军&nbsp;&nbsp;国家能源集团国能信息技术有限公司网安中心总经理</div>
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>14:40 - 14:55</span></div>
                                <div class="list-pc-right">
                                    <span>工业控制系统双安融合研究与实践</span>唐宁&nbsp;&nbsp;天融信科技集团副总裁
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>14:55 - 15:10</span></div>
                                <div class="list-pc-right">
                                    <span>关保时代的工控安全技术趋势探讨</span>黄敏&nbsp;&nbsp;北京威努特技术有限公司首席技术官
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left">
                                    <span>15:10 - 15:25</span>
                                </div>
                                <div class="list-pc-right">
                                    <span>AI驱动的工业互联网安全</span>李江力&nbsp;&nbsp;北京六方云信息技术有限公司总裁
                                </div>
                               
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>15:25 - 15:40</span></div>
                                <div class="list-pc-right">
                                    <span>工业互联网安全建设实践</span>霍艳霞&nbsp;&nbsp;北京珞安科技有限责任公司副总裁
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>15:40 - 15:55</span></div>
                                <div class="list-pc-right">
                                    <span>"双平台一中心" 安全体系，驱动工业互联网安全经营</span> 
                                    <div class="text-p">王弢&nbsp;&nbsp;奇安信集团工业互联网首席安全专家</div>
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left"><span>15:55 - 16:05</span></div>
                                <div class="list-pc-right">
                                    <span>发布《工业网络靶场平台综合测试评价报告》</span>
                                    <div class="text-p">
                                        孙军&nbsp;&nbsp;国家工业信息安全发展研究中心检查评估所副所长
                                    </div>
                                </div>
                                
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left">
                                    <span>16:05 - 16:15</span>
                                </div>
                                <div class="list-pc-right">
                                    <span>发布《工业互联网流量安全分析白皮书》</span>
                                    <div class="text-p">王冲华&nbsp;&nbsp;博士，国家工业信息安全发展研究中心工业互联网安全部负责人</div>
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list-pc-left">
                                    <span>16:15 - 16:30</span>
                                </div>
                                <div class="list-pc-right">
                                    <span>工业信息安全产业发展联盟年度系列表彰</span>颁奖嘉宾获奖单位代表
                                </div>
                              
                            </div>
                        </div>
                    </div>

                    <div class="accordion-box h5Show" >
                        <div class="time-content-list">
                            <div class="content-text">
                                <div class="list">
                                    <span class="time">13:30 - 13:35</span>
                                </div>
                                <div class="list">
                                    <span>领导致辞</span>&nbsp;&nbsp;&nbsp;&nbsp;隋静&nbsp;&nbsp;工业和信息化部网络安全管理局局长
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list"><span  class="time">13:35 - 13:40</span></div>
                                <div class="list">
                                    <span>领导致辞</span>&nbsp;&nbsp;&nbsp;&nbsp;蒋艳&nbsp;&nbsp;国家工业信息安全发展研究中心党委书记、副主任
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span class="time">13:40 - 14:00</span>
                                </div>
                                <div class="list">
                                    <span>发布《中国工业信息安全产业发展</span>
                                   <span>白皮书(2020-2021)》</span>&nbsp;&nbsp;郝志强&nbsp;&nbsp;工业信息安全产业发展联盟秘书长、国家工业信息安全发展研究中心副主任
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span  class="time">14:00 - 14:10</span>
                                </div>
                                <div class="list">
                                    <span>工业信息安全领域系列签约</span>&nbsp;&nbsp;&nbsp;&nbsp;国家工业信息安全发展研究中心代表及各签约单位代表
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span  class="time">14:10 - 14:25</span>
                                </div>
                                <div class="list">
                                    <span>发布《2020年工业自动化系统威胁分析报告》</span>&nbsp;&nbsp;张涛&nbsp;&nbsp;卡巴斯基高级技术经理
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span  class="time">14:25 - 14:40</span>
                                </div>
                                <div class="list">
                                    <span>国家能源集团工业互联网及关键信息</span>
                                    <span>基础设施安全防护经验分享</span>&nbsp;&nbsp;&nbsp;&nbsp;韩鹏军&nbsp;&nbsp;国家能源集团国能信息技术有限公司网安中心总经理
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span  class="time">14:40-14:55</span>
                                </div>
                                <div class="list">
                                    <span>工业控制系统双安融合研究与实践</span>&nbsp;&nbsp;&nbsp;&nbsp;唐宁&nbsp;&nbsp;天融信科技集团副总裁
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span  class="time">14:55 - 15:10</span>
                                </div>
                                <div class="list">
                                    <span>关保时代的工控安全技术趋势探讨</span>&nbsp;&nbsp;&nbsp;&nbsp;黄敏&nbsp;&nbsp;北京威努特技术有限公司首席技术官
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span  class="time">15:10 - 15:25</span>
                                </div>
                                <div class="list">
                                    <span>AI驱动的工业互联网安全</span>&nbsp;&nbsp;&nbsp;&nbsp;李江力&nbsp;&nbsp;北京六方云信息技术有限公司总裁
                                </div>
                                
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span  class="time">15:25 - 15:40</span>
                                </div>
                                <div class="list">
                                    <span>工业互联网安全建设实践</span>&nbsp;&nbsp;&nbsp;&nbsp;霍艳霞&nbsp;&nbsp;北京珞安科技有限责任公司副总裁
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list"><span  class="time">15:40 - 15:55</span></div>
                                <div class="list">
                                    <span>“双平台一中心”安全体系，驱动工业</span><span>互联网安全经营</span>&nbsp;&nbsp;&nbsp;&nbsp;王弢&nbsp;&nbsp;奇安信集团工业互联网首席安全专家
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list">
                                    <span  class="time">15:55 - 16:05</span>
                                </div>
                                <div class="list">
                                    <span>发布《工业网络靶场平台综合测试评价报告》</span>&nbsp;&nbsp;&nbsp;&nbsp;孙军&nbsp;&nbsp;国家工业信息安全发展研究中心检查评估所副所长
                                </div>
                            </div>
                            <div class="content-text">
                                <div class="list"><span  class="time">16:05 - 16:15</span></div>
                                <div class="list">
                                    <span>发布《工业互联网流量安全分析白皮</span><span>书》</span>王冲华&nbsp;&nbsp;博士，国家工业信息安全发展研究中心工业互联网安全部负责人
                                </div>
                            </div>
                            <div class="content-text morning-text">
                                <div class="list"><span  class="time">16:15 - 16:30</span></div>
                                <div class="list">
                                    <span>工业信息安全产业发展联盟年度系列表彰</span>&nbsp;&nbsp;&nbsp;&nbsp;颁奖嘉宾获奖单位代表
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 轮播图 -->
            <div class="swiper-box">
                <el-carousel width="60%" height="40vh" arrow='always' :interval="3000"  class="container">
                    <el-carousel-item>
                        <a href="https://www.qianxin.com/" target="_blank"><img src="@/assets/img/index/banner/1.jpg" alt="" srcset=""></a>
                    </el-carousel-item>
                    <el-carousel-item>
                        <a href="http://www.topsec.com.cn/" target="_blank"><img src="@/assets/img/index/banner/2.jpg" alt="" srcset=""></a>
                    </el-carousel-item>
                    <el-carousel-item>
                        <a href="https://www.6cloudtech.com/" target="_blank" ><img src="@/assets/img/index/banner/3.jpg" alt="" srcset=""></a>
                    </el-carousel-item>
                    <el-carousel-item>
                        <a href="http://www.winicssec.com/" target="_blank"><img src="@/assets/img/index/banner/4.jpg" alt="" srcset=""></a>
                    </el-carousel-item>
                    <el-carousel-item>
                        <a href="http://www.icssla.com/" target="_blank"> <img src="@/assets/img/index/banner/5.jpg" alt="" srcset=""></a>
                    </el-carousel-item>
                </el-carousel> 
            </div>

           <!-- 底部 -->
           <div class="footer-box">
               <img src="@/assets/img/index/footer-banner.png" alt="" srcset="">
           </div>
        </div>
        <div class="footer-box-H5">
            <div class="list">
                <img src="@/assets/img/index/footer-text.png" alt="" srcset="">
            </div>
            <div class="list">
                <img src="@/assets/img/index/Q1.png" alt="" srcset="">
            </div>
            <div class="list">
                <img style="width:50%" src="@/assets/img/index/Q2.png" alt="" srcset="">
            </div>
        </div>
        <!-- 浮窗 -->
        <!-- <a href="https://h5.lehuitech.com/html/21/10/1012cice/" target="_blank">
            <img class="Floating-window" src="@/assets/img/index/Floating-window.png" alt="" srcset="">
        </a> -->
    </div>
</template>
<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
export default {
    data(){
        return{
            videoActive:false,
            activeName: '1',
            CountdownShow:false
        }
    },
    components: {
        videoPlayer
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll);
        this.timeDown2('2021/12/08 16:30');
    },
    methods:{
        handleScroll(){
            this.scroll = document.documentElement.scrollTop||document.body.scrollTop
            if(this.scroll>1120){
                this.videoActive = true;
            }else{
                this.videoActive = false;
            }
        },
        //倒计时
        timeDown2(endDateStr) {
            //结束时间
            var that=this
             var endDate = new Date(endDateStr);
            //当前时间
            var nowDate = new Date();
            //相差的总秒数
            var totalSeconds = parseInt((endDate - nowDate) / 1000);
            if(totalSeconds<=0){
                that.CountdownShow=true;
                return
            }else{
                //延迟一秒执行自己
                  setTimeout(function () {
                      that.timeDown2(endDateStr);
                  }, 1000)
            }
        },
    },
    destroyed(){
        window.removeEventListener('scroll',this.handleScroll);
    }

}
</script>
<style>
    .index-page{
        width: 100%;
        height: 100%;
        background: #f2f8ff;
    }
    .index-page .header-box{
        height:100%;
        width: 100%;
        background: url('../assets/img/index/bg1.png') center no-repeat;
        background-size: 100% 100%;
    }
    .index-page .header-content{
        text-align: center;
    }
    .index-page .header-content img{
        width: 80%;
        margin-top: 90px;
    }
    .index-page .content-box{
        width: 100%;
        background: url('../assets/img/index/content-bg.png') center no-repeat;
        background-size: 100% 100%;
        /* padding-bottom: 10vw; */
        box-sizing: border-box;
    }
    /* 宣传短片 */
    .index-page .video-box{
        width: 60%;
        margin:0 auto;
    }
    .index-page .video-box img{
        width: 100%;
        margin:0 auto;
    }
    .index-page .video-box video{
        width: 100%;
    }
    .index-page .video-box  video::-internal-media-controls-download-button {
        display:none;
    }
    .index-page .video-box video::-webkit-media-controls-enclosure {
        overflow:hidden;
    }
    .index-page .video-box video::-webkit-media-controls-panel {
        width: calc(100% + 30px); 
    }
    .index-page .video-box .title img{
        width: 50%;
    }
   .index-page .video-box .video-player{
        width: 100%;
        background: #ebf4f3;
    }
   .index-page .video-box .video-js.vjs-fluid, .video-js.vjs-16-9, .video-js.vjs-4-3{
        background: #ebf4f3;
    }
    .index-page .video-box .video-js .vjs-big-play-button{
        background: url('../assets/img/index/button.png') center no-repeat;
        background-size: 100% 100%; 
        width: 92px;
        height: 92px;
        border-radius: 100%;
        left: 48%;
        top: 45%;
        font-size: 0rem;
        line-height: 5rem;
    }
    .index-page .videoActive{
         position: relative;
    }
    .index-page .videoActive .video-player{
        position: fixed;
        width: 18%;
        left: 1rem;
        top: 14rem;
    }
    .index-page .video-box .vjs-button > .vjs-icon-placeholder:before {
        font-size: 18pt;
        line-height: 1;
    }
    .index-page .video-box  .video-js .vjs-time-control{
        font-size: 12pt;
        line-height: 1.5;
    }
     .index-page .video-box .video-js .vjs-play-progress:before{
        font-size: 12pt;
        line-height: 1.5;
        position: absolute;
        right: -0.5em;
        top: -0.633333em;
        z-index: 1;
    }   
    .index-page .video-box .video-js .vjs-volume-level:before{
        font-size: 12pt;
    }
    /* 活动议程 */
    .index-page  .program-outline-box{
        width: 100%;
        margin: 0 auto;
    }
    .index-page  .program-outline-content{
        width: 60%;
        margin: 0 auto;
        border: 0.3em solid #30ffff;
        
    }
    .index-page .PCshow .content-text{
        width: 100%;
        display: flex;
        margin-top: 1vw;
    }
    .index-page .PCshow .content-text .list-pc-left{
        flex: auto;
        width: 15%;
        text-align: left;
        line-height: 1.5;
        font-size: 0.9vw;
        color: #fff;
        font-family: SourceHanSansCN, SourceHanSansCN-Light;
    }
     .index-page .PCshow .content-text .list-pc-right{
        flex: auto;
        width: 85%;
        text-align: left;
        line-height: 1.5;
        font-size: 0.9vw;
        color: #fff;
        font-family: SourceHanSansCN, SourceHanSansCN-Light;
     }
    .index-page  .program-outline-box img{
        width: 100%;
    }
    .index-page  .program-outline-box .title img{
        width: 30%;
    }
    .index-page  .program-outline-box .start-time{
        font-size: 0.9vw;
        color: #0d569e;
        width: 98%;
        margin: 0 auto;
        height: 52px;
        line-height: 52px;
        background:#30ffff;
        border: 0.3em solid #0b4279;

    }
    .index-page .program-outline-box .accordion-box{
        background: #0b4279;
        color: #fff;
        text-align: left;
        border: none;
        padding: 35px 45px;
        box-sizing: border-box;
        border-top: 0.3em solid #30ffff;
    }
    .index-page .program-outline-box .accordion-box div{
        background: #0e365e;
        color: #fff;
        border: none;
    }
    .index-page .program-outline-box .accordion-box .el-collapse-item__header{
        background: #0b4279;
        height: 70px;
        font-size: 24px;
        color: #30ffff;
        font-family: SourceHanSansCN, SourceHanSansCN-Light;
        padding: 0 35px;
    }
    .index-page .program-outline-box .accordion-box .el-collapse-item__content{
        padding: 0 35px;
        box-sizing: border-box; 
    }
    .index-page .program-outline-content-other .accordion-box .el-collapse-item__header{
        display: flex;
    }
    .index-page .program-outline-content-other .accordion-box .el-collapse-item__header p{
        flex: 2;
    }
    .index-page .program-outline-content-other .accordion-box .el-collapse-item__header span{
        flex: 1;
        margin-right: 2.5vw;
        text-align: right;
    }
    .index-page .program-outline-box .accordion-box .el-collapse-item__header span{
        margin-left: 32vw;
    }
    .index-page .program-outline-content-other .accordion-box .el-collapse-item__header span {
        margin-left:0;
    }
    .index-page .program-outline-box .accordion-box .content-text{
        line-height: 2vw;
        font-size: 0.9vw;
    }
     .index-page .program-outline-box .accordion-box .content-text .text-p{
       font-size: 0.9vw;
       font-family: SourceHanSansCN, SourceHanSansCN-Light;
       color: #fff;
       margin-top: 0.8vw;
    }
    .index-page .program-outline-box .accordion-box .content-text span{
        line-height: 1.5;
        font-size: 0.9vw;
        color: #30ffff;
        font-family: SourceHanSansCN, SourceHanSansCN-Light;
        margin-right: 32px;
    }
    .index-page .program-outline-box .accordion-box  .morning-text p{
        line-height: 1;
        padding-left: 18rem;
    }
    .index-page .program-outline-box .accordion-box  .morning-text p:nth-last-of-type(1){
        line-height: 1;
        padding-left: 24.5rem;
    }
    .index-page .program-outline-box .accordion-box .after-text p{
        padding-left: 5.5vw;
        padding-right: 0.8vw;
    }
    .index-page .program-outline-box .accordion-box  .header-title{
        background: #0b4279;
        height: 70px;
        line-height: 70px;
        font-size: 24px;
        color: #30ffff;
        font-family: SourceHanSansCN, SourceHanSansCN-Light;
        padding: 0 35px;
        box-sizing: border-box;
        display: flex;
    }
    .index-page .program-outline-box .accordion-box .after-time{
        margin-top: 35px;
    }
    .index-page .program-outline-box .accordion-box  .header-title span{
        flex: 5;
        text-align: right;
        margin-right: 4.5vw;
    }
    .index-page .program-outline-box .accordion-box .time-content-list{
        /* height: 270px;
        overflow: auto; */
        padding: 35px;
        box-sizing: border-box;
    }   
    .index-page .program-outline-box .accordion-box .time-content-list::-webkit-scrollbar {
        /*滚动条整体样式*/
        display: block;
        width : 15px;  /*高宽分别对应横竖滚动条的尺寸*/
        height: 1px;
    }
    .index-page .program-outline-box .accordion-box .time-content-list::-webkit-scrollbar-thumb {
        /*滚动条里面小方块*/
        border-radius: 10px;
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        background   : #30ffff;
    }
    .index-page .program-outline-box .accordion-box .time-content-list::-webkit-scrollbar-track {
        /*滚动条里面轨道*/
        box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        background   : #ffffff;
    }
    .el-collapse-item__arrow{
        display: none;
    }
   
    /* 轮播图 */
    .index-page  .swiper-box{
        width: 60%;
        margin: 0 auto;
        margin-top: 100px;
        position: relative;
        border: 1px solid #30ffff;
    }
    .index-page  .swiper-box img{
        width: 100%;
        height: 100%;
        object-fit: fill;
    }
    .index-page  .el-carousel__arrow{
        top: 45%;
        color: #30ffff;
        width:4rem;
        height:4rem;
        font-size:32px;
    }
    .index-page .el-carousel__indicators--horizontal{
        bottom: 35px;
    }
    .index-page  .el-carousel__button{
        width: 8px;
        height: 8px;
        border-radius: 100%;
    }
    .index-page .el-carousel__indicators--horizontal .el-carousel__indicator.is-active button {
        width: 26px;
        height: 8px;
        border-radius: 20px;
    }

    /* 合作伙伴 */
    .index-page .cooperative-partner-box{
        width: 100%;
        margin-top: 10px;
    }
    
    .index-page .cooperative-partner{
        width: 60%;
        margin: 0 auto;
    }
    .index-page .cooperative-partner .title img{
        width: 45%;
    }
    .index-page .cooperative-partner .content-box{
        width: 100%;
        background: url('../assets/img/index/sponsor/bg.png') center no-repeat;
        background-size: 100% 100%;
        padding: 40px;
        box-sizing: border-box;
    }
    .index-page .cooperative-partner .content-list{
        color: #30ffff;
        font-size: 22px;
        text-align: left;
        margin-top: -62px;
    }
    .index-page .cooperative-partner .content-list span:nth-of-type(1){
        height: 0.2em;
        width: 30px;
        margin-right: 0.1vw;
        display: inline-block;
    }
   
    .index-page .cooperative-partner .img-list ul{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap:wrap; 
        justify-content: flex-start;
        box-sizing: border-box;
        padding: 0 13px;
        background: #0b4279;
        margin-top: 40px;
    }
    .index-page .cooperative-partner .img-list li{
        width: 220px;
        margin: 15px;
        text-align: center;
    }
    .index-page .cooperative-partner .img-list li img{
        width: 100%;
    }
    .index-page .media-box{
        margin-top: 35px;
    }
    /* 底部 */
    .index-page .footer-box{
        width: 100%;
        margin-top: 172px;
    }
    .index-page .media-box .content-box{
        background: url('../assets/img/index/media/bg.png') center no-repeat;
        background-size: 100% 100%;
    }
    .index-page .footer-box img{
        width: 100%;
    }
    .index-page  .Floating-window{
        position: fixed;
        right: 14vw;
        top: 3vw;
        width: 4vw;
        cursor: pointer;
        z-index: 10000;
    }
@media screen and (min-width: 1200px) {
    .PCshow{
        display: block;
    }
    .h5Show{
        display: none;
    }
    .footer-box-H5{
        display: none;
    }
    .index-page .program-outline-box .start-time{
        font-size: 0.9vw;
        font-weight: 800;
    }
}
/* 手机端适配 */
@media screen and (max-width: 1200px) {
    .h5Show{
        display: block;
    }
    .PCshow{
        display: none;
    }
    .index-page .content-box{
        padding-bottom: 10vw;
        box-sizing: border-box;
    }
    .h5-text{
       width: 100%;
       text-align: left;
       /* padding-left: 24.5%;
       box-sizing: border-box; */
       font-size: 8pt;
    }
    .index-page .program-outline-box .accordion-box .content-text span{
        margin-right: 0;
    }
    .index-page .program-outline-box .accordion-box .content-text .time{
        margin-right: 3.2rem;
    }
   .index-page .header-content img{
       width: 90%;
        object-fit: fill;
        margin-top: 20vw;
   }
   .index-page .header-box{
       height: 50vh;
        width: 100%;
        background: url('../assets/img/index/bg1.png') center no-repeat;
        background-size:cover;
        object-fit: fill;
    }
    .index-page .video-box{
        width: 94%;
        margin:0 auto;
    }
    .index-page  .program-outline-box{
        width: 94%;
        margin: 0 auto;
    }
    .index-page  .swiper-box{
        width: 94%;
        margin: 0 auto;
        margin-top: 10vw;
        position: relative;
        border: 1px solid #30ffff;
    }
    .index-page .cooperative-partner{
        width: 94%;
        margin: 0 auto;
    }
    .index-page .video-box .video-js .vjs-big-play-button{
        width: 8vw;
        height: 8vw;
        border-radius: 100%;
        left: 45%;
        top: 45%;
        font-size: 0;
    }
    .index-page .Floating-window{
        position: fixed;
        right: 4vw;
        top: 20vh;
        width: 10vw;
        cursor: pointer;
        z-index: 10000;
    }
    .index-page  .el-carousel__arrow{
        top: 45%;
        color: #30ffff;
        width:4rem;
        height:4rem;
        font-size:64px;
    }
    .index-page .program-outline-content{
        width: 100%;
    }
    .index-page .program-outline-box .title img{
        width: 82%;
    }
    .index-page .video-box .title img{
        width: 82%;
    }
    .index-page .cooperative-partner .title img {
        width: 82%;
    }
    .index-page .program-outline-box .start-time{
        font-size: 9pt;
        line-height: 4vh;
        height: 4vh;
        font-weight: 800;
    }
    .index-page .program-outline-box .accordion-box .el-collapse-item__header{
        font-size: 8pt;
        height: 8vh;
        padding:0px;
    }
   
    .index-page .program-outline-box .accordion-box .el-collapse-item__header span {
        margin-left: 2vw;
    }
    .index-page .program-outline-content-other .accordion-box .el-collapse-item__header p{
        line-height: 1.5;
        margin-top: 19pt;
    }
    .index-page .program-outline-box .accordion-box div{
        background: none;
    }
    .index-page .program-outline-box .accordion-box .content-text{
        line-height: 2;
        text-align: left;
        font-size: 8pt;
        margin-top: 2rem;
        background: #0e365e;
        padding: 0px;
    }
    .index-page .program-outline-box .accordion-box .content-text .text-p {
        margin-left: 0;
        font-size: 8pt;
    }
    .index-page .program-outline-box .accordion-box .morning-text p{
        line-height: 1.5;
        padding-left: 10px;
    }
    .index-page .program-outline-box .accordion-box .morning-text p:nth-last-of-type(1){
        line-height: 1.5;
        padding-left: 10px;
    }
    .swiper-box .container   .el-carousel__container {
        height: 20vh !important;
    }
    .index-page .cooperative-partner .content-box{
        width: 97%;
        margin: 0 auto;
    }
    .index-page .media-box{
        margin-top: 135px;
        padding-bottom: 1vh;
    }
    .index-page .cooperative-partner .content-list{
        margin-top: -2vh;
    }
    .index-page .cooperative-partner .img-list li{
        width: 20.5vw;
        margin: 1vh 2vw;
    }
    .index-page .program-outline-box .accordion-box .el-collapse-item__content{
        padding: 0px;
    }
    
    .index-page .cooperative-partner .content-list span:nth-of-type(1) {
        margin-right: 0px;
    }
    .index-page .cooperative-partner .content-list{
        font-size: 8pt;
    }
    .index-page .program-outline-box .accordion-box .content-text span{
        font-size: 8pt;
    }
    .index-page .video-box .vjs-button > .vjs-icon-placeholder:before {
        font-size: 4pt;
        line-height: 1;
    }
    .index-page .video-box  .video-js .vjs-time-control{
        font-size: 4pt;
        line-height: 1.5;
    }
     .index-page .video-box .video-js .vjs-play-progress:before{
        font-size: 4pt;
        line-height: 1.5;
        position: absolute;
        right: -0.5em;
        top: -0.633333em;
        z-index: 1;
    }   
    .video-js .vjs-control-bar{
        height: 2vh;
    }
    .index-page .video-box .video-js .vjs-volume-level:before{
        font-size: 4pt
    }
    .index-page .program-outline-box .accordion-box .header-title{
        height: 5vh;
        line-height: 5vh;
        padding: 0px;
        font-size: 8pt;
    }
    .index-page .program-outline-box .accordion-box .time-content-list{
        /* height: 60vh;
        overflow: auto; */
        background: #0e365e;
        padding: 2vw;
        box-sizing: border-box;
    }
    .index-page .program-outline-box .accordion-box .time-content-list .content-text{
        width: 100%;
        display: flex;
    }
    .index-page .program-outline-box .accordion-box .time-content-list .content-text .list{
        flex: auto;
        font-size: 8pt;
    }
    .index-page .program-outline-box .accordion-box .time-content-list .content-text .list:nth-of-type(1){
        width: 30%;
    }
    .index-page .program-outline-box .accordion-box .time-content-list .content-text .list:nth-of-type(2){
        width: 70%;
    }
    .index-page .program-outline-box .accordion-box{
        padding: 5px;
        box-sizing: border-box;
    }
    .footer-box{
        display: none;
    }
    .footer-box-H5{
        width: 100%;
        margin: 0 auto;
        background: #85d2f2;
    }
    .footer-box-H5 img{
        width: 60%;
        margin:6vw 0;
    }
    .index-page .cooperative-partner-box{
        padding-bottom: 5vw;
        box-sizing: border-box;
        margin-top: 5vw;
    }
}
</style>