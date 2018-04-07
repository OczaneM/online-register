
var pages = ['', 'about', 'tournament']

$(document).ready(function() {
	$('#fullpage').fullpage({
		fadingEffect: true,
		anchors: pages,
		navigation: true,
		scrollingSpeed: 900,
		navigationPosition: 'right',
		navigationTooltips: ['', 'sobre', 'registro'],
		scrollOverflow: true,
		touchSensitivity: 10,
		css3:true,

		//events
		onLeave: function(index, nextIndex, direction){
			var nextSectionAnchor = pages[nextIndex-1];
			var nextSection = $('.fp-section[data-anchor="'+nextSectionAnchor+'"]');
			var newBg = $(nextSection).attr('data-bg');
			$('.fp-section').animate({ backgroundColor: newBg }, "slow")
		}
	});
});

//DOM Element Shortcuts
var	registerForm = document.getElementById('register-form')

//GET USER INFO
registerForm.addEventListener('submit', writeUserData(e))

// DATABASE OPERATIONS
var database = firebase.database()

const writeUserData = (e) => {
database.ref('tournaments/TXWtHSgxJJa9LUeOMTYy/players').set({
	firstName: e.target.first,
	lastName: e.target.last,
	phone: e.target.phoneNumber,
	club: e.target.tennisClub
})
}
