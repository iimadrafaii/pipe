const popupToShow_1 = document.getElementById('popupToShow_1')
const showPopup_1 = document.getElementById('showPopup_1')
const closePopup_1 = document.getElementById('closePopup_1')
const overlayClosePopup_1 = document.getElementById('overlayClosePopup_1')


showPopup_1.addEventListener('click', function () {
    popupToShow_1.classList.add('active');
});

overlayClosePopup_1.addEventListener('click', function () {
    popupToShow_1.classList.remove('active');
});

closePopup_1.addEventListener('click', function () {
    popupToShow_1.classList.remove('active');
});