# Javascript Exercises

A collection of exercises to practice various Javascript concepts.

## Getting Started

```
$ git clone https://github.com/turingschool/javascript-exercises.git
$ cd javascript-exercises
```

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

Run one file at a time, with:

```
mocha path/to/file.test.js
```


# Recommended order

Start with `Arrays.test.js`. Pass this file path to the `mocha` command-line tool with:

```
 mocha test/Arrays.test.js
```

Should see something like this:

![array tests](/images/arrays_example.jpg)