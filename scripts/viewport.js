function ViewPort()
    {
    var w = document.documentElement.clientWidth
    var h = document.documentElement.clientHeight
    var viewsize = w + "," + h;
    }

ViewPort()

var checkScrollBars = function(){
    var b = $('body');
    var normalw = 0;
    var scrollw = 0;
    if(b.prop('scrollHeight')>b.height()){
        normalw = window.innerWidth;
        scrollw = normalw - b.width();
        $('#container').css({marginRight:'-'+scrollw+'px'});
    }
}
