(function() {
  var buttonsList = document.querySelectorAll('.services-list__button');
  var contentList = document.querySelectorAll('.service');

  function highlightButton(activeButton) {
    buttonsList.forEach(function(button) {
      if (button !== activeButton) button.classList.remove('active')
    })
    activeButton.classList.add('active')
  }

  function renderContent(id) {
    var activeContent = document.getElementById(id)
    contentList.forEach(function(content) {
      if (content !== activeContent) content.classList.remove('visible')
    })
    activeContent.classList.add('visible')
  }
  
  buttonsList.forEach(function(button) {
    button.addEventListener('click', function() {
      highlightButton(button)
      renderContent(button.dataset.target)
    })
  })
})()
