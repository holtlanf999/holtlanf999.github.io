//Namespace

var app = {};

//Namespace

// app module

app = ( function () {

	var validate = '';

	//jQuery document ready
	$(document).ready(function(){

		// AJAX request call
		$.ajax({
			type: "GET",
			url:'js/pages-data.json',
			dataType: "json",
			success:function(data){
				// JSON related functions are called from here
				DrawPageContent(data);
			},
			errors:function(jqXHR,textStatus,errorThrown) {
				console.log("textStatus" +textStatus+"\nError"+errorThrown);
			}
		}); //$.ajax ends here
	});// document ready ends here

	// this function writes the page content through JSON (pics and text).
	function DrawPageContent(data){
		// index data
		// loading aboutme section data
		$('#aboutme').append(
			(data.pageContent.img[0].homePage[0].devFace) +
			(data.pageContent.textContent[0].homePage[0].aboutMeText)
		);

		// loading experience section data
		$('#experience').append(
			(data.pageContent.textContent[0].homePage[1].experienceText) + 
			(data.pageContent.img[0].homePage[1].webTecnologies)
		);
		// index data

		// app-pages data
		$('#app-intro').append(data.pageContent.img[1].introImg);

		$('#visual-design').append(
			(data.pageContent.textContent[1].appsPage[0].visualDesign[0].tl1) +
			(data.pageContent.textContent[1].appsPage[0].visualDesign[1].phar1) +
			(data.pageContent.textContent[1].appsPage[0].visualDesign[2].tl2) +
			(data.pageContent.textContent[1].appsPage[0].visualDesign[3].phar2)
		);

		$('#proc-pt1').append(
			(data.pageContent.textContent[1].appsPage[1].articles[0].tl1) +
			(data.pageContent.img[1].appsPage[1].articles[0].proc1) +
			(data.pageContent.textContent[1].appsPage[1].articles[1].phar1) +
			(data.pageContent.img[1].appsPage[1].articles[1].proc2)
		);

		$('#proc-pt2').append(
			(data.pageContent.textContent[1].appsPage[1].articles[2].phar2) +
			(data.pageContent.img[1].appsPage[1].articles[2].proc3) +
			(data.pageContent.textContent[1].appsPage[1].articles[3].phar3)
		);
		// app-pages data

		// website-pages data
		$('#starting-tech').append(
			(data.pageContent.img[2].websitesPage[0].headerPicture) +
			(data.pageContent.textContent[2].websitesPage[0].tl1) +
			(data.pageContent.textContent[2].websitesPage[1].phar1) +
			(data.pageContent.textContent[2].websitesPage[2].phar2) +
			(data.pageContent.textContent[2].websitesPage[3].phar3) +
			(data.pageContent.textContent[2].websitesPage[4].phar4)
		);

		$('#challenge').prepend(
			(data.pageContent.textContent[2].websitesPage[5].tl2) +
			(data.pageContent.img[2].websitesPage[1].illusion) +
			(data.pageContent.textContent[2].websitesPage[6].tl3) +
			(data.pageContent.textContent[2].websitesPage[7].phar5) +
			(data.pageContent.img[2].websitesPage[2].challenge)
		);

		$('#cost').append(
			(data.pageContent.img[2].websitesPage[3].article) +
			(data.pageContent.textContent[2].websitesPage[8].article[0].tl1) +
			(data.pageContent.textContent[2].websitesPage[8].article[1].phar1) +
			(data.pageContent.textContent[2].websitesPage[8].article[2].tl2) +
			(data.pageContent.textContent[2].websitesPage[8].article[3].phar2)
		);

		$('#development').append(
			(data.pageContent.textContent[2].websitesPage[9].development[0].tl1) +
			(data.pageContent.textContent[2].websitesPage[9].development[1].phar1) +
			(data.pageContent.img[2].websitesPage[4].development[0].development1) +
			(data.pageContent.img[2].websitesPage[4].development[1].development2) +
			(data.pageContent.textContent[2].websitesPage[9].development[2].tl2) +
			(data.pageContent.textContent[2].websitesPage[9].development[3].phar2)
		);
		// website-pages data
	}//DrawPageContent ends here 
	
	//this function validates the little form on index.html
	function formCheck(){
		$('#submit-btn').on('click', function(){
			if(
				document.forms['contactForm']['nombre'].value.length > 0 &&
			 	document.forms['contactForm']['email'].value.length > 0 && 
			 	document.forms['contactForm']['comment'].value.length > 0
			){
				alert('Comment Send');
			} else { 
				alert('Please fill the contact form with the requested data');
			}
		});	
	}
	// formCheck ends here

}()); // app ends here
//app module end here



