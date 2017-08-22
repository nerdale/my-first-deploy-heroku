$( document ).ready(function(){
	//type effect
    $('span.text-change').typed({
        strings: ["Muy amado", "Muy odiado", "Poeta Maldito"], //array text
        typeSpeed: 60,
        backDelay: 600,
        callback: function () { $(this) }
    });
});

