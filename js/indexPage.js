import { img } from './img.js';
import { svgg, svgl } from './svgg.js';

export let indexPage = {
  data() {
    return {
      twotr: false,
      threetr: false,
      fourtr: false,
      onetr: false
    };
  },

  template: `
  <div class="index">
  <div class="main_first" id="main_first">
    <div class="container">
      <div class="main_first_content">
        <h2>Эксперты в разработке сайтов и мобильных приложений</h2>
        <p>Создаём проекты эффективные для бизнеса и полезные для клиента.
        Решаем задачи любой сложности.
        Соблюдаем договоренности по срокам, бюджету и качеству кода.</p>
        <!--  -->
      </div>
    </div>
  </div>
  <div class="main_second">
    <div class="container">
      <div class="main_second_content">
        <p>
          
          <span>
            Ismoiljon Abdulloev
          </span>
          &mdash; &mdash;
        </p>
      </div>
    </div>
  </div>


  <div class="main_four">
    <div class="container">
      <div class="main_four_content">
        <div class="container_main"  v-bind:class="{threetr: threetr, twotr: twotr, fourtr : fourtr, onetr : onetr}">
          <div class="one side">
            <h1  @click="twotr=true"><svgr></svgr></h1>      
            <h2  @click="twotr=false"><svgl></svgl></h2>      
              <div class="content">
                <h1>Проекты</h1>
                <div class="content_one">
                  <div class="content_one_item">
                    <a href="https://abdulloev19.github.io/facemash.tj/">Facemash.tj</a>
                  </div>
                  <div class="content_one_item">
                    <a href="https://abdulloev19.github.io/onlineshop/">Online Shop</a>
                  </div>
                  <div class="content_one_item">
                    <a href="https://abdulloev19.github.io/test.tj/">Test.tj</a>
                  </div>
                </div>
                <div class="footer_content_one">
                  <h2><router-link to="/projects">Посмотреть все проекты</router-link></h2>
                </div>
              </div>
          </div>
          <div class="two side">
            <h1 @click="threetr=true; twotr = false"><svgr></svgr></h1>
            <h2 @click="twotr=false"><svgl></svgl></h2>
              <div class="content">
                <h1>Интеграции</h1>
                <p>Мы используем современные платформы и технологии разработки,
                которые обеспечивают создание гибких, масштабируемых и надежных решений.</p>
              </div>
          </div>
          
          <div class="three side">
            <h1 @click="fourtr=true; threetr= false"><svgr></svgr></h1>   
            <h2 @click="threetr=true"><svgl></svgl></h2>   
            <div class="content">
                <h1>Платформы и технологии разработки</h1>
                <p>Мы используем современные платформы и технологии разработки,
                 которые обеспечивают создание гибких, масштабируемых и надежных решений.
                  Делаем серверную инфраструктуру, способную работать под большими нагрузками.</p>
            </div>
        </div>
          <div class="four side">
            <h1 @click="twotr = false; threetr = false; fourtr = false"><svgr></svgr></h1>    
            <h2 @click="twotr = false; threetr = false; fourtr = false"><svgl></svvl></h2>    
            <div class="content">
              <h1>Контактная информация</h1>
              <p>Напишите ваши контакты в форму ниже, мы свяжемся и обсудим ваш проект,
               а смету подготовим в течении нескольких часов.</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  </div>


  <div class="main_third" id="main_third">
    <div class="container">
      <div class="main_third_content">
        <div class="picContainer">
          <image1></image1>
      </div>
    </div>
  </div>
  </div>
  </div>
  `,

  components: {
    "image1": img,
    "svgr": svgg,
    "svgl": svgl,
  }
};
