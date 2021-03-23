import { Link } from "react-router-dom";
import Video from "./Video";
// import main_image from '../../assets/main_image.jpg'

export default function MainPage() {
  return (
    <div className="main_page_wrapper">
      <section className="main_page_about">
       
        <div className="about_text">
        <h1>Welcome to RS Lang!</h1>
        <p>
          RS Lang - это уникальное приложение для изучения английского.
          Увлекательные игры для тренировки слов и метод интервального
          повторения для запоминания слов навсегда.
        </p>
          </div>
          <div className="about_cards">

          </div>
      </section>
      <section className="main_page_video"><Video></Video></section>
      <section className="main_page_team">team - to do</section>
    </div>
  );
}
