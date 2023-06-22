# Vector2

Class that represents a 2-dimensional vector.

## Overview

The Vector2 class allows working with vectors in a 2D space. It provides methods to perform common operations such as addition, subtraction, multiplication, division, calculating magnitude, normalization, dot product, distance, and angle between vectors.

## Usage

To use the Vector2 class, you need to import it in your code:

```javascript
import { Vector2 } from 'path/to/vector2.js';
```

### Creating a new vector

You can create a new vector using the class constructor:

```javascript
const vector = new Vector2(x, y);
```

Here, `x` and `y` are the values of the x and y coordinates of the vector, respectively. If no values are provided, they will default to 0.

### Example Usage

Here's an example of how to use the Vector2 class to perform common operations:

```javascript
// Create a new vector
const vector = new Vector2(3, 4);

// Subtract a given vector
const otherVector = new Vector2(1, 2);
vector.sub(otherVector);
console.log(vector); // Output: Vector2 { x: 2, y: 2 }

// Multiply by a number
vector.mult(2);
console.log(vector); // Output: Vector2 { x: 4, y: 4 }

// Divide by a number
vector.div(2);
console.log(vector); // Output: Vector2 { x: 2, y: 2 }

// Calculate the magnitude
const magnitude = vector.mag();
console.log(magnitude); // Output: 2.8284271247461903

// Normalize the vector
vector.normalized();
console.log(vector); // Output: Vector2 { x: 0.7071067811865475, y: 0.7071067811865475 }

// Calculate the dot product with another vector
const anotherVector = new Vector2(1, 1);
const dotProduct = vector.dot(anotherVector);
console.log(dotProduct); // Output: 1.4142135623730951

// Calculate the distance to another vector
const distance = vector.distance(anotherVector);
console.log(distance); // Output: 0.9999999999999998

// Calculate the angle with another vector
const angle = vector.angle(anotherVector);
console.log(angle); // Output: 0.7853981633974483 (in radians)
```

## API

### Constructor

#### `new Vector2(x = 0, y = 0)`

Creates a new Vector2 object.

- `x` (number): The x value of the vector. Defaults to 0.
- `y` (number): The y value of the vector. Defaults to 0.

### Methods

#### `sub(vector)`

Subtracts a given vector from this vector.

- `vector` (Vector2): The vector to subtract.

#### `mult(n)`

Multiplies this vector by a given number.

- `n` (number): The number to multiply by.

#### `div(n)`

Divides this vector by a given number.

- `n` (number): The number to divide by.

#### `mag()`

Calculates the magnitude or length of this vector.

- Returns: The magnitude of the vector.

#### `normalized()`

Normalizes this vector, making it a unit vector.
If the magnitude of the vector is greater than 0,

 it divides the vector by its magnitude.

#### `dot(vector)`

Calculates the dot product between this vector and another given vector.

- `vector` (Vector2): The vector to calculate the dot product with.
- Returns: The dot product between the two vectors.

#### `distance(vector)`

Calculates the distance between this vector and another given vector.

- `vector` (Vector2): The vector to calculate the distance to.
- Returns: The distance between the two vectors.

#### `angle(vector)`

Calculates the angle between this vector and another given vector.

- `vector` (Vector2): The vector to calculate the angle with.
- Returns: The angle in radians between the two vectors.
