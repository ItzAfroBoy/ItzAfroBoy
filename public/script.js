fetch(`https://api.github.com/repos/ItzAfroBoy/ItzAfroBoy/commits`)
	.then((res) => {
		return res.json();
	})
	.then((commits) => {
		let commit = document.querySelector('.commit');
		let commitLink = document.querySelector('.c-link');
		commitLink.setAttribute('href', commits[0].html_url);
		commit.innerHTML = commits[0].sha.slice(0, 7);
	});
