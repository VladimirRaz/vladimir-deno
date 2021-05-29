const arr = [
  {
    name: "Люди не верили",
    songLink: "https://dnl.megapesni.com/get/online/9tFvDfYYsDwYASB126OGsQ/1622092452/7b735859/2017/04/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%9B%D1%8E%D0%B4%D0%B8%20%D0%9D%D0%B5%20%D0%92%D0%B5%D1%80%D0%B8%D0%BB%D0%B8.mp3",
    photoLink: "",
    "check": false,
  },
  {
    name: "Песня",
    songLink: "https://dnl.megapesni.com/get/online/2NaJvexHpOrn2YWZB9CrzQ/1622253415/1aa12212/2020/04/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%94%D0%B0%D0%B2%D0%B0%D0%B9%20%D0%9E%D1%81%D1%82%D0%B0%D0%BD%D0%B5%D0%BC%D1%81%D1%8F%20%D0%94%D0%BE%D0%BC%D0%B0.mp3",
    photoLink: "",
    "check": false,
  },
  {
    name: "Песня",
    songLink: "https://dnl.megapesni.com/get/online/2NaJvexHpOrn2YWZB9CrzQ/1622253415/1aa12212/2020/04/%D0%9E%D0%BB%D1%8C%D0%B3%D0%B0%20%D0%91%D1%83%D0%B7%D0%BE%D0%B2%D0%B0%20-%20%D0%94%D0%B0%D0%B2%D0%B0%D0%B9%20%D0%9E%D1%81%D1%82%D0%B0%D0%BD%D0%B5%D0%BC%D1%81%D1%8F%20%D0%94%D0%BE%D0%BC%D0%B0.mp3",
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
