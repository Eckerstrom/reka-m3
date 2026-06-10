# Skipped M3 components

These Material Design 3 components are intentionally not implemented in Reka + M3.

| M3 component | Reason |
|--------------|--------|
| Loading indicator | No Reka spinner primitive |
| App bars | `M3TopAppBar` covers basic top app bar; full collapsing variants still skipped |
| Badges | Presentational |
| Cards | Presentational surface |
| Carousel | No Reka carousel |
| Lists | Semantic HTML; consumers style with tokens |

Consumers can build these patterns with M3 theme tokens (`--md-sys-*`), Tailwind utilities, and semantic HTML.
