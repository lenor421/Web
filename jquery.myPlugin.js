(function( $ ) {
    var methods = {
        start : function () {
            maximum=document.getElementById("rec").innerHTML;
             $( "#start" ).dialog('close');
             document.getElementById("canvas").style.backgroundColor = "blue";
             document.getElementById("canvas").style.borderRadius = "10px";
             document.getElementById("rec").innerHTML = maximum;
        (function(elid, width, height, speed, strength){
           var canvas = document.querySelector(elid),
                   ctx = canvas.getContext("2d"),
                   pos = 0, blocks = [];
           canvas.width = width; canvas.height = height;
           ctx.fillStyle = "white";
           var game = setInterval(function(){
               if( Math.random() < strength) blocks.push([Math.random()*(width-10),-10]);
               ctx.clearRect(0,0,width,height);
               ctx.fillRect(pos,height-50,20,60);
               for(var i = 0; i < blocks.length; i++){
                   ctx.fillRect(blocks[i][0],blocks[i][1],20,20);
                   if( blocks[i][1] > height - 60 && blocks[i][1] < height - 10 && Math.abs( pos - blocks[i][0]) < 10 ){
                       clearInterval(game);
                       document.getElementById("canvas").style.backgroundColor = "red";
                       k=Math.floor(1000 * strength);
                       document.getElementById("itog-span").innerHTML = k;
                       $( "#itog" ).dialog('open');
                       if(maximum<k){
                         maximum=k;
                         document.getElementById("rec").innerHTML = maximum;
                       }
                   }
                   if( blocks[i][1] > height - 5 ){
                       blocks.splice( i, 1);
                       i--;
                   } else {
                       blocks[i][1] += 5;
                   }
               }
               strength += 0.001;
           },speed);
           document.addEventListener('mousemove', function (e) {
                pos = (e.pageX > 0) ? ((e.pageX < width) ? e.pageX : width-10) : 0;
           }, false);
       })("#canvas",1000,600,10,0.01);}
}
     $.fn.myPlugin = function(method) { 
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
          } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
          } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
          } 
          return this.each(methods[start]);
        };
      })( jQuery );