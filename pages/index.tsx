import React from 'react';
import Carousel from 'nuka-carousel';
import styles from './index.less';
import img1 from '../imgs/1.jpg'
import img2 from '../imgs/2.jpg'
import img3 from '../imgs/3.jpg'
import img4 from '../imgs/4.jpg'
import img5 from '../imgs/5.jpg'
import img6 from '../imgs/6.jpg'
import img2016 from '../imgs/2016.jpg'
import img2017 from '../imgs/2017.jpg'
import img2018 from '../imgs/2018.jpg'
import chuangjian from '../imgs/chuangjian.jpg'
import kaifa from '../imgs/kaifa.jpg'
import Ma from '../imgs/Ma.jpg'
import zhuli from '../imgs/zhuli.jpg'
import el1 from '../imgs/el1.jpg'
import el2 from '../imgs/el2.jpg'
import el3 from '../imgs/el3.jpg'
import el4 from '../imgs/el4.jpg'
import el5 from '../imgs/el5.jpg'
import el6 from '../imgs/el6.jpg'


export default () => {
  return (
    <div className={styles.page}>
      <div className={`${styles.pageone}`}>
        <div className={styles.navone}>
          <div className="logo"></div>
          <ul>
            <li><a href="">工作领域<span></span></a></li>
            <li><a href="">产品<span></span></a></li>
            <li><a href="">金融数据<span></span></a></li>
            <li><a href="">支持与培训<span></span></a></li>
            <li><a href="">关于我们<span></span></a></li>
          </ul>
        </div>
        <hr />
        <div className={styles.navonenext}>
          <div>
            <span>主页</span>
            <span>产品列表</span>
            <span>Elektron数据平台</span>
          </div>
        </div>
        <hr />
        <div className={styles.navtwo}>
          <h1>ELEKTRON</h1>
          <h5>企业数据管理平台</h5>
          <p>高质量数据是更快、更明智决策的关键所在。借助Elektron数据平台，您的团队可以通过数据中心、托管服务或者云端，随时随地发现、集成、丰富和使用他们所需的数据。</p>
        </div>
        <hr />
        <div className={styles.navthree}>
          <ul>
            <li><a href="#gailan">概览</a></li>
            <li><a href="#tese">特色与优势</a></li>
            <li><a href="#show">产品展示</a></li>
            <li><a href="#huode">获得奖项</a></li>
            <li><a href="#faxian">发现更多</a></li>
          </ul>
          <div>
            <a>联系我们了解更多<span></span></a>
          </div>
        </div>
        <div id="gailan" className={styles.gailan} >
          <div className={styles.left}>
            <div>
              <div className={styles.fontcolor}>概览</div>
              <h3>为什么选择我们</h3>
              <p>您可以借助Elektron获得竞争优势。获得各种实时、参考、日终、时间序列和替代数据，以及强大的分析解决方案。此外，还可以挖掘包括股票、FICC和场外衍生品业务员在内的深度数据覆盖。这些数据可与您的专有数据和源自第三方的优质信息集成。</p>
              <p>您需要的数据经过传送、整理、标记和标准化处理，可以轻松发现其中的关联、关系和联系，从而帮助您发现新机会。这些数据通过数据流馈送，经由云上或者托管数据管理服务，直接到达您的电脑或应用程序。</p>
              <div className={styles.headerwork}>
                下载我们的产品手册
              <span></span>
                <p>PDF(515.4KB)</p>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <Carousel>
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" />
              <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" />
            </Carousel>
          </div>
        </div>
        <div id="tese" className={styles.tese}>
          <div className={styles.teseleft}>
            <div className={styles.fontcolor}>特色与优势</div>
            <h3>数据平台为企业带来的优势</h3>
          </div>
          <div className={styles.teseright}>
            <div>
              <div className={styles.block1}><img src={img1} alt="" /></div>
              <div className={styles.block2}><img src={img2} alt="" /></div>
              <div className={styles.block3}><img src={img3} alt="" /></div>
            </div>
            <div>
              <div className={styles.block4}><img src={img4} alt="" /></div>
              <div className={styles.block5}><img src={img5} alt="" /></div>
              <div className={styles.block6}><img src={img6} alt="" /></div>
            </div>
          </div>
        </div>
        <div id="show" className={styles.show} >
          <div className={styles.showleft}>
            <div className={styles.fontcolor}>产品展示</div>
            <h3>数据平台为企业提供的应用</h3>
          </div>
          <div className={styles.showright}>
            <div className={styles.block1}><img src={zhuli} alt="" /></div>
            <div className={styles.block2}><img src={chuangjian} alt="" /></div>
            <div className={styles.block3}><img src={kaifa} alt="" /></div>
          </div>
        </div>
        <div id="huode" className={styles.huode}>
          <div className={styles.huodeleft}>
            <div className={styles.fontcolor}>获得奖项</div>
            <h3>我们获评的奖项</h3>
          </div>
          <div className={styles.huoderight}>
            <div className={styles.block1}><img src={img2018} alt="" /></div>
            <div className={styles.block2}><img src={img2017} alt="" /></div>
            <div className={styles.block3}><img src={img2016} alt="" /></div>
          </div>
        </div>
        <div id="faxian" className={styles.faxian}>
          <div className={styles.faxianleft}>
            <div className={styles.fontcolor}>发现更多</div>
            <h3>数据平台为企业带来的优势</h3>
          </div>
          <div className={styles.faxianright}>
            <div>
              <div className={styles.block1}><img src={el1} alt="" /></div>
              <div className={styles.block2}><img src={el2} alt="" /></div>
              <div className={styles.block3}><img src={el3} alt="" /></div>
            </div>
            <div>
              <div className={styles.block4}><img src={el4} alt="" /></div>
              <div className={styles.block5}><img src={el5} alt="" /></div>
              <div className={styles.block6}><img src={el6} alt="" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.pagetwo}`}>
        <div className={styles.moreonebg}>
          <div className={styles.moreone}>
            <div className={styles.one}>
              <div className={styles.about}>
                关于我们<br />
                <span>了解更多产品详细</span>
              </div>
              <div className={styles.tel}>
                电话方式<br />
                <span>4008 540 540</span>
              </div>
              <div className={styles.email}>
                邮件方式<br />
                <span>info@unispace.com</span>
              </div>
            </div>
            <div className={styles.two}>
              <div>
                姓名<br />
                <input type="text" />
              </div>
              <div>
                邮箱<br />
                <input type="text" />
              </div>
              <div>
                联系电话<br />
                <input type="text" />
              </div>
              <div>
                公司<br />
                <input type="text" />
              </div>
              <div>
                职务<br />
                <input type="text" />
                <span></span>
              </div>
              <div>
                负责领域<br />
                <input type="text" />
                <span></span>
              </div>
            </div>
            <div className={styles.three}>
              咨询内容<br />
              <textarea ></textarea>
            </div>
            <div className={styles.four}>
              <div >提交<span></span></div>
              <p>继续提交您的的详细信息，即表示您同意接收有关我们相关的资源、活动、产品或服务的不定期通信内容，接受条件提交此表格即表示您承认您已阅读并同意我们的<a>隐私声明</a>。</p>
            </div>
          </div>
        </div>

        <div className={styles.moretwo}>
          <div className={styles.one}>
            <div className={styles.btntop}>
              关于我们<br />
              <span>了解我们更多</span>
            </div>
            <div className={styles.btn}>
              企业介绍
            <span></span>
            </div>
            <div className={styles.btn}>
              工作机会
            <span></span>
            </div>
          </div>
          <div className={styles.two}>
            <div className={styles.btn}>
              <div className={styles.btnleft}>
                SUPPORT<br />
              CENTER
            </div>
              <span></span>
            </div>
            <div className={styles.text}>
              <b>需要帮助？</b>
              <p>希望我们的产品能优化您的工作效率。查找技术支持、产品更新、培训课程等。</p>
            </div>
          </div>
          <div className={styles.two}>
            <div className={styles.btn}>
              <div className={styles.btnleft}>
                CONTACT<br />
            US
            </div>
              <span></span>
            </div>
            <div className={styles.text}>
              <b>保持联系</b>
              <p>有关我们解决方案和服务的任何问题，我们的客服代表都可为您提供帮助。</p>
            </div>
          </div>
          <div className={styles.two}>
            <div className={styles.btn}>
              <div className={styles.btnleft}>
                SYSTEM<br />
            LOGIN
            </div>
              <span></span>
            </div>
            <div className={styles.text}>
              <b>登陆产品</b>
              <p>我们已经是路孚特客户？<br />查找您的产品并登陆</p>
            </div>
          </div>
        </div>
        <div className={styles.last}>
          <div>UNISPACE</div>
          <div>
            <ul>
              <li className={styles.lager}>企业</li>
              <li>关于我们</li>
              <li>工作机会</li>
              <li>投资者信息</li>
              <li>媒体中心</li>
              <li>新闻稿</li>
            </ul>
            <ul>
              <li className={styles.lager}>产品</li>
              <li>产品项目一</li>
              <li>产品项目一</li>
              <li>产品项目一</li>
            </ul>
            <ul>
              <li className={styles.lager}>联系我们</li>
              <li>办公室地址</li>
              <li>产品支持</li>
              <li>销售</li>
              <li>媒体联系</li>
            </ul>
            <ul>
              <li className={styles.lager}>关注我们</li>
              <li>微信</li>
              <li>微博</li>
              <li>微博</li>
            </ul>

          </div>
        </div>

      </div>
    </div>
    
  );
}