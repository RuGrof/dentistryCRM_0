import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  age: number;
  position: number;
  phone: string;
  adress: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Абдрафигина Елена Серафимовна',    age: 29, phone: 'М:89068686928', adress: 'ул.Татищева,266-6'},
  {position: 2, name: 'Абрамова Альбина Ринатовна',       age: 36, phone: 'М:+79085772416 ', adress: 'г. Озерск ул. Гайдара д. 16 кв. 78'},
  {position: 3, name: 'Адамова Ольга Сергеевна',          age: 11, phone: 'М:+79514686582', adress: 'ул.Братьев Кашириных,124-4  '},
  {position: 4, name: 'Аитова	Алина	Мансуровна',          age: 29, phone: 'М:+79507312876', adress: 'г.Челябинск, ул. Мира 27, кв.116'},
  {position: 5, name: 'Аксарина Алина Эдуардовна',        age: 69, phone: 'М:+79080601001', adress: 'гор. Озерск,ул.Семенова,4-106'},
  {position: 6, name: 'Ал-Насер Мохаммед --',             age: 29, phone: 'М:+79823380387', adress: 'г.Еманжелинск, ул.Победы, 67 '},
  {position: 7, name: 'Алябьева Ирина Дмитриевна',        age: 29, phone: 'М:+79517914609 ', adress: 'ул.Университетская Набережная 103-665'},
  {position: 8, name: 'Андрушкас Павел Сергеевич',        age: 11, phone: 'М:+79512517065 ', adress: 'г.Челябинск, ул. Мира 27, кв.116'},
  {position: 9, name: 'Арателян Аркадий Андрамигович',    age: 29, phone: 'М:+79951057903 ', adress: 'ул.Университетская Набережная 103-665'},
  {position: 10, name: 'Багдасарян Григорий Самвелович',  age: 36, phone: 'М:89227050916 ', adress: 'гор. Тюмень ул. Велижанская 68 к.1 кв.72'},
  {position: 11, name: 'Баженова Ксения Дмитриевна',      age: 29, phone: 'М:89226335986  ', adress: 'ул. Либединского 47 кв.97'},
  {position: 12, name: 'Байдавлетова Анастасия Андреевна',age: 29, phone: 'М:89128066015', adress: 'с Красносельское ул 60 лет ВЛКСМ д 4 кв 2 '},
  {position: 13, name: 'Балакшин Дмитрий Александрович',  age: 29, phone: 'М:89193339505', adress: 'гор. Озерск,ул.Семенова,4-106'},
  {position: 14, name: 'Балахничев Максим Сергеевич    ', age: 36, phone: 'М:+79514809578', adress: 'г.Еманжелинск, ул.Победы, 67 '},
  {position: 15, name: 'Балахничев Сергей Владимирович',  age: 29, phone: 'М:+79127761533 ', adress: 'ул.Братьев Кашириных,124-4  '},
  {position: 16, name: 'Бамесбергер Татьяна Вальтеровна', age: 11, phone: 'М:+79227233193', adress: 'с Красносельское ул 60 лет ВЛКСМ д 4 кв 2 '},
  {position: 17, name: 'Барашев Даниил Игоревич',         age: 29, phone: 'М:+79514712528 ', adress: 'гор. Тюмень ул. Велижанская 68 к.1 кв.72'},
  {position: 18, name: 'Барышников Андрей Андреевич',     age: 36, phone: 'М:89631555585 ', adress: 'г.Челябинск, ул. Мира 27, кв.116'},
  {position: 19, name: 'Бас Ольга Борисовна',             age: 36, phone: 'М:+79128959544 ', adress: 'ул.Университетская Набережная 103-665'},
  {position: 20, name: 'Биттер Данил Максимович ',        age: 29, phone: 'М:+79822777272', adress: 'гор. Озерск,ул.Семенова,4-106'},
];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'age', 'phone', 'adress'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
