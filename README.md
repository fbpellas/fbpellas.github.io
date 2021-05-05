# English Pronunciation by Faith Pellas

Deployed on [GitHub pages](https://fbpellas.github.io/), support for desktop only at the moment.

## Development

### Setup

- Clone the repository with `git clone https://github.com/fbpellas/fbpellas.github.io.git`
- Go into the repository (e.g. with `cd`)
- Run `npm i` to install the dependencies

### Start

- To run it locally, run `npm start`, it has hot reloading
- To run the test suite (no need to run command above), run `npm test`

### Deploy

- Commit and push your changes to `main` branch
- Then run `npm run deploy`
- It will create a commit in `master` branch

### Contribute

- This project is considered complete from a content perspective but the code quality can drastically be improved. For instance by breaking `App.tsx` file down into several components, as well as turning the `renderSomething` functions into their own components, TypeScript typings can be used more frequently, etc. Unit tests are lacking as well. Long story short it has been implemented quickly as a hackathon. For all these reasons, only [Issues](https://github.com/fbpellas/fbpellas.github.io/issues) about the actual website (e.g. content, bugs, etc.) are welcomed. No issues about the code is welcomed yet. Thank you!
