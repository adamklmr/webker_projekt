export interface Event {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    location: string;
    pic: string;
    description?: string;
  }

  export const EventObject = [
    {
        'id': 3,
        'name': 'Horgászat',
        'startDate': new Date('2023-09-01'),
        'endDate': new Date('2023-09-09'),
        'location': 'Tópart',
        'pic': '../../../assets/images/events/horgaszat.jpeg',
        'description': 'Egy szuper horgásztúra!'
    },
    {
        'id': 4,
        'name': 'Horgászverseny',
        'startDate': new Date('2024-09-01'),
        'endDate': new Date('2024-09-09'),
        'location': 'Tópart',
        'pic': '../../../assets/images/events/verseny.jpg',
        'description': 'Egy izgalmas horgászverseny!'
    }
];