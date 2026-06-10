# Skipped M3 components

These Material Design 3 components are intentionally not implemented in Reka + M3.

| M3 component | Reason |
|--------------|--------|
| Loading indicator | No Reka spinner primitive |
| Navigation bar | Layout pattern; no Reka primitive |
| Navigation rail | Layout pattern; no Reka primitive |
| App bars | No Reka app bar (`M3Toolbar` covers action rows only) |
| Badges | Presentational |
| Cards | Presentational surface |
| Carousel | No Reka carousel |
| Lists | Semantic HTML; consumers style with tokens |

Consumers can build these patterns with M3 theme tokens (`--md-sys-*`), Tailwind utilities, and semantic HTML.
