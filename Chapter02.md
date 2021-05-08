# Chapter 2 A Few More Words: Advanced Node and NPM

## Auditing Package Security
Running `npm audit` will scan your `package.json` file (or global packages if
you use `-g`) and submit the list of dependencies to the default NPM registry
requesting a report on any known vulnerabilities in them. This report will alo
include information on how to remediate.

The command `npm audit fix` will cause NPM to update any vulnerable packages
with the newest available version that hasn't had the vulnerability reported in
it.

If you'd like to see a detailed audit report: `npm audit --json` or
`npm audit --readable`

FInally, if you'd like to see what `npm audit fix` would do but without
literally doing it, you can use: `npm audit fix --dry-run`

## Deduplication and Pruning
One of the complaints you'll commonly see about NPM and Node is that the size
of the `node_modules` directory can balloon in a hurry.

The `npm dedup` command searches through the tree of packages in `node_modules`
and looks for opportunities where packages can be moved up the tree and shared
between dependencies, thereby reducing redundancy and saving space.

The command `npm prune` will examine the installed packages and look for any
that may no longer be needed. This typically happens when you uninstall
packages and especially if you've done a `dedup` at some point.

## Updating Packages
`npm update`

## Publishing/Unpublishing Packages
`npm login`

`npm publish`

`npm unpublish [<@scope>/]<package-name>[@<version>]`

## Node: Standard Modules
* File System (fs)
* HTTP and HTTPS (http and https)
* OS (os)
* Path (path)
* Process
* Query Strings (querystring)
* URL (url)
* Utilities (util)

