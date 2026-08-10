// The catalogue of 404 animations. Each entry drives one cell in the grid on
// the home page. The matching self-contained snippet (markup + scoped CSS)
// lives in src/animations/<type>.html and is both previewed in the cell and
// offered for copying.

// A short, stable slug identifying the animation's markup + CSS
// (e.g. 'vending-machine'). Extend this union as animations are added.
export type AnimationType =
  | 'vending-machine'
  | 'seance-board'
  | 'elevator-void'
  | 'split-flap'
  | 'baggage-claim'
  | 'magic-8-ball'
  | 'notfoundium'
  | 'forecast'
  | 'skipping-record'
  | 'pneumatic-tube'
  | 'dig-site'
  | 'traffic-signal'
  | 'radar-sweep'
  | 'tv-static'
  | 'milk-carton'
  | 'safe-crack'
  | 'fortune-cookie'
  | 'hourglass'
  | 'mailbox'
  | 'broken-compass'
  | 'pong-miss'
  | 'glitch-text'
  | 'liquid-blob'
  | 'wire-cube'
  | 'glass-morph'
  | 'hologram'
  | 'skeleton-loader'
  | 'bento-grid'
  | 'kinetic-type'
  | 'soft-ui'
  | 'matrix-rain'
  | 'terminal-cursor'
  | 'endless-loader'
  | 'word-tiles'
  | 'ai-orb'
  | 'map-pin'
  | 'equalizer'
  | 'warp-tunnel'
  | 'qr-glitch'
  | 'swipe-card'
  | 'captcha-grid'
  | 'chat-typing';

export interface Animation {
  /** Zero-padded catalogue number, e.g. '01'. */
  index: string;
  /** Human-readable display name, e.g. 'Out of Stock'. */
  name: string;
  /** Slug identifying the animation's markup + CSS. */
  type: AnimationType;
  /** Prompt a coding agent can use to recreate the animation from scratch. */
  prompt: string;
}

export const animations: Animation[] = [
  {
    index: '01',
    name: 'Out of Stock',
    type: 'vending-machine',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a small flat-design vending machine. ' +
      'The glass window holds three snack slots labelled with HTTP codes (200, 404, 302), each resting on a coil drawn as a dashed circle. ' +
      'On a 5-second loop, the middle coil rotates, the “404” snack leans further and further forward as if about to drop, the whole machine gets thumped and shakes, but the snack settles back — still stuck. ' +
      'An LED display on top alternates between “404” and “STUCK”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (show the snack frozen mid-lean instead).',
  },
  {
    index: '02',
    name: 'Séance Board',
    type: 'seance-board',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a séance / spirit board. ' +
      'The board shows the digits 1–9 and 0 in a row, plus a small “NO SUCH PAGE” farewell line at the bottom. ' +
      'A teardrop-shaped planchette with a round window drifts across the board on a 10-second ease-in-out loop, pausing with its window over 4, then 0, then 4 — each digit glows while chosen — before sliding down to the farewell line and returning to rest. ' +
      'Give the planchette a slight rotation wobble while it moves so it feels guided by an unseen hand. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/board colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (park the planchette on the 4 with the digit glowing).',
  },
  {
    index: '03',
    name: 'Elevator to Nowhere',
    type: 'elevator-void',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: an elevator arriving at a floor that does not exist. ' +
      'Above the doors, a dark indicator panel with a small up-arrow cycles the floor readout 3 → 4 → “404”, flickering on arrival while the arrow blinks like a ding. ' +
      'On a 7-second loop the two door halves slide apart to reveal a dark void containing a large glowing “404” that pulses, with a few tiny dust motes drifting upward; then the doors close and the loop repeats. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (doors held open, “404” steadily lit).',
  },
  {
    index: '04',
    name: 'Cancelled Departure',
    type: 'split-flap',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: an airport split-flap departure board. ' +
      'A dark board holds a “DESTINATION” header and three character tiles, each a window with a horizontal split line across the middle. ' +
      'Behind each window a vertical strip of characters rolls with an eased motion, the three tiles settling one after another on 4, 0, 4 — make each strip start and end on the same character so the loop is seamless. ' +
      'Once the tiles settle, a “CANCELLED” line below blinks a few times. 7-second loop. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (tiles resting on 404, CANCELLED steadily lit).',
  },
  {
    index: '05',
    name: 'Baggage Claim',
    type: 'baggage-claim',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: an airport baggage carousel. ' +
      'Under a small “BELT 4 · PAGE: MISSING” sign, suitcases with handles glide across a striped conveyor belt whose stripes scroll in the same direction. ' +
      'One suitcase in the rotation is only a dashed outline labelled “404” — the one that never turned up — and it flickers as it passes. ' +
      'Build the train of cases as two identical sets translated by exactly minus fifty percent so the loop wraps seamlessly. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (belt frozen with the ghost case visible).',
  },
  {
    index: '06',
    name: 'Ask Again Later',
    type: 'magic-8-ball',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a magic 8-ball being consulted. ' +
      'A dark ball with a specular highlight, a small white “8” badge, an elliptical ground shadow, and a round answer window near the bottom. ' +
      'On a 7-second loop the ball shakes (the shadow stretching with it), then inside the window an answer floats up out of the murk — blurred and low, rising into focus — first “404”, sinking away, then “ASK AGAIN”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (window showing a steady “404”).',
  },
  {
    index: '07',
    name: 'Notfoundium',
    type: 'notfoundium',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a periodic-table tile for element 404, “Nf — NOTFOUNDIUM”, atomic mass “(?)”. ' +
      'Two dashed electron-shell rings circle the tile, each carrying a single electron dot; the rings rotate in opposite directions at different speeds, so the electrons pass behind the tile. ' +
      'The “Nf” symbol occasionally flickers like a loose neon sign and the “(?)” mass gives a little shrugging hop. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (static tile with both electrons visible).',
  },
  {
    index: '08',
    name: 'Grim Forecast',
    type: 'forecast',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a weather report. ' +
      'A dark storm-cloud silhouette (a pill with two circle bumps) drifts gently while raining the digits 4, 0, 4 — five small staggered digits falling and fading before they land. ' +
      'Twice per 6-second loop a small lightning bolt (clip-path polygon) flashes beneath the cloud. Caption underneath: “FORECAST: NO PAGES”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (digits frozen mid-fall).',
  },
  {
    index: '09',
    name: 'Skipping Record',
    type: 'skipping-record',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a turntable stuck on a track that does not exist. ' +
      'A vinyl record drawn with repeating radial grooves spins with a bright center label reading “404”, while a tonearm with a pivot and cartridge head rests over it. ' +
      'On a 4-second loop the rotation jerks backwards at around seventy percent — the skip — while the tonearm twitches and the caption “TRACK NOT FOUND — SKIPPING” stutters; the rotation still completes a full turn so the loop is seamless. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (record still, caption steady).',
  },
  {
    index: '10',
    name: 'Pneumatic Post',
    type: 'pneumatic-tube',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a pneumatic tube station. ' +
      'A glass tube (with a thin highlight stripe) stands on a dark base unit that has a status LED and a small readout. ' +
      'On a 7-second loop the capsule dips, whooshes up out of the tube, and is gone while the LED blinks and the readout says “FETCHING”; then the capsule drops back with a bounce and the readout flashes “404 EMPTY”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (capsule at rest, “404 EMPTY” steadily shown).',
  },
  {
    index: '11',
    name: 'Dig Site',
    type: 'dig-site',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: an archaeological dig. ' +
      'A bordered excavation pit contains a large fossilised “404”, buried under hatched dirt (a repeating diagonal gradient overlay). ' +
      'A small brush with bright bristles sweeps left to right in three strokes, and with each stroke the dirt’s clip-path recedes another third, uncovering the fossil; after a beat the dirt fades back over it and the dig starts again. 9-second loop, caption “EXCAVATION IN PROGRESS”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (fossil two-thirds uncovered, brush resting).',
  },
  {
    index: '12',
    name: 'Dead End',
    type: 'traffic-signal',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a traffic signal that can only show 4, 0, 4. ' +
      'A dark signal head on a pole holds three round lamps containing the digits 4, 0 and 4. ' +
      'On a 6-second loop the lamps light up in sequence from top to bottom — lit means bright accent background, dark digit, and a soft glow — then all three flash together twice, as if the controller has given up. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (all three lamps steadily lit).',
  },
  {
    index: '13',
    name: 'No Contact',
    type: 'radar-sweep',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a radar scope scanning the void. ' +
      'A dark circular screen carries faint concentric range rings and a crosshair reticle, and a bright wedge-shaped sweep (a conic-gradient fading to transparent behind it) rotates continuously on a 4-second linear loop. ' +
      'Each time the sweep passes a fixed point it briefly lights a small “404” blip that then fades back into the dark, as if the contact can never be reacquired. Caption “SCANNING · NO CONTACT”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (sweep parked, blip steadily lit).',
  },
  {
    index: '14',
    name: 'No Signal',
    type: 'tv-static',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a retro CRT television that cannot tune the page in. ' +
      'A dark rounded set with two side knobs and a little stand holds a screen filled with jittering scanline static (a repeating-linear-gradient nudged up and down with a steps() animation). ' +
      'Vertical colour bars flash through briefly a couple of times per loop, and a blinking “NO SIGNAL / 404” message sits centred on the screen. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (static frozen, colour bars hidden, message steadily shown).',
  },
  {
    index: '15',
    name: 'Missing Page',
    type: 'milk-carton',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: the old milk-carton missing notice. ' +
      'A gable-topped milk carton (a rectangle with a peaked top via clip-path) rocks gently side to side on a slow ease-in-out loop. ' +
      'On its face: a “MISSING” banner, a dashed photo box showing “404” that keeps fading in and out as if it were never quite there, and the caption “HAVE YOU SEEN THIS PAGE?”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (carton upright, photo half-faded).',
  },
  {
    index: '16',
    name: 'Empty Vault',
    type: 'safe-crack',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a safe being cracked open on nothing. ' +
      'A dark vault with a slightly lighter interior; on an 8-second loop the combination dial (a circle with an accent pointer notch) spins the tumblers, then the heavy door — hinged on the right — swings open with a rotateY under perspective, revealing a bare interior holding a single glowing “404”, before closing again. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (door held open, “404” steadily shown).',
  },
  {
    index: '17',
    name: 'No Fortune',
    type: 'fortune-cookie',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a fortune cookie that has no fortune. ' +
      'Two golden half-shells meet in the middle; on a 6-second loop they crack apart — sliding outward and tilting — while a small paper slip rises up between them, and the slip just reads “404”. Then the halves close and it repeats. Caption “NO FORTUNE”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (cookie held open, slip showing “404”).',
  },
  {
    index: '18',
    name: 'Timed Out',
    type: 'hourglass',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: an hourglass that never finishes loading. ' +
      'A bowtie-shaped glass (clip-path) with a cap top and bottom; the top bulb’s sand (a downward triangle) drains via scaleY while the bottom bulb’s sand (an upward triangle) fills, with a thin stream trickling through the neck. ' +
      'Once drained, the whole frame flips 180° — turning the full bottom bulb back into a full top bulb so the loop resets seamlessly. Caption “404 · TIMED OUT”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (sand shown half-drained, frame upright).',
  },
  {
    index: '19',
    name: 'No Mail',
    type: 'mailbox',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a mailbox with nothing in it. ' +
      'A tin mailbox with a rounded roof on a post, with a small signal flag on the left. On a 6-second loop the raised flag drops, then the front door — hinged on the right — swings open with a rotateY under perspective to reveal an empty interior holding a glowing “404”, before closing again. Caption “NO MAIL”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (door held open with “404” shown, flag down).',
  },
  {
    index: '20',
    name: 'No Bearing',
    type: 'broken-compass',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a broken compass that cannot find north. ' +
      'A round compass face with N/E/S/W marks and a two-tone needle (accent north half, ink south half) pivoting on a central hub. ' +
      'The needle spins erratically on a 4-second loop — lurching forward, backtracking, overshooting — with non-monotonic keyframes so it never settles on a heading. Caption “404 · NO BEARING”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (needle frozen off-north).',
  },
  {
    index: '21',
    name: 'Game Over',
    type: 'pong-miss',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a game of Pong that is always lost. ' +
      'A dark court with a dashed centre net, a score reading “4 0 4” across the top, and two paddles. On a 3.4-second loop the ball rallies off the left paddle and bounces between the top and bottom walls, but the right paddle lunges the wrong way so the ball sails past it and off the edge before the rally resets. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (ball frozen past the paddle, right paddle mistimed).',
  },
  {
    index: '22',
    name: 'Signal Lost',
    type: 'glitch-text',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a glitching, RGB-split “404”. ' +
      'On a dark screen with faint CRT scanlines, a big bold white “404” carries two chroma copies (a cyan and a magenta, drawn with pseudo-elements via content: attr(data-text) and blended with mix-blend-mode: screen). ' +
      'The two copies slice into horizontal bands with animated clip-path inset() and jitter left and right independently, while the whole glyph occasionally jumps; a small “SIGNAL LOST” tag blinks below. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors plus two chroma-offset colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (a static 404 with a slight chroma offset).',
  },
  {
    index: '23',
    name: 'Liquid Void',
    type: 'liquid-blob',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: gooey liquid metaballs merging behind the number. ' +
      'Three accent-colored circles drift, scale and overlap inside a container with filter: blur(7px) contrast(16) — the blur-plus-contrast trick fuses their soft edges into one gooey metaball mass (no SVG goo filter). A solid “404” sits on top, outside the filtered layer so it stays crisp. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (blobs frozen mid-merge).',
  },
  {
    index: '24',
    name: 'Lost in Space',
    type: 'wire-cube',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a neon 3D cube tumbling through space. ' +
      'Using transform-style: preserve-3d and a perspective scene, six translucent-ink faces with accent borders and an inner accent glow are positioned with rotateX/rotateY plus translateZ; the faces read 4, 0, 4, ?, N, F. The cube tumbles end over end on a slow linear loop combining rotateX and rotateY. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (cube parked at a three-quarter angle).',
  },
  {
    index: '25',
    name: 'Frosted Glass',
    type: 'glass-morph',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a glassmorphism card over drifting colour orbs. ' +
      'Inside a dark rounded scene, three blurred colour orbs (accent, violet, cyan) drift around; a centred card frosts them with backdrop-filter: blur() saturate(), a translucent white border and a soft drop shadow, showing “404 / NOT FOUND”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors plus two extra orb colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (orbs held still behind the glass).',
  },
  {
    index: '26',
    name: 'Projection Failed',
    type: 'hologram',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a flickering holographic “404” projection. ' +
      'Over a dark stage with an emitter glow at the base, a translucent accent “404” hovers and gently bobs with a slight skew, its glyphs raked by downward-scrolling scanlines (a repeating-linear-gradient overlay in multiply blend) and interrupted by irregular opacity flickers; the elliptical emitter pulses. Caption “PROJECTION FAILED”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (a steady hologram, no flicker).',
  },
  {
    index: '27',
    name: 'Still Loading',
    type: 'skeleton-loader',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a skeleton-screen loader that only ever resolves to an error. ' +
      'A white card holds a circular avatar placeholder and three placeholder text lines, all sweeping with a shimmer (a moving linear-gradient via background-position). Periodically an overlay flashes over the card — a dark panel with an accent “404” — as if the request finally returned, then it fades back to the shimmering skeleton. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors plus a skeleton “bone” tint, no JavaScript and no images, and disable the motion under prefers-reduced-motion (static skeleton with the 404 overlay shown).',
  },
  {
    index: '28',
    name: 'Rearranging',
    type: 'bento-grid',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a bento-box grid that keeps rearranging. ' +
      'A 3×3 CSS grid of rounded tiles with bento-style spans; three accent tiles across the middle row hold 4, 0, 4 and pulse with a glow, while the dark filler tiles dip in scale and opacity in a staggered, travelling ripple (per-tile animation-delay) that reads as shuffling. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (grid at rest, 4 0 4 shown).',
  },
  {
    index: '29',
    name: 'On Repeat',
    type: 'kinetic-type',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: kinetic typography with scrolling marquee bands. ' +
      'Three horizontal bands scroll bold text; the top and bottom read “404 · NOT FOUND” moving left at different speeds, and the middle band — inverted (accent background, ink text) and tilted a few degrees — reads “PAGE MISSING” scrolling the opposite way. Each band’s track holds two identical copies and translates by -50% for a seamless loop. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (bands held static).',
  },
  {
    index: '30',
    name: 'Soft Error',
    type: 'soft-ui',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a neumorphic (soft UI) panel. ' +
      'On a panel whose background matches the page, a debossed “404” sits above a soft-extruded “RETRY” button; on a loop the button presses in (its outer light/dark shadows swapping to inset) while a small accent status LED blinks in time, but nothing ever loads. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors — plus matched --bg/--dark/--light shadow tints, since neumorphism needs the panel color and its shadows to move together — no JavaScript and no images, and disable the motion under prefers-reduced-motion (button raised at rest, LED dim).',
  },
  {
    index: '31',
    name: 'System Down',
    type: 'matrix-rain',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: cascading “digital rain”. ' +
      'On a dark screen, several columns of digits fall continuously at different speeds; each column is one glyph wide (word-break makes the string wrap into a vertical strip) with its head faded and its tail bright via a text-clipped gradient, and the string is written twice so a -50% translateY loops seamlessly. A bright “404” chip sits in the middle and flickers. Caption “SYSTEM DOWN”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (rain frozen, 404 lit).',
  },
  {
    index: '32',
    name: 'Command Not Found',
    type: 'terminal-cursor',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a terminal window. ' +
      'A dark window with a title bar and three dots types a command line then an error line, each revealed by animating its width from 0 (overflow hidden, white-space nowrap) so the text appears character by character; the request line reads “$ get /page” and the response, in accent, reads “! 404: not found”, followed by a prompt with a blinking block cursor. The lines clear and retype on a loop. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (both lines shown in full, cursor steady).',
  },
  {
    index: '33',
    name: 'Loading Forever',
    type: 'endless-loader',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: an indeterminate spinner that never resolves. ' +
      'Two concentric conic-gradient rings (a transparent-to-accent trail masked into a ring with a radial-gradient mask) spin at different speeds in opposite directions around a central “404” that gently pulses. Caption “LOADING FOREVER”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (rings and 404 held still).',
  },
  {
    index: '34',
    name: 'Bad Guess',
    type: 'word-tiles',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a row of Wordle-style guess tiles. ' +
      'Five tiles flip over on the X axis one after another (staggered animation-delay), swapping their fill at the edge-on midpoint: the first three land on accent showing 4, 0, 4 (a hit) and the last two land on a muted “absent” grey showing N and F — the page was never a valid guess. The tiles flip back to blank and the loop repeats. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors plus an “absent” grey, no JavaScript and no images, and disable the motion under prefers-reduced-motion (tiles resting on their revealed faces).',
  },
  {
    index: '35',
    name: 'No Answer',
    type: 'ai-orb',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a glowing AI assistant orb. ' +
      'A sphere filled with a rotating conic gradient (accent plus two extra hues) breathes in and out with a soft outer glow and a glossy top-left highlight, while a “404” sits over it (soft-light blend) fading as if the model is still thinking. Caption “NO ANSWER”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors plus two swirl hues, no JavaScript and no images, and disable the motion under prefers-reduced-motion (orb still, 404 shown).',
  },
  {
    index: '36',
    name: 'Off the Map',
    type: 'map-pin',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a map with a dropping location pin. ' +
      'Over a dark map of faint street lines (repeating-linear-gradients) with one accent road, a teardrop pin (a rounded square with one sharp corner, rotated 45°, holding a “404” dot) falls from the top, settles with a little bob, and an accent ping ring expands from the spot — a location that can’t be found. Caption “OFF THE MAP”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (pin landed, ping hidden).',
  },
  {
    index: '37',
    name: 'Dead Air',
    type: 'equalizer',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: an audio equalizer. ' +
      'On a dark panel, a bank of accent bars bounces (staggered scaleY) like a music visualizer; once per loop the whole bank collapses to a flat line — dead air — while a “404 · DEAD AIR” caption brightens, then the bars resume. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (bars frozen at varied heights).',
  },
  {
    index: '38',
    name: 'Wormhole',
    type: 'warp-tunnel',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a hyperspace tunnel. ' +
      'Inside a dark stage with a central glow, accent rings are born at the centre and rush outward, scaling up and fading at the rim; six staggered copies (per-ring negative animation-delay) make a continuous tunnel, with a flickering “404” pinned at the vanishing point. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (rings frozen at nested sizes, 404 lit).',
  },
  {
    index: '39',
    name: 'Scan Failed',
    type: 'qr-glitch',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a glitching QR code. ' +
      'A white code tile shows three finder “eyes” (ink ring, white gap, ink pupil) over a dense pseudo-random module field made from two offset repeating-conic-gradient checker layers whose positions keep shifting to scramble the data; an accent scan line sweeps down and never gets a read. Caption “SCAN FAILED · 404”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (field static, scan line parked mid-code).',
  },
  {
    index: '40',
    name: 'No Match',
    type: 'swipe-card',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a dating-app card stack swiping the missing page away. ' +
      'A rounded profile card sits on top of two smaller ghost cards; it holds a round accent avatar reading “404”, a name line “PAGE, 404” and a meta line “∞ km away”. ' +
      'On a 5-second loop the card leans right, then flicks off to the left with a rotation and fades out while a “NOPE” stamp punches on at an angle (scaling down from oversized); the ghost cards rise and scale up as it goes, then the card fades back in from the bottom of the deck — the same page, offered again. Caption “NO MATCH”. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (card tilted mid-swipe with the stamp shown).',
  },
  {
    index: '41',
    name: 'Not a Robot',
    type: 'captcha-grid',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a CAPTCHA challenge that can never be passed. ' +
      'A white panel reads “Select all squares with your page” above a 3×3 grid of hatched image tiles (a repeating diagonal gradient on an overlay pseudo-element) and a dark “VERIFY” button. ' +
      'On a 7-second loop a pointer arrow (a clip-path polygon) walks the diagonal and taps three tiles — each one dropping its hatch overlay, filling with accent, showing “404” and popping a checkmark (a rotated element with only its right and bottom borders) — then jabs the button; the panel shakes and a “404 · FAILED” chip blinks before the tiles clear and the challenge restarts. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (three tiles ticked, cursor resting on the button, “FAILED” shown).',
  },
  {
    index: '42',
    name: 'Left on Read',
    type: 'chat-typing',
    prompt:
      'Create a pure-CSS animation for a 404 Not Found page: a chat thread that never gets a reply. ' +
      'An outgoing accent bubble reading “GET /page” sits at the right with a “Read 4:04” receipt fading in beneath it; below on the left, a grey incoming bubble holds three bouncing typing dots (staggered animation-delay). ' +
      'On a 7-second loop the typing bubble pops in, holds while the dots bounce, then shrinks away unanswered — twice, a pair of false starts — while the caption “404 · LEFT ON READ” brightens in the gap between them. ' +
      'Use a single root element with a scoped class prefix, CSS custom properties for the ink/accent/shell colors, no JavaScript and no images, and disable the motion under prefers-reduced-motion (typing bubble shown, dots at rest).',
  },
];
