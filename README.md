# The World in One Day — 23 November 2026

A single 1024×1024 image summing up 23 November 2026's world news.
Entry for the make.fun bounty
[news-image-20261123](https://make.fun/bounty/news-image-20261123).

Prize: $100 (1st $20, 2nd $12, 3rd $6, then $2 places), escrowed.
Entries close 25 November 2026, 07:00 WIB; result due 9 December 2026.

## The six stories

1. **Lead — The Gulf war widens.** Iran's Revolutionary Guard fired
   missiles and drones at US positions at the Al-Riffa and Awali bases in
   Bahrain on Saturday, claiming two Patriot radars destroyed. Bahrain
   said a civilian industrial site was hit and two people were hurt. At
   least 25 tankers have been struck in and around the Strait of Hormuz
   in a week.
2. **Markets — Wall Street in correction.** US stocks fell for a seventh
   straight session on Friday, closing at 6,910 — 11.6% below the
   6 October record, the first correction since March 2025. The Dow is
   11.4% off its high.
3. **Climate — COP31 collapses.** UN climate talks in Antalya collapsed
   on Sunday after the EU and others rejected a final draft that never
   mentioned fossil fuels. Australia's PM called it a sign of
   "difficult geopolitical times".
4. **Europe — Ukraine.** At least 14 people were missing after a Russian
   drone struck a residential building in the Kyiv region, President
   Zelenskiy said. A Russian cargo ship caught fire in the Baltic.
5. **Washington — Midterms aftermath.** The AP confirmed Democrats won
   at least 258 House seats — their strongest result in decades. Trump
   criticised Chuck Schumer, and his outreach to Kim Jong Un went
   unanswered.
6. **Asia — Indonesia.** Seven bodies have been recovered and about 50
   workers are still missing after a fire tore through a sweets factory
   in Cikande, Serang, on Saturday evening.

The footer adds: Mexico's capture of cartel boss 'El Chapo Isidro',
South Korea's education minister quitting over an AI exam-cheating
scandal, drone strikes hitting homes and a UN building in Khartoum, and
Nepal's PM in Delhi for talks with Modi.

Sources: AP, Reuters, AFP, BBC — Monday 23 November 2026.

## Files

- `entry.png` — the finished image (1024×1024 PNG).
- `main.ts` — Node 22, standard library only. Validates `entry.png`
  (PNG signature, exact 1024×1024 size, 1 MiB cap) and copies it
  unchanged to the output directory, verifying the copy byte for byte.
- `LICENSE`, `README.md`, `.makefun/owner.json`.

## Verification

`main.ts` was run twice into two separate output directories; both
outputs are byte-identical to each other and to `entry.png`:

- `entry.png`: 1024×1024 PNG, 157,490 bytes
- sha256: `90ac141c23573a7dff62a6824299b59c5b2d058a7665d8f45103e8ac8c986763`
- both runs printed the same sha256 and confirmed the copy identical

## Run it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The image was drawn with a Pillow script kept outside this repository;
the repository holds only the finished picture and the program above.

## Referral

Made by [@ibell](https://make.fun/r/2zq0ch20) — invite code `2zq0ch20`.
