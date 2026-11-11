# Contributing to Favic

Thanks for your interest in Favic. This project follows an **issue first, then PR** workflow. Please do not open a pull request for something that has not been approved in an issue.

## The workflow

1. **Open an issue first.** Describe the bug, feature or improvement.
2. **Wait for approval.** The maintainer ([@JesseJohn7](https://github.com/JesseJohn7)) will reply. If the idea is approved, the issue will be labelled `approved` and assigned to you.
3. **Make your changes** and open a pull request that links the issue (for example `Closes #12`).
4. **Wait for review.** If the PR is accepted, it will be merged. If changes are needed, you will be asked to update it.

Pull requests without an approved issue may be closed without review. This is not personal. It saves everyone's time.

## Step 1: Open an issue

Before opening one, search the existing issues to make sure it has not been reported already.

**For a bug, include:**
- What you ran (for example `npx favicraft public/logo.png public`)
- What you expected and what happened instead
- Your OS, Node version and browser (if it is the web tool)
- The image type and size you used
- Any error message or screenshot

**For a feature or improvement, include:**
- The problem you want solved
- Your proposed solution
- Any alternatives you considered

Then wait. Please do not start work until the issue is approved.

## Step 2: Set up the project

1. Fork the repository and clone your fork.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Create a branch from `main` named after the issue:

   ```bash
   git checkout -b fix/12-short-description
   ```

   Use `fix/`, `feat/` or `docs/` as the prefix.

## Step 3: Make your changes

- Keep the change focused on the approved issue. One issue, one PR.
- Match the existing code style and file structure.
- Keep the page responsive. Check small phones, tablets and desktop.
- Do not add new dependencies without discussing it in the issue first.
- Favic is private by design. Images must never be uploaded to a server, so please do not add network requests that send user images anywhere.
- Test both the CLI (`npx favicraft ...`) and the web tool if your change touches them.

## Step 4: Open a pull request

1. Push your branch to your fork.
2. Open a PR against `main`.
3. In the description, include:
   - `Closes #<issue number>`
   - A short summary of what changed and why
   - Screenshots or a short recording for any visual change
   - How you tested it

Use a clear title, for example `fix: handle SVG input with no viewBox`.

## What happens next

- The maintainer will review your PR and may ask for changes.
- Once it is accepted, it will be merged into `main`.
- Please be patient. Reviews happen when time allows.

## Code of conduct

Be respectful and constructive. Harassment, personal attacks and spam are not tolerated and may result in a ban from the repository.

## Questions

If you are unsure whether something is worth an issue, open one and ask. Thanks for helping make Favic better.