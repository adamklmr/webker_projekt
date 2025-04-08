export interface Event {
    id: number;
    name: string;
    startDate: Date;
    endDate: Date;
    location: string;
    description?: string;
  }

  export const EventObject = [
    {
        'id': 3,
        'name': 'Horgászat',
        'startDate': new Date('2023-09-01'),
        'endDate': new Date('2023-09-09'),
        'location': 'Tópart',
        'description': 'Egy szuper horgásztúra!'
    },
    {
        'id': 4,
        'name': 'Horgászverseny',
        'startDate': new Date('2024-09-01'),
        'endDate': new Date('2024-09-09'),
        'location': 'Tópart',
        'description': 'Egy izgalmas horgászverseny!'
    }
];