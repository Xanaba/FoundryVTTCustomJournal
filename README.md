# Terminal Journals

A Foundry VTT v13 module that transforms your journals into old-school computer console terminals with authentic CRT aesthetics.

![Terminal Journals](https://img.shields.io/badge/Foundry-v13-informational)

## Features

- **Retro Terminal Aesthetics**: Classic green-on-black or amber-on-black terminal appearance
- **CRT Effects**: Authentic scanline overlay and screen glow effects
- **Monospace Fonts**: Period-appropriate VT323 and Share Tech Mono fonts
- **Custom Styling**: Terminal-themed scrollbars, buttons, and UI elements
- **Boot-Up Animation**: Optional boot sequence when opening journals
- **Fully Configurable**: Easy-to-use settings to customize your terminal experience
- **Multiple Themes**: Choose between classic green or vintage amber displays

## Installation

### Method 1: Manifest URL (Recommended)

1. Open Foundry VTT and navigate to the **Add-on Modules** tab
2. Click **Install Module**
3. Paste the following manifest URL:
   ```
   https://raw.githubusercontent.com/Xanaba/FoundryVTTCustomJournal/main/module.json
   ```
4. Click **Install**

### Method 2: Manual Installation

1. Download the latest release from the [releases page](https://github.com/Xanaba/FoundryVTTCustomJournal/releases)
2. Extract the contents to your Foundry `Data/modules/terminal-journals` folder
3. Restart Foundry VTT
4. Enable the module in your world's module settings

## Usage

### Enabling the Module

1. Launch your Foundry VTT world
2. Go to **Settings** → **Manage Modules**
3. Enable **Terminal Journals**
4. Save and reload

Once enabled, all journals will automatically display with the terminal theme!

### Configuration Options

Access module settings via **Settings** → **Configure Settings** → **Module Settings**:

- **Enable Terminal Mode**: Toggle the terminal appearance on/off for all journals
- **Terminal Color Theme**: Choose between:
  - **Classic Green**: Traditional green phosphor terminal
  - **Amber/Orange**: Vintage amber monochrome display
- **CRT Scanlines Effect**: Enable or disable the scanline overlay

### Quick Toggle

GM users can quickly toggle Terminal Mode on/off using the terminal icon button in the journal header.

## Customization

### Advanced Styling

You can further customize the appearance by editing `styles/terminal.css`. Key variables and classes:

- `.terminal-mode`: Main terminal styling class
- `.terminal-amber`: Amber color theme variant
- Adjust glow effects, scanline intensity, and colors to your preference

### Adding Custom Colors

To add your own color theme, edit `terminal.css` and create a new class similar to `.terminal-amber`, then update `terminal.js` to include your theme in the settings.

## Compatibility

- **Foundry VTT Version**: v13 (minimum and verified)
- **System Compatibility**: Universal - works with all game systems
- **Module Conflicts**: Should work with most other modules. Report any conflicts as issues.

## Features in Detail

### Visual Effects

- **Phosphor Glow**: Text has an authentic CRT phosphor glow effect
- **Screen Curvature**: Subtle box-shadow creates the illusion of a curved CRT screen
- **Scanlines**: Animated scanlines for authentic CRT appearance
- **Flicker Effect**: Very subtle screen flicker animation
- **Terminal Border**: Glowing green/amber border around journal windows

### Typography

- **VT323**: Primary font for that classic terminal look
- **Share Tech Mono**: Alternative monospace font for code blocks
- **Text Shadow**: Glowing text effect for enhanced readability and authenticity

### UI Elements

All journal UI elements are themed:
- Headers and titles
- Buttons and controls
- Scrollbars
- Input fields
- Links (styled in cyan with glow)
- Tables and lists
- Images (bordered with terminal glow)

## Troubleshooting

### Journals Don't Look Like Terminals

1. Verify the module is enabled in your world
2. Check that "Enable Terminal Mode" is toggled on in module settings
3. Try refreshing your browser (F5)
4. Ensure you're using Foundry VTT v13

### Performance Issues

If you experience slowdowns:
1. Disable "CRT Scanlines Effect" in settings
2. Close unused journal windows
3. Check browser console for errors

### Styling Conflicts

If another module's styling conflicts:
1. Try disabling other UI-modifying modules one at a time
2. Report the conflict as an issue on GitHub

## Development

### Project Structure

```
terminal-journals/
├── module.json           # Module manifest
├── README.md            # This file
├── scripts/
│   └── terminal.js      # Main module logic
└── styles/
    └── terminal.css     # Terminal styling
```

### Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Credits

- **Fonts**: VT323 and Share Tech Mono from Google Fonts
- **Inspiration**: Classic terminal systems, retro computing aesthetics
- **Built for**: Foundry VTT v13

## License

This module is available under the MIT License. See LICENSE file for details.

## Support

- **Issues**: [GitHub Issues](https://github.com/Xanaba/FoundryVTTCustomJournal/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Xanaba/FoundryVTTCustomJournal/discussions)

## Changelog

### v1.0.0 (Initial Release)
- Terminal appearance for all journals
- Green and amber color themes
- CRT scanline effects
- Boot-up animation
- Configurable settings
- Custom styled UI elements

---

**Enjoy your retro computing experience in Foundry VTT!** 🖥️✨
