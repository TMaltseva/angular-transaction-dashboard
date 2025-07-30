import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TransactionTable } from './components/transaction-table/transaction-table';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TransactionTable],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('angular-transaction-dashboard');
}
