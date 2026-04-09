# Setup do projeto

Este documento contém as instruções para preparar o ambiente, instalar dependências, executar o site em modo local e fazer o build para produção.

## Pré-requisitos

- macOS ou Windows
- Node.js 20 ou superior
- npm (incluído com Node.js)
- AWS CLI configurada se você for deployar para S3/CloudFront

### Erro comum

Se você receber:

```bash
zsh: command not found: npm
```

ou

```powershell
npm : O termo 'npm' não é reconhecido como o nome de um cmdlet
```

significa que o Node.js não está instalado ou não está no `PATH` do terminal.

### Como instalar o Node.js no macOS

1. Instale o Homebrew, se ainda não tiver:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Instale o Node.js:

```bash
brew install node
```

3. Verifique a instalação:

```bash
node -v
npm -v
```

### Como instalar o Node.js no Windows

1. Baixe o instalador oficial em:

https://nodejs.org/

2. Execute o instalador e siga os passos.
3. Reinicie o terminal ou PowerShell.
4. Verifique a instalação:

```powershell
node -v
npm -v
```

### Alternativa no Windows: instalar com winget

Se você usar Windows 10/11 e tiver o `winget` instalado:

```powershell
winget install OpenJS.NodeJS
```

### Alternativa no Windows: instalar com Chocolatey

Se você tiver o Chocolatey instalado:

```powershell
choco install nodejs-lts -y
```

### Usando um gerenciador de versões no macOS

Se preferir, use o `nvm`:

```bash
brew install nvm
mkdir -p ~/.nvm
```

Adicione ao seu `~/.zshrc` ou `~/.bash_profile`:

```bash
export NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && . "/opt/homebrew/opt/nvm/nvm.sh"
```

Em seguida:

```bash
nvm install 20
nvm use 20
```

## Executar localmente

1. Abra o terminal.
2. Entre na pasta do projeto:

```bash
cd portifolio_joaobarreto
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

5. Abra no navegador:

```text
http://localhost:4173
```

## Build de produção

Execute:

```bash
npm run build
```

Os arquivos compilados serão gerados em `dist/`.

## Deploy para AWS S3

O deploy automático está configurado em `.github/workflows/deploy-s3.yml`.

Configure os seguintes segredos no GitHub:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`
- `S3_BUCKET`
- `CLOUDFRONT_DISTRIBUTION_ID` (opcional)

O workflow faz:

- build do site
- sincronização de `dist/` para o bucket S3
- invalidação de cache no CloudFront quando configurado
