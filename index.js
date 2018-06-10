function getIssues() {
	fetch(`https://api.github.com/repos/munirkizilcali/javascript-fetch-lab/issues`)
	.then(body => body.json())
	.then(json => showIssues(json))
}

function showIssues(json) {
	const issues = document.querySelector('#issues')
	const list = document.createElement('ul')
	for (var key in json) {
		list.innerHTML += `<li>${key}: ${json[key]}</li>`
	}
	issues.appendChild(list)
}

function createIssue() {
		postData = {
		title: document.querySelector('#title').value,
		body: document.querySelector('#body').value
	}
	return fetch(`https://api.github.com/repos/munirkizilcali/javascript-fetch-lab/issues`, {
		method: 'post',
		body: JSON.stringify(postData),
		headers: {
    	Authorization: `token ${getToken()}`
  }
	}).then(a=>a.json()).then(b=>console.log(b))
}

function showResults(json) {
	const results = document.querySelector('#results')
	const list = document.createElement('ul')
	for (var key in json) {
		list.innerHTML += `<li>${key}: ${json[key]}</li>`
	}
	results.appendChild(list)
}

function forkRepo() {
	const body = {
		has_issues: true
	}
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
	return fetch(`https://api.github.com/repos/${repo}/forks`, {
  	method: 'post',
  	body: JSON.stringify(body),
  	headers: {
    	Authorization: `token ${getToken()}` }
  	})
  	.then(body => body.json())
  	.then((json) => {
  		showResults(json)
  	})
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
