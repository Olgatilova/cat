<!doctype html>
<html lang="ru">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css"
    
    <title><?= $title ?></title> <!--назначаем переменную, для любых файлов этого ?= тоже самое что и echo сайта-->
    <style><?= $style ?></style> <!--тоже-->
  </head>
  <body>
    <div class="container-fluid">
     <div class="row live-cat"><!-- может быть -justify-content-center-->
       <div class="col-2 care-list">
          <div class="row flex-column p-3 h-100 justify-content-around">
            <div class="care-item col" id="">  <!--онклик наверно не нужен-->
              <img src="img/fish-r.png" id="fish" alt="">
              <span>Рыбка</span>
            </div> 
            
            <div class="care-item col" > 
              <img src="img/milk-r.png" id="milk" alt="">
              <span>Молоко</span>
            </div> 
            
            <div class="care-item col" > 
              <img src="img/hand-r.png" id="hand" alt="">
              <span>Погладить</span>
            </div>
            <div class="care-item col" > 
              <img src="img/play-r.png" id="play" alt="">
              <span>Поиграть</span>
            </div> 
          </div> 
       </div>
       <div class="col-9 cat-oper">
        <div class="row p-3">
         <div class="col-4">
          <div class="display"> 
            <p class="display-text">жизнь кота трудна и не легка)</p>
              <div class="progress"> <!-- скачать из бустрапа анимация выполнения-->
                <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 0%"></div>
              </div>
           </div>
         </div>
          <div class="cat-sort col-4 height:  100px" id=""> 
            <img class="cat-img " id="cat6" src="img/cat6-r.png" alt=""> 
            <button type="button" class="btn btn-success">Играть</button>
          </div>
          <div class="speak col-4" id=""> 
            <h3 class="cat-speak" id="1">Привет! Меня зовут кот Гарфилд</h3>
          </div>
        </div>
       </div>
      </div>
    </div>

    <!-- Optional JavaScript -->
    <script src="script.js"></script>
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
  </body>
