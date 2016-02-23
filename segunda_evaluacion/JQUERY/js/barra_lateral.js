$(document).ready(function(){

   $('#dashboard').hover(
   		function(){
   			$(this).stop().animate(
   				{
   					left:'0',
   					backgroundColor: 'rgb(255,194,20)'

   				},
   				500,
   				'easeInSine'

   			);//End animate

   		},

   		function(){
   			$(this).animate(
   			{
   				left: '-100px',
   				backgroundColor: 'olive',
   			},  
   			1500,
   		    'easeOutBounce'

   			);//End animate

   		}



   	);//final del hover


});//final del ready