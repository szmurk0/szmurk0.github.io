<html>
  <head>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      body {
          color: white;
          margin: auto;
          font-family: 'Source Code Pro', monospace;
          overflow: auto;
          background: linear-gradient(315deg, rgba(101,0,94,1) 3%, rgba(60,132,206,1) 38%, rgba(48,238,226,1) 68%, rgba(255,25,25,1) 98%);
          animation: gradient 15s ease infinite;
          background-size: 400% 400%;
          background-attachment: fixed;
      }
      @keyframes gradient {
          0% {
              background-position: 0% 0%;
          }
          50% {
              background-position: 100% 100%;
          }
          100% {
              background-position: 0% 0%;
          }
      }
      .wave {
          background: rgb(255 255 255 / 25%);
          border-radius: 1000% 1000% 0 0;
          position: fixed;
          width: 200%;
          height: 12em;
          animation: wave 10s -3s linear infinite;
          transform: translate3d(0, 0, 0);
          opacity: 0.8;
          bottom: 0;
          left: 0;
          z-index: -1;
      }
      .wave:nth-of-type(2) {
          bottom: -1.25em;
          animation: wave 18s linear reverse infinite;
          opacity: 0.8;
      }
      .wave:nth-of-type(3) {
          bottom: -2.5em;
          animation: wave 20s -1s reverse infinite;
          opacity: 0.9;
      }
      @keyframes wave {
          2% {
              transform: translateX(1);
          }
          25% {
              transform: translateX(-25%);
          }
          50% {
              transform: translateX(-50%);
          }
          75% {
              transform: translateX(-25%);
          }
          100% {
              transform: translateX(1);
          }
      }
      /* Lista */
      ul {
        list-style: none;
        text-align: center;
      }
      ul li.programming {
        background-color: #145369;
        color: #fff;
      }
      ul li.hobby {
        background-color: #e74c3c;
        color: #fff;
      }
      ul li:hover {
        background-color: #fff;
        color: #145369;
        border-color: #145369;
      }     
      ul {
        padding: -32px;
      }
      ul li {
        display: inline-block;
        margin: 10px;
        float: center;
        font-weight: bold;
        padding: 10px;
        border: 2px solid #ccc;
        border-radius: 10px;
        transition: background-color 0.3s ease;
      }
      ul li:hover {
        background-color: #fff;
        color: #145369;
        border-color: #145369;
      }
      a:hover {
        text-decoration: underline;
      }
      a {
        color: black;
        text-decoration: none;
      }
      /* Paragrafy */
      p {
        font-size: 1.2em;
        line-height: 1.5;
        margin: 20px;
        text-align: justify;
      }
      .center-text {
          text-align: center;
          margin: 0 auto;
      }
  
  

    </style>
    
  </head>
  
  <body>
    <div>
     <div class="wave"></div>
     <div class="wave"></div>
     <div class="wave"></div>
    </div>
    
    <center><h2> Witam na mojej (szmurka) stronie! Strona ta przechowuje materiały z zajęć z lekcji programowania. Miłego pobytu na stronie! </h2></center>
    <br>


    <div class="center-text">
      <h2> Rzeczy potrzebne na lekcje </h2>
    </div>

    
    <center>
      <ul>
        <li><a href="https://szmurk0.github.io/Chat/"> Chat </a></li>
        <li><a href="https://szmurk0.github.io/Kompilatory/"> Kompilatory </a></li>
      </ul>
    </center>
    
    <br>
    <br>
        <center><h2>Języki Programowania: </h2></center>
    <ul>
      <li><a href="https://szmurk0.github.io/Python/"> Python </a></li>
      <li><a href="https://szmurk0.github.io/Csh/"> C# </a></li>
      <li><a href="https://szmurk0.github.io/C/"> C </a></li>
      <li><a href="https://szmurk0.github.io/Cpp/"> C++ </a></li>
      <li><a href="https://szmurk0.github.io/Java/"> Java </a></li>
      <li><a href="https://szmurk0.github.io/PHP/"> PHP </a></li>
      <li><a href="https://szmurk0.github.io/JS/"> JS </a></li>
      <li><a href="https://szmurk0.github.io/Batch/"> Batch </a></li>
      <li><a href="https://szmurk0.github.io/Kotlin/"> Kotlin </a></li>
      <li><a href="https://szmurk0.github.io/SQL/"> SQL </a></li>
    </ul>
      <br><br>
      <center><h2> O mnie </h2></center>
    <ul>
      <li><a href="https://szmurk0.github.io/bio1/">BIO</a></li>
    </ul>






   

  </body>
