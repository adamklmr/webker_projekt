import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup,Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatOptgroup, MatOption, MatSelect } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { Product } from '../../shared/models/Product';
import { Event } from '../../shared/models/Event';
import {MatTimepickerModule} from '@angular/material/timepicker';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatOption,
    MatSelectModule,
    MatTimepickerModule,
    MatDatepickerModule,
    MatIconModule,
    MatTableModule,
    MatCheckboxModule,
  ]
})
export class AdminComponent implements OnInit {
  @Input() title: string = 'Admin Page';
  @Output() productAdded = new EventEmitter<Product>();
  @Output() eventAdded = new EventEmitter<Event>();

  ProductsdisplayedColumns: string[] = ['instock','name', 'category','price','description'];
  EventsdisplayedColumns: string[] = ['name', 'startDate','endDate', 'location', 'description'];

  eventForm!: FormGroup;
  productForm!: FormGroup;
  form: FormGroup;

products: Product[] = [
  {
    id: 1,
    name: 'ORso',
    category: 'Orsók',
    instock: true,
    price: 1200,
    pic: '',
    description: 'Nagyon menő oro termék, ami mindenki kedvence!'
  },
  {
    id: 2,
    name: 'Ruhadarab',
    category: 'Ruházat',
    instock: true,
    price: 8000,
    pic: '',
    description: 'Egy nagyon szép ruhadarab, ami mindenki kedvence!'
  }
];
events: Event[] = [
  {
    id: 3,
    name: 'Horgászat',
    startDate: new Date('2023-09-01'),
    endDate: new Date('2023-09-09'),
    location: 'Tópart',
    description: 'Egy szuper horgásztúra!'
  },
  {
    id: 4,
    name: 'Horgászverseny',
    startDate: new Date('2024-09-01'),
    endDate: new Date('2024-09-09'),
    location: 'Tópart',
    description: 'Egy izgalmas horgászverseny!'
  }
];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      listingItem: ['products'], // alapértelmezés: termékek
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }
  initializeForm(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productPrice: ['', [Validators.required, Validators.min(0)]],
      productImage: [''],
      productDescription: ['', Validators.maxLength(500)],
    });

    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventStartDate: [new Date(), Validators.required],
      eventEndDate: [new Date(), Validators.required],
      eventLocation: ['', Validators.required],
      eventDescription: ['', Validators.maxLength(500)],
    });
  }
  addProduct(): void {
    if (this.productForm.valid) {
      const formValue = this.productForm.value;
      
      const newProduct: Product = {
        id: this.products.length + 1,
        name: formValue.productName,
        category: formValue.productCategory,
        instock: true,
        price: formValue.productPrice,
        pic: formValue.productImage,
        description: formValue.productDescription,
      };
      
      this.products = [...this.products, newProduct];
      this.productAdded.emit(newProduct);
    } else {
      Object.keys(this.productForm.controls).forEach(key => {
        const control = this.productForm.get(key);
        control?.markAsTouched();
      });
    }
  }

  addEvent() {
    if (this.eventForm.valid) {
      const formValue = this.eventForm.value;
      
      const newEvent: Event = {
        id: this.events.length + 1,
        name: formValue.eventName,
        startDate: formValue.eventStartDate,
        endDate: formValue.eventEndDate,
        location: formValue.eventLocation,
        description: formValue.eventDescription,
      };
      
      this.events = [...this.events, newEvent];
      this.eventAdded.emit(newEvent);
    } else {
      Object.keys(this.eventForm.controls).forEach(key => {
        const control = this.eventForm.get(key);
        control?.markAsTouched();
      });
    }
  }
  toggleProductCompletion(product: Product): void {
    product.instock = !product.instock;
  }
  // onFileSelected(event: any) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       const base64Image = reader.result as string;
  //       this.productForm.patchValue({
  //         productImage: base64Image
  //       });
  //     };
  //     reader.readAsDataURL(file); // base64 formátumra alakítás
  //   }
  // }
  
}
