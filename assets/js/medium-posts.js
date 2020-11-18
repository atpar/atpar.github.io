(function() {
  fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fat-par')
   .then((res) => res.json())
   .then((data) => {
      const res = data.items;
      const posts = res.filter(item => item.categories.length > 0).slice(0, 2);
      
      function toText(node) {
        let tag = document.createElement('div')
        tag.innerHTML = node
        node = tag.innerText
        return node
      }

      function shortenText(text, startingPoint, maxLength) {
        return text.length > maxLength
          ? text.slice(startingPoint, maxLength)
          : text
       }
      
      let output = '';
      posts.forEach((item) => {
         output += `
          <li class="blog-list__item">
            <a target="_blank" href="${item.link}" class="blog-post">
              <img src="${item.thumbnail}" class="blog-post__image">
              <span class="blog-post__content">
                <h3 class="blog-post__title">${item.title}</h3>
                <p class="blog-post__text text text--dark">${shortenText(toText(item.content), 0, 105)+ '...'}</p>
                <div>
                  <span class="arrow-link">READ MORE</span>
                </div>
              </span>
            </a>
          </li>
         `
      })
      document.getElementById('medium-posts').insertAdjacentHTML('afterbegin', output)
    });
})();
