# TODO

- Better error handling: display messages(not alert boxes)
- User can edit a pin
- User can preview uploaded image in form
- Add like feature

## Not urgent/Future Features

- user can upload profile picture
- display profile of user who posted pin and make it clickable
- to make individual profiles, in backend set up User show
  - User.find.by_id(params[:id])
    - user = user
    - current_user = session_user
    - pins = user.pins
