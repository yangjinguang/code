
  inputCheck:function(value,errTag,msg){ //输入框非空检查
    if(activities.isStrNull(value)||value.length==0){
      $(errTag+" strong").html(msg);
      $(errTag).attr("class","alert alert-danger");
      return 1;
    }else{
      $(errTag).attr("class","hidden");
      return 0;
    }
  },
