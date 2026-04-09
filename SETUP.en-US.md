# Project Setup

This document contains the instructions to prepare the environment, install dependencies, run the site locally, and build for production.

## Prerequisites

- macOS or Windows
- Node.js 20 or higher
- npm (included with Node.js)
- AWS CLI configured if you plan to deploy to S3/CloudFront

### Common error

If you receive:

```bash
zsh: command not found: npm
```

or

```powershell
npm : The term 'npm' is not recognized as the name of a cmdlet
```

it means Node.js is not installed or not available in your terminal `PATH`.

### How to install Node.js on macOS

1. Install Homebrew if not already installed:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Install Node.js:

```bash
brew install node
```

3. Verify the installation:

```bash
node -v
npm -v
```

### How to install Node.js on Windows

1. Download the official installer from:

https://nodejs.org/

2. Run the installer and follow the setup steps.
3. Restart your terminal or PowerShell.
4. Verify the installation:

```powershell
node -v
npm -v
```

### Alternative on Windows: install with winget

If you use Windows 10/11 and have `winget` installed:

```powershell
winget install OpenJS.NodeJS
```

### Alternative on Windows: install with Chocolatey

If you have Chocolatey installed:

```powershell
choco install nodejs-lts -y
```

### Using a version manager on macOS

If you prefer, use `nvm`:

```bash
brew install nvm
mkdir -p ~/.nvm
```

Add to your `~/.zshrc` or `~/.bash_profile`:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"
```

Then install Node.js:

```bash
nvm install 20
nvm use 20
```

## Run locally

1. Open the terminal.
2. Enter the project folder:

```bash
cd portifolio_joaobarreto
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the browser:

```text
http://localhost:4173
```

## Production build

Run:

```bash
npm run build
```

Production files will be generated in `dist/`.

## Deploy to AWS S3

The deployment workflow is configured in `.github/workflows/deploy-s3.yml`.

Set the following GitHub secrets:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID` (optional)

The workflow will:

- build the site
- sync `dist/` to the S3 bucket
- invalidate CloudFront cache if configured
