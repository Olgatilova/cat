<?php

  $title = "";
  $style = "";
  //require_once('index.php');
  
ini_set('error_reporting', E_ALL); // для показа ошибок в коде
ini_set('display_errors', 1); // для показа ошибок
ini_set('display_startup_errors', 1); // для показа ошибок
header('Content-type: text/html; charset=utf-8');


class Cat { 
 protected $catSort;
 protected $catSpeak;
 protected $careItem;
 protected $progress;

 
 public function __construct($catSort, $catSpeak, $careItem = null, $progress = null) { 
  $this->catSort = $catSort;
  $this->catSpeak = $catSpeak;
  $this->careItem = null;
  $this->progress = null;
 }
 
 public function getCatSort() { 
   return $this->catSort;
 }
 public function setCatSort($catSort) { 
   $this->catSort = $catSort;
 }
 public function getCatSpeak() {
   return $this->catSpeak;
 }
  public function setCatSpeak($catSpeak) { 
   $this->catSpeak = $catSpeak;
 }

 public function getCareItem() {
   return $this->careItem;
 }
 public function setCareItem($careItem) {
   $this->careItem = $careItem;
 }
 public function getProgress() {
   return $this->progress;
 }
 public function setProgress($progress) { 
   $this->progress = $progress;
 }
}

$wantHi = new Cat("img/cat6-r.png", "Привет, меня зовут Гарфилд!");
$wantFish = new Cat("img/cat5-r.png", "Я хочу есть", "img/fish-r.png");
$wantMilk = new Cat("img/cat1.png", "Я хочу молока", "img/milk-r.png");
$wantHand = new Cat("img/cat11-r.png", "Почеши пузико", "img/hand-r.png");
$wantPlay = new Cat("img/cat8-r.png", "Поиграй со мной", "img/play-r.png");
$wantSlip = new Cat("img/cat7-r.png", "Хорошо провели время, я спать");


echo "<img src='".$wantHi->getCatSort()."'>";

