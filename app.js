/** @format */

const person = [
	{
		name: " John Tarkpoor",
		job: "Junior Front-end Developer",
		quote: ` If you want to lay the best foundation possible I’d
        recommend taking this course. The depth the instructors go into is
        incredible. I now feel so confident about starting up as a
        professional developer."`,
		img: "./images/image-john.jpg",
	},
	{
		name: " Tanya Sinclair",
		job: "UX Engineer",
		quote: ` I’ve been interested in coding for a while but never taken the jump,
        until now. I couldn’t recommend this course enough. I’m now in the
        job of my dreams and so excited about the future."`,
		img: "./images/image-tanya.jpg",
	},
];

const prev = document.querySelector(".btn1");
const next = document.querySelector(".btn2");

const text = document.getElementById("text");
const img = document.querySelector("#picc");
const job = document.querySelector("#job");
const name = document.querySelector("#name");

next.addEventListener("click", () => {
	text.textContent = person[0].quote;
	name.textContent = person[0].name;
	job.textContent = person[0].job;
	img.src = person[0].img;
});

prev.addEventListener("click", () => {
	text.textContent = person[1].quote;
	name.textContent = person[1].name;
	job.textContent = person[1].job;
	img.src = person[1].img;
});
