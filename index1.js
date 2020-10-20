const puppeteer = require('puppeteer');
const CREDS = require('./creds');

async function run() {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();

  await page.goto('https://github.com/login');

  // dom element selectors
  const USERNAME_SELECTOR = '#login_field';
  const PASSWORD_SELECTOR = '#password';
  const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block';

  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);

  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);

  await page.click(BUTTON_SELECTOR);
  await page.waitForNavigation();

  /* const userToSearch = 'john';
    const searchUrl = `https://github.com/search?q=${userToSearch}&type=Users&utf8=%E2%9C%93`;

  await page.goto(searchUrl);
  await page.waitFor(2 * 1000);

  const LIST_USERNAME_SELECTOR = '#user_search_results > div.user-list > div:nth-child(4) > div.flex-auto > div:nth-child(1) > div.f4.text-normal > a.text-gray > em'
  const LIST_EMAIL_SELECTOR = '#user_search_results > div.user-list > div:nth-child(4) > div.flex-auto > div.d-flex.flex-wrap.text-small.text-gray > div:nth-child(2) > a'

  const LENGTH_SELECTOR_CLASS = 'user-list-item'; */

} 



run();