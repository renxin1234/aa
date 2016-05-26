        window.onload = function () {
        	var list= document.getElementById('list-pic');
        	var timer;
        	var time;
        	var speed=-50;
        	var move=0;
        	var offset=-992;
        	list.onmouseover = function(){
//      		movestop();       		
        	}
        	list.onmouseout = function(){
//      		timer=setInterval(movestar,20);
        	}      
		    function  movestar(){		   	    
	   	    	if(move > offset){
	   	    		move+=speed;
	   	    		list.style.left = parseInt(list.style.left)  + speed + 'px'; 
	   	    		setTimeout(movestar,10);
		   	    }else{
		   	    	var lastoffset=offset-move;
		   	    	list.style.left=parseInt(list.style.left)+lastoffset+"px";		   	    	
		   	    	move=0;
		   	    	returen ;
		   	    }
		   	}
		    function play(){
		    	timer=setTimeout(function(){
		    		if(parseInt(list.style.left) > -(992*4)){
		    			movestar();
		    		}else{
		    			list.style.left=0+"px";
		    		}
		    		play();
		    	},2000);
		    }
		    function movestop() {
                clearTimeout(timer);
            }
			play();
		}         
  
 