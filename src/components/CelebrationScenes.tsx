function Flowers({ x }: { x: number }) {
  return (
    <g transform={`translate(${x} 124)`}>
      <path d="M-9 14L-4 37H12L17 14Z" fill="#677b58" />
      <path d="M4 15V-7M4 12L-10 2M5 8L19-4" stroke="#8b9b6a" />
      {[
        [0, -9],
        [-12, 0],
        [18, -7],
      ].map(([cx, cy], i) => (
        <g key={i} transform={`translate(${cx} ${cy})`}>
          <path
            d="M0-5C-10-14-18 0-8 4C-13 15 0 16 3 7C10 17 19 6 11 1C17-9 5-14 0-5Z"
            fill="#e2d5b7"
            strokeWidth="1.2"
          />
          <circle cx="2" cy="2" r="3" fill="#ceb16d" stroke="none" />
        </g>
      ))}
    </g>
  );
}

function WeddingTable() {
  return (
    <g>
      <path
        d="M78 175L70 216M322 175L330 216"
        stroke="#a18b66"
        strokeWidth="5"
      />
      <path
        d="M69 151Q200 123 331 151L320 191Q283 184 265 195Q216 182 198 195Q151 184 130 196L81 188Z"
        fill="#e4dfce"
        stroke="#c7bd9f"
      />
      <ellipse cx="200" cy="149" rx="131" ry="26" fill="#eee9d7" />
      <path
        d="M86 168L89 183M134 169L132 188M266 168L269 187M311 165L308 181"
        stroke="#c3ba9e"
        opacity=".6"
      />
      {[135, 265].map((x) => (
        <g key={x}>
          <ellipse
            cx={x}
            cy="152"
            rx="22"
            ry="7"
            fill="#f7f0dc"
            stroke="#a49d82"
          />
          <ellipse cx={x} cy="152" rx="14" ry="4" stroke="#b8ad8d" />
          <path d={`M${x - 27} 145V158M${x + 28} 145V158`} stroke="#a49d82" />
        </g>
      ))}
      <ellipse cx="200" cy="163" rx="21" ry="6" fill="#d5c4a0" />
      {[189, 200, 211].map((x) => (
        <ellipse
          key={x}
          cx={x}
          cy="161"
          rx="4"
          ry="2.5"
          fill="#795234"
          stroke="none"
          transform={`rotate(-25 ${x} 161)`}
        />
      ))}
      <Flowers x={194} />
      {[102, 299].map((x) => (
        <g key={x}>
          <path d={`M${x - 7} 147H${x + 7}M${x} 146V131`} stroke="#9b824d" />
          <rect x={x - 4} y="112" width="8" height="22" rx="2" fill="#f1e3b8" />
          <path
            className="celebration-flame"
            d={`M${x} 98Q${x - 7} 109 ${x} 112Q${x + 7} 109 ${x} 98Z`}
            fill="#e9bf6c"
            stroke="none"
          />
          <circle
            className="celebration-glow"
            cx={x}
            cy="108"
            r="24"
            fill="#e9bf6c"
            stroke="none"
            opacity=".1"
          />
        </g>
      ))}
    </g>
  );
}

export function CelebrationScene({ index }: { index: number }) {
  if (index === 0)
    return (
      <g>
        <defs>
          <radialGradient id="celebration-warmth">
            <stop stopColor="#ebc576" stopOpacity=".22" />
            <stop offset="1" stopColor="#ebc576" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          className="celebration-glow"
          cx="200"
          cy="145"
          rx="177"
          ry="88"
          fill="url(#celebration-warmth)"
          stroke="none"
        />
        <path
          d="M178 18L84 162Q200 197 316 162L225 18Z"
          fill="#d9ba7a"
          stroke="none"
          opacity=".055"
        />
        <WeddingTable />
        <g className="reflection-question" stroke="#efdaad">
          <path
            d="M174 41C174 14 226 11 228 38C231 60 200 60 200 79"
            strokeWidth="5"
          />
          <circle cx="200" cy="94" r="3" fill="#efdaad" stroke="none" />
          <path
            d="M152 45Q150 17 177 10M239 31Q253 61 227 77"
            strokeWidth="1"
            opacity=".25"
          />
        </g>
      </g>
    );
  if (index === 3)
    return (
      <g>
        <defs>
          <radialGradient id="clean-table-light">
            <stop stopColor="#f2d99a" stopOpacity=".25" />
            <stop offset="1" stopColor="#f2d99a" stopOpacity=".035" />
          </radialGradient>
        </defs>
        <ellipse
          className="clean-light"
          cx="200"
          cy="139"
          rx="151"
          ry="96"
          fill="url(#clean-table-light)"
          stroke="#dec18a"
          strokeOpacity=".5"
        />
        <WeddingTable />
        <g
          className="table-smoke table-smoke-left"
          stroke="#788588"
          fill="#33433f"
          opacity=".7"
        >
          <path
            d="M14 165Q-2 143 16 120Q35 101 19 78Q0 59 15 42M30 173Q14 157 33 142Q47 125 32 108"
            strokeWidth="9"
            opacity=".25"
          />
          <path
            d="M17 111V76L39 69V102M17 82L39 75"
            strokeWidth="3"
            fill="none"
          />
          <ellipse cx="11" cy="113" rx="7" ry="5" />
          <ellipse cx="33" cy="104" rx="7" ry="5" />
        </g>
        <g
          className="table-smoke table-smoke-right"
          stroke="#788588"
          fill="#33433f"
          opacity=".7"
        >
          <path
            d="M379 163Q396 141 379 122Q365 109 383 88Q398 68 383 43M363 180Q384 163 371 145"
            strokeWidth="9"
            opacity=".25"
          />
          <path d="M359 82H387L383 106Q373 122 363 106ZM373 115V141M361 142H385" />
          <path d="M361 93H385" opacity=".6" />
        </g>
      </g>
    );
  if (index === 5)
    return (
      <g>
        <defs>
          <radialGradient id="marriage-dawn">
            <stop stopColor="#e9be73" stopOpacity=".3" />
            <stop offset="1" stopColor="#e9be73" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="marriage-road" x2="0" y2="1">
            <stop stopColor="#d8b77b" stopOpacity=".15" />
            <stop offset="1" stopColor="#d8b77b" stopOpacity=".03" />
          </linearGradient>
        </defs>
        <ellipse
          className="horizon-glow"
          cx="200"
          cy="80"
          rx="149"
          ry="77"
          fill="url(#marriage-dawn)"
          stroke="none"
        />
        <path d="M175 82A25 25 0 0 1 225 82" fill="#dfb778" stroke="none" />
        <path d="M35 85Q102 73 160 85H240Q301 73 365 85" opacity=".4" />
        <path
          d="M196 86L122 166H278L204 86Z"
          fill="url(#marriage-road)"
          strokeOpacity=".4"
        />
        <path
          className="horizon-road"
          d="M200 96V104M200 114V126M200 138V154"
          strokeOpacity=".5"
        />
        <path d="M92 177L278 166L319 211L112 226Z" fill="#44573e" />
        <path
          d="M106 182L270 174L301 207L121 218Z"
          stroke="#b59e71"
          strokeWidth="1"
        />
        <path
          d="M131 212L148 201M260 177L272 189M134 183L146 189M273 205L260 213"
          opacity=".45"
        />
        <path d="M200 101V117" />
        <path d="M193 117H207L211 138H189Z" fill="#d5b575" />
        <circle
          className="celebration-glow"
          cx="200"
          cy="127"
          r="31"
          fill="#e3c57e"
          stroke="none"
          opacity=".14"
        />
        {[
          [139, 166],
          [169, 154],
          [231, 154],
          [264, 166],
        ].map(([x, y], i) => (
          <g
            key={x}
            fill={i === 1 || i === 2 ? "#8b9b76" : "#627956"}
            stroke="none"
          >
            <circle cx={x} cy={y} r="7" />
            <path
              d={`M${x - 12} ${y + 31}Q${x - 14} ${y + 10} ${x} ${y + 10}Q${x + 14} ${y + 10} ${x + 12} ${y + 31}Z`}
            />
            <ellipse cx={x} cy={y + 32} rx="17" ry="5" />
          </g>
        ))}
        <g className="marriage-hands" stroke="#d6bc8c" strokeWidth="1.5">
          <path
            d="M171 191L183 177Q187 173 192 178L201 185L211 178Q216 175 220 180L231 193L221 201L210 188L202 194Q199 197 195 192L187 186L179 200Z"
            fill="#cfb58a"
          />
          <path
            d="M191 178L198 176Q201 174 205 178L214 185Q217 191 211 192L202 185L197 187"
            fill="#e4cfaa"
          />
        </g>
      </g>
    );
  return null;
}
