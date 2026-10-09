import { CelebrationScene } from "./CelebrationScenes";

export function PerspectiveScene({ index }: { index: number }) {
  if (index === 0 || index === 3 || index === 5)
    return <CelebrationScene index={index} />;

  if (index === 1)
    return (
      <g>
        <defs>
          <radialGradient id="tent-blessing">
            <stop stopColor="#efd08c" stopOpacity=".28" />
            <stop offset="1" stopColor="#efd08c" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          className="tent-glow"
          cx="200"
          cy="146"
          rx="174"
          ry="101"
          fill="url(#tent-blessing)"
          stroke="none"
        />
        {Array.from({ length: 24 }, (_, i) => (
          <circle
            className="tent-star"
            key={i}
            cx={28 + ((i * 71) % 344)}
            cy={16 + ((i * 29) % 100)}
            r={i % 4 === 0 ? 1.8 : 1}
            fill="#e7d7ad"
            stroke="none"
            style={{ animationDelay: `${i * 0.23}s` }}
          />
        ))}
        <path
          d="M305 25A15 15 0 1 0 325 45A19 19 0 0 1 305 25Z"
          fill="#d9c89e"
          stroke="none"
        />
        <path d="M33 202Q111 185 190 202Q276 181 369 203" opacity=".35" />
        <path d="M128 181L200 118L272 181M148 177V200M252 177V200M200 118V200" />
        <path d="M128 181L200 118L184 186Z" fill="#607052" />
        <path d="M200 118L272 181L216 186Z" fill="#394d37" />
        <path d="M115 168L135 194M285 168L265 194" opacity=".5" />
        {[151, 249].map((x) => (
          <g key={x}>
            <path d={`M${x} 167V177`} />
            <rect
              x={x - 5}
              y="177"
              width="10"
              height="15"
              rx="3"
              fill="#d3b575"
            />
            <circle
              className="tent-lantern"
              cx={x}
              cy="184"
              r="15"
              fill="#edc679"
              stroke="none"
              opacity=".15"
            />
          </g>
        ))}
        <ellipse cx="200" cy="207" rx="23" ry="5" fill="#b49968" />
        {[163, 184, 216, 237].map((x, i) => (
          <g key={x} fill="#7f916e" stroke="#7f916e">
            <circle cx={x} cy={i === 0 || i === 3 ? 198 : 191} r="5" />
            <path
              d={`M${x - 7} 216Q${x - 7} ${i === 0 || i === 3 ? 202 : 195} ${x} ${i === 0 || i === 3 ? 202 : 195}Q${x + 7} ${i === 0 || i === 3 ? 202 : 195} ${x + 7} 216Z`}
            />
          </g>
        ))}
      </g>
    );

  if (index === 2)
    return (
      <g>
        <path d="M200 56V207M171 211H229L215 194H185Z" fill="#506047" />
        <g className="scale-beam">
          <path d="M78 72H322" strokeWidth="5" />
          <circle cx="200" cy="72" r="8" fill="#d8bd82" />
          <g className="scale-load scale-excess">
            <path
              d="M88 72L52 172M88 72L124 172M48 172Q88 198 128 172Z"
              fill="#344438"
            />
            <path
              d="M60 164V143H115V164ZM68 143V123H107V143ZM76 123V106H100V123Z"
              fill="#a18a67"
            />
            <path
              d="M60 148Q70 157 79 148Q89 157 99 148Q108 157 115 148M69 129H107"
              stroke="#e4cf9e"
            />
            <path d="M88 106V99" />
          </g>
          <g className="scale-load scale-modest">
            <path
              d="M312 72L276 172M312 72L348 172M272 172Q312 198 352 172Z"
              fill="#344438"
            />
            <ellipse cx="312" cy="163" rx="24" ry="6" fill="#8f9f73" />
            <path
              d="M298 161Q298 144 314 148Q322 148 325 161Z"
              fill="#c2aa76"
            />
            <path d="M331 145V161H339V145Z" fill="#607954" />
          </g>
        </g>
        <path d="M26 222H374" opacity=".3" />
        <path
          className="scale-crack"
          d="M70 227L84 234L72 242L91 250L81 264M84 234L108 237L122 246M91 250L110 256"
          stroke="#d3ad75"
        />
      </g>
    );

  if (index === 4)
    return (
      <g>
        <defs>
          <clipPath id="vessel-interior">
            <path d="M165 77Q169 108 148 140Q132 176 161 202Q200 222 239 202Q268 176 252 140Q231 108 235 77Z" />
          </clipPath>
          <linearGradient id="vessel-gold" x2="0" y2="1">
            <stop stopColor="#fff1b5" />
            <stop offset="1" stopColor="#c7973c" />
          </linearGradient>
        </defs>
        <path
          className="vessel-inflow"
          d="M192 16L190 83H210L208 16Z"
          fill="url(#vessel-gold)"
          stroke="none"
          opacity=".6"
        />
        <path
          className="vessel-spotlight"
          d="M336 22L245 201L151 115Z"
          fill="#d2d9d2"
          stroke="none"
          opacity=".12"
        />
        <path d="M327 14L348 28L335 48L314 34Z" fill="#53645a" />
        <path d="M339 27L360 12" />
        <path
          d="M158 72Q161 108 139 139Q120 181 155 210Q200 234 245 210Q280 181 261 139Q239 108 242 72Z"
          fill="#273e31"
        />
        <g clipPath="url(#vessel-interior)">
          <rect
            className="vessel-light"
            x="132"
            y="82"
            width="136"
            height="134"
            fill="url(#vessel-gold)"
            stroke="none"
          />
        </g>
        <ellipse cx="200" cy="72" rx="43" ry="9" fill="#384b34" />
        <ellipse cx="200" cy="72" rx="29" ry="4" fill="#dbbe83" />
        <path
          d="M158 85Q200 99 242 85M146 136Q200 161 254 136M150 192Q200 216 250 192"
          opacity=".7"
        />
        {[164, 200, 236].map((x) => (
          <path key={x} d={`M${x} 150l-7 12l7 12l7-12Z`} opacity=".6" />
        ))}
        <path
          className="vessel-cracks"
          d="M250 138L235 155L243 165L226 188L230 204M148 172L164 183L157 199"
          stroke="#f2d18b"
        />
        <g className="vessel-leak" fill="#efc96e" stroke="none">
          <path d="M240 168Q279 181 285 218Q269 204 240 177Z" />
          <path d="M159 190Q125 208 121 227Q137 212 161 198Z" />
          <circle cx="290" cy="226" r="3" />
          <circle cx="115" cy="231" r="2" />
        </g>
        <path d="M174 222H226" strokeWidth="4" />
      </g>
    );
  return null;
}
