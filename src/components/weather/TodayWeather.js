import {Component} from '@core/Component';

export class TodayWeather extends Component {
  static className = 'today-weather';

  constructor($root, options = {}) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
      ...options,
    });
  }

  prepare() {
    // this.onInput = debounce(this.onInput, 300);
  }

  toHTML() {
    return `
        <h2 class="region">
          <span class="region__city voice-en en active-lang">
            this.city.en,
          </span>
          <span class="region__city voice-ru ru none">
            'this.city.ru},
          </span>
          <span class="region__city be none">
            'this.city.be},
          </span>
          <span class="region__country voice-en en active-lang">
            'this.country.en}
          </span>
          <span class="region__country voice-ru ru none">
            'this.country.ru}
          </span>
          <span class="region__country be none">
            'this.country.be}
          </span>
        </h2>

        <div class="data-time">
          <div class="data">               
            <span class="data voice-en en active-lang">
              'this.date.en}
            </span>            
            <span class="data voice-ru ru none">
              'this.date.ru}
            </span>
            <span class="data be none">'this.date.be}</span>
          </div>
          <span class="time"></span>
        </div> 

        <div class="temp-today">
          <p class="temp-today__degrees">
            <span class="temp-today__degree voice-en voice-ru degrees">
              120
              <!-- 'this.temp} -->
            </span><sup class="voice-en voice-ru">°</sup>
            <i class="temp-today__icon">
              <!-- 'this.weather_icon.getTemplate()} -->
            </i>
          </p>

          <div class="temp-today__desc">
            <span class="temp-today__type voice-en en active-lang">
              'this.weather.en}
            </span>
            <span class="temp-today__type voice-ru ru none">
              'this.weather.ru}</span>
            <span class="temp-today__type be none">
              'this.weather.be}
            </span>
            <p class="temp-today__feels">
              <span class="temp-today__feels-desc voice-en en active-lang">
                Feels like:
              </span>
              <span class="temp-today__feels-desc voice-ru ru none">
                Чувствуется, как:
              </span>
              <span class="temp-today__feels-desc be none">
                Адчуваецца, як:
              </span>
              <span class="temp-today__feels-value">
              <span class="degrees voice-en voice-ru">
                'this.feelsLike}</span><sup class="voice-en voice-ru">°</sup>
              </span>
            </p>
            <p class="temp-today__wind">
              <span class="temp-today__wind-desc voice-en en active-lang">
                Wind:
              </span>
              <span class="temp-today__wind-desc voice-ru ru none">
                Ветер:
              </span>
              <span class="temp-today__wind-desc be none">
                Вецер:
              </span>
              <span class="temp-today__wind-value">
                <span class="voice-en voice-ru">'this.wind}</span>
                <span class="en voice-en active-lang">m/s</span>
                <span class="ru voice-ru none">м/с</span>
                <span class="be none">м/с</span>
              </span>
            </p>
            <p class="temp-today__humidity">
              <span class="temp-today__humidity-desc voice-en en active-lang">
                Humidity:
              </span>
              <span class="temp-today__humidity-desc voice-ru ru none">
                Влажность:
              </span>
              <span class="temp-today__humidity-desc be none">
                Вільготнасць:
              </span>
              <span class="temp-today__humidity-value voice-en voice-ru">
                'this.humidity}%
              </span>
            </p>
          </div>            
        </div>

        <div class="week-days-temp">
          <div class="week-temperature__day-temp">
            <span class="week-days-temp__day-name en active-lang">
              Monday
              <!-- 'this.weekday_0.dayNamesObj.en} -->
            </span>
            <span class="week-days-temp__day-name ru none">
              'this.weekday_0.dayNamesObj.ru}
            </span>
            <span class="week-days-temp__day-name be none">
              'this.weekday_0.dayNamesObj.be}
            </span>
            <p class="week-days-temp__degrees">
              <span class="week-days-temp__degree degrees">
                120
                <!-- 'Math.floor(this.weekday_0.temp.day)} -->
              </span><sup>°</sup>
              <i class="week-days-temp__icon">
                <!-- 'this.weekday_0_icon.getTemplate()} -->
              </i>
            </p>
          </div>

          <div class="week-temperature__day-temp">
            <span class="week-days-temp__day-name en active-lang">
              Monday
              <!-- 'this.weekday_1.dayNamesObj.en} -->
            </span>
            <span class="week-days-temp__day-name ru none">
              'this.weekday_1.dayNamesObj.ru}
            </span>
            <span class="week-days-temp__day-name be none">
              'this.weekday_1.dayNamesObj.be}
            </span>
            <p class="week-days-temp__degrees">
              <span class="week-days-temp__degree degrees">
                120
                <!-- 'Math.floor(this.weekday_1.temp.day)} -->
              </span><sup>°</sup>
              <i class="week-days-temp__icon">
                <!-- 'this.weekday_1_icon.getTemplate()} -->
              </i>
            </p>
          </div>

          <div class="week-temperature__day-temp">
            <span class="week-days-temp__day-name en active-lang">
              Monday
              <!-- 'this.weekday_2.dayNamesObj.en} -->
            </span>
            <span class="week-days-temp__day-name ru none">
              'this.weekday_2.dayNamesObj.ru}
            </span>
            <span class="week-days-temp__day-name be none">
              'this.weekday_2.dayNamesObj.be}
            </span>
            <p class="week-days-temp__degrees">
              <span class="week-days-temp__degree degrees">
                120
                <!-- 'Math.floor(this.weekday_2.temp.day)} -->
              </span><sup>°</sup>
              <i class="week-days-temp__icon">
                <!-- 'this.weekday_2_icon.getTemplate()} -->
              </i>
            </p>
          </div>
        </div>`.trim();
  }

  onInput(event) {
    console.log('onInput');
    console.log(event);
  }

  onClick(event) {
    console.log(event);
    // const $target = $(event.target);
  }
}
