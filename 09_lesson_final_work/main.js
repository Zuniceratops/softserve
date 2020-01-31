const arr = [
    {
        "login": "tr",
        "id": 47003210,
        "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ3MDAzMjEw",
        "avatar_url": "https://avatars3.githubusercontent.com/u/47003210?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/tr",
        "html_url": "https://github.com/tr",
        "followers_url": "https://api.github.com/users/tr/followers",
        "following_url": "https://api.github.com/users/tr/following{/other_user}",
        "gists_url": "https://api.github.com/users/tr/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/tr/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/tr/subscriptions",
        "organizations_url": "https://api.github.com/users/tr/orgs",
        "repos_url": "https://api.github.com/users/tr/repos",
        "events_url": "https://api.github.com/users/tr/events{/privacy}",
        "received_events_url": "https://api.github.com/users/tr/received_events",
        "type": "Organization",
        "site_admin": false,
        "score": 135.70836
      },
      {
        "login": "sineld",
        "id": 445349,
        "node_id": "MDQ6VXNlcjQ0NTM0OQ==",
        "avatar_url": "https://avatars3.githubusercontent.com/u/445349?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/sineld",
        "html_url": "https://github.com/sineld",
        "followers_url": "https://api.github.com/users/sineld/followers",
        "following_url": "https://api.github.com/users/sineld/following{/other_user}",
        "gists_url": "https://api.github.com/users/sineld/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/sineld/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/sineld/subscriptions",
        "organizations_url": "https://api.github.com/users/sineld/orgs",
        "repos_url": "https://api.github.com/users/sineld/repos",
        "events_url": "https://api.github.com/users/sineld/events{/privacy}",
        "received_events_url": "https://api.github.com/users/sineld/received_events",
        "type": "User",
        "site_admin": false,
        "score": 87.016495
      },
      {
      "login": "tr",
      "id": 47003210,
      "node_id": "MDEyOk9yZ2FuaXphdGlvbjQ3MDAzMjEw",
      "avatar_url": "https://avatars3.githubusercontent.com/u/47003210?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tr",
      "html_url": "https://github.com/tr",
      "followers_url": "https://api.github.com/users/tr/followers",
      "following_url": "https://api.github.com/users/tr/following{/other_user}",
      "gists_url": "https://api.github.com/users/tr/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tr/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tr/subscriptions",
      "organizations_url": "https://api.github.com/users/tr/orgs",
      "repos_url": "https://api.github.com/users/tr/repos",
      "events_url": "https://api.github.com/users/tr/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tr/received_events",
      "type": "Organization",
      "site_admin": false,
      "score": 135.70836
    },
    {
      "login": "sineld",
      "id": 445349,
      "node_id": "MDQ6VXNlcjQ0NTM0OQ==",
      "avatar_url": "https://avatars3.githubusercontent.com/u/445349?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/sineld",
      "html_url": "https://github.com/sineld",
      "followers_url": "https://api.github.com/users/sineld/followers",
      "following_url": "https://api.github.com/users/sineld/following{/other_user}",
      "gists_url": "https://api.github.com/users/sineld/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/sineld/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/sineld/subscriptions",
      "organizations_url": "https://api.github.com/users/sineld/orgs",
      "repos_url": "https://api.github.com/users/sineld/repos",
      "events_url": "https://api.github.com/users/sineld/events{/privacy}",
      "received_events_url": "https://api.github.com/users/sineld/received_events",
      "type": "User",
      "site_admin": false,
      "score": 87.016495
    },
];

let numBlock = document.querySelector('input');
let userList = document.querySelector('.user-list');

numBlock.addEventListener('input', function(event) {

    let value = numBlock.value;

    if (value === '') {
        userList.innerHTML = '';
        return;
    }

    let arrName = arr.filter(function(elem) {
        let name = elem.login.toLowerCase();
        let index = name.indexOf(value);

        if (index >= 0) {
            return true;
        }

        return false;
    }) 
    
    // Clear old results
    userList.innerHTML = '';

    // Add new
    arrName.forEach(function(elem) {
        const li = document.createElement('li');
        li.innerHTML = elem.login;

        // const cardElement = document.createCard(elem);
        // console.log(cardElement)
        
        userList.appendChild(li);
    });
    const cardElement = document.createCard(elem);





});
