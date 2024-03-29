(function($){"use strict";$(window).on('load',function(event){$('.js-preloader').delay(500).fadeOut(500);});$(".odometer").appear(function(e){var odo=$(".odometer");odo.each(function(){var countNumber=$(this).attr("data-count");$(this).html(countNumber);});});$(".language-option").each(function(){var each=$(this)
each.find(".lang-name").html(each.find(".language-dropdown-menu a:nth-child(1)").text());var allOptions=$(".language-dropdown-menu").children('a');each.find(".language-dropdown-menu").on("click","a",function(){allOptions.removeClass('selected');$(this).addClass('selected');$(this).closest(".language-option").find(".lang-name").html($(this).text());});})
$('.hero-wrap.style1').mousemove(function(e){var wx=$(window).width();var wy=$(window).height();var x=e.pageX-this.offsetLeft;var y=e.pageY-this.offsetTop;var newx=x-wx/2;var newy=y-wy/2;$('.hero-content').each(function(){var speed=$(this).attr('data-speed');if($(this).attr('data-revert'))speed*=-.4;TweenMax.to($(this),1,{x:(1-newx*speed),y:(1-newy*speed)});});});$(".odometer").appear(function(e){var odo=$(".odometer");odo.each(function(){var countNumber=$(this).attr("data-count");$(this).html(countNumber);});});$(".hero-property-slider").owlCarousel({nav:true,dots:false,loop:true,margin:10,items:1,navText:['<i class="flaticon-arrow-left"></i>','<i class="flaticon-right-arrow-3"></i>'],thumbs:false,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,margin:5,},768:{items:2,},992:{items:1,},1200:{items:2,margin:5,},1400:{items:2,margin:10,}}});$(".hero-slider-one").owlCarousel({nav:true,dots:false,loop:true,margin:20,items:1,navText:['<i class="flaticon-back"></i>','<i class="flaticon-next-1"></i>'],thumbs:false,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,});$(".hero-slider-two").owlCarousel({nav:true,dots:false,loop:true,margin:0,items:1,navText:['<i class="flaticon-back"></i>','<i class="flaticon-next-1"></i>'],thumbs:false,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,});$(".property-img-slider").owlCarousel({nav:true,dots:false,loop:true,margin:20,items:1,navText:['<i class="ri-arrow-left-s-line"></i>','<i class="ri-arrow-right-s-line"></i>'],thumbs:false,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,});$(".property-slider-one").owlCarousel({nav:false,dots:true,loop:true,margin:20,items:1,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,margin:5,},768:{items:2,},992:{items:2,},1200:{items:3,}}});$(".property-slider-two").owlCarousel({nav:false,dots:true,loop:true,margin:20,items:1,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,margin:5,},768:{items:2,},992:{items:2,},1200:{items:3,}}});$(".property-slider-three").owlCarousel({nav:false,dots:true,loop:true,margin:25,items:1,center:true,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,},768:{items:1.8,},992:{items:2.2,},1200:{items:2.6,},1400:{items:3.5,},1600:{items:4.1,}}});$(".city-slider-one").owlCarousel({nav:false,dots:true,loop:true,margin:20,items:1,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,margin:5,},768:{items:2,},992:{items:2,},1200:{items:3,}}});$(".city-slider-two").owlCarousel({nav:false,dots:true,loop:true,margin:20,center:true,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,},768:{items:2,},992:{items:2.6,},1200:{items:3.5,},1400:{items:3.6,}}});$(".testimonial-slider-one").owlCarousel({nav:false,dots:true,loop:true,margin:10,items:1,thumbs:false,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,margin:5,},768:{items:2,},992:{items:2,},1200:{items:3,}}});$(".testimonial-slider-two").owlCarousel({nav:true,dots:false,loop:true,margin:10,items:1,navText:['<i class="flaticon-back"></i>','<i class="flaticon-next-1"></i>'],thumbs:false,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,margin:5,},768:{items:2,},992:{items:2,},1200:{items:2.8,}}});$(".testimonial-slider-three").owlCarousel({nav:false,dots:true,loop:true,margin:15,items:1,center:true,thumbs:false,smartSpeed:1300,autoplay:false,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:1,},768:{items:1.8,},992:{items:2.4,},1200:{items:2.8,},1400:{items:4.1,}}});$(".partner-slider").owlCarousel({nav:false,dots:false,loop:true,margin:15,items:1,thumbs:false,smartSpeed:1300,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsive:{0:{items:2,},768:{items:3,},992:{items:4,},1200:{items:5,}}});var bigimage=$("#big");var thumbs=$("#thumbs");var syncedSecondary=true;bigimage.owlCarousel({items:1,nav:false,smartSpeed:1300,autoplay:true,dots:false,loop:true,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsiveRefreshRate:200}).on("changed.owl.carousel",syncPosition);thumbs.on("initialized.owl.carousel",function(){thumbs.find(".owl-item").eq(0).addClass("current");}).owlCarousel({items:3,dots:false,nav:true,navText:['<i class="ri-arrow-left-s-line"></i>','<i class="ri-arrow-right-s-line"></i>'],smartSpeed:200,slideSpeed:500,slideBy:4,margin:25,thumbs:false,smartSpeed:1300,autoplay:true,autoplayTimeout:4000,autoplayHoverPause:false,responsiveClass:true,autoHeight:true,responsiveRefreshRate:100,responsive:{0:{items:2,margin:15,},768:{items:3,},}}).on("changed.owl.carousel",syncPosition2);function syncPosition(el){var count=el.item.count-1;var current=Math.round(el.item.index-el.item.count/2-0.5);if(current<0){current=count;}
if(current>count){current=0;}
thumbs.find(".owl-item").removeClass("current").eq(current).addClass("current");var onscreen=thumbs.find(".owl-item.active").length-1;var start=thumbs.find(".owl-item.active").first().index();var end=thumbs.find(".owl-item.active").last().index();if(current>end){thumbs.data("owl.carousel").to(current,100,true);}
if(current<start){thumbs.data("owl.carousel").to(current-onscreen,100,true);}}
function syncPosition2(el){if(syncedSecondary){var number=el.item.index;bigimage.data("owl.carousel").to(number,100,true);}}
thumbs.on("click",".owl-item",function(e){e.preventDefault();var number=$(this).index();bigimage.data("owl.carousel").to(number,300,true);});$("#slider-range").slider({range:true,min:0,max:8000,values:[1200,3000],slide:function(event,ui){$("#amount_one").val(ui.values[0]+" - "+" KM"+ui.values[1]);}});$("#amount_one").val("KM "+$("#slider-range").slider("values",0)+
" - "+"KM "+$("#slider-range").slider("values",1));var wind=$(window);var sticky=$('.header-wrap');wind.on('scroll',function(){var scroll=wind.scrollTop();if(scroll<100){sticky.removeClass('sticky');}else{sticky.addClass('sticky');}});$(window).on('resize',function(){if($(window).width()<=1199){$('.collapse.navbar-collapse').removeClass('collapse');}else{$('.navbar-collapse').addClass('collapse');}});$('.mobile-menu a').on('click',function(){$('.main-menu-wrap').addClass('open');$('.collapse.navbar-collapse').removeClass('collapse');});$('.mobile_menu a').on('click',function(){$(this).parent().toggleClass('open');$('.main-menu-wrap').toggleClass('open');});$('.menu-close').on('click',function(){$('.main-menu-wrap').removeClass('open')});$('.mobile-top-bar').on('click',function(){$('.header-top').addClass('open')});$('.close-header-top button').on('click',function(){$('.header-top').removeClass('open')});var $offcanvasNav=$('.navbar-nav'),$offcanvasNavSubMenu=$offcanvasNav.find('.dropdown-menu');$offcanvasNavSubMenu.parent().prepend('<span class="menu-expand"><i class="ri-arrow-down-s-line"></i></span>');$offcanvasNavSubMenu.slideUp();$offcanvasNav.on('click','li a, li .menu-expand',function(e){var $this=$(this);if(($this.attr('href')==='#'||$this.hasClass('menu-expand'))){e.preventDefault();if($this.siblings('ul:visible').length){$this.siblings('ul').slideUp('slow');}else{$this.closest('li').siblings('li').find('ul:visible').slideUp('slow');$this.siblings('ul').slideDown('slow');}}
if($this.is('a')||$this.is('span')||$this.attr('class').match(/\b(menu-expand)\b/)){$this.parent().toggleClass('menu-open');}else if($this.is('li')&&$this.attr('class').match(/\b('dropdown-menu')\b/)){$this.toggleClass('menu-open');}});AOS.init();function BackToTop(){$('.back-to-top').on('click',function(){$('html, body').animate({scrollTop:0},100);return false;});$(document).scroll(function(){var y=$(this).scrollTop();if(y>600){$('.back-to-top').fadeIn();$('.back-to-top').addClass('open');}else{$('.back-to-top').fadeOut();$('.back-to-top').removeClass('open');}});}
BackToTop();})(jQuery);function setTheme(themeName){localStorage.setItem('fela_theme',themeName);document.documentElement.className=themeName;}
function toggleTheme(){if(localStorage.getItem('fela_theme')==='theme-dark'){setTheme('theme-light');}else{setTheme('theme-dark');}}
(function(){if(localStorage.getItem('fela_theme')==='theme-dark'){setTheme('theme-dark');document.getElementById('slider').checked=false;}else{setTheme('theme-light');document.getElementById('slider').checked=true;}})();



//Main Developed Functions
if(sessionStorage.getItem("AgentData")){
    const AgentData = JSON.parse(sessionStorage.getItem("AgentData"))
    document.getElementById("authBtns").innerHTML = "<a href='agent-details.html'>" + AgentData["fullname"] + "</a>";
    document.getElementById("signin").innerHTML = '<a href="agent-details.html"><button type="button" class="btn style1">' + AgentData["fullname"] +'</button></a>';
    document.getElementById("signup").innerHTML = ""
    
}


//Agent SignIn
function agentSignin(){
    document.getElementById("email").value;
    document.getElementById("password").value;
    if(document.getElementById("email").value == "vmaxinfo77@gmail.com"){
        if(document.getElementById("password").value == "1234"){
            const AgentData = {
                "email": document.getElementById("email").value,
                "fullname": "Lalit Subhash Bharindwal",
                "phone_number": "8796775539",
                "address": "A/p Shrirampur, A.Nagar, MH, IN",
                "experience": 2
            };
            sessionStorage.setItem("AgentData", JSON.stringify(AgentData));
            location = "index.html";
        }else{
            alert("Incorrect Password");
        }
    }else{
        alert("Not Registered");
    }
}

//Agent SignUp
function agentSignup(){
    const checkTermsConditions = document.getElementById("termConditions");
    if(checkTermsConditions.checked){
        var params = {
            Item: {
            "email": {
                S: document.getElementById("emailId").value
            },
            "fullname": {
                S: document.getElementById("fname").value
            },
            "phone_number": {
                S: document.getElementById("phone_number").value
            },
            "address": {
                S: document.getElementById("address").value
            },
            "experience": {
                S: document.getElementById("experience").value
            },
            "password": {
                S: document.getElementById("confirm_password").value
            }
            },
            ReturnConsumedCapacity: "TOTAL", 
            TableName: "REAgents"
           }
        
        putData(params);
    }else{
        alert("Please Fill Details and Accept Terms and Conditions")
    }
}

function propertyListing(){
    const fileInput = document.getElementById('upload-img');
    document.getElementById("addPropertyBtn").innerHTML = "Uploading...";
    document.getElementById("addPropertyBtn").disabled = true;
    const selectedFiles = fileInput.files;
    
    var propertyData = {
        "fullname": JSON.parse(sessionStorage.getItem("AgentData"))["fullname"],
        "phone": JSON.parse(sessionStorage.getItem("AgentData"))["phone_number"],
        "address": JSON.parse(sessionStorage.getItem("AgentData"))["address"],
        "agentEmail": JSON.parse(sessionStorage.getItem("AgentData"))["email"],
        "propertyTitle": document.getElementById("propertyTitle").value,
        "propertyType": document.getElementById("propertyType").value,
        "propertyStatus": document.getElementById("propertyStatus").value,
        "propertyAddress": document.getElementById("propertyAddress").value,
        "price": document.getElementById("price").value,
        "area": document.getElementById("area").value,
        "buildYear": document.getElementById("buildYear").value,
        "rooms": document.getElementById("rooms").value,
        "bedrooms": document.getElementById("bedrooms").value,
        "bathrooms": document.getElementById("bathrooms").value,
        "garages": document.getElementById("garages").value,
        "propertyDescription": document.getElementById("propertyDescription").value
    }
    var images = {};
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const reader = new FileReader();
      reader.onload = function(event) {
        const result = event.target.result;
        
        // Convert ArrayBuffer to binary string
        var binaryString = '';
        var bytes = new Uint8Array(result);
        var length = bytes.byteLength;

        for (var j = 0; j < length; j++) {
        binaryString += String.fromCharCode(bytes[j]);
        }

        // Convert binary string to base64
        var base64String = btoa(binaryString);
        //const blob = new Blob([result], { type: file.type });

        
        images["image" + (i+1)] = base64String;
        //const imageUrl = URL.createObjectURL(blob);
        //const displayImg = document.getElementById('displayImg');
        //displayImg.src = imageUrl;
        //<img id="displayImg" src="" alt="Selected Image" style="max-width: 300px; max-height: 300px;">
        // You can use the 'blob' object here (e.g., send it to the server, further processing, etc.)
      };
      reader.readAsArrayBuffer(file); // Convert the file to ArrayBuffer
    }
    propertyData["images"] = images;
    aws_config()
    var s3 = new AWS.S3();
	var params = {
		Bucket: "property-listing-data",
		Key: JSON.parse(sessionStorage.getItem("AgentData"))["email"] + ".json"
		};
	s3.getObject(params, function(err, data) {
		if(err) {
            if(err.message == "The specified key does not exist."){
                propertyData = {
                    "property-1": propertyData
                }

                var params = {
                    Body: JSON.stringify(propertyData),
                    Bucket: "property-listing-data",
                    Key: JSON.parse(sessionStorage.getItem("AgentData"))["email"] + ".json", 
                    ServerSideEncryption: "AES256",
                    StorageClass: "STANDARD_IA"
                };
            
                s3.putObject(params, function(err, data) {
                     if(err){
                        console.log(err, err.stack); // an error occurred
                        alert("Network Failure")
                     }else{
                        //console.log(data);           // successful response
                        alert("Property Listed Successfully...");
                        location = "agent-details.html";
                     }   
                });
            }
		}
		else{
			var detail_json   = data.Body.toString('utf-8');         // successful response
			temp_data = JSON.parse(detail_json);
            var keyCount  = Object.keys(temp_data).length;
            var index = [];
                // build the index
            for (var x in temp_data) {
                index.push(x); 
            }
            if(keyCount == 0){
                propertyData = {
                    "property-1": propertyData
                }

                params = {
                    Body: JSON.stringify(propertyData),
                    Bucket: "property-listing-data",
                    Key: JSON.parse(sessionStorage.getItem("AgentData"))["email"] + ".json",
                    ServerSideEncryption: "AES256", 
                    StorageClass: "STANDARD_IA"
                };
                s3.putObject(params, function(err, data) {
                    if(err){
                    console.log(err, err.stack); // an error occurred
                    alert("Network Failure");
                    }else{
                    //console.log(data);           // successful response
                    alert("Property Listed Successfully...");
                    location = "agent-details.html";
                    }   
                });
            }else{
                index.sort((a, b) => {
                    // Extract the last numbers from strings
                    const getLastNumber = (str) => {
                        const matches = str.match(/\d+$/); // Match the last continuous digits
                        return matches ? parseInt(matches[0]) : 0; // Convert matched digits to a number
                    };
                    const lastNumberA = getLastNumber(a);
                    const lastNumberB = getLastNumber(b);
                    return lastNumberB - lastNumberA; // Sort by the last numbers in descending order
                });

                var temp = parseInt(index[0].match(/\d+/g))
                temp_data["property-" + (temp + 1)] = propertyData
                params = {
                    Body: JSON.stringify(temp_data),
                    Bucket: "property-listing-data",
                    Key: JSON.parse(sessionStorage.getItem("AgentData"))["email"] + ".json",
                    ServerSideEncryption: "AES256", 
                    StorageClass: "STANDARD_IA"
                };
                s3.putObject(params, function(err, data) {
                    if(err){
                    console.log(err, err.stack); // an error occurred
                    alert("Network Failure")
                    }else{
                    //console.log(data);           // successful response
                    alert("Property Listed Successfully...")
                    location = "agent-details.html";
                }   
            });
        }
    }
});
}








//AWS Functions
function reverseString(str) {
    return str.split('').reverse().join('');
}

function aws_config(){
    AWS.config.update(
        {
            region: "us-east-1",/*endpoint: "http://localhost:8000",*/
            accessKeyId: reverseString("7WOI5C5LZCTCLAVVAIKA"),
            secretAccessKey: reverseString("Uu6UFNripU1JUZFQ4sNxi2IB+CNXu+JG2crz1Fx0")
        });
}

function putData(params){
    aws_config()
    var dynamodb = new AWS.DynamoDB();
    dynamodb.putItem(params, function(err, data) {
        if (err){
            console.log(err, err.stack); // an error occurred
        } else{
            console.log(data);           // successful response 
        }
      });
}



//image slider
// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
    buttons: [
      "slideShow",
      "thumbs",
      "zoom",
      "fullScreen",
      "share",
      "close"
    ],
    loop: false,
    protect: true
  });
  