import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      this.isError = false;
    }, 3000);
  }
  name: string = 'manoj';
  age: number = 23;
  successClass = 'success';
  isError: boolean = true;

  onSubmit() {
    alert('submitted sucessfully!!');
  }
}
