var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
	.content
	.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашигтон'];
var WIZARD_SONAME = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];



	

var namesWizards = function() {
	var names = Math.floor(Math.random() * WIZARD_NAMES.length); 
	var sonames = Math.floor(Math.random() * WIZARD_SONAME.length);
	return WIZARD_NAMES[names] + " " + WIZARD_SONAME[sonames];
};

var coatColorWizards = function() {
	var colorsCoat = Math.floor(Math.random() * WIZARD_COAT_COLOR.length);
	return WIZARD_COAT_COLOR[colorsCoat];
};

var eyesColorWizards = function() {
	var colorsEyes = Math.floor(Math.random() * WIZARD_EYES_COLOR.length);
	return WIZARD_EYES_COLOR[colorsEyes];
};

var wizards = [
	{
		name: namesWizards(),
		coatColor: coatColorWizards(),
		eyesColor: eyesColorWizards(),
	},
	{
		name: namesWizards(),
		coatColor: coatColorWizards(),
		eyesColor: eyesColorWizards(),
	},
	{
		name: namesWizards(),
		coatColor: coatColorWizards(),
		eyesColor: eyesColorWizards(),
	},
	{
		name: namesWizards(),
		coatColor: coatColorWizards(),
		eyesColor: eyesColorWizards(),
	}
];

var renderWizard = function (wizard) {
	var wizardElement = similarWizardTemplate.cloneNode(true);

	wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
	wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
	
	return wizardElement;
}

	var fragment = document.createDocumentFragment();
	for (var i = 0; i < wizards.length; i++ ) {
		fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
