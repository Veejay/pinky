# Pinky

## Raison d'être
Those are small exercises to be better acquainted with server-side / NodeJS programming.
The first thing that I found kind of strange with server-side JS is that unlike using 
that very same language in the browser, the programming interfaces and guidelines are 
not as well defined. The textbook NodeJS programs usually rely heavily on callbacks.

While this has helped tremendously with organizing programs and think in an asynchronous
mindset, this doesn't really integrate smoothly with more recent Promise-based libraries
and code in general.

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
