preact-stream-builder
=====================

Inspired by [flutter's `StreamBuilder`][1], a component that render something listening a [`Subscribable`][2] object.

## Installation
```bash
npm install --save preact-stream-builder
```

## Arguments
- `stream`: A [Subscribable][2] object.
- `builder`: (snapshot: { data, state }) => VNode
  - `data`: The data received from the stream subscription or the `initialData`
  - `state`: One of `active`, `done`, `none`, `values`, `waiting`
- `initialData`: _(Optional)_ The data passed down to the `builder` until the stream emit something.

## Example
```jsx
import { StreamBuilder } from 'preact-stream-buidler`;

<StreamBuilder
    stream={interval(5000).pipe(take(4))}
    initialData={'Hello wold'}
    builder={({ data, state }) => (<p>{data}, {state}</p>)}
/>
```

## License
MIT

[1]: https://api.flutter.dev/flutter/widgets/StreamBuilder-class.html
[2]: https://rxjs.dev/api/index/interface/Subscribable
