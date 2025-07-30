import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private mockTransactions: Transaction[] = [
    {
      id: '25843594321',
      date: '10/09/24 18:16',
      izId: '1388223',
      phone: '+7 777 777-77-77',
      documentNumber: '25843594321',
      status: 'Пополнение баланса',
      amount: 5.0,
      currency: 'P',
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
      amount: -10.0,
      currency: 'P',
      author: 'Admin2',
      taxStatus: 'Б.Нал.',
      accountType: 'Бонусный',
      link: 'Link',
      comment: 'Покупка',
    },
  ];

  getTransactions(): Observable<Transaction[]> {
    return of(this.mockTransactions).pipe(
      delay(500) // имитация загрузки
    );
  }
}
