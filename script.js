var x = document.getElementsByTagName("table");
var table = x[4];
var len = table.rows.length;
var y = table.rows[0].insertCell(-1);
y.innerHTML = "<th>刷课</th>";
for(var i=1;i<len-2;i++){
	var cell = table.rows[i].cells[10];
	var str = cell.firstElementChild.getAttribute("onclick");
	var check = str.search("refreshLimit");
	var newCell = table.rows[i].insertCell(-1);

	if(check != -1){
		newCell.innerHTML = "<a>刷课</a>";
		newCell.firstElementChild.setAttribute("href","javascript:" + str.replace("refreshLimit","shuaKe"));
	}else{
		//not full
		newCell.innerHTML = "<p>未满</p>";
	}
	//console.log(cell.firstElementChild);
	//console.log(table.rows[i]);
}

var s = document.createElement('script');
s.src = chrome.extension.getURL('override.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
