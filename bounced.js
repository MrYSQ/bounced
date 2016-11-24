
			  //出现弹出框
			  // $('#mask').hide()
			  // function open_box(){console.log(22)
			  //     $('#fixed_box').addClass('active')	
			  //     $('#mask').show()
			  // }
			 +function($){
//			 	console.log(11)
			 	$('<div>222</div>').appendTo('body')
			 }(jQuery)

			 //关闭弹出框
			 function close_box(){
			 	
			 	$('#fixed_box').removeClass('active')
        // $('#fixed_box').hide();
        $('#mask').hide()
			 	// 	.delay(400).queue( function(){
			 	// 	$(this).dequeue()
			 	// })	
        $('#mask').remove();
        $('#fixed_box').remove()		   
			}       

              var tanchukuang = {  
                  // 创建元素
              	  creatEls:function() {
              	  	$('<div id="mask"></div> <div id="fixed_box"> <div class="tit"> <h4 id="title"></h4> <div class="close_bn"> <a href="javascript:;"></a> </div> </div> <div class="content"> <h3 id="content"></h3> <div class="sign_bn"><a href="javascript:;" id="sign"></a></div> </div> </div>')
              	  	.appendTo('body')
              	    // $('#mask').hide()	
              	 },
              	  Open : function(title,content,sign){
              	  	//   动效展开     
                      if ( $('#mask').html() === null){
                       tanchukuang.creatEls() 
                      }
                      
                      $('#fixed_box #title').text(title);
                      $('#fixed_box #content').text(content)
                      $('#fixed_box #sign').text(sign)

                      $('#fixed_box').addClass('active')
              	  		$('#fixed_box').show()
                      $('#mask').show()	             	  	     
              	  },
              	  
              	  Close : function(){
              	  	close_box()
              	  },

              	  Onload : function(href){
              	  	if ( href===''){
                        close_box()
              	  	}else{
              	  		location.href= href
              	  	}
              	  }
              }
                   
			  //  弹出框的内容
			  // tanchukuang.creatEls()			  
			  //  点击出现弹出框   
         $(function(){
            $('input').bind('click',function(){         
            tanchukuang.Open('标题','内容','登录')
         })        
			  //  点击消失弹出框
			  $('#fixed_box .close_bn').live('click',function(){			  
			  	tanchukuang.Close()
			  })
              //  点击登陆
        $('#fixed_box .sign_bn').live('click',function(){			  
			  	tanchukuang.Onload('')
			  })   
//		    console.log($('body').po_up())
		})
   
             