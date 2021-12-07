//初期値
var ColorCode = "#005CAF";//"#DFEFFF";

//変数書き換え
function Change(ColCode){
  ColorCode = ColCode;
  Running(ColCode);
  console.log(ColorCode);
}

//まとめて実行
function Running(ColCode){
  SetBGColor(ColCode);
  CMYK(ColCode);
  RGB(ColCode);
}

//背景色
function SetBGColor(ColCode){
  console.log(ColCode);
  //document.bgColor = ColCode;
  document.body.style.background = ColCode;
  console.log(ColCode);
}

//CMYK計算
function CMYK(ColCode){
  var C0,M0,Y0,K0,C,M,Y,K;
  C0 = 1 - parseInt(ColCode.substr(1,2),16)/255;
  M0 = 1 - parseInt(ColCode.substr(3,2),16)/255;
  Y0 = 1 - parseInt(ColCode.substr(5,2),16)/255;
  K0 = Math.min(C0,M0,Y0);
  C  = Math.round((C0 - K0)/(1 - K0)*100);
  M  = Math.round((M0 - K0)/(1 - K0)*100);
  Y  = Math.round((Y0 - K0)/(1 - K0)*100);
  K  = Math.round(K0*100);
  document.getElementById("c").textContent = C;
  document.getElementById("m").textContent = M;
  document.getElementById("y").textContent = Y;
  document.getElementById("k").textContent = K;
  console.log({C0,M0,Y0,K0});
  console.log({C,M,Y,K});

}

//RGB計算
function RGB(ColCode){
  var R,G,B;
  R = parseInt(ColCode.substr(1,2),16);
  G = parseInt(ColCode.substr(3,2),16);
  B = parseInt(ColCode.substr(5,2),16);
  document.getElementById("r").textContent = R;
  document.getElementById("g").textContent = G;
  document.getElementById("b").textContent = B;
  document.getElementById("code").textContent = ColCode;
  console.log({R,G,B});
}
