import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-img-viewer',
  templateUrl: './img-viewer.component.html',
  styleUrls: ['./img-viewer.component.scss']
})
export class ImgViewerComponent implements OnInit {
  @Input() image: any
  result:any
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit(): void {
    let TYPED_ARRAY = new Uint8Array(this.image)
    const STRING_CHAR = TYPED_ARRAY.reduce((data, byte) => {
      return data + String.fromCharCode(byte);
    }, '')
    // btoa(STRING_CHAR) Buffer.from(str, 'base64') andbuf.toString('base64')
    // let buffer = Buffer.from(STRING_CHAR, 'base64')
    let b64String = btoa(STRING_CHAR)
    this.result = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + b64String)
  }

}
