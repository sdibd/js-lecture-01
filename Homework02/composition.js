var n1 = +prompt('Введите первый множитель', '');
var n2 = +prompt('Введите первый множитель', '');
var multi = 0;
var sign = '';

function multiply() {
if (( n1 < 0 ) || (n2 < 0)) {
  if (!(( n1 < 0 ) && (n2 < 0))) {
  sign = '-';
  }
}
for ( var i = 0; i < Math.abs(n2); i++) {
multi += Math.abs(n1);
}
multi = sign + multi;
return multi;
}
alert( n1 + ' * ' + n2 + '= ' + multiply(n1,n2) );
