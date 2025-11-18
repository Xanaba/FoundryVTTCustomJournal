/**
 * Terminal Journals Module
 * Transforms Foundry VTT journals into old-school computer console terminals
 */

// Module name constant
const MODULE_NAME = "terminal-journals";

// Configuration settings
let terminalSettings = {
  enabled: true,
  theme: "green", // green or amber
  scanlines: true,
  glowEffect: true
};

/**
 * Initialize the Terminal Journals module
 */
Hooks.once("init", () => {
  console.log("Terminal Journals | Initializing module...");

  // Register module settings
  game.settings.register(MODULE_NAME, "enabled", {
    name: "Enable Terminal Mode",
    hint: "Enable or disable the terminal appearance for all journals",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: value => {
      terminalSettings.enabled = value;
      refreshAllJournals();
    }
  });

  game.settings.register(MODULE_NAME, "theme", {
    name: "Terminal Color Theme",
    hint: "Choose the color theme for the terminal display",
    scope: "client",
    config: true,
    type: String,
    choices: {
      "green": "Classic Green",
      "amber": "Amber/Orange"
    },
    default: "green",
    onChange: value => {
      terminalSettings.theme = value;
      refreshAllJournals();
    }
  });

  game.settings.register(MODULE_NAME, "scanlines", {
    name: "CRT Scanlines Effect",
    hint: "Enable the CRT scanline overlay effect",
    scope: "client",
    config: true,
    type: Boolean,
    default: true,
    onChange: value => {
      terminalSettings.scanlines = value;
      refreshAllJournals();
    }
  });

  // Load saved settings
  terminalSettings.enabled = game.settings.get(MODULE_NAME, "enabled");
  terminalSettings.theme = game.settings.get(MODULE_NAME, "theme");
  terminalSettings.scanlines = game.settings.get(MODULE_NAME, "scanlines");

  console.log("Terminal Journals | Module initialized");
});

/**
 * Hook into journal sheet rendering
 */
Hooks.on("renderJournalSheet", (app, html, data) => {
  if (!terminalSettings.enabled) return;

  console.log("Terminal Journals | Applying terminal style to journal");

  // Apply terminal class to the journal window
  const journalElement = html.closest(".journal-sheet");
  if (journalElement) {
    applyTerminalStyle(journalElement);
  }

  // Also apply to the content area
  applyTerminalStyle(html[0]);

  // Add boot-up effect for new journals
  if (app._state === 1) { // First render
    addBootUpEffect(html[0]);
  }
});

/**
 * Hook into journal page rendering
 */
Hooks.on("renderJournalPageSheet", (app, html, data) => {
  if (!terminalSettings.enabled) return;

  console.log("Terminal Journals | Applying terminal style to journal page");

  const pageElement = html.closest(".journal-entry-page");
  if (pageElement) {
    applyTerminalStyle(pageElement);
  }

  applyTerminalStyle(html[0]);
});

/**
 * Apply terminal styling to an element
 */
function applyTerminalStyle(element) {
  if (!element) return;

  // Remove existing terminal classes
  element.classList.remove("terminal-mode", "terminal-amber");

  // Apply appropriate class based on theme
  if (terminalSettings.theme === "amber") {
    element.classList.add("terminal-mode", "terminal-amber");
  } else {
    element.classList.add("terminal-mode");
  }

  // Handle scanlines
  if (!terminalSettings.scanlines) {
    element.style.setProperty("--scanline-opacity", "0");
  } else {
    element.style.removeProperty("--scanline-opacity");
  }
}

/**
 * Add a boot-up effect to simulate terminal initialization
 */
function addBootUpEffect(element) {
  const contentArea = element.querySelector(".editor-content, .journal-page-content");
  if (!contentArea) return;

  // Store original content
  const originalContent = contentArea.innerHTML;

  // Create boot sequence
  const bootSequence = [
    "> SYSTEM BOOT SEQUENCE INITIATED...",
    "> LOADING JOURNAL DATABASE...",
    "> TERMINAL INTERFACE READY",
    "> _"
  ];

  // Temporarily replace content with boot sequence
  contentArea.innerHTML = "";
  contentArea.style.opacity = "0";

  // Fade in and show boot sequence
  setTimeout(() => {
    contentArea.style.transition = "opacity 0.3s";
    contentArea.style.opacity = "1";

    let lineIndex = 0;
    const bootInterval = setInterval(() => {
      if (lineIndex < bootSequence.length) {
        contentArea.innerHTML += bootSequence[lineIndex] + "<br>";
        lineIndex++;
      } else {
        clearInterval(bootInterval);
        // Restore original content after boot sequence
        setTimeout(() => {
          contentArea.style.opacity = "0";
          setTimeout(() => {
            contentArea.innerHTML = originalContent;
            contentArea.style.opacity = "1";
          }, 200);
        }, 500);
      }
    }, 150);
  }, 100);
}

/**
 * Refresh all open journals to apply new settings
 */
function refreshAllJournals() {
  // Refresh all rendered journal sheets
  for (let app of Object.values(ui.windows)) {
    if (app instanceof JournalSheet || app instanceof JournalPageSheet) {
      app.render(false);
    }
  }
}

/**
 * Add terminal-specific context menu options
 */
Hooks.on("getJournalSheetHeaderButtons", (app, buttons) => {
  if (!game.user.isGM) return;

  buttons.unshift({
    label: "Terminal Mode",
    class: "terminal-toggle",
    icon: "fas fa-terminal",
    onclick: () => {
      const newState = !terminalSettings.enabled;
      game.settings.set(MODULE_NAME, "enabled", newState);
      ui.notifications.info(`Terminal Mode ${newState ? "enabled" : "disabled"}`);
    }
  });
});

/**
 * Console welcome message
 */
Hooks.once("ready", () => {
  if (terminalSettings.enabled) {
    console.log(`
╔════════════════════════════════════════╗
║   TERMINAL JOURNALS MODULE LOADED      ║
║   Old School Console Mode: ACTIVE      ║
║   Theme: ${terminalSettings.theme.toUpperCase().padEnd(27)}║
╚════════════════════════════════════════╝
    `);
  }
});

// Export for debugging
window.TerminalJournals = {
  settings: terminalSettings,
  refresh: refreshAllJournals
};
