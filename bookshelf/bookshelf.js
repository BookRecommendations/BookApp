
import { setUser, getUser, findById } from '../utils.js';
import { booksWithPic, bookData } from '../data/data.js';

import { renderBookshelf } from '../mainpage/main-utils.js';


renderBookshelf();

const formLink = document.createElement('a');
formLink.src = '../'