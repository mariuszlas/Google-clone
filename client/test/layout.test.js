const fs = require('fs');        // 'fs' and 'path' modules import the HTML file into js file
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

describe('innitial layout of the index.html website', () => {
     beforeEach(() => {    // the html is converted to string before each test in this describe block
         document.documentElement.innerHTML = html.toString();    // beforeAll() gives the same result
     });

     describe('head', () => {
       test('correct title', () => {
         let title = document.querySelector('title');
         expect(title).toBeTruthy();
         expect(title.textContent).toBe('Google');
       });
     })

       test('form exists', () => {
         let btns = document.querySelectorAll('form');
         expect(btns).toBeTruthy;
     });

     test('navbar exists', () => {
       let btns = document.querySelectorAll('nav');
       expect(btns).toBeTruthy;
   });

       test('lucky button exists', () => {
         let btns = document.querySelectorAll('#lucky-btn');
         expect(btns).toBeTruthy;
     });

       test('footer exists', () => {
         let btns = document.querySelectorAll('footer');
         expect(btns).toBeTruthy;
       })
})
