export function PerspectiveScene({ index }: { index: number }) {
  if (index === 0)
    return (
      <g>
        <defs>
          <linearGradient id="frame-warm">
            <stop stopColor="#dab86c" stopOpacity=".25" />
            <stop offset="1" stopColor="#dab86c" stopOpacity=".03" />
          </linearGradient>
        </defs>
        <rect x="28" y="24" width="344" height="192" rx="24" fill="#182824" />
        <path
          d="M52 24H200V216H52Q28 216 28 192V48Q28 24 52 24Z"
          fill="url(#frame-warm)"
          stroke="none"
        />
        <path d="M200 40V200" opacity=".3" />
        <g className="frame-joy">
          <circle cx="99" cy="90" r="26" stroke="#e5c77f" strokeWidth="4" />
          <circle cx="133" cy="90" r="26" stroke="#e5c77f" strokeWidth="4" />
          <path d="M123 63L133 53L143 63L133 72Z" fill="#edd9a5" />
          <path
            d="M44 171L75 142Q83 133 93 141L108 154L121 148Q130 144 135 152L153 167L183 180L171 199L144 184L129 188Q120 190 111 183L87 163L59 190"
            fill="#b69a6b"
          />
          <path
            d="M93 141L111 136Q120 131 126 137L143 151Q149 160 139 165L124 154L112 158"
            fill="#d6bd91"
          />
          {[55, 174].map((x) => (
            <g key={x} transform={`translate(${x} 62)`}>
              <path d="M0 15V39M0 29L-10 23M0 33L10 27" stroke="#80946e" />
              <path
                d="M0-8C-16-19-24 0-9 6C-23 17-3 25 0 12C5 26 23 15 10 6C26-1 13-19 0-8Z"
                fill="#d4b681"
              />
              <circle r="4" fill="#f0d998" />
            </g>
          ))}
        </g>
        <g stroke="#8a9f9f" className="frame-waste">
          {[
            [244, 65],
            [259, 45],
            [281, 41],
            [306, 47],
            [318, 66],
            [315, 87],
            [301, 103],
            [285, 113],
            [282, 132],
            [282, 150],
            [282, 181],
          ].map(([x, y], i) => (
            <g key={i} transform={`translate(${x} ${y})`}>
              {i % 3 === 0 ? (
                <>
                  <ellipse rx="10" ry="7" fill="#3a4c4a" />
                  <path d="M-5-1L0-4L5 2L-3 3" strokeWidth="3" />
                </>
              ) : i % 3 === 1 ? (
                <>
                  <path d="M-9 5L-5-7L9-2L6 9Z" fill="#405150" />
                  <path d="M-5-1L5 3M-3-4L0 7" />
                </>
              ) : (
                <>
                  <circle r="8" fill="#2f4140" />
                  <path d="M-6-6L6 6M6-6L-6 6" />
                </>
              )}
            </g>
          ))}
          <path
            d="M226 203L244 193L256 207L270 198L289 209L316 194L344 204"
            opacity=".4"
          />
        </g>
      </g>
    );

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
            <path d="M88 106V99M134 94V110M117 110H151M122 109V121M146 109V121M133 110V126" />
            <circle cx="122" cy="124" r="3" fill="#dbc183" />
            <circle cx="146" cy="124" r="3" fill="#dbc183" />
            <circle cx="133" cy="129" r="3" fill="#dbc183" />
            <path
              d="M26 165L34 143L41 151L47 135L54 155L59 164Z"
              fill="#71815a"
            />
            <path d="M31 145L39 138M44 139L52 133" />
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
          d="M63 211L78 219L67 224L86 229L80 235M78 219L100 218L110 225"
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
