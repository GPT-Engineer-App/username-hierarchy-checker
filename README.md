# username-hierarchy-checker

A webapp UI to Check the hierarchy of the input username with a dripdown menu to selct user role if agent or player. If agent is selected the isAgent=true if player=false else show ammessage that the username entered does not exists. Use this api: curl -X GET 'bridge.747lc.com/Default/GetHierarchy?username=Wakay&isAgent=false&isPlayer=true' -H 'Accept:application/json' -H 'Connection:keep-alive' -H 'Host:bridge.747lc.com' -H 'Origin:https://tmtools-pkj0vv.b4a.app' -H 'Accept-Encoding:gzip, deflate, br' -H 'Accept-Language:en-US,en;q=0.9' -H 'Referer:https://tmtools-pkj0vv.b4a.app/' -H 'User-Agent:Mozilla/5.0 (iPhone; CPU iPhone OS 17_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.3.1 Mobile/15E148 Safari/604.1' -H 'Sec-Fetch-Mode:cors' -H 'Sec-Fetch-Site:cross-site' -H 'Sec-Fetch-Dest:empty' with a response of: {
  "hierarchy": [
    {
      "id": 1506,
      "clientId": 454867,
      "username": "Info@747.live",
      "parentClientId": null
    },
    {
      "id": 17,
      "clientId": 457252,
      "username": "michaelpesigan08@gmail.com",
      "parentClientId": 454867
    },
    {
      "id": 53,
      "clientId": 458663,
      "username": "Marcthepogi",
      "parentClientId": 457252
    },
    {
      "id": 5793,
      "clientId": 459391,
      "username": "platalyn@gmail.com",
      "parentClientId": 458663
    },
    {
      "id": 53185,
      "clientId": 329777805,
      "username": "Wakay",
      "parentClientId": 459391
    }
  ],
  "user": {
    "id": 53185,
    "clientId": 329777805,
    "username": "Wakay",
    "parentClientId": 459391
  },
  "status": 0,
  "message": "454867 Info@747.live->457252 michaelpesigan08@gmail.com->458663 Marcthepogi->459391 platalyn@gmail.com->329777805 Wakay"
}

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/username-hierarchy-checker.git
cd username-hierarchy-checker
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
