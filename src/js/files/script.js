// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

///scrollUp///////////////////////////////////////////////////////

const btnUp = {
	el: document.querySelector('.btn-up'),
	scrolling: false,
	show() {
	  if (this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
		this.el.classList.remove('btn-up_hide');
		this.el.classList.add('btn-up_hiding');
		window.setTimeout(() => {
		  this.el.classList.remove('btn-up_hiding');
		}, 300);
	  }
	},
	hide() {
	  if (!this.el.classList.contains('btn-up_hide') && !this.el.classList.contains('btn-up_hiding')) {
		this.el.classList.add('btn-up_hiding');
		window.setTimeout(() => {
		  this.el.classList.add('btn-up_hide');
		  this.el.classList.remove('btn-up_hiding');
		}, 300);
	  }
	},
	addEventListener() {
	  window.addEventListener('scroll', () => {
		const scrollY = window.scrollY || document.documentElement.scrollTop;
		if (this.scrolling && scrollY > 0) {
		  return;
		}
		this.scrolling = false;
		if (scrollY > 500) {
		  this.show();
		} else {
		  this.hide();
		}
	  });
	  document.querySelector('.btn-up').onclick = () => {
		this.scrolling = true;
		this.hide();
		window.scrollTo({
		  top: 0,
		  left: 0,
		  behavior: 'smooth'
		});
	  }
	}
  }

  btnUp.addEventListener();  


// валидация тел
$('input[name=phone]').mask("+375(99)999-99-99");  