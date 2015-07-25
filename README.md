# "You Must Be So Good At Math!"
A Talk About Functional Programming (in JavaScript)

<a href='http://twitter.com/legittalon'>@legittalon</a>



## What is a monad?

<span class="fragment">A monoid in the cateogory of endofunctors.</span>
<span class="fragment">aka a burrito</span>
<span class="fragment">duh.</span>

> duh, duh. 



## How does a dev become a mathematician?

<span class="fragment">Use pure functions.</span>

> Functional programming is all derived from using only pure functions.



# Purity

A pure function always returns the same output when given the same input and
has no side-effects.

> So what does purity give us?


## Familiar friends

Getting to know them for real.

> We'll look at familiar functions and figure out what they mean to us as a 
  mathematician.


```js
Math.random
```
> Is this a pure function? It isn't.


```js
console.log
```
> Not pure. It changes the world! Hella side-effects


```js
Array.prototype.unshift
Array.prototype.push
```
> Nope, it has the side-effect of mutating the array. 


```js
Array.prototype.slice
```
> Totally pure. Returns a **new** array leaving the old one unmodified.


```js
+
```
> Isn't that a binary operator? Nah friend, it's a pure function.


## Purity gives us

<span class="fragment">immutability!</span>
> Immutability finds its genisis in purity.



# How to write a function

Developer mathematician poet.

> Prose for days.
