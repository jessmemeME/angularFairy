import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, finalize } from 'rxjs/operators';
import { BriefRepository } from '../../repositories/brief.repository';
import { Category, Segment, Style } from '../../models/category.interface';
@Component({
  selector: 'app-wanted-style',
  templateUrl: './wanted-style.component.html',
  styleUrl: './wanted-style.component.css'
})
export class WantedStyleComponent implements OnInit, OnDestroy{
  categories: Category[] = [];
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(private categoryRepo: BriefRepository) {}

  ngOnInit(): void {
    this.categoryRepo.getAll().pipe(
      tap(() => this.isLoading = true),
      finalize(() => this.isLoading = false),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('🧨 Error desde componente:', err.message)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
