fetch(`https://api.github.com/repos/ItzAfroBoy/ItzAfroBoy/commits`)
	.then((res) => {
		return res.json();
	})
	.then((commits) => {
		let p = document.querySelector('.commit');
		p.innerHTML = commits[0].sha.slice(0, 7);
		div.appendChild(p);
});
