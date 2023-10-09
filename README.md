<p align="center">
  <span>Animals</span>
</p>

Animals is a project created to allow users to search for animals. The animals are obtained through the [faker.js library](https://github.com/faker-js/faker). The UI/UX is based on Google Search.

#### Project Architecture:

This project is based on [Clean Architecture](https://www.freecodecamp.org/news/a-quick-introduction-to-clean-architecture-990c014448d2/) concepts. Each folder has its rules and doesn't have a direct dependency, then has a decoupling to turn easy maintenance. For example, the components don't have requests for data, there is a specific folder for that, to make it easy for you to change the way to get the data in the future.

The structure of the application code is robust and scalable, this makes it easy to onboard new resources by defining a common approach for the development process.

The structure is based on three rules:

<ul>
  <li>
    All folders and files will be in the `/app` directory because this directory accepts colocation and it’s different from the `/pages`  directory (old versions of Next.js) which was only for routing purposes.
  </li>
  <li>
    All the non-routes folders will be Private Folders by prefixing their name with an underscore. This tells the Next router that this folder is not part of the routes.
  </li>
  <li>
    Using a Next 13 feature called Route Groups. All routes are wrapped in a folder with parenthesis around the name so that it shows the folder is for organizational purposes (grouping folders) and should not be included in the route’s URL path.
  </li>
</ul>

Using these principles, the project has all required folders in the `/app` directory, and with Route Groups all routes are grouped in a (routes) folder, and with Private Folders by prefixing non-route folders with an underscore, everything is isolated.

The folders in the project have rules:

<ul>
  <li>
    <strong> Assets: </strong> contains all images, CSS files, font files, etc. Pretty much anything that isn’t code-related will be stored in this folder.
  </li>
  <li>
    <strong> Components: </strong> Components use Atomic Design Methodology to improve a vision of how the interface and elements are connected also promoving scalability. All the components should be exported from index.ts for a single access point.
  </li>
  <li>
    <strong> Hooks: </strong> Code that repeats in two or more files, should stay in this folder to avoid redundancy and facilitate maintainability.
  </li>
  <li>
    <strong> Services: </strong> It's to manage all data requests. All network calls should stay in this folder. If you need you should transform the payload here.
  </li>
</ul>

#### Tests:

This project has coverage of tests using the Cypress test tool, before committing you should run the tests using `npm run cypress:open` and create tests if a new feature has been implemented.

To identify a component using Cypress you should use `data-cy` attribute to isolate it and avoid getting the wrong element. [See the other best practices.](https://docs.cypress.io/guides/references/best-practices)

#### Run this project:

The Node version recommended is `18.18.0`

Install the dependencies: `npm install`.

Run the project: `npm run dev`.

#### To Contribute:

This project uses [git-flow](https://danielkummer.github.io/git-flow-cheatsheet) to model branches, which is needed to organize new features and code changes so the team can work together easily.

To start a new feature, use: `git flow feature start NEWFEATURE`.

This project uses cz-conventional-changelog to standardize commits according to the Conventional Commits methodology. To commit your feature, use: `cz`.

When finishing the implementation, use: `git flow feature publish MYFEATURE`.

Afterward, open a pull request and merge it in the master branch.
