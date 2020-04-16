/** Add any JavaScript you need to this file. */
//data
let product_Data = [
  {
    name: 'The Starry Night',
    description:
      'The Starry Night (1889) by Vincent Van Gogh.The Starry Night June oil on canvas Gogh Vincent van Museum of Modern Art New York USA The Bridgeman Art Library.',
    category: 'VanGogh',
    price: 500
  },
  {
    name: 'The Factory',
    description:
      ' The Factory (1887) by Vincent Van Gogh. Original from the Yale University Art Gallery. Digitally enhanced by rawpixel.',
    category: 'VanGogh',
    price: 400
  },
  {
    name: 'Square Saint-Pierre',
    description:
      'Square Saint-Pierre, Paris (1887) by Vincent Van Gogh. Original from the Yale University Art Gallery. Digitally enhanced by rawpixel.',
    category: 'VanGogh',
    price: 300
  },
  {
    name: 'Bleaching Ground at Scheveningen',
    description:
      'Bleaching Ground at Scheveningen (1882) by Vincent Van Gogh. Original from the J. Paul Getty Museum. Digitally enhanced by rawpixel.',
    category: 'VanGogh',
    price: 500
  },
  {
    name: 'Farming Village at Twilight',
    description:
      'Farming Village at Twilight (1884) by Vincent Van Gogh. Original from The Rijksmuseum. Digitally enhanced from our own original publication.',
    category: 'VanGogh',
    price: 300
  },
  {
    name: 'Flower Beds in Holland',
    description:
      'Flower Beds in Holland (1883) by Vincent Van Gogh. Original from The National Gallery of Art. Digitally enhanced by rawpixel',
    category: 'VanGogh',
    price: 600
  },
  {
    name: 'Girl with the Red Hat',
    description:
      'Girl with the Red Hat (ca. 1665–1666) by Johannes Vermeer. Original from the National Gallery of Art. Digitally enhanced by rawpixel.',
    category: 'Vermeer',
    price: 600
  },

  {
    name: 'The Milkmaid',
    description:
      'The Milkmaid (ca. 1660) by Johannes Vermeer. Original from The Rijksmuseum. Digitally enhanced by rawpixel.',
    category: 'Vermeer',
    price: 400
  },
  {
    name: 'Allegory of the Catholic Faith',
    description:
      'Allegory of the Catholic Faith (ca.1670–1672) by Johannes Vermeer. Original from The MET Museum. Digitally enhanced by rawpixel.',
    category: 'Vermeer',
    price: 500
  },
  {
    name: 'Girl with a Flute',
    description:
      'Girl with a Flute (ca. 1665–1675) attributed to Johannes Vermeer. Original from the National Gallery of Art. Digitally enhanced by rawpixel.',
    category: 'Vermeer',
    price: 500
  },
  {
    name: 'The Little Street',
    description:
      'The Little Street (ca. 1658) by Johannes Vermeer. Original from The Rijksmuseum. Digitally enhanced by rawpixel.',
    category: 'Vermeer',
    price: 700
  }
];

(function() {
  let artwork = {
    all: product_Data,
    getByCategory: function(category) {
      if (category !== 'all') {
        return artwork.all.filter(function(element) {
          return element.category === category;
        });
      }
      return artwork.all;
    }
  };
  // function to make html node
  // separate this function, change name of object
  let makeCard = function(item) {
    let card = document.createElement('div');
    card.className = 'card p-2';
    //image
    let image = makeImage(item.name);
    card.appendChild(image);
    let card_body = document.createElement('div');
    //name
    card_body.className = 'card-body';
    let itemName = document.createElement('h5');
    itemName.className = 'card-title text-center';
    itemName.innerHTML = item.name;
    card_body.appendChild(itemName);

    //button
    /* let button = document.createElement('p');
    button.innerHTML = 'Detail';
    card_body.appendChild(button);
    button.classList = `btn btn-info`;
    button.type="button"; */
    //description
    let detail = document.createElement('p');
    //detail.classList = 'card-text';
    detail.innerHTML = '';
    card_body.appendChild(detail);

    card.appendChild(card_body);
    itemName.onclick = function() {
      detail.innerHTML = `<span class="text-success border border-white"> ${formatter.format(
        item.price
      )} </span> ${item.description}`;
    };
    card.onscroll = function() {
      detail.innerHTML = '';
    };
    return card;
  };

  let makeImage = function(itemName) {
    let image = document.createElement('img');
    image.className = 'card-img-top';
    image.src = `./images/${itemName.replace(/ /g, '').toLowerCase()}.webp`; //farmingvillage;
    image.alt = itemName;
    return image;
  };
  // make currency
  const formatter = new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2
  });
  // Webph

  // make a card deck for every category
  let empty_Card_Deck = function() {
    let card_deck = document.querySelector('#card_deck');
    card_deck.innerHTML = '';
  };
  let helpSetupMenu = function(id_menu, arrayOfProduct) {
    let card_deck = document.querySelector('#card_deck');
    arrayOfProduct.forEach(product => card_deck.appendChild(makeCard(product)));
  };
  //make other categories disable when user chose 1 category
  let empty_category_nav = function() {
    let list = document.querySelector('#shop').children;
    [...list].forEach(li => (li.classList = ''));
  };
  // can not use foreach for array like object ( actually object) -> use [...] or for .. of
  let setupMenuHandlers = function() {
    let list_menu = document.querySelector('#shop').children;
    [...list_menu].forEach(li_category => {
      li_category.onclick = function() {
        empty_category_nav();
        li_category.classList = 'active';
        empty_Card_Deck();
        let product_array = artwork.getByCategory(li_category.id);
        helpSetupMenu(li_category.id, product_array);
      };
    });
    var webpMachine = new webpHero.WebpMachine();
    webpMachine.polyfillDocument();
  };

  window.onload = setupMenuHandlers();
})();
