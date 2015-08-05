# "You Must Be So Good At Math!"
A Talk About Functional Programming (in JavaScript)

<a href='http://twitter.com/legittalon'>@legittalon</a>

<a href='http://theghostin.me/you-must-be-so-good-at-math/#/'>
  theghostin.me/you-must-be-so-good-at-math
</a>



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
> Isn't that a binary operator? Nah friend, it's a pure function kinda


## Purity gives us

<span class="fragment">immutability!</span>
> Immutability finds its genisis in purity.



# How to write a function

Developer. Mathematician. Poet.

> Prose for days.


## Take the data last 

```js
const updateDog = (updates, dog) => /* ... */ 
```


## Never mutate

```js
const updateDog = (updates, dog) => extend({}, dog, updates)
```


## Do one thing well

```js
const feedDog = dog => updateDog({isHungry: false}, dog)
const walkDog = dog => updateDog({isTired: true}, dog)
```


## Compose

```js
const feedAndWalk = dog => walkDog(feedDog(dog))
```


## Utilities

ramda, lodash-fp

> Be lazy, only write functions that aren't written and can't be derived via
  composition.


```js
import {
  compose,
} from 'ramda'

const dogApp = compose(
  walkdog,
  feedDog,
  petDog,
)

dogApp({isHungry: true, isTired: false, isPetted: false})
  // => {isHungry: false, isTired: true, isPetted: true}
```
> pipes on pipes on pipes 



# Modeling effects

But I want to _do_ stuff.

> Let's make purity do stuff.


## Understanding map

```js
const dogs = [/* ... */]

dogs.map(dogApp) // => A description of the dogs: petted, fed and walked.

dogs.map(dogApp) === [
  dogApp(/* dog */),
  dogApp(/* dog */),
  dogApp(/* dog */),
]
```


```js
maybeVal.map(fn)    // => Maybe.Just(fn(val))      || Maybe.Nothing()

eitherVal.map(fn)   // => Either.Right(fn(val))    || Either.Left(message)

promiseVal.then(fn) // => Promise.resolve(fn(val)) || Promise.catch(e)
```
> map applies a function to a value inside of a type
  also lol @ promise good one js 


## Understanding ap

```js
const add = a => b => a + b
const add1 = Just(1).map(add) // => Just(add(1))
add1.ap(add(1)(4)) // => Just(5)
```
> ap applies the value inside of the type to the given argument


## Examples
> [examples/fullName.js](examples/fullName.js)



# Fantasy Land
> https://github.com/fantasyland/fantasy-land



# DIY 
> [examples/StringPlus.js](examples/StringPlus.js) && [examples/stringtastic.js](examples/stringtastic.js)



# Thank You

<a href='http://twitter.com/legittalon'>@legittalon</a>

[https://github.com/LegitTalon/you-must-be-so-good-at-math](https://github.com/LegitTalon/you-must-be-so-good-at-math)



# Links

- [Folktale](https://github.com/folktale/folktale)
- [Hey Undescore, You're Doing It Wrong!](https://www.youtube.com/watch?v=m3svKOdZijA&feature=youtu.be)
- [A Monad in Practicality: First-Class Failures](http://robotlolita.me/2013/12/08/a-monad-in-practicality-first-class-failures.html)
