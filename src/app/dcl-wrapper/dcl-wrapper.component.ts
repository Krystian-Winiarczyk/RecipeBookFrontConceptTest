import { NgModule, Component, Compiler, ViewContainerRef, ViewChild, Input, ComponentRef, ComponentFactory, ComponentFactoryResolver, ChangeDetectorRef } from '@angular/core'

@Component({
  selector: 'dcl-wrapper',
  template: `<div #target></div>`
})
export class DclWrapperComponent {
  @ViewChild('target', { read: ViewContainerRef, static: false }) target;
  @Input() type;
  @Input() id;
  @Input() currentPos;
  cmpRef: ComponentRef<any>;
  private isViewInitialized: boolean = false;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private compiler: Compiler,
              private cdRef: ChangeDetectorRef) { }

  updateComponent(updateFinalElementId: boolean = true) {
    if (!this.isViewInitialized) {
      return;
    }
    if (updateFinalElementId) {
      if (this.cmpRef) {
        this.cmpRef.destroy();
      }

      let factory = this.componentFactoryResolver.resolveComponentFactory(this.type);
      this.cmpRef = this.target.createComponent(factory);
      this.cmpRef.instance.id = this.id;
    }
    this.cmpRef.instance.currentPos = this.currentPos;
    this.cdRef.detectChanges();
  }

  ngOnChanges() {
    this.updateComponent(false);
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.updateComponent();
  }

  ngOnDestroy() {
    if (this.cmpRef) {
      this.cmpRef.destroy();
    }
  }
}
