# Javascript Exercises

A collection of exercises to practice various Javascript concepts.

## Getting Started

```
$ git clone https://github.com/turingschool/javascript-exercises.git
$ cd javascript-exercises
```

## Folder structure

Exercises are grouped by concept. Some concepts will have just one exercise, and will have a `/lib` and `/test` folder. Some will have multiple exercises, each with their own `/lib` and `/test`. Some will have many test files in the `/test` folder.

Each sub-directory has its own README with more info. You'll get the hang of it.

## Running the Tests

These use the browser based testing framework Mocha, along with Chai assertions. You'll run the test to validate your answer to each exercise.

```
$ open concept/exercise/test/test-file.html
```

e.g.

```
$ open objects-and-methods/exercise1/test/index.html
```

## Exercises

* mythical-creatures
* objects-and-methods


## Getting Started

```
npm install --global mocha
```

in your command line, run `mocha`, and you should see something like this:

```
$ mocha
  Array methods
    1) should remove duplicates from the array


  0 passing (6ms)
  1 failing

  1) Array methods should remove duplicates from the array:
     ReferenceError: getUniqueNumbers is not defined
      at Context.<anonymous> (test/Arrays.test.js:15:20)

```

Open this all up in your editor, head over to `test/Arrays.test.js`, and work on making the tests pass!

