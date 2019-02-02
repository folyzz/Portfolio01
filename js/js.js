$(window).scroll(function(){
    
    if($(this).scrollTop()>=200){
        $("#navBar").addClass("noTransparrent");
    }
    else{
        $("#navBar").removeClass("noTransparrent");
    }
});

$(document).ready(function() {
    $("a.scroll").on('click', function(event) {  //عند النقر على اي رابط له صنف سكرول

        var hash = this.hash;   // قم بداية الحصول على قيمة الهاش الخاص بهذا الرابط اللي هو في href

        $('html, body').animate({ scrollTop: $(hash).offset().top }, 800, function(){});//ثم تنفيذ هذا الأمر في الهاش ... 800مل ثانية
    });

    $('.circle').circleProgress({ //<<<نحدد الصنف 'سيركل' ونطبق عليه 
        startAngle: -Math.PI / 2,// هذي قيمة ثابتة , لإضافة الشكل الدائري
        fill: "#0575e6" // لإضافة درجة اللون الذي نرغب به لهذه الدائرة 
    }).on('circle-animation-progress', function(event, progress, stepValue){
        $(this).find('span').html(Math.round(stepValue * 100) + '%'); //البحث عن 'سبان' ضمن صنف 'سيركل' وتطبيق قيمة رقمية مع النسبة المئوية ضمن هذا العنصر
    });

    $(function() {
        $("#commentForm").validate();
    });
    
});