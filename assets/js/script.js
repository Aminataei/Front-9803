
var $detailCart1=$('#detail-cart1');
var $imageCart=$('.image-cart');


var $slider=$('.my-slider');
var $left=$('.an-left');
var $right=$('.an-right');


var $slider1=$('.my-slider1');
var $left1=$('.prev');
var $right1=$('.next');


$(document).ready(function () {


    var $hovercart=`<div id="detail-cart1" class="detail-cart">
                            <div class="border-cart">
                                <h4>
                                    One morning, when Gregor
                                </h4>
                                <h6>
                                    samsa work from trouble in
                                </h6>

                                    <div class="icon-cart">
                                        <i class="fa fa-deaf "></i>
                                    </div>
                            </div>
                        </div>`;


    $imageCart.hover(

        function () {

            $(this).html($hovercart)

        },
        
        function () {
            $(this).empty()

        }
        
    );

    $right.on('click',nextSlide);

    $left.on('click',prevSlide);


    function nextSlide() {
        var $currentActive=$slider.find('li.active');

        if ($currentActive.next('li').length){
            $currentActive.next('li').addClass('active');
            $currentActive.removeClass('active')
        }else {

            $slider.find('li:first-child').addClass('active');
            $currentActive.removeClass('active')
        }
        console.log($currentActive);

    }

    function prevSlide() {
            var $currentActive=$slider.find('li.active');

            if ($currentActive.prev('li').length){
                $currentActive.prev('li').addClass('active');
                $currentActive.removeClass('active')
            }else {

                $slider.find('li:last-child').addClass('active');
                $currentActive.removeClass('active')
            }
            console.log($currentActive);

        }



    // console.log(this)


    }
    );


// console.log(this)























$right1.on('click',nextSlide1);

$left1.on('click',prevSlide1);


function nextSlide1() {
    var $currentActive1=$slider1.find('li.active1');

    if ($currentActive1.next('li').length){
        $currentActive1.next('li').addClass('active1');
        $currentActive1.removeClass('active1')
    }else {

        $slider1.find('li:first-child').addClass('active1');
        $currentActive1.removeClass('active1')
    }
    console.log($currentActive1);

}

function prevSlide1() {
    var $currentActive1=$slider1.find('li.active1');

    if ($currentActive1.prev('li').length){
        $currentActive1.prev('li').addClass('active1');
        $currentActive1.removeClass('active1')
    }else {

        $slider1.find('li:last-child').addClass('active1');
        $currentActive1.removeClass('active1')
    }
    console.log($currentActive1);

}