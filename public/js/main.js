
var pages = ['', 'aboutSection', 'tournamentSection']

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

// DATABASE OPERATIONS
var database = firebase.database()

const writeUserData = (e) => {
database.ref('tournaments/iSurvived/players/JaelRivera').set(
	{
	firstName: e.target.first.value,
	lastName: e.target.last.value,
	phone: e.target.phoneNumber.value,
	club: e.target.tennisClub.value
})
}


//DOM Element Shortcuts
var	registerForm = document.getElementById('register-form')
var firstName = document.getElementById('first-name')
var lastName = document.getElementById('last-name')
var phone = document.getElementById('phone')
var club = document.getElementById('club')

//Form Functions
const checkInputs = (e) => {
	var allChecked = true
	if (e.target.first.value === '') {
		e.target.text = 'Field cannot be empty.'
		allChecked = false
	}
	if (e.target.last.value === '') {
		e.target.text = 'Field cannot be empty.'
		allChecked = false
	}
	if (e.target.phoneNumber.value === '') {
		e.target.text = 'Field cannot be empty.'
		allChecked = false
	}
	if (allChecked) {
		writeUserData(e)
	}
		e.preventDefault()
}

//Event Handling
registerForm.addEventListener('submit', checkInputs)

