# AudioClip Class

The **AudioClip** class is a part of the Cuarzo 2D Engine and is responsible for managing and playing audio clips. It provides methods to play, stop, and pause audio clips, as well as additional features like random playback.

## Usage

Create an instance of the AudioClip class by passing audio resources as arguments to the constructor. Then, you can use the available methods to control the playback of audio clips.

```js
// Create an instance of AudioClip
const audioClip = new AudioClip(
  'audio/clip1.mp3',
  'audio/clip2.mp3',
  'audio/clip3.mp3'
)

// Play a random audio clip
audioClip.play()

// Stop a specific audio clip
audioClip.stop(1)

// Pause all currently playing audio clips
audioClip.pause()
```

## API

### Constructor

The AudioClip class constructor accepts audio resources as arguments and initializes the audio clips.

### Methods

- **play():** Plays a random audio clip.
- **stop(index):** Stops and resets the audio clip at the specified index.
- **pause():** Pauses all currently playing audio clips.

## Contributing

Contributions to the Cuarzo 2D Engine are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [official GitHub repository.](https://github.com/gabriedev/cuarzo)

## License

This documentation and each page it contains are published under the terms of the [Creative Commons Attribution 3.0 License (CC BY 3.0)](https://creativecommons.org/licenses/by/3.0/), with attribution to "César Leañez and the Cuarzo community".

By contributing to the documentation in the GitHub repository, you agree that your changes will be distributed under this license.
