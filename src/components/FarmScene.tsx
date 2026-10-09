function Horse({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
  return (
    <g
      transform={`translate(${x} ${y}) scale(${scale})`}
      stroke="#c2b083"
      strokeWidth="2.5"
      strokeLinejoin="round"
    >
      <path
        d="M-57 -9C-44 -27 4 -29 27 -16L38 0C15 12 -30 12 -51 0Z"
        fill="#6e815e"
      />
      <path
        d="M-44 0L-48 55H-36L-31 5M-20 6L-13 55H-2L-7 7M17 5L27 55H37L30 0"
        fill="#657955"
      />
      <g className="horse-head">
        <path
          d="M23 -17L40 -49L44 -61L54 -58L58 -64L64 -57L74 -44L88 -35L84 -23L65 -26L51 -12L37 4Z"
          fill="#82936c"
        />
        <path d="M38 -47L34 -28L26 -15" stroke="#d1bf90" strokeWidth="5" />
        <circle cx="66" cy="-43" r="2.5" fill="#131e16" stroke="none" />
      </g>
      <path
        className="horse-tail"
        d="M-52 -14Q-77 -14 -72 19Q-67 40 -83 43"
        stroke="#bba779"
        strokeWidth="7"
        fill="none"
      />
      <path d="M-55 56H44" opacity=".2" />
    </g>
  );
}

export function FarmScene() {
  return (
    <g>
      <circle cx="622" cy="121" r="40" fill="#cab682" opacity=".55" />
      <path
        d="M40 347Q210 242 412 326Q599 234 768 327V448H40Z"
        fill="#253b2b"
      />
      <path
        d="M36 399Q286 335 510 390Q651 359 775 385"
        stroke="#678564"
        strokeWidth="2"
      />
      <g stroke="#bfae7d" strokeWidth="2">
        <path
          className="draw"
          d="M120 245L218 160L315 245V385H120ZM120 245H315"
          fill="#31412f"
        />
        <path d="M105 248L218 150L329 248" stroke="#8b9b72" strokeWidth="8" />
        <path
          d="M177 385V281H258V385M177 281L258 385M258 281L177 385"
          fill="#17291e"
        />
        <rect
          className="window-glow"
          x="199"
          y="209"
          width="37"
          height="37"
          fill="#c9b782"
        />
        <path d="M218 209V246M199 227H236" stroke="#31412f" />
      </g>
      <g stroke="#9daa79" strokeWidth="3" opacity=".65">
        <path d="M349 340H757M349 363H757" />
        {[361, 440, 519, 598, 677, 756].map((x) => (
          <path key={x} d={`M${x} 329V386`} />
        ))}
      </g>
      <Horse x={448} y={379} />
      <Horse x={657} y={389} scale={0.85} />
      <g className="farm-grass" stroke="#7f9b6b" strokeWidth="2">
        <path d="M108 445L102 426M108 445L117 429M325 464L319 444M325 464L335 443M578 468L569 447M578 468L587 453M733 456L725 441M733 456L740 434" />
      </g>
      <path d="M57 480Q390 455 742 480" stroke="#a4b185" opacity=".25" />
    </g>
  );
}
