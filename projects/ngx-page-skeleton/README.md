# ngx-page-skeleton

An Angular page container providing slots for header, sidebar and content.

![example image](https://raw.githubusercontent.com/shaman-apprentice/ngx-page-skeleton/refs/tags/v0.1.0/docs/demo.excalidraw.png)

## How to use

```bash
npm install @shaman-apprentice/ngx-page-skeleton
```

See [demo app](https://github.com/shaman-apprentice/ngx-page-skeleton/tree/main/projects/demo/src/app) for example usage.

### Slots of `ngx-page-skeleton`

| select |
| --- |
| `[ngxpageskeleton_header]` |
| `[ngxpageskeleton_sidebar]` |
| `[ngxpageskeleton_sidebar_border]` |
| `[ngxpageskeleton_sidebar_content]` |

### Inputs of `ngx-page-skeleton`

| name | type | default |
| --- | --- | --- |
| `disableDragging` | `input<boolean>` | `false` |
| `isSidebarOpen` | `input<boolean>` | `false` |
| `sidebarMinWidthInPx` | `input<number>` | `240` |
| `sidebarWidthInPx` | `model<number>` | `320` |

### CSS variables

| name | default |
| --- | --- |
| `--ngx-page-skeleton_header-height` | `48px` |
| `--ngx-page-skeleton_sidebar_border-width` | `1px` |
| `--ngx-page-skeleton_transition-duration` | `0.3s` |
| `--ngx-page-skeleton_transition-timing-function` | `ease-in-out` |

### HTML attributes of `ngx-page-skeleton`

| name | description |
| --- | --- |
| `animated` | Opening / closing of sidebar will have a slide animation. Can be customized with css variables.
