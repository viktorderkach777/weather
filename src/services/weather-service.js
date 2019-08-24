export default class WeatherService {
    tiles = [
        {
            id: 1,
            tempMax: 30,
            tempMin: 20,
            icon: 'https:openweathermap.org/img/w/01d.png',
            day: 'monday'
        },
        {
            id: 2,
            tempMax: 29,
            tempMin: 28,
            icon: 'https:openweathermap.org/img/w/01d.png',
            day: 'monday'
        }

    ];


    getTiles() {
        //return this.tiles;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.75) {
                    reject(new Error('Something bad happened'));
                } else {
                    resolve(this.tiles);
                }
            }, 700);
        });
    }
}