## Getting Started

#### Clone repository and rename

```shell
git clone https://github.com/lpndev/nextjs-boilerplate.git
mv nextjs-boilerplate [project-name]
cd [project-name]
```

#### Initialize Git & first commit (optional)

```shell
rm -rfv .git && git init
git add . && git commit -m "initial commit"
```

#### Install dependencies

```shell
bun install
bun update
```

#### Initiate project

```shell
bun run dev
```

## Optional steps

#### Check code

```shell
bun run format
bun run lint
```

#### Build locally

```shell
bun run build
bun run start
```

## License

Licensed under the [MIT](https://github.com/lpndev/nextjs-boilerplate/blob/main/LICENSE) license.
