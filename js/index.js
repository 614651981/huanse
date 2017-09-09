document.write('<table border=1 cellspacing=0>');
for(var a=1; a<=8; a++){
	document.write('<tr>')
     for(var b=1; b<=8; b++){
     	document.write('<td>'+a+'-'+b+'</td>')
     }
    document.write('</tr>')
}
document.write('</table>');
document.write('<br>');



document.write('<table border=1 cellspacing=0>');
for(var j=1; j<=9; j++){
    if(j%2==0){
    	document.write('<tr>')
		     for(var i=1; i<=j; i++){
			     	if(i%2==0){
			     		document.write('<td bgcolor=skyblue>'+i+'*'+j+'</td>')
			     	}else{
			     		document.write('<td bgcolor=pink>'+i+'*'+j+'</td>')
			     	}
		    }
    }
	else{
    	document.write('<tr>')
		    for(var i=1; i<=j; i++){
			     	if(i%2!=0){
			     		document.write('<td bgcolor=yellowgreen>'+i+'*'+j+'</td>')
			     	}else{
			     		document.write('<td bgcolor=peachpuff>'+i+'*'+j+'</td>')
			     	}
	        }	
    }
    document.write('</tr>')
}
document.write('</table>');
document.write('<br>');



document.write('<table border=1 cellspacing=0>');
for(var j=1; j<=9; j++){
	if(j%2==0){
	  document.write('<tr bgcolor=red>')
	}else{
	  document.write('<tr bgcolor=blue>')	
	}
    for(var i=1; i<=j; i++){
     
     		document.write('<td>'+i+'*'+j+'</td>')
  	}
    document.write('</tr>')
}
document.write('</table>');

document.write('<br>');

document.write('<table border=1 cellspacing=0>');
for(var j=1; j<=9; j++){
    document.write('<tr>')
     for(var i=1; i<=j; i++){
	     	if(i%2==0){
	     		document.write('<td bgcolor=pink>'+i+'*'+j+'</td>')
	     	}else{
	     		document.write('<td bgcolor=yellowgreen>'+i+'*'+j+'</td>')
	     	}
    }
    document.write('</tr>')
}
document.write('</table>');
document.write('<br>');


// 自行输入行数
// var z=prompt('请输入行数',1);
document.write('<table>');
for(var c=1;c<=9;c++){
   document.write('<tr style=background:skyblue>');
   for(d=1;d<=c;d++){
   	document.write('<td>'+d+'*'+c+'='+d*c+'</td>')
   }
   document.write('</tr>');
}
document.write('</table>');
document.write('<br>');


// 加一个变量color进行换色
document.write('<table>');
for(var c=1;c<=9;c++){
	if(c%2==0){
    var	color='skyblue';
	}else{
	var	color='pink';
	}
   document.write('<tr bgcolor='+color+'>');
   for(var d=1;d<=c;d++){
   	document.write('<td>'+d+'*'+c+'='+d*c+'</td>')
   }
   document.write('</tr>');
}
document.write('</table>');
document.write('<br>');


// 数组中的数值从小到大排列
var arr=[9,18,71,6,25,8,48,17,53];
for(var i=0; i<arr.length;i++){
	for(j=i+1;j<arr.length;j++){
	
	if(arr[i]>arr[j]){
		var temp=arr[i];
		arr[i]=arr[j];
		arr[j]=temp;
	}
	}
}
console.log(arr)
// 数组中的数值从大到小排列
var arr=[9,18,71,6,25,8,48,17,53];
for(var i=0; i<arr.length;i++){
	for(j=i+1;j<arr.length;j++){
	
	if(arr[i]<arr[j]){
		var temp=arr[j];
		arr[j]=arr[i];
		arr[i]=temp;
	}
	}
}
console.log(arr)





