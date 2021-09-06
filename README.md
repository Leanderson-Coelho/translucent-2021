## TCInc - Frontend & Backend Assignment

### My Games

Is a App to keep all games you own. You can add new games and search for them in Catalog page. In Add page you can add a game with some informations how: Game year, your title, personal notes and more. The App has features how internationalization with languages Brazilian Portuguese, Canadian French and Canadian English and theme configuration for dark and light theme.

### Features

![](https://img.shields.io/badge/i18n-You%20can%20alter%20the%20language%20of%20the%20App-brightgreen) ![](https://img.shields.io/badge/theming-You%20can%20choose%20between%20light%20and%20dark%20theme-violet) ![](https://img.shields.io/badge/automatic%20suggestions-In%20Search%20input%20you%20can%20choose%20a%20suggestion%20for%20show%20only%20it-blueviolet) ![](https://img.shields.io/badge/add%20game-add%20a%20new%20game%20in%20the%20app-informational) ![](https://img.shields.io/badge/list%20games-see%20all%20games%20added-orange)

### Technologies and dependencies used

###### FrontEnd

[`@material-ui/core`](https://material-ui.com/): Components library that help with Button, Theme, App Bar and more.

[`rxjs`](https://rxjs.dev/guide/overview): Library to manipulate asynchronous events with observables. Used on search input to do suggestions.

[`i18n-js`](https://github.com/fnando/i18n-js): Library to do translations with files configurations. Used throughout FrontEnd.

[`axios`](https://github.com/axios/axios): HTTP Client for browser. Used to make requests to BackEnd.

[`clsx`](https://www.npmjs.com/package/clsx): Utility for constructing className strings conditionally and with concatenations.

[`formik`](https://formik.org/): Form validation, formatting and error handler library.

[`luxon`](https://moment.github.io/luxon/#/): Dates powerful library with support to i18n. Used to date formatting in user language.

[`react`](https://reactjs.org/): Javascript library to build single pages apps.

[`react-router-dom`](https://reactrouter.com/web/guides/quick-start): Library to create routes in reactjs.

[`redux`](https://redux.js.org/): Library to centralize all application state. Used throughout FrontEnd.

[`redux-saga`](https://redux-saga.js.org/): Redux side effect manager. Integraded with redux to manager async call to update state.

[`yup`](https://github.com/jquense/yup): Library to schema validation. Used with formik.

[`@testing-library/react and @testing-library/jest-dom`](https://testing-library.com/): Library help to test UI components.

###### BackEnd

`org.hibernate.validator`: Dependency that allow use validation annotations on models class in spring boot

`io.springfox`: Dependency to generate API Documentation.

`org.springframework.boot`: And Spring starter dependencies to mongodb integration and web APIs.

`To this app was used mongodb`

### Running

With your work environment running and using these tools:

- Node 12 LTS
- Maven 3.6.0
- Java version: 1.8.0_292
- docker-compose 1.24.0

do:

Start app first time

> ./build.sh

use 'CRTL + C' to stop after initialization and to restart:

> ./start.sh

**You can access the app when the message 'Now you can see my games in browser' appear**

> App: `http://localhost/`
> API Docs: `http://localhost:8082/api/v1/swagger-ui.html#/game-controller`

**Tests**

`FrontEnd`: in the **my-games-frontend** folder use:

> npm test

should have three files with tests (case not show all tests use 'w' -> 'to show more' )

`BackEnd`: in the **my-games-backend** folder use:

> mvn test

### Documents

[UI Specification on Figma](https://www.figma.com/file/X1gmSa5GvmArgXExC3kJ7t/Requirements-Specification-Document?node-id=0%3A1)

[Trello Planning](https://trello.com/b/vQCrBBFg/tcinc-frontend-backend-assignment)

[Requirements Specification Document](https://docs.google.com/document/d/1TRdA4pVpm0aHK1ijPvaXK--YxASX1PJ1Eu3JnZIyg9w/edit?usp=sharing)

##### System screens

UI Mobile with light theme and English language
![](./docs/ui-mobile.png?raw=true 'UI Mobile with light theme and English language')

Desktop UI with dark theme and french language
![](./docs/ui-desktop.png?raw=true 'Desktop UI with dark theme and french language')

**Part** of planning in [trello](https://trello.com/b/vQCrBBFg/tcinc-frontend-backend-assignment)
![](./docs/planning.png?raw=true 'Part of planning in trello')

#### CHANGELOG AND PROGRESS

#### 09/06/2021

`Last Commit:` [c19e543](https://github.com/Leanderson-Coelho/translucent-2021/tree/c19e543d059f1d934ed9eec13a8721262112aaa9)

- **BackEnd Development**: Adding Swagger to the BackEnd

- **BackEnd Development and FrontEnd**: Docker, docker-compose and tests

#### 09/05/2021

`Last Commit: FrontEnd` [4af14cd](https://github.com/Leanderson-Coelho/translucent-2021/tree/4af14cdd36a9545a40c6169c6c75db22f2e81742)

- **FrontEnd Development**: Starting frontend tests. Problems with Test Suits on render components without redux Provider.

- **FrontEnd Development**: Searching approaches to mock redux provider store. Overriding render method of React Testing Lib to work with test and redux provider

- **FrontEnd Development**: Adding test to Catalog component with mock and wait for update state

`Last Commit: BackEnd` [4887c0d](https://github.com/Leanderson-Coelho/translucent-2021/commit/4887c0d62914fcd74505b74351dbd0bf67bd36b4)

- **BackEnd Development**: Adding Backend tests

#### 09/04/2021

`Last Commit: FrontEnd` [90d4b2e](https://github.com/Leanderson-Coelho/translucent-2021/tree/90d4b2ea0e40e00ca5bddc4a3d534b73fd2faad5)

- **FrontEnd Development**: Adding configuration to sync redux with local storage (save theme and language preferences).

- **FrontEnd Development**: Adding redux middleware saga for async requests integration.

- **FrontEnd Development**: Creating generic Feedback error component.

- **FrontEnd Development**: Adding sorting to catalog list and autocomplete to search bar using RxJs.

`Last Commit: BackEnd` [d6721a2](https://github.com/Leanderson-Coelho/translucent-2021/tree/d6721a21dff0b5de06389e42a9f2051249f4322b)

- **BackEnd Development**: CORS origin configuration.

#### 09/03/2021

`Last Commit: FrontEnd` [cff72a0](https://github.com/Leanderson-Coelho/translucent-2021/tree/cff72a0f413464f7fd6c001a59bc4666be5c2cfa)

- **FrontEnd Development**: Adding a new configuration for breadcrumb i18n.

- **FrontEnd Development**: Problems with new set i18n idiom.¹

- **FrontEnd Development**: Configuring App (Main component) to define i18n (solution¹).

#### 09/02/2021

`Last Commit: FrontEnd` [6cf5456](https://github.com/Leanderson-Coelho/translucent-2021/tree/6cf5456d7ce632656b2b091a3c7df5f662fdc500)

- **FrontEnd Development**: Adding App state with redux.

- **FrontEnd Development**: Refactoring files styles.

- **FrontEnd Development**: Refactoring catalog list from flexbox to Grid.

`Last Commit: BackEnd` [db79726](https://github.com/Leanderson-Coelho/translucent-2021/tree/db79726269225e103ac46f3e6db6140599fa58dd)

- **BackEnd Development**: Adding handler validators for Hibarnate exception.

- **BackEnd Development**: Project configurations: base path.

- **BackEnd Development**: Adding manual validations for Game.

#### 09/01/2021

`Last Commit:` [cc8eae0](https://github.com/Leanderson-Coelho/translucent-2021/tree/cc8eae0c6f9953d51ae89c3a811af4de8f94f7d3)

- **BackEnd Development**: Project creation. Mongo Database configuration and starting a new Container Docker.

- **BackEnd Development**: Problems with validations without JPA. Adding Hibernate dependency.

- **BackEnd Development**: Validators working, but them need a handler.

#### 08/31/2021

`Last Commit:` [af0e455](https://github.com/Leanderson-Coelho/translucent-2021/tree/af0e45594b871a559d1bc3cadd93859e9875edab)

- **FrontEnd Development**: Adding form validation and error feedback.

- **FrontEnd Development**: Trying validate manually one field with formik, don't work. Solutions searching, success using 'when' of yup.

- **FrontEnd Development**: Updating Catalog, adding floating button.

#### 08/30/2021

`Last Commit:` [4be935e](https://github.com/Leanderson-Coelho/translucent-2021/tree/4be935edf136a228a8870f233e17effe8ba6d526)

- **FrontEnd Development**: Starting Form page with Matirial UI Text Fields.

- **FrontEnd Development**: Problems with theming in the Text Fields.

- **FrontEnd Development**: Overriding Material UI theme config for Text Fields.

#### 08/29/2021

`Last Commit:` [545ce89](https://github.com/Leanderson-Coelho/translucent-2021/tree/545ce8961da5b27275ab9387584bc2dc31d3fe2f)

- **FrontEnd Development**: Building GameCard component style.

- **FrontEnd Development**: Adding GameCard props for render data in template.

- **FrontEnd Development**: Updating Catalog page for render GameCard list grid.

#### 08/28/2021

`Last Commit:` [c8e6774](https://github.com/Leanderson-Coelho/translucent-2021/tree/c8e67742cc4a96b35b8c7be565518e90aa1572e1)

- **FrontEnd Development**: Firsts components, starting first page with template component.

- **FrontEnd Development**: Dark Theme configuration and test using Material UI.

- **FrontEnd Development**: Search Input component style made.

#### 08/27/2021

`Last Commit:` [5bea0bb](https://github.com/Leanderson-Coelho/translucent-2021/tree/5bea0bb417d018e7ae09268a83e6856cc7b567de)

- **FrontEnd Development**: Project creation and configurations: git and files organizations.

- **FrontEnd Development**: FrontEnd Architecture Organization: frontend packages organization, code quality and formatting configurations (prettier + eslint) and first essentials libraries.

- **FrontEnd Development**: Starting Catalog feature configuring routes and creating components.

#### 08/26/2021

- **Documentation**: Registering all requirements in a [Requirements Specification Document](https://docs.google.com/document/d/1TRdA4pVpm0aHK1ijPvaXK--YxASX1PJ1Eu3JnZIyg9w/edit?usp=sharing)

- **Planning**: Planning each step of development, what's coming first: FrontEnd or BackEnd, dependencies, UI specifications and others. [Trello Planning](https://trello.com/b/vQCrBBFg/tcinc-frontend-backend-assignment).

- **UI Specification**: Screens especification on [Figma](https://www.figma.com/file/X1gmSa5GvmArgXExC3kJ7t/Requirements-Specification-Document?node-id=0%3A1).
