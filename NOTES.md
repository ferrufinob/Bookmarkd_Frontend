# TODO

- Getting Board Pins options

1. "/board" -> clicked -> "/boards/:id/pins"(Route React) -> backend -> Pin index = if params[:board_id] : board.pins
2. conditional rendering -> pins.filter(pin => pin.board_id === props.id < PinList {...pin} key={prop.id}>)(prevents making a different fetch request just to get information I already have)

## Priority

- ERROR HANDLING!!
- Search bar: Make this work through backend(fetch request, nicky dovers video), more precise than front end search
- User can click on board to view all pins belonging to that board ✔
- Add two dispatch actions to all my fetch requests
- When new pin gets added redirect user to view that pin
- Reset Pins and Boards in state when user exists that component/route
  - ex: when user clicks on a pin, if they go back to see all pins that previous pin should be cleared from state
  - ex: when user logs out, reset currentUser from state
  - ! Boards are fine to be mounted at all times since I need them for dropdown
- Figure out why my pins container keeps re-rendering 6 times upon page reload
- add delete functionality(how am to going to prevent other users from deleting pin that isn't theirs?)

  ```javascript
   {user_id === this.props.user.id ? (
            <>
            <DeleteIcon />
          ) : null}
        </>
  ```

## Not urgent/Future Features

- User can preview their uploaded image
- Find a way for the board cover to be the image of the last pin added ✔
- Make sure that logged in user can't acess login/ sign in or welcome paths.
- Add like feature
- user can upload profile picture
- display profile of user who posted pin and make it clickable
- to make individual profiles, in backend set up User show
  - User.find.by_id(params[:id])
    - user = user
    - current_user = session_user
    - pins = user.pins
