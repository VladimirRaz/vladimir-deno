const arr = [
  {
    name: "Привыкаю",
    songLink: "https://dnl.megapesni.com/get/online/DIJdr7EbW_d2zvJKyS49CQ/1622343042/7b578b74/2017/01/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%9F%D1%80%D0%B8%D0%B2%D1%8B%D0%BA%D0%B0%D1%8E.mp3",
    photoLink: "",
    "check": false,
  },
  {
    name: "Хит Парад",
    songLink: "https://dnl.megapesni.com/get/online/1QZup3-tN5P8uA_RlWvzFA/1622343042/7bcac9a4/2017/09/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%A5%D0%B8%D1%82%20%D0%9F%D0%B0%D1%80%D0%B0%D0%B4.mp3",
    photoLink: "",
    "check": false,
  },
  {
    name: "Танцуй Под Бузову",
    songLink: "https://dnl.megapesni.com/get/online/1QZup3-tN5P8uA_RlWvzFA/1622343042/7bcac9a4/2017/09/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%A5%D0%B8%D1%82%20%D0%9F%D0%B0%D1%80%D0%B0%D0%B4.mp3",
    photoLink: "",
    "check": false,
  },
  {
    name: "Люди Не Верили",
    songLink: "https://dnl.megapesni.com/get/online/cnxVwkyQmg9Zl0UTNOL84Q/1622343042/7b735859/2017/04/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%9B%D1%8E%D0%B4%D0%B8%20%D0%9D%D0%B5%20%D0%92%D0%B5%D1%80%D0%B8%D0%BB%D0%B8.mp3",
    photoLink: "",
    "check": false,
  },
  
  {
    name: "Все Для Тебя",
    songLink: "https://dnl.megapesni.com/get/online/l-HqzUequPpUDyYDAjT4BQ/1622343317/76b34e90/2012/03/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%92%D1%81%D0%B5%20%D0%94%D0%BB%D1%8F%20%D0%A2%D0%B5%D0%B1%D1%8F.mp3",
    photoLink: "",
    "check": false,
  },
    
  {
    name: "Давай Останемся Дома",
    songLink: "https://dnl.megapesni.com/get/online/80d2Fd-xja7uH5Fb33xpYA/1622343317/1aa12212/2020/04/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%94%D0%B0%D0%B2%D0%B0%D0%B9%20%D0%9E%D1%81%D1%82%D0%B0%D0%BD%D0%B5%D0%BC%D1%81%D1%8F%20%D0%94%D0%BE%D0%BC%D0%B0.mp3",
    photoLink: "",
    "check": false,
  }
]

addEventListener("fetch", (event) => {
	const response = new Response(JSON.stringify(arr), {
		headers: {
			"content-type": "application/json; charset=UTF-8",
		},
	});

	event.respondWith(response);
});
