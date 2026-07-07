# 🐾 Cat World Domination

**Built for [The Coding Kitty Hackathon](#https://hackthekitty.com/) — #hackthekitty**

A browser-based grand strategy game where you build a feline empire, conquer (or charm) all 40 human nations, and leave nothing for the humans. Pure HTML/CSS/JS, zero dependencies beyond an icon font, zero build step — clone it and open it.

> 🐱 Build the feline empire. Conquer all 40 nations. Leave nothing for the humans.

<!-- Drop a screenshot or GIF of the map/gameplay here for the GitHub preview -->
<!-- ![gameplay screenshot](./screenshot.png) -->

---

## 🎮 Play it

No install, no server required:

1. Clone or download this repo
2. Open `index.html` in your browser

Prefer a local server (avoids occasional `file://` quirks in some browsers):

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## 📖 How to play

1. **Start New Game** — name your empire, pick a government type, a difficulty, and a starting territory.
2. Each turn you get a pool of **Action tokens** and **Meme tokens**. Spend them on the map to declare war, weaken a nation with memes, negotiate peace, or form alliances.
3. In the sidebar, spend fish on **Buildings**, **Army units**, and **Research**. Keep an eye on your **Council** (unlockable advisors with passive bonuses) and your **Achievements**.
4. Hit **End Turn** to resolve income, population growth, happiness, AI nation behavior, random events, and any pending invasions.
5. Win by:
   - 🗺️ **Conquest** — own all 40 territories, or
   - 🤝 **Diplomatic Victory** — every remaining nation is allied with you, or
   - ⭐ **Prestige Victory** — reach 400 prestige

Lose if you run out of owned territory.

### Governments

| Government | Bonus |
|---|---|
| 👑 Kingdom | +15% military, extra action token |
| 🏛️ Republic | +15% economy, extra meme token |
| 🌍 Empire | +15% territory bonus, extra action token |
| 🌀 Chaos | Double tokens, double chaos (orange cats rule) |

### Difficulty

`Kitten` (relaxed) → `Tomcat` (balanced) → `Lion` (humans unite, punishing).

## 💾 Saving your game

There's no backend. Progress lives entirely in the browser tab. To keep an empire across sessions:

1. In-game, click **Save Code** (top bar). A code is generated, so copy and keep it somewhere safe.
2. Later, from the home screen, click **Continue Game**, paste the code in, and click **Load Empire**.

The code is a self-contained, portable snapshot of your empire (turn count, resources, territories, buildings, army, research, council, achievements, etc.), base64-encoded as plain text — shareable, and not tied to the device that generated it.

## 🗂️ Project structure

```
index.html    All screens/markup: home, setup, game, victory/game-over, and modals
style.css     All styling — dark neon-ish palette, layout, map, modals, toasts
script.js     Game data (territories, buildings, units, tech, council, events,
              achievements) and all logic (setup, turn resolution, battle
              minigame, diplomacy, save/load, rendering)
README.md     You are here
```

Everything lives in three files by design. No bundler, no framework, no `node_modules`. Open `script.js` and it's all there: game data at the top, systems below.

## 🛠️ Tech notes

- **No framework, no build step**. Fully on vanilla HTML/CSS/JS, opens straight from disk.
- Map is a hand-drawn SVG (`#world-svg`) with pan/zoom via pointer events, not a mapping library.
- Battle is a timing minigame (hit the moving bar in the green zone) rendered with plain DOM/CSS, best-of-3 rounds.
- Only external dependency: [Bootstrap Icons](https://icons.getbootstrap.com/), pulled from a CDN for iconography.
- Save/Continue is a portable, self-contained save-code system (no backend, no cookies). See above.

## 🐈 Known limitations / roadmap

- Save codes are a few KB of plain text. Functional, but not pretty.
- No autosave; closing the tab without generating a Save Code loses that run.
- Built solo/fast for a hackathon. Expect rough edges, and PRs/issues are welcome.

## 🏆 Hackathon

Made for **The Coding Kitty Hackathon** — `#hackthekitty`. If you're a judge or fellow participant poking around: thanks for stopping by, and yes, the orange cats really are that chaotic on purpose.

## 📄 License

MIT License.
