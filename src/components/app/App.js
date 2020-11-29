import {$} from '@core/dom';
import {Header} from '@/components/header/Header';
import {TodayWeather} from '@/components/weather/TodayWeather';
import {Geolocation} from '@/components/geolocation/Geolocation';

export class App {
  constructor(selector) {
    this.$el = $(selector);
    this.$content = $.create('main', 'main-content container');
    this.$weatherBlock = $.create('div', 'weather');
  }

  getHeader() {
    const $el = $.create(Header.wrapper, Header.className);
    const component = new Header($el);
    return $el.html(component.toHTML());
  }

  getWeather() {
    const $el = $.create('div', TodayWeather.className);
    const component = new TodayWeather($el);
    this.$weatherBlock.append($el.html(component.toHTML()));
    return this.$weatherBlock;
  }

  getGeolocation() {
    const $el = $.create('div', Geolocation.className);
    const component = new Geolocation($el);
    return $el.html(component.toHTML());
  }

  getContent() {
    this.$content.append(this.getWeather());
    this.$content.append(this.getGeolocation());
    return this.$content;
  }

  render() {
    this.$el.append(this.getHeader());
    this.$el.append(this.getContent());
  }

  init() {
    // this.components.forEach((component) => component.init());
  }
}
