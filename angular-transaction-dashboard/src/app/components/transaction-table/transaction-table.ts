import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-table.html',
  styleUrls: ['./transaction-table.scss'],
})
export class TransactionTable implements OnInit {
  transactions: Transaction[] = [
    {
      id: '25843594321',
      date: '10/09/24 18:16',
      izId: '1388223',
      phone: '+7 777 777-77-77',
      documentNumber: '25843594321',
      status: 'Пополнение баланса',
      amount: 5.0,
      currency: '₽',
      author: 'Admin1',
      taxStatus: 'Нал.',
      accountType: 'Игровой',
      link: 'Link',
      comment: '--',
    },
    {
      id: '25843594322',
      date: '10/09/24 18:20',
      izId: '1388224',
      phone: '+7 888 888-88-88',
      documentNumber: '25843594322',
      status: 'Списание',
      amount: -5.0,
      currency: '₽',
      author: 'Admin1',
      taxStatus: 'Б.Нал.',
      accountType: 'Бонусный',
      link: 'Link',
      comment: '--',
    },
  ];
  isDropdownOpen: boolean = false;
  selectedPageSize: number = 15;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectPageSize(size: number): void {
    this.selectedPageSize = size;
    this.isDropdownOpen = false;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event): void {
    const target = event.target as HTMLElement;
    const dropdown = target.closest('.page-dropdown');
    if (!dropdown) {
      this.isDropdownOpen = false;
    }
  }

  ngOnInit(): void {
    this.generateMoreData();
  }

  // Моковые данные
  private generateMoreData(): void {
    for (let i = 3; i <= 15; i++) {
      this.transactions.push({
        id: `2584359432${i}`,
        date: '10/09/24 18:16',
        izId: '1388223',
        phone: '+7 777 777-77-77',
        documentNumber: `2584359432${i}`,
        status: 'Пополнение баланса',
        amount: 5.0,
        currency: '₽',
        author: 'Admin1',
        taxStatus: 'Нал.',
        accountType: 'Игровой',
        link: 'Link',
        comment: '--',
      });
    }
  }
}
