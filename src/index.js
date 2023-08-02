// import { support } from './js/support';
// import axios from 'axios';

const support = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  { title: 'UNITED24', url: 'https://u24.gov.ua/uk', img: null },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  { title: 'RAZOM', url: 'https://www.razomforukraine.org/', img: null },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];
const param = {
  charityOrganizations: document.querySelector('.support'),
  bookCategoriesList: document.querySelector('.book-categories-list'),
  booksPopularCategoris: document.querySelector('.popular-books'),
  mainPage: document.querySelector('.main-content'),
  seeMoreBtn: document.querySelectorAll('.popular-books-btn'),
};
const {
  charityOrganizations,
  bookCategoriesList,
  booksPopularCategoris,
  mainPage,
  seeMoreBtn,
} = param;

// Розмітка для Благодійних організацій

function createCharity(arr) {
  const arrForMarcup = arr.reduce((prevVel, { title, url }, idx) => {
    let counter = idx + 1;
    prevVel.push(`<li>
            <span class="counter">${counter.toString().padStart(2, '0')}</span>
            <a class="charity-link" href="${url}" target="_blank">
              <img
                class="charity-icon"
                src="./images/image ${counter}.png"
                alt="${title}"
              />
            </a>
          </li>`);
    return prevVel;
  }, []);
  charityOrganizations.innerHTML = arrForMarcup.join(' ');
}

createCharity(support);

// Запит для Вибора Категорій в sidebar

const URL_BOOK_Category =
  'https://books-backend.p.goit.global/books/category-list ';

async function fetchBookCategory(url) {
  const response = await fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.dir(data);
      creatMurcupBookCategory(data);
    })
    .catch(error => {
      console.dir(error);
    });
}
fetchBookCategory(URL_BOOK_Category);

// Розмітка для Вибора Категорій в sidebar
function creatMurcupBookCategory(arrBookCategoriry) {
  const arrForMarcup = arrBookCategoriry.map(
    ({ list_name: bookCategoryName }) => {
      return `<li>
          <span class="category">${bookCategoryName}</span>
                    </li>`;
    }
  );
  bookCategoriesList.innerHTML = arrForMarcup.join(' ');
}

// Запит для Top Books

const URL_TOP_BOOKS = 'https://books-backend.p.goit.global/books/top-books ';

async function fetchTopBooks(url) {
  const response = await fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.dir(data);
      creatMurcupTopBooks(data);
    })
    .catch(error => {
      console.dir(error);
    });
}

fetchTopBooks(URL_TOP_BOOKS);

// Розмітка для Top Books списків
function creatMurcupTopBooks(arr) {
  const arrBookCategoriry = arr;
  const arrForMarcup = arrBookCategoriry.map(({ books, list_name }) => {
    const marcup = books.map(({ author, book_image, title }) => {
      return ` <li>
                    <img class="popular-book-icon" src="${book_image}" alt="${title}" width = 180px />
                    <h4 class="popular-book-title">${title}</h4>
                    <span class="popular-book-author">${author}</span>
                  </li>`;
    });
    const marcup2 = `  <div class="popular-books-sections">
            <h3 class="popular-books-heder">${list_name}</h3>
            <ul class="popular-books-list">
                      ${marcup}
            </ul>
            <button type="submit" class="popular-books-btn">SEE MORE</button>
          </div>`;
    return marcup2;
  });
  booksPopularCategoris.innerHTML = arrForMarcup.join(' ');
}
//  Реалізація завантаження при натисканні на кнопку
const URL_BOOK_GROOP =
  'https://books-backend.p.goit.global/books/category?category=';

console.dir(seeMoreBtn);
booksPopularCategoris.addEventListener('click', loadMoreBooks);
function loadMoreBooks(evt) {
  if (evt.target.className === 'popular-books-btn') {
    const targetCategory = evt.target.parentNode.firstElementChild.textContent;
    //   creatMurcupBookGroop(data, targetCategory);
    fetchBookGroop(URL_BOOK_GROOP, targetCategory, creatMurcupBookGroop);
  }
}

async function fetchBookGroop(url, groopName, collback) {
  const response = await fetch(`${url}${groopName}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      console.dir(data);
      collback(data, groopName);
    })
    .catch(error => {
      console.dir(error);
    });
}

bookCategoriesList.addEventListener('click', selectMurcupBookGroop);
function selectMurcupBookGroop(evt) {
  const category = evt.target.textContent;
  fetchBookGroop(URL_BOOK_GROOP, category, creatMurcupBookGroop);
}

function creatMurcupBookGroop(data, groopName) {
  mainPage.firstElementChild.textContent = `${groopName}`;
  const marcup = data.map(({ author, book_image, title }) => {
    return ` <li>
                    <img class="popular-book-icon" src="${book_image}" alt="${title}" width = 180px />
                    <h4 class="popular-book-title">${title}</h4>
                    <span class="popular-book-author">${author}</span>
                  </li>`;
  });
  booksPopularCategoris.innerHTML = marcup.join(' ');
  booksPopularCategoris.classList.replace('popular-books', 'groop-book-page');
}
