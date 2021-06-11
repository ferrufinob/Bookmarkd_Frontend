# Bookmarkd

Bookmarkd is a Pinterest inspired picture sharing application. Bookmarkd allows users to create pins, create boards, and search through other users pins.

[Backend Repo](https://github.com/ferrufinob/Bookmarkd_Backend.git) |
[Blog](https://brenda-ferrufino.medium.com/react-redux-project-9a7f6a215ee8) |
[Demo Video](https://youtu.be/Sfp5V6rF3bw)

![app](BookmarkdGiphy.gif)

## Current Features

- Single Page App(SPA)
- JWT User Authentication
- Discover others pins through Search bar.
- User Profile provides user a view of their boards and corresponding pins.
- Pin and Board creation

## Built with

- Rails Backend
- Postgresql
- React/Redux Frontend
- Styled-components

## Installation

Backend

```rails
git clone
bundle install
rails db:create
rails db:migrate
rails s
```

Open brower to <http://localhost/3000> to starts Rails API

Frontend

```javascript
git clone
npm install
npm start
```

React will launch <http://localhost/5000>

### Future Features

Bookmarkd was built in two weeks, and more features are to come.

- Switch over to React Hooks
- Likes: User can like other users pins
- Comments: Users can leave comments on pins
- Friends: User can follow other users and be followed back
- Full CRUD for pins and boards

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
