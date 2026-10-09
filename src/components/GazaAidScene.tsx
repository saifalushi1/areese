export function GazaAidScene() {
  return (
    <g>
      <g stroke="#829c79" strokeWidth="2" opacity=".6">
        <path
          d="M595 330V229H638V330M644 330V193H691V330M697 330V247H747V330"
          fill="#233c2d"
        />
        <path d="M609 247H624M609 269H624M609 291H624M658 214H677M658 237H677M658 260H677M658 283H677M710 266H734M710 289H734" />
        <path d="M582 348H763M607 364H744" />
      </g>
      <text
        x="669"
        y="158"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="34"
        letterSpacing="3"
        fill="#d4bd8c"
      >
        GAZA
      </text>
      <path
        className="aid-route"
        d="M109 208Q237 83 438 131Q528 145 584 207"
        stroke="#c5ae7b"
        strokeWidth="2"
        strokeDasharray="7 10"
      />
      <path d="M566 204L585 208L581 188" stroke="#c5ae7b" strokeWidth="3" />
      <g stroke="#c5ae7b" strokeWidth="2">
        <path d="M75 356V302H154V356ZM114 302V356M75 315H154" fill="#31452f" />
        <path
          d="M124 405V353H201V405ZM162 353V405M124 365H201"
          fill="#31452f"
        />
        <path d="M99 332H132M149 383H177" stroke="#94ae83" strokeWidth="4" />
      </g>
      <g
        className="aid-truck"
        stroke="#c5ae7b"
        strokeWidth="2.5"
        strokeLinejoin="round"
      >
        <path d="M227 278H464V404H227Z" fill="#30452f" />
        <path d="M464 313H516L555 355V404H464Z" fill="#657c57" />
        <path d="M479 327H507L535 356H479Z" fill="#13261c" />
        <path d="M225 386H559V409H225Z" fill="#b8a375" />
        <path d="M544 374H555M239 293H451" />
        <circle cx="280" cy="411" r="28" fill="#14251a" />
        <circle cx="504" cy="411" r="28" fill="#14251a" />
        <circle cx="280" cy="411" r="12" stroke="#8eaa79" />
        <circle cx="504" cy="411" r="12" stroke="#8eaa79" />
        <path
          d="M306 269V220H363V269ZM334 220V269M306 233H363M371 269V220H428V269ZM399 220V269M371 233H428"
          fill="#b3a074"
        />
        <path
          d="M328 346C306 330 320 309 334 325C348 309 362 330 340 346L334 351Z"
          fill="#a8be90"
          stroke="none"
        />
        <text
          x="343"
          y="374"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="23"
          fill="#e0d2aa"
          stroke="none"
          letterSpacing="1"
        >
          FOOD &amp; AID
        </text>
      </g>
      <path d="M85 450H750" stroke="#a1b68a" opacity=".3" />
      <path
        d="M552 437H673M623 429L639 437L623 445"
        stroke="#c5ae7b"
        strokeWidth="2"
        opacity=".5"
      />
      <ellipse cx="386" cy="463" rx="192" ry="9" fill="#b7ae85" opacity=".08" />
    </g>
  );
}
