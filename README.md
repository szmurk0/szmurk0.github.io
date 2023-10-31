<html>
  <head>
    <script>
        document.addEventListener("keyup", function (e) {
          var keyCode = e.keyCode ? e.keyCode : e.which;
                  if (keyCode == 44) {
                      stopPrntScr();
                  }
              });
        function stopPrntScr() {
            var inpFld = document.createElement("input");
            inpFld.setAttribute("value", ".");
            inpFld.setAttribute("width", "0");
            inpFld.style.height = "0px";
            inpFld.style.width = "0px";
            inpFld.style.border = "0px";
            document.body.appendChild(inpFld);
            inpFld.select();
            document.execCommand("copy");
            inpFld.remove(inpFld);
          }
         function AccessClipboardData() {
            try {
                window.clipboardData.setData('text', "Access   Restricted");
            } catch (err) {
            }
          }
          setInterval("AccessClipboardData()", 300);
    </script>
    
    <style>
    /* Ustawienia globalne */
    @import url('https://fonts.googleapis.com/css?family=Open+Sans');
    body {
      font-family: 'Open Sans', sans-serif;
      margin: 0;
      padding: 0;
      background-image: linear-gradient(to bottom, #202020, #FF8C42);
      color: #fff;
    }
 
      @keyframes fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

h1, h2, ul {
  animation: fade-in 1s ease;
}      

    
    

    ul.chat-button {
      text-align: center;
      margin-top: 10px;
    }

    #watermark {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('watermark.png');
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.5;
      pointer-events: none; /* pozwala na interakcję z elementami pod znakiem wodnym */
    }

    
    .hover-box:hover h2 {
      color: #000;
    }

      
    /* Nagłówki */
    h1, h2 {
      font-weight: bold;
      text-align: center;
      margin-top: 30px;
    }

    header {
      display: none;
    }


    h1 {
      font-size: 3em;
      text-shadow: 2px 2px #ccc;
    }

    a {
      color: black;
      text-decoration: none;    
  }

    a:hover {
      color: black;
      text-decoration: underline;
    }


    .hover-box:hover {
      background-color: #fff;
      color: #000;
    }
    
    h2 {
      font-size: 2em;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      margin-bottom: 20px;
    }

    /* Lista */
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
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

      
    ul li {
      display: inline-block;
      margin: 10px;
      font-weight: bold;
      border: 2px solid #ccc;
      border-radius: 10px;
      padding: 10px;
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

    /* Paragrafy */
    p {
      font-size: 1.2em;
      line-height: 1.5;
      margin: 20px;
      text-align: justify;
    }



    </style>
  </head>
  <body>
    <center><h2> Witam na mojej stronie! Strona ta przechowuje materiały z zajęć z lekcji programowania <br> ( oraz chat na żywo z lekcji programowania???) To wszystko na tej stronie i więcej! <br> Miłego pobytu na stronie! </h2></center>
    <br>
    <center><h2>Chat na Żywo z lekcji</h2></center>

    <center>
    <ul class="chat-button">
      <li><a href="https://szmurk0.github.io/Chat/">Chat</a></li>
    </ul>
    </center>
    
    <br>
    <br>
        <h2>Języki Programowania: </h2>
    <ul>
      <li><a href="https://szmurk0.github.io/Python/">Python</a></li>
      <li><a href="https://szmurk0.github.io/PHP/">PHP</a></li>
      <li><a href="https://szmurk0.github.io/JS/">JS</a></li>
      <li><a href="https://szmurk0.github.io/C/">C</a></li>
      <li><a href="https://szmurk0.github.io/C-/">C++</a></li>
      <li><a href="https://szmurk0.github.io/Csh/">C#</a></li>
      <li><a href="https://szmurk0.github.io/Batch/">Batch</a></li>
      <li><a href="https://szmurk0.github.io/Kotlin/">Kotlin</a></li>
      <li><a href="https://szmurk0.github.io/SQL/">SQL</a></li>
      
      
      
    </ul>
 


    <br><br><br><br><br><br><br>
    <br>
    <br><br>





   

  </body>
