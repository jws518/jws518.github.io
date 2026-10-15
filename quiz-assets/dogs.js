/* Javi — illustrated character (golden retriever mix: golden-red coat, cream chest/muzzle/paws, floppy ears, fluffy tail) */

const DOG_DEFS = `
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
  <linearGradient id="g-gold" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#EDBB6C"/><stop offset="1" stop-color="#D99843"/></linearGradient>
  <linearGradient id="g-gold-dark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#D49A4A"/><stop offset="1" stop-color="#BE7E32"/></linearGradient>
  <linearGradient id="g-ear" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#DDA24F"/><stop offset="1" stop-color="#C98835"/></linearGradient>
  <radialGradient id="g-cream" cx=".5" cy=".35" r=".8"><stop offset="0" stop-color="#FFF8E8"/><stop offset="1" stop-color="#F2DDB6"/></radialGradient>
</defs></svg>`;

/* ---------- side view, faces RIGHT ---------- */
const DOG_SIDE = `
<svg viewBox="0 0 300 190" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="150" cy="180" rx="112" ry="7" fill="#5a3b14" opacity=".12"/>

  <!-- feathered tail -->
  <g class="tail">
    <path d="M60 88 C28 84 6 60 16 28 C24 52 44 62 72 70 Z" fill="url(#g-gold-dark)"/>
    <path d="M60 96 C34 100 12 86 6 62 C22 76 42 82 68 82 Z" fill="url(#g-cream)"/>
  </g>

  <!-- far legs -->
  <g class="leg b" style="transform-origin:104px 112px">
    <rect x="94" y="104" width="19" height="68" rx="9.5" fill="url(#g-gold-dark)"/>
    <rect x="93" y="146" width="21" height="28" rx="10" fill="#E6CDA0"/>
    <ellipse cx="105" cy="174" rx="14" ry="6.5" fill="#E6CDA0"/>
  </g>
  <g class="leg a" style="transform-origin:200px 112px">
    <rect x="190" y="104" width="19" height="68" rx="9.5" fill="url(#g-gold-dark)"/>
    <rect x="189" y="146" width="21" height="28" rx="10" fill="#E6CDA0"/>
    <ellipse cx="201" cy="174" rx="14" ry="6.5" fill="#E6CDA0"/>
  </g>

  <g class="body-bob">
    <!-- body -->
    <circle cx="88" cy="100" r="40" fill="url(#g-gold)"/>
    <ellipse cx="142" cy="100" rx="76" ry="38" fill="url(#g-gold)"/>
    <ellipse cx="212" cy="92" rx="30" ry="36" fill="url(#g-gold)"/>
    <path d="M64 70 C110 56 170 58 206 74" stroke="#F6D28F" stroke-width="6" fill="none" stroke-linecap="round" opacity=".55"/>
    <!-- cream chest + belly -->
    <ellipse cx="206" cy="116" rx="24" ry="30" fill="url(#g-cream)"/>
    <path d="M110 136 C140 146 176 144 196 130 C190 148 170 150 150 146 C132 146 118 144 110 136 Z" fill="#F4E1BC"/>
    <!-- hind-leg feathering -->
    <path d="M54 112 C50 128 62 138 78 134 C66 130 60 122 62 110 Z" fill="#F4E1BC"/>

    <!-- head -->
    <g class="head-bob" style="transform-origin:214px 84px">
      <circle cx="236" cy="62" r="31" fill="url(#g-gold)"/>
      <ellipse cx="262" cy="76" rx="24" ry="15" fill="url(#g-cream)" transform="rotate(10 262 76)"/>
      <path d="M244 36 C254 40 262 50 266 58" stroke="#F6D79A" stroke-width="4" fill="none" stroke-linecap="round" opacity=".6"/>
      <path d="M272 66 q11 -5 13 4 q-1 9 -11 9 q-7 -4 -2 -13z" fill="#5A3A32"/>
      <ellipse cx="277" cy="66.5" rx="3" ry="1.7" fill="#fff" opacity=".45"/>
      <path d="M254 88 q12 8 28 -3" stroke="#4a2c22" stroke-width="2.4" fill="none" stroke-linecap="round"/>
      <path d="M268 88 q3 13 10 7 q2 -6 -3 -10 Z" fill="#F28A9B"/>
      <ellipse cx="250" cy="60" rx="5.2" ry="5.8" fill="#3A2418"/>
      <circle cx="251.8" cy="57.8" r="1.9" fill="#fff"/>
      <ellipse cx="248" cy="50" rx="4.5" ry="2.4" fill="#F7DDA6" opacity=".85"/>
      <path d="M236 32 C208 28 198 64 211 98 C228 96 244 72 245 44 Z" fill="url(#g-ear)"/>
    </g>
  </g>

  <!-- near legs -->
  <g class="leg b" style="transform-origin:124px 112px">
    <rect x="113" y="104" width="22" height="68" rx="11" fill="url(#g-gold)"/>
    <rect x="112" y="144" width="24" height="30" rx="11" fill="#F7E7C6"/>
    <ellipse cx="125" cy="174" rx="16" ry="7.5" fill="#FBEFD6"/>
    <path d="M118 174 v4 M125 175 v4 M132 174 v4" stroke="#D8BE92" stroke-width="1.6" stroke-linecap="round"/>
  </g>
  <g class="leg a" style="transform-origin:220px 112px">
    <rect x="209" y="104" width="22" height="68" rx="11" fill="url(#g-gold)"/>
    <rect x="208" y="144" width="24" height="30" rx="11" fill="#F7E7C6"/>
    <ellipse cx="221" cy="174" rx="16" ry="7.5" fill="#FBEFD6"/>
    <path d="M214 174 v4 M221 175 v4 M228 174 v4" stroke="#D8BE92" stroke-width="1.6" stroke-linecap="round"/>
  </g>
</svg>`;

/* ---------- front view (sitting, looks at you) ---------- */
const DOG_FRONT = `
<svg class="face is-calm" viewBox="0 0 240 290" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="120" cy="280" rx="82" ry="7" fill="#5a3b14" opacity=".12"/>

  <!-- tail -->
  <g class="ftail">
    <path d="M168 258 C212 258 236 230 222 196 C220 226 196 242 164 240 Z" fill="url(#g-cream)"/>
    <path d="M170 252 C204 250 224 232 220 206" stroke="#E7C98E" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/>
  </g>

  <!-- haunches -->
  <ellipse cx="72" cy="236" rx="42" ry="40" fill="url(#g-gold)"/>
  <ellipse cx="168" cy="236" rx="42" ry="40" fill="url(#g-gold)"/>
  <ellipse cx="62" cy="272" rx="26" ry="9" fill="#F7E7C6"/>
  <ellipse cx="178" cy="272" rx="26" ry="9" fill="#F7E7C6"/>

  <!-- torso -->
  <path d="M62 148 C52 200 62 252 120 258 C178 252 188 200 178 148 C160 128 80 128 62 148 Z" fill="url(#g-gold)"/>
  <!-- cream chest fluff -->
  <path d="M84 140 C76 180 84 216 96 232 l8 -8 l6 12 l10 -10 l10 10 l6 -12 l8 8 C158 216 166 180 156 140 C140 150 100 150 84 140 Z" fill="url(#g-cream)"/>
  <path d="M96 170 q-6 8 0 14 M144 170 q6 8 0 14 M120 176 v14" stroke="#E7CB92" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".7"/>

  <!-- front legs + paws -->
  <rect x="92" y="204" width="24" height="64" rx="12" fill="#F7E7C6"/>
  <rect x="124" y="204" width="24" height="64" rx="12" fill="#F7E7C6"/>
  <ellipse cx="104" cy="270" rx="17" ry="9" fill="#FBEFD6"/>
  <ellipse cx="136" cy="270" rx="17" ry="9" fill="#FBEFD6"/>
  <path d="M97 270 v5 M104 271 v5 M111 270 v5 M129 270 v5 M136 271 v5 M143 270 v5" stroke="#D8BE92" stroke-width="1.6" stroke-linecap="round"/>

  <!-- neck ruff -->
  <ellipse cx="120" cy="146" rx="52" ry="20" fill="url(#g-cream)"/>

  <!-- head -->
  <g class="head">
    <path d="M62 104 C58 56 90 40 120 40 C150 40 182 56 178 104 C176 132 150 148 120 148 C90 148 64 132 62 104 Z" fill="url(#g-gold)"/>
    <!-- cheek fluff -->
    <path d="M64 112 l-8 14 l14 -2 l-2 12 l14 -8 Z" fill="#F0CE90"/>
    <path d="M176 112 l8 14 l-14 -2 l2 12 l-14 -8 Z" fill="#F0CE90"/>
    <!-- forehead blaze -->
    <path d="M120 42 C110 56 110 78 120 96 C130 78 130 56 120 42 Z" fill="#F7D99C" opacity=".4"/>
    <!-- muzzle -->
    <ellipse cx="120" cy="122" rx="33" ry="25" fill="url(#g-cream)"/>
    <!-- brow spots -->
    <ellipse cx="94" cy="76" rx="6" ry="3.4" fill="#F7DDA6" opacity=".85"/>
    <ellipse cx="146" cy="76" rx="6" ry="3.4" fill="#F7DDA6" opacity=".85"/>
    <!-- nose -->
    <path d="M105 105 q15 -8 30 0 q2 14 -15 17 q-17 -3 -15 -17z" fill="#5A3A32"/>
    <ellipse cx="114" cy="107" rx="5" ry="2.2" fill="#fff" opacity=".4"/>
    <path d="M120 121 v9" stroke="#4a2c22" stroke-width="2.4" stroke-linecap="round"/>

    <!-- calm -->
    <g class="calm">
      <ellipse cx="94" cy="92" rx="6.8" ry="7.8" fill="#3A2418"/><circle cx="96.4" cy="89" r="2.4" fill="#fff"/>
      <ellipse cx="146" cy="92" rx="6.8" ry="7.8" fill="#3A2418"/><circle cx="148.4" cy="89" r="2.4" fill="#fff"/>
      <path d="M102 132 q9 8 18 0 q9 8 18 0" stroke="#4a2c22" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M112 136 q8 14 16 0 q-8 4 -16 0 Z" fill="#F28A9B"/>
    </g>
    <!-- happy -->
    <g class="happy">
      <path d="M85 94 q9 -11 18 0" stroke="#3A2418" stroke-width="4.6" fill="none" stroke-linecap="round"/>
      <path d="M137 94 q9 -11 18 0" stroke="#3A2418" stroke-width="4.6" fill="none" stroke-linecap="round"/>
      <path d="M98 128 Q120 164 142 128 Q120 136 98 128 Z" fill="#7A3B3B"/>
      <path d="M108 144 Q120 168 132 144 Q120 150 108 144 Z" fill="#F28A9B"/>
      <ellipse cx="78" cy="112" rx="9" ry="5.5" fill="#F4A58A" opacity=".5"/>
      <ellipse cx="162" cy="112" rx="9" ry="5.5" fill="#F4A58A" opacity=".5"/>
    </g>
    <!-- sad -->
    <g class="sad">
      <ellipse cx="94" cy="94" rx="6.8" ry="7.8" fill="#3A2418"/><circle cx="96" cy="91" r="3" fill="#fff"/><circle cx="92" cy="97" r="1.3" fill="#fff"/>
      <ellipse cx="146" cy="94" rx="6.8" ry="7.8" fill="#3A2418"/><circle cx="148" cy="91" r="3" fill="#fff"/><circle cx="144" cy="97" r="1.3" fill="#fff"/>
      <path d="M82 76 L106 66" stroke="#9A6224" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M158 76 L134 66" stroke="#9A6224" stroke-width="4.4" stroke-linecap="round"/>
      <path d="M106 138 q14 -10 28 0" stroke="#4a2c22" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <path d="M80 104 q-5 10 0 15 q5 -5 0 -15 Z" fill="#8ecbe8" opacity=".9"/>
    </g>

    <!-- ears -->
    <g class="ear-l"><path d="M78 56 C48 50 36 100 52 140 C70 136 86 108 90 66 Z" fill="url(#g-ear)"/><path d="M76 64 C58 66 52 100 58 126" stroke="#E2A95B" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/></g>
    <g class="ear-r"><path d="M162 56 C192 50 204 100 188 140 C170 136 154 108 150 66 Z" fill="url(#g-ear)"/><path d="M164 64 C182 66 188 100 182 126" stroke="#E2A95B" stroke-width="3" fill="none" stroke-linecap="round" opacity=".7"/></g>
  </g>
</svg>`;
