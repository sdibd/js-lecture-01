var top1 = "/\\",
    top2 = "\\/",
    twospase = "  ",
    twoline = "__",
    a = "",
    b = "",
    d = "__";

var n = +prompt("Введите размер стороны треугольника",'4');
  function drawTriangle() {

    for ( var j = 0; j < n; j++) {
      a += twospase;
    }

    var trian = top1;
    trian = a + trian;
    for ( var i = 1; i < n; i++) {
      b += ( twospase + twospase );
      d += twoline;
      a = a.substr(0, a.length-2);
      top1 = top1.substr(0,1) + b + top1.substr(top1.length-1,1);

      if ( i == n-1) {
        top1 = top1.substr(0,1) + d + top1.substr(top1.length-1,1);
      }

      trian = trian + "\n" + a + top1;
    }
    return trian;
  }
  alert (drawTriangle(n));

    n = +prompt("Введите размер стороны ромба",'4');
    a = "";
    b = "";
    top1 = "/\\";

    function drawRomb() {

    for ( var j = 0; j < n; j++) {
      a += twospase;
    }

    trian = top1;
    trian = a + trian;

    for ( var i = 1; i < n; i++) {
      b += ( twospase + twospase );
      d += twoline;
      a = a.substr(0, a.length-2);
      top1 = top1.substr(0,1) + b + top1.substr(top1.length-1,1);
      trian = trian + "\n" + a + top1;
    }

    var romb = twospase + top2.substr(0,1) + b + top2.substr(top2.length-1,1);
    
    for ( var i = 1; i < n; i++) {
      a += twospase;          
      b = b.substr(0, b.length-4);
      top2 = top2.substr(0,1) + b + top2.substr(top2.length-1,1);
      romb = romb + "\n" + a + top2;
    }

    romb = trian + "\n" + romb;
    return romb;
  }
  alert (drawRomb(n));
