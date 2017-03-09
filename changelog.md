# v5.0
* **change** enforce using Errors in throws and when rejecting Promises
* **change** Changes to the flow mode (`miclint --flow`)
  * Functions must have return type annotation
  * Files must have a file annotation and it must always use the line version (`// @flow`)
  * Functions must have parameter type annotation
* **internal** Lint miclint!

# v4.1.2

* **bugfix** Allow multiple imports in flow mode (`miclint --flow`) to import flow types (`import type { foo } from 'bar';`)

# v4.1

* **feature** `miclint --flow` will now lint with specific lint rules

# 4.0
* **change** enforce ES6 import / exports
* **change** enforce display names on react components
* **change** enforce presence of keys on react iterator children
* **change** enforce presence of dangling commas
