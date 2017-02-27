var timer;

function refreshLimit(courseName,classNo,cancelTimeMsg,index,seqNo,limitedNbr) {
	clearMsg(); // 清除提示信息

	 refreshIndex = index;
	 limitedNum = parseInt(limitedNbr);
	 refreshCourseName = courseName;
	 refreshClassNo = classNo;
	 refreshCancelTimeMsg = cancelTimeMsg; 
	 refreshSeqNo = seqNo;
		 
	if (xmlHttp == null) {
    	createXMLHttpRequest();
    }
	 var url = "/elective2008/edu/pku/stu/elective/controller/supplement/refreshLimit.do?index=" + index+"&seq="+seqNo;
	 xmlHttp.open("GET", url, true);
	 xmlHttp.onreadystatechange = refreshCallback;
	 xmlHttp.send(null);
}

function reSet(courseNum) { //　重新设置选课人数且把刷新改成选择
    var newNum;
    if(courseNum.length != 0) {
    	 newNum = courseNum[0].firstChild.data;
    	 if( parseInt(newNum) < limitedNum) {
    	 	//setCourseElectedNum(newNum);
    	 	//setActionModel();
    	 	console.log("not full");
    	 	clearInterval(timer);
    	 	selectCourse();

    	 }else{
    	 	console.log("full");
    	 }
    }
    refreshTime = new Date();
}

function selectCourse() {
    if(validate()==false) return false;
            
    window.location = "/elective2008/edu/pku/stu/elective/controller/supplement/electSupplement.do?index=" + refreshIndex + "&seq=" + refreshSeqNo;
    return true;
}


function shuaKe(courseName,classNo,cancelTimeMsg,index,seqNo,limitedNbr){

	timer = setInterval(function () {
        refreshLimit(courseName, classNo, cancelTimeMsg, index, seqNo, limitedNbr);
    }, 5000);

}
