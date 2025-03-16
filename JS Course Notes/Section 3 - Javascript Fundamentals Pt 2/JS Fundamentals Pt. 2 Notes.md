# [16/03/2025] NOTES


# What is Strict Mode?

- Strict mode is a literal expression that will prevent devs for making some mistakes, i.e. using undeclared variables
- You can use Strict mode in a local scope as well.

# Why Strict Mode?

- To make it easier to write "secure" JavaScript.
- It also changes "bad syntax" previously accepted by JS into ACTUAL ERRORS
- Basically strict mode will make finding and fixing code bugs easier by throwing typical errors as expected of other programming languages like Java.
# Activating Strict Mode

Strict Mode Keyword:

```
'use strict'
```

**NOT** allowed in strict mode:

```
// Will throw an error:

x = 3.14; // <- undeclared

```
