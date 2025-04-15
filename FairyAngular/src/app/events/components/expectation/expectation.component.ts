import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap, finalize } from 'rxjs/operators';
import { BriefRepository } from '../../repositories/brief.repository';
import { ExpectationClassification, ExpectationCategory, ExpectationIdea } from '../../models/idea.interface';

@Component({
  selector: 'app-expectation',
  templateUrl: './expectation.component.html',
  styleUrls: ['./expectation.component.css']
})
export class ExpectationComponent implements OnInit, OnDestroy {
  ideas: ExpectationClassification[] = [];
  selectedCategories: { [index: number]: ExpectationCategory } = {};
  isLoading = false;
  private destroy$ = new Subject<void>();

  constructor(private briefRepo: BriefRepository) {}

  ngOnInit(): void {
    this.briefRepo.getAllIdeas().pipe(
      tap(() => this.isLoading = true),
      finalize(() => this.isLoading = false),
      takeUntil(this.destroy$)
    ).subscribe({
      next: (data) => this.ideas = data,
      error: (err) => console.error('🧨 Error desde componente:', err.message)
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onCategorySelect(categoryId: string, classificationIndex: number): void {
    const classification = this.ideas[classificationIndex];

    const selectedCategory = classification.expectationCategories.find(
      cat => cat.name === categoryId
    );
  
    if (selectedCategory) {
      this.selectedCategories[classificationIndex] = selectedCategory;
    } else {
      console.warn('❌ Categoría no encontrada con nombre:', categoryId);
    }
  }
}
