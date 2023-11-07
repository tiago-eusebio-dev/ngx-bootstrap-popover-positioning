import { Component, ViewChild } from '@angular/core';
import { PopoverDirective, PopoverModule } from 'ngx-bootstrap/popover';

@Component({
  standalone: true,
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
  imports: [PopoverModule],
  providers: [PopoverDirective],
})
export class PopoverComponent {
  @ViewChild('myPopover', { static: false })
  private _myPopover: PopoverDirective;

  private _isPopoverOpen = false;

  /**
   * Toggles the calendar open state.
   */
  protected onToggleCalendar(): void {
    this._isPopoverOpen = !this._isPopoverOpen;

    if (this._isPopoverOpen) {
      this._myPopover.show();
    } else {
      this.onDismiss();
    }
  }

  /** Closes the calendar popover. */
  protected onDismiss(): void {
    this._myPopover?.hide();
  }

  /**
   * The action to run when the calendar popover is hidden.
   */
  protected onPopoverHide(): void {
    this._isPopoverOpen = false;
  }
}
