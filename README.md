This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running Tests

To run Cypress E2E tests:

```bash
npm run cypress:open
```

To run linter:

```bash
npm run lint
```

The project also uses pretter for formatting:

```bash
# To check
npx prettier . --check

# To fix/write
npx prettier . --write
```

## Some notes

### Tech Stack

Although Next.js would not be my go-to framework for such a small project, I decided to use it because of FFW's tech stack and also to try Next JS 13 (which I didn't use before) and the app router.
Typescript is my go-to language when it comes to Javascript, and React was a no-brainer as well.

I decided against Redux, although I would use it quite often, because I found Next.js's caching to be sufficient. With the SWAPI data it is basically the same result/ux with less code.
And since I wanted to save time, I opted out of Redux. Because of Next's builtin fetch functionality, I didn't use Axios (which was suggested in your email).

### Testing

In a real-world environment I would definitely test all components with unit tests and integration tests. An example of how I write tests can be found [here](https://github.com/EricLambrecht/react-timing-hooks/blob/main/integration-tests/useTimeout.test.tsx). Because I wanted to keep the time limit I only added one quick and dirty Cypress E2E test.

### If I had more time...

I would like to have expanded upon the app's features – because of the time limit (4h-8h) I had to make some cuts, though.
I would have liked to improve the caching even further (e.g. initially all movies are loaded, and upon clicking a single one, it is loaded again, because the url is different).
Of couse I would've added more views and data as well (for species, ships etc), but I thought it was not worth the time.
A better UX would also be desirable (maybe navigating from movie to movie via arrows or a slider), transitions from one view to another – images and animations would also be nice.

### Workflow

My workflow was as follows: First, I spent some time on the Next.JS setup, then I had a trial-and-error phase with redux (which I used initially), testing navigation concepts, and thinking about the ui-design/how to display the ui data in general. When I had some foundation I was happy with (after 2 hours or so), I started programming the views and components.
Unfortunately, I also spent quite some time on a nasty bug (see next section) which I wouldn't have expected at a project of this size, but oh well...

### `ConnectionClosed` error

In Chrome you may encounter an error which states `ConnectionClosed` that seems to occur randomly after the data has been fetched from the API. I found some info on it online.
It seems to be related to the [data fetching and streaming feature of Next.js](https://github.com/EricLambrecht/react-timing-hooks/blob/main/integration-tests/useTimeout.test.tsx) (with React's `<Suspense>` component). I came to this conclusion, because when I removed the `<Suspense>` components, it was gone, but since the bug is encountered quite rarely I wanted to keep it in for a better UX.
Some user's stated it can be fixed with a different Next.js version, but I didn't want to invest so much time in it. I'm sorry if you encounter this error. Reloading fixes it.

## Deployment on Vercel

I linked the repo to vercel, so it is deployed automatically. You can find the link on the repo's sidebar on github.
