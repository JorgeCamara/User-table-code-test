# UserTable-code-test
Approach to a generic custom user-table using React with Hooks and Styled-components

# Main features for UserTable-code-test app
Main used technologies are React JS vs 18, Typescript and Styled-Components.

The table design has been created trying to copy a given model. The rest of the components are free designed, but trying to follow the same table look and feel. Since the target of this app was to show case of uses of coding with React Hooks and Styled-Components, I force for example a different look for the buttons at the filter component, so I could have a basic button style and from that extend a new one.

The table headers data has been hard-coded inside a method within the UserTable component, but this info could perfectly by received from the API request, as a prop, or defined in another file. I just dediced a default values for width, accesor and name of every header in this particular case of user table with the given user data, but in order to make this generic we could have created a method to read the data and then map a headers object with it corresponding properties.

The data shown in the table is taken from a json data file inside the 'src/data' folder. The user can then change the content filtering by a text (press the 'filter' button or just press enter on the input to trigger the filtering action). This text will try to match on any of the fields of each row. If there is match, then that row will be shown. We can restore the original users data by clicking on the 'restore' button or if we filter by empty text.

By default, when we load the page the input that filters the table will be focused, but this is a behave than we can change trough the TableFilter component props.


# Running app
Clone this repository
Open app main folder and run "yarn install" command. This will install dependencies locally.
Execute "yarn start". The app will be opened at http://localhost:3000/

# Available Scripts
In the project directory, you can run:

yarn start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

yarn test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

yarn build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

yarn eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
