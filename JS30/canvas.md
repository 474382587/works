https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
Canvas
摘要
本篇主要透過Html的canvas 標籤搭配Javascript做出畫布的效果。效果包括:顏色的變化(hsl)及軌跡的粗細縮放。

內容
首先先定義畫布的大小

html內已經定義了標籤canvas 用JS選取後，需先設定畫布的內容，使用getContext('2d')定義為2d繪圖。接下來可以定義畫布範圍，若不定義範圍則使用html定義的範圍，若需改寫則須重新定義，這邊定義為window.innerWidth及window.innerHeight。

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
接下來定義繪製的顯示方式

Canvas已經有內建許多屬性，可參考Canvas，這邊會設定4種屬性。

ctx.strokeStyle定義繪畫的顏色，
ctx.lineJoin定義兩線相交時的拐角練習，
ctx.lineCap定義結束端點樣式。
ctx.lineWidth定義寬度。
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round'; //round為圓弧。
ctx.lineCap = 'round'; //round為圓弧。
ctx.lineWidth = 100;
接下來定義繪畫的起始方式。

利用isDrawing等於true代表正在繪圖，false代表不在繪圖。

let isDrawing = false; //一開始先定義為false
接下來定義監聽事件，用事件來驅動繪畫。

這邊會使用到mousedown按下滑鼠， mousemove移動滑鼠，mouseup放開滑鼠及mouseout 滑鼠移開使窗。按下滑鼠後isDrawing為true開始繪畫。mouseup時代表會畫完成isDrawing為false，mouseout移開視窗時isDrawing為false。

canvas.addEventListener('mousedown', ()=>isDrawing = true); //開始繪圖]
canvas.addEventListener('mousemove', draw);//繪製圖片中
canvas.addEventListener('mouseup', ()=>isDrawing = false);//完成繪圖
canvas.addEventListener('mouseout', ()=>isDrawing = false);//取消繪圖
先定義繪畫的方法，並查看監聽事件是否有效。

定義draw這個方法。首先可以先判定isDrawing是否為true，為false則返回。

function draw(e){
  if (!isDrawing) return; //設定停止
  console.log(e); //此時可以打開使用者工具看看有無回傳座標相關訊息，若有則代表到目前為止皆為成功!
}
接下來開始定義繪畫的內容

定義繪畫內容會用到4個參數。

ctx.beginPath()當作繪畫啟動。
ctx.moveTo(a,b)當作起始位置。
ctx.lineTo(a,b)當作終點位置。
ctx.stroke()代表繪製以定義的路徑。
先在function外定義最後的位置為lastX, lastY。e.offsetX代表回傳事件的當前座標，所以我們可以定義e.offsetX, e.offsetY為每次的起始位置。

let lastX = 0;
let lastY = 0;

function draw(e){
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY); //畫到的位置。
  ctx.stroke();
}

canvas.addEventListener('mousedown', (e)=> {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
}); //開始繪圖
到這邊應該會發現繪製的途徑都是以同一個點當作起始位置，所以我們需要動態的更動起始位置，在draw方法內加入[lastX, lastY] = [e.offsetX, e.offsetY];更新起始位置。

function draw(e){
  if (!isDrawing) return;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY); //畫到的位置。
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
}
到目前為止應該就能呈現在畫布上畫圖的效果了!如果你還想要再做些效果?像是顏色，以及繪畫的粗細?這邊先來時做顏色的變化吧!

hsl是一個色彩表示的方式hsl(hue, Saturation, Lightness)。

hue代表顏色的度數0-360，0是紅色 ，120是綠色，240是藍色；
Saturation代表灰階程度，0%為灰黑，100%為彩色，一般設置為100%。
Lightness為亮度，0%代表黑，100%代表白，一般設置為50%。
let hue = 0;

function draw(e){
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;//重新定義顏色
  ...
  hue++;
  if(hue>=360){
    hue = 0; //若++到360自動歸零
  }
}
顏色定義完了， 應該可以看到效果了吧?接下來要來定義寬度囉，這邊的處理方式是由細到粗，並回歸到細。

定義direction為粗細的參數，並定義其在draw中的變化。

當direction為ture時，ctx.lineWidth遞增，當增加到100時把direction改成false。

當direction為false時，ctx.lineWidth遞減，當撿到1時把direction改成true。

let direction = true;

function draw(e){
  ...
  if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
    direction = !direction;
  }
  if(direction){
    ctx.lineWidth++
  }else{
    ctx.lineWidth--
  }
}
到這邊就完成囉!