# Pinky

## Raison d'être
Historic NodeJS libraries are mostly callback-based. 
Modern NodeJS programs rely more heavily on `Promise` construct for asynchronous 
constructs. This library aims to expose `Promise`-based file system calls so that
it all works nicely together. 

## The library
It's actually just one function built out of `fs.readFile` and Kris Kowal's excellent `q` 
library for `Promise` management.

What it does is expose a `Promise`-based `readFile` function so that I can read file contents
and keep on working with the contents and thinking in terms of `Promises`.

## The library

I might add to that library in the future if there are patterns emerging from the code I write.
I might want to better segment the interface exposed by `Pinky`  with sub-namespaces like 
`Pinky.fs`, `Pinky.http`. I'll have to check NodeJS's best practices in more depth to see if that
makes sense.

## TODO

Explore `BaconJS` and `HighlandJS`, as was mentioned in Pamela Selle's talk at StrangeLoop.
