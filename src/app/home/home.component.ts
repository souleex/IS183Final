import { Component, OnInit } from '@angular/core';
import { BookService } from '../books/book.service';
import { TankService } from '../tanks/tank.service';
import { UserService } from '../users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  books: Array<object>;
  users: Array<object>;
  tanks: Array<object>;

  constructor(
    private bookService: BookService,
    private tankService: TankService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getBooks();
    this.getTanks();
    this.getUsers();
  }

  getBooks() {
    this.bookService.getBooks().then((resp) => {
      this.books = resp;
    });
  }
  getTanks() {
    this.tankService.getTanks().then((resp) => {
      this.tanks = resp;
    });
  }
  getUsers() {
    this.userService.getUsers().then((resp) => {
      this.users = resp;
    });
  }

}
