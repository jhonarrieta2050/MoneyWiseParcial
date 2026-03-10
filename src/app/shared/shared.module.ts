import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { EmptyStateComponent } from './components/empy-state/empty-state.component';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { PhotoGalleryModalComponent } from './components/photo-gallery-modal/photo-gallery-modal.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';
import { ProgressBarCategoryComponent } from './components/progres-bar-category/progress-bar-category.component';
import { TransactionDetailComponent } from './components/transaction-detail/transaction-detail.component';
import { TransactionFormComponent } from './components/transaction-form/transaction-form.component';
import { MonthNamePipe } from './pipes/month-name.pipe';
import { CategoryColorPipe } from './pipes/category-color.pipe';
import { CurrencyFormatPipe } from './pipes/currency-format.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';
import { FilterByCategoryPipe } from './pipes/filter-by-category.pipe';
import { CategoryIconPipe } from './pipes/category-icon.pipe';
import { SearchByTextPipe } from './pipes/search-by-text.pipe';
import { AmountDisplayComponent } from './components/amount-display/amount-display.component';
import { SelectFieldComponent } from './components/select-field/select-field.component';
import { DateFieldComponent } from './components/date-field/date-field.component';
import { TransactionItemComponent } from './components/transaction-item/transaction-item';
import { PhotoSelectorComponent } from './components/photo-selector/photo-selector';
import { CategoryBadgeComponent } from './components/category-badge/category-badge.component';
import { CategoryIconComponent } from './components/category-icon/category-icon.component';
import { InputFieldComponent } from './components/input-field/input-field.component';


const COMPONENTS = [
  DashboardCardComponent,
  ProgressBarCategoryComponent,
  TransactionItemComponent,
  TransactionDetailComponent,
  TransactionFormComponent,
  FilterBarComponent,
  PhotoSelectorComponent,
  PhotoPreviewComponent,
  PhotoGalleryModalComponent,
  CategoryBadgeComponent,
  CategoryIconComponent,
  AmountDisplayComponent,
  EmptyStateComponent,
  InputFieldComponent,
  SelectFieldComponent,
  DateFieldComponent,
];

const PIPES = [
  CurrencyFormatPipe,
  DateFormatPipe,
  FilterByTypePipe,
  FilterByCategoryPipe,
  SearchByTextPipe,
  MonthNamePipe,
  CategoryIconPipe,
  CategoryColorPipe,
];

@NgModule({
    declarations: [...COMPONENTS, ...PIPES],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        ...COMPONENTS,
        ...PIPES
    ]
})
export class SharedModule { }