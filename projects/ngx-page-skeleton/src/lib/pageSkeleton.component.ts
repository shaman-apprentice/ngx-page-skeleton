import { ChangeDetectionStrategy, Component, effect, inject, input, model, signal, untracked, ViewEncapsulation } from "@angular/core";
import {CdkDragEnd, CdkDragMove, DragDropModule} from '@angular/cdk/drag-drop';
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "ngx-page-skeleton",
  templateUrl: "pageSkeleton.component.html",
  styleUrl: "pageSkeleton.component.css",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  host: {
    "[attr.dragging]": `isDragging() ? '' : null`
  },
  imports: [
    DragDropModule,
  ]
})
export class NgxPageSkeletonComponent {
  sidebarWidthInPx = model<number>(320);
  sidebarMinWidthInPx = input<number>(240);
  isSidebarOpen = input<boolean>(false);
  disableDragging = input<boolean>(false);

  private document = inject(DOCUMENT);

  protected isDragging = signal(false);

  constructor() {
    effect(() => {
      const width = this.sidebarWidthInPx();
      const minWidth = this.sidebarMinWidthInPx()


      untracked(() => {
        const newWidth = this.calculateWidth(minWidth, width);
        this.document.documentElement.style.setProperty("--ngx-page-skeleton_sidebar-width", newWidth + "px");
      });
    })
  }

  protected handleSidebarResizeStart() {
    this.isDragging.set(true)
  }

  protected handleSidebarResize(event: CdkDragMove) {
    event.source.reset();

    const newWidth = this.calculateWidth(this.sidebarMinWidthInPx(), event.pointerPosition.x);
    this.document.documentElement.style.setProperty("--ngx-page-skeleton_sidebar-width", newWidth + "px");
  }
  
  protected handleSidebarResizeEnd(event: CdkDragEnd) {
    this.isDragging.set(false);
    const newWidth = this.calculateWidth(this.sidebarMinWidthInPx(), event.dropPoint.x);
    this.sidebarWidthInPx.set(newWidth);
  }

  private calculateWidth(minWidth: number, newWidth: number) {
    return Math.max(minWidth, newWidth);
  }
}
